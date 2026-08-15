import type { LocaleCopy } from "@/lib/locales";

const productName = "Crescora.ai";

export const enLocaleCopy: LocaleCopy = {
  site: {
    seoTitle: "AI Workflow Automation for WhatsApp & Web Chat | Crescora.ai",
    description:
      "Crescora.ai helps businesses turn customer conversations into completed business actions across enquiries, bookings, payments, support, documents, and follow-ups.",
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
    title: "Automate Work. Accelerate Growth.",
    intro:
      "Crescora.ai helps businesses turn customer conversations into completed business actions across enquiries, bookings, payments, support, documents, and follow-ups.",
    allRightsReserved: "All rights reserved.",
    companyReferenceLabel: "Company reference:",
    productLabel: "Product:",
  },
  navigation: [
    { label: "Product", href: "/platform" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Resources", href: "/resources" },
    { label: "Pricing", href: "/pricing" },
  ],
  footerGroups: [
    {
      title: "Product",
      links: [
        { label: "Platform", href: "/platform" },
        { label: "Solutions", href: "/solutions" },
        { label: "Integrations", href: "/platform" },
        { label: "Pricing", href: "/pricing" },
        { label: "Templates", href: "/templates" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Real Estate", href: "/industries/real-estate" },
        { label: "Education", href: "/industries/education" },
        { label: "Diagnostics", href: "/industries/diagnostics" },
        { label: "Service Businesses", href: "/industries/service-businesses" },
        { label: "Support Teams", href: "/industries/support-teams" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Product Demo", href: "/#homepage-demo" },
        { label: "Workflow Examples", href: "/workflow-examples" },
        { label: "Blog", href: "/blog" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Trust & Legal",
      links: [
        { label: "Security", href: "/security" },
        { label: "Responsible AI", href: "/responsible-ai" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Data Processing", href: "/data-processing" },
        { label: "Subprocessors", href: "/subprocessors" },
      ],
    },
  ],
  ctas: {
    bookProjectDemo: { label: "Book a Free Demo", href: "/contact" },
    requestScopeCall: { label: "Discuss My Workflow", href: "/contact" },
    talkToSales: { label: "Discuss My Workflow", href: "/contact" },
    signIn: { label: "Sign In", href: "https://app.crescora.ai" },
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
