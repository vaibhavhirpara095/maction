import {
  Search,
  BarChart3,
  Briefcase,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  overview: string;
  capabilities: string[];
  deliverables: string[];
}

// Canonical service catalogue — single source for the homepage section, the
// /services index, and each /services/[slug] detail page. Copy is structured
// placeholder; refine before launch.
export const SERVICES: Service[] = [
  {
    slug: "market-research",
    icon: Search,
    title: "Market Research Services",
    shortDescription:
      "Understand markets, customers, and competition with rigorous primary and secondary research that de-risks your biggest decisions.",
    overview:
      "We design and run end-to-end market research programs — sizing opportunities, testing concepts, tracking brands, and mapping competitive dynamics — so leadership can act on evidence rather than instinct.",
    capabilities: [
      "Market sizing (TAM/SAM/SOM)",
      "Consumer & brand research",
      "Concept & product testing",
      "Competitive intelligence",
      "Qualitative & quantitative studies",
    ],
    deliverables: [
      "Research design & instruments",
      "Cleaned, weighted datasets",
      "Insight report with recommendations",
      "Executive readout",
    ],
  },
  {
    slug: "data-analytics",
    icon: BarChart3,
    title: "Data Analytics",
    shortDescription:
      "Turn raw, scattered data into decision-ready insight with statistical modelling, segmentation, and clear dashboards.",
    overview:
      "Our analysts transform complex datasets into clear, decision-ready insight — from descriptive analysis and segmentation to predictive modelling and interactive reporting.",
    capabilities: [
      "Statistical & predictive modelling",
      "Segmentation & clustering",
      "Churn, CLV & retention analysis",
      "Dashboards & BI reporting",
      "Data cleaning & preparation",
    ],
    deliverables: [
      "Analytical models & documentation",
      "Insight report",
      "Interactive dashboards",
      "Analyst enablement & handover",
    ],
  },
  {
    slug: "business-marketing-consulting",
    icon: Briefcase,
    title: "Business & Marketing Consulting",
    shortDescription:
      "Translate insight into action — growth strategy, market entry, positioning, and pricing built on evidence.",
    overview:
      "We help leadership teams make high-stakes growth decisions with confidence — backed by market sizing, competitive analysis, and commercial modelling that turns research into a clear plan.",
    capabilities: [
      "Growth & market-entry strategy",
      "Brand & positioning",
      "Pricing & revenue optimization",
      "Go-to-market planning",
      "Competitive diagnostics",
    ],
    deliverables: [
      "Strategy roadmap",
      "Market & competitor assessment",
      "Pricing / financial models",
      "Board-ready recommendations",
    ],
  },
  {
    slug: "research-support-services",
    icon: ClipboardList,
    title: "Research Support Services",
    shortDescription:
      "Power your research operations — survey programming, global fieldwork, data processing, and reporting support.",
    overview:
      "We run the operational backbone of research at scale: programming logic-heavy surveys, managing multi-country fieldwork and panels, and processing data with deterministic quality control.",
    capabilities: [
      "Survey programming & scripting",
      "Fieldwork & panel management",
      "Data processing & coding",
      "Transcription & translation",
      "Tabulation & charting",
    ],
    deliverables: [
      "Programmed survey instrument",
      "Fielded, quality-checked data",
      "Coded & tabulated outputs",
      "Charting & report support",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// Our consistent four-stage engagement model, shown on every service page.
export const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We align on your decision, success criteria, and constraints — then design a research or analytics approach scoped to answer it.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We build the instruments, sampling plan, and models, with quality controls defined upfront so outputs are defensible.",
  },
  {
    step: "03",
    title: "Field & Analyze",
    description:
      "We collect and process data with deterministic QC on every output, then analyze for patterns that matter to your decision.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "You receive decision-ready recommendations, an executive readout, and the assets your team needs to act and keep going.",
  },
];

// Common questions that apply across all service engagements.
export const SERVICE_FAQS = [
  {
    question: "How long does a typical engagement take?",
    answer:
      "It depends on scope — a focused study can deliver in 2–4 weeks, while a multi-country program runs longer. We scope timelines upfront and commit to milestones, with most clients seeing first findings within days.",
  },
  {
    question: "How do you ensure data quality?",
    answer:
      "Every project includes deterministic quality control: representative sampling, validation checks, de-duplication, and analyst review on every output. You receive the methodology appendix alongside the findings.",
  },
  {
    question: "Can you work alongside our internal teams?",
    answer:
      "Yes. We embed with your insights, marketing, or product teams and can hand over clean datasets, dashboards, and documentation so your team can build on the work independently.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "We price per project against a defined scope — no per-seat licences or annual lock-in. After a short discovery call we provide a fixed proposal with clear deliverables.",
  },
];
