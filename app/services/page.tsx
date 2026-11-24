import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Market research, data analytics, and business & marketing consulting services for global enterprises.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Market Research & Analytics Services | Maction Consulting",
    description:
      "Explore research, analytics, consulting, and research support services for global enterprises.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-20 text-white sm:py-24 md:py-32">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">What We Do</span>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">Our Services</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            End-to-end research, analytics, and strategy capabilities — engineered to turn data into confident decisions.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <span className="inline-flex w-fit rounded-2xl bg-blue-50 p-3 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-lg font-bold leading-tight text-slate-900 transition-colors group-hover:text-brand">
                  {service.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {service.shortDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 border-t border-slate-50 pt-4 text-xs font-semibold text-brand">
                  Explore Service
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
          </div>
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-950 p-8 text-center text-white md:p-12">
            <h2 className="text-2xl font-black md:text-3xl">Have a decision to make?</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-300">
              Tell us what you are trying to solve and we will scope the right approach.
            </p>
            <Link href="/contact-us" className="mt-6 inline-flex rounded-full bg-blue-500 px-7 py-3 font-semibold text-white transition-colors hover:bg-blue-400">
              Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
