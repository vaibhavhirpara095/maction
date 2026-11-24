import { SITE_URL } from "@/lib/env";

interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}

export default function ServiceJsonLd({
  name,
  description,
  url,
  serviceType = "Business consulting service",
}: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: {
      "@type": "Organization",
      name: "Maction Consulting",
      url: SITE_URL,
    },
    url,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
