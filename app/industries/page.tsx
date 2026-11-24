import IndustriesGrid from "@/components/sections/industries-grid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Browse the 17 business sectors Maction Consulting serves with specialized market research, predictive analytics models, and corporate growth strategy.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-20 text-white sm:py-24 md:py-32">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Industries We Serve</span>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">Sectors We Empower</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Specialized research and analytics across 17 sectors, grounded in the decisions each market demands.
          </p>
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <IndustriesGrid />
          <div className="mt-16 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 md:p-12">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Need insight for a different market?</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Our research teams adapt methodology to your sector, audience, and growth question.
            </p>
            <Link href="/contact-us" className="mt-6 inline-flex rounded-full bg-brand px-7 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
              Talk to Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
