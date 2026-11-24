import Script from "next/script";
import { SITE_URL } from "@/lib/env";

export default function JsonLd() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maction Consulting",
    "alternateName": "Maction",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "sameAs": [
      "https://www.linkedin.com/company/maction-consulting",
      "https://twitter.com/maction_consult"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-756-729-6146",
      "contactType": "customer service",
      "email": "info@maction.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["en"]
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Maction Consulting",
    "image": `${SITE_URL}/logo.png`,
    "@id": `${SITE_URL}/#localbusiness`,
    "url": SITE_URL,
    "telephone": "+91-756-729-6146",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A/1/D, Chinubhai Tower, Near HK College, Ashram Road",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380009",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0225,
      "longitude": 72.5714
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maction Consulting",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "Maction Consulting",
      url: SITE_URL,
    },
  };

  return (
    <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
