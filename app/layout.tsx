import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ClientLayoutWrapper from "@/components/layout/client-layout-wrapper";
import { Toaster } from "sonner";
import CookieConsent from "@/components/consent/cookie-consent";
import JsonLd from "@/components/seo/json-ld";
import ScrollTracker from "@/components/seo/scroll-tracker";
import { publicEnv, SITE_URL } from "@/lib/env";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maction Consulting | Market Research, Data Analytics & Consulting",
    template: "%s | Maction Consulting",
  },
  description: "Maction Consulting provides data-driven insights, market research, advanced analytics, and business & marketing consulting to empower global enterprises.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maction Consulting | Research, Analytics & Consulting",
    description: "Accelerate business growth with data-driven research, analytics, and business consulting.",
    url: "https://maction.com",
    siteName: "Maction Consulting",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 2172,
        height: 724,
        alt: "Maction Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maction Consulting | Research, Analytics & Consulting",
    description: "Accelerate business growth with data-driven research, analytics, and business consulting.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
        <Toaster position="top-right" richColors />
        <CookieConsent gaId={publicEnv.NEXT_PUBLIC_GA_ID} />
        <JsonLd />
        <ScrollTracker />
      </body>
    </html>
  );
}