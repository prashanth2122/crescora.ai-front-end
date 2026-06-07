import { siteContent } from "@/lib/site-content";

type LandingSection = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

export type SeoLandingPage = {
  slug: string;
  title: string;
  h1: string;
  keywordTarget: string;
  description: string;
  intro: string;
  sections: LandingSection[];
  relatedLinks: RelatedLink[];
  ctaLabel: string;
};

type BlogSection = {
  title: string;
  description: string;
  bullets: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  keywordTarget: string;
  description: string;
  summary: string;
  sections: BlogSection[];
  relatedLinks: RelatedLink[];
  ctaLabel: string;
};

export type DemoFlowTemplate = {
  slug: string;
  title: string;
  h1: string;
  problem: string;
  flowDiagram: string;
  steps: string[];
  nodesUsed: string[];
  businessBenefit: string;
  ctaLabel: string;
};

function relatedLink(label: string, href: string, description: string): RelatedLink {
  return { label, href, description };
}

function buildBlogSections(title: string, keywordTarget: string): BlogSection[] {
  return [
    {
      title: "Why this keyword matters",
      description: `The query '${keywordTarget}' signals a buyer who wants a practical workflow, not abstract AI commentary.`,
      bullets: [
        "Match the H1 and first paragraph to the search intent.",
        "Use examples from Indian businesses and one clear operational result.",
        "Keep the page focused on one job to avoid thin, generic content.",
      ],
    },
    {
      title: "What the post should explain",
      description: `Explain how ${title.toLowerCase()} changes the client journey from first message to final outcome.`,
      bullets: [
        "The pain point that causes lost leads, delays, or manual work.",
        "The workflow steps and human handoff rules that make the process reliable.",
        "The pages or assets the reader should open next.",
      ],
    },
    {
      title: "How to connect it to the site",
      description: "Every blog post should link back to money pages and proof pages so it supports the commercial SEO tree.",
      bullets: [
        "Link to the matching solution page.",
        "Link to the closest industry and template pages.",
        "Link to one comparison page for decision-stage readers.",
      ],
    },
  ];
}

