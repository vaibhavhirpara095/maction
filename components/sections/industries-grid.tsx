"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search as SearchIcon } from "lucide-react";
import { INDUSTRIES } from "@/lib/industries";

/**
 * Scannable, responsive grid of every sector we serve. Replaces the older
 * sidebar "dashboard": a card grid reads consistently with the Services,
 * Case Studies and Blog index pages and behaves far better on mobile. Full
 * sector detail lives on each /industries/[slug] page.
 */
export default function IndustriesGrid() {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const filtered = q
    ? INDUSTRIES.filter(
        (ind) =>
          ind.name.toLowerCase().includes(q) ||
          ind.description.toLowerCase().includes(q),
      )
    : INDUSTRIES;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Search */}
      <div className="relative mx-auto max-w-lg">
        <input
          type="text"
          placeholder="Search industries…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search industries"
          className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-12 pr-6 text-slate-800 placeholder-slate-400 shadow-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {filtered.map((ind) => {
          const Icon = ind.icon;
          return (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/20 hover:shadow-xl"
            >
              <span className="inline-flex w-fit rounded-2xl bg-blue-50 p-3 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold leading-tight text-slate-900 transition-colors group-hover:text-brand">
                {ind.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
                {ind.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 border-t border-slate-50 pt-4 text-xs font-semibold text-brand">
                View Sector Brief
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-20 text-center font-medium text-gray-500">
          No industries match “{query}”.
        </div>
      )}
    </div>
  );
}
