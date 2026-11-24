import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, HeartPulse, ShoppingBag, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Color Concepts",
  robots: { index: false, follow: false },
};

const concepts = [
  {
    name: "FMCG",
    label: "Consumer choice / category growth",
    icon: ShoppingBag,
    background: "bg-[#f8f7f4]",
    panel: "bg-[#e9e4de]",
    dark: "bg-[#172033]",
    accent: "text-[#a45d49]",
    accentBg: "bg-[#a45d49]",
    accentBorder: "border-[#a45d49]",
    accentSoft: "text-[#d6a899]",
    headline: "Make the next",
    emphasis: "choice obvious.",
    description: "A restrained terracotta accent adds warmth to a neutral, trustworthy consulting palette.",
    topics: ["Consumer behavior", "Brand & category", "Pricing & packaging"],
  },
  {
    name: "Healthcare & Pharmaceuticals",
    label: "Patient insight / evidence-led decisions",
    icon: HeartPulse,
    background: "bg-[#f7faf9]",
    panel: "bg-[#e2efec]",
    dark: "bg-[#172033]",
    accent: "text-[#4d8a87]",
    accentBg: "bg-[#4d8a87]",
    accentBorder: "border-[#4d8a87]",
    accentSoft: "text-[#b8d5d2]",
    headline: "Make better care",
    emphasis: "more understood.",
    description: "A calm teal accent supports trust, care, evidence, and human understanding without becoming clinical or cold.",
    topics: ["Patient journeys", "Provider insight", "Market access"],
  },
  {
    name: "Automotive",
    label: "Mobility insight / buyer intelligence",
    icon: Zap,
    background: "bg-[#f7f8fa]",
    panel: "bg-[#e4e8ed]",
    dark: "bg-[#172033]",
    accent: "text-[#56718d]",
    accentBg: "bg-[#56718d]",
    accentBorder: "border-[#56718d]",
    accentSoft: "text-[#b9c9d8]",
    headline: "Move with the",
    emphasis: "buyer, not ahead.",
    description: "A slate-blue accent gives automotive pages a precise, modern feel while keeping the interface calm.",
    topics: ["Buyer behavior", "EV adoption", "Ownership experience"],
  },
];

export default function IndustryColorPreviewPage() {
  return (
    <main className="bg-white text-slate-950">
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500 backdrop-blur">
        Industry color concepts · preview only
      </div>
      {concepts.map((concept, index) => {
        const Icon = concept.icon;
        return (
          <section key={concept.name} className={`${concept.background} border-b border-slate-200 px-6 py-20 md:px-12 md:py-28`}>
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 flex items-center justify-between">
                <p className={`text-sm font-bold uppercase tracking-[0.2em] ${concept.accent}`}>
                  0{index + 1} · {concept.name}
                </p>
                <span className="hidden text-sm text-slate-500 md:block">{concept.label}</span>
              </div>
              <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div>
                  <div className={`flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] ${concept.accent}`}>
                    <Icon className="h-4 w-4" /> {concept.label}
                  </div>
                  <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.92] tracking-[-0.06em] text-slate-950 md:text-8xl">
                    {concept.headline}
                    <span className={`block italic ${concept.accent}`}>{concept.emphasis}</span>
                  </h1>
                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-700">{concept.description}</p>
                  <Link href="/contact-us" className={`mt-8 inline-flex items-center gap-3 border-b-2 border-slate-950 pb-2 text-sm font-bold ${concept.accent}`}>
                    Explore this direction <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className={`relative min-h-[360px] overflow-hidden rounded-[2rem] ${concept.panel} p-8`}>
                  <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full border-[34px] ${concept.accentBorder}/80`} />
                  <div className={`absolute bottom-8 left-8 right-8 rounded-2xl ${concept.dark} p-6 text-white`}>
                    <p className={`text-xs uppercase tracking-[0.2em] ${concept.accentSoft}`}>The insight behind the decision</p>
                    <p className="mt-4 text-2xl font-serif leading-tight">{concept.topics[0]} meets commercial action.</p>
                    <div className="mt-6 flex items-end gap-2" aria-hidden="true">
                      {[34, 52, 44, 76, 62, 88].map((height, barIndex) => (
                        <span key={barIndex} className={`flex-1 rounded-t ${concept.accentBg}`} style={{ height }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 grid gap-8 border-t border-slate-300 pt-8 md:grid-cols-3">
                {concept.topics.map((topic, topicIndex) => (
                  <div key={topic} className="flex gap-4">
                    <span className={`font-serif text-3xl ${concept.accent}`}>0{topicIndex + 1}</span>
                    <p className="pt-2 font-semibold">{topic}</p>
                  </div>
                ))}
              </div>
              <div className={`mt-10 flex items-center gap-3 rounded-2xl ${concept.dark} p-5 text-sm font-semibold text-white`}>
                <BarChart3 className={`h-5 w-5 ${concept.accentSoft}`} />
                Same editorial structure, but a visual language shaped for this industry.
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
