import type { StateSeoSeed } from "@/lib/state-seo-seeds";

export type StateWorkflowSlug =
  | "whatsapp-automation"
  | "appointment-booking"
  | "payments"
  | "document-collection"
  | "customer-support"
  | "reminders"
  | "human-handoff";

export type StateWorkflowSeoConfig = {
  slug: StateWorkflowSlug;
  label: string;
  titleNoun: string;
  metadataFocus: string;
  businessOutcomeLine: string;
  localUseCaseLine: string;
  launchFocusLine: string;
  ctaLabel: string;
};

export const stateWorkflowSeoBySlug: Record<StateWorkflowSlug, StateWorkflowSeoConfig> = {
  "whatsapp-automation": {
    slug: "whatsapp-automation",
    label: "WhatsApp automation",
    titleNoun: "WhatsApp automation",
    metadataFocus: "lead capture, bookings, support, and follow-ups",
    businessOutcomeLine:
      "Turn incoming conversations into structured lead capture, qualification, routing, booking, and follow-up instead of manual chat chasing.",
    localUseCaseLine:
      "Best for teams that need faster enquiry response, cleaner qualification, and more reliable follow-up from one WhatsApp-first workflow.",
    launchFocusLine:
      "Start with the highest-volume enquiry path, then expand into reminders, payments, support, and handoff once the first workflow proves value.",
    ctaLabel: "Book WhatsApp Workflow Demo",
  },
  "appointment-booking": {
    slug: "appointment-booking",
    label: "Appointment booking automation",
    titleNoun: "appointment booking",
    metadataFocus: "enquiries, confirmations, reminders, and reschedules",
    businessOutcomeLine:
      "Move customers from enquiry to confirmed slot with cleaner intake, reminders, reschedules, and staff visibility.",
    localUseCaseLine:
      "Best for clinics, hospitals, education teams, hospitality operators, and service businesses that lose conversions during manual coordination.",
    launchFocusLine:
      "Start with intake, slot capture, confirmation, reminder, and reschedule logic before expanding into payments and post-visit follow-up.",
    ctaLabel: "Book Appointment Workflow Demo",
  },
  payments: {
    slug: "payments",
    label: "Payment reminder automation",
    titleNoun: "payment follow-up",
    metadataFocus: "collections, payment reminders, and billing visibility",
    businessOutcomeLine:
      "Reduce manual collections work with scheduled reminders, payment links, verification steps, and overdue escalation paths.",
    localUseCaseLine:
      "Best for teams that need to recover pending payments, reduce billing delays, and keep finance follow-ups visible.",
    launchFocusLine:
      "Start with due reminders and payment confirmations, then expand into failed-payment recovery, receipts, and billing handoff.",
    ctaLabel: "Book Payment Workflow Demo",
  },
  "document-collection": {
    slug: "document-collection",
    label: "Document collection automation",
    titleNoun: "document collection",
    metadataFocus: "intake, missing files, and review follow-ups",
    businessOutcomeLine:
      "Collect required documents, identify missing items, track submission status, and route reviews without scattered manual follow-up.",
    localUseCaseLine:
      "Best for regulated, intake-heavy, or onboarding-heavy teams that need clean document status and fewer back-and-forth messages.",
    launchFocusLine:
      "Start with submission guidance, missing-file reminders, and review routing before expanding into approvals, audit visibility, and exceptions.",
    ctaLabel: "Book Document Workflow Demo",
  },
  "customer-support": {
    slug: "customer-support",
    label: "Customer support automation",
    titleNoun: "customer support",
    metadataFocus: "FAQ resolution, issue triage, and human handoff",
    businessOutcomeLine:
      "Answer repeated questions faster, triage support requests cleanly, and escalate complex issues with the right conversation context.",
    localUseCaseLine:
      "Best for teams managing high support volume, repetitive questions, and slower response quality across channels.",
    launchFocusLine:
      "Start with approved answers, fallback rules, and escalation routing before expanding into analytics, queues, and support dashboards.",
    ctaLabel: "Book Support Workflow Demo",
  },
  reminders: {
    slug: "reminders",
    label: "Reminder automation",
    titleNoun: "reminder and follow-up automation",
    metadataFocus: "appointments, payments, documents, and follow-ups",
    businessOutcomeLine:
      "Prevent missed actions with scheduled reminders, callback follow-ups, status nudges, and cleaner visibility into what still needs attention.",
    localUseCaseLine:
      "Best for teams that depend on follow-up timing for bookings, collections, document completion, or customer response.",
    launchFocusLine:
      "Start with one reminder path that directly protects revenue or service quality, then expand into more timed workflows and escalations.",
    ctaLabel: "Book Reminder Workflow Demo",
  },
  "human-handoff": {
    slug: "human-handoff",
    label: "Human handoff automation",
    titleNoun: "human handoff",
    metadataFocus: "escalations, queues, and context transfer",
    businessOutcomeLine:
      "Route complex conversations to the right human owner with the right summary, signals, and next-step visibility.",
    localUseCaseLine:
      "Best for teams where automation should not guess and where staff need cleaner escalation, queue assignment, and context continuity.",
    launchFocusLine:
      "Start with clear escalation triggers, queue ownership, and handoff summaries before expanding into SLA visibility and outcome tracking.",
    ctaLabel: "Book Handoff Workflow Demo",
  },
};

