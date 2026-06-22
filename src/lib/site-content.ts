import { acceptableUsePolicyContent } from "@/lib/acceptable-use-policy-content";

export type Cta = {
  label: string;
  href: string;
};

type MetadataCopy = {
  title: string;
  description: string;
};

type PageHeroCopy = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
};

type SplitCardPage = {
  metadata: MetadataCopy;
  hero: PageHeroCopy;
  cards: Array<{ title: string; text: string }>;
  cta?: Cta;
};

type LegalSectionCopy = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  tables?: readonly LegalTableCopy[];
};

type LegalTableCopy = {
  caption?: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
};

type LegalPageCopy = {
  metadata: MetadataCopy;
  hero: PageHeroCopy;
  dateLabel?: string;
  updatedOn: string;
  sections: readonly LegalSectionCopy[];
};

export const siteContent = {
  site: {
    name: "Crescora AI",
    product: "FLOW",
    productFull: "FLOW by Crescora AI",
    legalName: "Crescora",
    seoTitle: "FLOW Automation for Customer Conversations & Workflows",
    tagline: "Book more client projects from faster enquiry handling and follow-ups.",
    description:
      "FLOW by Crescora AI helps client businesses turn enquiries into booked calls, clear follow-ups, and completed projects across WhatsApp, web chat, voice, and team inboxes.",
    marketFocus:
      "India-led, about 90% focused on India, with the remaining 10% open to worldwide customers.",
  },
  ui: {
    header: {
      openMenuLabel: "Open navigation menu",
      closeMenuLabel: "Close navigation menu",
      closeOverlayLabel: "Close menu overlay",
    },
    footer: {
      intro: "Built for Indian businesses that want practical automation across enquiries, bookings, follow-ups, support, payments, and operations.",
      allRightsReserved: "All rights reserved.",
      companyReferenceLabel: "Company reference:",
      productLabel: "Product:",
    },
    workflowVisual: {
      eyebrow: "FLOW automation journey",
      title: "Customer enquiry to completed workflow",
      badge: "Business flow",
      stepLabel: "Step",
    },
    comparisonTemplate: {
      bottomLine: "Bottom line",
      decisionFactors: "Decision factors",
      decisionFactorsTitle: "The differences that matter when a client journey has to work well.",
      decisionFactorsDescription: "This table focuses on the business gap, not just feature naming.",
      factor: "Factor",
      flow: "FLOW",
      alternative: "Alternative",
      whyFlowWins: "Why FLOW wins",
      whenAlternativeFits: "When the alternative fits",
      recommendedRollout: "Recommended rollout",
      decisionTitle: "Decide on the business fit, not just the tool category.",
      decisionDescription:
        "FLOW is designed for businesses that need a customer conversation to become a controlled business outcome. If your team needs that level of clarity, start with a project demo.",
      nextStep: "Next step",
    },
    proofTemplate: {
      proofNote: "Proof note",
      scenario: "Scenario",
      scenarioTitle: "A practical rollout story for a high-volume client operation.",
      scenarioDescription:
        "These pages are written as business narratives so the buyer can understand the fit before a live customer case study exists.",
      context: "Context",
      whatBreaks: "What usually breaks",
      workflowDesign: "Workflow design",
      workflowDesignTitle: "A typical rollout starts with the highest-friction client path.",
      workflowDesignDescription:
        "FLOW moves from first reply to next action to handover while keeping the conversation clear for staff.",
      operationalControls: "Operational controls",
      whatImproves: "What improves",
      rollout: "Rollout",
      rolloutTitle: "The rollout sequence should reduce risk before it expands.",
      rolloutDescription: "Start narrow, prove the process, then add the adjacent journeys.",
      nextStep: "Next step",
      nextStepTitle: "Decide on the business fit, not just the tool category.",
      nextStepDescription:
        "FLOW is designed for businesses that need a customer conversation to become a controlled business outcome. If your team needs that level of clarity, start with a project demo.",
    },
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
  ] as const,
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
  ] as const,
  ctas: {
    bookProjectDemo: { label: "Book Free Demo", href: "/contact" },
    requestScopeCall: { label: "Discuss My Workflow", href: "/contact" },
    talkToSales: { label: "Talk to Sales", href: "/contact" },
    requestDemo: { label: "Request Demo", href: "/contact" },
    requestWhatsAppWorkflowDemo: { label: "Request WhatsApp Workflow Demo", href: "/contact" },
    requestHealthcareDemo: { label: "Request Healthcare Demo", href: "/contact" },
    requestRealEstateDemo: { label: "Request Real Estate Demo", href: "/contact" },
    requestEducationDemo: { label: "Request Education Demo", href: "/contact" },
    viewSolutions: { label: "View Solutions", href: "/solutions" },
    viewBlog: { label: "View Blog", href: "/blog" },
    viewTemplates: { label: "View Industry Templates", href: "/templates" },
    findMyUseCase: { label: "Find My Use Case", href: "/contact" },
    getProjectScope: { label: "Get Project Scope", href: "/contact" },
    openComparison: { label: "Open comparison", href: "#" },
    openProofPage: { label: "Open workflow example →", href: "#" },
    openUseCase: { label: "Open use case →", href: "#" },
    seePricing: { label: "See Pricing", href: "/pricing" },
    viewWorkflow: { label: "View workflows", href: "#" },
    viewIndustryWorkflow: { label: "View Industry Workflows", href: "/industries" },
  } as const,
  homepage: {
    hero: {
      badge: "Crescora AI presents FLOW",
      title: "Automate customer enquiries, WhatsApp follow-ups, and business workflows.",
      description:
        "FLOW by Crescora AI helps Indian businesses capture leads, answer repeated questions, book appointments, collect documents, confirm payments, and hand over complex cases to the right team.",
      builtForLabel: "Built for",
      builtForText:
        "Hospitals, clinics, real estate teams, education businesses, support teams, and service companies.",
      stats: [
        { value: "70-90%", label: "repetitive customer conversations automated" },
        { value: "14 days", label: "to launch a focused first workflow" },
        { value: "1 workflow", label: "to prove value before scaling wider" },
      ],
    },
    pain: {
      eyebrow: "Pain",
      title: "Your business is not losing customers because of demand. It is losing them because of delay.",
      description:
        "Every missed reply, delayed follow-up, repeated question, manual booking, pending payment, and forgotten lead creates revenue leakage. FLOW turns these gaps into automated workflows.",
      cards: [
        {
          title: "Missed customer leads",
          text: "Delays and manual handling create revenue leakage, operational drag, and poor customer experience.",
        },
        {
          title: "Manual WhatsApp follow-ups",
          text: "Teams spend hours repeating the same answers instead of moving the conversation forward.",
        },
        {
          title: "Repetitive support questions",
          text: "Repeated questions keep piling up and slow the team down across every channel.",
        },
        {
          title: "Appointment booking chaos",
          text: "Slots, confirmations, and reschedules stay fragmented across calls, chats, and reminders.",
        },
        {
          title: "Payment and document delays",
          text: "Reminders, payment checks, and document follow-ups keep slipping through the cracks.",
        },
        {
          title: "No visibility into team performance",
          text: "Owners cannot easily see what converted, what stalled, or what needs attention next.",
        },
      ],
    },
    automation: {
      eyebrow: "What FLOW can automate first",
      title: "Start with the workflow that slows your team down the most.",
      description:
        "Pick one high-friction customer journey, automate the repetitive steps, and keep humans in control of the exceptions.",
      cards: [
        {
          title: "Lead capture and qualification",
          text: "Capture enquiries from web or WhatsApp, ask the right questions, and route serious leads to your team.",
        },
        {
          title: "WhatsApp enquiry and follow-up",
          text: "Reply faster, share next steps, and keep follow-ups moving even when your team is offline.",
        },
        {
          title: "Appointment booking",
          text: "Confirm slots, send reminders, and reduce back-and-forth for every booking.",
        },
        {
          title: "Support and FAQ automation",
          text: "Resolve repeated questions quickly and escalate complex issues with full context.",
        },
        {
          title: "Payment and document follow-up",
          text: "Send reminders, collect updates, and stop manual chasing across pending steps.",
        },
        {
          title: "Human handover with context",
          text: "Move sensitive, high-value, or stalled conversations to the right person with full history.",
        },
      ],
    },
    pilot: {
      eyebrow: "14-day pilot",
      title: "Start with one workflow and prove it in 14 days.",
      description: "One workflow. One business problem. One measurable outcome.",
      bullets: [
        "One complete automation flow",
        "Up to 15 workflow steps",
        "Web or WhatsApp setup",
        "Basic FAQ or scripted response flow",
        "Demo walkthrough with your team",
        "Optimization suggestions after testing",
      ],
      primaryCta: { label: "Book Free Demo", href: "/contact" },
      secondaryCta: { label: "View Industry Workflows", href: "/industries" },
    },
    outcomes: {
      eyebrow: "Workflow outcomes",
      title: "From first message to next action.",
      description:
        "FLOW keeps the customer journey moving with structured replies, reminders, escalation, and outcome tracking.",
      items: [
        "Enquiry -> qualified lead captured",
        "Booking request -> appointment confirmed",
        "Payment or document request -> reminder and status updated",
        "Complex case -> routed to a human with context",
      ],
      automationClaim: "Automate up to 70-90% of repetitive customer conversations.",
      automationSupport:
        "Use automation for the routine path, then hand over the exceptions without losing visibility or control.",
      results: [
        "Faster first response",
        "Consistent follow-up execution",
        "Lower manual operations load",
        "Human control preserved",
      ],
      impactLabel: "Expected impact",
    },
    industries: {
      eyebrow: "Industries",
      title: "See how FLOW works in your industry.",
      description: "Start with workflows that directly improve revenue, response time, and operations.",
    },
    explore: {
      eyebrow: "Explore deeper",
      title: "Open the page that matches your buying question.",
      description:
        "Use the homepage for the overview, then go deeper by industry, solution, pricing, or practical guides.",
      cards: [
        {
          title: "Industry workflows",
          description:
            "See how FLOW fits hospitals, clinics, real estate, education, support, and service businesses.",
          href: "/industries",
          ctaLabel: "Browse industries",
        },
        {
          title: "Automation solutions",
          description:
            "Compare workflow types such as WhatsApp automation, support, bookings, documents, and follow-up.",
          href: "/solutions",
          ctaLabel: "Browse solutions",
        },
        {
          title: "Pricing and rollout",
          description:
            "See how to start with one workflow, understand package shape, and plan the right rollout path.",
          href: "/pricing",
          ctaLabel: "See pricing",
        },
        {
          title: "Practical guides",
          description:
            "Read articles that explain use cases, channel decisions, and rollout patterns in plain language.",
          href: "/blog",
          ctaLabel: "Explore articles",
        },
      ],
    },
    trust: {
      eyebrow: "Trust and control",
      title: "AI handles routine work. Your team keeps control, visibility, and fallback.",
      points: [
        "Human handover for sensitive or high-value conversations",
        "Fallback paths when a step fails or a user drops off",
        "API failure handling, retries, and safe escalation",
        "Preview before publishing and pre-launch runtime testing",
        "Workspace-based bot management with clear access",
        "Visible progress for team action and outcome tracking",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      items: [
        {
          question: "Is FLOW only for WhatsApp?",
          answer:
            "No. FLOW can support customer journeys across web chat, WhatsApp, and other connected channels depending on your setup.",
        },
        {
          question: "Will AI replace our team?",
          answer:
            "No. FLOW is designed to handle repetitive work and route complex, sensitive, or high-value conversations to your team with context.",
        },
        {
          question: "How quickly can we launch?",
          answer:
            "A focused pilot workflow can usually be planned, built, and tested in around 14 days, depending on content, approvals, and integrations.",
        },
        {
          question: "Can FLOW work with our current setup?",
          answer:
            "Yes. FLOW can connect with CRMs, booking systems, payment tools, support tools, and internal APIs where access is available.",
        },
        {
          question: "Can we start small?",
          answer:
            "Yes. The best starting point is one high-impact workflow, such as lead capture, appointment booking, FAQ support, or payment/document follow-up.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Book a focused workflow demo.",
      description: "We will review your current process and recommend the first workflow worth automating.",
      primary: { label: "Book Free Demo", href: "/contact" },
      secondary: { label: "See Pricing", href: "/pricing" },
    },
  },
  leadForm: {
    badge: "Workflow enquiry",
    title: "Book a free workflow demo",
    description:
      "Tell us your industry and highest-priority workflow. We will review your current process and suggest the best automation pilot for your team.",
    secureLabel: "Secure form handling",
    submitIdle: "Request Free Workflow Demo",
    submitLoading: "Submitting...",
    validationError: "Please complete all required fields before submitting.",
    invalidContactError: "Please enter a valid email address and phone number.",
    successMessage:
      "Thanks - your demo request is received. Our team will contact you shortly with a suggested workflow plan.",
    errorMessage: "We could not submit your request right now. Please retry or contact us directly.",
    note: "We'll review your workflow and suggest the best pilot path. No spam",
    labels: {
      fullName: "Full name",
      companyName: "Company name",
      workEmail: "Work email",
      country: "Country",
      phoneOrWhatsapp: "Phone / WhatsApp number with country code",
      industry: "Industry",
      primaryUseCase: "Primary workflow to automate",
      monthlyEnquiryVolume: "Monthly enquiry volume",
      timeline: "Expected timeline",
      preferredChannel: "Preferred channel",
      currentTools: "Current tools",
      keyProblem: "Main problem to solve",
    },
    hints: {
      currentTools: "Optional",
      keyProblem: "Optional",
      preferredChannel: "Optional",
    },
    placeholders: {
      fullName: "Your name",
      companyName: "Company / business name",
      workEmail: "name@company.com",
      phoneOrWhatsapp: "+91 98765 43210",
      country: "Select country",
      currentTools: "Website, WhatsApp, CRM, Google Sheets, team inbox, etc.",
      keyProblem:
        "Example: missed leads, manual appointment booking, repeated support questions, payment follow-up, document collection...",
    },
    selectPlaceholders: {
      industry: "Select industry",
      primaryUseCase: "Select workflow",
      monthlyEnquiryVolume: "Select monthly enquiry volume",
      timeline: "Expected timeline",
      preferredChannel: "Select channel",
    },
    options: {
      countries: [
        { label: "India (+91)", value: "India", dialingCode: "91", example: "+91 98765 43210", minDigits: 10, maxDigits: 10 },
        { label: "United States (+1)", value: "United States", dialingCode: "1", example: "+1 415 555 0123", minDigits: 10, maxDigits: 10 },
        { label: "United Kingdom (+44)", value: "United Kingdom", dialingCode: "44", example: "+44 7700 900123", minDigits: 10, maxDigits: 10 },
        { label: "United Arab Emirates (+971)", value: "United Arab Emirates", dialingCode: "971", example: "+971 50 123 4567", minDigits: 9, maxDigits: 9 },
        { label: "Singapore (+65)", value: "Singapore", dialingCode: "65", example: "+65 9123 4567", minDigits: 8, maxDigits: 8 },
        { label: "Australia (+61)", value: "Australia", dialingCode: "61", example: "+61 412 345 678", minDigits: 9, maxDigits: 9 },
        { label: "Canada (+1)", value: "Canada", dialingCode: "1", example: "+1 416 555 0123", minDigits: 10, maxDigits: 10 },
        { label: "Other", value: "Other", dialingCode: "", example: "+[country code] [number]", minDigits: 8, maxDigits: 15 },
      ],
      industries: ["Healthcare", "Real Estate", "Education", "Local Services", "Other"],
      useCases: [
        "Lead Capture and Qualification",
        "Appointment Booking",
        "Payment Follow-Up",
        "Document Collection",
        "Customer Support Automation",
        "Human Handoff and Escalation",
      ],
      timelines: ["Immediate", "Within 30 Days", "Within 60-90 Days", "Exploring Options"],
      volumes: ["0-200", "200-1000", "1000-5000", "5000+"],
      channels: ["Website chat", "WhatsApp", "Both", "Not sure"],
    },
  },
  about: {
    metadata: {
      title: "About | Crescora AI",
      description: "Crescora AI helps Indian businesses turn enquiries into automated workflows.",
    },
    hero: {
      eyebrow: "About Crescora AI",
      title: "Crescora AI builds practical automation for customer conversations and business workflows.",
      description:
        "We help Indian businesses turn enquiries, repeated questions, bookings, follow-ups, payments, documents, and support requests into structured automated workflows with human control where it matters.",
      primaryCta: { label: "Book Free Demo", href: "/contact" },
      secondaryCta: { label: "Explore FLOW", href: "/platform" },
    },
    whoWeAre: {
      title: "Who we are",
      paragraphs: [
        "Crescora AI is the company behind FLOW, a business automation platform designed to help teams manage customer conversations, workflow steps, and follow-ups in a more structured way.",
        "FLOW is built for businesses that depend on daily customer interactions across WhatsApp, website chat, calls, forms, and internal tools. Instead of handling every enquiry manually, teams can use FLOW to guide customers through clear journeys such as lead capture, appointment booking, document collection, payment confirmation, FAQ support, and human handover.",
      ],
    },
    mission: {
      title: "Our mission",
      description:
        "Our mission is to help businesses reduce manual follow-up work and respond to customers faster without losing human control.",
      support:
        "We believe automation should not replace teams. It should help teams focus on important conversations while routine steps are handled consistently.",
      card: "Turn customer conversations into completed business outcomes.",
    },
    whatWeBuild: {
      title: "What we build",
      description: "We build automation systems that connect customer messages to business actions.",
      items: [
        "Lead capture and qualification",
        "WhatsApp enquiry handling",
        "Appointment booking",
        "FAQ and support automation",
        "Document collection",
        "Payment confirmation",
        "Follow-up reminders",
        "Human handover",
        "CRM and API sync",
        "Outcome tracking",
      ],
    },
    whyWeBuiltFlow: {
      title: "Why we built FLOW",
      paragraphs: [
        "Many businesses do not lose customers because demand is low. They lose customers because responses are delayed, follow-ups are missed, documents are pending, payments are not tracked, and support teams repeat the same answers every day.",
        "FLOW was built to solve this gap. It gives businesses a clear way to move from customer enquiry to next step, while keeping important decisions under team control.",
      ],
    },
    belief: {
      title: "Our belief",
      description:
        "Automation should be simple, controlled, and useful from the first workflow. We believe the best automation starts small: one business problem, one customer journey, one measurable outcome. Once that workflow works, businesses can expand into more channels, teams, integrations, and use cases.",
      card: "Start small. Prove value. Scale with confidence.",
    },
    whoWeHelp: {
      title: "Who we help",
      description: "FLOW is built for businesses that handle repeated customer conversations and operational follow-ups.",
      cards: [
        {
          title: "Hospitals and Clinics",
          text: "Appointments, patient FAQs, reminders, document collection, and safe handover.",
        },
        {
          title: "Real Estate Teams",
          text: "Lead qualification, project details, site visit booking, follow-ups, and sales handover.",
        },
        {
          title: "Education and Coaching",
          text: "Admission enquiries, course FAQs, demo class booking, document collection, and counselor routing.",
        },
        {
          title: "Support Teams",
          text: "FAQ automation, issue capture, ticket creation, escalation, and customer updates.",
        },
        {
          title: "Service Businesses",
          text: "Bookings, reminders, payment follow-ups, service requests, and customer communication.",
        },
        {
          title: "Diagnostics and Labs",
          text: "Test enquiries, home collection booking, report updates, payment confirmation, and notifications.",
        },
      ],
    },
    howWeWork: {
      title: "How we work with businesses",
      description:
        "We do not start by forcing a large automation rollout. We start by identifying one high-impact workflow that can create visible business value quickly.",
      steps: [
        {
          title: "Discover",
          text: "We understand your customer journey, repeated questions, manual steps, channels, and current tools.",
        },
        {
          title: "Design",
          text: "We map the workflow, messages, decisions, fallback paths, handover rules, and success outcomes.",
        },
        {
          title: "Build",
          text: "We configure the automation flow, forms, reminders, FAQs, integrations, and team routing.",
        },
        {
          title: "Test",
          text: "We test real user scenarios, invalid inputs, handover cases, and edge conditions before launch.",
        },
        {
          title: "Launch",
          text: "We help you start with one practical workflow and monitor early usage.",
        },
        {
          title: "Improve",
          text: "We review drop-offs, repeated questions, and missed opportunities to improve the workflow over time.",
        },
      ],
    },
    different: {
      title: "What makes Crescora AI different",
      cards: [
        {
          title: "Business-first automation",
          text: "We focus on outcomes like faster response, better lead handling, fewer missed follow-ups, and improved visibility.",
        },
        {
          title: "Human control built in",
          text: "Sensitive, complex, or high-value cases can be routed to the right person with context.",
        },
        {
          title: "Workflow approach",
          text: "FLOW is not only a chatbot. It connects customer messages to business steps, records, reminders, and team actions.",
        },
        {
          title: "Built for Indian businesses",
          text: "Our positioning, workflows, and examples are designed around practical business needs in India.",
        },
        {
          title: "Start small, expand later",
          text: "Businesses can begin with one workflow and scale into more use cases after the process is proven.",
        },
      ],
    },
    trust: {
      title: "Built for controlled automation",
      description:
        "FLOW is designed to support routine automation while keeping teams in control of important decisions.",
      bullets: [
        "Human handover for sensitive or high-value conversations",
        "Fallback paths when a step fails or a user drops off",
        "API failure handling, retries, and safe escalation",
        "Preview before publishing and pre-launch testing",
        "Workspace-based bot management with clear access",
        "Visible progress for team action and outcome tracking",
      ],
    },
    product: {
      title: "Crescora AI and FLOW",
      description:
        "Crescora AI is the company. FLOW is our automation product for customer conversations and business workflows.",
      details: [
        "When businesses use FLOW, they get a structured way to automate customer journeys such as enquiries, bookings, follow-ups, document collection, payment confirmation, support routing, and team handover.",
        "Company: Crescora AI",
        "Product: FLOW",
        "Public name: FLOW by Crescora AI",
      ],
    },
    pilot: {
      title: "Start with a focused pilot",
      description:
        "The best way to begin is with one high-impact workflow. For example, a hospital appointment flow, real estate lead qualification flow, education admission enquiry flow, or customer support FAQ flow.",
      bullets: [
        "One complete automation flow",
        "Up to 15 workflow steps",
        "Web or WhatsApp setup",
        "Basic FAQ or scripted response flow",
        "Demo walkthrough with your team",
        "Optimization suggestions after testing",
      ],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    finalCta: {
      title: "Ready to automate your first customer workflow?",
      description: "Tell us your industry and current process. We’ll suggest the best starting workflow for your business.",
      primary: { label: "Book Free Demo", href: "/contact" },
      secondary: { label: "Discuss My Workflow", href: "/contact" },
    },
    cta: { label: "Book Free Demo", href: "/contact" },
  },
  contact: {
    metadata: {
      title: "Contact | Crescora AI",
      description:
        "Contact Crescora AI for sales, support, CEO correspondence, and office location details.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Contact Crescora AI.",
      description:
        "Reach the right team for sales, support, or company correspondence. We will map the next step for your workflow or question.",
    },
    details: {
      eyebrow: "Direct contact",
      title: "Sales, support, and office details.",
      description:
        "Use these contact points for new demos, technical help, executive correspondence, or office visits.",
      items: [
        {
          label: "Sales",
          value: "sales@crescora.ai",
          href: "mailto:sales@crescora.ai",
        },
        {
          label: "Support",
          value: "support@crescora.ai",
          href: "mailto:support@crescora.ai",
        },
        {
          label: "CEO",
          value: "navya@crescora.ai",
          href: "mailto:navya@crescora.ai",
        },
        {
          label: "Address",
          value: "2nd floor, Urbanrise Oncloud 33, Bachupally, Hyderabad, Telangana, India",
        },
      ],
    },
  },
  pricing: {
    metadata: {
      title: "FLOW Pricing | Business Automation Packages",
      description: "Explore package-based plans for customer workflow automation, follow-ups, and rollout support.",
    },
    hero: {
      eyebrow: "Pricing",
      title: "Pricing that scales with your automation needs.",
      description:
        "Start with one focused workflow, then expand to more teams, channels, integrations, and customer journeys as you grow.",
      primaryCta: { label: "Book Free Demo", href: "/contact" },
      secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
    },
    note:
      "Pricing depends on workflow scope, selected channels, integrations, automation complexity, and support requirements. We’ll recommend the right package after reviewing your use case.",
    ctas: {
      primary: { label: "Book Free Demo", href: "/contact" },
      secondary: { label: "Get Project Scope", href: "/contact" },
    },
    faq: {
      eyebrow: "Pricing FAQ",
      title: "Common pricing questions before you book a demo.",
      description: "These answers help buyers understand how FLOW pricing works when the rollout starts with one workflow.",
      items: [
        {
          question: "Can I start with one workflow?",
          answer:
            "Yes. Most clients start with one high-impact workflow such as lead capture, appointment booking, FAQ support, or payment and document follow-up.",
        },
        {
          question: "Do I need WhatsApp from day one?",
          answer:
            "No. You can start with web chat or a demo workflow and add WhatsApp once the flow is approved.",
        },
        {
          question: "Does pricing change with integrations?",
          answer:
            "Yes. CRM, payment, booking, or custom API integrations can affect setup and support scope.",
        },
        {
          question: "Can we upgrade later?",
          answer:
            "Yes. You can expand from one workflow to more teams, channels, and automations over time.",
        },
      ],
    },
  },
  trust: {
    metadata: {
      title: "FLOW Trust | Client Control and Visibility",
      description:
        "Understand how FLOW supports client-facing flows with human review, visible progress, and clear boundaries.",
    },
    hero: {
      eyebrow: "Trust and Control",
      title: "Control, visibility, and accountability for client-facing work.",
      description:
        "FLOW helps teams keep important conversations visible, reviewed, and on track while staff stay in control.",
      primaryCta: { label: "Contact Sales", href: "/contact" },
      secondaryCta: { label: "Book Project Demo", href: "/contact" },
    },
    handoffBadge: "Human handover",
    handoffTitle: "Human review is part of the process from the start.",
    dependableBadge: "What keeps it dependable",
    dependableText:
      "FLOW keeps the client journey moving with reminders, follow-up steps, handover, records, and clear progress visibility.",
    controlTitle: "Responsible claims and clear boundaries",
    controlText:
      "FLOW supports business process control. Regulatory and legal claims should only be made after formal review and verification for your deployment context.",
    cta: { label: "Book Project Demo", href: "/contact" },
  },
    platform: {
      metadata: {
        title: "How FLOW Works | Client Project Automation",
        description:
          "See how FLOW helps your team handle enquiries, follow-ups, and project handover with control.",
      },
      hero: {
        eyebrow: "How It Works",
        title: "See how FLOW turns enquiries into completed workflows.",
        description:
          "FLOW helps your team handle enquiries, follow-ups, handovers, reminders, and outcome tracking in one simple business workflow.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      section: {
        eyebrow: "What you get",
        title: "Built for business workflows that need structure and follow-through.",
        description:
          "FLOW helps your team stay consistent with enquiry handling, reminders, handover, records, and outcome tracking.",
      },
      team: {
        badge: "Team control",
        title: "The team stays in control of important decisions.",
        startLabel: "Start here",
        startTitle: "See how FLOW can automate your first workflow.",
        startText:
          "We review your current setup, customer journey, and team structure to recommend the right starting point.",
        cta: { label: "Book Free Demo", href: "/contact" },
      },
    },
    industriesIndex: {
      metadata: {
        title: "Industries | FLOW by Crescora",
        description: "Industry workflows built for real operations.",
      },
      hero: {
        eyebrow: "Industries",
        title: "Industry workflows FLOW can automate for your business.",
        description:
          "Start with one proven workflow in your industry, then expand into more customer journeys, channels, and follow-ups.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      phaseTwo: {
        eyebrow: "Need another industry?",
        title: "Don't see your industry here?",
        description:
          "If your business handles enquiries, bookings, documents, payments, support, or follow-ups, FLOW can be adapted to your workflow.",
      },
      seoLandingPages: {
        eyebrow: "SEO landing pages",
        title: "Explore more automation solution pages.",
        description:
          "Each page explains a practical workflow, use case, and demo path for a specific industry or business problem.",
      },
    },
    useCasesIndex: {
      metadata: {
        title: "Use Cases | FLOW by Crescora",
        description: "Choose the workflow you want to automate first.",
      },
      hero: {
        eyebrow: "Use Cases",
        title: "Choose the workflow you want to automate first.",
        description:
          "Start with the workflow that affects your response speed, revenue, support load, or daily operations the most.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Find My Use Case", href: "/contact" },
      },
      cards: [
        {
          title: "WhatsApp Automation",
          href: "/use-cases/whatsapp-automation",
          text: "Turn WhatsApp enquiries into automated business workflows with qualification, booking, reminders, follow-up, and escalation.",
        },
        {
          title: "Lead Capture & Qualification",
          href: "/use-cases/lead-capture-qualification",
          text: "Capture enquiries from website, WhatsApp, ads, or landing pages. Ask the right questions and send qualified leads to your team.",
        },
        {
          title: "Appointment Booking",
          href: "/use-cases/appointment-booking-automation",
          text: "Reduce back-and-forth by automating availability checks, slot confirmation, reminders, and rescheduling.",
        },
        {
          title: "Payment Follow-Up",
          href: "/use-cases/payment-follow-up-automation",
          text: "Send payment reminders, capture payment status, and escalate unresolved cases to the right team.",
        },
        {
          title: "Document Collection",
          href: "/use-cases/document-collection-automation",
          text: "Request, collect, and follow up on documents without repeated manual chasing.",
        },
        {
          title: "Customer Support",
          href: "/use-cases/customer-support-automation",
          text: "Handle repeated support questions and route complex tickets with full context.",
        },
        {
          title: "FAQ Automation",
          href: "/use-cases/faq-automation",
          text: "Answer repeated questions about pricing, availability, services, documents, timings, and next steps.",
        },
        {
          title: "Human Handoff",
          href: "/use-cases/human-handoff-automation",
          text: "Move sensitive, complex, or high-value conversations to humans with conversation history and next action.",
        },
        {
          title: "CRM & API Sync",
          href: "/use-cases/crm-api-sync",
          text: "Send captured leads, appointments, payments, and support details to CRM, Google Sheets, booking systems, or internal tools.",
        },
        {
          title: "Reminder Automation",
          href: "/use-cases/reminder-automation",
          text: "Send follow-ups for appointments, payments, pending documents, abandoned enquiries, and scheduled callbacks.",
        },
        {
          title: "Ticket Creation & Escalation",
          href: "/use-cases/ticket-creation-escalation",
          text: "Capture issue details, create support tickets, and escalate complex cases with full context.",
        },
        {
          title: "Feedback & Review Collection",
          href: "/use-cases/feedback-collection",
          text: "Collect customer feedback after appointments, service completion, delivery, or support resolution.",
        },
      ],
      moreWorkflowsLabel: "More workflows FLOW can automate",
      moreWorkflows: [
        "Site Visit Booking",
        "Admission Enquiry Automation",
        "Demo Class / Consultation Booking",
        "Internal Team Notifications",
      ],
      ctaTitle: "Not sure where to start?",
      ctaDescription:
        "Tell us your industry and current workflow. We will suggest the best first automation.",
      ctaPrimary: { label: "Book Free Demo", href: "/contact" },
      ctaSecondary: { label: "Discuss My Workflow", href: "/contact" },
    },
  resources: {
    metadata: {
      title: "Resources | FLOW by Crescora",
      description: "Playbooks, comparisons, proof pages, and guides for client businesses.",
    },
    hero: {
      eyebrow: "Resources",
      title: "Playbooks, comparisons, and proof for client businesses.",
      description:
        "Use this section for decision-stage content, rollout guidance, and future customer proof.",
      primaryCta: { label: "Book Project Demo", href: "/contact" },
      secondaryCta: { label: "Request Scope Call", href: "/contact" },
    },
    decisionSection: {
      eyebrow: "Decision-stage content",
      title: "Comparisons and proof pages for buyers close to a decision.",
      description: "These pages help visitors understand why FLOW is the right fit before they book a demo.",
    },
    comparisonLabel: "Comparison pages",
    proofLabel: "Proof pages",
    contentHub: {
      eyebrow: "Content hub",
      title: "Built to grow into a client proof library",
      description:
        "This section is intentionally ready for guides, comparisons, templates, and future proof assets.",
      items: [
        "Industry playbooks",
        "Use-case guides",
        "Comparison pages",
        "Launch checklists",
        "FAQ and glossary",
        "Case studies and proof assets",
      ],
    },
  },
  compareIndex: {
    metadata: {
      title: "Compare FLOW | Decision-Stage Automation Comparisons",
      description:
        "Compare FLOW against chatbots, manual WhatsApp handling, simpler tools, and CRM-only workflows.",
    },
    hero: {
      eyebrow: "Compare",
      title: "Decision-stage comparisons for buyers narrowing the options.",
      description:
        "Use these pages when the team needs to compare client-flow options before choosing the right fit.",
      primaryCta: { label: "Book Project Demo", href: "/contact" },
      secondaryCta: { label: "Request Scope Call", href: "/contact" },
    },
    section: {
      eyebrow: "Comparison pages",
      title: "Built for buyers who need a clear decision, not a vague feature list.",
      description: "Each comparison page isolates the business gap that matters in real work.",
    },
  },
  proofIndex: {
    metadata: {
      title: "Workflow Examples | FLOW by Crescora",
      description:
        "Workflow examples for healthcare, real estate, and education automation rollout patterns.",
    },
    hero: {
      eyebrow: "Workflow examples",
      title: "See how FLOW can work in real business scenarios.",
      description:
        "Explore practical workflow examples for healthcare, real estate, and education teams. Each example shows the customer journey, automation steps, team handover points, and expected business outcomes.",
      primaryCta: { label: "Book Free Demo", href: "/contact" },
      secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
    },
    notice:
      "These examples are designed to help you understand how a FLOW pilot can be planned, built, tested, and expanded for your industry. They focus on workflow structure, team control, handover points, and measurable outcomes.",
    section: {
      eyebrow: "Workflow examples",
      title: "Workflow examples for priority industries.",
      description:
        "Each example shows how a business can move from manual enquiry handling to a structured automation workflow with clear controls and handover paths.",
    },
    includes: {
      eyebrow: "What each workflow example includes",
      title: "What each workflow example includes",
      description:
        "Every example is structured around the same operating model so buyers can understand the rollout pattern before they book a pilot.",
      items: [
        "Customer enquiry scenario",
        "Manual process pain points",
        "FLOW automation journey",
        "Human handover points",
        "Data captured",
        "Follow-up actions",
        "Expected business outcomes",
        "Suggested 14-day pilot scope",
      ],
    },
    cta: { label: "Book Free Demo", href: "/contact" },
  },
  industries: {
    healthcare: {
      metadata: {
        title: "Healthcare Automation Workflows | FLOW by Crescora",
        description:
          "Automate patient enquiries, appointment booking, reminders, payment follow-ups, and document intake with human handoff controls.",
      },
      hero: {
        eyebrow: "Healthcare",
        title: "Automate patient enquiries, bookings, reminders, and follow-ups.",
        description:
          "FLOW by Crescora helps healthcare teams handle repetitive patient workflows faster while routing sensitive and complex cases to staff.",
        primaryCta: { label: "Request Healthcare Demo", href: "/contact" },
        secondaryCta: { label: "Request Scope Call", href: "/contact" },
      },
      painTitle: "Patient demand is high. Manual coordination should not be your bottleneck.",
      painPoints: [
        "Reception and front-desk overload",
        "Delayed or missed appointment responses",
        "Repetitive question handling",
        "Manual reminder calls and messages",
        "Payment and report follow-up delays",
        "Unstructured document collection",
      ],
      workflowTitle: "What FLOW automates for healthcare teams",
      workflowDescription:
        "FLOW structures the repeated actions that otherwise rely on staff memory and manual follow-up.",
      workflows: [
        "New patient enquiry triage and routing",
        "Appointment booking and confirmation",
        "Pre-visit reminders",
        "Post-visit follow-up reminders",
        "Payment follow-up messages",
        "Document/report collection workflows",
        "Human escalation for sensitive cases",
      ],
      beforeTitle: "Before",
      beforeText:
        "Multiple channels, no consistent response process, and manual reminder dependence create friction for the front desk and the patient journey.",
      afterTitle: "After FLOW",
      afterText:
        "Standardized response and booking workflows, automated reminders, and staff focus shifted to critical interactions.",
      trustText:
        "FLOW supports operational workflows and human escalation. It is not a replacement for clinical judgment or medical decision-making.",
      cta: { label: "Request Healthcare Demo", href: "/contact" },
    },
    realEstate: {
      metadata: {
        title: "Real Estate Lead and Follow-Up Automation | FLOW by Crescora",
        description:
          "Automate real estate lead capture, qualification, site visit booking, routing, and follow-ups across customer channels.",
      },
      hero: {
        eyebrow: "Real Estate",
        title: "Convert property enquiries into scheduled visits and qualified opportunities.",
        description:
          "FLOW by Crescora helps real estate teams respond faster, qualify leads consistently, schedule visits, and automate follow-ups.",
        primaryCta: { label: "Request Real Estate Demo", href: "/contact" },
        secondaryCta: { label: "Request Scope Call", href: "/contact" },
      },
      painTitle: "Your leads are valuable. Delayed follow-up is expensive.",
      painPoints: [
        "Missed and stale leads",
        "Slow first response",
        "Manual lead qualification",
        "Site visit coordination friction",
        "Lead ownership confusion",
        "Weak follow-up consistency",
      ],
      workflowTitle: "What FLOW automates for real estate teams",
      workflows: [
        "Lead capture and response automation",
        "Qualification logic and routing",
        "Site visit scheduling",
        "Reminder and confirmation flows",
        "Sales rep assignment",
        "Lead status updates",
        "Escalation for high-intent opportunities",
      ],
      beforeTitle: "Before",
      beforeText:
        "Leads spread across channels and phones, with inconsistent follow-up timing and manual assignment.",
      afterTitle: "After FLOW",
      afterText:
        "Faster qualification and routing, automated visit coordination, and visible lead progression and ownership.",
      cta: { label: "Request Real Estate Demo", href: "/contact" },
    },
    education: {
      metadata: {
        title: "Education Enquiry and Admissions Automation | FLOW by Crescora",
        description:
          "Automate education enquiries, demo class booking, fee reminders, and admissions follow-up with human counselor handoff.",
      },
      hero: {
        eyebrow: "Education",
        title: "Automate enquiries, demo bookings, fee reminders, and admissions follow-ups.",
        description:
          "FLOW by Crescora helps education teams respond faster to student and parent enquiries while keeping counselor handoff for high-intent conversations.",
        primaryCta: { label: "Request Education Demo", href: "/contact" },
        secondaryCta: { label: "Request Scope Call", href: "/contact" },
      },
      painTitle: "Admissions pipeline performance depends on follow-up speed and consistency.",
      painPoints: [
        "Repetitive course and fee questions",
        "Manual counseling coordination",
        "Missed demo class opportunities",
        "Weak admission follow-up",
        "Delayed fee reminders",
      ],
      workflowTitle: "What FLOW automates for education teams",
      workflows: [
        "Course enquiry response",
        "Demo class booking",
        "Admission checklist and reminders",
        "Fee reminder and follow-up messages",
        "Counselor routing for high-intent students",
        "Interaction tracking and status updates",
      ],
      beforeTitle: "Before",
      beforeText:
        "Admissions follow-up depends on staff memory, with inconsistent counseling response times and low visibility into enquiry progress.",
      afterTitle: "After FLOW",
      afterText:
        "Automated follow-up workflow consistency, faster counselor routing, and clearer admissions funnel visibility.",
      cta: { label: "Request Education Demo", href: "/contact" },
    },
  },
  useCases: {
    whatsapp: {
      metadata: {
        title: "WhatsApp Automation for Business | FLOW by Crescora",
        description:
          "Turn WhatsApp enquiries into automated workflows for lead handling, booking, reminders, payments, document collection, and human handoff.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Turn WhatsApp enquiries into automated business workflows.",
        description:
          "FLOW automates lead capture, replies, appointment booking, payment follow-ups, reminders, document collection, and escalation from WhatsApp conversations.",
        primaryCta: { label: "Request WhatsApp Workflow Demo", href: "/contact" },
        secondaryCta: { label: "Request Scope Call", href: "/contact" },
      },
      painTitle: "Manual WhatsApp handling creates response delays and lost opportunities.",
      painPoints: [
        "Missed enquiries after business hours",
        "Delayed response during peak hours",
        "Inconsistent follow-up execution",
        "No structured outcome tracking",
      ],
      automationTitle: "What FLOW automates on WhatsApp",
      automations: [
        "Instant first-response logic",
        "Lead qualification and tagging",
        "Appointment and demo booking",
        "Payment reminder workflows",
        "Document intake and follow-up",
        "Human handoff for complex requests",
      ],
      exampleFlowTitle: "Example flow",
      exampleFlow: [
        "Customer sends WhatsApp enquiry",
        "FLOW identifies intent",
        "Qualification questions asked",
        "Booking or follow-up workflow started",
        "Reminder sequence triggered",
        "Human handoff if needed",
        "Outcome recorded",
      ],
      cta: { label: "Request WhatsApp Workflow Demo", href: "/contact" },
    },
    appointment: {
      metadata: {
        title: "Appointment Booking Automation | FLOW by Crescora",
        description:
          "Reduce back-and-forth by automating availability checks, confirmation, reminders, and rescheduling.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Reduce back-and-forth by automating appointment booking.",
        description:
          "FLOW handles availability checks, confirmations, reminders, and rescheduling so your team spends less time coordinating.",
        primaryCta: { label: "Request Demo", href: "/contact" },
        secondaryCta: { label: "Request Scope Call", href: "/contact" },
      },
      items: ["Availability collection", "Booking confirmation", "Reminder sequences", "Rescheduling support"],
      cta: { label: "Request Demo", href: "/contact" },
    },
    payment: {
      metadata: {
        title: "Payment Follow-Up Automation | FLOW by Crescora",
        description:
          "Send structured payment reminders and escalate unresolved cases to the right team.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Send payment reminders and escalate unresolved cases.",
        description:
          "FLOW automates structured payment follow-up so staff do not spend time manually chasing reminders and statuses.",
        primaryCta: { label: "Request Demo", href: "/contact" },
        secondaryCta: { label: "Request Scope Call", href: "/contact" },
      },
      items: [
        "Payment due notifications",
        "Reminder sequences",
        "Status collection",
        "Escalation for overdue cases",
      ],
      cta: { label: "Request Demo", href: "/contact" },
    },
    document: {
      metadata: {
        title: "Document Collection Automation | FLOW by Crescora",
        description: "Request, collect, and follow up on documents without manual chasing.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Request and collect documents without manual chasing.",
        description:
          "FLOW automates document request, follow-up, and status tracking so your team gets fewer incomplete submissions.",
        primaryCta: { label: "Request Demo", href: "/contact" },
        secondaryCta: { label: "Request Scope Call", href: "/contact" },
      },
      items: [
        "Document request workflow",
        "Missing document reminders",
        "Upload/intake tracking",
        "Human review and escalation",
      ],
      cta: { label: "Request Demo", href: "/contact" },
    },
    customerSupport: {
      metadata: {
        title: "Customer Support Automation | FLOW by Crescora",
        description:
          "Handle repetitive support queries and route complex tickets with context.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Handle repetitive support queries and route complex tickets with context.",
        description:
          "FLOW reduces support load by answering routine questions and handing off edge cases cleanly.",
        primaryCta: { label: "Request Demo", href: "/contact" },
        secondaryCta: { label: "Request Scope Call", href: "/contact" },
      },
      items: ["FAQ resolution", "Ticket routing", "Context handoff", "Support status updates"],
      cta: { label: "Request Demo", href: "/contact" },
    },
    humanHandoff: {
      metadata: {
        title: "Human Handoff Automation | FLOW by Crescora",
        description: "Move conversations to humans with full history and the right next action.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Move conversations to humans with full history and the right next action.",
        description:
          "FLOW hands off context-rich conversations so the next person sees the full interaction history and a clear next step.",
        primaryCta: { label: "Request Demo", href: "/contact" },
        secondaryCta: { label: "Request Scope Call", href: "/contact" },
      },
      items: ["Escalation rules", "Context transfer", "Priority routing", "SLA visibility"],
      cta: { label: "Request Demo", href: "/contact" },
    },
    leadCaptureQualification: {
      metadata: {
        title: "Lead Capture and Qualification Automation | FLOW by Crescora",
        description:
          "Capture enquiries from web, WhatsApp, ads, or landing pages and qualify them before they reach your team.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Capture enquiries and qualify leads automatically.",
        description:
          "FLOW asks the right questions, scores intent, and routes qualified leads to sales or the right team.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      items: [
        "Web, WhatsApp, and ad enquiry capture",
        "Qualification questions and intent scoring",
        "Qualified lead routing with context",
        "Follow-up for incomplete enquiries",
      ],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    faqAutomation: {
      metadata: {
        title: "FAQ Automation for Business | FLOW by Crescora",
        description:
          "Answer repeated questions about pricing, availability, services, documents, timings, and next steps.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Answer repeated questions before they slow your team down.",
        description:
          "FLOW handles routine FAQ conversations and escalates anything complex with full context.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      items: [
        "Pricing and availability answers",
        "Service and timing FAQs",
        "Document and next-step guidance",
        "Escalation when a human is needed",
      ],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    crmApiSync: {
      metadata: {
        title: "CRM and API Sync Automation | FLOW by Crescora",
        description:
          "Send captured leads, appointments, payments, and support details to CRM, Google Sheets, booking systems, or internal tools.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Sync customer actions to your CRM and internal tools.",
        description:
          "FLOW can send leads, bookings, payments, and support updates into the systems your team already uses.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      items: [
        "CRM lead creation and updates",
        "Google Sheets or dashboard sync",
        "Booking and payment status push",
        "Internal API handoff for downstream teams",
      ],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    reminderAutomation: {
      metadata: {
        title: "Reminder Automation for Business | FLOW by Crescora",
        description:
          "Send follow-ups for appointments, payments, pending documents, abandoned enquiries, and scheduled callbacks.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Send follow-up reminders at the right time.",
        description:
          "FLOW triggers reminders for the next step so enquiries, bookings, and payments do not stall silently.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      items: [
        "Appointment reminders",
        "Payment follow-ups",
        "Pending document nudges",
        "Callback and abandoned enquiry follow-ups",
      ],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    ticketCreationEscalation: {
      metadata: {
        title: "Ticket Creation and Escalation Automation | FLOW by Crescora",
        description:
          "Capture issue details, create support tickets, and escalate complex cases with full context.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Create support tickets and escalate complex cases.",
        description:
          "FLOW captures issue details, creates the ticket, and routes it with context so nothing gets lost.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      items: [
        "Issue intake and classification",
        "Ticket creation and assignment",
        "Escalation for complex cases",
        "Status updates and ownership tracking",
      ],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    feedbackCollection: {
      metadata: {
        title: "Feedback and Review Collection Automation | FLOW by Crescora",
        description:
          "Collect customer feedback after appointments, service completion, delivery, or support resolution.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Collect feedback and reviews after each customer action.",
        description:
          "FLOW requests ratings or comments after appointments, service completion, delivery, or support resolution.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      items: [
        "Post-appointment feedback",
        "Service completion ratings",
        "Delivery follow-up requests",
        "Review capture and reporting",
      ],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
  },
  legal: {
    privacy: {
      metadata: {
        title: "Privacy Policy | Crescora AI",
        description:
          "Learn what information Crescora AI collects, how it is used, and the choices available to site visitors and prospects.",
      },
      hero: {
        eyebrow: "Legal",
        title: "Privacy Policy",
        description:
          "This policy explains the information we collect through the website, demo forms, and related communications, and how we use that information to respond to requests and operate our business.",
      },
      updatedOn: "June 18, 2026",
      sections: [
        {
          title: "Information we collect",
          paragraphs: [
            "When you contact us or request a demo, we may collect your name, company name, work email, phone or WhatsApp number, country, industry, primary use case, expected timeline, monthly enquiry volume, preferred channel, current tools, and the problem you want to solve.",
            "We may also collect page URL, referrer URL, and campaign parameters such as UTM values when they are submitted with a form so we can understand where the request came from and follow up in context.",
          ],
        },
        {
          title: "How we use information",
          paragraphs: [
            "We use this information to respond to enquiries, schedule demos, prepare proposals, operate the website, keep records of our communications, and improve the relevance of our content and follow-up process.",
            "We may also use the information to support security, detect abuse, maintain service quality, and meet legal or regulatory obligations when applicable.",
          ],
        },
        {
          title: "How we share information",
          paragraphs: [
            "We share personal information only when it is needed to run the business, such as with team members who handle sales or support, with service providers that help us operate the website or process enquiries, or when disclosure is required by law.",
            "If our business is involved in a merger, acquisition, or similar transaction, the relevant records may be transferred as part of that process.",
          ],
        },
        {
          title: "Retention and security",
          paragraphs: [
            "We keep personal information for as long as needed to manage the enquiry, maintain business records, support the customer relationship, or meet legal, tax, or accounting requirements.",
            "We use administrative, technical, and physical safeguards intended to protect information, but no online system can be guaranteed to be completely secure.",
          ],
        },
        {
          title: "Your choices",
          paragraphs: [
            "You can request access to, correction of, or deletion of the information you have submitted to us, and you can ask us to stop sending non-essential marketing messages.",
            "If you want to update your details or ask how we handle a specific record, contact us using the details below.",
          ],
        },
        {
          title: "Contact us",
          paragraphs: [
            "For privacy questions or data requests, contact the Crescora AI team and we will route your request to the right person.",
          ],
        },
      ],
    },
    terms: {
      metadata: {
        title: "Terms of Service | Crescora AI",
        description:
          "Review the rules for using the Crescora AI website, materials, and services before engaging with the platform.",
      },
      hero: {
        eyebrow: "Legal",
        title: "Terms of Service",
        description:
          "These terms describe how the website and related services may be used, what responsibilities apply to visitors and customers, and which limits govern our relationship.",
      },
      updatedOn: "June 18, 2026",
      sections: [
        {
          title: "Using the website",
          paragraphs: [
            "You may use this website for lawful business and informational purposes. You agree not to interfere with the site, attempt unauthorized access, or use the content in a way that violates applicable law or third-party rights.",
          ],
        },
        {
          title: "Service scope",
          paragraphs: [
            "Crescora AI provides business automation software, implementation support, and related services. The exact scope, timelines, deliverables, and pricing for paid work are defined in the applicable proposal, order form, or service agreement.",
            "We may update, add, or discontinue website features or service descriptions as the product evolves.",
          ],
        },
        {
          title: "User submissions and materials",
          paragraphs: [
            "If you submit business information, files, prompts, or other materials to us, you confirm that you have the right to share them and that they do not contain unlawful or infringing content.",
            "You are responsible for the accuracy of the information you submit and for any decisions made using your own account or business data.",
          ],
        },
        {
          title: "Intellectual property",
          paragraphs: [
            "The website, brand assets, copy, and other content we provide remain the property of Crescora AI or its licensors unless we agree otherwise in writing.",
            "You may not copy, reproduce, distribute, or create derivative works from our materials except where allowed by law or by a written license.",
          ],
        },
        {
          title: "Disclaimer and liability",
          paragraphs: [
            "The website is provided on an as-is basis. We do not guarantee that it will always be uninterrupted, error-free, or available at every moment.",
            "To the maximum extent permitted by law, Crescora AI is not liable for indirect, incidental, or consequential damages arising from use of the website or reliance on its content.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "If you have questions about these terms or want a written agreement for a project, contact the Crescora AI team before you begin implementation.",
          ],
        },
      ],
    },
    cookies: {
      metadata: {
        title: "Cookie Policy | Crescora AI",
        description:
          "Understand how Crescora AI handles cookies, similar technologies, and browser-based preferences on the website.",
      },
      hero: {
        eyebrow: "Legal",
        title: "Cookie Policy",
        description:
          "This policy explains the current cookie and storage behavior on the website and how you can control browser-based preferences.",
      },
      updatedOn: "June 18, 2026",
      sections: [
        {
          title: "Current cookie behavior",
          paragraphs: [
            "The checked-in website does not intentionally rely on marketing cookies or a cookie banner flow. Any non-essential tracking should be added explicitly and documented before use.",
            "Browser, hosting, or embedded services may still set technical data needed to deliver the page, protect the site, or support third-party features if they are introduced later.",
          ],
        },
        {
          title: "How we use similar technologies",
          paragraphs: [
            "If we add analytics, preference storage, or embedded tools in the future, they will be used to understand site performance, remember choices, or support the requested feature.",
            "We will keep the implementation limited to what is needed for the feature and update this policy if the behavior changes.",
          ],
        },
        {
          title: "Your controls",
          paragraphs: [
            "You can usually control cookies and local storage through your browser settings, including blocking or deleting stored data.",
            "If the site later adds a consent tool, you can use it to manage non-essential categories before they are activated.",
          ],
        },
        {
          title: "Changes and contact",
          paragraphs: [
            "If we change how the site uses cookies or similar technologies, we will update this policy to reflect the new behavior.",
            "Questions about cookie handling can be sent to the Crescora AI team using the contact details on the website.",
          ],
        },
      ],
    },
    acceptableUse: acceptableUsePolicyContent,
  },
  notFound: {
    title: "This page does not exist.",
    description: "The route may have moved or is not part of the current release scope.",
    primaryCta: { label: "Back to homepage", href: "/" },
    secondaryCta: { label: "Book Project Demo", href: "/contact" },
  },
} as const;

export type SiteContent = typeof siteContent;
export type PageHeroData = PageHeroCopy;
export type SplitCardPageData = SplitCardPage;
export type LegalPageData = LegalPageCopy;
