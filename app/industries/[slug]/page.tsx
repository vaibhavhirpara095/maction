import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, AlertTriangle, Lightbulb, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Faq from "@/components/sections/faq";
import { INDUSTRIES, getIndustryBySlug, getIndustryFaqs } from "@/lib/industries";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import ServiceJsonLd from "@/components/seo/service-json-ld";
import { SITE_URL } from "@/lib/env";
import { SERVICES } from "@/lib/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: industry.seoTitle ?? `${industry.name} Research & Analytics`,
    description: industry.seoDescription ?? industry.description,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.seoTitle ?? industry.name} | Maction Consulting`,
      description: industry.seoDescription ?? industry.description,
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const Icon = industry.icon;
  const others = INDUSTRIES.filter((i) => i.slug !== industry.slug).slice(0, 6);
  const isEditorial = Boolean(industry.researchServices);

  if (isEditorial) {
    return (
      <article className="bg-[#f4f1ea] text-slate-950">
        <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: industry.name }]} />
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="max-w-sm text-sm font-medium leading-relaxed text-slate-600">
                  {industry.editorialEyebrow}
                </p>
                <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.92] tracking-[-0.06em] text-slate-950 md:text-8xl">
                  {industry.editorialHero}
                  <span className="block italic text-orange-700">{industry.editorialAccent}</span>
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-700">
                  {industry.description}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <Link href="/contact-us" className="inline-flex items-center gap-3 border-b-2 border-slate-950 pb-2 text-sm font-bold">
                    Start an {industry.name} conversation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#industry-services" className="text-sm font-semibold text-slate-600 underline decoration-slate-300 underline-offset-4">
                    Explore capabilities
                  </a>
                </div>
              </div>
              <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#d8e2d0] p-8">
                <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[34px] border-orange-500/80" />
                <div aria-hidden="true" className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-orange-300/60 blur-2xl" />
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-slate-950 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-300">The question behind the insight</p>
                  <p className="mt-4 text-2xl font-serif leading-tight">{industry.businessQuestions?.[0]}</p>
                  <div className="mt-6 flex items-end gap-2" aria-hidden="true">
                    {[34, 52, 44, 76, 62, 88].map((height, index) => (
                      <span key={index} className="flex-1 rounded-t bg-orange-400" style={{ height }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 grid gap-8 border-t border-slate-300 pt-8 md:grid-cols-3">
              {industry.editorialTopics?.map((item, index) => (
                <div key={item} className="flex gap-4">
                  <span className="font-serif text-3xl text-orange-700">0{index + 1}</span>
                  <p className="pt-2 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">The {industry.name} brief</p>
                <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
                  {industry.editorialSectionHeading}
                </h2>
              </div>
              <div className="max-w-3xl text-lg leading-relaxed text-slate-600">
                <p>{industry.description}</p>
                <p className="mt-5">
                  {industry.editorialSectionLead}
                </p>
              </div>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-[#f4f1ea] p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">The tension</p>
                <h3 className="mt-5 text-2xl font-bold">{industry.editorialTensionHeading}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{industry.challenge}</p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">The opportunity</p>
                <h3 className="mt-5 text-2xl font-bold">{industry.editorialOpportunityHeading}</h3>
                <p className="mt-4 leading-relaxed text-slate-300">{industry.opportunity}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="industry-services" className="bg-[#d8e2d0] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">What we investigate</p>
                <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
                  {industry.editorialSectionHeading}
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-600">
                Choose the lens that matches the decision in front of your team.
              </p>
            </div>
            <div className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-2">
              {industry.researchServices?.map((service, index) => (
                <div key={service} className="flex gap-5 border-t border-slate-400/60 py-6">
                  <span className="font-serif text-2xl text-orange-700">0{index + 1}</span>
                  <p className="pt-1 text-lg font-semibold text-slate-900">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-20 text-white md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">Questions worth answering</p>
                <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
                  The right question changes the result.
                </h2>
              </div>
              <div className="grid gap-4">
                {industry.businessQuestions?.map((question, index) => (
                  <div key={question} className="flex gap-5 border-b border-slate-700 pb-5 text-lg leading-relaxed text-slate-300">
                    <span className="font-serif text-orange-300">0{index + 1}</span>
                    <p>{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">What you take forward</p>
                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
                  Evidence your team can use.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
                  Every engagement ends with a clear point of view, practical recommendations, and
                  the working assets needed to move from insight to action.
                </p>
              </div>
              <div className="border-t border-slate-300">
                {industry.deliverables?.map((deliverable, index) => (
                  <div key={deliverable} className="flex items-center gap-5 border-b border-slate-300 py-5">
                    <span className="font-serif text-2xl text-orange-700">0{index + 1}</span>
                    <span className="font-semibold">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20 rounded-[2rem] bg-orange-700 p-8 text-white md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-200">Ready when you are</p>
              <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
                  Make your next {industry.name} decision with more confidence.
                </h2>
                <Link href="/contact-us" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white">
                  Discuss your project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Faq
          items={industry.faqs ?? getIndustryFaqs(industry.name)}
          title={`${industry.name} research — common questions`}
          className="bg-[#f4f1ea] py-20"
        />
      </article>
    );
  }

  return (
    <article>
      <ServiceJsonLd
        name={`${industry.name} research and analytics`}
        description={industry.description}
        url={`${SITE_URL}/industries/${industry.slug}`}
        serviceType={`${industry.name} research`}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: industry.name }]} />
          <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            All Industries
          </Link>
          <span className="mt-8 inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-400">
            <Icon className="h-7 w-7" />
          </span>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">
            {industry.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-slate-300">
            {industry.description}
          </p>
          {industry.researchServices && (
            <div className="mt-8 flex flex-wrap gap-2">
              {industry.researchServices.slice(0, 3).map((service) => (
                <span key={service} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                  {service}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Challenge / Opportunity */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400">
                <AlertTriangle className="h-4 w-4 text-brand-accent" />
                Industry Challenge
              </h2>
              <p className="mt-4 leading-relaxed text-slate-700">{industry.challenge}</p>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400">
                <Lightbulb className="h-4 w-4 text-green-600" />
                Opportunity & Analytics
              </h2>
              <p className="mt-4 leading-relaxed text-slate-700">{industry.opportunity}</p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">How We Help</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industry.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-sm font-medium text-slate-800 shadow-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {industry.researchServices && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-slate-900">
                {industry.name} Research Services
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
                Select the research capability that matches your product, brand, category, or
                retail growth decision.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {industry.researchServices.map((service) => (
                  <li key={service} className="rounded-2xl border border-slate-100 bg-white p-5 text-sm font-semibold text-slate-800 shadow-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {industry.businessQuestions && (
            <div className="mt-16 rounded-3xl bg-slate-900 p-8 text-white md:p-10">
              <h2 className="text-2xl font-bold md:text-3xl">
                Questions {industry.name} research can answer
              </h2>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {industry.businessQuestions.map((question) => (
                  <li key={question} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {industry.deliverables && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-slate-900">
                What your {industry.name} research project can deliver
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {industry.deliverables.map((deliverable) => (
                  <div key={deliverable} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-sm font-medium text-slate-700">
                    {deliverable}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 rounded-3xl border border-slate-100 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">Explore Our Capabilities</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
              Combine industry context with the research, analytics, and consulting capability
              that matches your decision.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-brand hover:text-brand"
                >
                  {service.title}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-8 text-center md:p-12">
            <h2 className="text-2xl font-black text-white md:text-3xl">{industry.cta}</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-300">
              Talk to our {industry.name} specialists about your research and analytics goals.
            </p>
            <Button asChild variant="brand" size="lg" className="mt-6 gap-2">
              <Link href="/contact-us">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq
        items={industry.faqs ?? getIndustryFaqs(industry.name)}
        title={`${industry.name} — Common Questions`}
        className="bg-white py-20"
      />

      {/* Other industries */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-xl font-black text-slate-900">Other Sectors We Serve</h2>
          <div className="flex flex-wrap gap-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/industries/${other.slug}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-brand hover:text-brand"
              >
                {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
