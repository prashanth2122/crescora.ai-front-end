import type { LocaleCopy } from "@/lib/locales";

const productName = "Crescora AI";

export const enLocaleCopy: LocaleCopy = {
  site: {
    seoTitle: "AI Workflow Automation for Customer Conversations and Operations",
    description:
      "Crescora AI helps businesses automate enquiries, bookings, reminders, payments, documents, support, and human handover across customer channels and internal workflows.",
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
    bookCallLabel: "Book a Call",
    whatsappLabel: "Chat on WhatsApp",
    supportWidgetLabel: "Support",
    emailLabel: "Email",
    callLabel: "Call",
    openSupportWidgetLabel: "Open support menu",
    closeSupportWidgetLabel: "Close support menu",
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
    { label: "Product", href: "/platform" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Workflow Examples", href: "/workflow-examples" },
    { label: "Templates", href: "/templates" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  footerGroups: [
    {
      title: "Product",
      links: [
        { label: "Platform Overview", href: "/platform" },
        { label: "Solutions", href: "/solutions" },
        { label: "Workflow Examples", href: "/workflow-examples" },
        { label: "Workflows", href: "/workflows" },
        { label: "Templates", href: "/templates" },
        { label: "Pricing", href: "/pricing" },
        { label: "Integrations", href: "/platform" },
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
        { label: "Support", href: "/support" },
        { label: "Security", href: "/security" },
        { label: "Responsible AI", href: "/responsible-ai" },
      ],
    },
    {
      title: "Trust and Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Acceptable Use Policy", href: "/acceptable-use" },
        { label: "Data Processing", href: "/data-processing" },
        { label: "Subprocessors", href: "/subprocessors" },
      ],
    },
  ],
  ctas: {
    bookProjectDemo: { label: "Book Free Demo", href: "/contact" },
    requestScopeCall: { label: "Discuss My Workflow", href: "/contact" },
    talkToSales: { label: "Discuss My Workflow", href: "/contact" },
    viewSolutions: { label: "View Solutions", href: "/solutions" },
    viewBlog: { label: "View Blog", href: "/blog" },
    viewTemplates: { label: "View Templates", href: "/templates" },
    seePricing: { label: "View Pricing", href: "/pricing" },
  },
  pageActions: {
    openLocaleHub: "Open locale hub",
    openSolutionPage: "Open solution page",
    openArticle: "Open article",
    openComparePage: "Open comparison page",
    openTemplate: "Open template",
    openWorkflowPage: "View workflow example",
    openIndustryPage: "Open industry page",
    openStateHub: "View automation examples for this region",
  },
};
