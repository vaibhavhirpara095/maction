"use client";

import { motion } from "framer-motion";
import { useAnalytics } from "@/hooks/use-analytics";
import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import { SERVICES } from "@/lib/services";
import { Button } from "@/components/ui/button";

export default function Services() {
    const { trackCTA } = useAnalytics();

    return (
        <section className="bg-slate-50 py-16 sm:py-20 md:py-24 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 z-10">

                <SectionHeading
                    eyebrow="What We Do"
                    title="Our Services"
                    description="Helping global organizations grow through rigorous market research, advanced analytics, and strategic growth consulting."
                />

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <Link href={`/services/${service.slug}`} key={service.slug} className="flex h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -8,
                                    }}
                                    onClick={() => trackCTA(`services_click_${service.slug}`)}
                                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-300 group flex flex-col justify-between h-full cursor-pointer w-full"
                                >
                                    <div className="space-y-4">
                                        <span className="inline-flex p-3 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 w-fit">
                                            <Icon className="h-6 w-6" />
                                        </span>

                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {service.shortDescription}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-50 flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                                        Learn More
                                        <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
                    <div className="mt-10 text-center">
                        <Button asChild variant="outline" size="lg">
                            <Link href="/services">Explore All Services <span aria-hidden="true">→</span></Link>
                        </Button>
                    </div>

            </div>
        </section>
    );
}