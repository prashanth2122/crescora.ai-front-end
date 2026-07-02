import { stateSeoSeedBySlug, type StateSeoSeed } from "@/lib/state-seo-seeds";
import {
  getStateWorkflowSlugs,
  stateWorkflowSeoBySlug,
  type StateWorkflowSlug,
} from "@/lib/state-workflow-seo";

type CityArchetype = {
  key: "commercialHub" | "operationsCluster" | "serviceCluster" | "supportCluster" | "collectionsCluster";
  marketRole: string;
  localPainPoint: string;
  proofFocus: string;
  searchTheme: string;
  workflowPriorityLine: string;
  ctaLabel: string;
};

type CityProofMode = "curated" | "generated";

export type CitySeoSeed = {
  slug: string;
  name: string;
  stateSlug: string;
  stateName: string;
  titleStateName: string;
  cityNeighbors: string[];
  stateSeed: StateSeoSeed;
  featuredWorkflowSlugs: StateWorkflowSlug[];
  primaryIndustries: string[];
  marketRole: string;
  localPainPoint: string;
  proofLine: string;
  workflowPriorityLine: string;
  localSearchTerms: string[];
  ctaLabel: string;
  proofMode: CityProofMode;
  priorityProofIntro?: string;
  proofBlocks: Array<{
    title: string;
    description: string;
  }>;
};

const stateTitleNameBySlug: Record<string, string> = {
  "jammu-and-kashmir": "Jammu & Kashmir",
  "andaman-and-nicobar-islands": "Andaman & Nicobar",
  "dadra-and-nagar-haveli-and-daman-and-diu": "Dadra, Nagar Haveli, Daman & Diu",
};

const cityArchetypes: CityArchetype[] = [
  {
    key: "commercialHub",
    marketRole: "a high-volume commercial hub where response speed directly affects revenue",
    localPainPoint:
      "slow lead response, sales follow-up leakage, booking delays, and fragmented customer conversation visibility",
    proofFocus: "lead routing, booking speed, and front-line sales follow-up",
    searchTheme: "ai business automation",
    workflowPriorityLine: "lead capture, booking speed, and revenue follow-up",
    ctaLabel: "Book Free Demo",
  },
  {
    key: "operationsCluster",
    marketRole: "an operations-heavy city where service coordination and reminders affect conversion quality",
    localPainPoint:
      "manual assignment gaps, weak reminder discipline, callback delays, and inconsistent customer updates",
    proofFocus: "assignment visibility, reminder timing, and operational consistency",
    searchTheme: "operations automation",
    workflowPriorityLine: "assignment visibility, reminders, and operational handoff",
    ctaLabel: "Book Free Demo",
  },
  {
    key: "serviceCluster",
    marketRole: "a service-led city where enquiry handling and booking discipline shape customer outcomes",
    localPainPoint:
      "missed enquiries, manual booking coordination, follow-up leakage, and unclear next-step ownership",
    proofFocus: "enquiry capture, booking coordination, and customer updates",
    searchTheme: "service business automation",
    workflowPriorityLine: "enquiry capture, booking coordination, and post-enquiry follow-up",
    ctaLabel: "Book Free Demo",
  },
  {
    key: "supportCluster",
    marketRole: "a customer-support-heavy market where answer quality and escalation control matter daily",
    localPainPoint:
      "repetitive support volume, slow escalations, unresolved status questions, and weak queue visibility",
    proofFocus: "FAQ coverage, escalation discipline, and support visibility",
    searchTheme: "customer support automation",
    workflowPriorityLine: "FAQ resolution, escalation routing, and support visibility",
    ctaLabel: "Book Free Demo",
  },
  {
    key: "collectionsCluster",
    marketRole: "a follow-up-heavy city where reminders, collections, and document status need tighter control",
    localPainPoint:
      "payment reminder inconsistency, document chase delays, overdue follow-up gaps, and exception handling friction",
    proofFocus: "collections discipline, document status, and follow-up control",
    searchTheme: "payment and reminder automation",
    workflowPriorityLine: "collections follow-up, document completion, and exception handling",
    ctaLabel: "Book Free Demo",
  },
];

const priorityCityProofBySlug: Record<
  string,
  {
    intro: string;
    blocks: Array<{
      title: string;
      description: string;
    }>;
  }
