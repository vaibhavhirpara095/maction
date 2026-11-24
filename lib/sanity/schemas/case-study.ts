import { defineType, defineField, defineArrayMember } from "sanity";

const richText = [
  defineArrayMember({
    type: "block",
    marks: {
      annotations: [
        {
          name: "link",
          type: "object",
          title: "Link",
          fields: [
            {
              name: "href",
              type: "url",
              title: "URL",
              validation: (Rule) =>
                Rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
            },
          ],
        },
      ],
    },
  }),
];

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  groups: [
    { name: "overview", title: "Overview", default: true },
    { name: "story", title: "The Story" },
    { name: "results", title: "Results" },
    { name: "seo", title: "SEO & Social" },
  ],
  fields: [
    // ---- Overview -------------------------------------------------------
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "overview",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "overview",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client / Company name",
      type: "string",
      group: "overview",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      group: "overview",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "servicesProvided",
      title: "Services provided",
      type: "array",
      group: "overview",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Featured image",
      type: "image",
      group: "overview",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "overview",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt / summary",
      type: "text",
      rows: 3,
      group: "overview",
      description: "One-line outcome shown on cards and used as the default meta description.",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "overview",
      title: "Client / company overview",
      type: "text",
      rows: 4,
      group: "overview",
      description: "Who the client is and the context for the engagement.",
    }),

    // ---- The Story ------------------------------------------------------
    defineField({
      name: "challenge",
      title: "Problem statement / the challenge",
      type: "array",
      group: "story",
      of: richText,
    }),
    defineField({
      name: "objectives",
      title: "Objectives",
      type: "array",
      group: "story",
      of: [{ type: "string" }],
      description: "The goals of the engagement, shown as a checklist.",
    }),
    defineField({
      name: "approach",
      title: "Research methodology / process",
      type: "array",
      group: "story",
      of: richText,
    }),
    defineField({
      name: "keyFindings",
      title: "Key findings & insights",
      type: "array",
      group: "story",
      of: richText,
    }),

    // ---- Results --------------------------------------------------------
    defineField({
      name: "results",
      title: "Results & outcomes",
      type: "array",
      group: "results",
      of: richText,
    }),
    defineField({
      name: "metricValue",
      title: "Headline metric value (e.g. +45%)",
      type: "string",
      group: "results",
    }),
    defineField({
      name: "metricLabel",
      title: "Headline metric label (e.g. Revenue growth)",
      type: "string",
      group: "results",
    }),
    defineField({
      name: "metrics",
      title: "Additional outcome metrics",
      type: "array",
      group: "results",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string", title: "Value" },
            { name: "label", type: "string", title: "Label" },
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),

    // ---- SEO ------------------------------------------------------------
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      group: "seo",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "seo",
      title: "SEO & Social",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "client", media: "mainImage" },
  },
});
