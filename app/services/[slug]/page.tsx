import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Faq from "@/components/sections/faq";
import { SERVICES, getServiceBySlug, SERVICE_FAQS, SERVICE_PROCESS } from "@/lib/services";
import { getCaseStudies, urlFor } from "@/lib/sanity/client";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import ServiceJsonLd from "@/components/seo/service-json-ld";
import { SITE_URL } from "@/lib/env";

const CASE_STUDY_FALLBACK =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Maction Consulting`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const featured = (await getCaseStudies())[0];

  return (
    <article>
      <ServiceJsonLd
        name={service.title}
        description={service.shortDescription}
        url={`${SITE_URL}/services/${service.slug}`}
        serviceType={service.title}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>
          <span className="mt-8 inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-400">
            <Icon className="h-7 w-7" />
          </span>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-slate-300">
            {service.shortDescription}
          </p>
          <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2 text-sm">
            {[
              ["#overview", "Overview"],
              ["#process", "Our process"],
              ["#faqs", "FAQs"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-white/20 px-4 py-2 text-slate-300 transition-colors hover:border-white/50 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Body */}
      <section id="overview" className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2 min-w-0 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed break-words text-gray-700">{service.overview}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">Benefits &amp; Capabilities</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    <span className="min-w-0 break-words">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deliverables sidebar */}
          <aside className="h-fit rounded-3xl border border-slate-100 bg-slate-50 p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              What You Receive
            </h3>
            <ul className="mt-4 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="brand" size="lg" className="mt-8 w-full gap-2 whitespace-normal">
              <Link href="/contact-us">
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      {/* Process / Methodology */}
      <section id="process" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-black text-slate-900">How We Work</h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            A consistent, transparent engagement model — from first conversation to decision-ready
            delivery.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PROCESS.map((stage) => (
              <div
                key={stage.step}
                className="relative rounded-3xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <span className="text-4xl font-black text-blue-100">{stage.step}</span>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case study */}
      {featured && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-2xl font-black text-slate-900">Proof in Practice</h2>
            <Link
              href={`/case-studies/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-lg md:grid-cols-2"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 md:aspect-auto">
                <Image
                  src={featured.mainImage ? urlFor(featured.mainImage).url() : CASE_STUDY_FALLBACK}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                  {featured.industry} · Case Study
                </span>
                <h3 className="mt-3 text-2xl font-bold leading-snug text-slate-900 group-hover:text-brand">
                  {featured.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-gray-600">{featured.excerpt}</p>
                {featured.metricValue && (
                  <p className="mt-4 text-3xl font-black text-brand">
                    {featured.metricValue}{" "}
                    <span className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                      {featured.metricLabel}
                    </span>
                  </p>
                )}
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Read the case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* FAQ */}
      <Faq
        id="faqs"
        items={SERVICE_FAQS}
        title={`Questions about ${service.title}`}
        className="bg-slate-50 py-20"
      />

      {/* Related services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-2xl font-black text-slate-900">Explore Other Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((other) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="inline-flex rounded-xl bg-blue-50 p-2.5 text-brand">
                    <OtherIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold leading-snug text-slate-900 group-hover:text-brand">
                    {other.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
