"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import { INDUSTRIES } from "@/lib/industries";
import { Button } from "@/components/ui/button";

export default function Industries() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <SectionHeading
          eyebrow="Sectors We Touch"
          title="Industries We Serve"
          description="Deploying specialized methodology and deep domain expertise across global market sectors."
        />

        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {INDUSTRIES.map((ind, index) => {
            const Icon = ind.icon;

            return (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="flex">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col items-center justify-center gap-3 group cursor-pointer w-full"
                >
                  <span className="p-3 rounded-full bg-slate-50 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-slate-900 group-hover:text-blue-600 transition-colors text-xs font-bold leading-tight">
                    {ind.name}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/industries">Explore All Industries <span aria-hidden="true">→</span></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}