import { getCaseStudyBySlug, getCaseStudies, urlFor } from "@/lib/sanity/client";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  HelpCircle,
  Target,
  Compass,
  Lightbulb,
  TrendingUp,
  User,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PortableText from "@/components/shared/portable-text";
import ArticleJsonLd from "@/components/seo/article-json-ld";
import { toPlainText } from "@/lib/portable-text-utils";
import type { CaseStudy } from "@/lib/sanity/client";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/shared/breadcrumbs";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";

interface Props {
  params: Promise<{ slug: string }>;
}

const hasBlocks = (blocks?: CaseStudy["challenge"]) => !!blocks && toPlainText(blocks).length > 0;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) return {};

  const ogImage = cs.seo?.ogImage
    ? urlFor(cs.seo.ogImage).url()
    : cs.mainImage
      ? urlFor(cs.mainImage).url()
      : "/logo.png";

  return {
    title: `${cs.seo?.metaTitle ?? cs.title} | Case Study`,
    description: cs.seo?.metaDescription ?? cs.excerpt,
    keywords: cs.tags,
    alternates: { canonical: `/case-studies/${slug}` },
    robots: cs.seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: cs.seo?.metaTitle ?? cs.title,
      description: cs.seo?.metaDescription ?? cs.excerpt,
      images: [{ url: ogImage }],
    },
  };
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const all = await getCaseStudies();
  const cs = all.find((c) => c.slug === slug) ?? (await getCaseStudyBySlug(slug));

  if (!cs) {
    notFound();
  }

  const mainImageUrl = cs.mainImage ? urlFor(cs.mainImage).url() : FALLBACK_IMAGE;

  const related = all
    .filter((c) => c.slug !== slug && c.industry === cs.industry)
    .concat(all.filter((c) => c.slug !== slug && c.industry !== cs.industry))
    .slice(0, 3);

  // Build the narrative as an ordered list of present sections so the numbering
  // stays correct no matter which fields an editor fills in.
  const sections: { label: string; title: string; icon: ReactNode; body: ReactNode }[] = [];

  if (cs.overview) {
    sections.push({
      label: "Overview",
      title: "Client Overview",
      icon: <Building2 className="h-5 w-5" />,
      body: <p className="text-lg leading-relaxed text-slate-700">{cs.overview}</p>,
    });
  }
  if (hasBlocks(cs.challenge)) {
    sections.push({
      label: "The Problem",
      title: "Problem Statement",
      icon: <HelpCircle className="h-5 w-5" />,
      body: <PortableText value={cs.challenge} />,
    });
  }
  if (cs.objectives && cs.objectives.length > 0) {
    sections.push({
      label: "Goals",
      title: "Objectives",
      icon: <Target className="h-5 w-5" />,
      body: (
        <ul className="space-y-3">
          {cs.objectives.map((obj) => (
            <li key={obj} className="flex items-start gap-3 text-lg leading-relaxed text-slate-700">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      ),
    });
  }
  if (hasBlocks(cs.approach)) {
    sections.push({
      label: "Methodology",
      title: "Research Methodology & Process",
      icon: <Compass className="h-5 w-5" />,
      body: <PortableText value={cs.approach} />,
    });
  }
  if (hasBlocks(cs.keyFindings)) {
    sections.push({
      label: "Insights",
      title: "Key Findings & Insights",
      icon: <Lightbulb className="h-5 w-5" />,
      body: <PortableText value={cs.keyFindings} />,
    });
  }

  // Headline metric + any additional metrics, de-duplicated into one band.
  const metrics = [
    ...(cs.metricValue ? [{ value: cs.metricValue, label: cs.metricLabel ?? "Result" }] : []),
    ...(cs.metrics ?? []),
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: cs.title }]} />
      </div>
      <ArticleJsonLd
        title={cs.title}
        description={cs.excerpt}
        slug={slug}
        publishedAt={cs.publishedAt}
        authorName="Maction Consulting"
        imageUrl={mainImageUrl}
        section="case-studies"
        breadcrumbLabel="Case Studies"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <Link href="/case-studies">
            <Button variant="ghost" size="sm" className="gap-2 text-slate-500 hover:text-slate-900">
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
        </div>

        {/* Hero */}
        <div className="grid items-start gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wider text-brand uppercase">
              {cs.industry} Case Study
            </div>

            <h1 className="text-4xl leading-tight font-extrabold text-slate-900 md:text-5xl">
              {cs.title}
            </h1>

            {cs.excerpt && (
              <p className="text-xl leading-relaxed font-light text-slate-600">{cs.excerpt}</p>
            )}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-brand" aria-hidden="true" />
                {new Date(cs.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-brand" aria-hidden="true" />
                Maction Consulting
              </span>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 shadow-md">
              <Image
                src={mainImageUrl}
                alt={cs.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Fact sheet */}
          <aside className="lg:sticky lg:top-28">
            <div className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
              {cs.metricValue && (
                <div className="border-b border-slate-100 pb-6 text-center lg:text-left">
                  <p className="text-5xl leading-none font-black text-brand">{cs.metricValue}</p>
                  <p className="mt-2 text-xs font-bold tracking-widest text-slate-500 uppercase">
                    {cs.metricLabel}
                  </p>
                </div>
              )}

              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Client
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">{cs.client}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Industry
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">{cs.industry}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Services Provided
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {cs.servicesProvided?.map((srv) => (
                      <span
                        key={srv}
                        className="rounded-md border border-blue-100/60 bg-blue-50/50 px-2.5 py-1 text-xs font-medium text-brand"
                      >
                        {srv}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        {/* Narrative */}
        <div className="mx-auto mt-16 max-w-3xl space-y-14">
          {sections.map((section, i) => (
            <section key={section.title} className="scroll-mt-28">
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-brand">
                  {section.icon}
                </span>
                <div>
                  <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    {String(i + 1).padStart(2, "0")} — {section.label}
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{section.title}</h2>
                </div>
              </div>
              <div className="border-l-2 border-slate-100 pl-6 sm:pl-[3.75rem]">{section.body}</div>
            </section>
          ))}
        </div>

        {/* Results & outcomes */}
        {(hasBlocks(cs.results) || metrics.length > 0) && (
          <section className="mt-16 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-slate-50/60 px-8 py-6">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Outcomes
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                    Results &amp; Outcomes
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-8">
              {metrics.length > 0 && (
                <div className="mb-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {metrics.map((m) => (
                    <div
                      key={`${m.value}-${m.label}`}
                      className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 text-center"
                    >
                      <p className="text-4xl leading-none font-black text-brand">{m.value}</p>
                      <p className="mt-2 text-xs font-bold tracking-widest text-slate-500 uppercase">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {hasBlocks(cs.results) && (
                <div className="max-w-3xl">
                  <PortableText value={cs.results} />
                </div>
              )}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="relative mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-8 text-center shadow-xl md:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="relative z-10 mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl leading-tight font-black text-white">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-base leading-relaxed font-light text-blue-100">
              Partner with Maction Consulting to size your market, understand your customers, and turn
              research into measurable growth.
            </p>
            <div className="pt-2">
              <Button asChild variant="brand" size="lg" className="px-8">
                <Link href="/contact-us">Work With Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related case studies */}
        {related.length > 0 && (
          <section className="mt-24 border-t border-slate-200 pt-16">
            <h2 className="mb-8 text-2xl font-black text-slate-900">Related Case Studies</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((rel) => {
                const relImg = rel.mainImage ? urlFor(rel.mainImage).url() : FALLBACK_IMAGE;
                return (
                  <Card
                    key={rel.slug}
                    className="group flex h-full flex-col gap-0 overflow-hidden rounded-2xl border border-slate-100 bg-white py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <Link href={`/case-studies/${rel.slug}`} className="flex h-full flex-col">
                      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                        <Image
                          src={relImg}
                          alt={rel.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 rounded-full bg-brand/90 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white uppercase backdrop-blur-sm">
                          {rel.industry}
                        </span>
                        {rel.metricValue && (
                          <div className="absolute right-3 bottom-3 rounded-xl border border-slate-100/50 bg-white/95 px-3 py-2 text-right shadow-sm backdrop-blur-sm">
                            <p className="text-lg leading-none font-black text-brand">
                              {rel.metricValue}
                            </p>
                            <p className="mt-0.5 text-[9px] font-bold tracking-wider text-slate-500 uppercase">
                              {rel.metricLabel}
                            </p>
                          </div>
                        )}
                      </div>
                      <CardContent className="flex flex-1 flex-col p-5">
                        <p className="mb-1 text-xs font-semibold tracking-widest text-brand uppercase">
                          {rel.client}
                        </p>
                        <h3 className="flex-1 leading-snug font-bold text-slate-900 transition-colors group-hover:text-brand line-clamp-2">
                          {rel.title}
                        </h3>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                          View case study
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Link>
                  </Card>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
