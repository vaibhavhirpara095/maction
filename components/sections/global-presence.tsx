"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import {
  CLIENT_MARKETS,
  MAP_PROJECTION,
  OFFICE_LOCATIONS,
  projectMarker,
  type MapMarker,
} from "@/lib/locations";

/** Halo diameter as a % of the map's width, keyed off the marker's weight. */
const HALO = { 1: 3.2, 2: 4.4, 3: 5.6 } as const;

/**
 * Halos render as their own layer rather than as children of the dot: a % width
 * resolves against the nearest positioned ancestor, so they must sit directly
 * inside the map box to stay locked to it at every breakpoint.
 */
function MarkerHalo({ marker, variant }: { marker: MapMarker; variant: "client" | "office" }) {
  const { left, top } = projectMarker(marker);

  return (
    <span
      aria-hidden
      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[2px] ${
        variant === "office" ? "bg-brand/20" : "bg-slate-400/25"
      }`}
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${HALO[marker.weight ?? 1]}%`,
        aspectRatio: 1,
      }}
    />
  );
}

interface MarkerDotProps {
  marker: MapMarker;
  variant: "client" | "office";
  index: number;
}

function MarkerDot({ marker, variant, index }: MarkerDotProps) {
  const { left, top } = projectMarker(marker);
  const isOffice = variant === "office";

  return (
    <motion.div
      className="group absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${left}%`, top: `${top}%` }}
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.04, 0.8), duration: 0.45 }}
    >
      <span
        className={`relative block rounded-full ring-2 ring-white/70 transition-transform duration-300 group-hover:scale-150 ${
          isOffice
            ? "h-2 w-2 bg-brand sm:h-2.5 sm:w-2.5"
            : "h-1.5 w-1.5 bg-brand-accent sm:h-2 sm:w-2"
        }`}
      />

      {/* CSS-only tooltip — keeps the section free of hover state in JS. */}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
      >
        {marker.label}
        {isOffice && <span className="ml-1 text-slate-300">· Office</span>}
      </span>
    </motion.div>
  );
}

export default function GlobalPresence() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Global Presence"
          title="Our Clients & Locations"
          description="Research and analytics delivered across Asia-Pacific, Europe and North America — from our offices in India and the United States."
        />

        {/* Legend */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" aria-hidden />
            Our Clients
          </span>
          <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-brand" aria-hidden />
            Our Locations
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full"
          style={{ aspectRatio: MAP_PROJECTION.aspectRatio }}
        >
          {/* Decorative: the markers below carry the meaning. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/world-map.svg"
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="h-full w-full select-none object-contain"
          />

          {CLIENT_MARKETS.map((marker) => (
            <MarkerHalo key={`halo-${marker.label}`} marker={marker} variant="client" />
          ))}
          {OFFICE_LOCATIONS.map((marker) => (
            <MarkerHalo key={`halo-office-${marker.label}`} marker={marker} variant="office" />
          ))}

          {CLIENT_MARKETS.map((marker, i) => (
            <MarkerDot key={`client-${marker.label}`} marker={marker} variant="client" index={i} />
          ))}
          {OFFICE_LOCATIONS.map((marker, i) => (
            <MarkerDot
              key={`office-${marker.label}`}
              marker={marker}
              variant="office"
              index={CLIENT_MARKETS.length + i}
            />
          ))}
        </motion.div>

        {/* Screen readers get the markets as text — the map itself is decorative. */}
        <p className="sr-only">
          Client markets: {CLIENT_MARKETS.map((m) => m.label).join(", ")}. Our offices:{" "}
          {OFFICE_LOCATIONS.map((m) => m.label).join(" and ")}.
        </p>

        <p className="mt-10 text-center text-base text-slate-600 sm:text-lg">
          See how managed research services can accelerate your next market decision.{" "}
          <Link
            href="/services"
            className="font-semibold text-brand underline underline-offset-4 hover:no-underline"
          >
            Explore our services
          </Link>
        </p>
      </div>
    </section>
  );
}
