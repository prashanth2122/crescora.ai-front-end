import { siteContent } from "@/lib/site-content";
import { industriesSeo } from "@/lib/india-seo-data";

export const { site, navigation, footerGroups } = siteContent;

export const homepagePainPoints = siteContent.homepage.painPoints;

export const homepageOutcomes = siteContent.homepage.outcomes.items;

export const homepageCapabilities = [
  {
    title: "Guided enquiry handling",
    text: "Keep every client enquiry moving with a repeatable path from first reply to booked next step.",
  },
  {
    title: "Multi-channel response",
    text: "Handle WhatsApp, web chat, voice, and team inboxes without losing the thread of the conversation.",
  },
  {
    title: "Human review and escalation",
    text: "Route sensitive, complex, or high-value cases to the right person with context intact.",
  },
  {
    title: "Consistent business responses",
    text: "Keep replies aligned to your business rules, offers, and approved response patterns.",
  },
  {
    title: "Connected follow-up actions",
    text: "Update records, create tasks, and trigger reminders when a step needs to move forward.",
  },
  {
    title: "Progress visibility",
    text: "Track response speed, open items, and outcome status in a way the team can act on.",
  },
] as const;

export const trustPoints = siteContent.homepage.trust.points;

export const industryCards = industriesSeo.map((industry) => ({
  title: industry.name,
  href: `/industries/${industry.slug}`,
  text: industry.description,
}));

export const useCases = [
  {
    title: "WhatsApp Automation",
    slug: "whatsapp-automation",
    href: "/use-cases/whatsapp-automation",
    text: "Turn WhatsApp enquiries into automated business workflows with qualification, booking, reminders, follow-up, and escalation.",
  },
  {
    title: "Appointment Booking",
    slug: "appointment-booking-automation",
    href: "/use-cases/appointment-booking-automation",
    text: "Reduce back-and-forth by automating availability checks, confirmation, reminders, and rescheduling.",
  },
  {
    title: "Payment Follow-Up",
    slug: "payment-follow-up-automation",
    href: "/use-cases/payment-follow-up-automation",
    text: "Send structured payment reminders and escalate unresolved cases to the right team.",
  },
  {
    title: "Document Collection",
    slug: "document-collection-automation",
    href: "/use-cases/document-collection-automation",
    text: "Request, collect, and follow up on documents without manual chasing.",
  },
  {
    title: "Customer Support",
    slug: "customer-support-automation",
    href: "/use-cases/customer-support-automation",
    text: "Handle repetitive support queries and route complex tickets with context.",
  },
  {
    title: "Human Handoff",
    slug: "human-handoff-automation",
    href: "/use-cases/human-handoff-automation",
    text: "Move conversations to humans with full history and the right next action.",
  },
] as const;

export const pricingPackages = [
  {
    title: "Starter",
    bestFor: "First project rollout",
    text: "Launch one or two focused client workflows to prove value quickly.",
  },
  {
    title: "Growth",
    bestFor: "Expanding operations",
    text: "Scale into multiple client journeys with stronger follow-up and wider coverage.",
  },
  {
    title: "Business",
    bestFor: "Cross-team delivery",
    text: "Expand into more teams and more routes for enquiries, follow-ups, and handoffs.",
  },
  {
    title: "Enterprise",
    bestFor: "Complex rollouts",
    text: "Support larger teams, custom requirements, and broader rollout planning.",
  },
] as const;

export const faqItems = siteContent.homepage.faq.items;

export const leadFormOptions = siteContent.leadForm.options;

export const homepageFlowSteps = [
  "Customer enquiry received",
  "Intent detected",
  "Workflow started",
  "Booking/payment/document step completed",
  "Reminder scheduled",
  "Human handoff available",
  "Outcome logged",
] as const;
