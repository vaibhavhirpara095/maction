import type { NextConfig } from "next";

// Applied to every route. Kept CSP-light because GA + Sanity Studio inject
// inline scripts; add a Content-Security-Policy (Report-Only first) once the
// allowed script/style/connect sources are pinned down.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; object-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://cdn.sanity.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://cdn.sanity.io https://*.api.sanity.io; frame-src 'self' https://*.sanity.io; worker-src 'self' blob:; manifest-src 'self';",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Allow other devices on the LAN (phones/tablets) to load dev-only assets
  // (/_next/* chunks, HMR) when testing via the network URL, e.g.
  // http://192.168.1.6:3000. Without this, Next.js blocks these cross-origin
  // dev requests and the page renders blank on other devices. Dev-only.
  allowedDevOrigins: ["192.168.1.6", "192.168.1.*"],
  images: {
    // Next 16 only optimizes to qualities on this allowlist. 100 keeps the
    // primary logo sharp, while 90 is used for the client logo grid.
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/our-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/our-services/:path*",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/market-research-services",
        destination: "/services/market-research",
        permanent: true,
      },
      {
        source: "/data-analytics",
        destination: "/services/data-analytics",
        permanent: true,
      },
      {
        source: "/business-marketing-consulting",
        destination: "/services/business-marketing-consulting",
        permanent: true,
      },
      {
        source: "/research-support-services",
        destination: "/services/research-support-services",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
