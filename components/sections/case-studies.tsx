import { getCaseStudies, urlFor } from "@/lib/sanity/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

export default async function CaseStudies() {
  const caseStudies = await getCaseStudies();
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="bg-slate-50 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Proven Results"
          title="Featured Case Studies"
          description="Read about our latest consulting success stories across global industries."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((cs) => {
            const mainImageUrl = cs.mainImage ? urlFor(cs.mainImage).url() : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";

            return (
              <Card key={cs.slug} className="group gap-0 py-0 overflow-hidden rounded-3xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <Image
                    src={mainImageUrl}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-slate-900/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                    {cs.industry}
                  </span>
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {cs.title}
                  </h3>

                  <p className="mt-3 text-gray-600 text-sm line-clamp-3 leading-relaxed flex-1">
                    {cs.excerpt}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link href={`/case-studies/${cs.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                      Read Impact Report
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="brand" size="lg" className="px-8">
            <Link href="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}