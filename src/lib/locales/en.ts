import type { LocaleCopy } from "@/lib/locales";

const productName = "FLOW by Crescora AI";

export const enLocaleCopy: LocaleCopy = {
  site: {
    seoTitle: "FLOW Automation for Customer Conversations & Workflows",
    description:
      "FLOW by Crescora AI helps client businesses turn enquiries into booked calls, clear follow-ups, and completed projects across WhatsApp, web chat, voice, and team inboxes.",
  },
  language: {
    label: "Language",
    current: "English",
    switchTo: "Switch to Hindi",
  },
  header: {
    openMenuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
    closeOverlayLabel: "Close menu overlay",
  },
  footer: {
    title: `${productName} turns customer conversations into automated business outcomes.`,
    intro:
      "Built for Indian businesses that want practical automation across enquiries, bookings, follow-ups, support, payments, and operations.",
    allRightsReserved: "All rights reserved.",
    companyReferenceLabel: "Company reference:",
    productLabel: "Product:",
  },
  navigation: [
    { label: "How It Works", href: "/platform" },
    { label: "Industries", href: "/industries" },
    { label: "Solutions", href: "/solutions" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Trust", href: "/trust" },
    { label: "Proof", href: "/resources" },
  ],
  footerGroups: [
    {
      title: "Product",
      links: [
        { label: "How It Works", href: "/platform" },
        { label: "Solutions", href: "/solutions" },
        { label: "Workflows", href: "/workflows" },
        { label: "Templates", href: "/templates" },
        { label: "Pricing", href: "/pricing" },
        { label: "Use Cases", href: "/use-cases" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Hospitals", href: "/industries/hospitals" },
        { label: "Clinics", href: "/industries/clinics" },
        { label: "Education", href: "/industries/education" },
        { label: "Real Estate", href: "/industries/real-estate" },
        { label: "Support Teams", href: "/industries/support-teams" },
        { label: "Service Businesses", href: "/industries/service-businesses" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" },
        { label: "Pilot Program", href: "/proof" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Acceptable Use Policy", href: "/acceptable-use" },
      ],
    },
  ],
  ctas: {
    bookProjectDemo: { label: "Book Free Demo", href: "/contact" },
    requestScopeCall: { label: "Discuss My Workflow", href: "/contact" },
    talkToSales: { label: "Talk to Sales", href: "/contact" },
    viewSolutions: { label: "View Solutions", href: "/solutions" },
    viewBlog: { label: "View Blog", href: "/blog" },
    viewTemplates: { label: "View Templates", href: "/templates" },
    seePricing: { label: "See Pricing", href: "/pricing" },
  },
  pageActions: {
    openLocaleHub: "Open locale hub",
    openSolutionPage: "Open solution page",
    openArticle: "Open article",
    openComparePage: "Open comparison page",
    openTemplate: "Open template",
    openWorkflowPage: "Open workflow page",
    openIndustryPage: "Open industry page",
    openStateHub: "Open state hub",
  },
};
