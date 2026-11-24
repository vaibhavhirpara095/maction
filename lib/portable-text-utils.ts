import type { PortableTextBlock } from "@portabletext/react";

/**
 * Helpers for deriving metadata from Sanity Portable Text on the server, so the
 * blog/case-study templates can render a table of contents, reading time, and
 * stable heading anchors without duplicating logic between the renderer and the
 * page. Heading slugs produced here MUST match those applied by the PortableText
 * renderer (see `components/shared/portable-text.tsx`) for in-page links to work.
 */

export interface TocHeading {
  /** Anchor id (matches the rendered heading's `id`). */
  id: string;
  /** Visible heading text. */
  text: string;
  /** 2 = h2, 3 = h3. h1 is reserved for the page title. */
  level: 2 | 3;
}

/** Flatten a single block's spans into plain text. */
export function blockToPlainText(block: PortableTextBlock): string {
  if (!block || !Array.isArray(block.children)) return "";
  return block.children
    .map((child) => (typeof child?.text === "string" ? child.text : ""))
    .join("");
}

/** Flatten an array of blocks (ignoring images and other non-text types). */
export function toPlainText(blocks?: PortableTextBlock[]): string {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .filter((block) => block?._type === "block")
    .map(blockToPlainText)
    .join(" ")
    .trim();
}

/**
 * Deterministic slug used for heading anchors. Kept dependency-free and stable
 * so the same text always yields the same id on both server and client.
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Extract h2/h3 headings for a table of contents. De-duplicates ids by
 * appending a counter, mirroring how the renderer disambiguates repeats.
 */
export function extractHeadings(blocks?: PortableTextBlock[]): TocHeading[] {
  if (!Array.isArray(blocks)) return [];
  const seen = new Map<string, number>();
  const headings: TocHeading[] = [];

  for (const block of blocks) {
    if (block?._type !== "block") continue;
    const style = block.style;
    if (style !== "h2" && style !== "h3") continue;

    const text = blockToPlainText(block);
    if (!text) continue;

    const base = slugifyHeading(text) || "section";
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    const id = count === 0 ? base : `${base}-${count}`;

    headings.push({ id, text, level: style === "h2" ? 2 : 3 });
  }

  return headings;
}

/** Estimated reading time in whole minutes (min 1) at ~200 wpm. */
export function readingTimeMinutes(blocks?: PortableTextBlock[]): number {
  const words = toPlainText(blocks).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
