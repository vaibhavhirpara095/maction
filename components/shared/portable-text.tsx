import {
  PortableText as PortableTextRenderer,
  type PortableTextComponents,
  type PortableTextBlock,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/client";
import { blockToPlainText, slugifyHeading } from "@/lib/portable-text-utils";

/**
 * Shared rich-text renderer for Sanity Portable Text. Replaces the two
 * hand-rolled renderers in the blog and case-study pages, which dropped marks
 * (bold/italic/links) and lists. Used in both list-detail templates.
 *
 * h2/h3 headings receive deterministic anchor ids (matching
 * `extractHeadings` in lib/portable-text-utils) so the table of contents can
 * deep-link into the article. Ids are disambiguated in document order via a
 * per-render counter, mirroring the TOC builder.
 */
function buildComponents(): PortableTextComponents {
  const seen = new Map<string, number>();

  const headingId = (value: PortableTextBlock): string => {
    const base = slugifyHeading(blockToPlainText(value)) || "section";
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return count === 0 ? base : `${base}-${count}`;
  };

  return {
    block: {
      h1: ({ children }) => (
        <h1 className="mt-10 mb-4 text-3xl font-black leading-tight text-slate-900 md:text-4xl">
          {children}
        </h1>
      ),
      h2: ({ children, value }) => (
        <h2
          id={headingId(value)}
          className="mt-12 mb-4 scroll-mt-28 text-2xl font-bold leading-snug text-slate-900 md:text-3xl"
        >
          {children}
        </h2>
      ),
      h3: ({ children, value }) => (
        <h3
          id={headingId(value)}
          className="mt-8 mb-3 scroll-mt-28 text-xl font-bold text-slate-900 md:text-2xl"
        >
          {children}
        </h3>
      ),
      blockquote: ({ children }) => (
        <blockquote className="my-8 rounded-r-xl border-l-4 border-brand bg-slate-50 py-4 pr-4 pl-6 text-lg font-medium text-slate-800 italic md:text-xl">
          {children}
        </blockquote>
      ),
      normal: ({ children }) => <p className="mb-5 leading-relaxed">{children}</p>,
    },
    list: {
      bullet: ({ children }) => (
        <ul className="mb-5 list-disc space-y-2 pl-6 marker:text-brand">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="mb-5 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-brand">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="pl-1 leading-relaxed">{children}</li>,
      number: ({ children }) => <li className="pl-1 leading-relaxed">{children}</li>,
    },
    marks: {
      strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      link: ({ children, value }) => {
        const href = value?.href ?? "#";
        const external = /^https?:\/\//.test(href);
        return (
          <Link
            href={href}
            className="font-medium text-brand underline underline-offset-2 hover:text-blue-700"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {children}
          </Link>
        );
      },
    },
    types: {
      image: ({ value }) => {
        const url = urlFor(value).url();
        return (
          <figure className="my-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-md">
              <Image
                src={url}
                alt={value?.alt || "Article illustration"}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
            {value?.caption && (
              <figcaption className="mt-3 text-center text-sm text-slate-500">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
    },
  };
}

export default function PortableText({
  value,
  compact = false,
}: {
  value?: PortableTextBlock[];
  /** Tighter spacing/size for narrow columns (e.g. case-study cards). */
  compact?: boolean;
}) {
  if (!value || !Array.isArray(value)) return null;
  return (
    <div
      className={
        compact
          ? "space-y-4 text-base leading-relaxed text-slate-700"
          : "text-lg leading-relaxed text-slate-700"
      }
    >
      <PortableTextRenderer value={value} components={buildComponents()} />
    </div>
  );
}
