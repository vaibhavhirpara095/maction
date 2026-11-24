import { Resend } from "resend";
import { contactSchema } from "@/lib/validation/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

// Resend requires a verified domain for `from`. `onboarding@resend.dev` works
// without verification and is a safe default until the domain is set up.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Maction Website <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@maction.com";

// Simple in-memory rate limit (per server instance). For multi-instance
// deployments, back this with a shared store (e.g. Upstash Redis).
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const MAX_BODY_BYTES = 32_000;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = hits.get(ip);
    if (!entry || now > entry.resetAt) {
        hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }
    entry.count += 1;
    return entry.count > RATE_LIMIT_MAX;
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
    try {
        const contentType = req.headers.get("content-type")?.split(";")[0].trim();
        if (contentType !== "application/json") {
            return Response.json(
                { success: false, error: "JSON requests are required." },
                { status: 415 }
            );
        }

        const contentLength = Number(req.headers.get("content-length"));
        if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
            return Response.json(
                { success: false, error: "Request is too large." },
                { status: 413 }
            );
        }

        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            req.headers.get("x-real-ip") ||
            "unknown";

        if (isRateLimited(ip)) {
            return Response.json(
                { success: false, error: "Too many requests. Please try again shortly." },
                { status: 429 }
            );
        }

        const rawBody = await req.text();
        if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
            return Response.json(
                { success: false, error: "Request is too large." },
                { status: 413 }
            );
        }

        let json: unknown;
        try {
            json = JSON.parse(rawBody);
        } catch {
            return Response.json(
                { success: false, error: "Invalid JSON body." },
                { status: 400 }
            );
        }

        // Re-validate server-side; the client schema cannot be trusted.
        const parsed = contactSchema.safeParse(json);
        if (!parsed.success) {
            return Response.json(
                { success: false, error: "Invalid submission." },
                { status: 400 }
            );
        }

        const data = parsed.data;

        // Honeypot tripped: pretend success so bots don't learn they were caught.
        if (data.website) {
            return Response.json({ success: true });
        }

        const rows: [string, string][] = [
            ["First Name", data.firstName],
            ["Last Name", data.lastName],
            ["Email", data.email],
            ["Phone", data.phone],
            ["Company", data.company || "Not provided"],
            ["Inquiry", data.inquiry],
            ["Message", data.message || "Not provided"],
        ];

        const html = `
        <h2>New Inquiry</h2>
        ${rows
            .map(
                ([label, value]) =>
                    `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`
            )
            .join("\n")}
      `;

        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            replyTo: data.email,
            subject: `New Contact Inquiry from ${data.firstName} ${data.lastName}`,
            html,
        });

        if (error) {
            console.error("Resend failed to send contact email:", error);
            return Response.json(
                { success: false, error: "Failed to send message." },
                { status: 502 }
            );
        }

        return Response.json({ success: true });
    } catch (error) {
        console.error("Contact route error:", error);
        return Response.json(
            { success: false, error: "Something went wrong." },
            { status: 500 }
        );
    }
}