export const solutionPages: SeoLandingPage[] = [
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Business Automation in India | FLOW by Crescora AI",
    h1: "Automate WhatsApp conversations, follow-ups, and workflow actions.",
    keywordTarget: "WhatsApp business automation",
    description:
      "A solution page for businesses that need repeatable response handling, booking, reminders, payments, and human handoff on WhatsApp.",
    intro:
      "Use this page to explain how FLOW handles first response, qualification, reminders, escalation, and outcome logging from the channel buyers already use.",
    sections: [
      {
        eyebrow: "Problem",
        title: "Why manual WhatsApp handling loses revenue",
        description: "Teams miss leads when the inbox is unmanaged, inconsistent, or slow.",
        bullets: [
          "After-hours enquiries sit unanswered.",
          "Follow-up discipline breaks when staff are busy.",
          "Important conversations lack context once they are handed off.",
        ],
      },
      {
        eyebrow: "How it works",
        title: "What FLOW automates on WhatsApp",
        description: "The page should be explicit about the workflow, not just the channel.",
        bullets: [
          "Lead capture and qualification.",
          "Appointment booking and confirmations.",
          "Payment reminders, document collection, and escalation.",
        ],
      },
      {
        eyebrow: "Next step",
        title: "Where the reader should go next",
        description: "Search visitors should move into templates, comparisons, and demos.",
        bullets: [
          "Open the matching workflow template.",
          "Compare FLOW with manual WhatsApp and generic bots.",
          "Book a demo if the workflow is high intent.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("WhatsApp templates", "/templates", "Workflow templates for launch-ready automations."),
      relatedLink("Compare FLOW vs manual WhatsApp", "/compare/flow-vs-manual-whatsapp", "See why manual handling breaks at scale."),
      relatedLink("Book a demo", "/contact", "Start with one client journey and a rollout plan."),
    ],
    ctaLabel: "Request WhatsApp workflow demo",
  },
  {
    slug: "ai-chatbot-builder",
    title: "No-Code AI Chatbot Builder in India | FLOW by Crescora AI",
    h1: "Build a business chatbot that books, routes, and follows up.",
    keywordTarget: "AI chatbot builder",
    description:
      "A solution page for buyers searching for a no-code chatbot builder with workflow actions, handoff, and multi-channel support.",
    intro:
      "This page should frame FLOW as a builder for customer conversations and business workflows, not just a FAQ bot or widget.",
    sections: [
      {
        eyebrow: "Buyer intent",
        title: "What people mean when they search for an AI chatbot builder",
        description: "The page should show outcomes such as booking, lead capture, and support routing.",
        bullets: [
          "No-code setup with business-friendly controls.",
          "Works across WhatsApp and web chat.",
          "Supports AI answers and human escalation.",
        ],
      },
      {
        eyebrow: "Product fit",
        title: "Where FLOW is different from generic chatbot tools",
        description: "Show the workflow layer that changes the business process, not just the bot output.",
        bullets: [
          "Templates for common Indian business journeys.",
          "Built-in records, notifications, and handoff.",
          "Analytics for operational visibility.",
        ],
      },
      {
        eyebrow: "Decision support",
        title: "What to link to from this page",
        description: "The page should support comparison, template, and pricing discovery.",
        bullets: [
          "Comparison pages for buyers comparing tools.",
          "Templates for launch-ready use cases.",
          "Pricing and demo pages for conversion.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("Customer support automation", "/solutions/customer-support-automation", "A close-fit use case for chatbot buyers."),
      relatedLink("Compare FLOW vs chatbot builders", "/compare/flow-vs-chatbot-builder", "See how workflows differ from basic bots."),
      relatedLink("Templates", "/templates", "Ready-made launch assets for common workflows."),
    ],
    ctaLabel: "Request builder demo",
  },
  {
    slug: "workflow-automation",
    title: "Business Workflow Automation Software in India | FLOW by Crescora AI",
    h1: "Automate customer-facing workflows from enquiry to outcome.",
    keywordTarget: "workflow automation software",
    description:
      "A solution page for teams that want a clear business workflow layer for conversations, tasks, reminders, and records.",
    intro:
      "Use this page to capture broader workflow intent and route visitors into the industry and template pages that match their business context.",
    sections: [
      {
        eyebrow: "Positioning",
        title: "What this page should explain",
        description: "It should not read like generic automation copy.",
        bullets: [
          "Workflow automation across WhatsApp and web chat.",
          "Human-in-the-loop support where needed.",
          "Built for Indian teams and buyer intent.",
        ],
      },
      {
        eyebrow: "Architecture",
        title: "How FLOW organizes the workflow layer",
        description: "Show the orchestration role, not only the channels.",
        bullets: [
          "Templates for the most common business journeys.",
          "State, industry, and comparison pages feeding into one graph.",
          "Analytics and CTA tracking from day one.",
        ],
      },
      {
        eyebrow: "Conversion",
        title: "What the reader should do next",
        description: "The page should push the reader toward the highest-intent path.",
        bullets: [
          "Open the relevant industry page.",
          "Review a matching template.",
          "Book a rollout demo.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("Industry pages", "/industries", "Find the vertical that matches the workflow."),
      relatedLink("Real estate automation", "/industries/real-estate", "One of the highest-intent workflow verticals."),
      relatedLink("Book a demo", "/contact", "Get a rollout plan for your process."),
    ],
    ctaLabel: "Book workflow demo",
  },
  {
    slug: "customer-support-automation",
    title: "Customer Support Automation for Small Businesses in India | FLOW by Crescora AI",
    h1: "Automate support triage, FAQ resolution, and handoff.",
    keywordTarget: "customer support automation for small business",
    description:
      "A solution page for support buyers who need FAQ handling, queue deflection, and context-rich escalation.",
    intro:
      "This page should show how FLOW handles repetitive support work without losing the ability to hand off complex or sensitive cases to humans.",
    sections: [
      {
        eyebrow: "Support pain",
        title: "Why support teams need automation",
        description: "Fast response and consistent routing are the SEO intent behind the query.",
        bullets: [
          "Repeated questions consume agent time.",
          "Customers get inconsistent answers from different channels.",
          "Escalations lose context when they move to a person.",
        ],
      },
      {
        eyebrow: "Solution",
        title: "What FLOW changes for the support desk",
        description: "The page should connect the conversation to the support process.",
        bullets: [
          "FAQ and knowledge-base answers.",
          "Human handoff with conversation history.",
          "Analytics on resolution and leakage.",
        ],
      },
      {
        eyebrow: "Trust",
        title: "Why this page should be proof-led",
        description: "Support buyers want control and visibility, not hype.",
        bullets: [
          "Show reply quality controls and escalation logic.",
          "Link to observability and template pages.",
          "Keep the page practical and specific.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("Observability template", "/templates/observability-dashboard-template", "See support leakage and conversion in one place."),
      relatedLink("Support teams", "/industries/support-teams", "Industry page for support operations."),
      relatedLink("Compare FLOW vs chatbots", "/compare/flow-vs-chatbots", "Decision-stage comparison for support buyers."),
    ],
    ctaLabel: "Request support demo",
  },
  {
    slug: "appointment-booking-automation",
    title: "Appointment Booking Automation | FLOW by Crescora AI",
    h1: "Automate appointment booking, reminders, and rescheduling.",
    keywordTarget: "appointment booking automation",
    description:
      "A solution page for businesses that need availability checks, slot confirmation, reminders, and rescheduling without manual back-and-forth.",
    intro:
      "Use this page to show how FLOW turns booking enquiries into confirmed appointments and reduces coordination load for staff.",
    sections: [
      {
        eyebrow: "Problem",
        title: "Where booking requests usually slow down",
        description: "Show the friction that happens between enquiry and confirmed slot.",
        bullets: [
          "Teams waste time checking availability manually.",
          "Customers drop off while waiting for confirmation.",
          "Reminder calls and reschedules pile up across the week.",
        ],
      },
      {
        eyebrow: "Workflow",
        title: "What FLOW automates for bookings",
        description: "The page should make the booking path obvious.",
        bullets: [
          "Availability check and slot selection.",
          "Reminder sequence and confirmation follow-up.",
          "Rescheduling support with human handover when needed.",
        ],
      },
      {
        eyebrow: "CTA",
        title: "What to do next",
        description: "Push the visitor toward the demo and the workflow menu.",
        bullets: [
          "Open the booking template.",
          "Compare the booking flow with manual scheduling.",
          "Book a demo for your team.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("Booking templates", "/templates", "Launch-ready booking flow assets."),
      relatedLink("WhatsApp automation", "/solutions/whatsapp-automation", "Channel automation for booking enquiries."),
      relatedLink("Book a demo", "/contact", "Discuss your appointment workflow."),
    ],
    ctaLabel: "Request booking demo",
  },
  {
    slug: "lead-capture-automation",
    title: "Lead Capture Automation | FLOW by Crescora AI",
    h1: "Capture leads and qualify them before they reach your team.",
    keywordTarget: "lead capture automation",
    description:
      "A solution page for businesses that want website, WhatsApp, and ad enquiries captured and qualified consistently.",
    intro:
      "This page should explain how FLOW asks qualifying questions, captures contact details, and routes high-intent leads with context.",
    sections: [
      {
        eyebrow: "Problem",
        title: "Why lead capture breaks down",
        description: "Manual lead capture often loses context before the sales team gets involved.",
        bullets: [
          "Forms and chats are inconsistent across channels.",
          "High-intent leads are not filtered quickly enough.",
          "The sales team receives incomplete details.",
        ],
      },
      {
        eyebrow: "Workflow",
        title: "What FLOW automates for leads",
        description: "Focus on the qualification journey, not just capture.",
        bullets: [
          "Lead capture from web, WhatsApp, and ads.",
          "Qualification questions and routing.",
          "Follow-up for incomplete enquiries.",
        ],
      },
      {
        eyebrow: "CTA",
        title: "What to do next",
        description: "Lead readers into the demo and workflow paths.",
        bullets: [
          "Open the lead capture template.",
          "Compare FLOW against manual enquiry handling.",
          "Book a lead automation demo.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("Lead capture workflows", "/templates", "Templates for enquiry qualification and routing."),
      relatedLink("Real estate automation", "/industries/real-estate", "A high-intent industry use case."),
      relatedLink("Book a demo", "/contact", "Map your lead routing path."),
    ],
    ctaLabel: "Request lead capture demo",
  },
  {
    slug: "payment-reminder-automation",
    title: "Payment Reminder Automation | FLOW by Crescora AI",
    h1: "Automate payment reminders and status follow-up.",
    keywordTarget: "payment reminder automation",
    description:
      "A solution page for teams that need reminder sequences, payment status capture, and escalation for overdue cases.",
    intro:
      "Use this page to show how FLOW keeps reminders timely, structured, and tied to the right next action.",
    sections: [
      {
        eyebrow: "Problem",
        title: "Why payment follow-up slips",
        description: "Manual chasing is slow and easy to lose track of.",
        bullets: [
          "Payment reminders are sent inconsistently.",
          "Status updates are scattered across chats and sheets.",
          "Overdue cases are not escalated on time.",
        ],
      },
      {
        eyebrow: "Workflow",
        title: "What FLOW automates for payments",
        description: "Show the reminder loop and escalation path.",
        bullets: [
          "Scheduled reminders and status prompts.",
          "Payment confirmation capture.",
          "Escalation for unresolved cases.",
        ],
      },
      {
        eyebrow: "CTA",
        title: "What to do next",
        description: "Direct the visitor into the rollout conversation.",
        bullets: [
          "Open the payment reminder template.",
          "Compare FLOW with manual follow-up.",
          "Book a demo for collections workflows.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("Payment templates", "/templates", "Reminder workflows for due and overdue cases."),
      relatedLink("WhatsApp automation", "/solutions/whatsapp-automation", "Channel-specific payment follow-up."),
      relatedLink("Book a demo", "/contact", "Talk through your payment workflow."),
    ],
    ctaLabel: "Request payment demo",
  },
  {
    slug: "document-collection-automation",
    title: "Document Collection Automation | FLOW by Crescora AI",
    h1: "Collect documents without repeated manual chasing.",
    keywordTarget: "document collection automation",
    description:
      "A solution page for businesses that need IDs, forms, reports, and supporting documents gathered with less back-and-forth.",
    intro:
      "This page should show how FLOW keeps document requests, follow-up, and completion tracking in one workflow.",
    sections: [
      {
        eyebrow: "Problem",
        title: "Where document collection usually breaks",
        description: "Missing files and repeated follow-up are the real friction points.",
        bullets: [
          "Staff repeat the same document request many times.",
          "Incomplete submissions slow down onboarding and processing.",
          "Nobody knows which items are still pending.",
        ],
      },
      {
        eyebrow: "Workflow",
        title: "What FLOW automates for documents",
        description: "Keep the request chain visible and controlled.",
        bullets: [
          "Document request workflow.",
          "Missing item reminders.",
          "Intake tracking and human review.",
        ],
      },
      {
        eyebrow: "CTA",
        title: "What to do next",
        description: "Move the buyer toward the relevant automation path.",
        bullets: [
          "Open the document collection template.",
          "Compare FLOW against manual chasing.",
          "Book a workflow demo.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("Document templates", "/templates", "Templates for intake and follow-up."),
      relatedLink("Education automation", "/industries/education", "Admissions and document-heavy workflows."),
      relatedLink("Book a demo", "/contact", "Plan your document workflow."),
    ],
    ctaLabel: "Request document demo",
  },
  {
    slug: "crm-api-workflow-automation",
    title: "CRM and API Workflow Automation | FLOW by Crescora AI",
    h1: "Send leads, bookings, and updates into your CRM and tools.",
    keywordTarget: "CRM and API workflow automation",
    description:
      "A solution page for businesses that need customer actions pushed into CRMs, spreadsheets, booking systems, or internal APIs.",
    intro:
      "Use this page to explain how FLOW keeps customer actions synchronized with the systems your teams already use.",
    sections: [
      {
        eyebrow: "Problem",
        title: "Where disconnected systems slow teams down",
        description: "Manual re-entry causes delay, mistakes, and missing visibility.",
        bullets: [
          "Teams retype the same lead or booking data across tools.",
          "Status changes do not reach downstream systems.",
          "Reporting becomes fragmented across systems.",
        ],
      },
      {
        eyebrow: "Workflow",
        title: "What FLOW automates across systems",
        description: "The page should show concrete data movement.",
        bullets: [
          "CRM lead creation and updates.",
          "Spreadsheet or dashboard sync.",
          "Internal API handoff for downstream teams.",
        ],
      },
      {
        eyebrow: "CTA",
        title: "What to do next",
        description: "Route the reader into a practical demo conversation.",
        bullets: [
          "Open the CRM sync template.",
          "Compare FLOW against manual data entry.",
          "Book a demo for your stack.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("CRM sync templates", "/templates", "Practical workflow-to-system templates."),
      relatedLink("Workflow automation", "/solutions/workflow-automation", "The broader product layer."),
      relatedLink("Book a demo", "/contact", "Map your integration path."),
    ],
    ctaLabel: "Request integration demo",
  },
  {
    slug: "human-handover-automation",
    title: "Human Handover Automation | FLOW by Crescora AI",
    h1: "Move sensitive or complex conversations to the right person.",
    keywordTarget: "human handover automation",
    description:
      "A solution page for businesses that need structured handover, context transfer, and escalation visibility.",
    intro:
      "This page should make it clear that FLOW supports automation without losing human control when the case becomes high value or sensitive.",
    sections: [
      {
        eyebrow: "Problem",
        title: "Why handover needs structure",
        description: "Context gets lost when a conversation just gets passed along.",
        bullets: [
          "Sensitive conversations need a human decision.",
          "The next person often lacks full context.",
          "Teams need visibility into who owns the next action.",
        ],
      },
      {
        eyebrow: "Workflow",
        title: "What FLOW automates around handover",
        description: "Keep the escalation path clear and trackable.",
        bullets: [
          "Handover rules and priority routing.",
          "Context transfer and next-action visibility.",
          "SLA and escalation tracking.",
        ],
      },
      {
        eyebrow: "CTA",
        title: "What to do next",
        description: "Move the reader into the rollout conversation.",
        bullets: [
          "Open the handover template.",
          "Compare FLOW with basic bot escalation.",
          "Book a demo for your support or sales team.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("Handover templates", "/templates", "Templates that keep human control visible."),
      relatedLink("Customer support automation", "/solutions/customer-support-automation", "Context-rich escalation and support."),
      relatedLink("Book a demo", "/contact", "Discuss your escalation path."),
    ],
    ctaLabel: "Request handover demo",
  },
];

const blogSpecs = [
  ["How WhatsApp automation helps small businesses in India", "WhatsApp automation", "whatsapp automation small businesses India"],
  ["Best AI chatbot use cases for hospitals and clinics", "Healthcare", "AI chatbot for hospitals India"],
  ["How to automate appointment booking using WhatsApp", "Appointments", "WhatsApp appointment booking automation"],
  ["WhatsApp chatbot vs website chatbot: which is better?", "Comparison", "WhatsApp chatbot vs website chatbot"],
  ["How real estate businesses can automate lead follow-ups", "Real Estate", "real estate lead follow up automation"],
  ["Customer support automation ideas for Indian businesses", "Support", "customer support automation Indian businesses"],
  ["How clinics can reduce front desk calls with automation", "Healthcare", "clinic appointment chatbot India"],
  ["What is no-code chatbot automation?", "Education", "no code chatbot automation"],
  ["How to automate payment reminders for customers", "Payments", "payment reminder automation"],
  ["Best chatbot workflows for hospitals", "Healthcare", "hospital chatbot workflows"],
  ["How AI can reduce missed appointments", "Appointments", "AI reduce missed appointments"],
  ["How to collect leads automatically from website and WhatsApp", "Lead Gen", "collect leads from website and WhatsApp"],
  ["How to automate FAQs for business support", "Support", "automate FAQs for business support"],
  ["How to use human handoff in chatbot automation", "Support", "human handoff chatbot automation"],
  ["WhatsApp Business API automation explained", "WhatsApp", "WhatsApp Business API automation"],
  ["AI chatbot pricing in India: what businesses should know", "Pricing", "AI chatbot pricing India"],
  ["How to automate customer follow-ups after enquiry", "Follow-up", "automate customer follow-ups after enquiry"],
  ["Best workflow automation examples for service businesses", "Service", "workflow automation examples service businesses"],
  ["How to build a hospital demo chatbot", "Healthcare", "build hospital demo chatbot"],
  ["Why small businesses need conversation automation", "Small Business", "small business conversation automation"],
] as const;

export const blogPosts: BlogPost[] = blogSpecs.map(([title, category, keywordTarget]) => {
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return {
    slug,
    title,
    category,
    keywordTarget,
    description: `Practical SEO article for ${keywordTarget} with business-focused examples for Indian buyers.`,
    summary: `Use this article to target ${keywordTarget} while linking into solution, industry, comparison, and template pages.`,
    sections: buildBlogSections(title, keywordTarget),
    relatedLinks: [
      relatedLink("Solutions hub", "/solutions", "Browse the core solution pages."),
      relatedLink("Templates", "/templates", "Find launch-ready workflow templates."),
      relatedLink("Compare FLOW", "/compare", "Decision-stage comparison content."),
    ],
    ctaLabel: `Read the ${category.toLowerCase()} workflow`,
  };
});

export const demoFlowTemplates: DemoFlowTemplate[] = [
  {
    slug: "hospital-appointment-booking-flow",
    title: "Hospital Appointment Booking Flow | FLOW",
    h1: "A ready-to-publish hospital appointment booking flow.",
    problem: "Hospitals lose time when appointment requests, reminders, and confirmations are handled manually.",
    flowDiagram: "Enquiry -> availability check -> booking -> reminder -> handoff -> outcome log",
    steps: [
      "Capture the patient enquiry from WhatsApp or web chat.",
      "Check availability and confirm the booking slot.",
      "Send reminders and handoff exceptions to staff.",
    ],
    nodesUsed: ["appointment", "notification", "scheduler", "handover", "record"],
    businessBenefit: "Reduce front-desk load and missed appointments while keeping staff in control.",
    ctaLabel: "Use this automation for your business",
  },
  {
    slug: "real-estate-lead-followup-flow",
    title: "Real Estate Lead Follow-Up Flow | FLOW",
    h1: "A lead follow-up flow for property teams.",
    problem: "Property leads go stale quickly when qualification and follow-up are manual.",
    flowDiagram: "Lead capture -> qualification -> assignment -> visit booking -> reminder -> follow-up",
    steps: [
      "Capture property enquiry and qualify the buyer intent.",
      "Assign the lead to the right rep or office.",
      "Book a site visit and send reminders automatically.",
    ],
    nodesUsed: ["record", "scheduler", "notification", "handover", "audit log"],
    businessBenefit: "Move high-intent leads into site visits faster with consistent follow-up.",
    ctaLabel: "Use this automation for your business",
  },
  {
    slug: "customer-support-faq-flow",
    title: "Customer Support FAQ Flow | FLOW",
    h1: "A support workflow for FAQ and escalation.",
    problem: "Support teams need to answer common questions fast without losing context on escalations.",
    flowDiagram: "Question -> grounded answer -> unresolved check -> handoff -> ticket/update",
    steps: [
      "Resolve common FAQs with grounded answers.",
      "Escalate edge cases with full conversation context.",
      "Track leakage and response quality in analytics.",
    ],
    nodesUsed: ["ai grounded answers", "handover", "record", "audit log", "notification"],
    businessBenefit: "Deflect repetitive support and preserve human time for high-value cases.",
    ctaLabel: "Use this automation for your business",
  },
  {
    slug: "payment-reminder-flow",
    title: "Payment Reminder Flow | FLOW",
    h1: "A workflow for reminders, follow-up, and escalation.",
    problem: "Payment follow-up is expensive when it depends on manual calls and one-off reminders.",
    flowDiagram: "Due date -> reminder -> retry -> escalation -> status update",
    steps: [
      "Trigger reminders based on invoice or due-date status.",
      "Retry with clear escalation rules.",
      "Update records when payment is confirmed.",
    ],
    nodesUsed: ["notification", "scheduler", "record", "handover", "audit log"],
    businessBenefit: "Improve collections discipline without increasing manual effort.",
    ctaLabel: "Use this automation for your business",
  },
  {
    slug: "lab-report-notification-flow",
    title: "Lab Report Notification Flow | FLOW",
    h1: "A notification flow for healthcare document updates.",
    problem: "Patients need timely report updates and staff need a repeatable process for notices.",
    flowDiagram: "Report ready -> notify -> confirm receipt -> handoff if needed",
    steps: [
      "Trigger a message when the report is ready.",
      "Confirm receipt or route to human help when necessary.",
      "Record the completion status for auditability.",
    ],
    nodesUsed: ["notification", "record", "handover", "audit log", "file processing"],
    businessBenefit: "Reduce repeated calls and improve patient communication consistency.",
    ctaLabel: "Use this automation for your business",
  },
];

export const industrySeoLandingPages: SeoLandingPage[] = [
  {
    slug: "hospital-automation",
    title: "Hospital Automation Software in India | FLOW by Crescora AI",
    h1: "Automate hospital appointments, patient support, reminders, and handoffs.",
    keywordTarget: "hospital automation software India",
    description:
      "SEO landing page for hospitals and clinics that need appointment booking, patient support, payments, and lab updates.",
    intro:
      "This page should combine the words hospitals already search for with the operational flows that matter inside a front desk and patient support team.",
    sections: [
      {
        eyebrow: "Problems",
        title: "What hospitals need to fix first",
        description: "The page should lead with the pain points, not the feature list.",
        bullets: [
          "Front desk overload and missed calls.",
          "Appointment confirmations and reminders.",
          "Payment follow-up and patient document updates.",
        ],
      },
      {
        eyebrow: "Workflows",
        title: "What FLOW should show",
        description: "Use business workflows that match the SEO intent.",
        bullets: [
          "Appointment booking and doctor availability.",
          "Lab report notification and reminders.",
          "Human handoff for sensitive or urgent cases.",
        ],
      },
      {
        eyebrow: "CTA",
        title: "What to offer next",
        description: "The buyer should move into the healthcare demo path.",
        bullets: [
          "Book a healthcare demo.",
          "Open the hospital booking template.",
          "Compare FLOW against manual workflows.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("Hospital booking template", "/templates/hospital-appointment-booking-flow", "Launch-ready hospital automation."),
      relatedLink("Healthcare use case", "/industries/hospitals", "Existing healthcare-focused industry page."),
      relatedLink("Book demo", "/contact", "Talk through a healthcare rollout."),
    ],
    ctaLabel: "Request hospital automation demo",
  },
  {
    slug: "real-estate-automation",
    title: "Real Estate Lead Automation Software in India | FLOW",
    h1: "Automate property lead follow-up, qualification, and site visits.",
    keywordTarget: "real estate lead automation India",
    description:
      "A real estate landing page designed for lead automation, visit booking, and agent assignment.",
    intro:
      "This page should capture real estate intent and push into templates, comparison pages, and the booking flow that turns enquiries into visits.",
    sections: [
      {
        eyebrow: "Problems",
        title: "Why property teams need workflow automation",
        description: "Speed and consistency are the ranking and conversion drivers.",
        bullets: [
          "Leads go cold when follow-up is slow.",
          "Property qualification is inconsistent.",
          "Site visits and rep handoff need a defined flow.",
        ],
      },
      {
        eyebrow: "Workflows",
        title: "What FLOW should show for real estate",
        description: "The page should be specific about the lead journey.",
        bullets: [
          "Lead capture from WhatsApp and web forms.",
          "Qualification, routing, and site visit scheduling.",
          "Escalation for high-intent opportunities.",
        ],
      },
      {
        eyebrow: "CTA",
        title: "What to offer next",
        description: "Move the visitor into a template or a demo.",
        bullets: [
          "Open the real estate follow-up flow.",
          "Compare FLOW against manual lead management.",
          "Book a sales walkthrough.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("Real estate follow-up template", "/templates/real-estate-lead-followup-flow", "A launch-ready real estate workflow."),
      relatedLink("Real estate industry page", "/industries/real-estate", "Existing vertical page for property teams."),
      relatedLink("Compare FLOW vs CRM-only", "/compare/flow-vs-crm-only", "See why workflow matters before the CRM."),
    ],
    ctaLabel: "Request real estate automation demo",
  },
  {
    slug: "education-automation",
    title: "Education Admission Automation in India | FLOW",
    h1: "Automate enquiry handling, admissions follow-up, and counselor handoff.",
    keywordTarget: "education automation India",
    description:
      "A school, college, and admissions landing page for enquiry automation and demo class booking.",
    intro:
      "This page should frame FLOW as the system that captures enquiries, books demo classes, and keeps admissions moving.",
    sections: [
      {
        eyebrow: "Problems",
        title: "What education teams lose to manual follow-up",
        description: "Admissions pipelines fail when response times and reminders slip.",
        bullets: [
          "Course and fee questions repeat constantly.",
          "Demo class opportunities get missed.",
          "Counselor handoff lacks clarity and timing.",
        ],
      },
      {
        eyebrow: "Workflows",
        title: "What FLOW should show for education",
        description: "Focus on admission journey automation.",
        bullets: [
          "Course enquiry response and demo booking.",
          "Fee reminders and follow-up messages.",
          "Counselor routing for high-intent students.",
        ],
      },
      {
        eyebrow: "CTA",
        title: "What to offer next",
        description: "Move the reader toward the admissions demo and template.",
        bullets: [
          "Open the admissions flow template.",
          "Compare FLOW against manual support.",
          "Book a demo for the admissions team.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("Admissions template", "/templates/customer-support-faq-flow", "Template for handling enquiries and escalations."),
      relatedLink("Education industry page", "/industries/education", "Existing education-focused page."),
      relatedLink("Proof page", "/proof/education-admissions-workflow", "Illustrative rollout narrative."),
    ],
    ctaLabel: "Request admissions demo",
  },
  {
    slug: "small-business-automation",
    title: "Small Business Automation Software in India | FLOW",
    h1: "Automate support, booking, reminders, and follow-ups for small businesses.",
    keywordTarget: "small business automation software India",
    description:
      "A small business landing page that combines WhatsApp automation, bookings, support, and payments.",
    intro:
      "This page should target buyers who want a broad automation platform but still need clear examples of what FLOW does for a small business.",
    sections: [
      {
        eyebrow: "Problems",
        title: "Where small businesses lose time",
        description: "This page should sound commercial, not abstract.",
        bullets: [
          "Leads arrive from WhatsApp, web chat, and calls.",
          "Follow-up is inconsistent across the team.",
          "Payment reminders and support requests pile up.",
        ],
      },
      {
        eyebrow: "Workflows",
        title: "What FLOW should show for small businesses",
        description: "Keep the page concrete and practical.",
        bullets: [
          "Appointment booking and reminders.",
          "Support triage and handoff.",
          "Payment follow-up and customer updates.",
        ],
      },
      {
        eyebrow: "CTA",
        title: "What to offer next",
        description: "The page should funnel buyers to the right next step.",
        bullets: [
          "Open the small-business template.",
          "Compare FLOW vs manual support.",
          "Book a demo for a business workflow.",
        ],
      },
    ],
    relatedLinks: [
      relatedLink("Service business template", "/templates/service-business-booking-template", "A launch-ready small-business workflow."),
      relatedLink("WhatsApp solution", "/solutions/whatsapp-automation", "Core channel automation page."),
      relatedLink("Pricing", "/pricing", "See package-based pricing for rollout."),
    ],
    ctaLabel: "Request small business demo",
  },
];

export const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
export const solutionRoutes = solutionPages.map((page) => `/solutions/${page.slug}`);
export const industryLandingRoutes = industrySeoLandingPages.map((page) => `/industries/${page.slug}`);
export const demoFlowRoutes = demoFlowTemplates.map((template) => `/templates/${template.slug}`);

export const articleSchemaForPost = (post: BlogPost) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.description,
  mainEntityOfPage: `https://crescora.ai/blog/${post.slug}`,
  author: {
    "@type": "Organization",
    name: siteContent.site.name,
  },
  publisher: {
    "@type": "Organization",
    name: siteContent.site.name,
  },
});
