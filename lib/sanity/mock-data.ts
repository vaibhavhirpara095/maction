import type { Post, CaseStudy } from "./client";

// Market-research themed demo content used when Sanity is not configured
// (mock mode) or a fetch fails. Replace with real CMS content in production.

export const MOCK_POSTS: Post[] = [
  {
    title: "How to Size a Market: A Practical TAM/SAM/SOM Guide",
    slug: "market-sizing-tam-sam-som-guide",
    author: {
      name: "Dr. Sarah Jenkins",
      bio: "Partner & Head of Research at Maction Consulting with 15+ years in market research and analytics.",
    },
    mainImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-06-12T09:00:00.000Z",
    excerpt:
      "A step-by-step framework for sizing any market credibly — and the common mistakes that make boards distrust your numbers.",
    categories: ["Market Research", "Strategy"],
    tags: ["TAM", "Market Sizing", "Go-to-Market"],
    body: [
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Market sizing is the foundation of almost every growth decision, yet it is frequently done with a single top-down estimate that nobody can defend. A credible size comes from triangulating multiple methods until they converge." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "TAM, SAM, SOM explained" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Total Addressable Market is the full demand for a category. Serviceable Addressable Market narrows it to what your model can actually reach, and Serviceable Obtainable Market is the realistic share you can win in a defined period." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Triangulate top-down and bottom-up" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Pair top-down industry data with a bottom-up build from unit economics — customers, frequency, and price. When the two approaches land within range of each other, your number earns trust in the boardroom." }] },
      { _type: "block", style: "h3", children: [{ _type: "span", text: "Common mistakes to avoid" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Beware double-counting, optimistic capture rates, and stale secondary data. Always state your assumptions explicitly so reviewers can challenge inputs rather than the conclusion." }] },
    ],
  },
  {
    title: "Designing Surveys That Get Honest Answers",
    slug: "designing-surveys-honest-answers",
    author: {
      name: "Priya Nair",
      bio: "Research Director at Maction Consulting focused on brand and consumer insight.",
    },
    mainImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-05-28T10:30:00.000Z",
    excerpt:
      "Question wording, order, and scales quietly shape your data. Here is how to design instruments that measure reality, not your bias.",
    categories: ["Survey Design", "Market Research"],
    tags: ["Surveys", "Methodology", "Data Quality"],
    body: [
      { _type: "block", style: "normal", children: [{ _type: "span", text: "A survey is a measurement instrument. Small wording choices introduce large, systematic errors — and once bias is baked into collection, no amount of analysis can remove it." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Avoid leading and double-barrelled questions" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Ask one thing at a time, in neutral language. A question like 'how satisfied are you with our fast, friendly service?' bundles three claims and pushes respondents toward agreement." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Mind order effects and scale design" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Randomise answer options where appropriate, keep scales balanced and labelled consistently, and pilot every instrument before fielding to catch confusion early." }] },
    ],
  },
  {
    title: "Turning Customer Segmentation Into Growth",
    slug: "customer-segmentation-into-growth",
    author: {
      name: "Dr. Sarah Jenkins",
      bio: "Partner & Head of Research at Maction Consulting with 15+ years in market research and analytics.",
    },
    mainImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-05-09T14:00:00.000Z",
    excerpt:
      "Most segmentations end up in a slide deck, not a strategy. Here is how to build segments your teams will actually use.",
    categories: ["Data Analytics", "Market Research"],
    tags: ["Segmentation", "Growth", "CRM"],
    body: [
      { _type: "block", style: "normal", children: [{ _type: "span", text: "A segmentation only creates value when it changes what the business does — which products it builds, which messages it runs, and which customers it prioritises." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Segment on behaviour and needs, not just demographics" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Demographic cuts are easy to report but rarely predict behaviour. Needs-based and behavioural segments are harder to build yet far more actionable for product and marketing." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Make segments addressable" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Every segment needs a way to be identified in your CRM or media targeting. A beautiful segmentation you cannot operationalise is just an academic exercise." }] },
    ],
  },
  {
    title: "Qualitative vs Quantitative: Choosing the Right Method",
    slug: "qualitative-vs-quantitative-research",
    author: {
      name: "Chen Wei",
      bio: "Senior Consultant at Maction Consulting specializing in APAC consumer and FMCG research.",
    },
    mainImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-04-20T11:00:00.000Z",
    excerpt:
      "Qual tells you why, quant tells you how many. Choosing the wrong one wastes budget — here is a simple decision guide.",
    categories: ["Market Research"],
    tags: ["Qualitative", "Quantitative", "Research Design"],
    body: [
      { _type: "block", style: "normal", children: [{ _type: "span", text: "The qual-versus-quant debate is a false choice. The real question is which method answers your decision, and in what order." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Use qualitative to explore" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "When you do not yet know the questions to ask, interviews and focus groups surface the language, motivations, and hypotheses worth measuring at scale." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Use quantitative to validate" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Once hypotheses exist, surveys and panels measure how widely they hold, with the statistical confidence executives need to commit budget." }] },
    ],
  },
  {
    title: "Brand Tracking: Metrics That Predict Growth",
    slug: "brand-tracking-metrics-that-predict-growth",
    author: {
      name: "Priya Nair",
      bio: "Research Director at Maction Consulting focused on brand and consumer insight.",
    },
    mainImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-04-02T13:00:00.000Z",
    excerpt:
      "Awareness alone does not move revenue. These are the brand-tracking metrics that actually correlate with future sales.",
    categories: ["Brand", "Market Research"],
    tags: ["Brand Tracking", "Metrics", "Mental Availability"],
    body: [
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Brand tracking dashboards are often crowded with metrics that look good but predict nothing. A focused tracker measures the few signals linked to commercial outcomes." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Move from awareness to consideration" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Awareness saturates quickly. Consideration and preference among in-market buyers are far stronger leading indicators of share movement." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Track mental availability" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Measure how easily your brand comes to mind across the buying situations that matter. Growing mental availability reliably precedes growing market share." }] },
    ],
  },
];

export const MOCK_CASE_STUDIES: CaseStudy[] = [
  {
    title: "FMCG Market Expansion in Southeast Asia",
    slug: "fmcg-market-expansion-southeast-asia",
    client: "Global Delights Inc.",
    industry: "FMCG",
    servicesProvided: ["Market Segmentation", "Consumer Surveys", "Competitive Intelligence"],
    mainImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-06-05T08:00:00.000Z",
    excerpt:
      "Identified market-entry options and secured 14% category growth for an organic snack line across Southeast Asia.",
    overview:
      "Global Delights Inc. is a mid-sized consumer foods manufacturer expanding beyond its home market for the first time. The leadership team had ambitions for a regional organic snack line but no on-the-ground consumer intelligence to guide the launch.",
    metricValue: "14%",
    metricLabel: "Market Share Growth",
    objectives: [
      "Quantify localized flavour and packaging preferences across key urban hubs",
      "Establish defensible price points by city tier",
      "Map the most efficient retail distribution pathways for launch",
    ],
    challenge: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "Global Delights wanted to launch a new organic snack line in Southeast Asia but lacked reliable insight on localized flavor preferences, buying frequency, and price elasticity across diverse urban hubs." }] }],
    approach: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "We ran a hybrid program — digital consumer surveys with 5,000 respondents, focused taste tests, and competitor pricing analysis — then mapped regional retail pathways to define ideal distribution." }] }],
    keyFindings: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "Flavour preference varied sharply by city tier, and shoppers were willing to pay a 12% premium for credible organic certification. Modern-trade supermarkets, not convenience stores, were the highest-velocity channel for the target segment." }] }],
    results: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "Using our segmentation and entry plan, the client placed the line in 800+ tier-1 supermarkets and achieved 14% category market-share growth within nine months." }] }],
    metrics: [
      { value: "5,000", label: "Consumers Surveyed" },
      { value: "800+", label: "Stores at Launch" },
      { value: "9 mo", label: "To Target Share" },
    ],
    tags: ["FMCG", "Market Entry", "Southeast Asia"],
  },
  {
    title: "Brand Health Tracking for a Beverage Leader",
    slug: "brand-health-tracking-beverage-leader",
    client: "Riverside Beverages",
    industry: "FMCG",
    servicesProvided: ["Brand Tracking", "Consumer Research", "Data Analytics"],
    mainImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-05-15T08:00:00.000Z",
    excerpt:
      "Built a continuous brand tracker that lifted brand consideration by 18 points after a repositioning.",
    overview:
      "Riverside Beverages is a national soft-drinks player with a broad portfolio and significant annual media investment. Marketing decisions were being made without a reliable read on whether spend was actually moving brand equity.",
    metricValue: "+18%",
    metricLabel: "Brand Consideration",
    objectives: [
      "Create a single source of truth for brand health",
      "Attribute movement in equity to specific campaigns",
      "Guide media reallocation with evidence, not instinct",
    ],
    challenge: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "Riverside was investing heavily in marketing but could not tell which campaigns moved brand metrics, leaving spend decisions to guesswork." }] }],
    approach: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "We designed a quarterly brand-health tracker measuring awareness, consideration, and mental availability, and linked the results to campaign timing and media spend." }] }],
    keyFindings: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "Two of the five flagship campaigns drove almost all of the consideration lift, while a long-running sponsorship showed no measurable impact on equity despite consuming a quarter of the budget." }] }],
    results: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "The tracker isolated the campaigns that worked, guiding reallocation that lifted brand consideration by 18 points over four quarters." }] }],
    metrics: [
      { value: "4", label: "Quarters Tracked" },
      { value: "+18pt", label: "Consideration" },
      { value: "25%", label: "Budget Reallocated" },
    ],
    tags: ["Brand", "Tracking", "Beverages"],
  },
  {
    title: "Pricing Research for a Consumer Electronics Launch",
    slug: "pricing-research-consumer-electronics-launch",
    client: "NovaTech Devices",
    industry: "Consumer Electronics",
    servicesProvided: ["Pricing Research", "Conjoint Analysis", "Market Research"],
    mainImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-04-28T08:00:00.000Z",
    excerpt:
      "Used conjoint analysis to find the optimal price-feature mix for a flagship launch, lifting margin by 9%.",
    overview:
      "NovaTech Devices designs premium consumer electronics in a fiercely competitive category. A flagship launch was weeks from sign-off with the price still set by gut feel and a thin competitor scan.",
    metricValue: "9%",
    metricLabel: "Margin Uplift",
    objectives: [
      "Quantify how buyers trade off price against key features",
      "Model demand and margin across realistic price scenarios",
      "Recommend a launch configuration that protects volume",
    ],
    challenge: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "NovaTech needed to price a new flagship device without eroding margin or losing volume to aggressive competitors." }] }],
    approach: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "We ran a choice-based conjoint study to quantify how buyers traded off price against key features, then modelled demand and margin across price scenarios." }] }],
    keyFindings: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "Battery life and warranty length drove far more willingness-to-pay than the marketing team expected, while a headline cosmetic feature barely moved choice. A modest price increase paired with a longer warranty maximised contribution." }] }],
    results: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "The recommended price-feature configuration protected volume while improving contribution margin by 9% versus the original plan." }] }],
    metrics: [
      { value: "1,800", label: "Conjoint Respondents" },
      { value: "+9%", label: "Contribution Margin" },
    ],
    tags: ["Pricing", "Conjoint", "Electronics"],
  },
  {
    title: "B2B Customer Satisfaction & NPS Program",
    slug: "b2b-customer-satisfaction-nps-program",
    client: "Meridian Logistics",
    industry: "Logistics",
    servicesProvided: ["B2B Research", "NPS Program", "Data Analytics"],
    mainImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-03-30T08:00:00.000Z",
    excerpt:
      "Stood up a closed-loop B2B satisfaction program that raised relationship NPS by 22 points in a year.",
    overview:
      "Meridian Logistics is a B2B freight and warehousing provider serving large enterprise accounts. High-value relationships were churning with little warning and no structured way to hear from clients between renewals.",
    metricValue: "+22",
    metricLabel: "NPS Improvement",
    objectives: [
      "Detect at-risk accounts before renewal conversations",
      "Identify the drivers of relationship satisfaction",
      "Embed a closed-loop follow-up process across teams",
    ],
    challenge: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "Meridian was losing key accounts to silent dissatisfaction, with no systematic way to detect at-risk relationships early." }] }],
    approach: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "We built a relationship NPS program with executive interviews and driver analysis, feeding a closed-loop process that flagged accounts for proactive outreach." }] }],
    keyFindings: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "Responsiveness during exceptions — not headline price — was the dominant driver of loyalty. A small number of unresolved service incidents predicted the majority of subsequent churn." }] }],
    results: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "Within a year the program lifted relationship NPS by 22 points and measurably reduced churn among strategic accounts." }] }],
    metrics: [
      { value: "+22", label: "Relationship NPS" },
      { value: "−30%", label: "Account Churn" },
    ],
    tags: ["B2B", "NPS", "Logistics"],
  },
  {
    title: "Retail Shopper Journey & Category Study",
    slug: "retail-shopper-journey-category-study",
    client: "UrbanMart Retail",
    industry: "Retail",
    servicesProvided: ["Shopper Research", "Category Analysis", "Consumer Surveys"],
    mainImage:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-03-10T08:00:00.000Z",
    excerpt:
      "Mapped the shopper journey and reset category layout, delivering a 12% conversion uplift in pilot stores.",
    overview:
      "UrbanMart Retail operates a national chain of grocery and convenience stores. A strategically important category had flat conversion, and merchandising decisions were being made without shopper evidence.",
    metricValue: "12%",
    metricLabel: "Conversion Uplift",
    objectives: [
      "Map the in-store path to purchase for the category",
      "Locate the points of hesitation and drop-off on shelf",
      "Validate a redesigned layout before national rollout",
    ],
    challenge: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "UrbanMart faced flat conversion in a key category and did not understand where shoppers hesitated or dropped off in-store." }] }],
    approach: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "We combined shopper surveys, in-store observation, and category sales analysis to map the path to purchase and identify friction points on shelf." }] }],
    keyFindings: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "Shoppers struggled to navigate the shelf by need-state, and confusing signage caused measurable drop-off at the decision point. Reordering the range around occasions removed most of that friction." }] }],
    results: [{ _type: "block", style: "normal", children: [{ _type: "span", text: "A redesigned category layout and signage, tested in pilot stores, delivered a 12% conversion uplift before national rollout." }] }],
    metrics: [
      { value: "+12%", label: "Conversion" },
      { value: "20", label: "Pilot Stores" },
    ],
    tags: ["Retail", "Shopper", "Merchandising"],
  },
];
