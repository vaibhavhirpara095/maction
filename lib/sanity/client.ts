import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/react";
import { publicEnv, isMockMode } from "@/lib/env";
import { MOCK_POSTS, MOCK_CASE_STUDIES } from "./mock-data";

// Revalidate cached Sanity content hourly (ISR) so editor changes appear
// without a redeploy. Applied per-query via the `next` fetch option below.
const REVALIDATE_SECONDS = 3600;

const config = {
  projectId: publicEnv.NEXT_PUBLIC_SANITY_PROJECT_ID || "mock-project-id",
  dataset: publicEnv.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-11",
  useCdn: process.env.NODE_ENV === "production",
};

export const client = createClient(config);

const builder = createImageUrlBuilder(client);

// Derive the image-source type from the builder so it stays correct across
// @sanity/image-url versions without a fragile deep import path.
type SanityImageSource = Parameters<typeof builder.image>[0];

export function urlFor(source: SanityImageSource | string | null | undefined) {
  if (!source || isMockMode) {
    return {
      url: () => (typeof source === "string" ? source : "/logo.png"),
    };
  }
  return builder.image(source);
}

// Interfaces
export interface SeoMeta {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImageSource;
  noIndex?: boolean;
}

export interface Post {
  title: string;
  slug: string;
  author: {
    name: string;
    image?: SanityImageSource;
    bio?: string;
  };
  mainImage?: SanityImageSource;
  publishedAt: string;
  excerpt: string;
  body: PortableTextBlock[];
  categories: string[];
  tags?: string[];
  seo?: SeoMeta;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  industry: string;
  servicesProvided: string[];
  mainImage?: SanityImageSource;
  publishedAt: string;
  excerpt: string;
  overview?: string;
  challenge: PortableTextBlock[];
  objectives?: string[];
  approach: PortableTextBlock[];
  keyFindings?: PortableTextBlock[];
  results: PortableTextBlock[];
  metricValue?: string;
  metricLabel?: string;
  metrics?: CaseStudyMetric[];
  tags?: string[];
  seo?: SeoMeta;
}

// Helper Queries
export async function getPosts(): Promise<Post[]> {
  if (isMockMode) {
    return MOCK_POSTS;
  }
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      author->{
        name,
        image,
        "bio": bio[0].children[0].text
      },
      mainImage,
      publishedAt,
      excerpt,
      body,
      "categories": categories[]->title,
      tags,
      seo
    }`;
    return await client.fetch(query, {}, { next: { revalidate: REVALIDATE_SECONDS, tags: ["post"] } });
  } catch (err) {
    console.warn("Sanity fetch failed, returning mock posts", err);
    return MOCK_POSTS;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (isMockMode) {
    return MOCK_POSTS.find((p) => p.slug === slug) || null;
  }
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      author->{
        name,
        image,
        "bio": bio[0].children[0].text
      },
      mainImage,
      publishedAt,
      excerpt,
      body,
      "categories": categories[]->title,
      tags,
      seo
    }`;
    return await client.fetch(query, { slug }, { next: { revalidate: REVALIDATE_SECONDS, tags: ["post"] } });
  } catch (err) {
    console.warn(`Sanity fetch failed for post slug "${slug}", returning mock fallback`, err);
    return MOCK_POSTS.find((p) => p.slug === slug) || null;
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (isMockMode) {
    return MOCK_CASE_STUDIES;
  }
  try {
    const query = `*[_type == "caseStudy"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      client,
      industry,
      servicesProvided,
      mainImage,
      publishedAt,
      excerpt,
      overview,
      challenge,
      objectives,
      approach,
      keyFindings,
      results,
      metricValue,
      metricLabel,
      metrics,
      tags,
      seo
    }`;
    return await client.fetch(query, {}, { next: { revalidate: REVALIDATE_SECONDS, tags: ["caseStudy"] } });
  } catch (err) {
    console.warn("Sanity fetch failed, returning mock case studies", err);
    return MOCK_CASE_STUDIES;
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  if (isMockMode) {
    return MOCK_CASE_STUDIES.find((cs) => cs.slug === slug) || null;
  }
  try {
    const query = `*[_type == "caseStudy" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      client,
      industry,
      servicesProvided,
      mainImage,
      publishedAt,
      excerpt,
      overview,
      challenge,
      objectives,
      approach,
      keyFindings,
      results,
      metricValue,
      metricLabel,
      metrics,
      tags,
      seo
    }`;
    return await client.fetch(query, { slug }, { next: { revalidate: REVALIDATE_SECONDS, tags: ["caseStudy"] } });
  } catch (err) {
    console.warn(`Sanity fetch failed for case study slug "${slug}", returning mock fallback`, err);
    return MOCK_CASE_STUDIES.find((cs) => cs.slug === slug) || null;
  }
}

