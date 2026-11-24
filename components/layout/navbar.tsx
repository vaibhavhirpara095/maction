"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import MobileMenu from "@/components/layout/mobile-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about", label: "Maction Team" },
  { href: "/about#mission-vision", label: "Mission, Vision and Values" },
  { href: "/contact-us", label: "Work With Us" },
  { href: "/services/market-research", label: "Market Research FAQs" },
  { href: "/about#locations", label: "Locations" },
  { href: "/about#why-choose-us", label: "Why Choose Us" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Solid white header: blends with the logo's white background (no "pasted
    // box" look) and reads clean over the dark hero below. Only the shadow and
    // height shift on scroll for a subtle, premium feel.
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "border-b border-slate-200/80 shadow-sm" : "border-b border-slate-100"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 transition-all duration-300 xl:gap-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo — full original prominence (h-14 / md:h-16), aspect ratio kept
            via w-auto + object-contain, blended into the white header. */}
        <Link href="/" aria-label="Maction Consulting — home" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="Maction Consulting"
            width={543}
            height={181}
            priority
            quality={100}
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>

        {/* Primary navigation (center) */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {[navLinks[0]].map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-brand" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand" />
                )}
              </Link>
            );
          })}
          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              type="button"
              aria-expanded={companyOpen}
              aria-haspopup="true"
              onClick={() => setCompanyOpen((open) => !open)}
              className={`relative flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                pathname.startsWith("/about") ? "text-brand" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Company
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${companyOpen ? "rotate-180" : ""}`} />
              {pathname.startsWith("/about") && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand" />
              )}
            </button>
            <div
              className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-all ${
                companyOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-xl">
                {companyLinks.map((link) => (
                  <Link
                    key={`${link.href}-${link.label}`}
                    href={link.href}
                    onClick={() => setCompanyOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.slice(1).map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-brand" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Contact details (right) */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400">
            <MessageSquare className="h-4 w-4" />
          </span>
          <div className="flex flex-col gap-0.5 text-[11px] leading-tight font-semibold text-slate-500">
            <a
              href="tel:+917567296146"
              className="flex items-center gap-1.5 no-underline transition-colors hover:text-brand"
            >
              <Image
                src="/in.svg"
                alt="India"
                width={16}
                height={11}
                className="h-auto rounded-[2px] border border-slate-200"
              />
              <span>
                India: <span className="font-bold text-slate-800">+91 756 729 6146</span>
              </span>
            </a>
            <a
              href="tel:+15153441068"
              className="flex items-center gap-1.5 no-underline transition-colors hover:text-brand"
            >
              <Image
                src="/us.svg"
                alt="USA"
                width={16}
                height={11}
                className="h-auto rounded-[2px] border border-slate-200"
              />
              <span>
                USA: <span className="font-bold text-slate-800">+1 (515) 344-1068</span>
              </span>
            </a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
