import { revalidateTag } from "next/cache";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { serverEnv } from "@/lib/env";

/**
 * Sanity webhook → on-demand revalidation.
 *
 * Configure in Sanity (manage.sanity.io → API → Webhooks):
 *   URL:     https://<your-domain>/api/revalidate
 *   Trigger: Create, Update, Delete
 *   Filter:  _type in ["post", "caseStudy", "author", "category"]
 *   Secret:  same value as SANITY_REVALIDATE_SECRET
 *   Projection: {"_type": _type}
 *
 * Posts/case studies are fetched with cache tags ("post" / "caseStudy"), so we
 * expire the matching tag immediately when content changes.
 */

// Map changed document types to the cache tags that depend on them.
const TYPE_TO_TAGS: Record<string, string[]> = {
  post: ["post"],
  caseStudy: ["caseStudy"],
  author: ["post"], // author edits affect posts
  category: ["post"], // category edits affect posts
};
const MAX_BODY_BYTES = 16_000;

export async function POST(req: Request) {
  const secret = serverEnv.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return Response.json(
      { revalidated: false, message: "Revalidation secret not configured." },
      { status: 500 },
    );
  }

  const signature = req.headers.get(SIGNATURE_HEADER_NAME);
  if (!signature) {
    return Response.json(
      { revalidated: false, message: "Missing signature." },
      { status: 401 },
    );
  }

  const contentType = req.headers.get("content-type")?.split(";")[0].trim();
  if (contentType !== "application/json") {
    return Response.json(
      { revalidated: false, message: "JSON requests are required." },
      { status: 415 },
    );
  }

  const contentLength = Number(req.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return Response.json(
      { revalidated: false, message: "Request is too large." },
      { status: 413 },
    );
  }

  // Read the raw body for signature verification, then parse it.
  const body = await req.text();
  if (new TextEncoder().encode(body).length > MAX_BODY_BYTES) {
    return Response.json(
      { revalidated: false, message: "Request is too large." },
      { status: 413 },
    );
  }
  const valid = await isValidSignature(body, signature, secret);
  if (!valid) {
    return Response.json(
      { revalidated: false, message: "Invalid signature." },
      { status: 401 },
    );
  }

  let payload: { _type?: string };
  try {
    payload = JSON.parse(body);
  } catch {
    return Response.json(
      { revalidated: false, message: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const tags = payload._type ? TYPE_TO_TAGS[payload._type] : undefined;
  if (!tags) {
    return Response.json({
      revalidated: false,
      message: `No revalidation mapping for type "${payload._type ?? "unknown"}".`,
    });
  }

  // expire: 0 forces immediate expiration — required for webhook-driven updates.
  for (const tag of tags) {
    revalidateTag(tag, { expire: 0 });
  }

  return Response.json({ revalidated: true, tags, now: Date.now() });
}
