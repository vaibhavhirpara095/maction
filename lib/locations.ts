/**
 * Map markers for the homepage Global Presence section.
 *
 * `CLIENT_MARKETS` is derived from the client roster rendered in
 * components/sections/trusted-by.tsx — every entry is the home city of a named
 * client, so the map only claims reach we already show logos for. COMPANY_STATS
 * quotes "25+ Countries Served"; add entries here as those markets are
 * confirmed and the map will pick them up with no component changes.
 *
 * `OFFICE_LOCATIONS` mirrors OFFICES in lib/site.ts.
 */

export interface MapMarker {
  /** Shown in the hover tooltip. */
  label: string;
  lat: number;
  lng: number;
  /** Relative halo size. Bigger = denser cluster of work in that market. */
  weight?: 1 | 2 | 3;
}

/** Equirectangular projection constants — must match public/world-map.svg. */
export const MAP_PROJECTION = {
  latTop: 84,
  latBottom: -58,
  /** viewBox aspect of the map asset, used for the container ratio. */
  aspectRatio: 1000 / 394.4,
} as const;

/** Convert a lat/lng to percentage offsets inside the map box. */
export function projectMarker({ lat, lng }: Pick<MapMarker, "lat" | "lng">) {
  const { latTop, latBottom } = MAP_PROJECTION;
  return {
    left: ((lng + 180) / 360) * 100,
    top: ((latTop - lat) / (latTop - latBottom)) * 100,
  };
}

export const CLIENT_MARKETS: MapMarker[] = [
  // Asia-Pacific
  { label: "Tokyo, Japan", lat: 35.68, lng: 139.69, weight: 2 },
  { label: "Hong Kong SAR", lat: 22.32, lng: 114.17, weight: 1 },
  { label: "Singapore", lat: 1.35, lng: 103.82, weight: 2 },
  { label: "Melbourne, Australia", lat: -37.81, lng: 144.96, weight: 2 },

  // India
  { label: "New Delhi, India", lat: 28.61, lng: 77.21, weight: 3 },
  { label: "Ahmedabad, India", lat: 23.03, lng: 72.58, weight: 3 },
  { label: "Mumbai, India", lat: 19.08, lng: 72.88, weight: 2 },
  { label: "Bengaluru, India", lat: 12.97, lng: 77.59, weight: 2 },
  { label: "Chennai, India", lat: 13.08, lng: 80.27, weight: 1 },
  { label: "Chandigarh, India", lat: 30.73, lng: 76.78, weight: 1 },

  // Europe
  { label: "London, United Kingdom", lat: 51.51, lng: -0.13, weight: 3 },
  { label: "Milan, Italy", lat: 45.46, lng: 9.19, weight: 1 },

  // North America
  { label: "Philadelphia, USA", lat: 39.95, lng: -75.17, weight: 2 },
  { label: "Durham, USA", lat: 35.99, lng: -78.9, weight: 1 },
  { label: "Louisville, USA", lat: 38.25, lng: -85.76, weight: 1 },
  { label: "Ann Arbor, USA", lat: 42.28, lng: -83.74, weight: 1 },
  { label: "Austin, USA", lat: 30.27, lng: -97.74, weight: 2 },
  { label: "Lubbock, USA", lat: 33.58, lng: -101.86, weight: 1 },
];

export const OFFICE_LOCATIONS: MapMarker[] = [
  { label: "Ahmedabad, India", lat: 23.03, lng: 72.58 },
  // lib/site.ts carries the +1 (515) number but no US address on file, so this
  // sits over the central United States without naming a city. Replace with the
  // real coordinates once the office address is confirmed.
  { label: "United States", lat: 39.5, lng: -98.35 },
];
