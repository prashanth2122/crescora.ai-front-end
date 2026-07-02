export type ComparisonRow = {
  label: string;
  flow: string;
  alternative: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ComparisonCard = {
  title: string;
  href: string;
  text: string;
};

export type ComparisonPageData = {
  path: string;
  metadata: {
    title: string;
    description: string;
  };
  title: string;
  eyebrow: string;
  description: string;
  bottomLine: string;
  rows: ComparisonRow[];
  whyFlowWins: string[];
  whenAlternativeFits: string[];
  rolloutSteps: string[];
  faq?: FaqItem[];
  relatedPages?: ComparisonCard[];
};

export type ProofPageData = {
  metadata: {
    title: string;
    description: string;
  };
  title: string;
  eyebrow: string;
  description: string;
  note: string;
  context: string;
  challenge: string[];
  workflow: string[];
  controls: string[];
  outcomes: string[];
  rolloutSteps: string[];
};

export type CompareHubTableRow = {
  label: string;
  value: string;
};

export type CompareHubPlatformRow = {
  platform: string;
  strength: string;
  fit: string;
};

export type CompareHubWhyChooseItem = {
  title: string;
  description: string;
};

export type CompareHubCapabilityRow = {
  capability: string;
  focus: string;
};

export type CompareHubOutcomeRow = {
  outcome: string;
  impact: string;
};

export type CompareHubSection<T> = {
  eyebrow: string;
  title: string;
  description: string;
  items: T;
};

export type CompareHubData = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  businessNeeds: CompareHubSection<CompareHubTableRow[]>;
  platformComparison: CompareHubSection<CompareHubPlatformRow[]>;
  whyChoose: CompareHubSection<CompareHubWhyChooseItem[]>;
  capabilities: CompareHubSection<CompareHubCapabilityRow[]>;
  rightFit: CompareHubSection<string[]>;
  alternatives: CompareHubSection<readonly ComparisonCard[]>;
  manualBuild: CompareHubSection<string[]>;
  outcomes: CompareHubSection<CompareHubOutcomeRow[]>;
  startingWorkflows: CompareHubSection<string[]>;
  relatedWorkflows: CompareHubSection<readonly ComparisonCard[]>;
  faq: CompareHubSection<FaqItem[]>;
};

export const competitorAlternativeCards: readonly ComparisonCard[] = [
  {
    title: "Yellow.ai Alternative",
    href: "/compare/yellow-ai-alternative",
    text: "Compare Crescora AI with Yellow.ai when the business needs practical workflow automation without a heavyweight enterprise rollout.",
  },
  {
    title: "Kore.ai Alternative",
    href: "/compare/kore-ai-alternative",
    text: "See when Crescora AI is the simpler fit for operational workflows versus a broader enterprise AI agent platform.",
  },
  {
    title: "Gupshup Alternative",
    href: "/compare/gupshup-alternative",
    text: "Understand the gap between business messaging and end-to-end workflow execution across bookings, payments, documents, and follow-up.",
  },
  {
    title: "Intercom Alternative",
    href: "/compare/intercom-alternative",
    text: "See where Crescora AI fits when automation needs to extend beyond support resolution into sales, service, and operations.",
  },
  {
    title: "Zendesk AI Alternative",
    href: "/compare/zendesk-ai-alternative",
    text: "Compare Crescora AI with Zendesk AI when service automation must connect to business operations such as appointments, payments, documents, and approvals.",
  },
] as const;

export const workflowComparisonCards: readonly ComparisonCard[] = [
  {
    title: "Crescora AI vs Chatbots",
    href: "/compare/flow-vs-chatbots",
    text: "Understand the gap between answering questions and running a workflow that books, follows up, escalates, and updates records.",
  },
  {
    title: "Crescora AI vs Manual WhatsApp",
    href: "/compare/flow-vs-manual-whatsapp",
    text: "See why shared inbox handling breaks down once volume, shift changes, and follow-up discipline start to matter.",
  },
  {
    title: "Crescora AI vs Generic Automation",
    href: "/compare/flow-vs-generic-automation",
    text: "Compare a full client-journey flow with simpler tools that only answer questions or pass messages along.",
  },
  {
    title: "Crescora AI vs CRM-Led Process",
    href: "/compare/flow-vs-crm-only",
    text: "Show why the CRM should store the result after Crescora AI handles the conversation and follow-up.",
  },
] as const;

export const comparisonCards: readonly ComparisonCard[] = [
  ...competitorAlternativeCards,
  ...workflowComparisonCards,
];