> = {
  "maharashtra:mumbai": {
    intro:
      "Mumbai pages should prove that Crescora AI can handle high-intent inbound demand, fast sales routing, and follow-up control across a dense commercial market instead of reading like generic statewide automation copy.",
    blocks: [
      {
        title: "Lead speed matters more than generic chat coverage",
        description:
          "Rollouts in Mumbai usually need faster lead qualification, cleaner sales ownership, and tighter callback discipline because response delays directly affect revenue in high-volume commercial teams.",
      },
      {
        title: "Bookings and payments need the same workflow view",
        description:
          "Teams in Mumbai often need booking coordination, payment follow-up, and customer updates inside one operating layer so staff are not switching between inboxes, spreadsheets, and manual reminders.",
      },
      {
        title: "The city page should connect to the wider metro demand cluster",
        description:
          "A strong Mumbai page should still support nearby demand from Pune, Thane, and broader Maharashtra search behavior while staying clearly anchored in Mumbai buyer intent.",
      },
    ],
  },
  "maharashtra:pune": {
    intro:
      "Pune pages should show operational follow-up strength, not just broad automation language, because buyers here often care about workflow consistency across service, education, and healthcare teams.",
    blocks: [
      {
        title: "Reminder discipline is a practical buying signal",
        description:
          "Pune teams often need better reminder timing, callback ownership, and reschedule handling because manual follow-up gaps create avoidable conversion leakage.",
      },
      {
        title: "Assignment visibility must stay visible to staff",
        description:
          "Operational teams in Pune usually benefit when each enquiry, booking, or follow-up has a clear owner instead of being lost across shared inboxes and staff handoffs.",
      },
      {
        title: "The page should feel city-specific, not just Maharashtra with a name swap",
        description:
          "Proof for Pune should focus on city-level workflow control, language fit, and commercial use cases that are visibly different from Mumbai-led sales pressure.",
      },
    ],
  },
  "karnataka:bengaluru": {
    intro:
      "Bengaluru pages should lean into digital-first support, handoff quality, and lead routing because the buying context is usually more workflow-maturity-driven than generic chatbot demand.",
    blocks: [
      {
        title: "Support and escalation quality is part of the core story",
        description:
          "Bengaluru teams often need approved answers, cleaner escalation paths, and operational visibility because support quality and response discipline shape buyer trust.",
      },
      {
        title: "Lead routing should connect sales and support workflows",
        description:
          "The strongest Bengaluru rollouts usually connect inbound qualification, customer updates, and escalation ownership instead of treating sales and support as separate inbox problems.",
      },
      {
        title: "The city page should justify a more workflow-mature buyer",
        description:
          "Bengaluru copy should sound like a platform rollout page for structured operations, not a basic WhatsApp bot landing page with swapped location text.",
      },
    ],
  },
  "tamil-nadu:chennai": {
    intro:
      "Chennai pages should prove local relevance through healthcare, education, and intake-heavy workflow outcomes rather than broad statewide positioning alone.",
    blocks: [
      {
        title: "Intake-heavy workflows are a strong local entry point",
        description:
          "Chennai teams often need appointment intake, support routing, and document collection working together because manual coordination creates customer drop-off and staff load.",
      },
      {
        title: "Language coverage should stay tied to customer experience",
        description:
          "Tamil and English support matters most when the workflow still keeps routing, reminders, and escalation controlled rather than simply translating message text.",
      },
      {
        title: "Healthcare and education buyers need more than a chatbot pitch",
        description:
          "The city page should sell operational outcomes such as intake quality, reminder discipline, and handoff clarity for Chennai buyers, not generic AI automation language.",
      },
    ],
  },
  "telangana:hyderabad": {
    intro:
      "Hyderabad pages should show both revenue workflow control and support readiness because the city mixes digital-first growth teams with high-volume service operations.",
    blocks: [
      {
        title: "Lead leakage and sales follow-up need a local answer",
        description:
          "Hyderabad teams often need faster qualification, follow-up ownership, and payment visibility so buyer intent does not stall after the first conversation.",
      },
      {
        title: "Support and handoff quality affect rollout trust",
        description:
          "A strong Hyderabad rollout usually needs escalation rules, queue ownership, and context transfer so human handoff stays operationally clean.",
      },
      {
        title: "The city page should balance growth and execution",
        description:
          "Hyderabad copy should speak to both commercial conversion pressure and structured workflow control, which makes it different from simpler reminder-only city pages.",
      },
    ],
  },
  "west-bengal:kolkata": {
    intro:
      "Kolkata pages should focus on response discipline, diagnostics-style follow-up, and support visibility because the city has strong healthcare and service-oriented demand.",
    blocks: [
      {
        title: "Response quality needs to stay consistent under support volume",
        description:
          "Kolkata teams often need better FAQ coverage, appointment follow-up, and report or status communication because repetitive queries create avoidable support pressure.",
      },
      {
        title: "Healthcare-oriented use cases should stay explicit",
        description:
          "The city page should make space for diagnostics, appointments, and patient support workflows because those are more locally relevant than generic automation copy.",
      },
      {
        title: "Local proof should connect the city and the broader cluster",
        description:
          "Kolkata pages should stay locally anchored while still showing nearby demand across Howrah, Durgapur, and the wider West Bengal market.",
      },
    ],
  },
  "gujarat:ahmedabad": {
    intro:
      "Ahmedabad pages should prove local fit through sales follow-up, payment tracking, and document workflows because business buyers usually expect automation to improve execution, not just messaging.",
    blocks: [
      {
        title: "Sales follow-up and collections belong in the same story",
        description:
          "Ahmedabad teams often need lead qualification, collections follow-up, and document status inside one operating layer because those workflows frequently overlap in real execution.",
      },
      {
        title: "Document control matters for operational trust",
        description:
          "The strongest local use cases often include document requests, verification status, and exception handling rather than only front-end chatbot replies.",
      },
      {
        title: "The page should read as business-operations automation",
        description:
          "Ahmedabad buyers usually respond better to workflow visibility, finance discipline, and ownership clarity than to broad conversational AI messaging alone.",
      },
    ],
  },
  "delhi:new-delhi": {
    intro:
      "New Delhi pages should feel like a high-intent commercial and support-operations page with polished workflow control, not a broad location landing page.",
    blocks: [
      {
        title: "Premium enquiry handling needs cleaner ownership",
        description:
          "Teams in New Delhi often need faster callback discipline, better customer context, and stronger escalation rules because premium leads are more sensitive to response quality.",
      },
      {
        title: "Support and document workflows should stay visible",
        description:
          "A strong New Delhi rollout often combines support routing, appointment coordination, and document follow-up so staff can see the next action without manual chasing.",
      },
      {
        title: "The page should justify a polished automation buyer",
        description:
          "New Delhi copy should sound operationally mature and buyer-ready, with strong CTA intent and workflow clarity rather than repetitive statewide filler.",
      },
    ],
  },
  "uttar-pradesh:lucknow": {
    intro:
      "Lucknow pages should focus on enquiry volume, booking control, and payment discipline because local teams often operate under high manual follow-up pressure.",
    blocks: [
      {
        title: "High enquiry volume needs structured follow-up",
        description:
          "Lucknow teams often need better callback sequencing, admissions or service follow-up, and clearer ownership because manual volume quickly becomes operational drag.",
      },
      {
        title: "Booking and payment visibility should stay connected",
        description:
          "A strong Lucknow rollout usually needs appointments, reminders, and collections tracked inside the same workflow so staff are not chasing status across disconnected tools.",
      },
      {
        title: "The city page should stay practical and commercial",
        description:
          "Lucknow copy should emphasize operational recovery and customer follow-up outcomes rather than broad AI language with weak local buying relevance.",
      },
    ],
  },
  "rajasthan:jaipur": {
    intro:
      "Jaipur pages should show practical value for tourism, service, and booking-led businesses because the strongest local SEO angle is operational follow-up, not broad automation theory.",
    blocks: [
      {
        title: "Booking flow quality is the local conversion story",
        description:
          "Jaipur teams often need enquiry qualification, booking follow-up, reminder timing, and payment confirmation because manual booking paths create preventable leakage.",
      },
      {
        title: "Support and guest communication should stay structured",
        description:
          "A strong Jaipur rollout should keep customer updates, repeated questions, and escalations visible so service quality does not depend on chat memory.",
      },
      {
        title: "The page should speak to real commercial pressure",
        description:
          "Jaipur copy should feel close to local booking and follow-up realities, not like a generic service-business city page repeated across the country.",
      },
    ],
  },
  "kerala:kochi": {
    intro:
      "Kochi pages should show service coordination, appointment flow, and payment follow-up strength because customer communication often cuts across multiple operational teams.",
    blocks: [
      {
        title: "Service coordination needs cleaner workflow ownership",
        description:
          "Kochi teams often need enquiry capture, reminder timing, and status visibility to work together because customers expect faster updates than manual teams can reliably provide.",
      },
      {
        title: "Appointments and payments should move together",
        description:
          "The city page should show how Crescora AI can connect booking, confirmation, payment follow-up, and escalation rather than describing each step as a disconnected automation use case.",
      },
      {
        title: "The page should read as operationally grounded",
        description:
          "Kochi copy should stay rooted in real service workflow outcomes with strong local proof instead of inheriting generic statewide commercial messaging.",
      },
    ],
  },
  "chandigarh:chandigarh": {
    intro:
      "Chandigarh pages should show premium service workflow discipline because buyers here are likely to care about response quality, appointment polish, and document visibility together.",
    blocks: [
      {
        title: "Premium leads need faster, cleaner callback handling",
        description:
          "Chandigarh teams often need stronger enquiry ownership, scheduling clarity, and follow-up consistency because premium leads are less tolerant of manual gaps.",
      },
      {
        title: "Documents and appointments should stay in one path",
        description:
          "A strong local rollout should keep document collection, appointment coordination, and escalations visible inside one workflow instead of spreading them across inboxes.",
      },
      {
        title: "The page should feel more polished than generic local SEO",
        description:
          "Chandigarh copy should signal workflow maturity, premium service operations, and human handoff control rather than broad city-page filler text.",
      },
    ],
  },
  "andhra-pradesh:visakhapatnam": {
    intro:
      "Visakhapatnam pages should lean into intake flow, distribution response speed, and document-heavy follow-up because local buyers often need more operational control than generic chatbot messaging suggests.",
    blocks: [
      {
        title: "Booking intake should connect with downstream document work",
        description:
          "Visakhapatnam teams often need appointment capture, document status, and escalation rules working together because healthcare, education, and property workflows rarely stop at the first enquiry.",
      },
      {
        title: "Regional growth teams need cleaner ownership after the first reply",
        description:
          "A strong Visakhapatnam rollout usually needs qualification, assignment visibility, and callback discipline so leads are not lost between staff members or channels.",
      },
      {
        title: "The page should sound operational, not just location-swapped",
        description:
          "Visakhapatnam copy should sell workflow execution quality for a growing regional hub instead of repeating Andhra Pradesh messaging with a city name inserted.",
      },
    ],
  },
  "andhra-pradesh:vijayawada": {
    intro:
      "Vijayawada pages should focus on booking flow reliability, document follow-up, and escalation clarity because local teams often run on high enquiry volume with manual coordination pressure.",
    blocks: [
      {
        title: "Manual booking coordination is usually the first workflow gap",
        description:
          "Vijayawada teams often need cleaner slot capture, reminder timing, and reschedule handling because booking leakage tends to happen before service delivery even starts.",
      },
      {
        title: "Document and intake workflows should stay visible to staff",
        description:
          "A strong local rollout should make missing items, next actions, and review status obvious so customer follow-up does not depend on staff memory.",
      },
      {
        title: "The page should reflect a practical regional operations buyer",
        description:
          "Vijayawada copy should emphasize control, follow-up speed, and workflow ownership rather than broad AI positioning with weak local relevance.",
      },
    ],
  },
  "assam:guwahati": {
    intro:
      "Guwahati pages should show why WhatsApp-first response speed and appointment follow-up matter in a regional commercial center instead of reading like another generic northeast city page.",
    blocks: [
      {
        title: "Regional demand concentration increases response pressure",
        description:
          "Guwahati teams often handle enquiries from a wider catchment area, so faster qualification and better callback discipline matter more than simple autoresponder coverage.",
      },
      {
        title: "Support and booking paths should stay in one workflow",
        description:
          "A strong Guwahati rollout often needs FAQ handling, appointment capture, and escalation routing together so operations remain visible across service teams.",
      },
      {
        title: "The page should anchor itself as the strongest Assam market",
        description:
          "Guwahati copy should feel commercially denser and more execution-oriented than a long-tail state city page with lightly varied text.",
      },
    ],
  },
  "bihar:patna": {
    intro:
      "Patna pages should focus on admissions-style follow-up, payment discipline, and support load because local buyers often feel the cost of manual enquiry management very quickly.",
    blocks: [
      {
        title: "High enquiry volume needs structured callback sequencing",
        description:
          "Patna teams often need clearer follow-up stages, owner visibility, and reminder timing because leads and applicants can drop off when every callback is manual.",
      },
      {
        title: "Fees, documents, and bookings should stay connected",
        description:
          "A strong Patna rollout usually works best when appointments, document collection, and payment reminders live inside one workflow instead of separate chat threads.",
      },
      {
        title: "The page should feel grounded in operational recovery",
        description:
          "Patna copy should sell workflow discipline and staff efficiency for education, healthcare, and local service demand rather than generic chatbot language.",
      },
    ],
  },
  "chhattisgarh:raipur": {
    intro:
      "Raipur pages should prove value through enquiry handling, booking follow-up, and payment control because local operators typically need cleaner execution more than a broad conversational-AI story.",
    blocks: [
      {
        title: "Lead qualification should not stop at the first message",
        description:
          "Raipur teams often need stronger follow-up ownership, callback discipline, and next-step visibility because manual chats rarely give staff a reliable operating sequence.",
      },
      {
        title: "Booking and payment steps should stay visible together",
        description:
          "A strong Raipur rollout should connect appointment confirmation, reminder timing, and payment status so operations teams are not chasing customers from multiple tools.",
      },
      {
        title: "The page should read like business process automation",
        description:
          "Raipur buyers are more likely to respond to workflow execution, visibility, and conversion recovery than to generic AI assistant positioning alone.",
      },
    ],
  },
  "goa:panaji": {
    intro:
      "Panaji pages should emphasize booking quality, guest communication, and payment confirmation because hospitality-style workflows are a much stronger local proof angle than generic service automation.",
    blocks: [
      {
        title: "Guest conversations need cleaner booking progression",
        description:
          "Panaji teams often need enquiry capture, confirmation logic, and reminder timing because booking intent can cool quickly when replies stay manual.",
      },
      {
        title: "Payment confirmation should be part of the same journey",
        description:
          "A strong Panaji rollout usually needs booking updates, payment follow-up, and support routing working together so staff can resolve guest questions without switching systems.",
      },
      {
        title: "The page should feel hospitality-aware and local",
        description:
          "Panaji copy should sound like an operating page for bookings and guest support in Goa, not like a generic city SEO page with a tourism keyword layer.",
      },
    ],
  },
  "gujarat:surat": {
    intro:
      "Surat pages should focus on sales speed, collections discipline, and document control because local buyers often care about execution-heavy commercial workflows.",
    blocks: [
      {
        title: "Sales follow-up should move faster than manual chat cycles",
        description:
          "Surat teams often need lead qualification, callback ownership, and next-step tracking because commercial conversations lose value when follow-up timing slips.",
      },
      {
        title: "Collections and document status should stay inside one system",
        description:
          "A strong Surat rollout usually benefits from payment reminders, verification steps, and missing-document visibility so revenue operations stay coordinated.",
      },
      {
        title: "The page should sell commercial execution, not just messaging",
        description:
          "Surat copy should emphasize workflow discipline, finance visibility, and business throughput instead of broad chatbot claims with limited buyer specificity.",
      },
    ],
  },
  "haryana:gurugram": {
    intro:
      "Gurugram pages should sound like a workflow-maturity page for growth and support teams because local buyers are less likely to respond to beginner-level automation positioning.",
    blocks: [
      {
        title: "Lead routing should connect revenue and support operations",
        description:
          "Gurugram teams often need better qualification logic, assignment visibility, and escalation control because customer conversations cut across sales, operations, and support.",
      },
      {
        title: "Human handoff quality affects trust in the rollout",
        description:
          "A strong Gurugram rollout should show queue ownership, context transfer, and approved next-step handling rather than treating handoff as an afterthought.",
      },
      {
        title: "The page should justify a more mature buyer intent",
        description:
          "Gurugram copy should read like an operations platform page with clear business outcomes, not like generic WhatsApp automation copy repeated across cities.",
      },
    ],
  },
  "haryana:faridabad": {
    intro:
      "Faridabad pages should prove practical value through enquiry handling, appointment flow, and support discipline because operational consistency is the more credible local angle.",
    blocks: [
      {
        title: "Follow-up ownership matters more than broad automation claims",
        description:
          "Faridabad teams often need clearer callback sequencing, assignment visibility, and reminder discipline because manual follow-up gaps quickly become missed revenue.",
      },
      {
        title: "Support workflows should reduce operational back-and-forth",
        description:
          "A strong Faridabad rollout usually needs approved answers, escalation paths, and clean next-step visibility so staff are not improvising every repeated enquiry.",
      },
      {
        title: "The page should stay commercially practical",
        description:
          "Faridabad copy should emphasize workflow recovery and staff efficiency rather than trying to sound like a metro-wide brand campaign page.",
      },
    ],
  },
  "himachal-pradesh:shimla": {
    intro:
      "Shimla pages should lean into booking flow, seasonal enquiry handling, and customer updates because local demand patterns are much closer to hospitality and service coordination than generic automation copy.",
    blocks: [
      {
        title: "Seasonal booking pressure needs cleaner customer progression",
        description:
          "Shimla teams often need faster enquiry qualification, booking confirmation, and reminder logic because manual response delays can hurt conversion during peak demand windows.",
      },
      {
        title: "Support and payment questions should stay visible together",
        description:
          "A strong Shimla rollout should connect guest communication, payment status, and escalation handling instead of scattering those steps across manual chats.",
      },
      {
        title: "The page should reflect tourism-led workflow realities",
        description:
          "Shimla copy should stay close to booking operations, service quality, and customer updates rather than repeating broad state-level language.",
      },
    ],
  },
  "jharkhand:ranchi": {
    intro:
      "Ranchi pages should focus on response control, appointment follow-up, and support visibility because local business buyers often need cleaner execution before they need more channels.",
    blocks: [
      {
        title: "Missed callbacks create preventable conversion leakage",
        description:
          "Ranchi teams often need better lead routing, reminder timing, and owner visibility because manual follow-up sequences are usually inconsistent across staff.",
      },
      {
        title: "Booking and support paths should stay connected",
        description:
          "A strong Ranchi rollout usually works best when intake, appointment coordination, and support escalation are all visible inside one operating flow.",
      },
      {
        title: "The page should show workflow structure, not generic locality",
        description:
          "Ranchi copy should emphasize practical operational gains and customer handling discipline instead of using thin location-modified automation text.",
      },
    ],
  },
  "karnataka:mysuru": {
    intro:
      "Mysuru pages should highlight support quality, escalation control, and reminder discipline because local buyers often need cleaner service operations rather than a pure lead-gen story.",
    blocks: [
      {
        title: "Support quality should feel deliberate, not reactive",
        description:
          "Mysuru teams often benefit from approved FAQ paths, escalation rules, and clearer queue ownership because repetitive service questions consume staff time quickly.",
      },
      {
        title: "Reminders and handoff need the same operational view",
        description:
          "A strong Mysuru rollout should connect support follow-up, reminder timing, and human handoff so customer experience does not break when automation reaches its limit.",
      },
      {
        title: "The page should differ from Bengaluru's growth angle",
        description:
          "Mysuru copy should feel more service-operations-focused and locally grounded instead of inheriting Bengaluru-style workflow maturity language unchanged.",
      },
    ],
  },
  "kerala:thiruvananthapuram": {
    intro:
      "Thiruvananthapuram pages should show strong appointment control, support clarity, and payment follow-up because local service communication often spans multiple operational steps.",
    blocks: [
      {
        title: "Appointments should stay tightly connected to customer updates",
        description:
          "Thiruvananthapuram teams often need better confirmation logic, reminder timing, and status communication because manual coordination creates avoidable drop-off.",
      },
      {
        title: "Support and payment follow-up should not be separate systems",
        description:
          "A strong local rollout should let staff see support context, payment status, and next actions together rather than switching across different tools.",
      },
      {
        title: "The page should read as service-operations automation",
        description:
          "Thiruvananthapuram copy should emphasize workflow discipline, multilingual customer handling, and operational visibility over broad AI messaging.",
      },
    ],
  },
  "madhya-pradesh:indore": {
    intro:
      "Indore pages should prove value through lead flow speed, payment visibility, and document completion because local buyers often care about measurable operating discipline.",
    blocks: [
      {
        title: "Sales and follow-up speed need a more structured operating layer",
        description:
          "Indore teams often need cleaner qualification, reminder logic, and owner visibility because manual chat follow-up makes growth harder to control.",
      },
      {
        title: "Payments and documents belong in the same execution story",
        description:
          "A strong Indore rollout usually benefits from collections reminders, file status, and exception handling inside one workflow rather than disconnected tools.",
      },
      {
        title: "The page should feel commercially sharp and local",
        description:
          "Indore copy should sound closer to business process control and revenue protection than to generic state-level automation language.",
      },
    ],
  },
  "madhya-pradesh:bhopal": {
    intro:
      "Bhopal pages should focus on enquiry handling, admissions-style follow-up, and payment discipline because local operations often need cleaner coordination across service and education workflows.",
    blocks: [
      {
        title: "Manual follow-up becomes expensive under mixed enquiry volume",
        description:
          "Bhopal teams often need better callback ownership, booking visibility, and reminder timing because manual coordination creates staff load and missed opportunities.",
      },
      {
        title: "Documents and reminders should stay part of the same workflow",
        description:
          "A strong Bhopal rollout should connect intake, missing-file follow-up, and payment or booking reminders so every customer path has a visible next step.",
      },
      {
        title: "The page should stay practical, not generic",
        description:
          "Bhopal copy should emphasize operational control for education, healthcare, and service teams rather than relying on repetitive AI automation phrasing.",
      },
    ],
  },
  "maharashtra:nagpur": {
    intro:
      "Nagpur pages should show why workflow visibility, lead follow-up, and payment control matter in a growing operations market instead of sounding like a lighter version of Mumbai.",
    blocks: [
      {
        title: "Commercial follow-up needs discipline beyond the first response",
        description:
          "Nagpur teams often need clearer qualification, callback timing, and owner visibility because missed follow-up creates avoidable leakage across service and sales workflows.",
      },
      {
        title: "Payments and bookings should stay coordinated",
        description:
          "A strong Nagpur rollout usually works best when booking progress, payment reminders, and customer updates stay visible to the same operating team.",
      },
      {
        title: "The page should feel distinct from Pune and Mumbai",
        description:
          "Nagpur copy should emphasize practical execution, regional business growth, and workflow control rather than reusing metro-market pressure language unchanged.",
      },
    ],
  },
  "odisha:bhubaneswar": {
    intro:
      "Bhubaneswar pages should focus on appointment flow, reminder discipline, and support visibility because local buyers often need cleaner service execution rather than broad automation positioning.",
    blocks: [
      {
        title: "Appointment and reminder quality is the core local story",
        description:
          "Bhubaneswar teams often need better intake capture, confirmation rules, and follow-up timing because manual booking coordination creates customer drop-off.",
      },
      {
        title: "Support operations should reduce repeated customer effort",
        description:
          "A strong Bhubaneswar rollout usually needs approved answers, escalation routing, and visible next actions so staff can handle repeat questions without losing context.",
      },
      {
        title: "The page should anchor itself as Odisha's strongest city route",
        description:
          "Bhubaneswar copy should sound more commercially important and workflow-specific than generic state-derived city content.",
      },
    ],
  },
  "punjab:ludhiana": {
    intro:
      "Ludhiana pages should emphasize lead response, appointment handling, and support coordination because local buyers often need faster commercial execution rather than abstract AI messaging.",
    blocks: [
      {
        title: "Lead response speed should stay tied to staff ownership",
        description:
          "Ludhiana teams often need clearer qualification, callback visibility, and handoff discipline because manual chat follow-up does not scale reliably across busy teams.",
      },
      {
        title: "Bookings and support should stay in one workflow path",
        description:
          "A strong local rollout should connect appointment coordination, repeated question handling, and escalation routing so service quality does not depend on manual memory.",
      },
      {
        title: "The page should sound execution-led and commercial",
        description:
          "Ludhiana copy should sell workflow throughput and operational discipline for customer-facing teams, not just location-modified chatbot claims.",
      },
    ],
  },
  "tamil-nadu:coimbatore": {
    intro:
      "Coimbatore pages should show intake efficiency, support coverage, and document follow-up strength because local buyers often need structured service execution across healthcare and education workflows.",
    blocks: [
      {
        title: "Appointments and documents should move together",
        description:
          "Coimbatore teams often need booking capture, missing-file follow-up, and review visibility because intake-heavy operations break when every step is manual.",
      },
      {
        title: "Support quality should stay aligned with multilingual service",
        description:
          "A strong Coimbatore rollout should show how Tamil and English customer journeys still preserve escalation logic, reminder timing, and staff visibility.",
      },
      {
        title: "The page should feel different from Chennai",
        description:
          "Coimbatore copy should stay closer to structured service operations and regional execution quality rather than mirroring Chennai's broader metro-intake positioning.",
      },
    ],
  },
  "uttar-pradesh:kanpur": {
    intro:
      "Kanpur pages should focus on high enquiry handling, booking flow control, and document follow-up because local teams often struggle with manual coordination at scale.",
    blocks: [
      {
        title: "High-volume follow-up needs clearer sequencing",
        description:
          "Kanpur teams often need better callback ownership, reminder timing, and intake visibility because manual response volume can overwhelm staff quickly.",
      },
      {
        title: "Documents and appointments should stay in one operating path",
        description:
          "A strong Kanpur rollout usually works best when bookings, missing-file reminders, and support escalation all stay visible to one workflow system.",
      },
      {
        title: "The page should sound practical and recovery-oriented",
        description:
          "Kanpur copy should emphasize operational discipline, staff efficiency, and conversion recovery rather than broad AI business language with weak local focus.",
      },
    ],
  },
  "jharkhand:jamshedpur": {
    intro:
      "Jamshedpur pages should focus on operational follow-up, booking control, and support visibility because local teams usually need cleaner execution across service and industrial-support workflows.",
    blocks: [
      {
        title: "Response consistency matters more than broad channel coverage",
        description:
          "Jamshedpur teams often need clearer qualification, callback ownership, and reminder sequencing because manual follow-up turns customer operations into staff-dependent guesswork.",
      },
      {
        title: "Booking and support visibility should stay connected",
        description:
          "A strong Jamshedpur rollout should keep intake, appointment status, and support escalation visible inside one system so teams can act without rechecking multiple tools.",
      },
      {
        title: "The page should feel operationally grounded",
        description:
          "Jamshedpur copy should emphasize practical workflow control, customer handling discipline, and execution quality rather than generic locality-led automation text.",
      },
    ],
  },
  "karnataka:mangaluru": {
    intro:
      "Mangaluru pages should lean into support quality, escalation control, and reminder discipline because local demand is better served by service-operations proof than by a broad lead-gen pitch.",
    blocks: [
      {
        title: "Support coverage should stay clean under repeat enquiry volume",
        description:
          "Mangaluru teams often need approved answer paths, queue ownership, and better escalation timing because repetitive service questions create avoidable operational load.",
      },
      {
        title: "Reminders and handoff should share the same workflow view",
        description:
          "A strong Mangaluru rollout should connect follow-up timing, issue routing, and human handoff so customer experience stays consistent when automation should stop guessing.",
      },
      {
        title: "The page should sound more service-focused than Bengaluru",
        description:
          "Mangaluru copy should feel closer to operational support quality and customer follow-up than to Bengaluru's workflow-maturity and growth-team positioning.",
      },
    ],
  },
  "kerala:kozhikode": {
    intro:
      "Kozhikode pages should show appointment control, support clarity, and payment follow-up because local customer communication often spans multiple operational checkpoints.",
    blocks: [
      {
        title: "Appointments should stay tied to customer updates",
        description:
          "Kozhikode teams often need cleaner confirmation logic, reminder timing, and next-step visibility because manual booking coordination creates unnecessary drop-off.",
      },
      {
        title: "Support and payment follow-up should stay inside one system",
        description:
          "A strong Kozhikode rollout should let staff see support context, pending payment steps, and escalation status together rather than splitting them across tools.",
      },
      {
        title: "The page should stay operationally local",
        description:
          "Kozhikode copy should speak to workflow control, multilingual service handling, and execution visibility instead of repeating broad Kerala-wide messaging.",
      },
    ],
  },
  "maharashtra:thane": {
    intro:
      "Thane pages should prove local value through lead follow-up, booking control, and payment visibility because the city sits inside a high-pressure metro demand cluster without being interchangeable with Mumbai.",
    blocks: [
      {
        title: "Follow-up ownership needs to stay visible after first contact",
        description:
          "Thane teams often need clearer callback discipline, qualification stages, and reminder timing because metro-adjacent demand moves quickly when responses stay manual.",
      },
      {
        title: "Bookings and payments should stay coordinated for staff",
        description:
          "A strong Thane rollout should connect appointment flow, payment reminders, and customer updates so operations teams are not chasing status across separate tools.",
      },
      {
        title: "The page should feel distinct from Mumbai and Pune",
        description:
          "Thane copy should emphasize execution control for a dense local operating market rather than borrowing Mumbai's high-volume commercial language unchanged.",
      },
    ],
  },
  "maharashtra:pimpri-chinchwad": {
    intro:
      "Pimpri-Chinchwad pages should highlight follow-up control, booking discipline, and payment visibility because local teams often need structured operations without metro-level brand-heavy positioning.",
    blocks: [
      {
        title: "Manual follow-up slows conversion more than teams expect",
        description:
          "Pimpri-Chinchwad teams often need better qualification, callback visibility, and reminder timing because manual coordination introduces avoidable leakage across customer journeys.",
      },
      {
        title: "Payments and bookings should move through one operating path",
        description:
          "A strong Pimpri-Chinchwad rollout should keep booking status, payment reminders, and staff ownership visible inside the same workflow layer.",
      },
      {
        title: "The page should speak to practical execution quality",
        description:
          "Pimpri-Chinchwad copy should sound operational and conversion-focused rather than trying to mimic Mumbai or Pune without a local workflow angle.",
      },
    ],
  },
  "meghalaya:shillong": {
    intro:
      "Shillong pages should focus on booking flow, service follow-up, and support visibility because local buyers often care more about customer handling quality than about broad AI automation positioning.",
    blocks: [
      {
        title: "Booking progression should stay visible to the team",
        description:
          "Shillong teams often need better enquiry capture, reminder timing, and confirmation handling because manual responses can slow customer decisions quickly.",
      },
      {
        title: "Support and payment questions should stay connected",
        description:
          "A strong Shillong rollout should show how Crescora AI can keep repeated questions, payment steps, and escalations inside one operational system.",
      },
      {
        title: "The page should feel more specific than a generic tourism city page",
        description:
          "Shillong copy should stay grounded in workflow execution, local service operations, and customer update discipline rather than in lightly varied city SEO text.",
      },
    ],
  },
  "nagaland:dimapur": {
    intro:
      "Dimapur pages should show practical value through enquiry handling, support clarity, and payment follow-up because local businesses usually need cleaner operations before they need broader automation complexity.",
    blocks: [
      {
        title: "Response quality should stay structured under repeat enquiries",
        description:
          "Dimapur teams often need better callback ownership, FAQ handling, and next-step visibility because manual follow-up creates inconsistent customer outcomes.",
      },
      {
        title: "Support and payment workflows should not be isolated",
        description:
          "A strong Dimapur rollout should connect customer questions, reminder timing, and pending payment steps so staff can act from one operating view.",
      },
      {
        title: "The page should stay practical and workflow-led",
        description:
          "Dimapur copy should emphasize service reliability, operational control, and staff efficiency instead of generic automation messaging with shallow locality cues.",
      },
    ],
  },
  "odisha:cuttack": {
    intro:
      "Cuttack pages should focus on appointment flow, reminders, and support discipline because local buyers usually need better execution consistency rather than a broad automation narrative.",
    blocks: [
      {
        title: "Appointment and reminder timing is the core local workflow story",
        description:
          "Cuttack teams often need cleaner intake capture, confirmation rules, and scheduled follow-up because manual coordination creates customer drop-off and staff confusion.",
      },
      {
        title: "Support operations should reduce repeated status questions",
        description:
          "A strong Cuttack rollout should combine approved answers, escalation routing, and visible next actions so teams can handle repeat questions without losing context.",
      },
      {
        title: "The page should sound operationally distinct from Bhubaneswar",
        description:
          "Cuttack copy should stay locally grounded in workflow consistency and service discipline rather than echoing Bhubaneswar's stronger city-hub positioning.",
      },
    ],
  },
  "punjab:amritsar": {
    intro:
      "Amritsar pages should show lead response, appointment handling, and support coordination because local business teams often need tighter customer operations more than abstract AI messaging.",
    blocks: [
      {
        title: "Lead response needs cleaner ownership after the first message",
        description:
          "Amritsar teams often need stronger qualification, callback visibility, and follow-up discipline because manual chat handling leaves too much revenue exposed.",
      },
      {
        title: "Bookings and support should stay on the same workflow path",
        description:
          "A strong Amritsar rollout should connect appointment coordination, repeated question handling, and escalation routing so service quality is not staff-memory-dependent.",
      },
      {
        title: "The page should stay execution-led and local",
        description:
          "Amritsar copy should emphasize operational throughput, workflow clarity, and customer handling quality instead of thin location-swapped automation copy.",
      },
    ],
  },
  "rajasthan:jodhpur": {
    intro:
      "Jodhpur pages should emphasize booking flow, service follow-up, and payment confirmation because local commercial demand is more credibly addressed through operational execution than broad automation theory.",
    blocks: [
      {
        title: "Booking progression should stay visible from enquiry to confirmation",
        description:
          "Jodhpur teams often need better enquiry qualification, reminder timing, and payment confirmation because manual booking paths create preventable leakage.",
      },
      {
        title: "Support and guest communication should stay structured",
        description:
          "A strong Jodhpur rollout should keep repeated questions, booking updates, and escalations visible so customer experience does not depend on fragmented chats.",
      },
      {
        title: "The page should speak to local booking pressure",
        description:
          "Jodhpur copy should feel tied to real follow-up and service operations, not like a generic Rajasthan city page with the name swapped.",
      },
    ],
  },
  "rajasthan:kota": {
    intro:
      "Kota pages should focus on admissions-style follow-up, reminder discipline, and payment visibility because local buyers often feel the cost of manual enquiry handling very directly.",
    blocks: [
      {
        title: "High enquiry handling needs structured callback sequencing",
        description:
          "Kota teams often need clearer follow-up stages, owner visibility, and reminder timing because manual volume quickly turns into conversion drag.",
      },
      {
        title: "Bookings and payments should stay visible together",
        description:
          "A strong Kota rollout should connect appointment or counselling flow, fee reminders, and customer updates so teams are not working from disconnected tools.",
      },
      {
        title: "The page should sound practical and operational",
        description:
          "Kota copy should emphasize workflow control, staff efficiency, and recovery of missed follow-up rather than broad AI business messaging.",
      },
    ],
  },
  "tamil-nadu:madurai": {
    intro:
      "Madurai pages should highlight intake efficiency, support coverage, and document follow-up because local service and healthcare workflows benefit most from visible execution control.",
    blocks: [
      {
        title: "Appointments and documents should stay connected",
        description:
          "Madurai teams often need cleaner booking capture, missing-file reminders, and review visibility because intake-heavy workflows break when every step is manual.",
      },
      {
        title: "Support quality should stay aligned with multilingual service",
        description:
          "A strong Madurai rollout should show how Tamil and English customer journeys can still preserve escalation logic, reminder timing, and staff visibility.",
      },
      {
        title: "The page should feel different from Chennai and Coimbatore",
        description:
          "Madurai copy should stay closer to structured service execution and customer-handling discipline than to the broader metro-market positioning used elsewhere in Tamil Nadu.",
      },
    ],
  },
  "telangana:warangal": {
    intro:
      "Warangal pages should show why lead handling, payment follow-up, and document visibility matter in a growing regional market rather than sounding like a simplified Hyderabad page.",
    blocks: [
      {
        title: "Lead follow-up needs clearer ownership after qualification",
        description:
          "Warangal teams often need stronger callback discipline, reminder logic, and next-step visibility because manual sales and service follow-up becomes inconsistent quickly.",
      },
      {
        title: "Payments and document steps should stay visible together",
        description:
          "A strong Warangal rollout should connect collections follow-up, document status, and escalation rules so teams can see what needs action without cross-checking tools.",
      },
      {
        title: "The page should feel regionally grounded",
        description:
          "Warangal copy should emphasize execution control and operational recovery for a local market instead of borrowing Hyderabad's digital-first growth framing unchanged.",
      },
    ],
  },
  "uttar-pradesh:ghaziabad": {
    intro:
      "Ghaziabad pages should focus on high enquiry handling, booking visibility, and document follow-up because local teams often operate under steady manual coordination pressure.",
    blocks: [
      {
        title: "Follow-up sequencing should stay visible to the team",
        description:
          "Ghaziabad teams often need better callback ownership, reminder timing, and qualification control because manual response volume creates avoidable leakage.",
      },
      {
        title: "Bookings and documents should stay in one operating path",
        description:
          "A strong Ghaziabad rollout should connect appointment flow, missing-file reminders, and support escalation so every customer path has a clear next step.",
      },
      {
        title: "The page should sound practical rather than generic",
        description:
          "Ghaziabad copy should emphasize operational discipline, staff efficiency, and recovery of missed follow-up instead of broad AI language with weak local focus.",
      },
    ],
  },
  "uttarakhand:dehradun": {
    intro:
      "Dehradun pages should show why booking flow, reminder discipline, and support visibility matter because local education, healthcare, and service buyers often feel manual follow-up pain early.",
    blocks: [
      {
        title: "Booking progression should stay structured from the first enquiry",
        description:
          "Dehradun teams often need cleaner capture, confirmation handling, and reminder timing because manual booking coordination quickly creates drop-off.",
      },
      {
        title: "Support and payment steps should stay visible together",
        description:
          "A strong Dehradun rollout should connect repeated questions, payment reminders, and escalations so staff have one clear operating sequence instead of scattered follow-up.",
      },
      {
        title: "The page should stay anchored in local service operations",
        description:
          "Dehradun copy should sound tied to practical workflow discipline and customer update quality rather than broad statewide automation language.",
      },
    ],
  },
  "uttarakhand:haridwar": {
    intro:
      "Haridwar pages should emphasize booking control, customer updates, and payment follow-up because local buyers often need cleaner service and hospitality-style coordination than generic automation promises.",
    blocks: [
      {
        title: "Booking quality should stay visible from enquiry to confirmation",
        description:
          "Haridwar teams often need better qualification, reminder timing, and confirmation handling because manual response gaps weaken conversion and service quality.",
      },
      {
        title: "Payment and support questions should stay inside one workflow",
        description:
          "A strong Haridwar rollout should connect payment status, repeated questions, and escalations so staff can move customers forward without tool-switching.",
      },
      {
        title: "The page should feel closer to local service demand than generic state copy",
        description:
          "Haridwar copy should stay grounded in workflow execution, follow-up discipline, and customer handling quality instead of using broad regional filler.",
      },
    ],
  },
  "west-bengal:howrah": {
    intro:
      "Howrah pages should focus on support consistency, appointment follow-up, and status visibility because local demand is better served by service-operations proof than generic automation language.",
    blocks: [
      {
        title: "Support volume needs approved answers and clearer routing",
        description:
          "Howrah teams often need better FAQ coverage, callback discipline, and escalation timing because repetitive questions quickly create operational pressure.",
      },
      {
        title: "Appointments and status updates should stay connected",
        description:
          "A strong Howrah rollout should keep booking coordination, status communication, and support follow-up visible inside one workflow rather than fragmented chats.",
      },
      {
        title: "The page should stay distinct from Kolkata",
        description:
          "Howrah copy should emphasize workflow reliability and service handling quality without simply inheriting Kolkata's stronger city-hub positioning.",
      },
    ],
  },
  "west-bengal:siliguri": {
    intro:
      "Siliguri pages should show why appointment flow, support visibility, and reminder discipline matter in a regional service market instead of reading like a generic state-derived city page.",
    blocks: [
      {
        title: "Booking and reminder timing should stay operationally visible",
        description:
          "Siliguri teams often need cleaner intake capture, confirmation handling, and follow-up timing because manual coordination slows conversion and customer updates.",
      },
      {
        title: "Support and status communication should stay in one system",
        description:
          "A strong Siliguri rollout should connect repeated questions, appointment updates, and escalations so staff do not lose context across scattered tools.",
      },
      {
        title: "The page should sound regionally grounded",
        description:
          "Siliguri copy should emphasize local workflow control and service reliability rather than echoing Kolkata's healthcare-heavy city positioning.",
      },
    ],
  },
  "andaman-and-nicobar-islands:port-blair": {
    intro:
      "Port Blair pages should focus on booking progression, guest communication, and payment confirmation because tourism-led workflows are a far stronger local proof angle than generic service automation.",
    blocks: [
      {
        title: "Booking progression should stay visible from enquiry to confirmation",
        description:
          "Port Blair teams often need cleaner capture, confirmation logic, and reminder timing because travel and stay enquiries lose momentum quickly when replies stay manual.",
      },
      {
        title: "Support and payment follow-up should stay inside one journey",
        description:
          "A strong Port Blair rollout should connect customer questions, payment confirmation, and escalation routing so teams can manage guest communication from one workflow layer.",
      },
      {
        title: "The page should feel tourism-aware and locally anchored",
        description:
          "Port Blair copy should sound like an operating page for bookings and guest support in Andaman, not like a generic long-tail city SEO page.",
      },
    ],
  },
  "dadra-and-nagar-haveli-and-daman-and-diu:silvassa": {
    intro:
      "Silvassa pages should show why enquiry routing, document visibility, and payment follow-up matter because local business demand is better served by execution-focused workflow proof than generic automation copy.",
    blocks: [
      {
        title: "Lead routing should stay visible after the first response",
        description:
          "Silvassa teams often need better qualification, owner visibility, and reminder discipline because manual follow-up creates operational delays and missed opportunities.",
      },
      {
        title: "Documents and payments should stay on one operating path",
        description:
          "A strong Silvassa rollout should connect document requests, payment reminders, and exception handling so teams can keep customer progress visible without spreadsheet chasing.",
      },
      {
        title: "The page should read as practical business-process automation",
        description:
          "Silvassa copy should emphasize workflow discipline, operational clarity, and execution speed rather than broad conversational-AI phrasing.",
      },
    ],
  },
  "dadra-and-nagar-haveli-and-daman-and-diu:daman": {
    intro:
      "Daman pages should highlight enquiry handling, booking flow, and payment visibility because local customer-facing operations benefit more from structured execution than from generic city-SEO automation text.",
    blocks: [
      {
        title: "Follow-up ownership should stay clear after every enquiry",
        description:
          "Daman teams often need cleaner callback discipline, reminder timing, and qualification logic because manual coordination creates preventable leakage.",
      },
      {
        title: "Bookings and payments should stay connected in one workflow",
        description:
          "A strong Daman rollout should keep booking updates, payment reminders, and escalations visible so staff can move customers forward without switching systems.",
      },
      {
        title: "The page should feel locally operational, not generic",
        description:
          "Daman copy should emphasize workflow execution, staff efficiency, and customer-handling quality instead of broad automation claims with a location swap.",
      },
    ],
  },
  "jammu-and-kashmir:srinagar": {
    intro:
      "Srinagar pages should focus on booking flow, seasonal enquiry handling, and support visibility because tourism and service demand make customer progression more important than generic chatbot positioning.",
    blocks: [
      {
        title: "Seasonal enquiry pressure needs cleaner conversion handling",
        description:
          "Srinagar teams often need faster qualification, booking confirmation, and reminder timing because manual response delays can hurt conversion during peak periods.",
      },
      {
        title: "Support and payment questions should stay visible together",
        description:
          "A strong Srinagar rollout should connect guest communication, payment status, and escalation handling instead of scattering those steps across manual chats.",
      },
      {
        title: "The page should feel tourism-aware and local",
        description:
          "Srinagar copy should stay close to booking operations, customer updates, and service quality rather than repeating broad Jammu and Kashmir language.",
      },
    ],
  },
  "jammu-and-kashmir:jammu": {
    intro:
      "Jammu pages should show why enquiry handling, appointment flow, and support discipline matter because local teams often need cleaner operations before they need broader automation complexity.",
    blocks: [
      {
        title: "Manual follow-up weakens response consistency quickly",
        description:
          "Jammu teams often need better callback ownership, booking visibility, and reminder timing because manual coordination turns customer journeys into staff-dependent processes.",
      },
      {
        title: "Support and payment steps should stay visible in one system",
        description:
          "A strong Jammu rollout should connect repeated questions, payment follow-up, and escalations so staff can act on the next step without checking scattered tools.",
      },
      {
        title: "The page should feel operationally grounded",
        description:
          "Jammu copy should emphasize service reliability, workflow control, and customer-handling quality rather than thin location-modified automation language.",
      },
    ],
  },
  "ladakh:leh": {
    intro:
      "Leh pages should emphasize booking progression, payment confirmation, and customer updates because travel-led workflows are the most credible local proof angle for this market.",
    blocks: [
      {
        title: "Booking flow should stay visible from enquiry to confirmation",
        description:
          "Leh teams often need cleaner capture, reminder timing, and confirmation handling because seasonal travel enquiries lose value quickly when replies stay manual.",
      },
      {
        title: "Support and payment follow-up should stay inside one journey",
        description:
          "A strong Leh rollout should connect guest questions, payment confirmation, and escalation routing so teams can manage customer communication from one workflow layer.",
      },
      {
        title: "The page should sound like a real travel-operations page",
        description:
          "Leh copy should feel tied to bookings, guest support, and follow-up discipline rather than like a generic long-tail city SEO page.",
      },
    ],
  },
  "puducherry:puducherry": {
    intro:
      "Puducherry pages should focus on booking flow, appointment handling, and support visibility because local buyers often need cleaner hospitality and service coordination than generic automation promises.",
    blocks: [
      {
        title: "Booking and appointment progression should stay visible",
        description:
          "Puducherry teams often need better enquiry capture, reminder timing, and confirmation handling because manual coordination weakens conversion and customer confidence.",
      },
      {
        title: "Support and payment questions should stay inside one system",
        description:
          "A strong Puducherry rollout should connect repeated questions, payment follow-up, and escalation handling so staff can act from one workflow view.",
      },
      {
        title: "The page should feel local and service-aware",
        description:
          "Puducherry copy should stay grounded in workflow execution, multilingual customer handling, and follow-up quality rather than broad location-swapped messaging.",
      },
    ],
  },
};

