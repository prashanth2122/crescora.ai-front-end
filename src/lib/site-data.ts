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
  ctaLabel: string;
  featured?: boolean;
  badge?: string;
};

export const pricingPackages: readonly PricingPackage[] = [
  {
    label: "FIRST AUTOMATION",
    title: "Starter",
    price: "₹10,000/mo",
    bestFor: "Small teams launching their first focused automation.",
    includes: [
      "1 focused workflow",
      "Web chat or demo workflow setup",
      "Basic flow setup and testing",
      "Lead capture, FAQ, booking, or follow-up use case",
      "Demo walkthrough and launch guidance",
    ],
    ctaLabel: "Start with Starter",
  },
  {
    label: "GROWING OPERATIONS",
    title: "Growth",
    price: "₹49,999/mo",
    bestFor:
      "Clinics, real estate teams, coaching centers, labs, and service businesses that need multiple automated customer journeys.",
    includes: [
      "Multiple workflows",
      "Customer follow-ups and reminders",
      "Appointment, lead, support, or payment workflow",
      "Basic reporting and workflow improvements",
      "Wider channel coverage based on scope",
    ],
    ctaLabel: "Choose Growth",
    featured: true,
    badge: "Most Popular",
  },
  {
    label: "CROSS-TEAM DELIVERY",
    title: "Business",
    price: "₹99,999/mo",
    bestFor:
      "Teams that need automation across departments, routes, handovers, integrations, and reporting.",
    includes: [
      "Multi-team workflows and routing",
      "Human handoff and escalation paths",
      "CRM, sheet, booking, or API sync support",
      "Reporting and operational visibility",
      "Priority workflow optimization",
    ],
    ctaLabel: "Choose Business",
  },
  {
    label: "COMPLEX ROLLOUTS",
    title: "Enterprise",
    price: "Custom",
    priceDetail: "Typically starts from ₹2,49,999/mo based on rollout scope.",
    bestFor:
      "Multi-location teams, regulated workflows, complex integrations, and advanced rollout requirements.",
    includes: [
      "Custom workflow architecture",
      "Advanced integrations",
      "Governance, approvals, and audit-ready workflows",
      "Rollout planning and dedicated support",
      "Multi-team automation strategy",
    ],
    ctaLabel: "Discuss My Workflow",
  },
] as const;

export type PricingRegion = "india" | "global";

export const defaultPricingRegion: PricingRegion = "india";

export const pricingRegions = [
  { value: "india", label: siteContent.pricing.regionSelector.indiaLabel },
  { value: "global", label: siteContent.pricing.regionSelector.globalLabel },
] as const satisfies ReadonlyArray<{ value: PricingRegion; label: string }>;

const globalPricingPackages: readonly PricingPackage[] = [
  {
    label: "FIRST AUTOMATION",
    title: "Starter",
    price: "$199/mo",
    bestFor: pricingPackages[0].bestFor,
    includes: pricingPackages[0].includes,
    ctaLabel: pricingPackages[0].ctaLabel,
  },
  {
    label: "GROWING OPERATIONS",
    title: "Growth",
    price: "$599/mo",
    bestFor: pricingPackages[1].bestFor,
    includes: pricingPackages[1].includes,
    ctaLabel: pricingPackages[1].ctaLabel,
    featured: pricingPackages[1].featured,
    badge: pricingPackages[1].badge,
  },
  {
    label: "CROSS-TEAM DELIVERY",
    title: "Business",
    price: "$1,199/mo",
    bestFor: pricingPackages[2].bestFor,
    includes: pricingPackages[2].includes,
    ctaLabel: pricingPackages[2].ctaLabel,
  },
  {
    label: "COMPLEX ROLLOUTS",
    title: "Enterprise",
    price: "Custom",
    priceDetail: "Typically starts from $2,999/mo based on rollout scope.",
    bestFor: pricingPackages[3].bestFor,
    includes: pricingPackages[3].includes,
    ctaLabel: pricingPackages[3].ctaLabel,
  },
] as const;

export const pricingPackagesByRegion = {
  india: pricingPackages,
  global: globalPricingPackages,
} as const satisfies Record<PricingRegion, readonly PricingPackage[]>;

export const faqItems = siteContent.homepage.faq.items;

export const leadFormOptions = siteContent.leadForm.options;

export const homepageFlowSteps = [
  "New customer enquiry received",
  "Crescora AI identifies the customer need",
  "Lead details captured",
  "Booking, payment, or document step completed",
  "Follow-up reminder scheduled",
  "Sales or support team notified",
  "Outcome tracked in dashboard",
] as const;