export const compareHubPage: CompareHubData = {
  metadata: {
    title: "Crescora AI vs Other AI Automation Platforms | AI Workflow Automation for Businesses",
    description:
      "Compare Crescora AI with leading AI automation platforms. See why businesses choose Crescora AI for customer conversations, workflows, follow-ups, payments, appointments, handover, and operations.",
  },
  hero: {
    eyebrow: "AI automation platform comparison",
    title: "Compare AI Automation Platforms: Why Growing Businesses Choose Crescora AI",
    description:
      "Most automation tools help businesses reply faster. Crescora AI helps businesses operate faster. Crescora AI is built for businesses that want to automate customer conversations, lead capture, appointment booking, payment collection, document intake, follow-ups, internal handovers, team notifications, and operational workflows from one visual automation platform.",
  },
  businessNeeds: {
    eyebrow: "Workflow depth",
    title: "Not just a chatbot. A complete business workflow automation platform.",
    description:
      "Many platforms focus mainly on customer support chats or AI replies. Crescora AI is designed for businesses that need automation beyond conversation.",
    items: [
      { label: "Lead capture", value: "Capture name, phone, requirement, source, and route leads to the right team." },
      { label: "Customer support", value: "Answer FAQs, classify intent, escalate complex cases, and track outcomes." },
      { label: "Appointment booking", value: "Collect details, show slots, confirm booking, and send reminders." },
      { label: "Payment collection", value: "Generate payment steps, verify status, and send confirmation." },
      { label: "Document workflows", value: "Collect files, process documents, and route for review." },
      { label: "Follow-ups", value: "Schedule reminders, send updates, and reduce missed opportunities." },
      { label: "Human handover", value: "Transfer complex or sensitive cases to the right team." },
      { label: "Analytics", value: "Track events, conversions, escalations, and workflow performance." },
      { label: "Governance", value: "Add approvals, audit logs, permissions, and controlled releases." },
    ],
  },
  platformComparison: {
    eyebrow: "Platform comparison",
    title: "Crescora AI vs leading AI automation platforms",
    description:
      "The important decision is not who can generate a reply. It is which platform can move the customer journey forward with the operational control your team actually needs.",
    items: [
      {
        platform: "Yellow.ai",
        strength: "Enterprise AI agents for customer and employee experience automation.",
        fit: "Crescora AI is ideal for businesses that want faster implementation, practical workflow automation, and industry-specific use cases without enterprise complexity.",
      },
      {
        platform: "Kore.ai",
        strength: "Enterprise AI agent platform for customer and employee experiences with pre-built industry applications.",
        fit: "Crescora AI is a strong fit for growing businesses that need a simpler, more service-led platform for real operational workflows.",
      },
      {
        platform: "Gupshup",
        strength: "Conversational AI and business messaging for marketing, commerce, and support automation.",
        fit: "Crescora AI goes beyond messaging by connecting conversations with records, payments, appointments, documents, reminders, and human handover.",
      },
      {
        platform: "Intercom / Fin",
        strength: "AI-first customer service helpdesk and AI agent experience.",
        fit: "Crescora AI is better suited when the business needs custom workflow automation, not only customer support resolution.",
      },
      {
        platform: "Zendesk AI",
        strength: "AI agents, copilots, automation, QA, and support workflows across customer service channels.",
        fit: "Crescora AI is a strong choice when support automation must connect with business operations like bookings, payments, documents, approvals, and team routing.",
      },
    ],
  },
  whyChoose: {
    eyebrow: "Why businesses choose Crescora AI",
    title: "Built for workflows that have to reach a real business outcome.",
    description:
      "Customer conversations are only one part of the journey. The platform has to guide the next action, keep humans in control where needed, and make the workflow visible to the team.",
    items: [
      {
        title: "Built for real business workflows",
        description:
          "Crescora AI is designed for journeys that need information capture, validation, availability checks, record creation, team notifications, payments, follow-ups, and escalation handling.",
      },
      {
        title: "Faster launch with industry templates",
        description:
          "Hospitals, clinics, schools, coaching centers, real estate teams, labs, finance services, service businesses, and other enquiry-heavy operations can start from ready-to-adapt workflow patterns.",
      },
      {
        title: "Human handover when automation should stop",
        description:
          "Sensitive, high-value, or complex cases can move to the right person with queue assignment, approvals, and context preserved.",
      },
      {
        title: "Visual flow builder for business control",
        description:
          "Teams can define branches, fallbacks, reminders, approvals, and escalation paths visually instead of depending on developers for every operational change.",
      },
      {
        title: "Automation across customer and internal operations",
        description:
          "Crescora AI can support customer enquiries, sales qualification, appointment workflows, payment reminders, service requests, document collection, internal assignments, manager approvals, updates, and feedback collection.",
      },
      {
        title: "Better visibility for owners and managers",
        description:
          "Track what happened, where customers dropped, which requests escalated, which payments are pending, and which workflows need improvement.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Feature comparison",
    title: "The Crescora AI product focus is workflow orchestration, not isolated chat responses.",
    description:
      "These are the capability areas buyers usually need to compare once they move from basic bot evaluation to production workflow evaluation.",
    items: [
      { capability: "AI conversation automation", focus: "Customer conversations, FAQs, intent routing, and AI-assisted responses." },
      { capability: "Visual workflow builder", focus: "Build multi-step flows without hardcoding every operational change." },
      { capability: "Human handover", focus: "Route complex cases to the right team without losing context." },
      { capability: "Appointment automation", focus: "Useful for hospitals, clinics, consultants, schools, and service visits." },
      { capability: "Payment workflow", focus: "Payment collection and verification flows inside the customer journey." },
      { capability: "Document collection", focus: "Collect and process documents for operational workflows." },
      { capability: "Follow-up automation", focus: "Reminders, scheduled actions, and status updates." },
      { capability: "Knowledge base support", focus: "KB and RAG-backed answers with controlled information delivery." },
      { capability: "Analytics", focus: "Track outcomes, events, escalations, and workflow performance." },
      { capability: "Governance", focus: "Approvals, audit logs, guardrails, and trust controls." },
      { capability: "Multi-channel readiness", focus: "Web widget and messaging-channel integrations." },
      { capability: "Service-led implementation", focus: "Workflow design can be shaped around each business use case." },
    ],
  },
  rightFit: {
    eyebrow: "When Crescora AI is the right choice",
    title: "Crescora AI is a strong fit when the business feels these operating problems already.",
    description:
      "These are the signals that the team has moved past a lightweight chatbot need and into workflow automation territory.",
    items: [
      "Customers message you, but replies are delayed.",
      "Leads are missed because follow-ups are manual.",
      "Staff repeatedly answer the same questions.",
      "Appointments are handled through phone calls and scattered messages.",
      "Payment confirmation is manual.",
      "Teams do not know who owns which customer request.",
      "Customers are asked the same details again and again.",
      "Managers cannot see workflow status clearly.",
      "Business processes depend too much on one or two staff members.",
      "You want automation, but still need human control for important decisions.",
    ],
  },
  alternatives: {
    eyebrow: "Competitor alternatives",
    title: "Use the competitor pages when the buyer intent is already comparison-driven.",
    description:
      "These pages are the main cluster for Yellow.ai, Kore.ai, Gupshup, Intercom, and Zendesk AI alternative intent. Each one links the competitor context back to workflow fit.",
    items: competitorAlternativeCards,
  },
  manualBuild: {
    eyebrow: "Why not build it manually",
    title: "Manual automation usually starts small and becomes fragmented fast.",
    description:
      "A few scripts, forms, spreadsheets, and chat tools can quickly turn into disconnected systems. Crescora AI provides one workflow for conversation, action, follow-up, handover, and outcome tracking.",
    items: [
      "One place to design customer journeys.",
      "One workflow for conversation, action, and follow-up.",
      "One path for human handover.",
      "One system to track outcomes.",
      "One platform to improve over time.",
    ],
  },
  outcomes: {
    eyebrow: "Business outcomes",
    title: "Built for business owners who want outcomes, not complexity.",
    description:
      "The strongest reason to adopt workflow automation is operational clarity: fewer dropped opportunities, faster responses, and more predictable customer movement across the journey.",
    items: [
      { outcome: "More leads captured", impact: "Automated enquiry handling and structured intake." },
      { outcome: "Faster response time", impact: "Instant replies and intelligent routing." },
      { outcome: "Fewer missed follow-ups", impact: "Scheduled reminders and status updates." },
      { outcome: "Better team productivity", impact: "Repetitive work moves to automation." },
      { outcome: "Smoother customer experience", impact: "Clear steps, updates, and handover." },
      { outcome: "Better visibility", impact: "Dashboard, analytics, records, and conversation history." },
      { outcome: "Safer operations", impact: "Approvals, audit logs, and governance controls." },
    ],
  },
  startingWorkflows: {
    eyebrow: "Start with one workflow",
    title: "You do not need to automate everything on day one.",
    description:
      "Most businesses start with one high-value workflow such as lead capture, appointment booking, customer support, or payment follow-up. Once the first workflow is live, Crescora AI can expand into more departments and use cases.",
    items: [
      "Lead capture and qualification",
      "Appointment booking",
      "FAQ and support automation",
      "Payment reminders",
      "Report or status tracking",
      "Document collection",
      "Customer onboarding",
      "Feedback and review collection",
      "Human handover and support queue",
    ],
  },
  relatedWorkflows: {
    eyebrow: "Related comparisons",
    title: "There is still a workflow-level comparison layer below the competitor pages.",
    description:
      "These decision-stage pages help buyers compare Crescora AI with manual handling, generic automation, CRM-led process design, and basic chatbot approaches.",
    items: workflowComparisonCards,
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions buyers ask before choosing an AI automation platform.",
    description:
      "The answers stay practical and product-specific so the FAQ matches the visible page content and remains useful for buyers, not just for markup.",
    items: [
      {
        question: "Is Crescora AI a chatbot platform?",
        answer:
          "Crescora AI includes chatbot automation, but it is more than a chatbot. It is an AI workflow automation platform that helps businesses automate conversations, data collection, appointments, payments, follow-ups, handovers, and operational tasks.",
      },
      {
        question: "How is Crescora AI different from other AI automation platforms?",
        answer:
          "Crescora AI focuses on practical business workflows. Instead of only answering customer messages, Crescora AI helps move work from enquiry to action through forms, records, routing, payment steps, reminders, approvals, and human handover.",
      },
      {
        question: "Which businesses can use Crescora AI?",
        answer:
          "Crescora AI is suitable for hospitals, clinics, schools, coaching centers, real estate businesses, diagnostic labs, finance services, insurance teams, local service businesses, and any company that receives repetitive customer enquiries.",
      },
      {
        question: "Can Crescora AI automate appointments and follow-ups?",
        answer:
          "Yes. Crescora AI can help automate appointment collection, slot selection, confirmation messages, reminders, and follow-up journeys.",
      },
      {
        question: "Does Crescora AI support human handover?",
        answer:
          "Yes. Crescora AI can route complex, urgent, high-value, or sensitive cases to a human team so automation does not block important customer situations.",
      },
      {
        question: "Can Crescora AI help reduce missed leads?",
        answer:
          "Yes. Crescora AI can capture enquiries instantly, collect required customer details, notify the right team, store lead information, and trigger follow-ups so fewer opportunities are missed.",
      },
      {
        question: "Is Crescora AI suitable for small and medium businesses?",
        answer:
          "Yes. Crescora AI is designed to help growing businesses start with high-impact workflows and scale automation gradually without building everything manually.",
      },
    ],
  },
};

export const proofCards = [
  {
    title: "Healthcare Front Desk Automation",
    href: "/workflow-examples/healthcare-front-desk-automation",
    text: "See how hospitals and clinics can automate appointment intake, patient details collection, doctor or department routing, payment follow-up, lab report requests, reminders, and staff handover for urgent or complex cases.",
    ctaLabel: "View Healthcare Example →",
    outcomeTags: ["Reduce missed enquiries", "Improve follow-up discipline", "Route cases faster"],
  },
  {
    title: "Real Estate Lead Operations",
    href: "/workflow-examples/real-estate-lead-operations",
    text: "See how real estate teams can qualify property leads, collect budget and location preferences, share project details, schedule site visits, send reminders, and route hot leads to sales teams.",
    ctaLabel: "View Real Estate Example →",
    outcomeTags: ["Qualify faster", "Book more visits", "Route hot leads sooner"],
  },
  {
    title: "Education Admissions Workflow",
    href: "/workflow-examples/education-admissions-workflow",
    text: "See how schools, colleges, and coaching centers can manage admission enquiries, course or batch questions, demo class booking, document collection, fee reminders, and counsellor handover.",
    ctaLabel: "View Education Example →",
    outcomeTags: ["Respond faster", "Collect the right details", "Improve counsellor handover"],
  },
] as const;

export const comparisonPages: Record<string, ComparisonPageData> = {
  "flow-vs-chatbots": {
    path: "/compare/flow-vs-chatbots",
    metadata: {
      title: "Crescora AI vs Chatbots | Comparison",
      description: "See why Crescora AI is designed to complete workflows, while chatbots primarily answer questions.",
    },
    title: "Crescora AI vs Chatbots",
    eyebrow: "Comparison",
    description:
      "A chatbot can answer. Crescora AI can answer and keep the business moving by completing the next step in the workflow.",
    bottomLine:
      "Use a chatbot when you need lightweight Q&A. Use Crescora AI when the conversation must lead to a booked appointment, updated record, reminder, payment follow-up, or human handoff.",
    rows: [
      {
        label: "Primary job",
        flow: "Run a business workflow from conversation to outcome.",
        alternative: "Answer common questions and provide scripted replies.",
      },
      {
        label: "Workflow action",
        flow: "Books, routes, reminds, collects, updates, and escalates.",
        alternative: "Stops after the answer unless custom logic is added externally.",
      },
      {
        label: "Human handoff",
        flow: "Carries conversation history and context into escalation.",
        alternative: "Often hands off with limited context or no operating state.",
      },
      {
        label: "Systems integration",
        flow: "Triggers records, tasks, reminders, and downstream workflow steps.",
        alternative: "Usually needs separate steps to move information into the business process.",
      },
      {
        label: "Auditability",
        flow: "Designed around workflow visibility and outcome logging.",
        alternative: "Typically focused on conversation content, not process state.",
      },
      {
        label: "Best fit",
        flow: "Enquiry-heavy businesses with repeatable operational actions.",
        alternative: "Static FAQ experiences or simple support deflection.",
      },
    ],
    whyFlowWins: [
      "The business needs more than an answer; it needs a next action.",
      "A single conversation must support qualification, scheduling, reminders, or document intake.",
      "The team needs to know what happened, what is pending, and what escalated.",
      "Operational consistency matters more than ad hoc bot replies.",
    ],
    whenAlternativeFits: [
      "You only need a lightweight FAQ layer on a low-risk website.",
      "There is no follow-up, booking, payment, or handoff requirement.",
      "The process is not worth configuring as a real workflow yet.",
    ],
    rolloutSteps: [
      "Start with a single enquiry path and define the desired outcome.",
      "Add qualification logic before expanding to more intents.",
      "Connect booking, reminders, or record updates before going broad.",
      "Use human handoff as a planned step, not an exception after failure.",
    ],
  },
  "flow-vs-manual-whatsapp": {
    path: "/compare/flow-vs-manual-whatsapp",
    metadata: {
      title: "Crescora AI vs Manual WhatsApp | Comparison",
      description: "See how Crescora AI replaces inbox chaos with consistent, trackable WhatsApp workflow automation.",
    },
    title: "Crescora AI vs Manual WhatsApp",
    eyebrow: "Comparison",
    description:
      "Manual WhatsApp handling works until volume, staffing, and follow-up discipline turn every chat into a process risk.",
    bottomLine:
      "Use manual handling for very low-volume, temporary, or experimental operations. Use Crescora AI when WhatsApp is a core customer channel and missed replies or inconsistent follow-up cost revenue.",
    rows: [
      {
        label: "Response speed",
        flow: "Instant first response and structured follow-up logic.",
        alternative: "Depends on staff availability, shift coverage, and inbox discipline.",
      },
      {
        label: "Consistency",
        flow: "Same workflow every time, across every channel and shift.",
        alternative: "Varies by person, time of day, and workload.",
      },
      {
        label: "After-hours handling",
        flow: "Captures the lead, advances the workflow, and logs the next step.",
        alternative: "Messages may sit unanswered until someone returns.",
      },
      {
        label: "Follow-up",
        flow: "Automated reminders, retries, and escalation rules.",
        alternative: "Relies on memory, manual task lists, and staff availability.",
      },
      {
        label: "Visibility",
        flow: "Shows where each conversation sits in the workflow.",
        alternative: "Hard to track in a shared inbox once volume grows.",
      },
      {
        label: "Scale",
        flow: "Designed to handle more conversations without proportional headcount growth.",
        alternative: "Staff load rises almost linearly with volume.",
      },
    ],
    whyFlowWins: [
      "WhatsApp is not just a communication channel; it is a revenue and operations channel.",
      "The business needs repeatable qualification, booking, and follow-up discipline.",
      "More than one person touches the inbox and the team needs workflow consistency.",
      "Missed messages and late replies create a visible loss of trust and conversion.",
    ],
    whenAlternativeFits: [
      "A tiny team is handling a handful of messages per day.",
      "The channel is temporary and not part of the core operating model.",
      "The business is still validating demand before automating the workflow.",
    ],
    rolloutSteps: [
      "Automate first response and lead capture first.",
      "Add qualification, booking, and reminders after that baseline is stable.",
      "Move repeated status checks and document requests into structured flows.",
      "Keep staff access and takeover rules visible from the beginning.",
    ],
  },
  "flow-vs-generic-automation": {
    path: "/compare/flow-vs-generic-automation",
    metadata: {
      title: "Crescora AI vs Generic Automation | Comparison",
      description:
        "Compare Crescora AI with generic automation tools that connect apps but do not run the customer conversation itself.",
    },
    title: "Crescora AI vs Generic Automation",
    eyebrow: "Comparison",
    description:
      "Generic automation tools connect apps. Crescora AI is designed to orchestrate customer conversations and outcomes across the full workflow.",
    bottomLine:
      "Use generic automation for internal data movement or one-off tasks. Use Crescora AI when the client conversation itself is part of the business process and the next step needs to be guided clearly.",
    rows: [
      {
        label: "Conversation logic",
        flow: "Built around intents, responses, and next best actions.",
        alternative: "Usually assumes a trigger-action chain rather than a conversation state.",
      },
      {
        label: "Channel coverage",
        flow: "Designed for WhatsApp, web chat, voice, and connected systems.",
        alternative: "Often requires extra glue to behave like a customer-facing layer.",
      },
      {
        label: "Human-in-the-loop",
        flow: "Hand-off is a first-class part of the operating model.",
        alternative: "Handoff usually needs separate design and error handling.",
      },
      {
        label: "Template depth",
        flow: "Ready for business workflows such as bookings, reminders, and document intake.",
        alternative: "General-purpose automation needs more custom assembly per workflow.",
      },
      {
        label: "Governance",
        flow: "Outcome tracking and workflow visibility are core expectations.",
        alternative: "Visibility can be fragmented across multiple tools and triggers.",
      },
      {
        label: "Business fit",
        flow: "High-frequency customer operations with repeatable decisions.",
        alternative: "Straightforward back-office tasks or single-step automations.",
      },
    ],
    whyFlowWins: [
      "The workflow begins with a customer message, not a system event.",
      "Business teams need prebuilt patterns for the most common operational journeys.",
      "The company wants a platform, not a pile of loosely connected automations.",
      "Support, sales, and operations all need to understand the same flow model.",
    ],
    whenAlternativeFits: [
      "You only need an internal sync between two apps.",
      "There is no customer conversation layer involved.",
      "The workflow is simple enough to remain a straight trigger-action automation.",
    ],
    rolloutSteps: [
      "Map the conversation path before connecting any tools.",
      "Define the business outcome and the handoff rules before scaling.",
      "Connect other tools after the flow itself is stable.",
      "Review edge cases where the customer journey can stall or branch.",
    ],
  },
  "flow-vs-crm-only": {
    path: "/compare/flow-vs-crm-only",
    metadata: {
      title: "Crescora AI vs CRM-Led Process | Comparison",
      description: "Compare Crescora AI against a CRM-led process and see why the client-flow layer matters before record storage.",
    },
    title: "Crescora AI vs CRM-Led Process",
    eyebrow: "Comparison",
    description:
      "A CRM stores the relationship. Crescora AI runs the conversation and follow-up that creates the result in the first place.",
    bottomLine:
      "Use the CRM as the record store. Use Crescora AI as the layer that qualifies, books, follows up, reminds, collects, and escalates before the record is updated.",
    rows: [
      {
        label: "Core role",
        flow: "Operates the customer interaction and workflow journey.",
        alternative: "Stores accounts, leads, activities, and pipeline state.",
      },
      {
        label: "Conversation handling",
        flow: "Handles the dialogue that moves the customer forward.",
        alternative: "Usually receives the outcome after the interaction is already done.",
      },
      {
        label: "Follow-up execution",
        flow: "Automates reminders, check-ins, and action sequences.",
        alternative: "Can track tasks, but usually does not run the conversation itself.",
      },
      {
        label: "Document and payment workflows",
        flow: "Requests, follows up, and escalates in context.",
        alternative: "Needs surrounding tooling to drive those customer interactions.",
      },
      {
        label: "Escalation model",
        flow: "Routes with full context to the right human owner.",
        alternative: "Depends on manual activity updates and rep discipline.",
      },
      {
        label: "Best fit",
        flow: "When the conversation is the operating layer.",
        alternative: "When the team only needs record management and pipeline visibility.",
      },
    ],
    whyFlowWins: [
      "The client journey starts before the CRM and must be actively managed.",
      "The business needs reminders, follow-ups, and handoffs that the CRM alone does not run.",
      "The team wants a clear separation between the flow and record storage.",
      "Lead handling should not depend on every rep manually updating the CRM in real time.",
    ],
    whenAlternativeFits: [
      "Your CRM already handles the full interaction layer, which is rare.",
      "The workflow is only about storing notes and changing pipeline stages.",
      "There is no customer-facing automation requirement at all.",
    ],
    rolloutSteps: [
      "Keep the CRM as the data store and Crescora AI as the client-flow layer.",
      "Agree on which fields and events should sync downstream.",
      "Design the conversation flow before the CRM setup.",
      "Audit handoff points so rep follow-up is not lost between systems.",
    ],
  },
  "flow-vs-chatbot-builder": {
    path: "/compare/flow-vs-chatbot-builder",
    metadata: {
      title: "Crescora AI vs Chatbot Builder | Comparison",
      description: "See why Crescora AI is a workflow engine, not just a chatbot builder.",
    },
    title: "Crescora AI vs Chatbot Builder",
    eyebrow: "Comparison",
    description:
      "A chatbot builder creates chat experiences. Crescora AI is designed to move the customer journey forward with booking, follow-up, handoff, and record updates.",
    bottomLine:
      "Use a chatbot builder if you only need to assemble conversations. Use Crescora AI when the conversation must create an operational result.",
    rows: [
      { label: "Primary job", flow: "Run a customer workflow.", alternative: "Build a chat experience." },
      { label: "Business logic", flow: "Includes reminders, handoff, and records.", alternative: "Often needs extra automation around it." },
      { label: "Outcome focus", flow: "Built for conversion and process completion.", alternative: "Usually focused on responses and routing." },
      { label: "Templates", flow: "Ready for Indian business workflows.", alternative: "Usually generic and assembly-heavy." },
      { label: "Analytics", flow: "Tracks workflow progress and leakage.", alternative: "May not model the full business journey." },
      { label: "Best fit", flow: "Operational customer journeys.", alternative: "Conversation prototypes and simple bots." },
    ],
    whyFlowWins: [
      "The team wants the customer message to trigger a real business process.",
      "The workflow needs booking, reminders, payment follow-up, or document handling.",
      "The business wants one platform for the conversation and the next action.",
    ],
    whenAlternativeFits: [
      "The goal is only to prototype a chat UI.",
      "No workflow or outcome is needed beyond the message exchange.",
      "The team is still exploring a bot idea rather than a production process.",
    ],
    rolloutSteps: [
      "Define the customer journey and the final business outcome first.",
      "Add booking, follow-up, and escalation rules around the bot.",
      "Connect records and analytics after the flow is stable.",
      "Keep human handoff visible from the start.",
    ],
  },
  "flow-vs-whatsapp-chatbot-tools": {
    path: "/compare/flow-vs-whatsapp-chatbot-tools",
    metadata: {
      title: "Crescora AI vs WhatsApp Chatbot Tools | Comparison",
      description: "Compare Crescora AI with WhatsApp-only bot tools that do not manage the full workflow.",
    },
    title: "Crescora AI vs WhatsApp Chatbot Tools",
    eyebrow: "Comparison",
    description:
      "WhatsApp chatbot tools are useful for conversation handling. Crescora AI is built to manage the business process that follows the conversation.",
    bottomLine:
      "Use WhatsApp-only tools for simple replies. Use Crescora AI when WhatsApp is the start of a broader workflow that needs a clear outcome.",
    rows: [
      { label: "Channel scope", flow: "Runs a multi-step workflow around WhatsApp.", alternative: "Usually limited to the chat layer." },
      { label: "Follow-up", flow: "Automated reminders and retries.", alternative: "Often manual or externally stitched together." },
      { label: "Handoff", flow: "Human takeover is part of the design.", alternative: "Handoff may be basic or fragmented." },
      { label: "Records", flow: "Updates business records and outcomes.", alternative: "Often stops at the message reply." },
      { label: "Templates", flow: "Supports industry-specific workflows.", alternative: "Usually generic or heavily customized." },
      { label: "Best fit", flow: "Revenue and operations workflows.", alternative: "FAQ and lightweight engagement bots." },
    ],
    whyFlowWins: [
      "The business needs a measurable outcome, not just a response.",
      "The workflow depends on reminders, handoff, or data capture.",
      "The team wants one place for process visibility and follow-up.",
    ],
    whenAlternativeFits: [
      "The business only needs a simple chatbot on WhatsApp.",
      "There is no downstream workflow to manage.",
      "The deployment is temporary or experimental.",
    ],
    rolloutSteps: [
      "Start with the highest-volume WhatsApp journey.",
      "Add workflow steps that create the business outcome.",
      "Keep handoff and analytics visible.",
      "Expand only after the first flow works reliably.",
    ],
  },
  "flow-vs-manual-customer-support": {
    path: "/compare/flow-vs-manual-customer-support",
    metadata: {
      title: "Crescora AI vs Manual Customer Support | Comparison",
      description: "See why support teams need automation for triage, FAQs, and escalation.",
    },
    title: "Crescora AI vs Manual Customer Support",
    eyebrow: "Comparison",
    description:
      "Manual support is flexible, but it does not scale well when response speed, consistency, and escalation discipline matter.",
    bottomLine:
      "Use manual support for low-volume, ad hoc communication. Use Crescora AI when support work needs repeatable triage, deflection, and handoff.",
    rows: [
      { label: "Response speed", flow: "Immediate triage and response logic.", alternative: "Depends on staffing and inbox discipline." },
      { label: "Consistency", flow: "Every customer sees the same process.", alternative: "Varies by person and shift." },
      { label: "Escalation", flow: "Context moves with the case.", alternative: "Context can be lost between agents." },
      { label: "Analytics", flow: "Tracks leakage and resolution.", alternative: "Often scattered across tools and inboxes." },
      { label: "Scale", flow: "Handles repeated questions without linear headcount growth.", alternative: "More volume usually means more staff." },
      { label: "Best fit", flow: "Operational support teams.", alternative: "Small, temporary, or low-volume setups." },
    ],
    whyFlowWins: [
      "The support queue has repeatable questions and repetitive triage.",
      "The business needs to capture, route, and resolve cases consistently.",
      "Support outcomes need to be visible in one operating model.",
    ],
    whenAlternativeFits: [
      "The team only gets a few support requests per day.",
      "The channel is not tied to business-critical response SLAs.",
      "The support process is still being defined.",
    ],
    rolloutSteps: [
      "Automate the top FAQs and the highest-volume triage path.",
      "Add escalation and context handoff next.",
      "Track leakage and resolved cases in analytics.",
      "Expand to more categories only after the first route stabilizes.",
    ],
  },
  "flow-vs-zapier-for-indian-businesses": {
    path: "/compare/flow-vs-zapier-for-indian-businesses",
    metadata: {
      title: "Crescora AI vs Zapier for Indian Businesses | Comparison",
      description: "Compare customer-facing workflow orchestration with generic trigger-action automation.",
    },
    title: "Crescora AI vs Zapier for Indian Businesses",
    eyebrow: "Comparison",
    description:
      "Zapier is excellent for connecting apps. Crescora AI is designed to orchestrate customer conversations and business outcomes across channels.",
    bottomLine:
      "Use Zapier for internal task automation. Use Crescora AI when the customer journey itself needs to be managed from first message to final outcome.",
    rows: [
      { label: "Primary role", flow: "Customer workflow orchestration.", alternative: "App-to-app trigger-action automation." },
      { label: "Conversation layer", flow: "Built into the product.", alternative: "Usually external to the automation." },
      { label: "Handoff", flow: "Designed for human takeover.", alternative: "Needs custom design around the workflow." },
      { label: "Templates", flow: "Built for Indian business use cases.", alternative: "General-purpose automation logic." },
      { label: "Analytics", flow: "Tracks journey outcomes and leakage.", alternative: "Tracks automation runs, not customer flow quality." },
      { label: "Best fit", flow: "Revenue and operations journeys.", alternative: "Back-office integrations and internal tasks." },
    ],
    whyFlowWins: [
      "The workflow starts with a customer conversation, not a system event.",
      "The team needs the interaction itself to lead to a business outcome.",
      "The process requires human handoff and context preservation.",
    ],
    whenAlternativeFits: [
      "You only need to connect two internal SaaS tools.",
      "No customer interaction is involved.",
      "The task is simple enough for a generic automation tool.",
    ],
    rolloutSteps: [
      "Map the customer journey before picking tools.",
      "Use Crescora AI for the conversation and Zapier only where app sync is required.",
      "Keep the business outcome and escalation rules in one design.",
      "Expand the stack only after the first workflow is stable.",
    ],
  },
  "yellow-ai-alternative": {
    path: "/compare/yellow-ai-alternative",
    metadata: {
      title: "Best Yellow.ai Alternative for Business Workflow Automation",
      description:
        "Compare Crescora AI vs Yellow.ai for businesses that need workflow automation across conversations, bookings, follow-ups, payments, documents, and human handover.",
    },
    title: "Crescora AI vs Yellow.ai",
    eyebrow: "Yellow.ai alternative",
    description:
      "Yellow.ai is built for enterprise customer and employee experience automation. Crescora AI is a better fit when the immediate priority is practical workflow automation around enquiries, bookings, reminders, payments, documents, routing, and human handover.",
    bottomLine:
      "Choose Yellow.ai when a large enterprise needs a broad AI agent program across customer and employee experiences. Choose Crescora AI when the team wants a more direct rollout focused on customer journeys and operational workflows that need to reach a business outcome quickly.",
    rows: [
      {
        label: "Primary focus",
        flow: "Workflow automation around customer conversations, actions, follow-up, and operating visibility.",
        alternative: "Enterprise AI agent programs for customer and employee experience automation.",
      },
      {
        label: "Implementation shape",
        flow: "Fits businesses that want a practical, service-led implementation around one workflow first.",
        alternative: "Often evaluated in larger enterprise transformation or platform-consolidation contexts.",
      },
      {
        label: "Workflow depth",
        flow: "Strong fit for bookings, payments, document collection, follow-up, routing, and handover inside the same journey.",
        alternative: "Conversation and experience automation are strong, but the workflow fit depends on the business design around the platform.",
      },
      {
        label: "Operational control",
        flow: "Designed for visible flow steps, exceptions, and business-level ownership across the journey.",
        alternative: "Often positioned at a broader enterprise program level with more cross-functional complexity.",
      },
      {
        label: "Best fit",
        flow: "Growing businesses and operationally heavy teams that need faster launch and narrower workflow scope first.",
        alternative: "Large enterprises with wider CX and EX automation requirements.",
      },
      {
        label: "Where Crescora AI fits better",
        flow: "When the target is immediate workflow performance and faster implementation on a clearly defined customer journey.",
        alternative: "When the organization wants a broader AI platform evaluation across multiple enterprise functions.",
      },
    ],
    whyFlowWins: [
      "The business needs one high-value workflow live before it expands to a wider automation program.",
      "Bookings, reminders, payments, documents, routing, and handover matter as much as the AI conversation itself.",
      "A service-led rollout with practical workflow design is more important than a heavyweight enterprise platform motion.",
      "Managers need operational visibility into workflow status, escalations, and leakage from day one.",
    ],
    whenAlternativeFits: [
      "The buyer is a large enterprise evaluating customer and employee experience automation together.",
      "There is budget and appetite for a broader enterprise platform rollout beyond a narrow workflow scope.",
      "The evaluation is driven by organization-wide agent strategy rather than one immediate business workflow.",
    ],
    rolloutSteps: [
      "Start with the highest-friction customer workflow and define the target business outcome clearly.",
      "Add human handover, approval points, and visibility before expanding the automation breadth.",
      "Connect records, reminders, payments, or document handling only where the first journey needs them.",
      "Scale to adjacent workflows after the first path proves conversion and operating clarity.",
    ],
    relatedPages: [
      { title: "Compare all AI automation platforms", href: "/compare", text: "See the full buyer-stage platform comparison hub." },
      { title: "Kore.ai alternative", href: "/compare/kore-ai-alternative", text: "Compare Crescora AI with another enterprise-oriented AI platform." },
      { title: "Crescora AI vs generic automation", href: "/compare/flow-vs-generic-automation", text: "See why customer workflows need more than trigger-action tooling." },
    ],
  },
  "kore-ai-alternative": {
    path: "/compare/kore-ai-alternative",
    metadata: {
      title: "Best Kore.ai Alternative for Practical AI Workflow Automation",
      description:
        "Compare Crescora AI vs Kore.ai for teams that need practical workflow automation, faster launch, and operational visibility across real customer journeys.",
    },
    title: "Crescora AI vs Kore.ai",
    eyebrow: "Kore.ai alternative",
    description:
      "Kore.ai is known for enterprise AI agents and broader CX and EX programs. Crescora AI is a stronger fit when the goal is to launch operational workflows quickly and keep the implementation focused on measurable customer-journey outcomes.",
    bottomLine:
      "Choose Kore.ai when the organization needs a broad enterprise AI agent platform with larger-scale program scope. Choose Crescora AI when the business wants practical workflow automation, faster launch, and clearer operating control over high-frequency customer journeys.",
    rows: [
      {
        label: "Primary focus",
        flow: "Workflow-first automation for customer conversations, operational actions, and follow-up.",
        alternative: "Enterprise AI agent platform for customer and employee experiences.",
      },
      {
        label: "Launch motion",
        flow: "Start with one production workflow and expand from a validated operating path.",
        alternative: "Often part of a broader enterprise rollout with more stakeholders and scope.",
      },
      {
        label: "Operational workflows",
        flow: "Well suited to lead capture, booking, reminders, documents, payments, and routing.",
        alternative: "Supports broad enterprise use cases, but the workflow-specific business design typically remains a major implementation decision.",
      },
      {
        label: "Team visibility",
        flow: "Keeps workflow state, handover, and outcome tracking visible for operational owners.",
        alternative: "Often evaluated at an enterprise platform level rather than a narrow operational workflow level.",
      },
      {
        label: "Best fit",
        flow: "Businesses that want simpler rollout and practical workflow execution around real customer operations.",
        alternative: "Large organizations with wider enterprise-agent goals and program capacity.",
      },
      {
        label: "Where Crescora AI fits better",
        flow: "When the priority is business outcomes such as more captured leads, faster responses, and fewer manual follow-ups.",
        alternative: "When the enterprise is investing in a broader AI platform strategy across departments.",
      },
    ],
    whyFlowWins: [
      "The team needs automation with clear business outcomes rather than a broad enterprise platform decision first.",
      "Workflow visibility, handover, reminders, and operational consistency matter immediately.",
      "The rollout needs to stay practical and service-led instead of becoming a large multi-stakeholder transformation program.",
      "Customer conversations must connect directly to bookings, tasks, records, payments, or approvals.",
    ],
    whenAlternativeFits: [
      "The organization is buying at enterprise scope across multiple internal and external experience programs.",
      "There is dedicated capacity for a broader AI agent platform rollout.",
      "The evaluation is not centered on a single operational workflow or a smaller team launch path.",
    ],
    rolloutSteps: [
      "Pick the workflow where manual effort and missed follow-up are already visible in daily operations.",
      "Design the conversation, routing, reminder, and handover logic before expanding the surface area.",
      "Connect downstream systems only after the first workflow is stable and measurable.",
      "Expand into adjacent journeys once operators can see where the first one improves conversion or service quality.",
    ],
    relatedPages: [
      { title: "Compare all AI automation platforms", href: "/compare", text: "Return to the full compare hub for the broader platform picture." },
      { title: "Yellow.ai alternative", href: "/compare/yellow-ai-alternative", text: "Compare Crescora AI against another enterprise-focused alternative." },
      { title: "Crescora AI vs CRM-led process", href: "/compare/flow-vs-crm-only", text: "See why the workflow layer matters before the record system." },
    ],
  },
  "gupshup-alternative": {
    path: "/compare/gupshup-alternative",
    metadata: {
      title: "Best Gupshup Alternative for End-to-End Business Automation",
      description:
        "Compare Crescora AI vs Gupshup for teams that need more than messaging and want end-to-end workflow automation tied to real business operations.",
    },
    title: "Crescora AI vs Gupshup",
    eyebrow: "Gupshup alternative",
    description:
      "Gupshup is strong in conversational AI and business messaging. Crescora AI is built for businesses that need messaging plus workflow automation, so the conversation can trigger records, appointments, payments, documents, reminders, and human handover.",
    bottomLine:
      "Choose Gupshup when the main requirement is conversational messaging infrastructure and engagement. Choose Crescora AI when a customer message must become a complete operational journey with clear next actions and team visibility.",
    rows: [
      {
        label: "Primary focus",
        flow: "Customer workflow automation from message to business outcome.",
        alternative: "Conversational AI and business messaging for marketing, commerce, and support.",
      },
      {
        label: "Conversation to action",
        flow: "A message can trigger capture, routing, booking, reminders, records, payments, documents, and handover.",
        alternative: "Messaging strength is clear, but the full workflow outcome depends on how the business assembles the next operational steps.",
      },
      {
        label: "Follow-up depth",
        flow: "Built for retries, reminders, scheduled updates, and exception handling.",
        alternative: "Messaging can be strong while workflow orchestration remains a separate design problem.",
      },
      {
        label: "Operational visibility",
        flow: "Tracks workflow status, escalations, outcomes, and next ownership.",
        alternative: "Messaging performance does not automatically equal end-to-end workflow visibility.",
      },
      {
        label: "Best fit",
        flow: "Businesses that want conversations connected directly to operations.",
        alternative: "Teams prioritizing business messaging and conversational engagement first.",
      },
      {
        label: "Where Crescora AI fits better",
        flow: "When messaging is only the start of the workflow and the business still needs process completion afterward.",
        alternative: "When conversation delivery and messaging scale are the main evaluation criteria.",
      },
    ],
    whyFlowWins: [
      "The business needs messaging plus workflow execution, not messaging alone.",
      "Appointments, documents, payments, and human handover must stay inside the same operating path.",
      "The team wants one place to see customer state, workflow state, and next action.",
      "Follow-up discipline cannot rely on staff memory after the initial message exchange.",
    ],
    whenAlternativeFits: [
      "The primary buying need is business messaging capability and conversational engagement.",
      "The team already has another layer that handles workflow orchestration after the message.",
      "The evaluation is centered on messaging infrastructure rather than workflow completion.",
    ],
    rolloutSteps: [
      "Start with the highest-value message-driven journey such as lead capture, booking, or support triage.",
      "Add reminder loops, documents, payment steps, or routing where the first workflow actually needs them.",
      "Keep human handover explicit so the conversation never stalls at the edge of automation.",
      "Expand after the first message-to-outcome path is measurable and reliable.",
    ],
    relatedPages: [
      { title: "Compare all AI automation platforms", href: "/compare", text: "See the full platform comparison hub." },
      { title: "Intercom alternative", href: "/compare/intercom-alternative", text: "Compare messaging-plus-workflow needs against support-led automation." },
      { title: "Crescora AI vs WhatsApp chatbot tools", href: "/compare/flow-vs-whatsapp-chatbot-tools", text: "See why WhatsApp replies are not the full workflow." },
    ],
  },
  "intercom-alternative": {
    path: "/compare/intercom-alternative",
    metadata: {
      title: "Best Intercom Alternative for Workflow Automation Beyond Support",
      description:
        "Compare Crescora AI vs Intercom for businesses that need workflow automation beyond support resolution across sales, booking, documents, payments, and operations.",
    },
    title: "Crescora AI vs Intercom",
    eyebrow: "Intercom alternative",
    description:
      "Intercom is a strong AI-first helpdesk for customer service teams. Crescora AI is a better fit when the business needs more than support resolution and wants automation across sales, service, booking, documents, payments, approvals, reminders, and handovers.",
    bottomLine:
      "Choose Intercom when customer support and helpdesk efficiency are the center of the buying decision. Choose Crescora AI when the business needs custom workflow automation that connects customer communication with internal operations and measurable next actions.",
    rows: [
      {
        label: "Primary focus",
        flow: "Workflow automation across customer conversations and operational follow-through.",
        alternative: "AI-first helpdesk and customer service automation.",
      },
      {
        label: "Support vs operations",
        flow: "Handles support, sales, booking, payment, document, and service workflows in one operating model.",
        alternative: "Strong for support resolution and customer service experience design.",
      },
      {
        label: "Workflow breadth",
        flow: "Useful when the business needs custom journeys beyond ticket resolution.",
        alternative: "Best fit when the main objective is support efficiency and service-team productivity.",
      },
      {
        label: "Human handover",
        flow: "Routes high-value or sensitive cases with workflow context and next-step state attached.",
        alternative: "Support handoff is natural, but broader operational handoff may require a wider workflow design around the product.",
      },
      {
        label: "Best fit",
        flow: "Businesses where customer communication must trigger downstream business operations.",
        alternative: "Support-led organizations optimizing service resolution and helpdesk performance.",
      },
      {
        label: "Where Crescora AI fits better",
        flow: "When bookings, documents, payments, approvals, or operational tasks matter as much as answering the customer.",
        alternative: "When the product evaluation is centered on support and helpdesk outcomes first.",
      },
    ],
    whyFlowWins: [
      "The business needs workflow automation beyond support tickets and service resolution.",
      "Sales, service, booking, document, and payment journeys must be orchestrated in one visible model.",
      "Managers need to see more than support metrics; they need operating-state visibility across the journey.",
      "The team wants one workflow that can include both automation and human control points.",
    ],
    whenAlternativeFits: [
      "Customer support is the main problem to solve and helpdesk performance is the central buying criterion.",
      "The business does not need broader operational workflows tied to the customer journey.",
      "The evaluation is primarily for service-team tooling rather than cross-functional workflow orchestration.",
    ],
    rolloutSteps: [
      "Start with the customer path where support and operations overlap most visibly.",
      "Define the points where automation should continue versus where a human should take over.",
      "Add reminders, documents, records, or payment steps only where the workflow truly needs them.",
      "Expand to adjacent journeys once the first path is performing and visible to managers.",
    ],
    relatedPages: [
      { title: "Compare all AI automation platforms", href: "/compare", text: "Review the broader AI automation platform landscape." },
      { title: "Zendesk AI alternative", href: "/compare/zendesk-ai-alternative", text: "See another support-led comparison in the same cluster." },
      { title: "Crescora AI vs manual customer support", href: "/compare/flow-vs-manual-customer-support", text: "Compare workflow automation with fully manual support handling." },
    ],
  },
  "zendesk-ai-alternative": {
    path: "/compare/zendesk-ai-alternative",
    metadata: {
      title: "Best Zendesk AI Alternative for Business Workflow Automation",
      description:
        "Compare Crescora AI vs Zendesk AI for teams that need support automation connected to bookings, payments, documents, approvals, and wider business workflows.",
    },
    title: "Crescora AI vs Zendesk AI",
    eyebrow: "Zendesk AI alternative",
    description:
      "Zendesk AI is strong for customer service automation, agents, QA, and support operations. Crescora AI is a stronger fit when the business wants support automation connected to wider workflows such as appointments, payments, lead intake, documents, approvals, and team routing.",
    bottomLine:
      "Choose Zendesk AI when the main buying goal is customer service automation across helpdesk operations. Choose Crescora AI when support automation is only one part of a larger workflow model that also needs to handle operational actions and business follow-through.",
    rows: [
      {
        label: "Primary focus",
        flow: "Workflow automation that connects customer communication with operational next steps.",
        alternative: "Customer service AI, agents, automation, QA, and support workflows.",
      },
      {
        label: "Support coverage",
        flow: "Can support service journeys while also handling bookings, payments, documents, approvals, and routing.",
        alternative: "Strong helpdesk and service-operation coverage across customer service channels.",
      },
      {
        label: "Workflow extension",
        flow: "Better fit when support automation must branch into wider business operations.",
        alternative: "Best fit when the evaluation remains centered on support automation and service operations.",
      },
      {
        label: "Operational model",
        flow: "Designed around the full customer journey and the business actions that follow the conversation.",
        alternative: "Designed around support-team workflows, agent experience, and service quality controls.",
      },
      {
        label: "Best fit",
        flow: "Businesses that want support automation and operational workflow automation in one platform motion.",
        alternative: "Organizations optimizing customer service at helpdesk and support-team level.",
      },
      {
        label: "Where Crescora AI fits better",
        flow: "When appointments, payments, documents, approvals, or cross-team ownership need to sit beside support automation.",
        alternative: "When the program is mainly about customer service automation and support governance.",
      },
    ],
    whyFlowWins: [
      "Support automation is only part of the real workflow and the business still needs operational follow-through afterward.",
      "Bookings, payments, documents, approvals, and routing have to stay in the same journey as the customer conversation.",
      "The team wants workflow state and outcome visibility across departments, not only inside support.",
      "A service-led workflow rollout is the practical path, even if support is the first entry point.",
    ],
    whenAlternativeFits: [
      "Customer service automation is the main problem to solve and helpdesk scope dominates the evaluation.",
      "The business does not need wider operational workflows in the same platform motion.",
      "Support QA, agent operations, and helpdesk governance are the primary criteria.",
    ],
    rolloutSteps: [
      "Start with the customer journey where support work and business operations overlap most clearly.",
      "Keep bookings, documents, payments, approvals, and routing inside the workflow only where they create measurable value.",
      "Make human ownership and exception handling visible before scaling the workflow footprint.",
      "Expand into adjacent support or operational journeys once the first path is stable and trackable.",
    ],
    relatedPages: [
      { title: "Compare all AI automation platforms", href: "/compare", text: "Return to the full platform comparison hub." },
      { title: "Intercom alternative", href: "/compare/intercom-alternative", text: "Compare Crescora AI with another support-led alternative." },
      { title: "Crescora AI vs chatbots", href: "/compare/flow-vs-chatbots", text: "See why workflow completion matters beyond basic answers." },
    ],
  },
};

export const proofPages: Record<string, ProofPageData> = {
  "healthcare-front-desk-automation": {
    metadata: {
      title: "Healthcare Front Desk Automation | Proof",
      description:
        "Illustrative healthcare automation story covering enquiry intake, bookings, reminders, documents, payment follow-up, and handoff.",
    },
    title: "Healthcare Front Desk Automation",
    eyebrow: "Proof",
    description:
      "An illustrative rollout story for a clinic or hospital front desk that needs faster enquiry handling, fewer missed bookings, and cleaner handoff.",
    note: "Illustrative implementation story. Use this page until a named client case study is ready.",
    context:
      "Healthcare teams often handle a steady stream of appointment questions, follow-up reminders, document requests, and payment status checks across WhatsApp and other channels.",
    challenge: [
      "Front-desk staff spend too much time answering the same questions.",
      "Patients wait for replies when the team is busy or after hours.",
      "Appointment reminders and follow-up messages depend on manual discipline.",
      "Sensitive cases need a controlled handoff rather than an automated dead end.",
    ],
    workflow: [
      "Enquiry arrives through WhatsApp or web chat.",
      "Crescora AI identifies the intent and asks the minimum qualification questions.",
      "The appointment or follow-up workflow starts immediately.",
      "Reminders, payment follow-up, and document requests run on schedule.",
      "Sensitive or complex cases are handed to staff with full conversation context.",
      "The outcome is logged so the team can see what happened next.",
    ],
    controls: [
      "No medical diagnosis is attempted by the automation layer.",
      "Clinical judgment and sensitive decisions remain with staff.",
      "Escalation paths are visible and predictable for reception and operations teams.",
      "Workflow history supports operational review without exposing unnecessary detail.",
    ],
    outcomes: [
      "Faster first response for appointment and enquiry traffic.",
      "More consistent reminders and follow-up execution.",
      "Less manual pressure on the front desk.",
      "Cleaner handoff when a human needs to step in.",
      "Better visibility into pending patient actions and outstanding requests.",
    ],
    rolloutSteps: [
      "Start with appointment intake and first-response automation.",
      "Add reminder and rescheduling logic after the baseline is stable.",
      "Extend to document collection and payment follow-up.",
      "Introduce escalation rules and audit review for sensitive interactions.",
    ],
  },
  "real-estate-lead-operations": {
    metadata: {
      title: "Real Estate Lead Operations | Proof",
      description:
        "Illustrative real estate automation story covering lead response, qualification, site visit scheduling, assignment, and follow-up.",
    },
    title: "Real Estate Lead Operations",
    eyebrow: "Proof",
    description:
      "An illustrative rollout story for a real estate team that needs faster lead response, stronger qualification, and disciplined site visit scheduling.",
    note: "Illustrative implementation story. Use this page until a named client case study is ready.",
    context:
      "Real estate teams often receive leads from ads, websites, referrals, and WhatsApp. The operational problem is rarely lead volume alone; it is the speed and consistency of response.",
    challenge: [
      "Leads go cold when first response is delayed.",
      "Sales teams qualify inconsistently across channels and shifts.",
      "Site visit scheduling becomes a back-and-forth task.",
      "Reps forget follow-up steps when work is distributed across multiple people.",
    ],
    workflow: [
      "Lead enters from a campaign, form, or WhatsApp message.",
      "Crescora AI captures the source, intent, budget, and location signals.",
      "Qualification and routing logic assigns the lead to the right owner.",
      "Visit scheduling, reminders, and follow-up messages run automatically.",
      "The CRM is updated with the result so management can see the pipeline state.",
      "Unresolved cases move to human follow-up with full context attached.",
    ],
    controls: [
      "The automation does not replace the sales team; it makes the team faster and more consistent.",
      "Lead routing rules are explicit so ownership is not ambiguous.",
      "Conversation history stays attached to the lead record.",
      "Follow-up discipline is built into the workflow instead of relying on rep memory.",
    ],
    outcomes: [
      "Faster lead acknowledgement during and after business hours.",
      "Cleaner qualification before the rep spends manual time.",
      "Better site visit scheduling discipline.",
      "Less leakage between lead capture and sales follow-up.",
      "Improved visibility into where each lead stalls.",
    ],
    rolloutSteps: [
      "Automate lead capture and first response first.",
      "Add qualification and rep routing next.",
      "Layer in site visit scheduling and reminder loops.",
      "Connect record updates and escalation rules after the core flow is reliable.",
    ],
  },
  "education-admissions-workflow": {
    metadata: {
      title: "Education Admissions Workflow | Proof",
      description:
        "Illustrative education automation story covering enquiry handling, demo booking, reminders, documents, fee follow-up, and handoff.",
    },
    title: "Education Admissions Workflow",
    eyebrow: "Proof",
    description:
      "An illustrative rollout story for an education business that needs enquiry handling, demo booking, fee follow-up, and admissions coordination.",
    note: "Illustrative implementation story. Use this page until a named client case study is ready.",
    context:
      "Education teams handle repeated course and admissions questions, often across WhatsApp, website forms, and calls. The highest-value workflow is usually enquiry-to-demo-to-admission follow-up.",
    challenge: [
      "Counselors answer the same questions repeatedly.",
      "Demo class bookings and reminders are inconsistent.",
      "Fee follow-up and document requests require manual chasing.",
      "Leads drop off when the handoff between enquiry and counselor is unclear.",
    ],
    workflow: [
      "Enquiry enters from the web or WhatsApp.",
      "Crescora AI classifies the program interest and collects the minimum details.",
      "The demo class or counseling booking workflow starts immediately.",
      "Reminder and fee follow-up sequences run on schedule.",
      "Document requests and outstanding tasks are tracked before admissions handoff.",
      "The counselor receives the context needed to continue the conversation.",
    ],
    controls: [
      "The workflow supports the admissions team but does not replace counseling judgment.",
      "Program-specific paths can be separated without rebuilding the whole system.",
      "Escalation and handoff keep the student experience coherent.",
      "Operational visibility helps managers see where leads stall in the funnel.",
    ],
    outcomes: [
      "More consistent enquiry handling across channels.",
      "Better demo booking flow and reminder discipline.",
      "Reduced manual effort for repeated follow-ups.",
      "Cleaner counselor handoff with conversation context preserved.",
      "Improved visibility into admissions pipeline friction.",
    ],
    rolloutSteps: [
      "Start with enquiry capture and demo booking.",
      "Add reminders and counselor handoff after the baseline flow is live.",
      "Extend to fee reminders and document collection.",
      "Use the workflow history to refine admissions operations over time.",
    ],
  },
};
