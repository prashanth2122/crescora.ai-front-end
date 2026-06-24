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
      title: "Search Console, GA4, CRM, and Looker Studio should sit in one reporting layer.",
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
    stateFocus: "High-density commercial and service demand with strong WhatsApp-led buyer intent.",
    workflowSlugs: ["whatsapp-automation", "appointment-booking", "payments"],
    industryFocus: "Hospitals, clinics, and service businesses",
    localProof:
      "Use Maharashtra-specific examples, screenshots, and Marathi + English FAQs to avoid thin duplication.",
    localFaqNote: "Add Marathi + English FAQ modules once the English hub is live.",
    localSeeds: ["व्हाट्सऐप ऑटोमेशन महाराष्ट्र", "अपॉइंटमेंट बुकिंग महाराष्ट्र"],
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
    stateFocus: "Large business base with high commercial volume and Hindi-first demand.",
    workflowSlugs: ["whatsapp-automation", "appointment-booking", "document-collection"],
    industryFocus: "Healthcare, education, and service businesses",
    localProof: "Use city-specific examples and Hindi-first FAQ modules where search console supports it.",
    localFaqNote: "English first, then Hindi modules validated by query data.",
    localSeeds: ["व्हाट्सऐप ऑटोमेशन उत्तर प्रदेश", "अपॉइंटमेंट बुकिंग उत्तर प्रदेश"],
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
    stateFocus: "Strong intent for hospital, clinic, and service workflows with Tamil-language support potential.",
    workflowSlugs: ["appointment-booking", "customer-support", "document-collection"],
    industryFocus: "Hospitals, clinics, and factory/service support",
    localProof: "Add Tamil-language support examples, regional screenshots, and state-specific proof blocks.",
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
    stateFocus: "Healthcare and service-business demand with Bengali-first opportunity.",
    workflowSlugs: ["appointment-booking", "reminders", "customer-support"],
    industryFocus: "Hospitals, clinics, and service businesses",
    localProof: "Use local proof blocks and Bengali FAQ once the page is indexed.",
    localFaqNote: "State page should combine Bengali + English FAQs where it matters.",
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
    stateFocus: "Strong SaaS, service, and support-team demand with Kannada FAQ potential.",
    workflowSlugs: ["customer-support", "human-handoff", "reminders"],
    industryFocus: "Support teams and service businesses",
    localProof: "Use observability screenshots and Kannada FAQ modules to differentiate the page.",
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
    stateFocus: "Broad Hindi-first commercial demand and high utility for workflow pages.",
    workflowSlugs: ["whatsapp-automation", "payments", "document-collection"],
    industryFocus: "Service businesses and healthcare",
    localProof: "Use regional examples and Hindi-first supporting modules.",
    localFaqNote: "Local proof beats generic feature claims for this state.",
    localSeeds: ["व्हाट्सऐप ऑटोमेशन मध्य प्रदेश", "अपॉइंटमेंट बुकिंग मध्य प्रदेश"],
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
    stateFocus: "Hindi-first demand with strong service-business search intent.",
    workflowSlugs: ["appointment-booking", "payments", "reminders"],
    industryFocus: "Service businesses and healthcare",
    localProof: "Local proof and FAQs should anchor the page, not generic SaaS filler.",
    localFaqNote: "Keep the page English-first until GSC proves a local-language split.",
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
    stateFocus: "Business-friendly search intent with Gujarati and Hindi opportunities.",
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
    stateFocus: "Large Hindi-first demand with straightforward workflow intent.",
    workflowSlugs: ["whatsapp-automation", "appointment-booking", "customer-support"],
    industryFocus: "Healthcare and service businesses",
    localProof: "Use practical examples, not generic AI language.",
    localFaqNote: "Hindi modules can be added after query data proves the split.",
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
    stateFocus: "Telugu-first regional opportunity with strong appointment and support workflows.",
    workflowSlugs: ["appointment-booking", "document-collection", "human-handoff"],
    industryFocus: "Healthcare, clinics, and service businesses",
    localProof: "Use Telugu FAQ modules and state-specific screenshots.",
    localFaqNote: "Add Telugu + English local modules after English hub performance is clear.",
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
    localProof: "Include Telugu FAQ and proof blocks to increase state relevance.",
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
    stateFocus: "Odia-language opportunity with practical BOFU workflow demand.",
    workflowSlugs: ["appointment-booking", "reminders", "customer-support"],
    industryFocus: "Healthcare and service businesses",
    localProof: "State proof blocks and localized FAQs will differentiate the page.",
    localFaqNote: "Keep the page English-first and add Odia after demand validation.",
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
    stateFocus: "English-first regional hub with Hindi support after GSC validation.",
    workflowSlugs: ["whatsapp-automation", "appointment-booking"],
    industryFocus: "Healthcare and service businesses",
    localProof: "Keep the page compact and only add unique regional proof when available.",
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
    stateFocus: "Compact hub for hospitality, healthcare, and service workflow intent.",
    workflowSlugs: ["appointment-booking", "reminders"],
    industryFocus: "Healthcare and service businesses",
    localProof: "Use state-specific examples without making the page a duplicate of the India hub.",
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
    localProof: "Do not publish thin clone pages; keep the page compact and useful.",
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
    stateFocus: "Regional Bengali demand should be tested against Search Console data.",
    workflowSlugs: ["whatsapp-automation", "appointment-booking"],
    industryFocus: "Healthcare and service businesses",
    localProof: "Add Bengali FAQ modules and localized examples once pages gain traction.",
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
    localProof: "Use local business examples only when they are distinct from the India hub.",
    localFaqNote: "Test Konkani or Hindi only after GSC data proves the opportunity.",
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
    stateFocus: "Compact page focused on bookings, support, and document handling.",
    workflowSlugs: ["appointment-booking", "customer-support"],
    industryFocus: "Healthcare and service businesses",
    localProof: "Localized proof and Tamil FAQ modules should be added carefully.",
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
    localProof: "Add Punjabi and Hindi modules only if Search Console shows demand.",
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
    localProof: "Use local business context only if it is meaningfully distinct.",
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
    h1: "Launch WhatsApp automations without starting from scratch",
    keywordTarget: "whatsapp automation template",
    headline: "WhatsApp automation is the fastest BOFU entry point.",
    description:
      "Use the workflow page to capture WhatsApp automation intent with booking, reminders, support, payments, documents, and human handoff.",
    outline: ["Hero", "workflow diagram", "use cases", "integrations", "metrics", "FAQs", "CTA"],
    ctaLabel: "Book a demo",
  },
  {
    slug: "appointment-booking",
    title: "Appointment Booking Automation for WhatsApp and Web | FLOW",
    h1: "Automate appointment booking across chat, forms, and handoff",
    keywordTarget: "appointment booking software",
    headline: "Reduce no-shows and manual follow-up.",
    description:
      "Focus on availability checks, confirmation, reminder chains, rescheduling, and follow-up to convert more appointment demand.",
    outline: ["Hero", "use cases", "flow diagram", "integrations", "metrics", "FAQs", "CTA"],
    ctaLabel: "See the workflow",
  },
  {
    slug: "payments",
    title: "Payment Automation for Collections and Follow-Up | FLOW",
    h1: "Automate payment reminders and escalation paths",
    keywordTarget: "whatsapp payment automation",
    headline: "Recover dues with structured reminders.",
    description:
      "Build pages around payment due notifications, reminder sequences, status collection, and overdue-case escalation.",
    outline: ["Hero", "reminder model", "escalation rules", "integrations", "metrics", "FAQs", "CTA"],
    ctaLabel: "Talk to sales",
  },
  {
    slug: "reminders",
    title: "Reminder Automation for Follow-Up Workflows | FLOW",
    h1: "Automate reminders and follow-up workflows at scale",
    keywordTarget: "reminder automation software",
    headline: "Follow-up discipline should be automated, not remembered.",
    description:
      "This workflow page should focus on reminder chains, missed-action recovery, and handoff visibility.",
    outline: ["Hero", "reminder types", "workflow blocks", "metrics", "FAQs", "CTA"],
    ctaLabel: "Request a demo",
  },
  {
    slug: "document-collection",
    title: "Document Collection Automation for KYC and Intake | FLOW",
    h1: "Collect documents without manual chasing",
    keywordTarget: "document collection automation",
    headline: "Collect documents over chat without chasing them manually.",
    description:
      "Use the page to highlight document request flows, upload tracking, missing-document reminders, and escalation.",
    outline: ["Hero", "collection flow", "tracking", "security", "FAQs", "CTA"],
    ctaLabel: "Launch faster",
  },
  {
    slug: "customer-support",
    title: "Customer Support Automation for FAQ and Triage | FLOW",
    h1: "Handle repetitive support queries and route the rest",
    keywordTarget: "support bot template",
    headline: "Resolve repetitive queries and escalate the rest cleanly.",
    description:
      "Ideal for support teams that want FAQ resolution, ticket routing, context handoff, and status updates in one flow.",
    outline: ["Hero", "support flows", "handoff", "observability", "FAQs", "CTA"],
    ctaLabel: "Watch demo",
  },
  {
    slug: "rag-knowledge-assistant",
    title: "RAG Knowledge Assistant for Support Teams | FLOW",
    h1: "Answer from your docs, then hand off when needed",
    keywordTarget: "knowledge base chatbot template",
    headline: "Knowledge retrieval should still hand off when the task needs a person.",
    description:
      "Make the page explain retrieval, answer quality, escalation, and how the assistant complements the workflow layer.",
    outline: ["Hero", "retrieval", "handoff", "analytics", "FAQs", "CTA"],
    ctaLabel: "Try the use case",
  },
  {
    slug: "human-handoff",
    title: "Human Handoff Automation for Context-Rich Escalation | FLOW",
    h1: "Move conversations to humans with full history",
    keywordTarget: "human handoff automation",
    headline: "Handoff should be a planned workflow step.",
    description:
      "Position the page around escalation rules, context transfer, priority routing, and SLA visibility.",
    outline: ["Hero", "handoff rules", "context transfer", "SLA", "FAQs", "CTA"],
    ctaLabel: "Request a demo",
  },
  {
    slug: "billing",
    title: "Billing and Collections Automation for Service Teams | FLOW",
    h1: "Automate billing follow-up and collections workflows",
    keywordTarget: "billing automation template",
    headline: "Billing and collections need workflow support, not just reminders.",
    description:
      "Use the page to cover reminders, follow-up, exception handling, and outcome logging.",
    outline: ["Hero", "billing flows", "collections", "exceptions", "FAQs", "CTA"],
    ctaLabel: "See pricing",
  },
  {
    slug: "observability",
    title: "Conversation Observability Dashboard for Teams | FLOW",
    h1: "See resolution, leakage, escalation, and conversion in one view",
    keywordTarget: "conversation dashboard template",
    headline: "Observability is part of the product, not an afterthought.",
    description:
      "The page should explain analytics, leakage, escalation, conversion, and how teams use the dashboard to improve workflow performance.",
    outline: ["Hero", "metrics", "dashboards", "workflow quality", "FAQs", "CTA"],
    ctaLabel: "See dashboard",
  },
];

