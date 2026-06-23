import { siteContent } from "@/lib/site-content";
import { industriesSeo } from "@/lib/india-seo-data";

export const { site, navigation, footerGroups } = siteContent;

export const homepagePainPoints = siteContent.homepage.pain.cards;

export const homepageOutcomes = siteContent.homepage.outcomes.items;

export const homepageCapabilities = [
  {
    title: "Guided enquiry handling",
    text: "Keep every enquiry moving through clear questions, reply paths, and next steps.",
  },
  {
    title: "Multi-channel response",
    text: "Handle WhatsApp, website chat, and other customer messages without losing conversation context.",
  },
  {
    title: "Human review and escalation",
    text: "Route sensitive, complex, or high-value cases to the right person with full context.",
  },
  {
    title: "Consistent business responses",
    text: "Keep replies aligned with your business rules, offers, and approved response patterns.",
  },
  {
    title: "Connected follow-up actions",
    text: "Update records, create tasks, trigger reminders, and move the next step forward.",
  },
  {
    title: "Progress visibility",
    text: "Track response speed, open items, handovers, and outcomes your team can act on.",
  },
] as const;

export const trustPoints = siteContent.homepage.trust.points;

export const industryCards = industriesSeo.map((industry) => ({
  title: industry.name,
  href: `/industries/${industry.slug}`,
  text: industry.description,
}));

export const useCases = siteContent.useCasesIndex.cards;

export type PricingPackage = {
  label: string;
  title: string;
  price: string;
  priceDetail?: string;
  bestFor: string;
  includes: readonly string[];
};

export const pricingPackages: readonly PricingPackage[] = [
  {
    label: "FIRST WORKFLOW",
    title: "Starter",
    price: "₹10,000/mo",
    bestFor: "First workflow for small teams starting automation.",
    includes: ["One focused workflow", "Basic setup and testing", "Demo walkthrough"],
  },
  {
    label: "GROWING OPERATIONS",
    title: "Growth",
    price: "₹49,999/mo",
    bestFor: "Best value plan for most hospitals, clinics, real estate teams, and service businesses.",
    includes: ["Multiple workflows", "Stronger follow-ups and reminders", "Wider coverage"],
  },
  {
    label: "CROSS-TEAM DELIVERY",
    title: "Business",
    price: "₹99,999/mo",
    bestFor: "For serious operations with teams, handoffs, integrations, and reporting.",
    includes: ["Multiple teams and routes", "Handoffs and connected systems", "Reporting and visibility"],
  },
  {
    label: "COMPLEX ROLLOUTS",
    title: "Enterprise",
    price: "Custom",
    priceDetail: "from ₹2,49,999/mo",
    bestFor: "For multi-location and complex rollout requirements.",
    includes: ["Custom workflows", "Advanced integrations", "Rollout planning and support"],
  },
] as const;

export const faqItems = siteContent.homepage.faq.items;

export const leadFormOptions = siteContent.leadForm.options;

export const homepageFlowSteps = [
  "New customer enquiry received",
  "Bot understands customer need",
  "Lead details captured",
  "Booking, payment, or document step completed",
  "Follow-up reminder scheduled",
  "Sales or support team notified",
  "Outcome tracked in dashboard",
] as const;
