import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Maction Consulting collects, uses, and protects your personal data.",
  alternates: { canonical: "/privacy-policy" },
};

// NOTE: Placeholder policy for layout/SEO. Replace with copy reviewed by legal
// counsel before launch.
export default function PrivacyPolicyPage() {
  return (
    <article className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>

        <div className="prose mt-10 max-w-none space-y-6 text-gray-700">
          <p>
            Maction Consulting (&quot;we&quot;, &quot;us&quot;) is committed to protecting your
            privacy. This policy explains what personal data we collect, how we use it, and the
            rights you have over it.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
          <p>
            We collect information you provide directly — such as your name, email, company, and
            message when you submit our contact form — and limited analytics data (with your
            consent) about how you use our website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
          <p>
            We use your information to respond to inquiries, deliver our services, improve our
            website, and communicate with you. We do not sell your personal data.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">Cookies & Analytics</h2>
          <p>
            We use analytics cookies only after you accept them via our cookie banner. You can
            decline analytics cookies and still use the site with essential cookies only.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">Data Retention & Security</h2>
          <p>
            We retain personal data only as long as necessary for the purposes described here and
            apply appropriate technical and organisational measures to protect it.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data. To exercise
            these rights, contact us at{" "}
            <a href="mailto:info@maction.com" className="font-medium text-brand hover:underline">
              info@maction.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
          <p>
            Questions about this policy? Email{" "}
            <a href="mailto:info@maction.com" className="font-medium text-brand hover:underline">
              info@maction.com
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
