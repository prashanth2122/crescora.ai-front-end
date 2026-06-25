import { siteContent } from "@/lib/site-content";

export type Tier = "A" | "B" | "C";

export type IndiaStateSeo = {
  slug: string;
  name: string;
  tier: Tier;
  languages: string[];
  title: string;
  h1: string;
  keywordTarget: string;
  description: string;
  stateFocus: string;
  workflowSlugs: string[];
  industryFocus: string;
  localProof: string;
  localFaqNote: string;
  localSeeds: string[];
};

export type WorkflowSeo = {
  slug: string;
  title: string;
  h1: string;
  keywordTarget: string;
  headline: string;
  description: string;
  outline: string[];
  ctaLabel: string;
  metadataTitle?: string;
  metadataDescription?: string;
  publicPage?: {
    eyebrow?: string;
    heroTitle: string;
    heroDescription: string;
    heroPrimaryCta: {
      label: string;
      href: string;
    };
    heroSecondaryCta: {
      label: string;
      href: string;
    };
    heroSupportLine?: string;
    heroFlowSteps?: string[];
    heroStatusChips?: string[];
    heroVisual?: {
      eyebrow?: string;
      title: string;
      description: string;
      note?: string;
    };
    workflowDiagramSection?: {
      eyebrow?: string;
      title: string;
      description?: string;
      steps: string[];
      supportLine?: string;
    };
    overviewCards: Array<{
      eyebrow: string;
      title: string;
      description: string;
    }>;
    capabilitySection: {
      eyebrow?: string;
      title: string;
      description?: string;
      items: Array<{
        title: string;
        description: string;
      }>;
      supportLine?: string;
    };
    beforeAfterSection: {
      eyebrow?: string;
      title: string;
      description?: string;
      rows: Array<{
        before: string;
        after: string;
      }>;
    };
    journeySection: {
      eyebrow?: string;
      title: string;
      description?: string;
      steps: string[];
    };
    launchSection?: {
      eyebrow?: string;
      title: string;
      description?: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    contextSection?: {
      eyebrow?: string;
      title: string;
      description?: string;
      items: Array<{
        title: string;
        description: string;
      }>;
      note?: string;
    };
    trustSection: {
      eyebrow?: string;
      title: string;
      description?: string;
      items: Array<{
        title: string;
        description: string;
      }>;
      supportLine?: string;
    };
    outcomesSection: {
      eyebrow?: string;
      title: string;
      description?: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    faqSection?: {
      eyebrow?: string;
      title: string;
      description?: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    finalCta: {
      eyebrow?: string;
      title: string;
      description: string;
      note?: string;
      primary: {
        label: string;
        href: string;
      };
      secondary: {
        label: string;
        href: string;
      };
    };
  };
};

export type TemplateSeo = {
  slug: string;
  title: string;
  intent: string;
  keywordTarget: string;
  headline: string;
  description: string;
  included: string[];
  ctaLabel: string;
};

export type IndustrySeo = {
  slug: string;
  name: string;
  title: string;
  h1: string;
  keywordTarget: string;
  description: string;
  focus: string;
  proof: string;
  ctaLabel: string;
};

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export const indiaSeo = {
  metadata: {
    title: "Conversational AI Workflow Automation in India | FLOW",
    description:
      "India-wide SEO architecture for state hubs, workflow pages, templates, and local-language modules built for FLOW by Crescora.",
  },
  hero: {
    eyebrow: "India SEO",
    title: "Conversational AI workflow automation for teams across India.",
    description:
      "This hub organizes the national SEO program around state hubs, workflow pages, industry pages, template pages, and localized modules so search intent maps cleanly to the right landing page.",
  },
  sections: {
    statePriority: {
      eyebrow: "State hubs",
      title: "Launch state hubs first where commercial density is highest.",
      description:
        "The report prioritizes the first wave of bespoke SEO investment around the strongest MSME and commercial clusters.",
    },
    workflowPriority: {
      eyebrow: "Workflow pages",
      title: "Workflow pages are the main conversion engine.",
      description:
        "The document says BOFU workflows should lead the architecture because they map to jobs buyers already search for.",
    },
    templatePriority: {
      eyebrow: "Templates",
      title: "Templates capture the build-and-launch intent behind the search.",
      description:
        "Template pages turn commercial queries into practical rollout assets with screenshots, triggers, and handoff logic.",
    },
    local: {
      eyebrow: "Local SEO",
      title: "Use real citations, real offices, and real proof.",
      description:
        "The report calls for local signals that match the business footprint instead of thin city pages or fake map listings.",
      items: [
        "Publish Google Business Profile pages only for real offices or genuine service locations.",
        "Build Indian citations with Justdial and Sulekha where the business has real regional presence.",
        "Use B2B profiles on Clutch, GoodFirms, G2, Capterra India, and Gartner Peer Insights where applicable.",
        "Support startup ecosystem, chamber, and association listings with state-specific proof blocks.",
        "Use PR and backlinks to reinforce the state hub and industry cluster pages.",
      ],
    },
    technical: {
      eyebrow: "Technical SEO",
      title: "Keep the site crawlable, canonical, and easy to understand.",
      description:
        "The strategy calls for SSR/SSG, mobile parity, canonical URLs, modest FAQ schema, strong internal links, and segmented sitemaps.",
      items: [
        "SSR or SSG for public landing pages so search engines can crawl real HTML.",
        "Mobile parity for metadata, content, and structured data.",
        "Canonical URLs for each hub, workflow, template, and industry page.",
        "Hreflang for localized language variants when those modules are published.",
        "Segmented sitemaps for hub, state, workflow, template, and industry clusters.",
        "Core Web Vitals tracking, Search Console monitoring, and sparse FAQ schema only where it helps.",
      ],
    },
    measurement: {
      eyebrow: "Measurement",
      title:
        "Search Console, GA4, CRM, and Looker Studio should sit in one reporting layer.",
      description:
        "Track non-brand clicks, query coverage, rankings, organic conversions, assisted pipeline, CWV pass rate, and index quality.",
    },
  },
  roadmap: [
    "Immediate: build information architecture, templates, metadata logic, internal links, Search Console, and analytics.",
    "Immediate: publish the India hub, Tier A state pages, workflow pages, and industry pages.",
    "Immediate: add structured data, canonicals, sitemap segmentation, SSR/SSG cleanup, and Core Web Vitals fixes.",
    "Near-term: publish template pages and competitor-alternative pages, plus directory/review and local citation baselines.",
    "Near-term: add local-language FAQs and priority multilingual variants.",
    "Later: expand Tier B and Tier C coverage only where Search Console proves demand and uniqueness exists.",
  ],
  measurement: [
    "Non-brand organic clicks to state, workflow, template, and industry pages.",
    "Priority query coverage across state and workflow clusters.",
    "Rank movement in Top 3, Top 10, and Top 20 groups.",
    "Organic conversion rate for demo requests and booked calls.",
    "Assisted and sourced pipeline from organic search.",
    "Core template engagement and CTA rate.",
    "CWV pass rate and template health.",
    "Indexed canonical URLs vs submitted URLs.",
    "Directory profile completeness and review velocity.",
  ],
} as const;

export function buildBreadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href,
    })),
  };
}

export const indiaStates: IndiaStateSeo[] = [
  {
    slug: "maharashtra",
    name: "Maharashtra",
    tier: "A",
    languages: ["Marathi", "Hindi", "English"],
    title: "WhatsApp Automation in Maharashtra | FLOW by Crescora",
    h1: "Enterprise workflow automation for teams in Maharashtra",
    keywordTarget: "whatsapp automation maharashtra",
    description:
      "Mumbai, Pune, and other commercial clusters benefit from workflows around WhatsApp, booking, reminders, billing, payments, and document collection.",
    stateFocus:
      "High-density commercial and service demand with strong WhatsApp-led buyer intent.",
    workflowSlugs: ["whatsapp-automation", "appointment-booking", "payments"],
    industryFocus: "Hospitals, clinics, and service businesses",
    localProof:
      "Use Maharashtra-specific examples, screenshots, and Marathi + English FAQs to avoid thin duplication.",
    localFaqNote:
      "Add Marathi + English FAQ modules once the English hub is live.",
    localSeeds: [
      "व्हाट्सऐप ऑटोमेशन महाराष्ट्र",
      "अपॉइंटमेंट बुकिंग महाराष्ट्र",
    ],
  },
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    tier: "A",
    languages: ["Hindi", "English"],
    title: "WhatsApp Automation in Uttar Pradesh | FLOW by Crescora",
    h1: "Workflow automation for teams in Uttar Pradesh",
    keywordTarget: "whatsapp automation uttar pradesh",
    description:
      "High-volume service, education, healthcare, and distributed sales operations create strong demand for structured follow-up and booking workflows.",
    stateFocus:
      "Large business base with high commercial volume and Hindi-first demand.",
    workflowSlugs: [
      "whatsapp-automation",
      "appointment-booking",
      "document-collection",
    ],
    industryFocus: "Healthcare, education, and service businesses",
    localProof:
      "Use city-specific examples and Hindi-first FAQ modules where search console supports it.",
    localFaqNote: "English first, then Hindi modules validated by query data.",
    localSeeds: [
      "व्हाट्सऐप ऑटोमेशन उत्तर प्रदेश",
      "अपॉइंटमेंट बुकिंग उत्तर प्रदेश",
    ],
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    tier: "A",
    languages: ["Tamil", "English"],
    title: "Conversational AI Automation in Tamil Nadu | FLOW",
    h1: "Automate bookings, support, and documents in Tamil Nadu",
    keywordTarget: "appointment booking software tamil nadu",
    description:
      "Hospitals, clinics, factories, and service teams in Tamil Nadu can use localized workflow pages for bookings, support, and document handling.",
    stateFocus:
      "Strong intent for hospital, clinic, and service workflows with Tamil-language support potential.",
    workflowSlugs: [
      "appointment-booking",
      "customer-support",
      "document-collection",
    ],
    industryFocus: "Hospitals, clinics, and factory/service support",
    localProof:
      "Add Tamil-language support examples, regional screenshots, and state-specific proof blocks.",
    localFaqNote: "Use Tamil + English FAQ modules once demand is confirmed.",
    localSeeds: ["வாட்ஸ்அப் ஆட்டோமேஷன் தமிழ்நாடு", "அபாயின்ட்மெண்ட் புக்கிங்"],
  },
  {
    slug: "west-bengal",
    name: "West Bengal",
    tier: "A",
    languages: ["Bengali", "Hindi", "English"],
    title: "Hospital and Service Workflow Automation in West Bengal | FLOW",
    h1: "Automate appointments, reminders, and support in West Bengal",
    keywordTarget: "whatsapp automation west bengal",
    description:
      "Kolkata and nearby commercial areas can use hospital and service workflow pages with Bengali FAQ support and local proof.",
    stateFocus:
      "Healthcare and service-business demand with Bengali-first opportunity.",
    workflowSlugs: ["appointment-booking", "reminders", "customer-support"],
    industryFocus: "Hospitals, clinics, and service businesses",
    localProof:
      "Use local proof blocks and Bengali FAQ once the page is indexed.",
    localFaqNote:
      "State page should combine Bengali + English FAQs where it matters.",
    localSeeds: ["হোয়াটসঅ্যাপ অটোমেশন পশ্চিমবঙ্গ", "অ্যাপয়েন্টমেন্ট বুকিং"],
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    tier: "A",
    languages: ["Kannada", "English"],
    title: "Customer Support and WhatsApp Automation in Karnataka | FLOW",
    h1: "Automate support, handoff, and reminders in Karnataka",
    keywordTarget: "chatbot software karnataka",
    description:
      "Bengaluru and broader Karnataka demand support-team automation, knowledge-base use cases, and observability-rich workflows.",
    stateFocus:
      "Strong SaaS, service, and support-team demand with Kannada FAQ potential.",
    workflowSlugs: ["customer-support", "human-handoff", "reminders"],
    industryFocus: "Support teams and service businesses",
    localProof:
      "Use observability screenshots and Kannada FAQ modules to differentiate the page.",
    localFaqNote: "Kannada + English FAQs are a priority localized module.",
    localSeeds: ["ವಾಟ್ಸಾಪ್ ಆಟೋಮೇಷನ್ ಕರ್ನಾಟಕ", "ಸಪೋರ್ಟ್ ಬಾಟ್ ಕರ್ನಾಟಕ"],
  },
  {
    slug: "madhya-pradesh",
    name: "Madhya Pradesh",
    tier: "A",
    languages: ["Hindi", "English"],
    title: "WhatsApp Automation in Madhya Pradesh | FLOW by Crescora",
    h1: "Workflow automation for teams in Madhya Pradesh",
    keywordTarget: "whatsapp automation madhya pradesh",
    description:
      "The state hub should emphasize support, reminders, appointments, billing, and document collection for mixed service and trading demand.",
    stateFocus:
      "Broad Hindi-first commercial demand and high utility for workflow pages.",
    workflowSlugs: ["whatsapp-automation", "payments", "document-collection"],
    industryFocus: "Service businesses and healthcare",
    localProof: "Use regional examples and Hindi-first supporting modules.",
    localFaqNote: "Local proof beats generic feature claims for this state.",
    localSeeds: [
      "व्हाट्सऐप ऑटोमेशन मध्य प्रदेश",
      "अपॉइंटमेंट बुकिंग मध्य प्रदेश",
    ],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    tier: "A",
    languages: ["Hindi", "English"],
    title: "WhatsApp Automation in Rajasthan | FLOW by Crescora",
    h1: "Workflow automation for teams in Rajasthan",
    keywordTarget: "whatsapp automation rajasthan",
    description:
      "State-focused pages should align with service-business follow-up, booking, and billing workflows where Hindi search demand is strongest.",
    stateFocus:
      "Hindi-first demand with strong service-business search intent.",
    workflowSlugs: ["appointment-booking", "payments", "reminders"],
    industryFocus: "Service businesses and healthcare",
    localProof:
      "Local proof and FAQs should anchor the page, not generic SaaS filler.",
    localFaqNote:
      "Keep the page English-first until GSC proves a local-language split.",
    localSeeds: ["व्हाट्सऐप ऑटोमेशन राजस्थान", "रिमाइंडर ऑटोमेशन"],
  },
  {
    slug: "gujarat",
    name: "Gujarat",
    tier: "A",
    languages: ["Gujarati", "Hindi", "English"],
    title: "WhatsApp Automation in Gujarat | FLOW by Crescora",
    h1: "Workflow automation for teams in Gujarat",
    keywordTarget: "whatsapp automation gujarat",
    description:
      "Gujarat benefits from workflow pages focused on support, billing, reminders, and document collection for trading and service businesses.",
    stateFocus:
      "Business-friendly search intent with Gujarati and Hindi opportunities.",
    workflowSlugs: ["payments", "document-collection", "customer-support"],
    industryFocus: "Service businesses and billing/collections",
    localProof: "Use Gujarati + English FAQ modules only when demand is clear.",
    localFaqNote: "English first, then Gujarati or Hindi after GSC validation.",
    localSeeds: ["વોટ્સએપ ઓટોમેશન ગુજરાત", "પેમેન્ટ રિમાઇન્ડર"],
  },
  {
    slug: "bihar",
    name: "Bihar",
    tier: "A",
    languages: ["Hindi", "English"],
    title: "WhatsApp Automation in Bihar | FLOW by Crescora",
    h1: "Workflow automation for teams in Bihar",
    keywordTarget: "whatsapp automation bihar",
    description:
      "A state page for Bihar should favor clear, commercial workflow pages around booking, support, reminders, and collection workflows.",
    stateFocus:
      "Large Hindi-first demand with straightforward workflow intent.",
    workflowSlugs: [
      "whatsapp-automation",
      "appointment-booking",
      "customer-support",
    ],
    industryFocus: "Healthcare and service businesses",
    localProof: "Use practical examples, not generic AI language.",
    localFaqNote:
      "Hindi modules can be added after query data proves the split.",
    localSeeds: ["व्हाट्सऐप ऑटोमेशन बिहार", "अपॉइंटमेंट बुकिंग बिहार"],
  },
  {
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    tier: "A",
    languages: ["Telugu", "Hindi", "English"],
    title: "WhatsApp Automation in Andhra Pradesh | FLOW by Crescora",
    h1: "Workflow automation for teams in Andhra Pradesh",
    keywordTarget: "whatsapp automation andhra pradesh",
    description:
      "Localized pages should emphasize bookings, reminders, document collection, and handoff in Telugu-first commercial contexts.",
    stateFocus:
      "Telugu-first regional opportunity with strong appointment and support workflows.",
    workflowSlugs: [
      "appointment-booking",
      "document-collection",
      "human-handoff",
    ],
    industryFocus: "Healthcare, clinics, and service businesses",
    localProof: "Use Telugu FAQ modules and state-specific screenshots.",
    localFaqNote:
      "Add Telugu + English local modules after English hub performance is clear.",
    localSeeds: ["వాట్సాప్ ఆటోమేషన్ ఆంధ్రప్రదేశ్", "అపాయింట్మెంట్ బుకింగ్"],
  },
  {
    slug: "telangana",
    name: "Telangana",
    tier: "A",
    languages: ["Telugu", "Hindi", "English"],
    title: "WhatsApp and Payment Automation in Telangana | FLOW",
    h1: "Automate conversations, reminders, and collections in Telangana",
    keywordTarget: "whatsapp automation telangana",
    description:
      "Hyderabad-centered pages can emphasize sales, support, billing, document collection, and payment follow-up workflows.",
    stateFocus: "High-value SaaS, service, and collections intent.",
    workflowSlugs: ["whatsapp-automation", "payments", "document-collection"],
    industryFocus: "Support teams and billing/collections",
    localProof:
      "Include Telugu FAQ and proof blocks to increase state relevance.",
    localFaqNote: "Telugu + English modules are a near-term priority.",
    localSeeds: ["వాట్సాప్ ఆటోమేషన్ తెలంగాణ", "పేమెంట్ రిమైండర్"],
  },
  {
    slug: "odisha",
    name: "Odisha",
    tier: "A",
    languages: ["Odia", "Hindi", "English"],
    title: "WhatsApp Automation in Odisha | FLOW by Crescora",
    h1: "Workflow automation for teams in Odisha",
    keywordTarget: "whatsapp automation odisha",
    description:
      "Odia-first language modules and workflow pages should focus on support, booking, reminders, and document handling.",
    stateFocus:
      "Odia-language opportunity with practical BOFU workflow demand.",
    workflowSlugs: ["appointment-booking", "reminders", "customer-support"],
    industryFocus: "Healthcare and service businesses",
    localProof:
      "State proof blocks and localized FAQs will differentiate the page.",
    localFaqNote:
      "Keep the page English-first and add Odia after demand validation.",
    localSeeds: ["వాట్సాప్ ఆటోమేషన్ ఒడిశా", "అప్పాయింట్మెంట్ బుకింగ్"],
  },
  {
    slug: "jammu-and-kashmir",
    name: "Jammu and Kashmir",
    tier: "B",
    languages: ["English", "Hindi"],
    title: "WhatsApp Automation in Jammu and Kashmir | FLOW",
    h1: "Workflow automation for teams in Jammu and Kashmir",
    keywordTarget: "whatsapp automation jammu and kashmir",
    description:
      "This Tier B hub should stay English-first and expand only when search console proves demand.",
    stateFocus:
      "English-first regional hub with Hindi support after GSC validation.",
    workflowSlugs: ["whatsapp-automation", "appointment-booking"],
    industryFocus: "Healthcare and service businesses",
    localProof:
      "Keep the page compact and only add unique regional proof when available.",
    localFaqNote: "English first, Hindi only after proven demand.",
    localSeeds: ["व्हाट्सऐप ऑटोमेशन जम्मू कश्मीर"],
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    tier: "B",
    languages: ["English", "Hindi"],
    title: "WhatsApp Automation in Uttarakhand | FLOW",
    h1: "Workflow automation for teams in Uttarakhand",
    keywordTarget: "whatsapp automation uttarakhand",
    description:
      "An English-first state hub that can expand into Hindi workflow modules after query validation.",
    stateFocus:
      "Compact hub for hospitality, healthcare, and service workflow intent.",
    workflowSlugs: ["appointment-booking", "reminders"],
    industryFocus: "Healthcare and service businesses",
    localProof:
      "Use state-specific examples without making the page a duplicate of the India hub.",
    localFaqNote: "Hindi modules only after GSC data confirms the opportunity.",
    localSeeds: ["व्हाट्सऐप ऑटोमेशन उत्तराखंड"],
  },
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    tier: "B",
    languages: ["English", "Hindi"],
    title: "WhatsApp Automation in Himachal Pradesh | FLOW",
    h1: "Workflow automation for teams in Himachal Pradesh",
    keywordTarget: "whatsapp automation himachal pradesh",
    description:
      "English-first state hub with simple workflow and appointment intent, expanded only when demand appears.",
    stateFocus: "English-first local hub for service and booking workflows.",
    workflowSlugs: ["appointment-booking", "customer-support"],
    industryFocus: "Service businesses",
    localProof:
      "Do not publish thin clone pages; keep the page compact and useful.",
    localFaqNote: "Hindi variants only after demand is visible.",
    localSeeds: ["व्हाट्सऐप ऑटोमेशन हिमाचल प्रदेश"],
  },
  {
    slug: "tripura",
    name: "Tripura",
    tier: "B",
    languages: ["Bengali", "English"],
    title: "WhatsApp Automation in Tripura | FLOW",
    h1: "Workflow automation for teams in Tripura",
    keywordTarget: "whatsapp automation tripura",
    description:
      "A Bengali + English hub for service and appointment workflow intent, based on report guidance.",
    stateFocus:
      "Regional Bengali demand should be tested against Search Console data.",
    workflowSlugs: ["whatsapp-automation", "appointment-booking"],
    industryFocus: "Healthcare and service businesses",
    localProof:
      "Add Bengali FAQ modules and localized examples once pages gain traction.",
    localFaqNote: "English first, Bengali modules as demand grows.",
    localSeeds: ["হোয়াটসঅ্যাপ অটোমেশন ত্রিপুরা"],
  },
  {
    slug: "goa",
    name: "Goa",
    tier: "B",
    languages: ["English", "Konkani", "Hindi"],
    title: "WhatsApp Automation in Goa | FLOW",
    h1: "Workflow automation for teams in Goa",
    keywordTarget: "whatsapp automation goa",
    description:
      "English-first state hub with a test path for Konkani or Hindi after Search Console proves demand.",
    stateFocus: "Compact hub for hospitality and service workflow demand.",
    workflowSlugs: ["appointment-booking", "customer-support"],
    industryFocus: "Service businesses",
    localProof:
      "Use local business examples only when they are distinct from the India hub.",
    localFaqNote:
      "Test Konkani or Hindi only after GSC data proves the opportunity.",
    localSeeds: ["व्हाट्सऐप ऑटोमेशन गोवा"],
  },
  {
    slug: "puducherry",
    name: "Puducherry",
    tier: "C",
    languages: ["English", "Tamil"],
    title: "Conversational AI in Puducherry | FLOW",
    h1: "Automate bookings and support in Puducherry",
    keywordTarget: "whatsapp automation puducherry",
    description:
      "English-first local hub with Tamil language modules for appointment and support workflows when demand exists.",
    stateFocus:
      "Compact page focused on bookings, support, and document handling.",
    workflowSlugs: ["appointment-booking", "customer-support"],
    industryFocus: "Healthcare and service businesses",
    localProof:
      "Localized proof and Tamil FAQ modules should be added carefully.",
    localFaqNote: "English first; add Tamil when Search Console justifies it.",
    localSeeds: ["வாட்ஸ்அப் ஆட்டோமேஷன் புதுச்சேரி"],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    tier: "C",
    languages: ["English", "Hindi", "Punjabi"],
    title: "WhatsApp Automation in Chandigarh | FLOW",
    h1: "Automate support and booking in Chandigarh",
    keywordTarget: "whatsapp automation chandigarh",
    description:
      "English-first hub with Hindi and Punjabi support only after the query split is clear.",
    stateFocus: "Compact hub for support, appointments, and service workflows.",
    workflowSlugs: ["appointment-booking", "customer-support"],
    industryFocus: "Support teams and service businesses",
    localProof:
      "Add Punjabi and Hindi modules only if Search Console shows demand.",
    localFaqNote: "English first, local languages later.",
    localSeeds: ["ਵਾਟਸਐਪ ਆਟੋਮੇਸ਼ਨ ਚੰਡੀਗੜ੍ਹ"],
  },
  {
    slug: "manipur",
    name: "Manipur",
    tier: "C",
    languages: ["English"],
    title: "WhatsApp Automation in Manipur | FLOW",
    h1: "Workflow automation for teams in Manipur",
    keywordTarget: "whatsapp automation manipur",
    description:
      "English-first state hub with a compact structure until query data proves expansion value.",
    stateFocus: "Low-volume but valid local hub for search and citations.",
    workflowSlugs: ["whatsapp-automation", "appointment-booking"],
    industryFocus: "Healthcare and service businesses",
    localProof: "Avoid thin duplication; keep the page compact and useful.",
    localFaqNote: "English only until GSC proves another language.",
    localSeeds: ["whatsapp automation manipur"],
  },
  {
    slug: "nagaland",
    name: "Nagaland",
    tier: "C",
    languages: ["English"],
    title: "WhatsApp Automation in Nagaland | FLOW",
    h1: "Workflow automation for teams in Nagaland",
    keywordTarget: "whatsapp automation nagaland",
    description:
      "English-first hub intended to be expanded only when there is proven demand and unique context.",
    stateFocus: "Compact hub for booking and support workflows.",
    workflowSlugs: ["whatsapp-automation", "customer-support"],
    industryFocus: "Service businesses",
    localProof: "Add only unique proof or examples before expanding the page.",
    localFaqNote: "Keep it English-first until GSC shows otherwise.",
    localSeeds: ["whatsapp automation nagaland"],
  },
  {
    slug: "meghalaya",
    name: "Meghalaya",
    tier: "C",
    languages: ["English"],
    title: "WhatsApp Automation in Meghalaya | FLOW",
    h1: "Workflow automation for teams in Meghalaya",
    keywordTarget: "whatsapp automation meghalaya",
    description:
      "English-first hub for appointment, support, and workflow pages, to expand only when demand appears.",
    stateFocus: "Compact hub with a minimal but clean SEO structure.",
    workflowSlugs: ["whatsapp-automation", "appointment-booking"],
    industryFocus: "Service businesses",
    localProof: "Keep the page short, unique, and proof-led.",
    localFaqNote: "English first.",
    localSeeds: ["whatsapp automation meghalaya"],
  },
  {
    slug: "mizoram",
    name: "Mizoram",
    tier: "C",
    languages: ["English"],
    title: "WhatsApp Automation in Mizoram | FLOW",
    h1: "Workflow automation for teams in Mizoram",
    keywordTarget: "whatsapp automation mizoram",
    description:
      "English-first local hub, expanded only if Search Console proves demand and the page can carry unique value.",
    stateFocus: "Compact search entry point for local business automation.",
    workflowSlugs: ["whatsapp-automation", "customer-support"],
    industryFocus: "Service businesses",
    localProof: "Unique proof or local context is required before expansion.",
    localFaqNote: "English first.",
    localSeeds: ["whatsapp automation mizoram"],
  },
  {
    slug: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    tier: "C",
    languages: ["English", "Hindi"],
    title: "WhatsApp Automation in Arunachal Pradesh | FLOW",
    h1: "Workflow automation for teams in Arunachal Pradesh",
    keywordTarget: "whatsapp automation arunachal pradesh",
    description:
      "English-first hub with Hindi only after Search Console proves the demand split.",
    stateFocus: "Low-volume regional hub with clear search structure.",
    workflowSlugs: ["whatsapp-automation", "appointment-booking"],
    industryFocus: "Service businesses",
    localProof: "Only expand with unique proof and demand evidence.",
    localFaqNote: "English first; Hindi after GSC data.",
    localSeeds: ["व्हाट्सऐप ऑटोमेशन अरुणाचल प्रदेश"],
  },
  {
    slug: "sikkim",
    name: "Sikkim",
    tier: "C",
    languages: ["English"],
    title: "WhatsApp Automation in Sikkim | FLOW",
    h1: "Workflow automation for teams in Sikkim",
    keywordTarget: "whatsapp automation sikkim",
    description:
      "English-first local hub for appointment and support workflows, expanded only if search demand proves it.",
    stateFocus: "Minimal but unique local entry point.",
    workflowSlugs: ["appointment-booking", "customer-support"],
    industryFocus: "Service businesses",
    localProof: "Avoid thin duplication and only expand when proof exists.",
    localFaqNote: "English first.",
    localSeeds: ["whatsapp automation sikkim"],
  },
  {
    slug: "andaman-and-nicobar-islands",
    name: "Andaman and Nicobar Islands",
    tier: "C",
    languages: ["English", "Hindi"],
    title: "WhatsApp Automation in Andaman and Nicobar Islands | FLOW",
    h1: "Workflow automation for teams in Andaman and Nicobar Islands",
    keywordTarget: "whatsapp automation andaman and nicobar islands",
    description:
      "English-first, with Hindi support where appropriate, and a compact page structure that avoids duplication.",
    stateFocus: "Small but valid local hub for booking and support workflows.",
    workflowSlugs: ["appointment-booking", "customer-support"],
    industryFocus: "Service businesses",
    localProof:
      "Use local business context only if it is meaningfully distinct.",
    localFaqNote: "English first, Hindi modules only when justified.",
    localSeeds: ["व्हाट्सऐप ऑटोमेशन अंडमान"],
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    tier: "C",
    languages: ["English", "Hindi"],
    title: "WhatsApp Automation in Ladakh | FLOW",
    h1: "Workflow automation for teams in Ladakh",
    keywordTarget: "whatsapp automation ladakh",
    description:
      "English-first local hub with Hindi only after Search Console validates demand.",
    stateFocus: "Compact local hub for service and booking workflows.",
    workflowSlugs: ["appointment-booking", "customer-support"],
    industryFocus: "Service businesses",
    localProof: "Only expand when unique proof exists.",
    localFaqNote: "English first, Hindi later.",
    localSeeds: ["whatsapp automation ladakh"],
  },
  {
    slug: "dadra-and-nagar-haveli-and-daman-and-diu",
    name: "Dadra and Nagar Haveli and Daman and Diu",
    tier: "C",
    languages: ["English", "Gujarati", "Hindi"],
    title: "WhatsApp Automation in Daman and Diu | FLOW",
    h1: "Workflow automation for teams in Daman and Diu",
    keywordTarget: "whatsapp automation daman and diu",
    description:
      "English-first hub with Gujarati or Hindi only after demand is proven in Search Console.",
    stateFocus: "Compact local page with clear language branching guidance.",
    workflowSlugs: ["whatsapp-automation", "appointment-booking"],
    industryFocus: "Service businesses",
    localProof: "Distinct proof is required before adding more content.",
    localFaqNote: "English first; Gujarati or Hindi after GSC data.",
    localSeeds: ["વોટ્સએપ ઓટોમેશન દમણ અને દિયુ"],
  },
  {
    slug: "lakshadweep",
    name: "Lakshadweep",
    tier: "C",
    languages: ["English"],
    title: "WhatsApp Automation in Lakshadweep | FLOW",
    h1: "Workflow automation for teams in Lakshadweep",
    keywordTarget: "whatsapp automation lakshadweep",
    description:
      "The smallest English-first local hub, kept lean until query demand justifies more expansion.",
    stateFocus: "Minimal but unique local entry point.",
    workflowSlugs: ["appointment-booking", "customer-support"],
    industryFocus: "Service businesses",
    localProof: "Only publish if the page can stay distinct and useful.",
    localFaqNote: "English first.",
    localSeeds: ["whatsapp automation lakshadweep"],
  },
];