export const cityNamesByStateSlug: Record<string, string[]> = {
  "andhra-pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
  "arunachal-pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Aalo", "Ziro"],
  assam: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon"],
  bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Bihar Sharif"],
  chhattisgarh: ["Raipur", "Bhilai Nagar", "Korba", "Bilaspur", "Durg"],
  goa: ["Mormugao", "Margao", "Mapusa", "Panaji", "Curchorem-Cacora"],
  gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
  haryana: ["Faridabad", "Gurugram", "Rohtak", "Hisar", "Panipat"],
  "himachal-pradesh": ["Shimla", "Dharamshala", "Solan", "Mandi", "Palampur"],
  jharkhand: ["Dhanbad", "Ranchi", "Jamshedpur", "Bokaro Steel City", "Mango"],
  karnataka: ["Bengaluru", "Hubballi-Dharwad", "Mysuru", "Kalaburagi", "Mangaluru"],
  kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur"],
  "madhya-pradesh": ["Indore", "Bhopal", "Gwalior", "Jabalpur", "Ujjain"],
  maharashtra: ["Mumbai", "Pune", "Nagpur", "Thane", "Pimpri-Chinchwad"],
  manipur: ["Imphal", "Thoubal", "Kakching", "Lilong", "Mayang Imphal"],
  meghalaya: ["Shillong", "Tura", "Mawlai", "Nongthymmai", "Jowai"],
  mizoram: ["Aizawl", "Lunglei", "Champhai", "Kolasib", "Lawngtlai"],
  nagaland: ["Dimapur", "Kohima", "Tuensang", "Mokokchung", "Wokha"],
  odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Sambalpur"],
  punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
  rajasthan: ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer"],
  sikkim: ["Gangtok", "Namchi", "Rangpo", "Jorethang", "Singtam"],
  "tamil-nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
  telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam"],
  tripura: ["Agartala", "Dharmanagar", "Udaipur", "Kailashahar", "Bishalgarh"],
  "uttar-pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Meerut"],
  uttarakhand: ["Dehradun", "Haridwar", "Haldwani-Kathgodam", "Rudrapur", "Kashipur"],
  "west-bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
  "andaman-and-nicobar-islands": ["Port Blair", "Garacharma", "Prothrapur", "Bambooflat", "Hut Bay"],
  chandigarh: ["Chandigarh", "Mani Majra", "Daria", "Mauli Jagran", "Behlana"],
  "dadra-and-nagar-haveli-and-daman-and-diu": ["Silvassa", "Daman", "Diu", "Naroli", "Dadra"],
  delhi: ["Delhi", "New Delhi", "Nangloi", "Sultan Pur Majra", "Deoli"],
  "jammu-and-kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Sopore"],
  ladakh: ["Leh", "Kargil", "Choglamsar", "Spituk", "Diskit"],
  lakshadweep: ["Kavaratti", "Andrott", "Minicoy", "Amini", "Agatti"],
  puducherry: ["Puducherry", "Oulgaret", "Karaikal", "Yanam", "Mahe"],
};

