import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FMCG Panel Preview",
  robots: { index: false, follow: false },
};

const focusAreas = [
  ["01", "Consumer insight", "What people need, notice, choose, and remember."],
  ["02", "Product innovation", "Which concepts, propositions, and packs deserve investment."],
  ["03", "Pricing & value", "How consumers understand value across changing categories."],
  ["04", "Retail & omnichannel", "Where discovery, purchase, and repeat behaviour happen."],
];

export default function FmcgPanelPreviewPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-[#172033] md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#56718d]">
          FMCG hero panel preview
        </p>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] md:text-7xl">
              Research that helps FMCG brands move with confidence.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">
              Understand shoppers, retailers, and competitors through focused market research,
              consumer insights, and data analytics.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#172033] px-6 py-3 text-sm font-semibold text-white"
            >
              Discuss your FMCG project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <aside className="border border-slate-200 bg-[#f7f8fa] p-7 md:p-9" aria-labelledby="focus-heading">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a45d49]">
              FMCG at a glance
            </p>
            <h2 id="focus-heading" className="mt-4 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.025em]">
              The questions behind better category decisions.
            </h2>
            <div className="mt-8 border-t border-slate-300">
              {focusAreas.map(([number, title, description]) => (
                <div key={number} className="border-b border-slate-300 py-5">
                  <div className="flex items-start gap-4">
                    <span className="pt-0.5 font-mono text-xs font-bold text-[#a45d49]">{number}</span>
                    <div>
                      <h3 className="text-base font-semibold">{title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