export const stateWorkflowSlugsByState: Record<string, StateWorkflowSlug[]> = {
  maharashtra: ["whatsapp-automation", "appointment-booking", "payments"],
  "uttar-pradesh": ["whatsapp-automation", "appointment-booking", "document-collection"],
  "tamil-nadu": ["appointment-booking", "customer-support", "document-collection"],
  "west-bengal": ["appointment-booking", "reminders", "customer-support"],
  karnataka: ["customer-support", "human-handoff", "reminders"],
  "madhya-pradesh": ["whatsapp-automation", "payments", "document-collection"],
  rajasthan: ["appointment-booking", "payments", "reminders"],
  gujarat: ["payments", "document-collection", "customer-support"],
  bihar: ["whatsapp-automation", "appointment-booking", "customer-support"],
  "andhra-pradesh": ["appointment-booking", "document-collection", "human-handoff"],
  telangana: ["whatsapp-automation", "payments", "document-collection"],
  odisha: ["appointment-booking", "reminders", "customer-support"],
  "jammu-and-kashmir": ["whatsapp-automation", "appointment-booking"],
  uttarakhand: ["appointment-booking", "reminders"],
  "himachal-pradesh": ["appointment-booking", "customer-support"],
  tripura: ["whatsapp-automation", "appointment-booking"],
  goa: ["appointment-booking", "customer-support"],
  puducherry: ["appointment-booking", "customer-support"],
  chandigarh: ["appointment-booking", "customer-support"],
  manipur: ["whatsapp-automation", "appointment-booking"],
  nagaland: ["whatsapp-automation", "customer-support"],
  meghalaya: ["whatsapp-automation", "appointment-booking"],
  mizoram: ["whatsapp-automation", "customer-support"],
  "arunachal-pradesh": ["whatsapp-automation", "appointment-booking"],
  sikkim: ["appointment-booking", "customer-support"],
  "andaman-and-nicobar-islands": ["appointment-booking", "customer-support"],
  ladakh: ["appointment-booking", "customer-support"],
  "dadra-and-nagar-haveli-and-daman-and-diu": ["whatsapp-automation", "appointment-booking"],
  lakshadweep: ["appointment-booking", "customer-support"],
  assam: ["whatsapp-automation", "appointment-booking", "customer-support"],
  chhattisgarh: ["whatsapp-automation", "appointment-booking", "payments"],
  haryana: ["whatsapp-automation", "appointment-booking", "customer-support"],
  jharkhand: ["whatsapp-automation", "appointment-booking", "customer-support"],
  kerala: ["appointment-booking", "customer-support", "payments"],
  punjab: ["whatsapp-automation", "appointment-booking", "customer-support"],
  delhi: ["whatsapp-automation", "customer-support", "payments"],
};

export function formatStateSeoList(items: string[]) {
  if (items.length <= 1) {
    return items[0] ?? "";
  }

  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }

  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export function getStateWorkflowSlugs(stateSlug: string) {
  return stateWorkflowSlugsByState[stateSlug] ?? [];
}

export function isSupportedStateWorkflow(stateSlug: string, workflowSlug: string): workflowSlug is StateWorkflowSlug {
  return getStateWorkflowSlugs(stateSlug).includes(workflowSlug as StateWorkflowSlug);
}

export function buildStateWorkflowTitle(seed: StateSeoSeed, config: StateWorkflowSeoConfig) {
  return `${config.label} in ${seed.name} for ${config.metadataFocus} | Crescora AI`;
}

export function buildStateWorkflowDescription(seed: StateSeoSeed, config: StateWorkflowSeoConfig) {
  return `Crescora AI helps businesses in ${seed.name} use ${config.titleNoun} workflows to reduce ${seed.primaryPain} across ${seed.cityClusters.join(", ")} with ${seed.languages.join(", ")} support for ${seed.industries.join(", ")}.`;
}

export function buildStateWorkflowFaqItems(seed: StateSeoSeed, config: StateWorkflowSeoConfig) {
  return [
    {
      question: `Why do businesses in ${seed.name} use ${config.titleNoun} automation?`,
      answer: `Businesses in ${seed.name} use ${config.titleNoun} automation to reduce ${seed.primaryPain}. Crescora AI helps teams route conversations, capture the right details, send follow-ups, and move each customer toward a clear operational outcome.`,
    },
    {
      question: `Which industries in ${seed.name} benefit from ${config.titleNoun} workflows?`,
      answer: `${formatStateSeoList(seed.industries)} in ${seed.name} benefit when they need ${config.localUseCaseLine.toLowerCase()}`,
    },
    {
      question: `Can Crescora AI support ${formatStateSeoList(seed.languages)} customer journeys in ${seed.name}?`,
      answer: `Yes. Crescora AI can support ${formatStateSeoList(seed.languages)} prompts, FAQ paths, forms, reminders, routing, and handoff logic depending on the rollout scope and language coverage your team needs in ${seed.name}.`,
    },
    {
      question: `What should be included in a ${config.titleNoun} rollout for ${seed.name}?`,
      answer: `A strong rollout in ${seed.name} should include intake logic, workflow rules, reminders or next-step actions, records visibility, exception handling, and human handoff when automation should not guess.`,
    },
    {
      question: `Can Crescora AI connect ${config.titleNoun} workflows with records, analytics, and human handoff?`,
      answer: `Yes. Crescora AI can connect ${config.titleNoun} workflows with AI routing, forms, records, notifications, payment or document steps, analytics, queues, and human handoff so customer conversations stay operationally visible.`,
    },
  ];
}
