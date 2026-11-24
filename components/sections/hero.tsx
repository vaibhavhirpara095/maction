"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/use-analytics";
import { COMPANY_STATS } from "@/lib/site";

export default function Hero() {
    const { trackCTA } = useAnalytics();

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-20 sm:py-28 md:py-40 text-white">

            {/* Glowing Accent Orbs */}
            <div aria-hidden="true" className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600 blur-3xl opacity-20 animate-pulse" />
            <div aria-hidden="true" className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-orange-600 blur-3xl opacity-10 animate-pulse duration-5000" />
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="relative mx-auto max-w-7xl px-6 z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-6"
                >
                    <span className="mx-auto inline-flex max-w-full flex-wrap justify-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-blue-400">
                        Market Research • Data Analytics • Consulting
                    </span>

                    <h1 className="mt-4 text-4xl sm:text-5xl font-black leading-tight tracking-tight md:text-8xl bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                        Transform Data
                        <br />
                        Into Business Growth
                    </h1>

                    <p className="mx-auto max-w-3xl text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                        Maction Consulting helps organizations make smarter decisions
                        through high-fidelity market research, advanced data analytics,
                        and business &amp; marketing consulting.
                    </p>

                    <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
                        {/* Primary action — solid brand fill, highest emphasis */}
                        <Button
                            asChild
                            variant="brand"
                            size="lg"
                            className="group/cta w-full gap-2 px-8 text-base shadow-lg shadow-blue-950/30 hover:shadow-xl hover:shadow-blue-900/40 sm:w-auto"
                        >
                            <Link href="/contact-us" onClick={() => trackCTA("hero_get_started")}>
                                Get Started
                                <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
                            </Link>
                        </Button>

                        {/* Secondary action — translucent glass on the dark hero, clearly
                            visible yet subordinate to the primary CTA */}
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full cursor-pointer rounded-full border border-white/30 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/15 hover:text-white active:translate-y-px sm:w-auto"
                        >
                            <Link href="/services" onClick={() => trackCTA("hero_explore_services")}>
                                Explore Services
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-16 sm:mt-20 md:mt-24 grid gap-6 sm:gap-8 text-center grid-cols-2 md:grid-cols-4 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-sm"
                >
                    {COMPANY_STATS.map((stat) => (
                        <div key={stat.label} className="space-y-1">
                            <h3 className="text-4xl font-extrabold text-blue-500 md:text-5xl">
                                {stat.value}
                            </h3>
                            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}