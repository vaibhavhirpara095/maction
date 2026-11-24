import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import MotionReveal from "@/components/shared/motion-reveal";
import ComparisonTable from "@/components/sections/comparison-table";
import { COMPANY_STATS, COMPANY_VALUES, ACCREDITATIONS, OFFICES } from "@/lib/site";
import { Target, Eye, ArrowRight, Building2, BarChart3, MonitorSmartphone, Check } from "lucide-react";

// "Traditional approach vs Maction" comparison rows.
const COMPARISON_ROWS = [
  {
    traditional: "Generic agencies with junior teams and multi-week timelines",
    maction: "Senior-led teams delivering first findings in days",
  },
  {
    traditional: "One-size-fits-all methodology applied to every brief",
    maction: "Methodology tailored to your question, sector, and market",
  },
  {
    traditional: '"The AI will figure it out" — black-box outputs you can\'t trust',
    maction: "Transparent, validated analysis with QC on every output",
  },
  {
    traditional: "Siloed tools that do one thing — survey OR analysis OR reporting",
    maction: "End-to-end: research, analytics, and strategy from one partner",
  },
  {
    traditional: "Reports that gather dust after delivery",
    maction: "Decision-ready recommendations your team can act on",
  },
];

// Who we partner with — card + checklist section.
const WHO_WE_HELP = [
  {
    icon: Building2,
    title: "Enterprise & Corporate Leaders",
    description:
      "Make high-stakes decisions with confidence. We turn complex markets into a clear, defensible path forward — delivered board-ready.",
    points: [
      "Strategy backed by rigorous research",
      "Executive-ready reports and readouts",
      "Senior-led teams, not junior hand-offs",
    ],
  },
  {
    icon: BarChart3,
    title: "Marketing & Brand Teams",
    description:
      "Understand your customers and category in depth. From brand tracking to concept testing, we turn consumer signal into action.",
    points: [
      "Verified consumer panels across 25+ countries",
      "Brand health, segmentation & concept testing",
      "Insight delivered in days, not quarters",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Product & Innovation Teams",
    description:
      "Validate ideas before you build. We pressure-test concepts and map journeys so you ship what the market actually wants.",
    points: [
      "Rapid concept & prototype validation",
      "Journey mapping and friction diagnostics",
      "Decision-ready findings every sprint",
    ],
  },
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Maction Consulting — a global market research, data analytics, and business consulting firm helping enterprises turn data into growth.",
  alternates: { canonical: "/about" },
};

// NOTE: Copy below is structured placeholder built from facts already in the
// codebase (stats, offices, accreditations). Replace prose with final approved
// copy before launch.
export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 text-white md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-400">
            About Maction Consulting
          </span>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Turning data into decisions for global enterprises
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-slate-300">
            For over a decade, Maction Consulting has partnered with leading brands, institutions,
            and governments to deliver rigorous market research, advanced analytics, and
            business consulting — across more than 25 countries.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          {COMPANY_STATS.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-4xl font-black text-brand md:text-5xl">{stat.value}</p>
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="Research-led, technology-enabled"
            description="Maction was founded to close the gap between data collection and confident decision-making."
          />
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              What began as a specialist market research practice has grown into a full-service
              insights and analytics partner. Today our teams combine primary research, data
              science, and advanced analytics to help clients understand markets, customers, and
              competitive dynamics with precision.
            </p>
            <p>
              We work across the full decision lifecycle — from sizing an opportunity and validating
              a concept, through to building the analytics infrastructure that keeps insight flowing
              long after a project ends.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="scroll-mt-24 bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-sm">
            <span className="inline-flex rounded-2xl bg-blue-50 p-3 text-brand">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              To empower organizations with research-backed intelligence that reduces risk and
              accelerates growth — delivered with rigour, speed, and clarity.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-sm">
            <span className="inline-flex rounded-2xl bg-orange-50 p-3 text-brand-accent">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              To be the most trusted insights and analytics partner for enterprises navigating an
              increasingly data-driven world.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {COMPANY_VALUES.map((value, i) => (
              <MotionReveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{value.description}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Who We Help"
            title="Built for teams that run on insight"
            description="Whatever your role, we plug into your decision process and deliver the evidence you need to move."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {WHO_WE_HELP.map((item, i) => {
              const Icon = item.icon;
              return (
                <MotionReveal key={item.title} delay={i * 0.1}>
                  <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-lg">
                    <span className="inline-flex rounded-2xl bg-blue-50 p-3.5 text-brand">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-xl font-bold leading-snug text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-gray-600">{item.description}</p>
                    <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="why-choose-us" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The Difference"
            title="Why teams choose Maction"
            description="A modern alternative to the traditional research agency model."
          />
          <ComparisonTable rows={COMPARISON_ROWS} />
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Trust & Compliance"
            title="Accreditations & Memberships"
            description="Our work meets the standards of the world's leading research and quality bodies."
          />
          <div className="flex flex-wrap items-center justify-center gap-10">
            {ACCREDITATIONS.map((cert) => (
              <div key={cert.name} className="flex flex-col items-center gap-3">
                <Image src={cert.src} alt={cert.alt} width={110} height={70} className="h-16 w-auto object-contain" unoptimized />
                <span className="text-xs font-semibold text-slate-500">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section id="locations" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Where We Work" title="Global Presence" />
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {OFFICES.map((office) => (
              <div key={office.country} className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
                <div className="flex items-center gap-2">
                  <Image src={office.flag} alt={`${office.country} flag`} width={28} height={19} className="rounded-sm border border-slate-200" />
                  <h3 className="text-lg font-bold text-slate-900">{office.country}</h3>
                </div>
                {office.address.length > 0 && (
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {office.address.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </p>
                )}
                <a href={office.phoneHref} className="mt-3 inline-block text-sm font-semibold text-brand hover:text-blue-700">
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-10 text-center shadow-xl md:p-14">
            <h2 className="text-3xl font-black leading-tight text-white">
              Let&apos;s build your next data advantage
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Tell us about your challenge — our team will scope an approach within two business days.
            </p>
            <Button asChild variant="brand" size="lg" className="mt-8 gap-2">
              <Link href="/contact-us">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
