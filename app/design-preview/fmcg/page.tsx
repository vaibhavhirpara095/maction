import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  CircleDot,
  Layers3,
  ScanLine,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FMCG Design Concepts",
  robots: { index: false, follow: false },
};

const questions = [
  "Which consumer segments are most likely to choose the product?",
  "Will the new pack or proposition win at shelf?",
  "What price protects both trial and margin?",
];

export default function FmcgDesignPreviewPage() {
  return (
    <main className="bg-white text-slate-950">
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500 backdrop-blur">
        FMCG page design concepts · preview only
      </div>

      <section className="border-b border-slate-200 bg-[#f4f1ea] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">Option 01 · Editorial premium</p>
            <span className="hidden text-sm text-slate-500 md:block">Magazine-style insight story</span>
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="max-w-sm text-sm font-medium leading-relaxed text-slate-600">
                Consumer insight / FMCG growth intelligence
              </p>
              <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.92] tracking-[-0.06em] text-slate-950 md:text-8xl">
                Make the next
                <span className="block italic text-orange-700">choice obvious.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-700">
                Research that shows what people buy, why they switch, and what your brand should do next.
              </p>
              <Link href="/contact-us" className="mt-8 inline-flex items-center gap-3 border-b-2 border-slate-950 pb-2 text-sm font-bold">
                Start an FMCG conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#d8e2d0] p-8">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[34px] border-orange-500/80" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-slate-950 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-orange-300">The question behind the data</p>
                <p className="mt-4 text-2xl font-serif leading-tight">What makes a shopper reach for your product?</p>
                <div className="mt-6 flex items-end gap-2">
                  {[34, 52, 44, 76, 62, 88].map((height, index) => (
                    <span key={index} className="flex-1 rounded-t bg-orange-400" style={{ height }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 grid gap-8 border-t border-slate-300 pt-8 md:grid-cols-3">
            {["Consumer behavior", "Brand & category", "Pricing & packaging"].map((item, index) => (
              <div key={item} className="flex gap-4">
                <span className="font-serif text-3xl text-orange-700">0{index + 1}</span>
                <p className="pt-2 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-[#101827] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Option 02 · Dark data lab</p>
            <span className="hidden text-sm text-slate-400 md:block">Insight dashboard storytelling</span>
          </div>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                <CircleDot className="h-4 w-4" /> FMCG intelligence / live brief
              </div>
              <h2 className="mt-6 max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
                See the signal
                <span className="block text-cyan-300">before the shelf does.</span>
              </h2>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-300">
                Turn fragmented shopper, brand, and category data into decisions your commercial team can act on.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950">
                Explore the intelligence layer <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-5 shadow-2xl shadow-cyan-950/30">
              <div className="flex items-center justify-between border-b border-slate-700 pb-5">
                <span className="text-sm font-bold">Category pulse / Q4</span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">+18.4% signal</span>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["Trial intent", "72%", "text-cyan-300"],
                  ["Switch risk", "24%", "text-orange-300"],
                  ["Value score", "8.6", "text-emerald-300"],
                ].map(([label, value, color]) => (
                  <div key={label} className="rounded-2xl bg-slate-800 p-4">
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className={`mt-3 text-2xl font-black ${color}`}>{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-800 p-5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Purchase drivers</span><TrendingUp className="h-4 w-4 text-cyan-300" />
                </div>
                <div className="mt-6 flex h-32 items-end gap-2">
                  {[42, 68, 51, 86, 74, 96, 80, 110].map((height, index) => (
                    <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-cyan-500 to-emerald-300" style={{ height }} />
                  ))}
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 text-sm text-slate-300">
                <ScanLine className="h-4 w-4 text-cyan-300" /> Next best action: test the value proposition
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f8fafc] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">Option 03 · Visual storytelling</p>
            <span className="hidden text-sm text-slate-500 md:block">Consumer journey narrative</span>
          </div>
          <div className="rounded-[2.5rem] bg-violet-700 p-8 text-white md:p-14">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-200">From need to repeat purchase</p>
                <h2 className="mt-6 max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
                  Follow the choice.
                  <span className="block text-yellow-300">Find the growth.</span>
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-violet-100">
                  We map the moments that move FMCG shoppers—from first awareness to the next purchase.
                </p>
              </div>
              <div className="grid gap-3">
                {["Notice", "Compare", "Choose", "Return"].map((step, index) => (
                  <div key={step} className="flex items-center gap-5 rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-300 font-black text-violet-900">0{index + 1}</span>
                    <span className="text-xl font-bold">{step}</span>
                    <ArrowDownRight className="ml-auto h-5 w-5 text-yellow-300" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {questions.map((question) => (
                <div key={question} className="rounded-2xl bg-violet-800/60 p-5 text-sm leading-relaxed text-violet-100">
                  <Target className="mb-8 h-5 w-5 text-yellow-300" />{question}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Option 04 · Premium consulting</p>
            <span className="hidden text-sm text-slate-500 md:block">Strategic decision framework</span>
          </div>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">FMCG growth strategy</p>
              <h2 className="mt-6 max-w-2xl text-5xl font-black leading-[0.98] tracking-[-0.05em] text-slate-950 md:text-7xl">
                From market
                <span className="block text-blue-700">evidence to action.</span>
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">
                A focused research partner for the decisions that shape your next category, product, or brand move.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white">Build the brief</button>
                <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-800">View our approach</button>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
                <Layers3 className="h-5 w-5 text-blue-700" />
                <span className="font-bold">The decision architecture</span>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  ["01", "Frame the opportunity", "Market, category, and consumer context"],
                  ["02", "Test the growth levers", "Concept, proposition, price, and pack"],
                  ["03", "Prioritize the move", "Evidence-led recommendation and roadmap"],
                ].map(([number, title, description]) => (
                  <div key={number} className="grid grid-cols-[2rem_1fr] gap-4 rounded-2xl bg-white p-5 shadow-sm">
                    <span className="font-mono text-sm font-bold text-blue-700">{number}</span>
                    <div>
                      <p className="font-bold text-slate-950">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-700">
                <BarChart3 className="h-4 w-4" /> Decision-ready outputs, not data dumps
              </div>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm font-semibold text-blue-950">
            <Sparkles className="h-5 w-5 text-blue-700" /> Choose one direction above. The final FMCG page will be designed and written as one coherent experience.
          </div>
        </div>
      </section>
    </main>
  );
}
