import { getCaseStudies } from "@/lib/sanity/client";
import CaseStudiesList from "@/components/sections/case-studies-list";
import SectionHeading from "@/components/ui/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Success Stories",
  description: "Read about our client success stories, representing how Maction Consulting partners with companies to guide data operations and generate growth.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies & Success Stories | Maction Consulting",
    description: "See how research, analytics, and consulting help teams make better decisions.",
    url: "/case-studies",
  },
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <section className="min-h-screen bg-slate-50 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          as="h1"
          width="wide"
          eyebrow="Our Impact"
          title="Success Stories"
          description="Real-world evidence of how we unlock competitive advantages, optimize operational workflows, and deploy enterprise AI solutions."
        />

        <CaseStudiesList caseStudies={caseStudies} />
      </div>
    </section>
  );
}