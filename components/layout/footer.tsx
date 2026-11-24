import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/services";
import { INDUSTRIES_BY_SLUG } from "@/lib/industries";

/**
 * Sectors surfaced in the footer — a curated subset of the full catalogue on
 * /industries, kept short enough for one column. Names and hrefs are resolved
 * from lib/industries.ts so a slug rename can never leave a dead footer link.
 */
const FOOTER_INDUSTRY_SLUGS = [
  "agriculture",
  "automotive",
  "education",
  "fmcg",
  "healthcare-pharmaceuticals",
  "industrials-manufacturing",
  "information-technology",
  "retail-ecommerce",
  "chemicals",
  "construction-infrastructure",
  "professional-business-services",
] as const;

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/about#mission-vision", label: "Mission & Vision" },
  { href: "/about#values", label: "Our Values" },
  { href: "/about#why-choose-us", label: "Why Choose Us" },
  { href: "/about#locations", label: "Locations" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact-us", label: "Work With Us" },
] as const;

const SUPPORT_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const;

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 lg:grid-cols-5">

                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <Image
                            src="/logo.png"
                            alt="Maction Consulting"
                            width={543}
                            height={181}
                            quality={100}
                            className="mb-6 h-16 w-auto object-contain"
                        />

                        <div className="flex items-center gap-2 mb-3">
                            <Image
                                src="/in.svg"
                                alt="India Flag"
                                width={24}
                                height={16}
                                className="h-auto rounded-sm border border-slate-200"
                            />
                            <h3 className="text-lg font-semibold">
                                INDIA
                            </h3>
                        </div>

                        <p className="text-sm leading-6 text-gray-600">
                            A/1/D, Chinubhai Tower,
                            <br />
                            Near HK College,
                            <br />
                            Ashram Road,
                            <br />
                            Ahmedabad - 380009,
                            <br />
                            India
                        </p>

                        <p className="mt-3 text-sm">
                            <strong>P:</strong> +91 756 729 6146
                        </p>

                        <p className="text-sm">
                            <strong>M:</strong> info@maction.com
                        </p>

                        <div className="mt-8">
                            <div className="flex items-center gap-2 mb-2">
                                <Image
                                    src="/us.svg"
                                    alt="USA Flag"
                                    width={24}
                                    height={16}
                                    className="h-auto rounded-sm border border-slate-200"
                                />
                                <h3 className="text-lg font-semibold">
                                    USA
                                </h3>
                            </div>

                            <p className="text-sm">
                                <strong>P:</strong> +1 (515) 344-1068
                            </p>
                        </div>

                        {/* Accreditations & Memberships */}
                        <div className="mt-10">
                            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                                Accreditations &amp; Memberships
                            </p>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                                <Image
                                    src="/iso.png"
                                    alt="ISO Certification"
                                    width={80}
                                    height={80}
                                    className="h-12 w-auto object-contain"
                                    unoptimized
                                />
                                <Image
                                    src="/eso.png"
                                    alt="ESOMAR"
                                    width={120}
                                    height={60}
                                    className="h-10 w-auto object-contain"
                                    unoptimized
                                />
                                <Image
                                    src="/insig.png"
                                    alt="Insights Association"
                                    width={120}
                                    height={60}
                                    className="h-10 w-auto object-contain"
                                    unoptimized
                                />
                                <Image
                                    src="/msri.png"
                                    alt="MRSI"
                                    width={120}
                                    height={60}
                                    className="h-10 w-auto object-contain"
                                    unoptimized
                                />
                            </div>

                            <div className="mt-8 flex items-start gap-4">
                                <Image
                                    src="/qr.png"
                                    alt="D&B credentials QR code"
                                    width={140}
                                    height={140}
                                    className="h-28 w-28 rounded-lg border border-slate-200 object-contain"
                                    unoptimized
                                />
                                <p className="max-w-[10rem] text-sm leading-relaxed text-slate-500">
                                    Scan to see our D&amp;B credentials
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold">
                            Our Services
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-600 footer-links-col">
                            {SERVICES.map((service) => (
                                <Link key={service.slug} href={`/services/${service.slug}`}>
                                    {service.title}
                                </Link>
                            ))}
                            <Link href="/services">All Services</Link>
                        </div>
                    </div>

                    {/* Industry Sectors */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold">
                            Industry Sectors
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-600 footer-links-col">
                            {FOOTER_INDUSTRY_SLUGS.map((slug) => {
                                const industry = INDUSTRIES_BY_SLUG[slug];
                                if (!industry) return null;

                                return (
                                    <Link key={slug} href={`/industries/${slug}`}>
                                        {industry.name}
                                    </Link>
                                );
                            })}
                            <Link href="/industries">All Sectors</Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold">
                            Company
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-600 footer-links-col">
                            {COMPANY_LINKS.map((link) => (
                                <Link key={link.label} href={link.href}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold">
                            Support
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-600 footer-links-col">
                            {SUPPORT_LINKS.map((link) => (
                                <Link key={link.label} href={link.href}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
                    © 2026 Maction Consulting. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