export const workflows: WorkflowSeo[] = [
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation Template | FLOW",
    metadataTitle:
      "WhatsApp Automation Template for Leads, Bookings, Payments, Support, and Follow-Ups | Crescora FLOW",
    metadataDescription:
      "Launch a WhatsApp automation workflow for lead capture, appointment booking, reminders, payment follow-ups, support routing, document requests, and human handover with Crescora FLOW.",
    h1: "Launch a WhatsApp automation workflow for leads, bookings, reminders, support, and follow-ups.",
    keywordTarget: "whatsapp automation template",
    headline:
      "Launch a WhatsApp automation workflow for leads, bookings, reminders, support, and follow-ups.",
    description:
      "Crescora FLOW helps businesses turn WhatsApp conversations into structured workflows. Capture enquiries, qualify intent, collect details, book appointments, send reminders, follow up on payments, route support requests, and hand over complex conversations to the right team.",
    outline: [
      "Hero",
      "workflow coverage",
      "journey",
      "use cases",
      "metrics",
      "FAQs",
      "CTA",
    ],
    ctaLabel: "Book WhatsApp Workflow Demo",
    publicPage: {
      eyebrow: "WhatsApp Workflow Template",
      heroTitle:
        "Launch a WhatsApp automation workflow for leads, bookings, reminders, support, and follow-ups.",
      heroDescription:
        "Crescora FLOW helps businesses turn WhatsApp conversations into structured workflows. Capture enquiries, qualify intent, collect details, book appointments, send reminders, follow up on payments, route support requests, and hand over complex conversations to the right team.",
      heroPrimaryCta: {
        label: "Book WhatsApp Workflow Demo",
        href: "/contact",
      },
      heroSecondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      heroSupportLine:
        "Built for WhatsApp enquiries, lead capture, booking, payment follow-ups, support routing, reminders, and human handover.",
      heroFlowSteps: [
        "WhatsApp Enquiry",
        "Intent Capture",
        "Data Collection",
        "Qualification",
        "Booking / Payment / Support",
        "Reminder",
        "Human Handover",
        "Outcome Tracking",
      ],
      heroStatusChips: [
        "New",
        "Qualified",
        "Booked",
        "Reminder Sent",
        "Payment Pending",
        "Escalated",
        "Completed",
      ],
      heroVisual: {
        eyebrow: "WhatsApp Automation Journey",
        title:
          "Map every WhatsApp conversation into a controlled business workflow.",
        description:
          "Use one workflow path to capture intent, collect required details, automate routine actions, trigger reminders, route support, and escalate to a human team with context when automation should not guess.",
        note: "WhatsApp workflow automation works best when message templates, human handover rules, captured fields, and final outcome states are defined before launch.",
      },
      overviewCards: [
        {
          eyebrow: "Workflow Template",
          title: "Start from a proven WhatsApp automation structure.",
          description:
            "Use this workflow template to plan how WhatsApp enquiries move from first message to captured details, qualified intent, next action, reminder, payment follow-up, support routing, or human handover.",
        },
        {
          eyebrow: "Control and Handover",
          title: "Automate routine WhatsApp work without losing team control.",
          description:
            "FLOW can handle repeated questions and structured steps while routing urgent, sensitive, high-value, or unresolved conversations to your team with captured context and next-step visibility.",
        },
      ],
      capabilitySection: {
        eyebrow: "Workflow Coverage",
        title: "What this WhatsApp workflow template includes",
        description:
          "Use one WhatsApp automation template to cover the repeatable parts of lead capture, booking, payment reminders, support routing, and follow-up automation.",
        items: [
          {
            title: "Greeting and intent capture",
            description:
              "Understand whether the user needs sales, appointment booking, payment help, document follow-up, support, or human assistance.",
          },
          {
            title: "Lead qualification",
            description:
              "Collect name, phone number, requirement, location, budget, urgency, preferred time, or service interest before routing to the team.",
          },
          {
            title: "Booking and callback flow",
            description:
              "Capture appointment or callback preference, confirm the next step, and send reminders where required.",
          },
          {
            title: "Payment follow-up",
            description:
              "Send payment reminders, payment links, confirmation messages, and escalation alerts for unresolved payment cases.",
          },
          {
            title: "Support routing",
            description:
              "Classify repeated questions, collect issue details, route unresolved cases, and hand over complex conversations with context.",
          },
          {
            title: "Reminder automation",
            description:
              "Send follow-ups for bookings, pending payments, missing documents, abandoned enquiries, callbacks, or service updates.",
          },
          {
            title: "Human handover",
            description:
              "Escalate urgent, unclear, sensitive, or high-value conversations to the right team with conversation history and captured data.",
          },
          {
            title: "Outcome tracking",
            description:
              "Track whether the conversation was qualified, booked, followed up, escalated, completed, or pending.",
          },
        ],
        supportLine:
          "This page naturally covers WhatsApp automation template, WhatsApp workflow automation, WhatsApp lead capture automation, WhatsApp appointment booking automation, WhatsApp payment reminder automation, WhatsApp support automation, WhatsApp follow-up automation, WhatsApp chatbot template, WhatsApp human handover automation, WhatsApp business automation, WhatsApp CRM automation, and WhatsApp reminder workflow without turning the page into keyword filler.",
      },
      beforeAfterSection: {
        eyebrow: "Before vs After",
        title: "Before FLOW vs After FLOW",
        description:
          "Buyers should see the operational shift clearly: from manual WhatsApp handling to structured WhatsApp business automation with visible states and repeatable handover rules.",
        rows: [
          {
            before: "WhatsApp messages pile up in a shared inbox",
            after: "Every enquiry can enter a structured workflow",
          },
          {
            before: "Staff ask the same questions repeatedly",
            after: "FLOW collects required details automatically",
          },
          {
            before: "Leads are not qualified before handover",
            after:
              "Intent, urgency, requirement, and contact details are captured first",
          },
          {
            before: "Follow-ups depend on manual memory",
            after: "Reminders and next-step messages can be automated",
          },
          {
            before: "Payment and document chasing is manual",
            after: "Payment and document follow-ups can be tracked",
          },
          {
            before: "Complex cases lose context during handover",
            after: "Teams receive conversation history and captured fields",
          },
        ],
      },
      journeySection: {
        eyebrow: "Journey Example",
        title: "Example WhatsApp automation journey",
        description:
          "The operating path is straightforward: WhatsApp Enquiry to Intent Capture to Data Collection to Qualification to Booking, Payment, or Support to Reminder to Human Handover to Outcome Tracking.",
        steps: [
          "Customer sends a WhatsApp message.",
          "FLOW asks what they need: enquiry, booking, support, payment, document, callback, or human help.",
          "FLOW collects the required details.",
          "The workflow routes the user based on intent.",
          "Routine actions are automated: answer, book, remind, collect, confirm, or update.",
          "Complex cases move to a human team with context.",
          "The outcome is tracked for visibility.",
        ],
      },
      trustSection: {
        eyebrow: "Launch Coverage",
        title: "WhatsApp workflows businesses can launch first",
        description:
          "Use a WhatsApp chatbot template only when it maps to a real operational workflow with defined routing, human control, and next-step visibility.",
        items: [
          {
            title: "Sales lead capture",
            description:
              "Qualify inbound enquiries, collect requirements, and route hot leads to sales.",
          },
          {
            title: "Appointment booking",
            description:
              "Collect service or consultation details, confirm slot preference, and send reminders.",
          },
          {
            title: "Payment reminder",
            description:
              "Send payment follow-ups, confirmation messages, and escalation alerts.",
          },
          {
            title: "Document follow-up",
            description:
              "Request missing files, remind customers, and route submitted documents for review.",
          },
          {
            title: "Customer support",
            description:
              "Answer repeated questions, collect issue details, and hand over unresolved cases.",
          },
          {
            title: "Service request workflow",
            description:
              "Collect location, service type, preferred time, and booking notes before assignment.",
          },
        ],
        supportLine:
          "WhatsApp automation may require business verification, provider setup, approved templates for out-of-session messages, and message-volume planning. FLOW can support WhatsApp template-message workflows, but template approval, language, category, variables, and fallback paths should be checked before rollout. The playbook specifically notes that WhatsApp templates outside the session window need approved provider templates and routeable outcomes for sent, template-not-approved, variable-missing, and failed states. WhatsApp provider setup, template approval, message costs, and delivery rules may vary by provider and business verification status. We confirm the correct setup path during workflow scoping.",
      },
      outcomesSection: {
        eyebrow: "Pilot Metrics",
        title: "What to measure during the WhatsApp workflow pilot",
        description:
          "Keep the pilot focused on measurable customer-response quality, follow-up completion, handover discipline, and outcome visibility.",
        items: [
          {
            title: "First response speed",
            description: "How quickly customers receive a useful first reply.",
          },
          {
            title: "Lead capture quality",
            description:
              "How many conversations include name, phone, requirement, urgency, and next step.",
          },
          {
            title: "Booking completion",
            description:
              "How many enquiries become appointments, demos, callbacks, or site visits.",
          },
          {
            title: "Follow-up completion",
            description:
              "How many pending payments, documents, or callbacks receive reminders.",
          },
          {
            title: "Handover quality",
            description:
              "How many complex cases reach the right team with full context.",
          },
          {
            title: "Outcome visibility",
            description:
              "How many conversations are new, qualified, booked, pending, escalated, completed, or dropped.",
          },
        ],
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Common questions before launching WhatsApp workflow automation",
        description:
          "These answers address rollout scope, human handover automation, provider requirements, and workflow reuse across channels.",
        items: [
          {
            question: "Can we start with only one WhatsApp workflow?",
            answer:
              "Yes. Most businesses should start with one high-impact workflow such as lead capture, appointment booking, payment reminders, document follow-up, or support routing.",
          },
          {
            question:
              "What happens when the automation cannot complete the request?",
            answer:
              "FLOW can hand over the conversation to a human team with captured details, conversation history, issue type, priority, and next action.",
          },
          {
            question: "Do WhatsApp templates need approval?",
            answer:
              "For messages outside the active conversation window, approved WhatsApp templates may be required. Template name, language, variables, category, and fallback paths should be confirmed before rollout.",
          },
          {
            question: "Can the same workflow run on website chat too?",
            answer:
              "Yes. FLOW can support the same business workflow across web chat and WhatsApp so your customer journey stays consistent.",
          },
          {
            question: "Can WhatsApp conversations update CRM or Google Sheets?",
            answer:
              "Yes, based on rollout scope. FLOW supports API, connector, record, notification, and workflow-owned data patterns for structured operations.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Next Step",
        title: "Ready to launch your WhatsApp automation workflow?",
        description:
          "Tell us how your team currently handles WhatsApp enquiries, bookings, payments, documents, support questions, and follow-ups. We’ll map your process and show the fastest FLOW workflow to launch first.",
        note: "Start with one WhatsApp workflow. Prove value. Expand into more channels, teams, and integrations.",
        primary: { label: "Book WhatsApp Workflow Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
  },
  {
    slug: "appointment-booking",
    title:
      "Appointment Booking Automation for WhatsApp, Web, Reminders, Rescheduling, and Follow-Ups | Crescora FLOW",
    metadataTitle:
      "Appointment Booking Automation for WhatsApp, Web, Reminders, Rescheduling, and Follow-Ups | Crescora FLOW",
    metadataDescription:
      "Automate appointment booking, slot confirmation, reminders, rescheduling, payment follow-ups, staff handover, and booking status tracking with Crescora FLOW.",
    h1: "Automate appointment booking, confirmations, reminders, rescheduling, and follow-ups.",
    keywordTarget: "appointment booking software",
    headline:
      "Automate appointment booking, confirmations, reminders, rescheduling, and follow-ups.",
    description:
      "Crescora FLOW helps businesses turn appointment enquiries from WhatsApp and website chat into structured booking workflows. Capture customer details, collect preferred date and time, confirm slots, send reminders, manage rescheduling, collect fees where required, and hand over exceptions to the right team.",
    outline: [
      "Hero",
      "booking workflow",
      "journey",
      "use cases",
      "trust and control",
      "FAQs",
      "CTA",
    ],
    ctaLabel: "Book Appointment Workflow Demo",
    publicPage: {
      eyebrow: "Appointment Workflow",
      heroTitle:
        "Automate appointment booking, confirmations, reminders, rescheduling, and follow-ups.",
      heroDescription:
        "Crescora FLOW helps businesses turn appointment enquiries from WhatsApp and website chat into structured booking workflows. Capture customer details, collect preferred date and time, confirm slots, send reminders, manage rescheduling, collect fees where required, and hand over exceptions to the right team.",
      heroPrimaryCta: {
        label: "Book Appointment Workflow Demo",
        href: "/contact",
      },
      heroSecondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      heroSupportLine:
        "Built for clinics, hospitals, salons, service businesses, coaching centers, real estate visits, consultations, demos, and callback scheduling.",
      heroFlowSteps: [
        "Enquiry",
        "Service / Department",
        "Customer Details",
        "Date & Slot",
        "Confirmation",
        "Reminder",
        "Payment / Handover",
        "Outcome Tracking",
      ],
      heroStatusChips: [
        "Requested",
        "Confirmed",
        "Reminder Sent",
        "Rescheduled",
        "Cancelled",
        "Completed",
        "No-Show",
        "Escalated",
      ],
      heroVisual: {
        eyebrow: "Appointment Booking Journey",
        title: "Map every appointment enquiry into a confirmed booking path.",
        description:
          "Use one workflow to capture customer details, confirm availability, schedule reminders, manage reschedules, follow up on payments when required, and hand over exceptions with context.",
        note: "Appointment booking automation works best when slot rules, reminder timing, time zones, dedupe logic, and exception handover are defined before launch.",
      },
      overviewCards: [
        {
          eyebrow: "Booking Workflow",
          title: "Turn appointment enquiries into confirmed next steps.",
          description:
            "FLOW can collect the customer's name, phone number, service requirement, preferred date, preferred time, location, and notes before confirming the appointment or routing it to your team.",
        },
        {
          eyebrow: "Reminders and Handover",
          title: "Reduce no-shows and manual follow-up work.",
          description:
            "FLOW can send appointment confirmations, reminder messages, rescheduling prompts, payment follow-ups, and staff handover alerts when the booking needs human support.",
        },
      ],
      capabilitySection: {
        eyebrow: "Workflow Coverage",
        title: "What this appointment workflow can automate",
        description:
          "Use appointment booking automation to cover intake, confirmation, reminders, rescheduling, payment follow-up, and staff routing without losing control of the schedule.",
        items: [
          {
            title: "Appointment enquiry capture",
            description:
              "Collect customer details, service type, consultation need, preferred date, preferred time, and contact information.",
          },
          {
            title: "Slot confirmation",
            description:
              "Confirm selected appointment details and share the next step clearly with the customer.",
          },
          {
            title: "Availability and rescheduling flow",
            description:
              "Handle preferred timing, unavailable slots, rescheduling requests, and fallback to staff when required.",
          },
          {
            title: "Reminder automation",
            description:
              "Send reminders before the appointment so customers do not forget and staff do not need to call manually. FLOW's scheduler pattern supports appointment reminders such as 24 hours before an appointment, with timezone, dedupe, expiry, and channel fallback controls.",
          },
          {
            title: "Payment or booking fee follow-up",
            description:
              "Collect consultation fees, booking tokens, advance payments, or confirmation payments where required.",
          },
          {
            title: "Staff handover",
            description:
              "Escalate urgent, unclear, high-value, or exception cases to the right person with captured context.",
          },
          {
            title: "Record and status update",
            description:
              "Store booking status such as requested, confirmed, rescheduled, cancelled, completed, no-show, or escalated.",
          },
          {
            title: "Outcome tracking",
            description:
              "Track whether the booking was requested, confirmed, rescheduled, completed, cancelled, no-show, or escalated.",
          },
        ],
        supportLine:
          "This page naturally covers appointment booking automation, appointment booking software, WhatsApp appointment booking automation, web appointment booking automation, appointment reminder automation, appointment confirmation workflow, appointment rescheduling automation, consultation booking automation, demo class booking automation, clinic appointment automation, site visit booking automation, and service visit booking automation without turning the page into keyword filler.",
      },
      beforeAfterSection: {
        eyebrow: "Before vs After",
        title: "Before FLOW vs After FLOW",
        description:
          "Buyers should see the operational shift clearly: from scattered appointment handling to a structured booking workflow with reminders, rescheduling, and handover.",
        rows: [
          {
            before:
              "Customers ask for appointments across calls, WhatsApp, and website forms",
            after: "Every appointment enquiry enters a structured workflow",
          },
          {
            before: "Staff collect the same details manually",
            after: "FLOW captures required details before staff involvement",
          },
          {
            before:
              "Slot confirmation is handled through back-and-forth messages",
            after: "Booking steps and confirmation messages can be structured",
          },
          {
            before: "Reminders depend on staff memory",
            after: "Appointment reminders can be scheduled automatically",
          },
          {
            before: "Payment or booking fee follow-up is manual",
            after: "Payment reminders and confirmation flows can be added",
          },
          {
            before: "Rescheduling creates confusion",
            after: "Reschedule requests can follow a clear path",
          },
          {
            before: "Staff do not know which bookings need attention",
            after:
              "Pending, confirmed, rescheduled, cancelled, and escalated appointments can be tracked",
          },
        ],
      },
      journeySection: {
        eyebrow: "Journey Example",
        title: "Example appointment booking journey",
        description:
          "The operating path is simple: Enquiry to Details to Slot to Confirmation to Reminder to Payment or Handover to Outcome Tracking.",
        steps: [
          "Customer starts from WhatsApp or website chat.",
          "FLOW asks what appointment or service they need.",
          "Customer shares name, phone number, preferred date, time, and service details.",
          "FLOW checks or captures slot preference.",
          "Appointment is confirmed or routed to staff for manual confirmation.",
          "Reminder is scheduled before the appointment.",
          "Payment or fee follow-up happens where required.",
          "Rescheduling, cancellation, urgent cases, or unclear requests move to human handover.",
          "Final outcome is tracked as booked, rescheduled, cancelled, completed, no-show, or escalated.",
        ],
      },
      trustSection: {
        eyebrow: "Use Cases",
        title: "Appointment workflows businesses can launch first",
        description:
          "Start with one high-intent workflow and keep slot handling, reminders, rescheduling, payments, and handover clearly defined before launch.",
        items: [
          {
            title: "Clear slot handling",
            description:
              "The appointment step should collect valid date and slot details, handle invalid inputs gracefully, and store the booking payload for the next workflow step.",
          },
          {
            title: "Timezone-safe reminders",
            description:
              "Appointment reminders should use timezone-aware scheduling, duplicate protection, expiry handling, and fallback channels where needed.",
          },
          {
            title: "Human handover for exceptions",
            description:
              "Urgent, unclear, unavailable, high-value, or sensitive booking cases should move to staff with full context.",
          },
          {
            title: "Payment recovery path",
            description:
              "If a booking requires payment, failed or pending payment should not end silently. It should offer retry, support, or handover.",
          },
          {
            title: "Outcome tracking",
            description:
              "Track bookings by status: requested, confirmed, reminder sent, rescheduled, cancelled, completed, no-show, or escalated.",
          },
        ],
        supportLine:
          "The technical rollout should combine appointment collection, record storage, payment verification, template/SMS/email confirmation, approval, audit log, and outcome tracking where the business requires it. Clear slot handling, timezone-safe reminders, human handover for exceptions, payment recovery paths, and booking status tracking should be defined before launch.",
      },
      outcomesSection: {
        eyebrow: "Pilot Metrics",
        title: "What to measure during the appointment workflow pilot",
        description:
          "Keep the pilot focused on booking completion, reminder performance, reschedule handling, and staff time saved.",
        items: [
          {
            title: "Booking completion",
            description:
              "How many appointment enquiries become confirmed bookings.",
          },
          {
            title: "Reminder success",
            description:
              "How many bookings receive reminders before the appointment.",
          },
          {
            title: "Reschedule handling",
            description:
              "How many changes or cancellations are routed cleanly.",
          },
          {
            title: "Payment follow-up completion",
            description:
              "How many booking-fee or confirmation-payment cases resolve successfully.",
          },
          {
            title: "Handover quality",
            description:
              "How many exceptions reach staff with the right context.",
          },
          {
            title: "No-show reduction",
            description:
              "Whether reminders and confirmation steps reduce missed appointments.",
          },
        ],
      },
      faqSection: {
        eyebrow: "FAQ",
        title:
          "Common questions before launching appointment booking automation",
        description:
          "These answers cover rollout scope, reminders, rescheduling, payment handling, and slot exceptions.",
        items: [
          {
            question: "Can we start with one appointment workflow first?",
            answer:
              "Yes. Most businesses should start with one focused workflow such as clinic appointments, demo class booking, consultation booking, site visit scheduling, or service visit booking.",
          },
          {
            question: "Can FLOW send appointment reminders?",
            answer:
              "Yes. Appointment reminders can be scheduled before the appointment using timezone-aware reminder logic and channel fallback where required.",
          },
          {
            question: "Can customers reschedule or cancel?",
            answer:
              "Yes. The workflow can collect reschedule or cancellation requests and route them to confirmation, staff review, or updated reminders.",
          },
          {
            question: "Can appointment bookings require payment?",
            answer:
              "Yes. FLOW can support payment collection or payment verification where the business requires booking fees, consultation fees, or confirmation payments.",
          },
          {
            question: "What happens when a slot is unavailable?",
            answer:
              "The workflow should guide the customer to choose another slot, request a preferred time, or hand over the conversation to staff.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Next Step",
        title: "Ready to automate your appointment booking workflow?",
        description:
          "Tell us how your team currently handles appointment enquiries, slot confirmation, reminders, rescheduling, payments, cancellations, and staff handover. We’ll map your process and show the fastest FLOW workflow to launch first.",
        note: "Start with one appointment workflow. Prove value. Expand into payments, reminders, rescheduling, and customer follow-ups.",
        primary: { label: "Book Appointment Workflow Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
  },
  {
    slug: "payments",
    title:
      "Payment Automation for Collections, Payment Reminders, Failed Payment Recovery, and Follow-Ups | Crescora FLOW",
    metadataTitle:
      "Payment Automation for Collections, Payment Reminders, Failed Payment Recovery, and Follow-Ups | Crescora FLOW",
    metadataDescription:
      "Automate payment reminders, payment links, collections follow-ups, failed-payment recovery, receipt confirmation, overdue escalation, and billing handover with Crescora FLOW.",
    h1: "Automate payment reminders, collections follow-ups, confirmations, and overdue escalation.",
    keywordTarget: "whatsapp payment automation",
    headline:
      "Automate payment reminders, collections follow-ups, confirmations, and overdue escalation.",
    description:
      "Crescora FLOW helps businesses send structured payment reminders, share payment links, collect payment confirmation, verify payment status where supported, recover failed payments, alert teams about overdue cases, and track every collection workflow from request to outcome.",
    outline: [
      "Hero",
      "payment reminders",
      "journey",
      "use cases",
      "control and recovery",
      "FAQs",
      "CTA",
    ],
    ctaLabel: "Book Payment Workflow Demo",
    publicPage: {
      eyebrow: "Payment Workflow",
      heroTitle:
        "Automate payment reminders, collections follow-ups, confirmations, and overdue escalation.",
      heroDescription:
        "Crescora FLOW helps businesses send structured payment reminders, share payment links, collect payment confirmation, verify payment status where supported, recover failed payments, alert teams about overdue cases, and track every collection workflow from request to outcome.",
      heroPrimaryCta: { label: "Book Payment Workflow Demo", href: "/contact" },
      heroSecondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      heroSupportLine:
        "Built for payment reminders, billing follow-ups, consultation fees, booking tokens, invoice collections, failed-payment recovery, receipts, and human handover.",
      heroFlowSteps: [
        "Payment Due",
        "Reminder Sent",
        "Payment Link / Instructions",
        "Customer Confirms",
        "Verify Status",
        "Paid / Failed / Pending",
        "Retry or Handover",
        "Outcome Tracked",
      ],
      heroStatusChips: [
        "Requested",
        "Reminder Sent",
        "Link Shared",
        "Paid",
        "Failed",
        "Pending",
        "Overdue",
        "Escalated",
        "Closed",
      ],
      heroVisual: {
        eyebrow: "Payment Automation Journey",
        title: "Map every payment step into a clear collection workflow.",
        description:
          "Use one workflow to send reminders, share payment links, capture confirmations, verify supported payment states, recover failed attempts, and escalate overdue cases with context.",
        note: "Payment workflow automation works best when provider verification, amount validation, retry rules, and payment status tracking are defined before launch.",
      },
      overviewCards: [
        {
          eyebrow: "Payment Reminders",
          title: "Stop chasing pending payments manually.",
          description:
            "FLOW can send payment due reminders, share payment links, confirm payment status, request payment references, and guide customers to the next step without depending only on manual calls or scattered chat follow-ups.",
        },
        {
          eyebrow: "Recovery and Escalation",
          title: "Give failed or overdue payments a clear recovery path.",
          description:
            "When a payment is failed, pending, disputed, or overdue, FLOW can trigger retry guidance, send a reminder, update the status, or hand the case to billing or support with customer details and payment context.",
        },
      ],
      capabilitySection: {
        eyebrow: "Workflow Coverage",
        title: "What this payment workflow can automate",
        description:
          "Use payment automation to manage due reminders, payment links, confirmations, recovery, escalation, and record updates without letting unpaid cases disappear silently.",
        items: [
          {
            title: "Payment due reminders",
            description:
              "Send structured reminders before or after a payment deadline so customers know what is due, how to pay, and what happens next.",
          },
          {
            title: "Payment link sharing",
            description:
              "Share payment links for consultation fees, booking fees, service charges, subscriptions, invoices, collections, or order payments.",
          },
          {
            title: "Payment confirmation",
            description:
              "Confirm successful payments and send the customer a clear acknowledgement, receipt instruction, or next step.",
          },
          {
            title: "Failed-payment recovery",
            description:
              "Guide customers after failed payment attempts with retry instructions, alternate payment options, or support handover.",
          },
          {
            title: "Overdue escalation",
            description:
              "Alert the billing, sales, support, admissions, or operations team when a payment remains unresolved.",
          },
          {
            title: "Reference and receipt capture",
            description:
              "Collect transaction ID, payment screenshot, receipt number, invoice ID, or customer confirmation where required.",
          },
          {
            title: "Status tracking",
            description:
              "Track payment states such as requested, reminder sent, link opened, paid, failed, pending, overdue, escalated, or closed.",
          },
          {
            title: "Audit and record update",
            description:
              "Store payment workflow status so teams can review what was requested, what was confirmed, and what still needs action.",
          },
        ],
        supportLine:
          "This page naturally covers payment automation, payment reminder automation, WhatsApp payment reminder automation, payment collection automation, billing follow-up automation, failed payment recovery automation, invoice reminder automation, collection follow-up workflow, payment status tracking, payment link automation, billing escalation automation, and payment workflow automation without turning the page into keyword filler.",
      },
      beforeAfterSection: {
        eyebrow: "Before vs After",
        title: "Before FLOW vs After FLOW",
        description:
          "Buyers should see the operational shift clearly: from inconsistent payment chasing to a trackable collections workflow with reminders, recovery, and handover.",
        rows: [
          {
            before: "Staff manually remind customers about pending payments",
            after: "FLOW can send structured payment reminders",
          },
          {
            before: "Customers are unsure how to pay or confirm payment",
            after:
              "The workflow gives clear payment instructions and next steps",
          },
          {
            before: "Failed payments are handled inconsistently",
            after:
              "Failed-payment recovery can route to retry, support, or handover",
          },
          {
            before: "Payment screenshots and references are scattered in chats",
            after:
              "FLOW can collect references and connect them to the workflow",
          },
          {
            before: "Billing teams lack visibility into pending cases",
            after:
              "Payment status can be tracked as requested, pending, paid, failed, overdue, or escalated",
          },
          {
            before: "Follow-ups depend on staff memory",
            after: "Reminder and escalation paths can run automatically",
          },
        ],
      },
      journeySection: {
        eyebrow: "Journey Example",
        title: "Example payment automation journey",
        description:
          "The operating path is simple: Due to Reminder to Payment Link to Verification to Paid, Failed, or Pending to Retry or Handover to Outcome Tracking.",
        steps: [
          "Customer reaches a payment step from booking, invoice, order, admission, consultation, or service workflow.",
          "FLOW sends payment instructions or a payment link.",
          "Customer pays or shares confirmation details.",
          "FLOW verifies the payment status where supported or captures acknowledgement.",
          "Successful payment triggers confirmation, receipt instruction, record update, and next step.",
          "Failed payment triggers retry guidance or alternate support.",
          "Pending or overdue payment can trigger reminders and escalation.",
          "Billing/support receives handover context when human action is needed.",
        ],
      },
      launchSection: {
        eyebrow: "Launch Coverage",
        title: "Payment workflows businesses can launch first",
        description:
          "Start with one payment workflow that solves a real collections or follow-up problem, then expand once status visibility and recovery are working cleanly.",
        items: [
          {
            title: "Payment reminders",
            description:
              "Send structured reminders for due invoices, consultation fees, booking tokens, or subscription follow-ups.",
          },
          {
            title: "Invoice collections",
            description:
              "Track invoice requests, payment links, and customer response so unpaid cases do not disappear in chat history.",
          },
          {
            title: "Booking fee follow-up",
            description:
              "Collect confirmation payments for appointments, reservations, or admissions with a clear next step.",
          },
          {
            title: "Failed-payment recovery",
            description:
              "Give failed attempts a retry path, alternate support path, or billing handover with context attached.",
          },
          {
            title: "Receipt confirmation",
            description:
              "Capture transaction references, screenshots, or receipts and connect them to the workflow record.",
          },
          {
            title: "Overdue escalation",
            description:
              "Route unresolved cases to billing, finance, sales, or support when a payment remains pending too long.",
          },
        ],
      },
      trustSection: {
        eyebrow: "Control and Recovery",
        title: "Built for payment workflows with control",
        description:
          "Payment workflows should not end silently on failure. They need status clarity, recovery options, and a clean handover path when automation cannot close the loop.",
        items: [
          {
            title: "Payment verification path",
            description:
              "Where provider verification is supported, FLOW can wait for confirmation and route based on paid or failed outcomes.",
          },
          {
            title: "Pending payment handling",
            description:
              "Pending verification should stay in the payment step or guide the user to check again instead of branching too early.",
          },
          {
            title: "Failure recovery",
            description:
              "Failed payments should not directly end the journey. Add retry instructions, alternate channel, billing handover, or support escalation.",
          },
          {
            title: "Audit-ready records",
            description:
              "Payment workflows should store transaction details, reference IDs, confirmation status, and downstream fulfilment state.",
          },
          {
            title: "Human handover",
            description:
              "Billing, collections, finance, sales, or support teams should receive the customer details, amount, reference, payment status, and conversation history when escalation is needed.",
          },
        ],
        supportLine:
          "The production checklist requires amount and provider validation, tested API keys, failure recovery, clear confirmation copy, downstream use of the stored output variable, and provider-specific setup such as Razorpay or other payment provider verification where supported. WhatsApp template approval, provider setup, and message-cost dependency may also apply to reminder delivery and escalation messages.",
      },
      outcomesSection: {
        eyebrow: "Pilot Metrics",
        title: "What to measure during the payment workflow pilot",
        description:
          "Keep the pilot focused on reminder delivery, completion rate, failed-payment recovery, overdue volume, handover quality, and collection visibility.",
        items: [
          {
            title: "Reminder delivery",
            description: "How many payment reminders were sent successfully.",
          },
          {
            title: "Payment completion rate",
            description: "How many payment requests moved to paid status.",
          },
          {
            title: "Failed-payment recovery",
            description:
              "How many failed or pending payments were retried or escalated.",
          },
          {
            title: "Overdue volume",
            description:
              "How many cases remained unpaid after the expected payment window.",
          },
          {
            title: "Handover quality",
            description:
              "How many billing cases reached the team with amount, customer details, reference, and status.",
          },
          {
            title: "Collection visibility",
            description:
              "How many payment workflows are requested, pending, paid, failed, overdue, escalated, or closed.",
          },
        ],
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Common questions before launching payment automation",
        description:
          "These answers cover reminders, verification, failed-payment recovery, CRM updates, and WhatsApp reminder dependencies.",
        items: [
          {
            question: "Can FLOW send payment reminders automatically?",
            answer:
              "Yes. FLOW can send reminders through supported channels based on workflow status, due date, booking stage, invoice stage, or manual trigger.",
          },
          {
            question: "Can FLOW verify payments automatically?",
            answer:
              "Where provider support is configured, FLOW can verify payment status. If automatic verification is not available, the workflow can collect payment references, screenshots, or manual confirmation details.",
          },
          {
            question: "What happens when payment fails?",
            answer:
              "The workflow should give retry guidance, offer alternate help, or route the case to billing or support. It should not end silently after a failed payment.",
          },
          {
            question: "Can payment status update CRM or internal records?",
            answer:
              "Yes, based on rollout scope. FLOW supports record updates, API calls, connector actions, notifications, audit logs, and workflow-owned structured data.",
          },
          {
            question: "Can this work for WhatsApp payment reminders?",
            answer:
              "Yes, but WhatsApp template approval, provider setup, message category, language, variables, and message costs may depend on the selected provider and business verification status.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Next Step",
        title: "Ready to automate your payment follow-up workflow?",
        description:
          "Tell us how your team currently handles payment reminders, pending collections, payment links, failed payments, receipts, billing handover, and overdue follow-ups. We’ll map your process and show the fastest FLOW workflow to launch first.",
        note: "Start with one payment reminder workflow. Prove value. Expand into verification, receipts, billing escalation, and collection visibility.",
        primary: { label: "Book Payment Workflow Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
  },
  {
    slug: "reminders",
    title:
      "Reminder Automation Software for Follow-Ups, Appointments, Payments, Documents, and Renewals | Crescora FLOW",
    metadataTitle:
      "Reminder Automation Software for Follow-Ups, Appointments, Payments, Documents, and Renewals | Crescora FLOW",
    metadataDescription:
      "Automate reminders for appointments, payments, missing documents, callbacks, renewals, no-shows, and follow-ups with Crescora FLOW. Schedule, track, retry, and escalate reminder workflows.",
    h1: "Automate reminders for appointments, payments, documents, callbacks, renewals, and follow-ups.",
    keywordTarget: "reminder automation software",
    headline:
      "Automate reminders for appointments, payments, documents, callbacks, renewals, and follow-ups.",
    description:
      "Crescora FLOW helps businesses send timely reminders, recover missed actions, reduce manual follow-up work, and escalate overdue cases to the right team across Web, WhatsApp, Telegram, email, and SMS.",
    outline: [
      "Hero",
      "workflow diagram",
      "before/after",
      "launch coverage",
      "control and timing",
      "FAQs",
      "CTA",
    ],
    ctaLabel: "Book Reminder Workflow Demo",
    publicPage: {
      eyebrow: "Reminder Workflow",
      heroTitle:
        "Automate reminders for appointments, payments, documents, callbacks, renewals, and follow-ups.",
      heroDescription:
        "Crescora FLOW helps businesses send timely reminders, recover missed actions, reduce manual follow-up work, and escalate overdue cases to the right team. Use reminders for bookings, payments, pending documents, abandoned enquiries, service visits, renewals, and customer follow-ups across Web, WhatsApp, Telegram, email, and SMS.",
      heroPrimaryCta: {
        label: "Book Reminder Workflow Demo",
        href: "/contact",
      },
      heroSecondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      heroSupportLine:
        "Built for appointment reminders, payment follow-ups, missing-document reminders, callback nudges, renewal reminders, no-show recovery, and human escalation.",
      heroFlowSteps: [
        "Trigger Event",
        "Schedule Reminder",
        "Send Message",
        "Customer Responds / Ignores",
        "Retry / Fallback",
        "Escalate",
        "Outcome Tracked",
      ],
      heroStatusChips: [
        "Scheduled",
        "Sent",
        "Delivered",
        "Responded",
        "Skipped",
        "Failed",
        "Expired",
        "Escalated",
        "Completed",
      ],
      heroVisual: {
        eyebrow: "Reminder Workflow Diagram",
        title:
          "Map each reminder from trigger to action so nothing slips through.",
        description:
          "Use a workflow event, schedule the reminder in the right timezone, send the message through the selected channel, and route ignored or expired reminders to retry, fallback, or escalation with the outcome tracked.",
        note: "The scheduler should use durable jobs, timezone-aware delivery, dedupe keys, expiry handling, and channel fallback. Reminder workflows need duplicate protection and clear handling for skipped, failed, and expired states.",
      },
      overviewCards: [
        {
          eyebrow: "Reminder Automation",
          title: "Stop depending on staff memory for follow-ups.",
          description:
            "FLOW can schedule reminders based on appointment time, payment due date, pending document status, missed callback, abandoned enquiry, renewal date, or any workflow stage that needs a next action.",
        },
        {
          eyebrow: "Recovery and Escalation",
          title:
            "Recover missed actions before they become lost opportunities.",
          description:
            "When a customer does not respond, submit a document, complete payment, attend an appointment, or confirm a booking, FLOW can trigger reminder chains, fallback messages, and escalation to the right team.",
        },
      ],
      capabilitySection: {
        eyebrow: "Workflow Coverage",
        title: "What this reminder workflow can automate",
        description:
          "Use reminders to keep appointments, payments, documents, callbacks, renewals, and customer follow-ups moving without manual chasing.",
        items: [
          {
            title: "Appointment reminders",
            description:
              "Send reminders before appointments, consultations, demos, site visits, service bookings, or callbacks.",
          },
          {
            title: "Payment reminders",
            description:
              "Remind customers about consultation fees, booking tokens, invoices, pending collections, renewals, or failed payment recovery.",
          },
          {
            title: "Document reminders",
            description:
              "Follow up when KYC files, admission documents, insurance papers, reports, forms, or payment proofs are missing.",
          },
          {
            title: "Abandoned enquiry follow-up",
            description:
              "Nudge users who started an enquiry but did not complete the form, booking, payment, or support step.",
          },
          {
            title: "Callback reminders",
            description:
              "Remind customers and staff about scheduled callbacks, counselling calls, sales calls, or service calls.",
          },
          {
            title: "Renewal reminders",
            description:
              "Send renewal nudges for subscriptions, memberships, packages, maintenance plans, follow-up visits, or recurring services.",
          },
          {
            title: "No-show recovery",
            description:
              "Follow up after missed appointments, demo classes, site visits, or service visits and offer a reschedule path.",
          },
          {
            title: "Team escalation",
            description:
              "Alert sales, support, billing, admissions, front desk, or operations teams when reminders fail or the case becomes overdue.",
          },
        ],
        supportLine:
          "This reminder workflow naturally covers reminder automation software, follow-up reminder automation, appointment reminder automation, payment reminder automation, document reminder automation, callback reminder automation, renewal reminder automation, WhatsApp reminder automation, no-show recovery automation, customer follow-up automation, automated reminder workflow, and reminder workflow automation without turning the page into keyword filler. The scheduler should use durable jobs, timezone-aware delivery, dedupe keys, expiry handling, and channel fallback. The playbook warns against duplicate reminders, missing timezone configuration, and not handling skipped or expired reminder states.",
      },
      beforeAfterSection: {
        eyebrow: "Before vs After",
        title: "Before FLOW vs After FLOW",
        description:
          "Show buyers how the reminder process changes once scheduling, retry, and workflow state become visible.",
        rows: [
          {
            before: "Staff manually remember who needs follow-up",
            after: "FLOW schedules reminders from workflow events",
          },
          {
            before:
              "Customers forget appointments, payments, documents, or callbacks",
            after: "Customers receive timely next-step reminders",
          },
          {
            before: "Follow-ups happen inconsistently across teams",
            after: "Reminder rules stay consistent across workflows",
          },
          {
            before: "Duplicate reminders are sent by mistake",
            after: "Dedupe rules can prevent repeated reminder spam",
          },
          {
            before: "Missed actions go unnoticed",
            after: "Pending or expired reminders can route to escalation",
          },
          {
            before: "Managers cannot see follow-up leakage",
            after:
              "Reminder status can be tracked as scheduled, sent, skipped, failed, expired, completed, or escalated",
          },
        ],
      },
      launchSection: {
        eyebrow: "Launch Coverage",
        title: "Reminder workflows businesses can launch first",
        description:
          "Start with one reminder workflow that solves a real follow-up problem, then expand once scheduling, delivery, and escalation are working cleanly.",
        items: [
          {
            title: "Clinic and hospital reminders",
            description:
              "Appointment reminders, OPD visit reminders, lab report follow-ups, consultation fee reminders, and follow-up visit nudges.",
          },
          {
            title: "Real estate reminders",
            description:
              "Site visit reminders, callback follow-ups, project interest nudges, document reminders, and post-visit follow-ups.",
          },
          {
            title: "Education reminders",
            description:
              "Demo class reminders, counselling call reminders, fee follow-ups, admission document reminders, and application status nudges.",
          },
          {
            title: "Service business reminders",
            description:
              "Booking reminders, service visit reminders, payment follow-ups, feedback requests, and repeat-visit nudges.",
          },
          {
            title: "Support reminders",
            description:
              "Pending customer response reminders, unresolved ticket follow-ups, SLA-risk alerts, and escalation reminders.",
          },
          {
            title: "Payment and billing reminders",
            description:
              "Invoice due reminders, failed-payment recovery, subscription renewal nudges, and overdue escalation alerts.",
          },
        ],
      },
      journeySection: {
        eyebrow: "Journey Example",
        title: "Example reminder automation journey",
        description:
          "Trigger event to schedule reminder to send message to response or no response to retry or escalate to outcome tracked.",
        steps: [
          "A workflow event happens: booking created, payment pending, document missing, lead captured, callback requested, or renewal date approaching.",
          "FLOW schedules the reminder using the right time, timezone, and business window.",
          "The customer receives the reminder through the selected channel.",
          "If the customer responds, FLOW continues the next step.",
          "If the customer does not respond, FLOW can send a second reminder, switch channel, or wait until the next business window.",
          "If the action remains pending, the case can be escalated to the right team.",
          "The final status is tracked as completed, pending, skipped, expired, failed, or escalated.",
        ],
      },
      trustSection: {
        eyebrow: "Timing and Control",
        title: "Built for reminder workflows with timing control",
        description:
          "Reminder workflows need clear timing, delivery, and escalation control before they can scale safely.",
        items: [
          {
            title: "Timezone-safe scheduling",
            description:
              "Reminders should use a clear timezone instead of relying on server defaults.",
          },
          {
            title: "Duplicate protection",
            description:
              "Use dedupe keys so retries or repeated triggers do not create duplicate reminders.",
          },
          {
            title: "Business-hour windows",
            description:
              "Send reminders inside acceptable time windows when required.",
          },
          {
            title: "Expiry handling",
            description:
              "If the reminder is no longer useful after a deadline, route it as expired instead of sending late.",
          },
          {
            title: "Fallback channels",
            description:
              "If one channel is unavailable, use approved WhatsApp templates, SMS, email, or human handover where needed.",
          },
          {
            title: "Escalation path",
            description:
              "If reminders do not create action, route the case to sales, support, billing, admissions, or operations.",
          },
        ],
        supportLine:
          "FLOW's production playbook expects scheduler outcomes such as scheduled, skipped, failed, and expired, and the safest next nodes are notification, message, handover, retry, fallback, or end.",
      },
      outcomesSection: {
        eyebrow: "Pilot Metrics",
        title: "What to measure during the reminder workflow pilot",
        description:
          "Keep the pilot focused on reminder creation, delivery, action recovery, expiry handling, and escalation quality.",
        items: [
          {
            title: "Reminder scheduled rate",
            description: "How many reminders are successfully created.",
          },
          {
            title: "Reminder delivery rate",
            description:
              "How many reminders are sent successfully through the selected channel.",
          },
          {
            title: "Action completion rate",
            description:
              "How many customers complete the expected action after reminder.",
          },
          {
            title: "Missed-action recovery",
            description:
              "How many pending bookings, payments, documents, callbacks, or renewals are recovered.",
          },
          {
            title: "Expired reminder volume",
            description:
              "How many reminders become too late or no longer useful.",
          },
          {
            title: "Escalation quality",
            description:
              "How many overdue cases reach the right team with context.",
          },
          {
            title: "Follow-up leakage",
            description:
              "How many customers still drop off after reminders and retries.",
          },
        ],
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Common questions before launching reminder automation",
        description:
          "These answers cover scheduling, durable jobs, fallback channels, duplicate protection, and expiry handling.",
        items: [
          {
            question: "Can FLOW send reminders automatically?",
            answer:
              "Yes. FLOW can schedule reminders based on workflow events such as appointment time, payment due date, missing document status, callback request, renewal date, or pending customer action.",
          },
          {
            question: "Can reminders run outside the current chat session?",
            answer:
              "Yes. Durable reminders should use scheduler-style jobs rather than simple delays when they need to survive beyond the current conversation turn.",
          },
          {
            question: "Can reminders use WhatsApp, SMS, and email?",
            answer:
              "Yes, based on channel setup. WhatsApp reminders outside an active session may require approved templates, and SMS or email can be used as fallback channels where configured.",
          },
          {
            question: "How do we prevent duplicate reminders?",
            answer:
              "Use dedupe keys based on the customer, workflow, and business object, such as appointment ID, payment ID, lead ID, or document request ID.",
          },
          {
            question: "What happens when a reminder fails or expires?",
            answer:
              "The workflow should route to retry, fallback channel, staff handover, or close the reminder as expired depending on the business rule.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Next Step",
        title: "Ready to automate your reminder and follow-up workflow?",
        description:
          "Tell us how your team currently handles appointment reminders, payment follow-ups, pending documents, callbacks, renewals, missed actions, and escalation. We'll map your process and show the fastest FLOW reminder workflow to launch first.",
        note: "Start with one reminder workflow. Prove value. Expand into payments, documents, bookings, support, and renewals.",
        primary: { label: "Book Reminder Workflow Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
  },
  {
    slug: "document-collection",
    title: "Document Collection Automation for KYC and Intake | FLOW",
    metadataTitle:
      "Document Collection Automation for KYC, Intake, Missing Files, and Review Workflows | Crescora FLOW",
    h1: "Collect documents without manual chasing",
    keywordTarget: "document collection automation",
    headline: "Collect documents over chat without chasing them manually.",
    description:
      "Use the page to highlight document request flows, upload tracking, missing-document reminders, and escalation.",
    outline: ["Hero", "collection flow", "tracking", "security", "FAQs", "CTA"],
    ctaLabel: "Launch faster",
    metadataDescription:
      "Automate document collection, KYC intake, missing-file reminders, upload tracking, review routing, approval workflows, and customer follow-ups with Crescora FLOW.",
    publicPage: {
      eyebrow: "Document Workflow",
      heroTitle:
        "Automate document collection, missing-file follow-ups, KYC intake, and review routing.",
      heroDescription:
        "Crescora FLOW helps teams collect required documents from customers, track missing files, send follow-up reminders, validate accepted file types, route unclear submissions for review, and keep every document request connected to the customer workflow.",
      heroPrimaryCta: {
        label: "Book Document Workflow Demo",
        href: "/contact",
      },
      heroSecondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      heroSupportLine:
        "Built for KYC intake, admissions documents, insurance files, onboarding paperwork, claims, service forms, payment proofs, and compliance follow-ups.",
      heroFlowSteps: [
        "Request Document",
        "Upload",
        "Validate",
        "Missing File Reminder",
        "Review",
        "Approved / Escalated",
      ],
      heroStatusChips: [
        "Requested",
        "Submitted",
        "Missing",
        "Invalid",
        "Under Review",
        "Approved",
        "Rejected",
        "Escalated",
      ],
      overviewCards: [
        {
          eyebrow: "Document Intake",
          title: "Collect documents without manual chasing.",
          description:
            "FLOW can guide customers through required document submission, explain what is missing, accept supported file types, collect reference details, and store the document status for the next workflow step.",
        },
        {
          eyebrow: "Review and Control",
          title: "Route unclear or sensitive documents to the right team.",
          description:
            "When a file is incomplete, unreadable, low-confidence, or sensitive, FLOW can move it to a review path, approval path, or handover path instead of forcing automation to guess.",
        },
      ],
      capabilitySection: {
        eyebrow: "Workflow Coverage",
        title: "Document workflows FLOW can automate",
        items: [
          {
            title: "KYC document collection",
            description:
              "Collect identity documents, address proof, forms, declarations, or supporting files before routing them to review or verification.",
          },
          {
            title: "Missing document follow-up",
            description:
              "Automatically remind customers when required documents are missing, incomplete, unclear, or not submitted.",
          },
          {
            title: "Admission document intake",
            description:
              "Collect student forms, ID proof, certificates, fee receipts, and parent details for school, college, coaching, or EdTech workflows.",
          },
          {
            title: "Insurance and finance paperwork",
            description:
              "Collect policy documents, claim forms, bank details, ID proof, income proof, or supporting documents before handover.",
          },
          {
            title: "Healthcare and lab documents",
            description:
              "Collect reports, prescriptions, referral notes, insurance files, or patient documents and route sensitive cases to staff.",
          },
          {
            title: "Service business forms",
            description:
              "Collect service photos, address proof, invoices, warranty files, payment screenshots, or request documents before work begins.",
          },
          {
            title: "Review and approval routing",
            description:
              "Send unclear, low-confidence, or high-risk submissions to the right team for human review or approval.",
          },
          {
            title: "Status tracking",
            description:
              "Track whether documents are requested, submitted, missing, under review, approved, rejected, or escalated.",
          },
        ],
        supportLine:
          "FLOW's file-processing capability can support OCR, classification, field extraction, validation, summarization, confidence thresholds, strict extraction, and routes such as low confidence, invalid file, manual-review-required, and failed.",
      },
      beforeAfterSection: {
        eyebrow: "Before vs After",
        title: "Before FLOW vs After FLOW",
        rows: [
          {
            before: "Staff repeatedly ask customers for missing documents",
            after: "FLOW sends structured document requests and reminders",
          },
          {
            before: "Customers are unsure what to upload",
            after: "FLOW explains the required files and next step",
          },
          {
            before: "Files are scattered across chats, email, and forms",
            after: "Document submissions can be tied to one workflow record",
          },
          {
            before: "Incomplete files delay the process",
            after: "Missing or invalid submissions can be re-requested",
          },
          {
            before: "Sensitive documents are handled casually",
            after: "Review, approval, and handover paths can be added",
          },
          {
            before: "Managers cannot track document status",
            after:
              "Teams can see requested, submitted, pending, reviewed, and escalated statuses",
          },
        ],
      },
      journeySection: {
        eyebrow: "Journey Example",
        title: "Example document collection journey",
        steps: [
          "Customer starts a workflow from website chat, WhatsApp, or another supported channel.",
          "FLOW identifies the document purpose: KYC, admission, insurance, claim, onboarding, payment proof, or service request.",
          "FLOW explains the required documents and accepted file types.",
          "Customer uploads or shares the required files.",
          "FLOW checks whether the minimum document requirement is met.",
          "Missing or invalid files trigger clear retry guidance.",
          "Accepted documents move to verification, record update, approval, or handover.",
          "Low-confidence, sensitive, or incomplete submissions move to a human review path.",
          "Customer receives the next step: submitted, pending review, missing item, approved, rejected, or escalated.",
        ],
      },
      trustSection: {
        eyebrow: "Privacy and Control",
        title: "Built for document workflows with privacy, review, and control",
        items: [
          {
            title: "Clear upload instructions",
            description:
              "Tell users exactly which documents are required, what file types are accepted, and what happens after submission.",
          },
          {
            title: "Missing-file recovery",
            description:
              "Re-prompt customers when documents are missing, incomplete, or invalid instead of silently failing the workflow.",
          },
          {
            title: "Review routing",
            description:
              "Route low-confidence or sensitive documents to staff through approval or handover.",
          },
          {
            title: "Audit-ready actions",
            description:
              "Track consent, submission, review, approval, rejection, and escalation steps where required.",
          },
          {
            title: "Data minimization",
            description:
              "Only collect documents that are needed for the workflow and avoid displaying sensitive information unnecessarily.",
          },
        ],
        supportLine:
          "Document workflows should collect only required files and route sensitive submissions through controlled review paths. The playbook requires privacy and compliance wording for document intake, recommends testing accepted extensions, minimum document constraints, and downstream usage of the stored document list before production, and supports configured approvers, timeout policies, audit metadata, and escalation or fallback branches for sensitive decisions.",
      },
      outcomesSection: {
        eyebrow: "Outcome Metrics",
        title: "Outcomes document-heavy teams can track",
        items: [
          {
            title: "Document submission rate",
            description: "How many customers submit the required files.",
          },
          {
            title: "Missing document recovery",
            description:
              "How many incomplete submissions are corrected after reminders.",
          },
          {
            title: "Review queue volume",
            description:
              "How many files need manual review because of low confidence, missing fields, or unclear images.",
          },
          {
            title: "Processing time",
            description:
              "How long it takes from document request to completed submission.",
          },
          {
            title: "Handover quality",
            description:
              "Whether staff receive the file, customer details, issue reason, and next step together.",
          },
          {
            title: "Completion status",
            description:
              "How many cases are submitted, pending review, approved, rejected, escalated, or closed.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Next Step",
        title: "Ready to automate your document collection workflow?",
        description:
          "Tell us how your team currently collects KYC files, forms, certificates, reports, payment proofs, claims, onboarding documents, or missing paperwork. We'll map the workflow and show how FLOW can reduce manual chasing, improve tracking, and route exceptions to the right team.",
        note: "Start with one document workflow. Prove value. Expand into review, approval, reminders, and status tracking.",
        primary: { label: "Book Document Workflow Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
  },
  {
    slug: "customer-support",
    title: "Customer Support Automation for FAQs, Issue Triage, Ticket Routing, Human Handover, and Analytics | Crescora FLOW",
    metadataTitle:
      "Customer Support Automation for FAQs, Issue Triage, Ticket Routing, Human Handover, and Analytics | Crescora FLOW",
    metadataDescription:
      "Automate customer support workflows with FAQ resolution, issue triage, ticket creation, priority routing, human handover, status updates, queue visibility, and support analytics using Crescora FLOW.",
    h1: "Automate customer support FAQs, issue triage, ticket routing, and human handover.",
    keywordTarget: "customer support workflow automation",
    headline: "Automate customer support FAQs, issue triage, ticket routing, and human handover.",
    description:
      "Crescora FLOW helps support teams reduce repetitive questions, capture issue details, classify requests, route cases, escalate unresolved conversations, and track every support workflow from first message to resolution.",
    outline: [
      "Hero",
      "workflow diagram",
      "support automation",
      "before / after",
      "observability",
      "FAQs",
      "CTA",
    ],
    ctaLabel: "Book Support Workflow Demo",
    publicPage: {
      eyebrow: "Support Workflow",
      heroTitle: "Automate customer support FAQs, issue triage, ticket routing, and human handover.",
      heroDescription:
        "Crescora FLOW helps support teams reduce repetitive questions, capture issue details, classify requests, route cases, escalate unresolved conversations, and track every support workflow from first message to resolution.",
      heroPrimaryCta: { label: "Book Support Workflow Demo", href: "/contact" },
      heroSecondaryCta: { label: "Discuss My Support Workflow", href: "/contact" },
      heroSupportLine:
        "Built for FAQ resolution, issue triage, ticket creation, priority routing, status updates, human handover, queue visibility, and support analytics.",
      heroFlowSteps: [
        "Customer Question",
        "Issue Category",
        "FAQ / Data Capture",
        "Ticket / Status Update",
        "Human Handover",
        "Resolution Tracking",
      ],
      heroStatusChips: [
        "New",
        "FAQ Resolved",
        "Details Captured",
        "Ticket Created",
        "Assigned",
        "Escalated",
        "Pending",
        "Resolved",
        "Closed",
      ],
      heroVisual: {
        eyebrow: "Support Workflow",
        title: "Route support conversations with context instead of guesswork.",
        description:
          "Capture the issue category, required details, customer history, priority, and the next action before the case moves to a team member or queue.",
        note:
          "The handover node escalates the conversation to a human channel, moves unresolved or high-risk cases to support staff, and uses queue and conversation APIs as the human operating surface.",
      },
      workflowDiagramSection: {
        eyebrow: "Workflow Diagram",
        title: "How support conversations move through FLOW",
        description: "Customer Question -> Issue Category -> FAQ / Data Capture -> Ticket / Status Update -> Human Handover -> Resolution Tracking",
        steps: [
          "Customer Question",
          "Issue Category",
          "FAQ / Data Capture",
          "Ticket / Status Update",
          "Human Handover",
          "Resolution Tracking",
        ],
        supportLine:
          "FLOW turns support conversations into a clear operating path. The customer gets an answer or next step, the team gets structured context, and managers can see which cases are resolved, pending, escalated, or stuck.",
      },
      overviewCards: [
        {
          eyebrow: "Support Triage",
          title: "Turn repeated support questions into structured workflows.",
          description:
            "FLOW can understand the customer's issue, collect required details, answer common questions from approved knowledge, classify the request, and route unresolved cases to the right support team.",
        },
        {
          eyebrow: "Handover and Visibility",
          title: "Escalate complex cases with context, not confusion.",
          description:
            "When automation cannot resolve the issue, FLOW can hand over the conversation with customer details, issue type, priority, conversation history, and next-step context so agents do not start from zero.",
        },
      ],
      capabilitySection: {
        eyebrow: "What FLOW can automate",
        title: "What this customer support workflow can automate",
        description:
          "Use customer support automation to answer common questions, structure issue intake, create tickets, and hand over unresolved cases with full context.",
        items: [
          {
            title: "FAQ resolution",
            description:
              "Answer repeated questions about pricing, services, availability, documents, policies, order status, timings, and next steps using approved knowledge.",
          },
          {
            title: "Issue triage",
            description:
              "Ask the right questions based on issue category, urgency, customer type, department, product, or service.",
          },
          {
            title: "Ticket creation",
            description:
              "Capture customer name, contact details, issue description, priority, attachments, and support category before sending the case to the team.",
          },
          {
            title: "Human handover",
            description:
              "Escalate angry, urgent, sensitive, unresolved, or high-value conversations to the right person or queue with context.",
          },
          {
            title: "Status updates",
            description:
              "Send updates when a ticket is created, assigned, pending customer response, escalated, resolved, or closed.",
          },
          {
            title: "Support queue visibility",
            description:
              "Track which conversations are new, waiting, assigned, escalated, unresolved, or completed.",
          },
        ],
      },
      beforeAfterSection: {
        eyebrow: "Before vs After",
        title: "Before FLOW vs After FLOW",
        description:
          "Show buyers how the support process changes once issue intake, routing, and escalation become structured.",
        rows: [
          {
            before: "Agents answer the same questions repeatedly",
            after: "FLOW answers common questions from approved knowledge",
          },
          {
            before: "Customers provide incomplete issue details",
            after: "FLOW captures issue type, urgency, and required fields first",
          },
          {
            before: "Tickets are created manually",
            after: "Support context can be structured before ticket creation",
          },
          {
            before: "Handover loses conversation history",
            after: "Agents receive captured details and full context",
          },
          {
            before: "Urgent cases are not prioritized clearly",
            after: "Escalation rules can route high-priority cases faster",
          },
          {
            before: "Managers lack visibility into support leakage",
            after:
              "Queues, escalations, repeated questions, and unresolved cases can be tracked",
          },
        ],
      },
      launchSection: {
        eyebrow: "When should FLOW hand off?",
        title: "When support automation should escalate to a human",
        description:
          "Use handoff when the workflow needs a person, a specialist queue, or a controlled escalation path instead of more bot replies.",
        items: [
          {
            title: "Repeated FAQ or low-confidence answer",
            description:
              "When the approved knowledge base does not cover the question or the answer is uncertain.",
          },
          {
            title: "Angry, urgent, or sensitive request",
            description:
              "Complaints, severe dissatisfaction, security-sensitive cases, or high-risk support issues.",
          },
          {
            title: "Missing required details",
            description:
              "When the user has not provided the fields needed to create, route, or resolve the case.",
          },
          {
            title: "Ticket needs human review",
            description:
              "Exception handling, approvals, disputes, or cases that need a staff member to confirm the next step.",
          },
          {
            title: "High-value or VIP customer",
            description:
              "Important accounts, enterprise buyers, or conversations that deserve faster human attention.",
          },
          {
            title: "Customer asks for a person",
            description:
              "The support flow should always allow a direct human handoff when the customer requests it.",
          },
        ],
      },
      journeySection: {
        eyebrow: "Journey Example",
        title: "Example customer support workflow journey",
        description:
          "The operating path is customer question to issue category to FAQ or data capture to ticket or status update to human handover to resolution tracking.",
        steps: [
          "Customer starts with a website chat, WhatsApp message, email, or SMS support request.",
          "FLOW identifies the issue category, urgency, and support intent.",
          "FLOW answers from approved knowledge or captures the details needed to continue.",
          "The workflow creates or updates a ticket when a support action is required.",
          "Unresolved or high-risk cases are escalated to the right person or queue.",
          "Support status is updated as the case is assigned, pending, escalated, or resolved.",
        ],
      },
      trustSection: {
        eyebrow: "Operational Control",
        title: "Built for support teams with operational control",
        description:
          "Support workflows should be explicit, visible, and safe. Once a case needs a person, the workflow should stop pretending the bot can finish it alone.",
        items: [
          {
            title: "Approved knowledge only",
            description:
              "Answer common questions from approved content so the team controls what is said.",
          },
          {
            title: "Context before ticketing",
            description:
              "Collect the minimum details needed before a ticket or escalation is created.",
          },
          {
            title: "Human handover with context",
            description:
              "Pass issue type, priority, and conversation history to the next owner.",
          },
          {
            title: "Queue visibility",
            description:
              "Track which cases are new, assigned, pending, escalated, or resolved.",
          },
          {
            title: "Priority routing",
            description:
              "Route urgent or high-value support cases faster when the queue needs it.",
          },
          {
            title: "Support analytics",
            description:
              "Use the workflow data to see repeated questions, unresolved issues, and handover volume.",
          },
        ],
        supportLine:
          "FLOW supports queue assignment, conversation tracking, transcript retrieval, queue metrics, agent presence, claim and release assignment, session updates, agent assist, explainability, and agent reply posting. It also supports round robin, least busy, skill based, and priority routing with SLA due-time metadata and queue outcomes like assigned, queued, or failed.",
      },
      outcomesSection: {
        eyebrow: "Observability",
        title: "What support teams can monitor during rollout",
        description:
          "Keep the rollout focused on open cases, escalations, repeated questions, unresolved issues, SLA risk, and handover volume.",
        items: [
          {
            title: "Open cases",
            description:
              "How many support conversations are still waiting for action or closure.",
          },
          {
            title: "Escalations",
            description:
              "How many cases move from automation to a human team or queue.",
          },
          {
            title: "Repeated questions",
            description:
              "Which questions show up most often and should be improved in the knowledge base.",
          },
          {
            title: "Unresolved issues",
            description:
              "Cases that still need a person, a follow-up, or a better routing rule.",
          },
          {
            title: "SLA risk",
            description:
              "Cases approaching or missing the target response time.",
          },
          {
            title: "Handover volume",
            description:
              "How often the workflow moves from automation into human support.",
          },
        ],
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Common questions before launching support automation",
        description:
          "These answers cover FAQ resolution, issue triage, ticketing, handoff behavior, queue visibility, and status tracking.",
        items: [
          {
            question: "Can FLOW answer common support questions before escalating?",
            answer:
              "Yes. FLOW can respond from approved knowledge and only escalate when the case needs a person or a ticket.",
          },
          {
            question: "Can support tickets be created automatically?",
            answer:
              "Yes. FLOW can capture the required details and create or update a ticket before handing the case to the support team.",
          },
          {
            question: "What happens when FLOW cannot resolve the issue?",
            answer:
              "The workflow can hand over the conversation with context, priority, and the next step so the agent does not start from zero.",
          },
          {
            question: "Can managers see queue and handover activity?",
            answer:
              "Yes. FLOW can surface support queue visibility, escalation volume, and unresolved case tracking depending on the rollout design.",
          },
          {
            question: "Can FLOW route urgent or high-value cases faster?",
            answer:
              "Yes. Priority routing and skill-based assignment can send important cases to the right owner or queue sooner.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Next Step",
        title: "Ready to automate your customer support workflow?",
        description:
          "Tell us how your team currently handles repeated questions, issue triage, ticket creation, escalations, status updates, and unresolved cases. We will map your current process and show the fastest FLOW support workflow to launch first.",
        note:
          "Start with FAQ and triage. Prove value. Expand into ticketing, handover, analytics, and support visibility.",
        primary: { label: "Book Support Workflow Demo", href: "/contact" },
        secondary: { label: "Discuss My Support Workflow", href: "/contact" },
      },
    },
  },
  {
    slug: "rag-knowledge-assistant",
    title:
      "RAG Knowledge Assistant for Support Teams, FAQ Automation, Grounded Answers, and Human Handover | Crescora FLOW",
    metadataTitle:
      "RAG Knowledge Assistant for Support Teams, FAQ Automation, Grounded Answers, and Human Handover | Crescora FLOW",
    metadataDescription:
      "Build a RAG knowledge assistant with Crescora FLOW. Answer customer FAQs from approved knowledge, detect gaps, avoid unsupported AI responses, and hand off low-confidence questions to support teams.",
    h1: "Answer customer questions from approved knowledge - and hand off when confidence is low.",
    keywordTarget: "RAG knowledge assistant",
    headline:
      "Answer customer questions from approved knowledge - and hand off when confidence is low.",
    description:
      "Crescora FLOW helps support teams turn documents, FAQs, policies, service information, pricing details, and process guides into controlled customer answers. When the answer is unclear, sensitive, outdated, or unsupported, FLOW can route the conversation to a human team with full context.",
    outline: [
      "Hero",
      "knowledge search",
      "grounded answers",
      "handoff",
      "gap tracking",
      "CTA",
    ],
    ctaLabel: "Book Knowledge Assistant Demo",
    publicPage: {
      eyebrow: "Knowledge Assistant Workflow",
      heroTitle:
        "Answer customer questions from approved knowledge - and hand off when confidence is low.",
      heroDescription:
        "Crescora FLOW helps support teams turn documents, FAQs, policies, service information, pricing details, and process guides into controlled customer answers. When the answer is unclear, sensitive, outdated, or unsupported, FLOW can route the conversation to a human team with full context.",
      heroPrimaryCta: { label: "Book Knowledge Assistant Demo", href: "/contact" },
      heroSecondaryCta: { label: "Discuss My Support Workflow", href: "/contact" },
      heroSupportLine:
        "Built for FAQ automation, grounded answers, knowledge retrieval, fallback handling, human handover, answer quality review, and knowledge gap detection.",
      heroFlowSteps: [
        "Customer Question",
        "Knowledge Search",
        "Grounded Answer",
        "Confidence Check",
        "Answer / Fallback",
        "Human Handoff",
        "Gap Tracking",
      ],
      heroStatusChips: [
        "Answered",
        "Fallback",
        "Low Confidence",
        "Needs Human",
        "Gap Detected",
        "Draft Created",
        "Reviewed",
        "Published",
      ],
      heroVisual: {
        eyebrow: "Knowledge Assistant",
        title:
          "Search approved knowledge first, then decide whether the workflow should answer or abstain.",
        description:
          "Use retrieved context, answer rules, fallback behavior, and human handoff to keep the assistant grounded in approved business knowledge instead of letting it improvise.",
        note:
          "The AI-grounded capability is designed around knowledge context, fallback response behavior, citation options, score thresholds, and abstention metadata so the workflow can answer only when the evidence is strong enough.",
      },
      workflowDiagramSection: {
        eyebrow: "Workflow Diagram",
        title: "How a controlled knowledge assistant should operate",
        description:
          "Customer Question -> Knowledge Search -> Grounded Answer -> Confidence Check -> Answer / Fallback -> Human Handoff -> Gap Tracking",
        steps: [
          "Customer Question",
          "Knowledge Search",
          "Grounded Answer",
          "Confidence Check",
          "Answer / Fallback",
          "Human Handoff",
          "Gap Tracking",
        ],
        supportLine:
          "FLOW should not behave like an uncontrolled chatbot. It should first search approved knowledge, answer only when context is strong enough, and hand off when the question needs a human decision.",
      },
      overviewCards: [
        {
          eyebrow: "Grounded Answers",
          title: "Answer from approved business knowledge, not random AI guesses.",
          description:
            "FLOW can search approved knowledge, generate controlled answers, include fallback messaging when context is weak, and keep responses aligned with your business content instead of allowing unsupported free-form replies.",
        },
        {
          eyebrow: "Safe Escalation",
          title: "Hand off low-confidence or sensitive questions to humans.",
          description:
            "When the assistant cannot answer confidently, the question is outside approved knowledge, or the case needs human judgment, FLOW can escalate to the right support team with the customer question, retrieved context, and conversation history.",
        },
      ],
      capabilitySection: {
        eyebrow: "What FLOW can automate",
        title: "What this knowledge assistant workflow can automate",
        description:
          "Use a knowledge assistant workflow to answer approved questions, detect low-confidence gaps, and hand unresolved cases to a human team without losing context.",
        items: [
          {
            title: "FAQ resolution",
            description:
              "Answer repeated questions about services, pricing, policies, timings, documents, locations, availability, process steps, and support instructions.",
          },
          {
            title: "Knowledge retrieval",
            description:
              "Search approved knowledge base content before generating an answer, so the response is based on business-controlled information.",
          },
          {
            title: "Grounded answer generation",
            description:
              "Generate answers using retrieved context, answer style rules, fallback messages, and optional citation-style references.",
          },
          {
            title: "Low-confidence fallback",
            description:
              "If the knowledge is weak, missing, outdated, or not relevant enough, FLOW should avoid guessing and guide the user to the next safe step.",
          },
          {
            title: "Human handover",
            description:
              "Route unresolved, sensitive, high-risk, angry, or complex questions to a human team with conversation history and the user's original question.",
          },
          {
            title: "Knowledge gap detection",
            description:
              "Identify repeated unanswered questions so your team can improve the knowledge base over time.",
          },
          {
            title: "Draft review workflow",
            description:
              "Support teams can review suggested knowledge updates before publishing them.",
          },
          {
            title: "Analytics and quality tracking",
            description:
              "Track repeated questions, fallback triggers, unresolved answers, handovers, and support deflection performance.",
          },
        ],
        supportLine:
          "FLOW's current product coverage includes KB and RAG operations, document upload and parse pipeline, gap detection, draft generation, review, and publish workflows, which makes this positioning realistic.",
      },
      beforeAfterSection: {
        eyebrow: "Before vs After",
        title: "Before FLOW vs After FLOW",
        description:
          "Show buyers how support knowledge handling changes once answers are grounded, fallback is controlled, and gaps are tracked.",
        rows: [
          {
            before: "Agents answer the same questions repeatedly",
            after: "FLOW answers common questions from approved knowledge",
          },
          {
            before: "Customers receive inconsistent answers",
            after: "Responses follow controlled knowledge and fallback rules",
          },
          {
            before: "AI may guess when information is missing",
            after: "Low-confidence questions can trigger fallback or handover",
          },
          {
            before: "Support teams do not know which content is missing",
            after: "Repeated unanswered questions can become knowledge gaps",
          },
          {
            before: "Handover loses context",
            after: "Human teams receive the original question and conversation history",
          },
          {
            before: "Knowledge updates are scattered",
            after: "Draft, review, and publish workflows can improve the knowledge base",
          },
        ],
      },
      launchSection: {
        eyebrow: "Use Cases",
        title: "Knowledge assistant workflows businesses can launch first",
        description:
          "Start with one knowledge area, prove answer quality, then expand into more channels, FAQs, and handoff paths.",
        items: [
          {
            title: "Customer support FAQ assistant",
            description:
              "Answer repeated support questions and hand off unresolved issues.",
          },
          {
            title: "Healthcare front-desk assistant",
            description:
              "Answer approved questions about timings, services, appointment steps, report process, and hospital instructions while routing sensitive cases to staff.",
          },
          {
            title: "Education admissions assistant",
            description:
              "Answer questions about courses, fees, batches, eligibility, admission steps, documents, and demo classes.",
          },
          {
            title: "Real estate project assistant",
            description:
              "Answer project, location, pricing range, amenities, brochure, and site visit questions from approved content.",
          },
          {
            title: "Service business assistant",
            description:
              "Answer service availability, pricing, booking process, warranty, support, and next-step questions.",
          },
          {
            title: "Internal team assistant",
            description:
              "Help staff find approved process information, SOPs, escalation rules, and customer handling instructions.",
          },
        ],
      },
      journeySection: {
        eyebrow: "Journey Example",
        title: "Example knowledge assistant workflow journey",
        description:
          "The operating path is question to knowledge search to grounded answer to confidence check to answer or fallback to human handoff and gap tracking.",
        steps: [
          "Customer asks a question on website chat, WhatsApp, Telegram, email, or SMS.",
          "FLOW searches approved FAQs, documents, policies, process notes, and service information.",
          "The workflow generates a grounded answer only from the retrieved business context.",
          "A confidence check decides whether the workflow should answer, ask for clarification, fallback, or hand off.",
          "Low-confidence, sensitive, or unsupported questions move to a human team with the original question and conversation history.",
          "Repeated fallback and unanswered topics are logged as knowledge gaps for draft, review, and publish workflows.",
        ],
      },
      trustSection: {
        eyebrow: "Operational Control",
        title: "Built for knowledge workflows with control",
        description:
          "A knowledge assistant should be grounded, explicit about uncertainty, and connected to human review when the answer needs judgment.",
        items: [
          {
            title: "Approved knowledge only",
            description:
              "Use reviewed FAQs, documents, policies, process notes, pricing details, and service information as the source of answers.",
          },
          {
            title: "No-answer behavior",
            description:
              "When the assistant does not have enough grounding, it should say so clearly, ask for clarification, or hand off to a human.",
          },
          {
            title: "Human review path",
            description:
              "Sensitive, high-risk, legal, medical, financial, complaint, or account-specific questions should move to a human team.",
          },
          {
            title: "Knowledge freshness",
            description:
              "Repeated gaps and outdated answers should be reviewed so the knowledge base improves over time.",
          },
          {
            title: "Answer quality tracking",
            description:
              "Measure fallback rate, repeated questions, handover volume, unresolved topics, and customer drop-offs.",
          },
        ],
        supportLine:
          "The AI-grounded capability is designed around knowledge context, fallback response behavior, citation options, score thresholds, and abstention metadata, which supports a controlled knowledge-assistant workflow.",
      },
      outcomesSection: {
        eyebrow: "Pilot Metrics",
        title: "What to measure during the knowledge assistant pilot",
        description:
          "Keep the pilot focused on answer quality, fallback behavior, gap detection, and support load reduction.",
        items: [
          {
            title: "FAQ resolution rate",
            description:
              "How many repeated questions are answered without human involvement.",
          },
          {
            title: "Fallback rate",
            description:
              "How often FLOW avoids answering because the knowledge context is weak or missing.",
          },
          {
            title: "Handover quality",
            description:
              "How many escalations include the original question, customer details, context, and next step.",
          },
          {
            title: "Knowledge gap volume",
            description:
              "Which topics repeatedly fail or trigger fallback.",
          },
          {
            title: "Answer consistency",
            description:
              "Whether answers stay aligned with approved business content.",
          },
          {
            title: "Support load reduction",
            description:
              "How many repeated questions stop reaching the human support team.",
          },
          {
            title: "Content improvement loop",
            description:
              "How many gaps become reviewed and published knowledge updates.",
          },
        ],
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Common questions before launching a knowledge assistant",
        description:
          "These answers cover grounded answers, confidence fallback, review workflows, multi-channel rollout, and knowledge gap analytics.",
        items: [
          {
            question: "Can FLOW answer from our own documents and FAQs?",
            answer:
              "Yes. FLOW supports knowledge base operations including item search, document upload and parse, and knowledge workflows. The answer should be grounded in approved business content, not open-ended internet guessing.",
          },
          {
            question: "What happens when the assistant is not confident?",
            answer:
              "The workflow should use fallback messaging, ask a clarifying question, or hand off to a human team instead of inventing an answer.",
          },
          {
            question: "Can support teams review knowledge updates?",
            answer:
              "Yes. FLOW supports gap detection and draft generation, review, and publish workflows, so repeated unanswered questions can become reviewed knowledge improvements.",
          },
          {
            question: "Can this work across WhatsApp and website chat?",
            answer:
              "Yes. FLOW supports web widget chat, WhatsApp, Telegram, email, SMS, and channel configuration depending on rollout scope.",
          },
          {
            question: "Can managers track unanswered questions?",
            answer:
              "Yes. Use analytics, quality checks, fallback events, handover volume, and knowledge gap tracking to understand where the assistant needs improvement.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Next Step",
        title: "Ready to build a controlled knowledge assistant workflow?",
        description:
          "Tell us what your team currently answers again and again - FAQs, pricing, policies, documents, service steps, support questions, admissions, project details, or customer instructions. We'll map your knowledge assistant workflow and show where FLOW should answer, fallback, or hand off to humans.",
        note:
          "Start with one knowledge area. Prove answer quality. Expand into more FAQs, documents, channels, and support workflows.",
        primary: { label: "Book Knowledge Assistant Demo", href: "/contact" },
        secondary: { label: "Discuss My Support Workflow", href: "/contact" },
      },
    },
  },
  {
    slug: "human-handoff",
    title:
      "Human Handoff Automation for Escalation, Context Transfer, SLA Visibility, and Support Routing | Crescora FLOW",
    metadataTitle:
      "Human Handoff Automation for Escalation, Context Transfer, SLA Visibility, and Support Routing | Crescora FLOW",
    metadataDescription:
      "Automate human handoff workflows with context-rich escalation, queue assignment, SLA visibility, support routing, sales handover, billing escalation, and conversation tracking using Crescora FLOW.",
    h1: "Escalate complex conversations to the right human team with full context.",
    keywordTarget: "human handoff automation",
    headline:
      "Escalate complex conversations to the right human team with full context.",
    description:
      "Crescora FLOW helps businesses automate routine conversations while routing urgent, sensitive, high-value, angry, or unresolved cases to the right person or queue. Every handoff can include captured details, issue type, priority, conversation history, SLA expectations, and the next action.",
    outline: [
      "Hero",
      "handoff rules",
      "context transfer",
      "SLA",
      "FAQs",
      "CTA",
    ],
    ctaLabel: "Book Handoff Workflow Demo",
    publicPage: {
      eyebrow: "Human Handoff Workflow",
      heroTitle:
        "Escalate complex conversations to the right human team with full context.",
      heroDescription:
        "Crescora FLOW helps businesses automate routine conversations while routing urgent, sensitive, high-value, angry, or unresolved cases to the right person or queue. Every handoff can include captured details, issue type, priority, conversation history, SLA expectations, and the next action.",
      heroPrimaryCta: { label: "Book Handoff Workflow Demo", href: "/contact" },
      heroSecondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      heroSupportLine:
        "Built for support escalation, sales handover, billing disputes, emergency routing, admission support, insurance cases, payment issues, and high-value conversations.",
      heroFlowSteps: [
        "Customer Request",
        "Intent / Risk Check",
        "Data Capture",
        "Priority Decision",
        "Queue Assignment",
        "Human Handoff",
        "SLA Tracking",
        "Outcome",
      ],
      heroStatusChips: [
        "Triggered",
        "Queued",
        "Assigned",
        "SLA Risk",
        "In Progress",
        "Resolved",
        "Closed",
        "Failed",
      ],
      heroVisual: {
        eyebrow: "Context-Rich Escalation",
        title:
          "Keep the full story attached when the bot hands off to a human.",
        description:
          "Capture the request type, urgency, selected options, files, previous answers, and queue metadata before escalation so the human team starts with context instead of an empty inbox.",
        note: "The handover node ends the bot turn after transfer. Do not model it like a normal continuing branch. FLOW can preserve the context payload, queue assignment, and SLA metadata for the receiving team.",
      },
      overviewCards: [
        {
          eyebrow: "Context-Rich Escalation",
          title: "Stop handing off conversations without the story.",
          description:
            "FLOW can transfer the conversation with customer details, request type, urgency, selected options, previous answers, files or references, and next-step context so the human team does not start from zero.",
        },
        {
          eyebrow: "Queue and SLA Control",
          title: "Route each handoff to the right owner, queue, or team.",
          description:
            "FLOW can support team assignment, priority routing, SLA due-time visibility, and escalation paths when a case is queued, delayed, or requires specialist handling.",
        },
      ],
      capabilitySection: {
        eyebrow: "Workflow Coverage",
        title: "What this human handoff workflow can automate",
        description:
          "Use human handoff automation to move high-risk, unresolved, or high-value cases into the right queue with the right context attached.",
        items: [
          {
            title: "Unresolved support escalation",
            description:
              "Move cases to a support team when FAQ, AI answer, or automated triage cannot resolve the issue.",
          },
          {
            title: "High-intent sales handover",
            description:
              "Route qualified leads, demo requests, site visit requests, and high-value enquiries to the right sales owner.",
          },
          {
            title: "Billing and payment escalation",
            description:
              "Send payment disputes, failed payment issues, refund requests, and overdue collections to billing or finance staff.",
          },
          {
            title: "Healthcare and emergency routing",
            description:
              "Send urgent, sensitive, or high-risk patient conversations to hospital staff instead of continuing a normal bot path.",
          },
          {
            title: "Document or KYC exception handling",
            description:
              "Route incomplete, unclear, repeated-failure, or low-confidence document submissions to staff review or approval.",
          },
          {
            title: "Admission and counselling handover",
            description:
              "Move serious student or parent enquiries to counsellors with student details, course interest, and conversation history.",
          },
          {
            title: "Priority and skill-based assignment",
            description:
              "Assign conversations by queue, skill, department, language, location, urgency, or customer type.",
          },
          {
            title: "SLA visibility and escalation",
            description:
              "Track queued, assigned, delayed, escalated, and unresolved cases so managers can see where conversations are stuck.",
          },
        ],
        supportLine:
          "FLOW can support assignment strategies such as round robin, least busy, skill based, and priority, with SLA due-time metadata and queue outcomes like assigned, queued, or failed. The product surfaces include runtime message execution, handover request and queue status, conversation transcript retrieval, conversation list and queue, queue metrics, agent presence, claim/release assignment, session status updates, agent assist, explainability, and agent reply posting.",
      },
      beforeAfterSection: {
        eyebrow: "Before vs After",
        title: "Before FLOW vs After FLOW",
        description:
          "Show buyers how the handoff process changes once escalation, queue ownership, and workflow state become visible.",
        rows: [
          {
            before: "Customers repeat the same issue after escalation",
            after:
              "Human teams receive captured details and conversation history",
          },
          {
            before: "Urgent cases are mixed with normal enquiries",
            after: "FLOW can route priority cases to the right queue",
          },
          {
            before: "Agents start without context",
            after:
              "Handoff payload can include request type, urgency, answers, files, and next step",
          },
          {
            before: "Ownership is unclear",
            after: "Cases can be assigned to a team, queue, or person",
          },
          {
            before: "SLA risk is invisible",
            after: "SLA due-time and queue status can be tracked",
          },
          {
            before: "Bot continues when it should stop",
            after: "Sensitive or unresolved cases can move to human control",
          },
        ],
      },
      launchSection: {
        eyebrow: "When should FLOW hand off?",
        title: "When automation should hand off to a human",
        description:
          "Use handoff when the workflow needs a person, a specialist queue, or a controlled escalation path instead of more bot replies.",
        items: [
          {
            title: "Urgent or high-risk request",
            description:
              "Emergency, safety, legal, financial, medical, or compliance-sensitive conversations.",
          },
          {
            title: "Angry or negative customer sentiment",
            description:
              "Complaints, repeated frustration, refund disputes, or severe dissatisfaction.",
          },
          {
            title: "High-value sales opportunity",
            description:
              "Enterprise enquiry, high-budget buyer, hot lead, demo request, or site visit request.",
          },
          {
            title: "Repeated failed attempts",
            description:
              "Payment retries, failed KYC upload, invalid documents, unavailable slots, or unresolved support loops.",
          },
          {
            title: "Low-confidence AI or FAQ answer",
            description:
              "When the answer is uncertain, incomplete, unsupported, or outside approved knowledge.",
          },
          {
            title: "Customer explicitly asks for human help",
            description:
              "The customer should always have a clear way to reach a human for complex cases.",
          },
        ],
      },
      journeySection: {
        eyebrow: "Journey Example",
        title: "Example human handoff journey",
        description:
          "The operating path is request to risk check to data capture to queue assignment to human handoff to SLA tracking to outcome.",
        steps: [
          "Customer starts a chat from website, WhatsApp, Telegram, email, or SMS.",
          "FLOW identifies the request type: sales, support, billing, document, appointment, complaint, emergency, or human help.",
          "FLOW captures the required details before handoff.",
          "The workflow decides whether the case should stay automated or move to a human team.",
          "If escalation is required, FLOW sends a summary and transfer payload.",
          "The case is assigned to the correct queue or owner where configured.",
          "SLA timing, priority, and case status can be monitored.",
          "The final outcome is tracked as assigned, queued, escalated, resolved, closed, or failed.",
        ],
      },
      contextSection: {
        eyebrow: "Context Transferred",
        title: "What context should be transferred to the human team",
        description:
          "Collect the details the human team needs before escalation so the handoff arrives with context, ownership, and a next action.",
        items: [
          {
            title: "Customer identity",
            description:
              "Name, phone number, email, location, preferred language, and channel.",
          },
          {
            title: "Conversation summary",
            description:
              "What the user asked, what the bot already answered, and why the handoff happened.",
          },
          {
            title: "Captured workflow fields",
            description:
              "Issue type, department, budget, payment ID, appointment ID, document status, report ID, order ID, or selected service.",
          },
          {
            title: "Priority and SLA",
            description:
              "Urgency level, queue name, expected response time, escalation reason, and SLA due-time.",
          },
          {
            title: "Operational next step",
            description:
              "Call back, verify payment, review document, confirm slot, resolve ticket, approve request, or close case.",
          },
          {
            title: "Audit and tracking data",
            description:
              "Handoff reason, timestamp, channel, owner, status, and outcome.",
          },
        ],
        note: "Context-rich handoffs reduce repeat questions, help agents work faster, and make SLA tracking and queue ownership visible from the start.",
      },
      trustSection: {
        eyebrow: "Operational Control",
        title: "Built for human handoff with operational control",
        description:
          "Handoff should be explicit, visible, and safe. Once transfer is triggered, the workflow should stop pretending the bot can finish the case on its own.",
        items: [
          {
            title: "Clear handoff ownership",
            description:
              "Map each handoff to the right team, queue, or owner before launch.",
          },
          {
            title: "Context before transfer",
            description:
              "Collect the fields the human team needs before escalation.",
          },
          {
            title: "SLA-aware routing",
            description:
              "Use priority and SLA rules so urgent or delayed cases are visible.",
          },
          {
            title: "No fake automation after transfer",
            description:
              "Once handoff is triggered, the bot should clearly tell the user what happens next.",
          },
          {
            title: "Fallback for queue failure",
            description:
              "If the team is unavailable or queue assignment fails, provide a safe fallback, retry, or alternate contact path.",
          },
          {
            title: "Operational visibility",
            description:
              "Monitor assigned, queued, failed, escalated, resolved, and delayed handoffs.",
          },
        ],
        supportLine:
          "FLOW supports queue assignment, conversation tracking, conversation transcript retrieval, queue metrics, agent presence, claim and release assignment, session status updates, agent assist, explainability, and agent reply posting. The queue playbook also supports round robin, least busy, skill based, and priority routing with SLA due-time metadata and queue outcomes like assigned, queued, or failed.",
      },
      outcomesSection: {
        eyebrow: "Pilot Metrics",
        title: "What to measure during the handoff workflow pilot",
        description:
          "Keep the pilot focused on handoff volume, reason quality, context completeness, queue assignment, SLA risk, and resolution progress.",
        items: [
          {
            title: "Handoff volume",
            description:
              "How many conversations move from automation to humans.",
          },
          {
            title: "Handoff reason",
            description:
              "Why the handoff happened: unresolved issue, urgency, complaint, high-value lead, payment dispute, document review, or user request.",
          },
          {
            title: "Context completeness",
            description:
              "How many handoffs include the required fields and conversation summary.",
          },
          {
            title: "Queue assignment rate",
            description:
              "How many cases are assigned successfully versus queued or failed.",
          },
          {
            title: "SLA risk",
            description:
              "How many handoffs are approaching or missing the first response target.",
          },
          {
            title: "Resolution progress",
            description:
              "How many handoffs are assigned, in progress, resolved, closed, or escalated again.",
          },
          {
            title: "Automation leakage",
            description:
              "Which paths hand off too often and should be improved with better FAQ, forms, routing, or fallback.",
          },
        ],
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Common questions before launching human handoff automation",
        description:
          "These answers cover escalation behavior, transfer payloads, assignment strategies, SLA handling, and queue visibility.",
        items: [
          {
            question: "Can FLOW hand off conversations to a human team?",
            answer:
              "Yes. FLOW can escalate conversations to human or team channels and preserve the context needed for assisted resolution.",
          },
          {
            question: "What information should be included in a handoff?",
            answer:
              "A good handoff should include customer identity, issue type, urgency, captured answers, conversation history, handoff reason, and the expected next action.",
          },
          {
            question: "Can handoffs be assigned to different teams?",
            answer:
              "Yes. Handoffs can be routed based on department, priority, language, location, skill, customer type, or workflow stage, depending on rollout configuration.",
          },
          {
            question: "What happens after handoff is triggered?",
            answer:
              "The handover node emits the transfer payload and ends the bot turn, so a human or external channel can take over. Do not design it like a normal branching node.",
          },
          {
            question: "Can managers track handoff performance?",
            answer:
              "Yes. FLOW includes conversation operations and queue surfaces that can show conversations, queue metrics, handover status, assignment, and session status depending on configuration.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Next Step",
        title: "Ready to build a context-rich human handoff workflow?",
        description:
          "Tell us how your team currently handles escalations, urgent cases, sales handover, support routing, payment disputes, document review, and unresolved conversations. We’ll map your handoff rules, queue ownership, SLA expectations, and the fastest FLOW workflow to launch first.",
        note: "Start with one handoff workflow. Prove value. Expand into queues, SLA visibility, agent console, and outcome tracking.",
        primary: { label: "Book Handoff Workflow Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
  },
  {
    slug: "billing",
    title:
      "Billing and Collections Automation for Payment Reminders, Failed Payments, Disputes, and Follow-Ups | Crescora FLOW",
    metadataTitle:
      "Billing and Collections Automation for Payment Reminders, Failed Payments, Disputes, and Follow-Ups | Crescora FLOW",
    metadataDescription:
      "Automate billing reminders, payment links, collections follow-ups, failed-payment recovery, receipt capture, overdue escalation, dispute handover, and payment status tracking with Crescora FLOW.",
    h1: "Automate billing reminders, collections follow-ups, payment status updates, and exception handover.",
    keywordTarget: "billing automation",
    headline:
      "Automate billing reminders, collections follow-ups, payment status updates, and exception handover.",
    description:
      "Crescora FLOW helps service teams manage billing conversations from payment request to final outcome. Send reminders, share payment links, collect references, confirm payment status, recover failed payments, escalate overdue cases, route disputes to billing teams, and track every collection workflow clearly.",
    outline: [
      "Hero",
      "billing workflow",
      "collections follow-up",
      "exceptions",
      "FAQs",
      "CTA",
    ],
    ctaLabel: "Book Billing Workflow Demo",
    publicPage: {
      eyebrow: "Billing Workflow",
      heroTitle:
        "Automate billing reminders, collections follow-ups, payment status updates, and exception handover.",
      heroDescription:
        "Crescora FLOW helps service teams manage billing conversations from payment request to final outcome. Send reminders, share payment links, collect references, confirm payment status, recover failed payments, escalate overdue cases, route disputes to billing teams, and track every collection workflow clearly.",
      heroPrimaryCta: { label: "Book Billing Workflow Demo", href: "/contact" },
      heroSecondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      heroSupportLine:
        "Built for billing follow-ups, invoice reminders, payment links, collection status, failed-payment recovery, overdue escalation, receipts, disputes, and human handover.",
      heroFlowSteps: [
        "Payment Due",
        "Billing Reminder",
        "Payment Link / Instructions",
        "Customer Pays / Raises Issue",
        "Verify Status",
        "Paid / Failed / Disputed / Overdue",
        "Handover",
        "Outcome Tracked",
      ],
      heroStatusChips: [
        "Requested",
        "Reminder Sent",
        "Link Shared",
        "Paid",
        "Failed",
        "Pending",
        "Overdue",
        "Disputed",
        "Escalated",
        "Closed",
      ],
      heroVisual: {
        eyebrow: "Billing Workflow",
        title:
          "Keep payment follow-up, exceptions, and team handover in one operational path.",
        description:
          "Route reminders, payment links, reference capture, verification, exception handling, and billing handover through a single workflow instead of scattered chats and manual chasing.",
        note:
          "Where provider support is configured, FLOW can verify payment status and route based on the result. If verification is not available, the workflow can still collect references, screenshots, receipts, and manual confirmation details.",
      },
      workflowDiagramSection: {
        eyebrow: "Workflow Diagram",
        title: "Example billing and collections journey",
        description:
          "Payment Due -> Billing Reminder -> Payment Link / Instructions -> Customer Pays / Raises Issue -> Verify Status -> Paid / Failed / Disputed / Overdue -> Handover -> Outcome Tracked",
        steps: [
          "Payment Due",
          "Billing Reminder",
          "Payment Link / Instructions",
          "Customer Pays / Raises Issue",
          "Verify Status",
          "Paid / Failed / Disputed / Overdue",
          "Handover",
          "Outcome Tracked",
        ],
        supportLine:
          "Customer reaches a billing step from a booking, invoice, service, admission, consultation, or subscription workflow. FLOW sends payment instructions, reminder copy, or a payment link. The customer pays, shares a reference, asks a billing question, or does not respond. FLOW verifies payment where supported or captures confirmation details, then tracks the final outcome as paid, pending, failed, disputed, escalated, or closed.",
      },
      overviewCards: [
        {
          eyebrow: "Billing Follow-Up",
          title: "Stop chasing customers manually for billing updates.",
          description:
            "FLOW can send billing reminders, share payment instructions, collect payment references, confirm successful payments, and update the customer with the next step without depending only on manual calls or scattered chat messages.",
        },
        {
          eyebrow: "Collections and Exceptions",
          title: "Give overdue, failed, or disputed payments a clear path.",
          description:
            "When a payment is failed, pending, overdue, disputed, or needs manual verification, FLOW can trigger retry guidance, send reminders, update status, or hand the case to billing or support with full customer and payment context.",
        },
      ],
      capabilitySection: {
        eyebrow: "What FLOW can automate",
        title: "What this billing workflow can automate",
        description:
          "Use billing workflow automation to manage reminders, payment status, reference capture, collections escalation, and exception handover in one place.",
        items: [
          {
            title: "Billing reminders",
            description:
              "Send reminders for pending invoices, consultation fees, service charges, subscriptions, booking tokens, or renewal payments.",
          },
          {
            title: "Payment link sharing",
            description:
              "Share payment links or payment instructions through supported channels based on the workflow stage.",
          },
          {
            title: "Payment confirmation",
            description:
              "Confirm successful payment, collect transaction reference, and send acknowledgement or next-step instructions.",
          },
          {
            title: "Failed-payment recovery",
            description:
              "Guide customers after failed or pending payments with retry instructions, alternate support, or billing handover.",
          },
          {
            title: "Overdue collections escalation",
            description:
              "Alert billing, finance, sales, support, admissions, or operations teams when a payment remains unresolved.",
          },
          {
            title: "Billing dispute routing",
            description:
              "Route refund requests, wrong amount concerns, receipt issues, duplicate payment claims, or invoice questions to the right team.",
          },
          {
            title: "Receipt and reference capture",
            description:
              "Collect transaction ID, screenshot, receipt number, invoice ID, order ID, payment reference, or customer confirmation.",
          },
          {
            title: "Outcome tracking",
            description:
              "Track billing status as requested, reminder sent, link shared, paid, failed, pending, overdue, disputed, escalated, or closed.",
          },
        ],
      },
      beforeAfterSection: {
        eyebrow: "Before vs After",
        title: "Before FLOW vs After FLOW",
        description:
          "Show buyers how collection follow-up changes once reminders, verification, and billing exceptions move into a structured workflow.",
        rows: [
          {
            before: "Billing teams manually chase customers",
            after: "FLOW can send structured reminders and next-step messages",
          },
          {
            before: "Payment status is scattered across chats and calls",
            after: "Billing status can be tracked inside the workflow",
          },
          {
            before: "Failed payments are handled inconsistently",
            after: "Failed-payment recovery can route to retry, support, or handover",
          },
          {
            before: "Customers send references in random chats",
            after: "FLOW can collect payment references and connect them to the case",
          },
          {
            before: "Overdue collections are not escalated clearly",
            after: "Overdue cases can trigger billing or finance team alerts",
          },
          {
            before: "Managers lack collection visibility",
            after: "Teams can see requested, pending, paid, failed, overdue, disputed, and escalated cases",
          },
        ],
      },
      launchSection: {
        eyebrow: "Use Cases",
        title: "Billing workflows service teams can launch first",
        description:
          "Start with one billing follow-up path, then expand into verification, disputes, and downstream collections visibility.",
        items: [
          {
            title: "Service payment follow-up",
            description:
              "For service businesses collecting payment after booking, visit, delivery, or completion.",
          },
          {
            title: "Consultation fee reminder",
            description:
              "For clinics, hospitals, consultants, coaching centers, and professional services.",
          },
          {
            title: "Invoice collection workflow",
            description:
              "For B2B services, agencies, vendors, finance teams, and recurring billing teams.",
          },
          {
            title: "Subscription renewal reminder",
            description:
              "For SaaS, memberships, maintenance plans, packages, and recurring services.",
          },
          {
            title: "Failed-payment recovery",
            description:
              "For customers whose payment failed, remains pending, or needs manual verification.",
          },
          {
            title: "Billing dispute handover",
            description:
              "For refund requests, incorrect amount questions, duplicate payment issues, and receipt problems.",
          },
        ],
      },
      journeySection: {
        eyebrow: "Journey Example",
        title: "How the billing workflow moves from request to final outcome",
        description:
          "The operating path is payment due to reminder to payment instructions to verification to paid, failed, disputed, overdue, or escalated outcome tracking.",
        steps: [
          "Customer reaches a billing step from a booking, invoice, service, admission, consultation, or subscription workflow.",
          "FLOW sends payment instructions, reminder copy, or a payment link.",
          "Customer pays, shares a reference, asks a billing question, or does not respond.",
          "FLOW verifies payment where supported or captures confirmation details.",
          "Successful payment triggers acknowledgement, record update, and next step.",
          "Failed or pending payment triggers retry guidance or follow-up.",
          "Overdue, disputed, or unclear cases move to billing or support handover.",
          "Final outcome is tracked as paid, pending, failed, disputed, escalated, or closed.",
        ],
      },
      trustSection: {
        eyebrow: "Operational Control",
        title: "Built for billing workflows with control",
        description:
          "Payment follow-up should not stop at a reminder. Billing workflows need verification, recovery paths, audit-ready records, and clear team handover.",
        items: [
          {
            title: "Payment verification path",
            description:
              "Where provider support is configured, FLOW can verify payment status and route based on the result.",
          },
          {
            title: "Pending payment handling",
            description:
              "Pending verification should stay in the payment step or guide the user to check again instead of branching too early.",
          },
          {
            title: "Failure recovery",
            description:
              "Failed payments should not directly end the journey. Add retry instructions, alternate payment option, support escalation, or billing handover.",
          },
          {
            title: "Audit-ready records",
            description:
              "Billing workflows should store transaction details, reference IDs, confirmation status, escalation reason, and downstream fulfilment state.",
          },
          {
            title: "Human handover",
            description:
              "Billing, collections, finance, sales, or support teams should receive customer details, amount, reference, payment status, and conversation history when escalation is needed.",
          },
        ],
        supportLine:
          "Payment provider setup, Razorpay and payment gateway verification, WhatsApp template approval, message costs, and settlement handling may depend on the selected provider and business verification status. FLOW has billing and Razorpay-related integration surfaces, but runtime availability depends on configuration.",
      },
      outcomesSection: {
        eyebrow: "Pilot Metrics",
        title: "What to measure during the billing workflow pilot",
        description:
          "Keep the rollout focused on reminder delivery, payment completion, recovery performance, overdue volume, disputes, and handover quality.",
        items: [
          {
            title: "Reminder delivery",
            description: "How many billing reminders are sent successfully.",
          },
          {
            title: "Payment completion",
            description: "How many payment requests move to paid status.",
          },
          {
            title: "Failed-payment recovery",
            description: "How many failed or pending payments are retried or escalated.",
          },
          {
            title: "Overdue volume",
            description: "How many cases remain unpaid after the expected payment window.",
          },
          {
            title: "Dispute volume",
            description:
              "How many billing conversations become refund, duplicate payment, wrong amount, or receipt issues.",
          },
          {
            title: "Handover quality",
            description:
              "How many billing cases reach the team with customer details, amount, reference, payment status, and conversation history.",
          },
          {
            title: "Collection visibility",
            description:
              "How many billing workflows are requested, pending, paid, failed, overdue, disputed, escalated, or closed.",
          },
        ],
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Common questions before launching billing workflow automation",
        description:
          "These answers cover the wider collections workflow, reminders, verification, failure handling, and billing team handover.",
        items: [
          {
            question: "Is this different from payment automation?",
            answer:
              "Yes. Payment automation focuses on the transaction step. Billing and collections automation covers the wider workflow: reminder, payment link, status update, receipt or reference capture, overdue escalation, dispute handling, and final outcome tracking.",
          },
          {
            question: "Can FLOW send billing reminders automatically?",
            answer:
              "Yes. FLOW can send reminders based on workflow stage, due date, payment status, invoice status, booking stage, subscription renewal, or manual trigger.",
          },
          {
            question: "Can FLOW verify payment status?",
            answer:
              "Where provider support is configured, FLOW can verify payment status. If automatic verification is not available, the workflow can collect references, screenshots, or manual confirmation details.",
          },
          {
            question: "What happens when payment fails or stays pending?",
            answer:
              "The workflow should offer retry guidance, alternate help, billing handover, or support escalation. It should not silently end after a failed payment.",
          },
          {
            question: "Can billing cases be handed over to finance or support?",
            answer:
              "Yes. FLOW supports handover and queue-oriented operating surfaces, so billing cases can be routed to the correct team with context.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Next Step",
        title: "Ready to automate your billing and collections workflow?",
        description:
          "Tell us how your team currently handles billing reminders, payment links, pending collections, failed payments, receipts, disputes, and overdue escalation. We'll map your process and show the fastest FLOW billing workflow to launch first.",
        note:
          "Start with one billing follow-up workflow. Prove value. Expand into verification, receipts, disputes, escalation, and collection visibility.",
        primary: { label: "Book Billing Workflow Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
  },
  {
    slug: "observability",
    title:
      "Conversation Observability Dashboard for Workflow Analytics, Handover Tracking, SLA Visibility, and Customer Outcomes | Crescora FLOW",
    metadataTitle:
      "Conversation Observability Dashboard for Workflow Analytics, Handover Tracking, SLA Visibility, and Customer Outcomes | Crescora FLOW",
    metadataDescription:
      "Track customer conversations, workflow stages, handovers, escalations, SLA risk, drop-offs, follow-ups, and business outcomes with Crescora FLOW conversation observability dashboards.",
    h1: "Track conversations, handovers, bottlenecks, and workflow outcomes in one dashboard.",
    keywordTarget: "conversation observability dashboard",
    headline:
      "Track conversations, handovers, bottlenecks, and workflow outcomes in one dashboard.",
    description:
      "Crescora FLOW helps teams see what is happening across customer conversations and automation workflows. Track open conversations, pending follow-ups, escalations, handovers, SLA risk, repeated questions, drop-offs, completed outcomes, and team-owned actions without chasing updates manually.",
    outline: [
      "Hero",
      "visibility",
      "analytics",
      "dashboards",
      "improvement",
      "FAQs",
      "CTA",
    ],
    ctaLabel: "Book Observability Demo",
    publicPage: {
      eyebrow: "Conversation Visibility Workflow",
      heroTitle:
        "Track conversations, handovers, bottlenecks, and workflow outcomes in one dashboard.",
      heroDescription:
        "Crescora FLOW helps teams see what is happening across customer conversations and automation workflows. Track open conversations, pending follow-ups, escalations, handovers, SLA risk, repeated questions, drop-offs, completed outcomes, and team-owned actions without chasing updates manually.",
      heroPrimaryCta: { label: "Book Observability Demo", href: "/contact" },
      heroSecondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      heroSupportLine:
        "Built for conversation tracking, queue visibility, handover monitoring, workflow analytics, SLA alerts, outcome reporting, and operational improvement.",
      heroFlowSteps: [
        "Customer Message",
        "Workflow Stage",
        "Status Update",
        "Event Tracking",
        "Queue / Handover",
        "Dashboard",
        "Improvement Action",
      ],
      heroStatusChips: [
        "New",
        "Active",
        "Waiting",
        "Assigned",
        "Escalated",
        "SLA Risk",
        "Resolved",
        "Dropped",
        "Completed",
      ],
      heroVisual: {
        eyebrow: "Dashboard Snapshot",
        title:
          "Bring queue, handover, drop-off, and outcome visibility into one operating view.",
        description:
          "Use one observability layer to see what is open, where workflows stall, which handovers are waiting, and which business outcomes are completing or leaking.",
        note:
          "Track workflow events without exposing unnecessary sensitive data.",
      },
      workflowDiagramSection: {
        eyebrow: "Workflow Diagram",
        title: "Example conversation observability journey",
        description:
          "Customer Message -> Workflow Stage -> Status Update -> Event Tracking -> Queue / Handover -> Dashboard -> Improvement Action",
        steps: [
          "Customer Message",
          "Workflow Stage",
          "Status Update",
          "Event Tracking",
          "Queue / Handover",
          "Dashboard",
          "Improvement Action",
        ],
        supportLine:
          "Customer starts a conversation from website chat, WhatsApp, Telegram, email, or SMS. FLOW routes the conversation into the right workflow, tracks key events, and shows where the journey stalls, escalates, or fails so managers can improve scripts, routing, reminders, handover rules, and workflow design.",
      },
      overviewCards: [
        {
          eyebrow: "Conversation Visibility",
          title: "Stop managing customer conversations blindly.",
          description:
            "FLOW can help managers see which conversations are new, active, waiting, qualified, assigned, escalated, resolved, dropped, or pending follow-up across supported channels.",
        },
        {
          eyebrow: "Workflow Analytics",
          title: "Find where leads, bookings, payments, and support cases get stuck.",
          description:
            "Track the workflow stages that matter: lead captured, appointment booked, payment failed, document pending, support escalated, AI fallback triggered, handover created, or case completed.",
        },
      ],
      capabilitySection: {
        eyebrow: "What FLOW can track",
        title: "What this observability workflow can track",
        description:
          "Use observability dashboards to see where conversations are, where workflows leak, and which outcomes still need action.",
        items: [
          {
            title: "Open conversations",
            description:
              "See active, waiting, assigned, unresolved, escalated, and completed conversations.",
          },
          {
            title: "Workflow stage visibility",
            description:
              "Track where each customer is in the journey: enquiry, qualification, booking, payment, document, support, handover, or completion.",
          },
          {
            title: "Handover monitoring",
            description:
              "See which conversations moved to human teams, why they were escalated, who owns them, and whether they are still pending.",
          },
          {
            title: "SLA and queue pressure",
            description:
              "Monitor delayed responses, overloaded queues, pending handovers, and cases nearing SLA risk.",
          },
          {
            title: "Follow-up leakage",
            description:
              "Find customers who did not complete payments, documents, bookings, callbacks, demos, site visits, or support steps.",
          },
          {
            title: "Repeated questions and issues",
            description:
              "Identify the questions, complaints, support topics, or workflow branches that repeat most often.",
          },
          {
            title: "Drop-off points",
            description:
              "See where customers abandon the workflow and which step needs improvement.",
          },
          {
            title: "Outcome analytics",
            description:
              "Track completed business outcomes such as leads created, appointments booked, payments completed, documents submitted, support cases resolved, and escalations closed.",
          },
        ],
      },
      beforeAfterSection: {
        eyebrow: "Before vs After",
        title: "Before FLOW vs After FLOW",
        description:
          "Show buyers how operational visibility changes once conversations, handovers, events, and outcomes are tracked in one place.",
        rows: [
          {
            before: "Managers rely on manual updates from teams",
            after: "Dashboards show open, pending, escalated, and completed conversations",
          },
          {
            before: "Leads and support cases get lost in chats",
            after: "Each conversation can be tied to a workflow status",
          },
          {
            before: "Follow-ups are hard to audit",
            after: "Reminders, handovers, and outcome events can be tracked",
          },
          {
            before: "Teams do not know where customers drop off",
            after: "Drop-off points can be reviewed and improved",
          },
          {
            before: "Escalations are invisible until customers complain",
            after: "Handover volume, queue pressure, and SLA risk become visible",
          },
          {
            before: "Performance is measured after the damage is done",
            after: "Managers can monitor workflow health while work is still active",
          },
        ],
      },
      launchSection: {
        eyebrow: "Dashboard Views",
        title: "Dashboard views buyers should see",
        description:
          "Start with the queue and funnel views the team will actually use, then expand into deeper analytics once event tracking is stable.",
        items: [
          {
            title: "Conversation queue",
            description:
              "New, active, waiting, assigned, escalated, and resolved conversations.",
          },
          {
            title: "Workflow funnel",
            description:
              "Started -> Captured -> Qualified -> Action Taken -> Handover / Completed.",
          },
          {
            title: "Handover board",
            description:
              "Handover reason, queue, owner, priority, SLA due time, and current status.",
          },
          {
            title: "Follow-up tracker",
            description:
              "Pending payments, missing documents, scheduled callbacks, appointment reminders, and unresolved cases.",
          },
          {
            title: "AI quality view",
            description:
              "AI fallback triggers, low-confidence answers, repeated unanswered questions, and human review volume.",
          },
          {
            title: "Outcome report",
            description:
              "Leads created, appointments booked, payments completed, support resolved, documents submitted, and escalations closed.",
          },
        ],
      },
      journeySection: {
        eyebrow: "Journey Example",
        title: "How teams move from raw conversation data to workflow improvement",
        description:
          "The operating path is message to workflow stage to event tracking to queue or handover visibility to dashboard action and operational improvement.",
        steps: [
          "Customer starts a conversation from website chat, WhatsApp, Telegram, email, or SMS.",
          "FLOW routes the conversation into the right workflow.",
          "Key events are tracked as the user moves through the journey.",
          "If the workflow stalls, escalates, or fails, the dashboard shows where the problem happened.",
          "Managers can see open conversations, handovers, repeated issues, and pending actions.",
          "Teams use the data to improve scripts, routing, reminders, handover rules, and workflow design.",
        ],
      },
      trustSection: {
        eyebrow: "Operational Control",
        title: "Built for workflow visibility with control",
        description:
          "Observability should help teams improve operations without creating duplicate noise or exposing sensitive customer data.",
        items: [
          {
            title: "Event tracking discipline",
            description:
              "Use stable event names like lead_created, appointment_booked, payment_failed, payment_success, handover_created, and ai_fallback_triggered.",
          },
          {
            title: "PII-safe analytics",
            description:
              "Do not send raw phone numbers, symptoms, document text, or sensitive free-text data into analytics dashboards.",
          },
          {
            title: "Dedupe and throttling",
            description:
              "Prevent duplicate event spam from retries, repeated submissions, or re-entry into the same workflow.",
          },
          {
            title: "Non-blocking analytics",
            description:
              "Analytics should help teams learn without breaking the customer journey when reporting fails.",
          },
          {
            title: "Manager visibility",
            description:
              "Make queues, delays, escalations, outcomes, and stuck workflows visible before they become customer complaints.",
          },
        ],
        supportLine:
          "Track workflow events without exposing unnecessary sensitive data.",
      },
      outcomesSection: {
        eyebrow: "Pilot Metrics",
        title: "What to measure during the observability pilot",
        description:
          "Keep the first dashboard rollout focused on conversation volume, response speed, completion, drop-off, handovers, queue aging, SLA risk, and business outcomes.",
        items: [
          {
            title: "Conversation volume",
            description:
              "How many conversations start by channel, source, industry, or workflow.",
          },
          {
            title: "First response speed",
            description:
              "How quickly customers receive a useful reply.",
          },
          {
            title: "Workflow completion rate",
            description:
              "How many customers complete the expected journey.",
          },
          {
            title: "Drop-off rate",
            description:
              "Where customers stop responding or fail to complete the next step.",
          },
          {
            title: "Handover rate",
            description:
              "How many conversations require human help and why.",
          },
          {
            title: "Queue aging",
            description:
              "How long conversations wait before assignment or resolution.",
          },
          {
            title: "SLA risk",
            description:
              "How many cases approach or miss response targets.",
          },
          {
            title: "Outcome quality",
            description:
              "How many leads, bookings, payments, documents, support cases, or escalations reach a completed state.",
          },
        ],
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Common questions before launching conversation observability",
        description:
          "These answers cover what to measure first, how to view unresolved work, how to track drop-offs, and how to keep analytics safe.",
        items: [
          {
            question: "What is conversation observability?",
            answer:
              "Conversation observability means seeing what is happening across customer chats, workflow stages, handovers, delays, drop-offs, and completed outcomes instead of relying on manual status updates.",
          },
          {
            question: "Can managers see unresolved conversations?",
            answer:
              "Yes. FLOW can support conversation queues, handover visibility, assignment status, workflow events, analytics, and operational dashboards depending on rollout configuration.",
          },
          {
            question: "What events should we track first?",
            answer:
              "Start with business-critical events such as lead_created, appointment_booked, payment_success, payment_failed, document_submitted, support_escalated, handover_created, and workflow_completed.",
          },
          {
            question: "Can observability show where customers drop off?",
            answer:
              "Yes. If workflow events are designed correctly, teams can see where customers abandon booking, payment, document submission, support resolution, or follow-up journeys.",
          },
          {
            question: "Can analytics include sensitive data?",
            answer:
              "Analytics should avoid raw PII and sensitive free-text data. Use masked, structured, business-safe properties wherever possible.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Next Step",
        title: "Ready to see where your customer workflows are getting stuck?",
        description:
          "Tell us how your team currently tracks conversations, handovers, follow-ups, escalations, payments, bookings, documents, and support cases. We'll map the dashboard views and workflow events your business should monitor first.",
        note:
          "Start with one dashboard view. Track the right events. Improve the workflow with real operational data.",
        primary: { label: "Book Observability Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
  },
];

export const templates: TemplateSeo[] = [
  {
    slug: "whatsapp-automation-template",
    title: "WhatsApp Automation Template | FLOW",
    intent: "BOFU",
    keywordTarget: "whatsapp workflow template",
    headline: "Launch WhatsApp automations without starting from scratch",
    description:
      "A template page for fast-launch WhatsApp automation use cases.",
    included: [
      "Screenshots",
      "triggers",
      "handoff logic",
      "integrations",
      "CTA",
    ],
    ctaLabel: "Book a demo",
  },
  {
    slug: "clinic-appointment-bot-template",
    title: "Clinic Appointment Bot Template | FLOW",
    intent: "BOFU",
    keywordTarget: "clinic appointment chatbot",
    headline: "A ready-made appointment workflow for clinics and hospitals",
    description: "Show booking, reminders, and handoff for healthcare teams.",
    included: [
      "What is included",
      "screenshots",
      "triggers",
      "handoff logic",
      "CTA",
    ],
    ctaLabel: "See the workflow",
  },
  {
    slug: "payment-reminder-template",
    title: "Payment Reminder Template | FLOW",
    intent: "BOFU",
    keywordTarget: "whatsapp payment reminder template",
    headline: "Recover dues with automated reminders and escalation",
    description:
      "A template focused on payment due, reminders, and exceptions.",
    included: [
      "Reminder sequence",
      "escalation logic",
      "message examples",
      "CTA",
    ],
    ctaLabel: "Get the template",
  },
  {
    slug: "document-collection-template",
    title: "Document Collection Template | FLOW",
    intent: "BOFU",
    keywordTarget: "document collection workflow",
    headline: "Collect documents over chat without manual chasing",
    description: "A template for KYC, intake, and missing-document workflows.",
    included: [
      "Triggers",
      "upload tracking",
      "reminders",
      "handoff logic",
      "CTA",
    ],
    ctaLabel: "Launch faster",
  },
  {
    slug: "customer-support-bot-template",
    title: "Customer Support Bot Template | FLOW",
    intent: "BOFU",
    keywordTarget: "support bot template",
    headline: "Resolve repetitive queries and escalate the rest cleanly",
    description: "A support-focused template for FAQ and triage workflows.",
    included: ["FAQ intents", "routing", "handoff", "analytics", "CTA"],
    ctaLabel: "Watch demo",
  },
  {
    slug: "rag-knowledge-assistant-template",
    title: "RAG Knowledge Assistant Template | FLOW",
    intent: "BOFU / MOFU",
    keywordTarget: "knowledge base chatbot template",
    headline: "Answer from your docs, then hand off when needed",
    description:
      "A template for retrieval-enabled support and knowledge workflows.",
    included: ["Retrieval flow", "answer guardrails", "handoff logic", "CTA"],
    ctaLabel: "Try the use case",
  },
  {
    slug: "real-estate-lead-qualification-template",
    title: "Real Estate Lead Qualification Template | FLOW",
    intent: "BOFU",
    keywordTarget: "real estate chatbot template",
    headline: "Qualify leads and book site visits automatically",
    description:
      "A template built for lead qualification and property visit booking.",
    included: [
      "Qualification questions",
      "site visit booking",
      "handoff",
      "CTA",
    ],
    ctaLabel: "Book a walkthrough",
  },
  {
    slug: "service-business-booking-template",
    title: "Service Business Booking Template | FLOW",
    intent: "BOFU",
    keywordTarget: "service booking bot",
    headline: "Turn enquiries into bookings with reminders built in",
    description:
      "A template for home services and other booking-driven businesses.",
    included: ["Booking triggers", "reminders", "handoff", "CTA"],
    ctaLabel: "See pricing",
  },
  {
    slug: "billing-and-collections-template",
    title: "Billing and Collections Template | FLOW",
    intent: "BOFU",
    keywordTarget: "collections workflow bot",
    headline: "Automate reminders, follow-up, and exception handling",
    description: "A template for billing, collections, and due-date workflows.",
    included: ["Reminder schedule", "exceptions", "handoff", "CTA"],
    ctaLabel: "Talk to sales",
  },
  {
    slug: "observability-dashboard-template",
    title: "Conversation Observability Dashboard Template | FLOW",
    intent: "BOFU / MOFU",
    keywordTarget: "conversation dashboard template",
    headline: "See resolution, leakage, escalation, and conversion in one view",
    description:
      "A template for conversation analytics and operational visibility.",
    included: ["Resolution rate", "leakage", "escalation", "conversion", "CTA"],
    ctaLabel: "See dashboard",
  },
  {
    slug: "hospital-appointment-booking-flow",
    title: "Hospital Appointment Booking Flow | FLOW",
    intent: "BOFU",
    keywordTarget: "hospital appointment booking flow",
    headline:
      "Publish a hospital-ready flow that handles appointments, reminders, and handoff.",
    description:
      "A hospital-specific launch template for the appointment journey.",
    included: [
      "Problem",
      "flow diagram",
      "steps",
      "nodes used",
      "business benefit",
      "CTA",
    ],
    ctaLabel: "Use this automation for your business",
  },
  {
    slug: "real-estate-lead-followup-flow",
    title: "Real Estate Lead Follow-Up Flow | FLOW",
    intent: "BOFU",
    keywordTarget: "real estate lead follow up flow",
    headline:
      "Show how property leads move from enquiry to visit booking and follow-up.",
    description:
      "A launch template for lead capture, qualification, and site-visit scheduling.",
    included: [
      "Problem",
      "flow diagram",
      "steps",
      "nodes used",
      "business benefit",
      "CTA",
    ],
    ctaLabel: "Use this automation for your business",
  },
  {
    slug: "customer-support-faq-flow",
    title: "Customer Support FAQ Flow | FLOW",
    intent: "BOFU",
    keywordTarget: "customer support faq flow",
    headline:
      "Explain support answers, grounded responses, and human escalation.",
    description: "A launch template for FAQ and support triage workflows.",
    included: [
      "Problem",
      "flow diagram",
      "steps",
      "nodes used",
      "business benefit",
      "CTA",
    ],
    ctaLabel: "Use this automation for your business",
  },
  {
    slug: "payment-reminder-flow",
    title: "Payment Reminder Flow | FLOW",
    intent: "BOFU",
    keywordTarget: "payment reminder flow",
    headline: "Show a clear reminder and escalation journey for collections.",
    description: "A launch template for payment follow-up and status updates.",
    included: [
      "Problem",
      "flow diagram",
      "steps",
      "nodes used",
      "business benefit",
      "CTA",
    ],
    ctaLabel: "Use this automation for your business",
  },
  {
    slug: "lab-report-notification-flow",
    title: "Lab Report Notification Flow | FLOW",
    intent: "BOFU",
    keywordTarget: "lab report notification flow",
    headline:
      "Show how healthcare teams can notify patients when reports are ready.",
    description:
      "A launch template for lab-report notifications and receipt confirmation.",
    included: [
      "Problem",
      "flow diagram",
      "steps",
      "nodes used",
      "business benefit",
      "CTA",
    ],
    ctaLabel: "Use this automation for your business",
  },
];

export const industriesSeo: IndustrySeo[] = [
  {
    slug: "hospitals",
    name: "Hospitals",
    title: "Hospital WhatsApp Automation and Patient Flows | FLOW",
    h1: "Automate patient communication, reminders, and document collection",
    keywordTarget: "hospital whatsapp bot",
    description:
      "Focus on appointments, reminders, documents, and safe handoff in a healthcare-specific page.",
    focus: "Healthcare front desk, reminders, and document collection.",
    proof: "Use compliance/process notes and proof blocks.",
    ctaLabel: "Request healthcare demo",
  },
  {
    slug: "clinics",
    name: "Clinics",
    title: "Clinic Appointment Automation and Follow-Up | FLOW",
    h1: "Automate clinic appointments and follow-up flows",
    keywordTarget: "clinic appointment automation",
    description:
      "Show how clinics can book appointments, send reminders, and hand off sensitive cases.",
    focus: "Appointment booking, reminders, and patient follow-up.",
    proof: "Use concise workflow blocks and local FAQ modules.",
    ctaLabel: "Request healthcare demo",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    title: "Real Estate Lead Automation and Site Visits | FLOW",
    h1: "Convert property enquiries into scheduled visits",
    keywordTarget: "real estate chatbot template",
    description:
      "Lead qualification, site-visit booking, and follow-up discipline are the main conversion points.",
    focus: "Lead capture, qualification, and visit scheduling.",
    proof: "Use local proof and state-by-state landing pages.",
    ctaLabel: "Request real estate demo",
  },
  {
    slug: "support-teams",
    name: "Support Teams",
    title: "Customer Support Automation for Teams | FLOW",
    h1: "Automate support triage, FAQ resolution, and escalations",
    keywordTarget: "support bot template",
    description:
      "Support teams should see FAQ resolution, context handoff, and observability in one place.",
    focus: "Ticket routing, FAQ resolution, and context-rich handoff.",
    proof: "Use observability screenshots and reply-quality controls.",
    ctaLabel: "Request support demo",
  },
  {
    slug: "service-businesses",
    name: "Service Businesses",
    title: "Service Business Booking and Collections | FLOW",
    h1: "Turn enquiries into bookings and follow-ups",
    keywordTarget: "service booking bot",
    description:
      "Show how service businesses can automate booking, reminders, billing, and collection follow-up.",
    focus: "Booking, reminders, billing, and collections.",
    proof: "Use service-business examples and practical ROI language.",
    ctaLabel: "See pricing",
  },
];

export const stateBySlug = new Map(
  indiaStates.map((state) => [state.slug, state] as const),
);
export const workflowBySlug = new Map(
  workflows.map((workflow) => [workflow.slug, workflow] as const),
);
export const templateBySlug = new Map(
  templates.map((template) => [template.slug, template] as const),
);
export const industryBySlug = new Map(
  industriesSeo.map((industry) => [industry.slug, industry] as const),
);

export const statePrimaryIndustrySlug: Record<string, string> = {
  maharashtra: "service-businesses",
  "uttar-pradesh": "hospitals",
  "tamil-nadu": "hospitals",
  "west-bengal": "hospitals",
  karnataka: "support-teams",
  "madhya-pradesh": "service-businesses",
  rajasthan: "service-businesses",
  gujarat: "service-businesses",
  bihar: "service-businesses",
  "andhra-pradesh": "clinics",
  telangana: "support-teams",
  odisha: "hospitals",
  "jammu-and-kashmir": "hospitals",
  uttarakhand: "service-businesses",
  "himachal-pradesh": "service-businesses",
  tripura: "service-businesses",
  goa: "service-businesses",
  puducherry: "clinics",
  chandigarh: "support-teams",
  manipur: "service-businesses",
  nagaland: "service-businesses",
  meghalaya: "service-businesses",
  mizoram: "service-businesses",
  "arunachal-pradesh": "service-businesses",
  sikkim: "service-businesses",
  "andaman-and-nicobar-islands": "service-businesses",
  ladakh: "service-businesses",
  "dadra-and-nagar-haveli-and-daman-and-diu": "service-businesses",
  lakshadweep: "service-businesses",
};

export function getStatePrimaryIndustrySlug(stateSlug: string) {
  return statePrimaryIndustrySlug[stateSlug] ?? "service-businesses";
}

export const seoStateRoutes = indiaStates.map(
  (state) => `/india/${state.slug}`,
);

export const seoWorkflowRoutes = indiaStates.flatMap((state) =>
  state.workflowSlugs.map(
    (workflowSlug) => `/india/${state.slug}/workflows/${workflowSlug}`,
  ),
);

export const seoIndustryRoutes = [
  ...industriesSeo.map((industry) => `/industries/${industry.slug}`),
  ...indiaStates.map(
    (state) =>
      `/india/${state.slug}/industries/${getStatePrimaryIndustrySlug(state.slug)}`,
  ),
];

export const seoTemplateRoutes = templates.map(
  (template) => `/templates/${template.slug}`,
);

export const seoHubRoutes = ["/india", "/workflows", "/templates"];

export const seoAllRoutes = [
  ...seoHubRoutes,
  ...seoStateRoutes,
  ...seoWorkflowRoutes,
  ...seoTemplateRoutes,
  ...seoIndustryRoutes,
].filter((route, index, routes) => routes.indexOf(route) === index);

export const seoOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteContent.site.name,
  url: "https://www.crescora.ai",
  description: siteContent.site.description,
};

export const seoSoftwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteContent.site.productFull,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: siteContent.site.description,
  url: "https://www.crescora.ai",
};