export const templates: TemplateSeo[] = [
  {
    slug: "whatsapp-automation-template",
    title: "WhatsApp Automation Template | FLOW",
    intent: "BOFU",
    keywordTarget: "whatsapp workflow template",
    headline: "Launch WhatsApp automations without starting from scratch",
    description: "A template page for fast-launch WhatsApp automation use cases.",
    included: ["Screenshots", "triggers", "handoff logic", "integrations", "CTA"],
    ctaLabel: "Book a demo",
  },
  {
    slug: "clinic-appointment-bot-template",
    title: "Clinic Appointment Bot Template | FLOW",
    intent: "BOFU",
    keywordTarget: "clinic appointment chatbot",
    headline: "A ready-made appointment workflow for clinics and hospitals",
    description: "Show booking, reminders, and handoff for healthcare teams.",
    included: ["What is included", "screenshots", "triggers", "handoff logic", "CTA"],
    ctaLabel: "See the workflow",
  },
  {
    slug: "payment-reminder-template",
    title: "Payment Reminder Template | FLOW",
    intent: "BOFU",
    keywordTarget: "whatsapp payment reminder template",
    headline: "Recover dues with automated reminders and escalation",
    description: "A template focused on payment due, reminders, and exceptions.",
    included: ["Reminder sequence", "escalation logic", "message examples", "CTA"],
    ctaLabel: "Get the template",
  },
  {
    slug: "document-collection-template",
    title: "Document Collection Template | FLOW",
    intent: "BOFU",
    keywordTarget: "document collection workflow",
    headline: "Collect documents over chat without manual chasing",
    description: "A template for KYC, intake, and missing-document workflows.",
    included: ["Triggers", "upload tracking", "reminders", "handoff logic", "CTA"],
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
    description: "A template for retrieval-enabled support and knowledge workflows.",
    included: ["Retrieval flow", "answer guardrails", "handoff logic", "CTA"],
    ctaLabel: "Try the use case",
  },
  {
    slug: "real-estate-lead-qualification-template",
    title: "Real Estate Lead Qualification Template | FLOW",
    intent: "BOFU",
    keywordTarget: "real estate chatbot template",
    headline: "Qualify leads and book site visits automatically",
    description: "A template built for lead qualification and property visit booking.",
    included: ["Qualification questions", "site visit booking", "handoff", "CTA"],
    ctaLabel: "Book a walkthrough",
  },
  {
    slug: "service-business-booking-template",
    title: "Service Business Booking Template | FLOW",
    intent: "BOFU",
    keywordTarget: "service booking bot",
    headline: "Turn enquiries into bookings with reminders built in",
    description: "A template for home services and other booking-driven businesses.",
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
    description: "A template for conversation analytics and operational visibility.",
    included: ["Resolution rate", "leakage", "escalation", "conversion", "CTA"],
    ctaLabel: "See dashboard",
  },
  {
    slug: "hospital-appointment-booking-flow",
    title: "Hospital Appointment Booking Flow | FLOW",
    intent: "BOFU",
    keywordTarget: "hospital appointment booking flow",
    headline: "Publish a hospital-ready flow that handles appointments, reminders, and handoff.",
    description: "A hospital-specific launch template for the appointment journey.",
    included: ["Problem", "flow diagram", "steps", "nodes used", "business benefit", "CTA"],
    ctaLabel: "Use this automation for your business",
  },
  {
    slug: "real-estate-lead-followup-flow",
    title: "Real Estate Lead Follow-Up Flow | FLOW",
    intent: "BOFU",
    keywordTarget: "real estate lead follow up flow",
    headline: "Show how property leads move from enquiry to visit booking and follow-up.",
    description: "A launch template for lead capture, qualification, and site-visit scheduling.",
    included: ["Problem", "flow diagram", "steps", "nodes used", "business benefit", "CTA"],
    ctaLabel: "Use this automation for your business",
  },
  {
    slug: "customer-support-faq-flow",
    title: "Customer Support FAQ Flow | FLOW",
    intent: "BOFU",
    keywordTarget: "customer support faq flow",
    headline: "Explain support answers, grounded responses, and human escalation.",
    description: "A launch template for FAQ and support triage workflows.",
    included: ["Problem", "flow diagram", "steps", "nodes used", "business benefit", "CTA"],
    ctaLabel: "Use this automation for your business",
  },
  {
    slug: "payment-reminder-flow",
    title: "Payment Reminder Flow | FLOW",
    intent: "BOFU",
    keywordTarget: "payment reminder flow",
    headline: "Show a clear reminder and escalation journey for collections.",
    description: "A launch template for payment follow-up and status updates.",
    included: ["Problem", "flow diagram", "steps", "nodes used", "business benefit", "CTA"],
    ctaLabel: "Use this automation for your business",
  },
  {
    slug: "lab-report-notification-flow",
    title: "Lab Report Notification Flow | FLOW",
    intent: "BOFU",
    keywordTarget: "lab report notification flow",
    headline: "Show how healthcare teams can notify patients when reports are ready.",
    description: "A launch template for lab-report notifications and receipt confirmation.",
    included: ["Problem", "flow diagram", "steps", "nodes used", "business benefit", "CTA"],
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

export const stateBySlug = new Map(indiaStates.map((state) => [state.slug, state] as const));
export const workflowBySlug = new Map(workflows.map((workflow) => [workflow.slug, workflow] as const));
export const templateBySlug = new Map(templates.map((template) => [template.slug, template] as const));
export const industryBySlug = new Map(industriesSeo.map((industry) => [industry.slug, industry] as const));

export const statePrimaryIndustrySlug: Record<string, string> = {
  "maharashtra": "service-businesses",
  "uttar-pradesh": "hospitals",
  "tamil-nadu": "hospitals",
  "west-bengal": "hospitals",
  "karnataka": "support-teams",
  "madhya-pradesh": "service-businesses",
  "rajasthan": "service-businesses",
  "gujarat": "service-businesses",
  "bihar": "service-businesses",
  "andhra-pradesh": "clinics",
  "telangana": "support-teams",
  "odisha": "hospitals",
  "jammu-and-kashmir": "hospitals",
  "uttarakhand": "service-businesses",
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

export const seoStateRoutes = indiaStates.map((state) => `/india/${state.slug}`);

export const seoWorkflowRoutes = workflows.flatMap((workflow) =>
  indiaStates.slice(0, 12).map((state) => `/india/${state.slug}/workflows/${workflow.slug}`),
);

export const seoIndustryRoutes = [
  ...industriesSeo.map((industry) => `/industries/${industry.slug}`),
  ...indiaStates.slice(0, 12).map((state) => `/india/${state.slug}/industries/${getStatePrimaryIndustrySlug(state.slug)}`),
];

export const seoTemplateRoutes = templates.map((template) => `/templates/${template.slug}`);

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
