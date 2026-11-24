/**
 * Single source of truth for company-level facts reused across pages
 * (homepage hero, About page, footer). Keep marketing numbers here so they
 * never drift between sections.
 */

export const COMPANY_STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "25+", label: "Countries Served" },
  { value: "100+", label: "Enterprise Clients" },
  { value: "10+", label: "Years Experience" },
] as const;

export const OFFICES = [
  {
    country: "India",
    flag: "/in.svg",
    address: ["A/1/D, Chinubhai Tower,", "Near HK College, Ashram Road,", "Ahmedabad - 380009, India"],
    phone: "+91 756 729 6146",
    phoneHref: "tel:+917567296146",
  },
  {
    country: "USA",
    flag: "/us.svg",
    address: [],
    phone: "+1 (515) 344-1068",
    phoneHref: "tel:+15153441068",
  },
] as const;

export const ACCREDITATIONS = [
  { src: "/iso.png", alt: "ISO Certification", name: "ISO Certified" },
  { src: "/eso.png", alt: "ESOMAR", name: "ESOMAR Member" },
  { src: "/insig.png", alt: "Insights Association", name: "Insights Association" },
  { src: "/msri.png", alt: "MRSI", name: "MRSI Member" },
] as const;

export const COMPANY_VALUES = [
  {
    title: "Methodological Rigour",
    description:
      "Every engagement is grounded in validated research design, representative sampling, and statistically defensible analysis.",
  },
  {
    title: "Actionable Insight",
    description:
      "We translate data into decisions — clear recommendations leadership teams can act on, not dashboards that gather dust.",
  },
  {
    title: "Global, Local Expertise",
    description:
      "Field capability across 25+ countries paired with deep on-the-ground understanding of regional consumer behaviour.",
  },
  {
    title: "Technology-Led",
    description:
      "Modern analytics and data pipelines applied where they add genuine analytical leverage — not novelty for its own sake.",
  },
] as const;
