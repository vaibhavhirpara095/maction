"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";


import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

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

export default function MobileMenu() {
    const pathname = usePathname();
    const [companyOpen, setCompanyOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <button
                        aria-label="Open navigation menu"
                        className="rounded-lg p-2 transition-colors hover:bg-slate-50"
                    >
                        <Menu className="h-6 w-6 text-slate-700" />
                    </button>
                </SheetTrigger>

                <SheetContent side="right" className="flex w-[300px] flex-col justify-between p-6">
                    <SheetTitle className="sr-only">Navigation menu</SheetTitle>

                    <div className="mt-2 space-y-8">
                        {/* Logo — also returns to the homepage and closes the menu */}
                        <SheetClose asChild>
                            <Link href="/" aria-label="Maction Consulting — home" className="inline-flex">
                                <Image
                                    src="/logo.png"
                                    alt="Maction Consulting"
                                    width={543}
                                    height={181}
                                    quality={100}
                                    className="h-11 w-auto object-contain"
                                />
                            </Link>
                        </SheetClose>

                        <nav className="flex flex-col gap-1 text-base font-semibold text-slate-800">
                            {[navLinks[0]].map((link) => {
                                const isActive =
                                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                                return (
                                    <SheetClose asChild key={`${link.href}-${link.label}`}>
                                        <Link
                                            href={link.href}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`rounded-lg px-3 py-2 transition-colors ${
                                                isActive
                                                    ? "bg-blue-50 text-brand"
                                                    : "text-slate-800 hover:bg-slate-50 hover:text-brand"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                );
                            })}
                            <div>
                                <button
                                    type="button"
                                    aria-expanded={companyOpen}
                                    onClick={() => setCompanyOpen((open) => !open)}
                                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors ${
                                        pathname.startsWith("/about")
                                            ? "bg-blue-50 text-brand"
                                            : "text-slate-800 hover:bg-slate-50 hover:text-brand"
                                    }`}
                                >
                                    Company
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform ${companyOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {companyOpen && (
                                    <div className="ml-3 border-l border-slate-200 pl-3">
                                        {companyLinks.map((link) => (
                                            <SheetClose asChild key={`${link.href}-${link.label}`}>
                                                <Link
                                                    href={link.href}
                                                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand"
                                                >
                                                    {link.label}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {navLinks.slice(1).map((link) => {
                                const isActive =
                                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                                return (
                                    <SheetClose asChild key={`${link.href}-${link.label}`}>
                                        <Link
                                            href={link.href}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`rounded-lg px-3 py-2 transition-colors ${
                                                isActive
                                                    ? "bg-blue-50 text-brand"
                                                    : "text-slate-800 hover:bg-slate-50 hover:text-brand"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                );
                            })}
                        </nav>
                    </div>

                    <div className="space-y-6 border-t border-slate-100 pt-6">
                        <SheetClose asChild>
                            <Link
                                href="/contact-us"
                                className="flex w-full items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                            >
                                Discuss a project
                            </Link>
                        </SheetClose>
                        <div className="flex flex-col gap-3 text-xs leading-tight font-bold text-slate-500">
                            <a
                                href="tel:+917567296146"
                                className="flex items-center gap-2 no-underline transition-colors hover:text-brand"
                            >
                                <Image
                                    src="/in.svg"
                                    alt="India"
                                    width={18}
                                    height={12}
                                    className="h-auto rounded-sm border border-slate-200"
                                />
                                <span>
                                    India: <span className="font-extrabold text-slate-800">+91 756 729 6146</span>
                                </span>
                            </a>
                            <a
                                href="tel:+15153441068"
                                className="flex items-center gap-2 no-underline transition-colors hover:text-brand"
                            >
                                <Image
                                    src="/us.svg"
                                    alt="USA"
                                    width={18}
                                    height={12}
                                    className="h-auto rounded-sm border border-slate-200"
                                />
                                <span>
                                    USA: <span className="font-extrabold text-slate-800">+1 (515) 344-1068</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
