"use client";

import { motion } from "framer-motion";
import { Award, Globe, BarChart3, Users } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const features = [
    {
        icon: Award,
        title: "Proven Expertise",
        description: "Years of experience delivering research and analytics solutions."
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Serving clients across multiple countries and industries."
    },
    {
        icon: BarChart3,
        title: "Data Driven",
        description: "Actionable insights powered by advanced analytics."
    },
    {
        icon: Users,
        title: "Client Focused",
        description: "Customized solutions tailored to business objectives."
    }
];

export default function WhyChoose() {
    return (
        <section className="bg-slate-50 py-16 sm:py-20 md:py-24 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
            
            <div className="relative mx-auto max-w-7xl px-6">
                <SectionHeading
                    eyebrow="Value Proposition"
                    title="Why Choose Maction"
                    description="We combine methodological rigour with technical innovation to drive sustainable value."
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12, duration: 0.6 }}
                                whileHover={{ y: -8 }}
                                className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-500/20 group cursor-default"
                            >
                                <span className="inline-flex p-3 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <Icon className="h-6 w-6" />
                                </span>
                                <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}