function slugifyCity(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function pickRotatedItems<T>(items: T[], startIndex: number, count: number) {
  if (items.length === 0 || count <= 0) {
    return [] as T[];
  }

  const result: T[] = [];

  for (let offset = 0; offset < items.length && result.length < count; offset += 1) {
    result.push(items[(startIndex + offset) % items.length]!);
  }

  return result;
}

function toSearchPhrase(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildCityProofLine(city: string, stateName: string, cityNeighbors: string[], archetype: CityArchetype) {
  const nearbyCoverage = cityNeighbors.slice(0, 2).join(" and ");

  if (nearbyCoverage.length === 0) {
    return `${city} teams usually need better ${archetype.proofFocus} while keeping rollout quality consistent across the wider ${stateName} market.`;
  }

  return `${city} teams usually need better ${archetype.proofFocus} while staying operationally consistent across ${nearbyCoverage} and the wider ${stateName} market.`;
}

function buildCitySearchTerms(
  city: string,
  featuredWorkflowSlugs: StateWorkflowSlug[],
  archetype: CityArchetype,
) {
  return [
    ...new Set([
      ...featuredWorkflowSlugs.map(
        (workflowSlug) => `${toSearchPhrase(stateWorkflowSeoBySlug[workflowSlug].label)} ${city.toLowerCase()}`,
      ),
      `${archetype.searchTheme} ${city.toLowerCase()}`,
    ]),
  ].slice(0, 4);
}

function formatInlineList(items: string[]) {
  if (items.length <= 1) {
    return items[0] ?? "";
  }

  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }

  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function buildWorkflowNounList(featuredWorkflowSlugs: StateWorkflowSlug[]) {
  return featuredWorkflowSlugs
    .slice(0, 2)
    .map((workflowSlug) => stateWorkflowSeoBySlug[workflowSlug].titleNoun);
}

function buildUserFacingProofIntro({
  city,
  stateSeed,
  primaryIndustries,
  featuredWorkflowSlugs,
}: {
  city: string;
  stateSeed: StateSeoSeed;
  primaryIndustries: string[];
  featuredWorkflowSlugs: StateWorkflowSlug[];
}) {
  const workflowLine = formatInlineList(buildWorkflowNounList(featuredWorkflowSlugs));
  const industryLine = formatInlineList(primaryIndustries.slice(0, 2));

  return `Teams in ${city} usually need stronger ${workflowLine} for ${industryLine}. In ${stateSeed.name}, ${stateSeed.commercialAngle} makes local workflow control more valuable than generic automation coverage.`;
}

function buildUserFacingLocalityBlock({
  city,
  stateSeed,
  cityNeighbors,
  featuredWorkflowSlugs,
}: {
  city: string;
  stateSeed: StateSeoSeed;
  cityNeighbors: string[];
  featuredWorkflowSlugs: StateWorkflowSlug[];
}) {
  const workflowLine = formatInlineList(buildWorkflowNounList(featuredWorkflowSlugs));
  const languageLine = formatInlineList(stateSeed.languages);
  const nearbyDemandLine = formatInlineList(cityNeighbors.slice(0, 2));

  return {
    title: "City-specific workflow priorities matter",
    description:
      nearbyDemandLine.length > 0
        ? `In ${city}, rollout priorities usually center on ${workflowLine}, ${languageLine} customer journeys, and nearby demand across ${nearbyDemandLine}, not just broad statewide automation messaging.`
        : `In ${city}, rollout priorities usually center on ${workflowLine} and ${languageLine} customer journeys, not just broad statewide automation messaging.`,
  };
}

function buildGeneratedProofIntro({
  city,
  stateSeed,
  primaryIndustries,
  featuredWorkflowSlugs,
}: {
  city: string;
  stateSeed: StateSeoSeed;
  primaryIndustries: string[];
  featuredWorkflowSlugs: StateWorkflowSlug[];
}) {
  return buildUserFacingProofIntro({
    city,
    stateSeed,
    primaryIndustries,
    featuredWorkflowSlugs,
  });
}

function buildGeneratedProofBlocks({
  city,
  stateSeed,
  cityNeighbors,
  featuredWorkflowSlugs,
  primaryIndustries,
  archetype,
}: {
  city: string;
  stateSeed: StateSeoSeed;
  cityNeighbors: string[];
  featuredWorkflowSlugs: StateWorkflowSlug[];
  primaryIndustries: string[];
  archetype: CityArchetype;
}) {
  const workflowLine = formatInlineList(buildWorkflowNounList(featuredWorkflowSlugs));
  const industryLine = formatInlineList(primaryIndustries.slice(0, 2));

  const localPressureBlockByArchetype: Record<
    CityArchetype["key"],
    { title: string; description: string }
  > = {
    commercialHub: {
      title: "Response speed should stay owned from the first enquiry",
      description: `In ${city}, the local market is shaped by ${stateSeed.commercialAngle}, which usually creates pressure around ${archetype.proofFocus} for ${industryLine}. Teams need clearer ownership than manual chat handling can provide.`,
    },
    operationsCluster: {
      title: "Assignment and reminder discipline should stay visible",
      description: `${city} teams often feel the cost of weak handoff and reminder timing first, so ${archetype.proofFocus} usually matters more than adding another messaging channel.`,
    },
    serviceCluster: {
      title: "Enquiry handling should move customers to the next step",
      description: `For ${industryLine} in ${city}, the biggest operational gap is usually not awareness. It is whether teams can turn enquiries into structured next steps through ${archetype.proofFocus}.`,
    },
    supportCluster: {
      title: "Support coverage should stay structured under repeat demand",
      description: `${city} teams usually need better ${archetype.proofFocus} because repeated customer questions, escalations, and status requests create daily operational load across ${industryLine}.`,
    },
    collectionsCluster: {
      title: "Follow-up and collections should stay visible to the team",
      description: `${city} teams often need tighter ${archetype.proofFocus} because delayed reminders, scattered document status, and exception handling create avoidable revenue drag for ${industryLine}.`,
    },
  };

  return [
    localPressureBlockByArchetype[archetype.key],
    {
      title: `${workflowLine.charAt(0).toUpperCase() + workflowLine.slice(1)} should stay in one operating path`,
      description: `A strong ${city} rollout should connect ${workflowLine} with records, reminders, escalation rules, and human handoff so teams can reduce ${stateSeed.primaryPain}.`,
    },
    buildUserFacingLocalityBlock({
      city,
      stateSeed,
      cityNeighbors,
      featuredWorkflowSlugs,
    }),
  ];
}

function normalizeCuratedProofIntro({
  intro,
  city,
  stateSeed,
  primaryIndustries,
  featuredWorkflowSlugs,
}: {
  intro: string;
  city: string;
  stateSeed: StateSeoSeed;
  primaryIndustries: string[];
  featuredWorkflowSlugs: StateWorkflowSlug[];
}) {
  if (/\bpages?\b|\bcopy\b/i.test(intro)) {
    return buildUserFacingProofIntro({
      city,
      stateSeed,
      primaryIndustries,
      featuredWorkflowSlugs,
    });
  }

  return intro;
}

function normalizeCuratedProofBlocks({
  blocks,
  city,
  stateSeed,
  cityNeighbors,
  featuredWorkflowSlugs,
}: {
  blocks: Array<{ title: string; description: string }>;
  city: string;
  stateSeed: StateSeoSeed;
  cityNeighbors: string[];
  featuredWorkflowSlugs: StateWorkflowSlug[];
}) {
  const localityBlock = buildUserFacingLocalityBlock({
    city,
    stateSeed,
    cityNeighbors,
    featuredWorkflowSlugs,
  });

  return blocks.map((block) => {
    if (
      /\bpage\b|\bcopy\b/i.test(block.title) ||
      /\bpage\b|\bcopy\b/i.test(block.description)
    ) {
      return localityBlock;
    }

    return block;
  });
}

export const citySeoSeedList: CitySeoSeed[] = Object.entries(cityNamesByStateSlug).flatMap(([stateSlug, cities]) => {
  const stateSeed = stateSeoSeedBySlug.get(stateSlug);

  if (!stateSeed) {
    throw new Error(`Missing state SEO seed for city list: ${stateSlug}`);
  }

  const stateWorkflowSlugs = getStateWorkflowSlugs(stateSlug);

  return cities.map((city, cityIndex) => {
    const cityNeighbors = cities.filter((candidate) => candidate !== city).slice(0, 4);
    const archetype = cityArchetypes[cityIndex % cityArchetypes.length]!;
    const featuredWorkflowSlugs = pickRotatedItems(
      stateWorkflowSlugs,
      cityIndex,
      Math.min(3, stateWorkflowSlugs.length),
    );
    const primaryIndustries = pickRotatedItems(
      stateSeed.industries,
      cityIndex,
      Math.min(3, stateSeed.industries.length),
    );
    const cityProofKey = `${stateSlug}:${slugifyCity(city)}`;
    const curatedProof = priorityCityProofBySlug[cityProofKey];

    return {
      slug: slugifyCity(city),
      name: city,
      stateSlug,
      stateName: stateSeed.name,
      titleStateName: stateTitleNameBySlug[stateSlug] ?? stateSeed.name,
      cityNeighbors,
      stateSeed,
      featuredWorkflowSlugs,
      primaryIndustries,
      marketRole: archetype.marketRole,
      localPainPoint: archetype.localPainPoint,
      proofLine: buildCityProofLine(city, stateSeed.name, cityNeighbors, archetype),
      workflowPriorityLine: archetype.workflowPriorityLine,
      localSearchTerms: buildCitySearchTerms(city, featuredWorkflowSlugs, archetype),
      ctaLabel: archetype.ctaLabel,
      proofMode: curatedProof ? "curated" : "generated",
      priorityProofIntro: curatedProof
        ? normalizeCuratedProofIntro({
            intro: curatedProof.intro,
            city,
            stateSeed,
            primaryIndustries,
            featuredWorkflowSlugs,
          })
        : buildGeneratedProofIntro({
            city,
            stateSeed,
            primaryIndustries,
            featuredWorkflowSlugs,
          }),
      proofBlocks:
        curatedProof
          ? normalizeCuratedProofBlocks({
              blocks: curatedProof.blocks,
              city,
              stateSeed,
              cityNeighbors,
              featuredWorkflowSlugs,
            })
          : buildGeneratedProofBlocks({
              city,
              stateSeed,
              cityNeighbors,
              featuredWorkflowSlugs,
              primaryIndustries,
              archetype,
            }),
    };
  });
});

export const citySeoSeedByStateAndSlug = new Map(
  citySeoSeedList.map((seed) => [`${seed.stateSlug}:${seed.slug}`, seed] as const),
);

export const seoCityRoutes = citySeoSeedList.map((seed) => `/india/${seed.stateSlug}/cities/${seed.slug}`);
