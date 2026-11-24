import { SITE_URL } from "@/lib/env";

interface ArticleJsonLdProps {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  authorName?: string;
  imageUrl: string;
  section: "blog" | "case-studies";
  breadcrumbLabel: string;
}

/**
 * Emits Article + BreadcrumbList structured data for content detail pages,
 * improving eligibility for rich results.
 */
export default function ArticleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  authorName,
  imageUrl,
  section,
  breadcrumbLabel,
}: ArticleJsonLdProps) {
  const url = `${SITE_URL}/${section}/${slug}`;

  const article = {
    "@context": "https://schema.org",
    "@type": section === "blog" ? "BlogPosting" : "Article",
    headline: title,
    description,
    image: imageUrl,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: authorName
      ? { "@type": "Person", name: authorName }
      : { "@type": "Organization", name: "Maction Consulting" },
    publisher: {
      "@type": "Organization",
      name: "Maction Consulting",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: breadcrumbLabel, item: `${SITE_URL}/${section}` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
