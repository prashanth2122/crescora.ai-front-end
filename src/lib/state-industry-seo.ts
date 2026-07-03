import type { StateSeoSeed } from "@/lib/state-seo-seeds";

export type StateIndustrySlug =
  | "hospitals"
  | "clinics"
  | "support-teams"
  | "service-businesses";

export type StateIndustrySeoConfig = {
  slug: StateIndustrySlug;
  label: string;
  titleNoun: string;
  metadataFocus: string;
  buyerLine: string;
  workflowLine: string;
  launchLine: string;
  ctaLabel: string;
  outcomeAreas: string[];
};

export const stateIndustrySeoBySlug: Record<StateIndustrySlug, StateIndustrySeoConfig> = {
  hospitals: {
    slug: "hospitals",
    label: "Hospital automation",
    titleNoun: "hospital automation",
    metadataFocus: "appointments, patient support, reminders, and follow-ups",
    buyerLine:
      "Hospitals need faster front-desk response, better patient routing, clearer reminders, cleaner document follow-up, and safe human escalation.",
    workflowLine:
      "Best for hospitals, diagnostics, and healthcare teams that need patient enquiries, appointment coordination, reminders, billing guidance, reports, and escalations under one workflow layer.",
    launchLine:
      "Start with one high-friction patient journey such as appointment booking, doctor availability, report support, or billing help, then expand into reminders, documents, and escalation paths.",
    ctaLabel: "Book Free Demo",
    outcomeAreas: ["Patient enquiries", "Appointments", "Reminders", "Reports and documents", "Billing and handoff"],
  },
  clinics: {
    slug: "clinics",
    label: "Clinic automation",
    titleNoun: "clinic automation",
    metadataFocus: "appointments, reminders, follow-ups, and patient support",
    buyerLine:
      "Clinics need cleaner booking coordination, fewer repeated calls, better reminder discipline, and safer handoff for sensitive patient cases.",
    workflowLine:
      "Best for clinics and healthcare teams that need enquiry capture, appointment booking, reminders, consultation fee follow-up, FAQs, and staff escalation.",
    launchLine:
      "Start with appointment intake, slot coordination, reminders, and reschedules before expanding into payments, document collection, and human handoff.",
    ctaLabel: "Book Free Demo",
    outcomeAreas: ["Booking enquiries", "Doctor or service selection", "Reminders", "Fee follow-up", "Patient handoff"],
  },
  "support-teams": {
    slug: "support-teams",
    label: "Support automation",
    titleNoun: "support automation",
    metadataFocus: "FAQ resolution, triage, escalations, and support visibility",
    buyerLine:
      "Support teams need faster answer quality, less repetitive manual work, clearer escalation, and better visibility into queue pressure and unresolved cases.",
    workflowLine:
      "Best for support operations that need approved answers, ticket triage, handoff rules, status updates, and operational visibility across high-volume conversations.",
    launchLine:
      "Start with FAQ resolution and escalation routing, then expand into analytics, queue ownership, SLA tracking, and support outcome reporting.",
    ctaLabel: "Book Free Demo",
    outcomeAreas: ["Approved answers", "Issue triage", "Escalation paths", "Queue visibility", "Support outcomes"],
  },
  "service-businesses": {
    slug: "service-businesses",
    label: "Service business automation",
    titleNoun: "service business automation",
    metadataFocus: "bookings, reminders, collections, and follow-ups",
    buyerLine:
      "Service businesses need better enquiry handling, more reliable booking follow-up, stronger payment collection, and cleaner customer communication after the first message.",
    workflowLine:
      "Best for booking-driven and follow-up-heavy teams that need enquiries, confirmations, reminders, payments, documents, and customer updates inside one operating layer.",
    launchLine:
      "Start with the workflow closest to revenue, such as lead capture, appointment booking, reminder automation, or collections follow-up, then expand into support and visibility.",
    ctaLabel: "Book Free Demo",
    outcomeAreas: ["Enquiries", "Bookings", "Reminders", "Payments", "Customer updates"],
  },
};

export function formatStateIndustryList(items: string[]) {
  if (items.length <= 1) {
    return items[0] ?? "";
  }

  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }

  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export function buildStateIndustryTitle(seed: StateSeoSeed, config: StateIndustrySeoConfig) {
  return `${config.label} in ${seed.name} for ${config.metadataFocus} | Crescora AI`;
}

export function buildStateIndustryDescription(seed: StateSeoSeed, config: StateIndustrySeoConfig) {
  return `Crescora AI supports ${config.label.toLowerCase()} in ${seed.name} across ${seed.cityClusters.join(", ")}. The rollout can support ${seed.languages.join(", ")} customer journeys for ${seed.industries.join(", ")}.`;
}

export function buildStateIndustryFaqItems(seed: StateSeoSeed, config: StateIndustrySeoConfig) {
  return [
    {
      question: `Why do ${config.titleNoun} teams in ${seed.name} choose Crescora AI?`,
      answer: `${config.titleNoun} teams in ${seed.name} choose Crescora AI because they need to reduce ${seed.primaryPain} while keeping conversations, workflow state, reminders, records, and human escalation under one controlled system.`,
    },
    {
      question: `What should ${config.titleNoun} teams in ${seed.name} automate first?`,
      answer: `Start with the highest-friction workflow in ${seed.name}, such as the process most affected by ${seed.primaryPain}. The best first rollout is usually the one closest to bookings, collections, service quality, or staff workload reduction.`,
    },
    {
      question: `Can Crescora AI support ${formatStateIndustryList(seed.languages)} customer journeys in ${seed.name}?`,
      answer: `Yes. Crescora AI can support ${formatStateIndustryList(seed.languages)} prompts, FAQs, reminders, routing, records, and handoff paths depending on the rollout scope and language coverage needed in ${seed.name}.`,
    },
    {
      question: `Can Crescora AI connect ${config.titleNoun} workflows with human handoff and analytics?`,
      answer: `Yes. Crescora AI can connect ${config.titleNoun} workflows with AI routing, forms, records, reminders, payment or document steps, analytics, queue visibility, and human handoff so teams in ${seed.name} can manage the full customer journey cleanly.`,
    },
    {
      question: `Which cities in ${seed.name} should this rollout prioritize?`,
      answer: `Most teams should prioritize the strongest demand clusters in ${seed.name}, such as ${seed.cityClusters.join(", ")}, while keeping one reusable operating model across the broader state rollout.`,
    },
  ];
}
