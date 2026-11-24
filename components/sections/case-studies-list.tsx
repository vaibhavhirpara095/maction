"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CaseStudy, urlFor } from "@/lib/sanity/client";
import { ArrowRight, Briefcase, Calendar, Tag, User } from "lucide-react";

interface CaseStudiesListProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesList({ caseStudies }: CaseStudiesListProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = ["All", ...Array.from(new Set(caseStudies.map((cs) => cs.industry)))];

  const filteredCaseStudies = selectedIndustry === "All"
    ? caseStudies
    : caseStudies.filter((cs) => cs.industry === selectedIndustry);

  return (
    <div className="space-y-12">
      {/* Industry Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {industries.map((ind) => (
          <Button
            key={ind}
            variant={selectedIndustry === ind ? "default" : "outline"}
            onClick={() => setSelectedIndustry(ind)}
            className="rounded-full px-6 py-2 transition-all font-medium"
          >
            {ind}
          </Button>
        ))}
      </div>

      {/* Grid of Case Studies */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredCaseStudies.map((cs) => {
          const mainImageUrl = cs.mainImage ? urlFor(cs.mainImage).url() : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";

          return (
            <Card key={cs.slug} className="group gap-0 py-0 overflow-hidden rounded-3xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <Image
                  src={mainImageUrl}
                  alt={cs.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-blue-600/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                  {cs.industry}
                </span>
                
                {cs.metricValue && (
                  <div className="absolute bottom-4 right-4 rounded-2xl bg-white/95 backdrop-blur-sm p-3 shadow-md border border-slate-100/50 text-right">
                    <p className="text-xl font-black text-blue-600 leading-none">{cs.metricValue}</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1 tracking-wider">{cs.metricLabel}</p>
                  </div>
                )}
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  Client: {cs.client}
                </p>

                <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {cs.title}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {new Date(cs.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    Maction Consulting
                  </span>
                </div>

                <p className="mt-3 text-gray-600 text-sm line-clamp-3 leading-relaxed flex-1">
                  {cs.excerpt}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cs.servicesProvided?.map((service) => (
                    <span key={service} className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-0.5 text-xs text-slate-600 border border-slate-100">
                      <Tag className="h-2.5 w-2.5" />
                      {service}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link href={`/case-studies/${cs.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    View Impact Analysis
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredCaseStudies.length === 0 && (
        <div className="text-center py-20 text-gray-500 font-medium">
          No case studies found for the selected industry.
        </div>
      )}
    </div>
  );
}
