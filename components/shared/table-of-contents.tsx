"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { TocHeading } from "@/lib/portable-text-utils";

interface TableOfContentsProps {
  headings: TocHeading[];
}

/**
 * Sticky, scroll-aware table of contents for long-form articles. Highlights the
 * section currently in view via IntersectionObserver and smooth-scrolls on
 * click. Renders nothing when there are too few headings to be useful.
 */
export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the heading nearest the top that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  };

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-4 text-xs font-bold tracking-widest text-slate-400 uppercase">
        On this page
      </p>
      <ul className="space-y-1 border-l border-slate-200">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={cn(
                "-ml-px block border-l-2 py-1.5 leading-snug transition-colors",
                level === 3 ? "pl-7" : "pl-4",
                activeId === id
                  ? "border-brand font-semibold text-brand"
                  : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900",
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
