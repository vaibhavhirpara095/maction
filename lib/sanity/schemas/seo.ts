import { defineType, defineField } from "sanity";

/**
 * Reusable SEO metadata object embedded in content documents. Lets editors
 * override the title/description/share image per page without touching code;
 * the templates fall back to the document's title and excerpt when empty.
 */
export const seo = defineType({
  name: "seo",
  title: "SEO & Social",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      description: "Overrides the browser tab / search result title. Aim for under 60 characters.",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      description: "Search result snippet. Aim for 120–160 characters.",
      validation: (Rule) => Rule.max(170),
    }),
    defineField({
      name: "ogImage",
      title: "Social share image",
      type: "image",
      options: { hotspot: true },
      description: "Used when the page is shared on social media. Falls back to the main image.",
    }),
    defineField({
      name: "noIndex",
      title: "Hide from search engines",
      type: "boolean",
      description: "Prevents this page from being indexed.",
      initialValue: false,
    }),
  ],
});
