import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Layers3, Search, Target } from "lucide-react";
import MotionReveal from "@/components/shared/motion-reveal";

export const metadata: Metadata = {
  title: "FMCG Page Preview",
  robots: { index: false, follow: false },
};

const expertise = [
  "FMCG market research",
  "Consumer engagement and satisfaction research",
  "New product and concept testing",
  "Pricing and value perception research",
  "Brand tracking and share-of-market analysis",
  "Shopper and purchase journey research",
  "Omnichannel and e-commerce behavior research",
  "Market segmentation and buyer personas",
  "Competitive intelligence and benchmarking",
  "Retail and shelf research",
  "Packaging and sustainability perception",
  "FMCG B2B and retailer research",
];

const pillars = [
  {
    icon: Target,
    title: "Consumer Engagement",
    description: "Understand customer experience, key touchpoints, and the moments that shape product choice.",
    outcome: "Build stronger connections with the people who matter most.",
  },
  {
    icon: Layers3,
    title: "Product Innovation",
    description: "Test new products, concepts, packaging, and propositions before investing in a launch.",
    outcome: "Reduce launch uncertainty before it reaches the shelf.",
  },
  {
    icon: Search,
    title: "Behavioural Research",
    description: "Uncover how changing digital journeys, habits, and expectations influence category behavior.",
    outcome: "Turn changing habits into clearer growth opportunities.",
  },
  {
    icon: BarChart3,
    title: "Omnichannel Research",
    description: "Connect retail, e-commerce, and consumer behavior into one view of the purchase journey.",
    outcome: "See the full journey from discovery to repeat purchase.",
  },
];

export default function FmcgReferencePreviewPage() {
  return (
    <main id="main-content" className="bg-white text-[#172033]">
      <div className="border-b border-slate-200 bg-slate-50 px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        Preview only · redesigned from the current FMCG page
      </div>

      <section className="border-b border-slate-200 bg-[#f7f8fa] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#56718d]">
              FMCG &amp; consumer packaged goods
            </p>
          </MotionReveal>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <MotionReveal className="max-w-4xl" delay={0.08}>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] md:text-7xl">
                Research that helps FMCG brands move with confidence.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">
                Understand shoppers, retailers, and competitors through focused market research,
                consumer insights, and data analytics—so you can launch, price, and grow with clarity.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#172033] px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#263653] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a45d49] focus-visible:ring-offset-2"
                >
                  Discuss your FMCG project <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="#expertise"
                  className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#56718d] hover:text-[#56718d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56718d] focus-visible:ring-offset-2"
                >
                  Explore our expertise
                </a>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.2} className="border-l-2 border-[#a45d49] pl-6">
              <p className="text-4xl font-semibold tracking-tight text-[#a45d49]">One category.</p>
              <p className="mt-2 max-w-xs text-2xl font-medium leading-tight text-slate-800">
                Many decisions that need better evidence.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="overview-heading" className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <MotionReveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a45d49]">Overview</p>
            <h2 id="overview-heading" className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
              Clear insight for fast-moving categories.
            </h2>
          </MotionReveal>
          <MotionReveal className="max-w-3xl text-lg leading-relaxed text-slate-600" delay={0.1}>
            <p>
              Maction Consulting provides specialized FMCG market research, consumer insights,
              and business consulting for brands operating in competitive retail categories.
            </p>
            <p className="mt-5">
              Our research supports the full product lifecycle—from concept development and new
              product launches to post-launch evaluation, brand tracking, and competitive benchmarking.
            </p>
            <p className="mt-5">
              By combining qualitative and quantitative methods, we turn shopper and market evidence
              into recommendations teams can use.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section id="expertise" aria-labelledby="expertise-heading" className="scroll-mt-24 border-y border-slate-200 bg-[#fbfbfa] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#56718d]">Our expertise</p>
              <h2 id="expertise-heading" className="mt-5 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Research built around your decision.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              Choose the capabilities that match your product, brand, category, or retail question.
            </p>
          </MotionReveal>
          <div className="mt-12 grid gap-x-10 md:grid-cols-2">
            {expertise.map((item, index) => (
              <MotionReveal key={item} delay={Math.min(index * 0.04, 0.3)} className="group flex items-start gap-4 border-t border-slate-200 py-5 transition-colors hover:border-[#a45d49]">
                <span className="mt-0.5 font-mono text-xs font-bold text-[#a45d49]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-medium text-slate-800 transition-transform duration-300 group-hover:translate-x-1">{item}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="lenses-heading" className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a45d49]">Where insight creates value</p>
            <h2 id="lenses-heading" className="mt-5 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Four lenses on FMCG growth.
            </h2>
          </MotionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <MotionReveal key={pillar.title} delay={0.08} className="group">
                  <article className="h-full border-t-2 border-[#a45d49] bg-[#f7f8fa] p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(23,32,51,0.08)]">
                    <Icon className="h-6 w-6 text-[#56718d] transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="mt-10 text-lg font-semibold">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="process-heading" className="bg-[#172033] px-6 py-16 text-white md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <MotionReveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b9c9d8]">A practical research partner</p>
            <h2 id="process-heading" className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
              From a business question to a decision your team can act on.
            </h2>
          </MotionReveal>
          <MotionReveal className="border-l border-slate-600 pl-6 text-slate-300" delay={0.12}>
            {["Frame the decision", "Design the right research", "Translate evidence into action"].map((item, index) => (
              <div key={item} className="flex gap-4 border-b border-slate-700 py-4 transition-transform duration-300 hover:translate-x-1">
                <span className="font-mono text-sm text-[#d6a899]">0{index + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </MotionReveal>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl border border-slate-200 bg-[#f7f8fa] p-8 md:flex-row md:items-end md:p-12">
          <MotionReveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a45d49]">Start with the question</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.035em]">
              What FMCG decision are you trying to make?
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <Link href="/contact-us" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#172033] px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#263653] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a45d49] focus-visible:ring-offset-2">
              Talk to our team <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
