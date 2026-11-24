import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the Maction Consulting website and services.",
  alternates: { canonical: "/terms" },
};

// NOTE: Placeholder terms for layout/SEO. Replace with copy reviewed by legal
// counsel before launch.
export default function TermsPage() {
  return (
    <article className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>

        <div className="prose mt-10 max-w-none space-y-6 text-gray-700">
          <p>
            These terms govern your access to and use of the Maction Consulting website. By using
            this site, you agree to these terms.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">Use of the Site</h2>
          <p>
            You may use this site for lawful purposes only. You agree not to misuse the site,
            interfere with its operation, or attempt to access it using a method other than the
            interface we provide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">Intellectual Property</h2>
          <p>
            All content on this site — including text, graphics, logos, and reports — is the property
            of Maction Consulting or its licensors and is protected by applicable intellectual
            property laws.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">No Warranty</h2>
          <p>
            The site and its content are provided &quot;as is&quot; without warranties of any kind.
            We do not guarantee that the site will be uninterrupted, error-free, or secure.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Maction Consulting shall not be liable for any
            indirect, incidental, or consequential damages arising from your use of the site.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
          <p>
            Questions about these terms? Email{" "}
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
