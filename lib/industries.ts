import {
  HeartPulse,
  ShoppingBag,
  Store,
  Cpu,
  Signal,
  Coins,
  Users,
  GraduationCap,
  Car,
  Sprout,
  Beaker,
  Factory,
  Hammer,
  Briefcase,
  Wrench,
  Droplet,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  challenge: string;
  opportunity: string;
  capabilities: string[];
  cta: string;
  seoTitle?: string;
  seoDescription?: string;
  researchServices?: string[];
  businessQuestions?: string[];
  deliverables?: string[];
  faqs?: { question: string; answer: string }[];
  editorialEyebrow?: string;
  editorialHero?: string;
  editorialAccent?: string;
  editorialTopics?: string[];
  editorialSectionHeading?: string;
  editorialSectionLead?: string;
  editorialTensionHeading?: string;
  editorialOpportunityHeading?: string;
}

// Single source of truth for sector content — shared by the interactive
// dashboard on /industries and each /industries/[slug] detail page.
export const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare-pharmaceuticals",
    name: "Healthcare & Pharmaceuticals",
    icon: HeartPulse,
    description:
      "Leverage predictive consumer panels and clinical analysis. We survey medical professionals, trace patient compliance patterns, and benchmark drug entry routes, allowing healthcare systems and pharmaceutical firms to optimize patient outcomes.",
    challenge:
      "Navigating shifting regulatory compliance rules (HIPAA/GDPR) while capturing high-integrity feedback from specialized, time-constrained medical personnel.",
    opportunity:
      "Utilizing NLP qualitative modeling to process large-scale patient feedback logs and identify early warning signs of product dissatisfaction.",
    capabilities: ["Physician Panel Profiling", "Patient Compliance Mapping", "Clinical Feasibility Audits"],
    cta: "Scale Healthcare Analytics",
  },
  {
    slug: "fmcg",
    name: "FMCG (Consumer Goods)",
    icon: ShoppingBag,
    description:
      "FMCG markets shift rapidly due to digital commerce. We run quantitative consumer panels, test price elasticities, and map retail layouts to help consumer packaged goods brands capture shelf space and boost margins.",
    challenge:
      "Maintaining brand loyalty in an era of hyper-fragmented digital channels and rapid shifts in consumer sustainability expectations.",
    opportunity:
      "Implementing real-time digital feedback loops and flavor/packaging testing to shorten time-to-market for new organic lines.",
    capabilities: ["Quantitative Concept Testing", "Price Elasticity Benchmarking", "Retail Placement Audits"],
    cta: "Track FMCG Trends",
    seoTitle: "FMCG Market Research & Consumer Insights",
    seoDescription:
      "FMCG market research and consumer insights for concept testing, pricing, shopper behavior, brand tracking, and retail growth decisions.",
    researchServices: [
      "Consumer behavior and usage research",
      "Brand health and awareness tracking",
      "Product, flavor, and packaging concept testing",
      "Pricing and willingness-to-pay research",
      "Shopper insights and retail placement audits",
      "Competitive and category intelligence",
    ],
    businessQuestions: [
      "Which consumer segments are most likely to choose our product?",
      "Will customers understand and prefer the new product or packaging concept?",
      "What price point balances trial, value perception, and margin?",
      "Where do shoppers discover, compare, and purchase the category?",
      "How is our brand performing against competitors across markets?",
    ],
    deliverables: [
      "Consumer and shopper segment profiles",
      "Concept or packaging test report",
      "Pricing and demand analysis",
      "Brand and competitor benchmark",
      "Retail opportunity recommendations",
      "Executive presentation and action roadmap",
    ],
    faqs: [
      {
        question: "What does FMCG market research cover?",
        answer:
          "FMCG research can cover consumer behavior, brand health, concept and packaging testing, pricing, shopper journeys, retail execution, and competitor performance. The scope is shaped around the commercial decision you need to make.",
      },
      {
        question: "Can you test a new FMCG product before launch?",
        answer:
          "Yes. We can structure research to evaluate product concepts, packaging, claims, pricing, purchase intent, and the reasons behind consumer preference before a launch decision.",
      },
      {
        question: "Do you support multi-market FMCG research?",
        answer:
          "Yes. Multi-market programs can use a consistent research framework with locally appropriate sampling and execution, allowing results to be compared while preserving market context.",
      },
      {
        question: "How can FMCG research improve retail performance?",
        answer:
          "Research can identify shopper needs, purchase barriers, channel differences, price perceptions, and placement opportunities so teams can prioritize actions across products, brands, and retail environments.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    icon: Store,
    description:
      "Omnichannel e-commerce leaders require real-time conversion optimizations. We run path-to-purchase studies, track user behaviors, build attribution models, and design BI pipelines to help digital retailers retain subscribers.",
    challenge:
      "Reducing customer acquisition costs (CAC) and cart abandonment rates in highly competitive programmatic ad bidding environments.",
    opportunity:
      "Deploying multi-touch attribution models and automated CRM segmentation to maximize Customer Lifetime Value (CLV).",
    capabilities: ["Path-to-Purchase Modeling", "CRM Segmentation Pipelines", "Attribution & CAC Optimizations"],
    cta: "Maximize Retail Conversions",
  },
  {
    slug: "information-technology",
    name: "Information Technology (IT)",
    icon: Cpu,
    description:
      "Enterprise SaaS sales cycles require deep buyer understanding. We run B2B buyer survey panels, compile competitive intelligence reports, and test user experiences to guide product roadmaps and strategic positioning.",
    challenge: "Aligning software developer feature requests with core enterprise buyer procurement requirements.",
    opportunity:
      "Running deep competitor benchmarking audits to identify gaps in rival product capabilities and pricing structures.",
    capabilities: ["B2B SaaS Buyer Audits", "Competitor Security Auditing", "Developer Feedback Moderation"],
    cta: "Analyze IT Competitors",
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    icon: Signal,
    description:
      "Carrier margins are pressured by package matching. We design machine learning models that analyze transaction histories and support transcripts to flag churn risks, enabling proactive retention campaigns.",
    challenge:
      "High subscriber acquisition costs combined with declining average revenue per user (ARPU) across standard consumer packages.",
    opportunity: "Ingesting historical support interactions to build predictive customer churn risk dashboards.",
    capabilities: ["Predictive Churn Modeling", "ARPU Optimization Studies", "Network Quality Sentiment Analysis"],
    cta: "Reduce Subscriber Churn",
  },
  {
    slug: "financial-services-banking",
    name: "Financial Services & Banking",
    icon: Coins,
    description:
      "Financial platforms require trust and safety. We run quantitative survey panels to identify investment trends, automate risk reporting metrics, and optimize digital banking journeys for retail banks and fintech platforms.",
    challenge:
      "Developing customer trust in digital-only banking models while navigating complex international KYC and compliance laws.",
    opportunity: "Mapping mobile banking UX flows to identify drop-offs and friction points in the retail lending pipeline.",
    capabilities: ["Fintech Journey Optimization", "Investment Survey Panels", "Risk Reporting Dashboard Design"],
    cta: "Optimize Financial Portfolios",
  },
  {
    slug: "social-rural-research",
    name: "Social & Rural Research",
    icon: Users,
    description:
      "Policymakers and developmental groups require field data from remote regions. We deploy specialized interviewers to run localized focus groups and secure questionnaires, bringing clarity to rural developmental initiatives.",
    challenge:
      "Accessing remote, logistically challenging regions and managing language/methodological biases during field execution.",
    opportunity: "Deploying offline-capable mobile survey portals and local network panels to streamline data collection.",
    capabilities: ["Rural Fieldwork Audits", "Offline Survey Management", "Developmental Program Assessments"],
    cta: "Run Rural Surveys",
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    description:
      "Academic institutions navigate shifting student demands. We track program market values, map student application journeys, and run surveys to help colleges and EdTech platforms scale admissions and student retention.",
    challenge:
      "High recruitment acquisition costs alongside changing expectations regarding EdTech utility and remote program values.",
    opportunity: "Building quantitative student satisfaction trackers to trace retention warning signs early.",
    capabilities: ["EdTech Journey Audits", "Student Retention Tracking", "Institutional Market Feasibility"],
    cta: "Expand Student Enrollment",
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: Car,
    description:
      "The transition to electric platforms changes buyer journeys. We track consumer EV preferences, test infotainment features, benchmark charging network satisfaction, and optimize pricing ranges for global manufacturers.",
    challenge: "Understanding consumer hesitations around EV range, battery lifespan, and public charging accessibility.",
    opportunity: "Conducting localized charging network sentiment surveys to guide public utility allocations.",
    capabilities: ["EV Consumer Preference Tracking", "Infotainment UX Studies", "Pricing Range Assessments"],
    cta: "Benchmark EV Trends",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    icon: Sprout,
    description:
      "Farm operations face environmental and distribution challenges. We host farmer feedback panels to test seed acceptability, analyze supply chains, and build dashboards to forecast demand for agricultural suppliers.",
    challenge: "Volatile weather patterns combined with lack of transparent distributor inventory tracking.",
    opportunity: "Structuring digital farmer feedback panels to track seed yield satisfaction and equipment preferences.",
    capabilities: ["Farmer Panel Auditing", "Supply Chain Inventory Mapping", "Yield Satisfaction Surveys"],
    cta: "Audit Agriculture Assets",
  },
  {
    slug: "chemicals",
    name: "Chemicals",
    icon: Beaker,
    description:
      "Chemical production requires regulatory tracking. We conduct global sizing audits, trace supply chain pathways, and benchmark safety preferences to help chemical firms maintain supply security and market positioning.",
    challenge: "Tracing global chemical distributor stock levels while maintaining safety compliance standards.",
    opportunity: "Running competitor pricing and market sizing audits to guide production capacities.",
    capabilities: ["Global Sizing Audits", "Chemical Pricing Benchmarks", "Distributor Preference Profiling"],
    cta: "Analyze Chemical Sizing",
  },
  {
    slug: "industrials-manufacturing",
    name: "Industrials & Manufacturing",
    icon: Factory,
    description:
      "Factories require asset visibility. We trace procurement patterns, run quantitative customer interviews, and construct dashboards to streamline supply chains and guide capital allocations.",
    challenge: "Legacy inventory systems causing bottlenecks in procurement pipelines and vendor integrations.",
    opportunity: "Deploying predictive logistics dashboards to forecast equipment parts requirements.",
    capabilities: ["Logistics Pipeline Ingestion", "Procurement Pattern Tracing", "Vendor Service Level Auditing"],
    cta: "Optimize Industrial Logistics",
  },
  {
    slug: "construction-infrastructure",
    name: "Construction & Infrastructure",
    icon: Hammer,
    description:
      "Feasibility testing is critical for capital projects. We conduct localized market sizing studies, survey construction managers, and analyze equipment utilization to guide resource allocation.",
    challenge: "Accurately forecasting construction material shortages and cost fluctuations prior to project execution.",
    opportunity: "Surveying key general contractors regarding equipment rental preferences and procurement metrics.",
    capabilities: ["Equipment Rental Audits", "Project Feasibility Modeling", "Sizing & Procurement Studies"],
    cta: "Assess Infrastructure Viability",
  },
  {
    slug: "professional-business-services",
    name: "Professional & Business Services",
    icon: Briefcase,
    description:
      "B2B professional services depend on client retention. We run brand trackers, audit service pricing structures, and structure client feedback loops to boost account growth and service value.",
    challenge: "High client attrition rates driven by silent disengagement and competitor fee undercutting.",
    opportunity: "Designing automated, secure client feedback programs to flag account relationship risks.",
    capabilities: ["B2B Brand Retention Trackers", "Service Pricing Audits", "Client Relationship Diagnostics"],
    cta: "Scale B2B Relationships",
  },
  {
    slug: "engineering",
    name: "Engineering",
    icon: Wrench,
    description:
      "Engineering firms require developer alignment. We survey technical leaders, benchmark development tools, and evaluate product feasibility to help teams align with industry expectations.",
    challenge: "Vague developer requirements leading to bloated software engineering roadmap scopes.",
    opportunity: "Hosting technical developer panels to benchmark tool stack satisfaction and adoption curves.",
    capabilities: ["Technical Leader Surveying", "Developer Tool Benchmarking", "Engineering Scope Feasibility"],
    cta: "Launch Developer Research",
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    icon: Droplet,
    description:
      "Energy markets navigate price volatility. We trace equipment vendor footprints, build inventory dashboards, and run energy market simulations to support strategic asset planning.",
    challenge: "High equipment maintenance overheads combined with lack of unified vendor logistics databases.",
    opportunity: "Deploying energy asset dashboards to trace equipment procurement and project lifetimes.",
    capabilities: ["Equipment Vendor Audits", "Energy Asset Dashboards", "Simulated Market Sizing"],
    cta: "Analyze Energy Markets",
  },
  {
    slug: "media-advertising",
    name: "Media & Advertising",
    icon: Megaphone,
    description:
      "Ad platforms compete for attention. We run brand lift surveys, track digital engagement, and audit ad placements to help agencies optimize returns on ad spend and content deployment.",
    challenge: "Declining consumer attention span and lack of unified metrics for multi-platform ad spend returns.",
    opportunity: "Executing fast brand-lift panels to benchmark consumer ad recall and sentiment.",
    capabilities: ["Ad Recall Attention Panels", "Brand Lift Benchmarking", "Attribution Performance Metrics"],
    cta: "Boost Advertising ROI",
  },
];

const EDITORIAL_CONTENT: Record<string, Partial<Industry>> = {
  "healthcare-pharmaceuticals": {
    seoTitle: "Healthcare & Pharmaceutical Market Research",
    seoDescription: "Healthcare and pharmaceutical market research for patient insights, physician research, treatment journeys, product positioning, and market access decisions.",
    researchServices: ["Physician and healthcare professional research", "Patient journey and adherence studies", "Treatment concept and product testing", "Market access and opportunity sizing", "Health brand and communication research", "Qualitative healthcare insight programs"],
    businessQuestions: ["What barriers affect diagnosis, treatment, or adherence?", "How do healthcare professionals evaluate new products?", "Which patient and provider segments have the greatest unmet need?", "How should a product be positioned in a changing care pathway?", "What evidence can improve launch and market access decisions?"],
    deliverables: ["Patient and provider segment profiles", "Treatment journey map", "Market opportunity assessment", "Concept and communication evaluation", "Competitive positioning report", "Executive action roadmap"],
    editorialEyebrow: "Healthcare insight / evidence-led decisions",
    editorialHero: "Make better care",
    editorialAccent: "more understood.",
    editorialTopics: ["Patient journeys", "Provider insight", "Market access"],
    editorialSectionHeading: "From lived experience to better decisions.",
    editorialSectionLead: "Healthcare choices are complex. We connect patient, provider, and market evidence so teams can act with clarity.",
    editorialTensionHeading: "Trust is hard to earn.",
    editorialOpportunityHeading: "Evidence can close the gap.",
  },
  "retail-ecommerce": {
    seoTitle: "Retail & E-commerce Market Research",
    seoDescription: "Retail and e-commerce market research for shopper journeys, customer segmentation, conversion, pricing, loyalty, and omnichannel growth.",
    researchServices: ["Shopper journey and path-to-purchase research", "Customer segmentation and personas", "Conversion and experience research", "Pricing and promotion studies", "Omnichannel behavior analysis", "Loyalty and retention analytics"],
    businessQuestions: ["Where do shoppers drop out of the journey?", "Which experiences increase conversion and repeat purchase?", "How do online and offline shoppers differ?", "Which segments have the greatest lifetime value?", "What pricing or promotion strategy protects margin?"],
    deliverables: ["Shopper journey map", "Customer segment profiles", "Conversion friction analysis", "Pricing and promotion insights", "Omnichannel opportunity report", "Prioritized growth roadmap"],
    editorialEyebrow: "Shopper insight / retail growth",
    editorialHero: "Make every",
    editorialAccent: "moment count.",
    editorialTopics: ["Shopper behavior", "Experience design", "Growth analytics"],
    editorialSectionHeading: "From first click to lasting loyalty.",
    editorialSectionLead: "We reveal the moments that move shoppers from discovery to purchase, then from purchase to preference.",
    editorialTensionHeading: "Choice is everywhere.",
    editorialOpportunityHeading: "Clarity converts.",
  },
  "information-technology": {
    seoTitle: "IT & SaaS Market Research",
    seoDescription: "IT and SaaS market research for B2B buyer insights, product positioning, competitive intelligence, pricing, and technology adoption.",
    researchServices: ["B2B buyer and decision-maker research", "SaaS product and concept testing", "Competitive intelligence", "Technology adoption research", "Pricing and packaging studies", "UX and product experience research"],
    businessQuestions: ["Who influences and approves the buying decision?", "Which product problems are most valuable to solve?", "How is the market comparing competing platforms?", "What pricing and packaging feels credible to buyers?", "Which messages improve consideration and pipeline quality?"],
    deliverables: ["B2B buyer journey", "Needs and use-case segmentation", "Competitive benchmark", "Product positioning framework", "Pricing and packaging analysis", "Go-to-market recommendations"],
    editorialEyebrow: "Technology insight / buyer intelligence",
    editorialHero: "Build what the",
    editorialAccent: "market will choose.",
    editorialTopics: ["Buyer behavior", "Product strategy", "Market positioning"],
    editorialSectionHeading: "From technical possibility to commercial pull.",
    editorialSectionLead: "We translate complex technology markets into clear buyer, product, and positioning decisions.",
    editorialTensionHeading: "Feature lists are not strategy.",
    editorialOpportunityHeading: "Buyer evidence is.",
  },
  "telecommunications": {
    seoTitle: "Telecommunications Market Research & Analytics",
    seoDescription: "Telecommunications market research for subscriber behavior, churn, ARPU, brand experience, network perception, and product strategy.",
    researchServices: ["Subscriber experience and satisfaction research", "Churn and retention analytics", "Plan and pricing research", "Network quality perception studies", "Brand and communications tracking", "Segment and usage profiling"],
    businessQuestions: ["What causes subscribers to consider switching?", "Which plan benefits create real value?", "How does network experience shape loyalty?", "Which customer groups are at greatest churn risk?", "What can improve ARPU without damaging trust?"],
    deliverables: ["Subscriber segments", "Churn driver analysis", "Plan and pricing recommendations", "Customer experience scorecard", "Brand perception tracker", "Retention action plan"],
    editorialEyebrow: "Subscriber insight / telecom growth",
    editorialHero: "Turn every",
    editorialAccent: "signal into action.",
    editorialTopics: ["Subscriber behavior", "Churn intelligence", "Value perception"],
    editorialSectionHeading: "From network experience to customer loyalty.",
    editorialSectionLead: "We connect usage, experience, and value signals to help telecom teams protect relationships in competitive markets.",
    editorialTensionHeading: "Switching takes one moment.",
    editorialOpportunityHeading: "Retention starts earlier.",
  },
  "financial-services-banking": {
    seoTitle: "Financial Services & Banking Market Research",
    seoDescription: "Financial services and banking market research for customer experience, fintech adoption, trust, product testing, segmentation, and growth strategy.",
    researchServices: ["Banking customer experience research", "Fintech adoption and trust studies", "Financial product concept testing", "Customer segmentation", "Digital journey and usability research", "Brand and communication tracking"],
    businessQuestions: ["What builds or breaks trust in a financial product?", "Where do customers experience friction in digital journeys?", "Which segments are ready for a new proposition?", "How do customers compare banks and fintech providers?", "What message makes a complex product easier to choose?"],
    deliverables: ["Customer journey map", "Trust and perception analysis", "Segment opportunity profiles", "Product concept evaluation", "Digital experience recommendations", "Growth decision roadmap"],
    editorialEyebrow: "Financial insight / trust-led growth",
    editorialHero: "Make every",
    editorialAccent: "decision feel clear.",
    editorialTopics: ["Customer trust", "Digital journeys", "Product adoption"],
    editorialSectionHeading: "From financial complexity to confident choice.",
    editorialSectionLead: "We help financial teams understand the people behind the numbers and the moments that shape adoption.",
    editorialTensionHeading: "Trust is the product.",
    editorialOpportunityHeading: "Understanding builds it.",
  },
  "social-rural-research": {
    seoTitle: "Social & Rural Market Research",
    seoDescription: "Social and rural market research for fieldwork, community insight, program evaluation, access studies, and inclusive development decisions.",
    researchServices: ["Rural and semi-urban fieldwork", "Community needs assessment", "Program and impact evaluation", "Livelihood and access studies", "Qualitative local insight", "Multilingual survey execution"],
    businessQuestions: ["What do communities need most from a program or service?", "How do local contexts change behavior and access?", "Which groups are being missed by current delivery?", "What barriers prevent adoption or participation?", "How can impact be measured consistently across regions?"],
    deliverables: ["Community segment profiles", "Needs and access assessment", "Fieldwork quality report", "Program evaluation findings", "Local insight synthesis", "Actionable implementation plan"],
    editorialEyebrow: "Field insight / inclusive decisions",
    editorialHero: "Listen closer.",
    editorialAccent: "See further.",
    editorialTopics: ["Community insight", "Field intelligence", "Program impact"],
    editorialSectionHeading: "From local context to meaningful action.",
    editorialSectionLead: "We bring rigorous, locally aware research to decisions that affect communities, programs, and access.",
    editorialTensionHeading: "Distance hides detail.",
    editorialOpportunityHeading: "Field insight reveals it.",
  },
  education: {
    seoTitle: "Education Market Research & Student Insights",
    seoDescription: "Education market research for student journeys, enrollment, program demand, experience, retention, and institutional growth decisions.",
    researchServices: ["Student journey and enrollment research", "Program demand and feasibility studies", "Student satisfaction and experience tracking", "Parent and learner segmentation", "EdTech product research", "Institutional brand research"],
    businessQuestions: ["What drives student consideration and enrollment?", "Which barriers affect application completion?", "What program features matter most to learners?", "Where are students at risk of disengaging?", "How can institutions strengthen their value proposition?"],
    deliverables: ["Student journey map", "Learner segment profiles", "Program opportunity assessment", "Experience and satisfaction tracker", "Brand positioning recommendations", "Enrollment action plan"],
    editorialEyebrow: "Education insight / learner growth",
    editorialHero: "Understand the",
    editorialAccent: "learner journey.",
    editorialTopics: ["Student behavior", "Program demand", "Experience insight"],
    editorialSectionHeading: "From first consideration to lasting progress.",
    editorialSectionLead: "We connect learner needs, institutional strengths, and market signals to improve education decisions.",
    editorialTensionHeading: "Expectations keep moving.",
    editorialOpportunityHeading: "Insight keeps you ready.",
  },
  automotive: {
    seoTitle: "Automotive Market Research & Consumer Insights",
    seoDescription: "Automotive market research for vehicle buyers, EV adoption, product testing, pricing, brand tracking, dealer experience, and mobility strategy.",
    researchServices: ["Vehicle buyer and driver research", "EV adoption and charging studies", "Product and feature testing", "Automotive pricing research", "Brand and model tracking", "Dealer and ownership experience research"],
    businessQuestions: ["What is holding buyers back from EV adoption?", "Which features influence consideration and choice?", "How do buyers compare models and brands?", "What price and finance proposition feels right?", "Where does the ownership journey create friction?"],
    deliverables: ["Buyer segment profiles", "Feature and concept priorities", "EV adoption barrier analysis", "Pricing and demand insights", "Brand and model benchmark", "Mobility growth recommendations"],
    editorialEyebrow: "Mobility insight / automotive growth",
    editorialHero: "Move with the",
    editorialAccent: "buyer, not ahead.",
    editorialTopics: ["Buyer behavior", "EV adoption", "Ownership experience"],
    editorialSectionHeading: "From consideration to the road ahead.",
    editorialSectionLead: "We help automotive teams understand changing mobility expectations and the choices behind the next vehicle.",
    editorialTensionHeading: "The journey is changing.",
    editorialOpportunityHeading: "The buyer still leads.",
  },
  agriculture: {
    seoTitle: "Agriculture Market Research & Farmer Insights",
    seoDescription: "Agriculture market research for farmer behavior, input adoption, channel intelligence, product testing, and agricultural growth strategy.",
    researchServices: ["Farmer and grower research", "Agricultural input adoption studies", "Dealer and channel research", "Product and claims testing", "Rural demand forecasting", "Supply chain and market intelligence"],
    businessQuestions: ["What drives adoption of a new agricultural input?", "How do farmers evaluate performance and value?", "Which channels influence purchase decisions?", "What barriers affect product trial and repeat use?", "Where are the strongest market opportunities by region?"],
    deliverables: ["Farmer segment profiles", "Adoption driver analysis", "Channel and dealer map", "Product test findings", "Regional opportunity assessment", "Commercial action plan"],
    editorialEyebrow: "Agriculture insight / field intelligence",
    editorialHero: "Grow from the",
    editorialAccent: "ground up.",
    editorialTopics: ["Farmer behavior", "Input adoption", "Channel insight"],
    editorialSectionHeading: "From field reality to better growth decisions.",
    editorialSectionLead: "We bring the voice of farmers, dealers, and rural markets into product and commercial strategy.",
    editorialTensionHeading: "Every region is different.",
    editorialOpportunityHeading: "Local insight scales.",
  },
  chemicals: {
    seoTitle: "Chemicals Market Research & B2B Insights",
    seoDescription: "Chemicals market research for industrial buyers, application demand, competitive intelligence, pricing, customer segmentation, and market entry.",
    researchServices: ["Industrial buyer research", "Application and end-use analysis", "Market sizing and opportunity assessment", "Competitive intelligence", "Pricing and value perception", "Customer needs and segmentation"],
    businessQuestions: ["Which applications offer the strongest growth potential?", "How do technical buyers evaluate suppliers?", "What differentiates competing chemical solutions?", "Where is price pressure affecting value perception?", "Which markets are ready for expansion?"],
    deliverables: ["B2B buyer profiles", "Application opportunity map", "Competitive benchmark", "Market sizing model", "Pricing and value analysis", "Market entry recommendations"],
    editorialEyebrow: "Industrial insight / chemistry markets",
    editorialHero: "Find the",
    editorialAccent: "reaction that matters.",
    editorialTopics: ["Buyer intelligence", "Applications", "Market opportunity"],
    editorialSectionHeading: "From technical value to commercial momentum.",
    editorialSectionLead: "We turn complex industrial markets into clear evidence for portfolio, pricing, and growth decisions.",
    editorialTensionHeading: "Complexity slows choice.",
    editorialOpportunityHeading: "Clarity moves markets.",
  },
  "industrials-manufacturing": {
    seoTitle: "Industrial & Manufacturing Market Research",
    seoDescription: "Industrial and manufacturing market research for B2B buyers, demand forecasting, competitive intelligence, customer experience, and growth strategy.",
    researchServices: ["Industrial buyer and procurement research", "Demand and market sizing studies", "Customer satisfaction and loyalty", "Competitive benchmarking", "Product and solution testing", "Channel and distributor research"],
    businessQuestions: ["What criteria shape industrial procurement decisions?", "Where is demand changing across applications?", "How do buyers evaluate suppliers and service?", "Which capabilities create a defensible advantage?", "What can improve channel performance and retention?"],
    deliverables: ["Procurement journey map", "Demand and opportunity assessment", "Supplier benchmark", "Customer satisfaction analysis", "Channel insight report", "Growth priority roadmap"],
    editorialEyebrow: "Manufacturing insight / B2B growth",
    editorialHero: "Make the",
    editorialAccent: "next move count.",
    editorialTopics: ["Buyer decisions", "Demand signals", "Competitive edge"],
    editorialSectionHeading: "From production reality to market advantage.",
    editorialSectionLead: "We help industrial teams connect buyer needs, market movement, and commercial action.",
    editorialTensionHeading: "Markets do not stand still.",
    editorialOpportunityHeading: "Evidence keeps pace.",
  },
  "construction-infrastructure": {
    seoTitle: "Construction & Infrastructure Market Research",
    seoDescription: "Construction and infrastructure market research for project demand, stakeholder insight, procurement, supplier positioning, and investment decisions.",
    researchServices: ["Construction stakeholder research", "Project and market opportunity sizing", "Procurement and specification research", "Contractor and channel insight", "Supplier brand and reputation tracking", "Infrastructure demand analysis"],
    businessQuestions: ["Where is project demand developing next?", "How do stakeholders choose suppliers and solutions?", "What influences specification and procurement?", "Which segments or regions offer the best opportunity?", "How can a supplier strengthen consideration?"],
    deliverables: ["Stakeholder maps", "Market opportunity assessment", "Procurement journey", "Competitive positioning report", "Regional demand analysis", "Commercial growth roadmap"],
    editorialEyebrow: "Built environment insight / market growth",
    editorialHero: "Build on",
    editorialAccent: "better evidence.",
    editorialTopics: ["Project demand", "Stakeholder insight", "Market entry"],
    editorialSectionHeading: "From project pipeline to commercial clarity.",
    editorialSectionLead: "We bring the perspectives of developers, contractors, specifiers, and buyers into growth decisions.",
    editorialTensionHeading: "Projects are complex.",
    editorialOpportunityHeading: "The decision can be clear.",
  },
  "professional-business-services": {
    seoTitle: "Professional & Business Services Market Research",
    seoDescription: "Professional and business services market research for B2B buyers, client needs, positioning, satisfaction, competitive intelligence, and growth.",
    researchServices: ["B2B client and buyer research", "Needs and service proposition studies", "Client satisfaction and loyalty", "Brand and reputation tracking", "Competitive positioning", "Market entry and growth strategy"],
    businessQuestions: ["What outcomes do clients value most?", "How do buyers compare professional service providers?", "Where are service experiences falling short?", "What should the proposition stand for?", "Which segments offer the strongest growth potential?"],
    deliverables: ["Client segment profiles", "Buyer decision journey", "Service proposition framework", "Satisfaction and loyalty report", "Competitive positioning", "Growth action plan"],
    editorialEyebrow: "B2B insight / service growth",
    editorialHero: "Make your",
    editorialAccent: "value visible.",
    editorialTopics: ["Client needs", "Service value", "B2B growth"],
    editorialSectionHeading: "From expertise to unmistakable value.",
    editorialSectionLead: "We help professional service firms understand buyer expectations and turn expertise into a stronger proposition.",
    editorialTensionHeading: "Expertise can look similar.",
    editorialOpportunityHeading: "Insight makes it distinct.",
  },
  engineering: {
    seoTitle: "Engineering Market Research & B2B Insights",
    seoDescription: "Engineering market research for technical buyers, solution adoption, competitive positioning, pricing, and industrial growth decisions.",
    researchServices: ["Technical buyer research", "Engineering solution concept testing", "Market sizing and demand analysis", "Competitive capability benchmarking", "Pricing and value studies", "Customer experience research"],
    businessQuestions: ["What technical and commercial criteria drive selection?", "Which applications have the clearest demand?", "How do buyers compare engineering solutions?", "What value justifies premium pricing?", "Which messages help technical teams align internally?"],
    deliverables: ["Technical buyer profiles", "Application demand map", "Solution benchmark", "Value and pricing analysis", "Decision journey", "Commercial recommendation"],
    editorialEyebrow: "Engineering insight / technical markets",
    editorialHero: "Turn complex",
    editorialAccent: "into clear choice.",
    editorialTopics: ["Technical buyers", "Applications", "Commercial value"],
    editorialSectionHeading: "From engineering detail to market direction.",
    editorialSectionLead: "We connect technical requirements with the human and commercial decisions that shape adoption.",
    editorialTensionHeading: "Technical value needs translation.",
    editorialOpportunityHeading: "Insight creates alignment.",
  },
  "oil-gas": {
    seoTitle: "Oil & Gas Market Research & Energy Insights",
    seoDescription: "Oil and gas market research for energy demand, stakeholder insight, supplier positioning, investment decisions, and transition strategy.",
    researchServices: ["Energy stakeholder research", "Market and demand assessment", "Supplier and procurement insight", "Energy transition research", "Reputation and communication tracking", "Competitive intelligence"],
    businessQuestions: ["How are energy priorities changing by market?", "What do industrial buyers need from suppliers?", "Which transition opportunities are commercially viable?", "How is stakeholder trust shaping decisions?", "Where should investment and capability focus next?"],
    deliverables: ["Stakeholder segment profiles", "Demand and opportunity assessment", "Supplier benchmark", "Transition perception study", "Reputation insight report", "Strategic action roadmap"],
    editorialEyebrow: "Energy insight / transition intelligence",
    editorialHero: "Read the",
    editorialAccent: "energy ahead.",
    editorialTopics: ["Energy demand", "Stakeholders", "Transition"],
    editorialSectionHeading: "From shifting energy needs to strategic action.",
    editorialSectionLead: "We help energy teams understand markets, stakeholders, and the decisions shaping the next phase of the sector.",
    editorialTensionHeading: "The landscape keeps moving.",
    editorialOpportunityHeading: "Evidence shows direction.",
  },
  "media-advertising": {
    seoTitle: "Media & Advertising Market Research",
    seoDescription: "Media and advertising market research for audience insight, brand lift, campaign effectiveness, attention, content testing, and media strategy.",
    researchServices: ["Audience and media behavior research", "Brand lift and campaign evaluation", "Creative and message testing", "Ad recall and attention studies", "Content and platform insight", "Media effectiveness analytics"],
    businessQuestions: ["Who is paying attention and why?", "Which creative idea drives memory and action?", "How is the audience changing across platforms?", "What is improving brand consideration?", "Where can media investment work harder?"],
    deliverables: ["Audience segment profiles", "Creative test findings", "Brand lift measurement", "Campaign effectiveness report", "Platform and content insights", "Media action recommendations"],
    editorialEyebrow: "Audience insight / media effectiveness",
    editorialHero: "Make attention",
    editorialAccent: "work harder.",
    editorialTopics: ["Audience behavior", "Creative impact", "Media value"],
    editorialSectionHeading: "From attention to measurable action.",
    editorialSectionLead: "We show media and marketing teams what people notice, remember, and do next.",
    editorialTensionHeading: "Attention is fragmented.",
    editorialOpportunityHeading: "Insight reconnects it.",
  },
};

export const INDUSTRIES_BY_SLUG: Record<string, Industry> = Object.fromEntries(
  INDUSTRIES.map((i) => [i.slug, { ...i, ...EDITORIAL_CONTENT[i.slug] }]),
);

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES_BY_SLUG[slug];
}

/** Sector-tailored FAQs for industry detail pages. */
export function getIndustryFaqs(name: string) {
  return [
    {
      question: `Do you have experience in ${name}?`,
      answer: `Yes. We run dedicated ${name} research and analytics programs, combining sector specialists with our core methodology so insights reflect the realities of your market.`,
    },
    {
      question: "Can you run research across multiple regions?",
      answer:
        "Absolutely. We manage multi-country fieldwork across 25+ markets with consistent quality controls and locally-aware moderation, then consolidate results into one comparable view.",
    },
    {
      question: "Do you combine qualitative and quantitative methods?",
      answer:
        "We do. Most engagements blend quantitative panels for scale with qualitative depth (interviews, focus groups) so you get both the 'what' and the 'why'.",
    },
    {
      question: "How quickly can we get results?",
      answer:
        "Timelines depend on scope, but we commit to milestones upfront and most clients see first findings within days of fieldwork starting.",
    },
  ];
}
