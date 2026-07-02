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
    product: "Crescora AI",
    productFull: "Crescora AI",
    legalName: "Crescora.ai",
    seoTitle: "AI Workflow Automation for Customer Conversations and Operations",
    tagline: "Founder-led AI workflow automation for customer conversations, follow-ups, bookings, payments, documents, support, and human handover.",
    description:
      "Crescora AI helps businesses automate enquiries, bookings, reminders, payments, documents, support, and human handover across customer channels and internal workflows.",
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
      eyebrow: "Crescora AI automation journey",
      title: "Customer enquiry to completed workflow",
      badge: "Business Workflow",
      stepLabel: "Step",
    },
    comparisonTemplate: {
      bottomLine: "Bottom line",
      decisionFactors: "Decision factors",
      decisionFactorsTitle: "The differences that matter when a client journey has to work well.",
      decisionFactorsDescription: "This table focuses on the business gap, not just feature naming.",
      factor: "Factor",
      flow: "Crescora AI",
      alternative: "Alternative",
      whyFlowWins: "Why Crescora AI wins",
      whenAlternativeFits: "When the alternative fits",
      recommendedRollout: "Recommended rollout",
      decisionTitle: "Decide on the business fit, not just the tool category.",
      decisionDescription:
        "Crescora AI is designed for businesses that need a customer conversation to become a controlled business outcome. If your team needs that level of clarity, start with a project demo.",
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
        "Crescora AI moves from first reply to next action to handover while keeping the conversation clear for staff.",
      operationalControls: "Operational controls",
      whatImproves: "What improves",
      rollout: "Rollout",
      rolloutTitle: "The rollout sequence should reduce risk before it expands.",
      rolloutDescription: "Start narrow, prove the process, then add the adjacent journeys.",
      nextStep: "Next step",
      nextStepTitle: "Decide on the business fit, not just the tool category.",
      nextStepDescription:
        "Crescora AI is designed for businesses that need a customer conversation to become a controlled business outcome. If your team needs that level of clarity, start with a project demo.",
    },
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
  ] as const,
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
  ] as const,
  ctas: {
    bookProjectDemo: { label: "Book Free Demo", href: "/contact" },
    requestScopeCall: { label: "Discuss My Workflow", href: "/contact" },
    talkToSales: { label: "Discuss My Workflow", href: "/contact" },
    requestDemo: { label: "Book Free Demo", href: "/contact" },
    requestWhatsAppWorkflowDemo: { label: "Book Free Demo", href: "/contact" },
    requestHealthcareDemo: { label: "Book Free Demo", href: "/contact" },
    requestRealEstateDemo: { label: "Book Free Demo", href: "/contact" },
    requestEducationDemo: { label: "Book Free Demo", href: "/contact" },
    viewSolutions: { label: "View Solutions", href: "/solutions" },
    viewBlog: { label: "View Blog", href: "/blog" },
    viewTemplates: { label: "View Industry Templates", href: "/templates" },
    findMyUseCase: { label: "Discuss My Workflow", href: "/contact" },
    getProjectScope: { label: "Discuss My Workflow", href: "/contact" },
    bookFounderPilotReview: { label: "Book Founder-Led Pilot Review", href: "/contact" },
    tryDemo: { label: "Try Crescora AI Demo", href: "/demo" },
    openComparison: { label: "Open comparison", href: "#" },
    openProofPage: { label: "Open workflow example →", href: "#" },
    openUseCase: { label: "Open use case →", href: "#" },
    seePricing: { label: "View Pricing", href: "/pricing" },
    viewWorkflow: { label: "View workflows", href: "#" },
    viewIndustryWorkflow: { label: "View Industry Workflows", href: "/industries" },
  } as const,
  homepage: {
    hero: {
      badge: "Founder-led AI workflow automation",
      title: "AI workflow automation for customer conversations, follow-ups, and business operations.",
      description:
        "Crescora AI helps your team automate repeated customer journeys such as enquiries, appointment booking, lead qualification, payment reminders, document collection, support replies, and human handover.",
      builtForLabel: "Built for",
      builtForText:
        "Businesses that want to start with one real customer workflow, prove value, and scale safely.",
      stats: [
        { value: "One workflow", label: "to prove value before scaling wider" },
        { value: "Founder-led", label: "pilot planning and rollout review" },
        { value: "Measured", label: "response speed, capture, handover, and drop-off points" },
      ],
    },
    founderTrust: {
      eyebrow: "New company. Serious product. Founder-led delivery.",
      title: "We are early. That is why your first workflow gets founder attention.",
      description:
        "Crescora AI is built by a small software engineering team. We work with selected businesses, automate one high-impact workflow first, test it carefully, and expand only after the process proves useful.",
      points: [
        "Direct founder involvement",
        "Clear scope before payment",
        "Demo before launch",
        "Human handover where needed",
        "Fallback paths tested",
        "No fake automation promises",
        "No fake client logos",
        "Pilot metrics reviewed after launch",
      ],
    },
    productProof: {
      eyebrow: "See Crescora AI in action",
      title: "Product proof through demo workflow panels.",
      description:
        "These code-built panels show the public product surfaces Crescora AI is designed around. They use dummy data and do not represent a live customer, hospital, real estate company, or institution.",
      disclaimer:
        "Sample demo using dummy data. Real approved product screenshots can replace these panels when they are available.",
      panels: [
        {
          title: "Automation Builder",
          description: "Design customer journeys step by step with questions, branches, fallbacks, reminders, and handover paths.",
          metric: "50 automation node types",
        },
        {
          title: "Customer Chat Experience",
          description: "Show how customers move through intake, FAQs, booking, payment, document, support, and next-step prompts.",
          metric: "Conversation path",
        },
        {
          title: "Human Handover Queue",
          description: "Move unresolved, sensitive, or high-value cases to the team with context and ownership.",
          metric: "Handover quality",
        },
        {
          title: "Knowledge Base",
          description: "Use approved business knowledge for safer answers, routing, summarization, and escalation.",
          metric: "Grounded answers",
        },
        {
          title: "Analytics Dashboard",
          description: "Track leads, bookings, handovers, follow-ups, drop-offs, and workflow improvement opportunities.",
          metric: "Pilot metrics",
        },
        {
          title: "Payment and Reminder Workflow",
          description: "Request payment steps, send pending reminders, confirm status, and hand over exceptions.",
          metric: "Follow-up completion",
        },
        {
          title: "Document Collection Workflow",
          description: "Request documents, capture status, remind customers, and route review cases to staff.",
          metric: "Document completion",
        },
      ],
    },
    pilotProcess: {
      eyebrow: "How your first Crescora AI pilot works",
      title: "Start narrow, test carefully, expand safely.",
      description:
        "The first rollout should prove one practical customer workflow before expanding into more channels, teams, and integrations.",
      steps: [
        "Workflow discovery",
        "Pilot scope",
        "Workflow design",
        "Build and test",
        "Launch and monitor",
        "Expand safely",
      ],
    },
    pilotMetrics: {
      eyebrow: "What we measure in your first pilot",
      title: "Measurable outcomes replace vague AI promises.",
      items: [
        "First useful response time",
        "Lead capture rate",
        "Booking, demo, or site visit completion",
        "Payment follow-up completion",
        "Document collection completion",
        "Handover quality",
        "Drop-off points",
        "Repeated unanswered questions",
        "Team time saved on repetitive replies",
        "Workflow improvement opportunities",
      ],
    },
    pain: {
      eyebrow: "Pain",
      title: "Your business is not losing customers because of demand. It is losing them because of delay.",
      description:
        "Every missed reply, delayed follow-up, repeated question, manual booking, pending payment, and forgotten lead creates revenue leakage. Crescora AI turns these gaps into automated workflows.",
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
      eyebrow: "What Crescora AI can automate first",
      title: "Start with the WhatsApp, website chat, or follow-up workflow that slows your team down most.",
      description:
        "Pick one high-friction customer journey, automate the repetitive steps with AI where it helps, and keep humans in control of the exceptions.",
      cards: [
        {
          title: "Lead capture and qualification",
          text: "Capture enquiries from website chat, forms, ads, or WhatsApp, ask the right questions, and route serious leads to your team.",
        },
        {
          title: "WhatsApp enquiry and follow-up",
          text: "Reply faster with AI-assisted logic, share next steps, and keep WhatsApp follow-ups moving even when your team is offline.",
        },
        {
          title: "Appointment booking",
          text: "Confirm slots, send reminders, and reduce back-and-forth for every booking.",
        },
        {
          title: "Support and FAQ automation",
          text: "Resolve repeated questions across web chat and social messaging, then escalate complex issues with full context.",
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
    coverage: {
      eyebrow: "Channels and integrations",
      title: "Channel and integration scope is confirmed before rollout.",
      description:
        "Crescora AI supports website chat, approved messaging channels, email/SMS notifications, APIs, webhooks, payment workflows, and custom integrations based on rollout scope. Social messaging, voice workflows, and regulated use cases are reviewed before commitment.",
      cards: [
        {
          title: "Available or core platform scope",
          description: "The starting surface for most focused pilots.",
          items: [
            "Website chat",
            "WhatsApp automation where approved and configured",
            "Telegram automation",
            "Email and SMS notifications",
            "APIs, webhooks, payments, record capture, reminders, handover, and analytics",
          ],
        },
        {
          title: "Scope-dependent",
          description: "Confirmed during discovery before billing starts.",
          items: [
            "CRM sync and calendar or appointment system integration",
            "Google Sheets and helpdesk systems",
            "Custom internal software",
            "Payment links, status updates, and reminder triggers",
            "Multi-branch business rules",
          ],
        },
        {
          title: "Reviewed before commitment",
          description: "Sensitive or provider-dependent work needs extra review.",
          items: [
            "Instagram or Facebook messaging",
            "Voice or call automation",
            "Regulated healthcare workflows",
            "Insurance or financial decision workflows",
            "High-volume campaigns and deep enterprise integrations",
          ],
        },
      ],
    },
    pilot: {
      eyebrow: "Focused pilot",
      title: "Launch a focused first workflow in around two weeks when the scope is ready.",
      description:
        "A focused first workflow can usually be planned and launched in around two weeks when requirements, content, channels, approvals, and integration scope are ready. Complex integrations, messaging approvals, payment gateway setup, custom API work, or client-side delays can affect rollout time.",
      bullets: [
        "Workflow discovery call",
        "First workflow map",
        "Conversation script and fallback copy",
        "Basic automation setup",
        "Testing with sample user scenarios",
        "Demo walkthrough and launch checklist",
        "One improvement review after testing",
      ],
      primaryCta: { label: "Book Free Demo", href: "/contact" },
      secondaryCta: { label: "View Industry Workflows", href: "/industries" },
    },
    outcomes: {
      eyebrow: "Workflow outcomes",
      title: "From first message to next action.",
      description:
        "Crescora AI keeps the customer journey moving with structured replies, reminders, escalation, and outcome tracking.",
      items: [
        "Enquiry -> qualified lead captured",
        "Booking request -> appointment confirmed",
        "Payment or document request -> reminder and status updated",
        "Complex case -> routed to a human with context",
      ],
      automationClaim: "Crescora AI can automate a large share of repetitive FAQs, intake questions, reminders, status updates, and follow-ups once the workflow is mapped correctly.",
      automationSupport:
        "During the pilot, we measure response speed, lead capture rate, booking completion, follow-up completion, handover quality, and drop-off points.",
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
      title: "See how Crescora AI works in your industry.",
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
            "See how Crescora AI fits hospitals, clinics, real estate, education, support, and service businesses.",
          href: "/industries",
          ctaLabel: "Browse industries",
        },
        {
          title: "Automation solutions",
          description:
            "Compare workflow types such as WhatsApp automation, AI website chatbots, support, bookings, documents, and follow-up.",
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
          question: "Is Crescora AI only for WhatsApp?",
          answer:
            "No. Crescora AI can start with website chat or a demo workflow and expand to approved messaging channels, email/SMS, APIs, webhooks, and business systems based on rollout scope.",
        },
        {
          question: "Will AI replace our team?",
          answer:
            "No. Crescora AI is designed to automate routine steps while humans stay involved for sensitive, complex, high-value, or unresolved conversations.",
        },
      {
        question: "How quickly can we launch?",
        answer:
            "A focused first workflow can usually be planned and launched in around two weeks when requirements, content, approvals, channels, and integration scope are ready. Complex integrations or provider approvals can take longer.",
      },
        {
          question: "Can Crescora AI work with our current setup?",
          answer:
            "Yes, when your tools support APIs, webhooks, sheets, CRM access, payment providers, or approved channel connections. We confirm this during scope review.",
        },
        {
          question: "Can we start small?",
          answer:
            "Yes. The recommended path is one workflow, one business problem, and one measurable outcome.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Book Free Demo.",
      description: "We will review your current process and recommend the first workflow worth automating.",
      primary: { label: "Book Free Demo", href: "/contact" },
      secondary: { label: "View Pricing", href: "/pricing" },
    },
  },
  leadForm: {
    badge: "Workflow enquiry",
    title: "Book Free Demo",
    description:
      "Tell us your industry and highest-priority workflow. We will review your current process and suggest the best automation pilot for your team.",
    secureLabel: "Secure form handling",
    submitIdle: "Book Free Demo",
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
      description:
        "Crescora AI builds AI workflow automation for enquiries, follow-ups, bookings, support, and business operations.",
    },
    hero: {
      eyebrow: "About Crescora AI",
      title: "Crescora AI builds practical automation for customer conversations, workflows, and follow-ups.",
      description:
        "We help businesses turn enquiries, repeated questions, bookings, payments, documents, support requests, and follow-ups into structured workflows with human control where it matters.",
      workflowSteps: ["Enquiry", "Qualification", "Booking", "Reminder", "Handover", "Outcome"],
      workflowSignals: [
        "Runtime execution and workflow validation",
        "Human handover and approval controls",
        "Queue status, reminders, and retries",
        "Analytics, records, and API sync",
      ],
      primaryCta: { label: "Book Free Demo", href: "/contact" },
      secondaryCta: { label: "Explore Crescora AI", href: "/platform" },
    },
    whoWeAre: {
      title: "Who we are",
      paragraphs: [
        "Crescora AI builds automation systems for businesses that depend on fast customer response and consistent follow-up.",
        "Crescora AI helps teams convert scattered customer conversations into structured workflows. A customer enquiry can be captured, qualified, routed, booked, followed up, synced to records, and escalated to a human team when required.",
      ],
    },
    mission: {
      title: "Our mission",
      description:
        "Our mission is to help businesses reduce manual follow-up work and respond to customers faster without losing human control.",
      support:
        "We believe automation should not replace teams. It should help teams focus on important conversations while routine steps are handled consistently.",
      card: "Turn every customer request into a clear, trackable workflow.",
    },
    whatWeBuild: {
      title: "What we build",
      description: "We build automation systems that connect customer messages to business actions.",
      support:
        "Each workflow can be designed with intake, routing, reminders, payments, records, handover, analytics, and fallback paths so the customer journey does not depend only on manual effort.",
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
      title: "Why we built Crescora AI",
      paragraphs: [
        "Many businesses are not losing revenue because they lack demand. They lose revenue because customer requests get stuck between chats, calls, forms, spreadsheets, team members, and manual follow-ups.",
        "Crescora AI was built to bring those steps into one structured operating workflow. It helps teams respond faster, capture the right information, automate routine actions, escalate exceptions, and track outcomes with more visibility.",
      ],
    },
    belief: {
      title: "Our belief",
      description:
        "Automation should be simple, controlled, and useful from the first workflow. We believe the best automation starts small: one business problem, one customer journey, one measurable outcome. Once that workflow works, businesses can expand into more channels, teams, integrations, and use cases.",
      card: "Start small. Prove value. Scale with confidence.",
    },
    founderLed: {
      title: "Built by a founder-led software team",
      paragraphs: [
        "Crescora AI is built by a small software engineering team from Hyderabad focused on one clear problem: businesses lose leads, bookings, payments, and support quality when customer conversations are scattered across chats, calls, forms, spreadsheets, and manual follow-ups.",
        "The founding team brings hands-on experience from AI-company work and larger enterprise ecommerce environments, with a practical focus on product engineering, workflow automation, customer operations, and scalable business systems.",
        "We are early, hands-on, and product-led. Your first workflow is not passed through multiple layers. The founding team studies your current process, maps the automation, builds the workflow, tests edge cases, and supports the pilot launch directly.",
        "We do not pretend to have a large portfolio. We are software developers building Crescora AI from the ground up, and we work with selected businesses where we can prove value through one practical workflow first.",
      ],
      founders: [
        {
          name: "Navya Chirumalla",
          role: "Co-founder",
          summary:
            "Founder with experience across AI-company work, product execution, and customer workflow automation.",
          linkedin: "https://www.linkedin.com/in/navyachirumalla",
        },
        {
          name: "Prashanth Chinala",
          role: "Co-founder",
          summary:
            "Founder with experience across larger enterprise ecommerce environments, software engineering, and workflow systems.",
          linkedin: "https://www.linkedin.com/in/prashanth-chinala/",
        },
      ],
    },
    whatWeWillNotDo: {
      title: "What we will not do",
      items: [
        "We will not show fake client logos",
        "We will not promise guaranteed automation percentages",
        "We will not hide third-party provider costs",
        "We will not fully automate sensitive decisions without human review",
        "We will not sell a large rollout before proving one workflow",
        "We will not claim a feature is live if it needs custom integration or provider approval",
      ],
    },
    notOnly: {
      title: "What Crescora AI is not",
      items: [
        "Crescora AI is not only a chatbot script",
        "Crescora AI is not a replacement for your team",
        "Crescora AI is not a magic AI system that can safely decide everything",
        "Crescora AI is not a guaranteed lead conversion tool",
        "Crescora AI is not a substitute for legal, medical, financial, or professional review",
      ],
      summary:
        "Crescora AI is a workflow automation system that helps your team capture, route, follow up, remind, escalate, and track customer journeys.",
    },
    proofPolicy: {
      title: "Our proof policy",
      description:
        "Crescora AI is currently building with selected early customers and demo workflows. We only publish review screenshots or customer proof when it has been supplied for public use. We do not show fake client logos, fake testimonials, or inflated results. Instead, we show product demos, workflow examples, pilot scope, founder-led delivery, public review screenshots, and measurable outcomes.",
      reviewScreenshots: {
        eyebrow: "Early public feedback",
        title: "Public review screenshots shared for transparency",
        description:
          "These are public review screenshots shared for transparency. They are not case studies, paid endorsements, client logos, or guaranteed outcome claims.",
        items: [
          {
            name: "Vidya",
            quote:
              "Good platform for automating repetitive customer conversations. It can be useful for clinics, real estate, schools and many other businesses.",
            image: "/reviews/vidya-review.png",
            alt: "Screenshot of a public review from Vidya about Crescora AI automation for repetitive customer conversations.",
            sourcePlatform: "Public review platform screenshot supplied by Crescora AI",
            reviewDate: "24 Jun",
            isPublicReviewScreenshot: true,
            sourceHref: null,
          },
          {
            name: "Swetha",
            quote:
              "Good solution for businesses that want to manage leads properly without missing enquiries. The automation workflow looks professional.",
            image: "/reviews/swetha-review.png",
            alt: "Screenshot of a public review from Swetha about Crescora AI lead management and automation workflow.",
            sourcePlatform: "Public review platform screenshot supplied by Crescora AI",
            reviewDate: "24 Jun",
            isPublicReviewScreenshot: true,
            sourceHref: null,
          },
          {
            name: "Sai Krishna",
            quote:
              "Very useful service for business that get many customer enquiries every day. it helps reduce manual follow-up work and keeps things organized",
            image: "/reviews/sai-krishna-review.png",
            alt: "Screenshot of a public review from Sai Krishna about Crescora AI reducing manual follow-up work.",
            sourcePlatform: "Public review platform screenshot supplied by Crescora AI",
            reviewDate: "23 Jun",
            isPublicReviewScreenshot: true,
            sourceHref: null,
          },
          {
            name: "Prameela",
            quote: null,
            image: "/reviews/prameela-review.png",
            alt: "Screenshot of a public review capture from Prameela about Crescora AI.",
            sourcePlatform: "Public review platform screenshot supplied by Crescora AI",
            reviewDate: "23 Jun",
            isPublicReviewScreenshot: true,
            sourceHref: null,
          },
        ],
      },
    },
    legalIdentity: {
      title: "Legal identity details",
      description:
        "Crescora AI is operated by the founder-led team behind Crescora.ai. The business registration reference is UDYAM-TS-02-0344089. Business availability is Monday to Saturday, 10:00 AM to 6:00 PM IST. Support coverage depends on plan and agreed rollout scope, and emergency support is available only for active clients where explicitly agreed.",
      details: [
        { label: "Legal / business name", value: "Crescora.ai" },
        { label: "Business registration reference", value: "UDYAM-TS-02-0344089" },
        { label: "Business availability", value: "Monday to Saturday, 10:00 AM to 6:00 PM IST" },
        { label: "Support coverage", value: "Based on plan and agreed rollout scope" },
        { label: "Emergency support", value: "Available only for active clients where explicitly agreed" },
        { label: "Office visits", value: "By invitation or appointment through email" },
      ],
    },
    whoWeHelp: {
      title: "Who we help",
      description: "Crescora AI is built for businesses that handle repeated customer conversations and operational follow-ups.",
      cards: [
        {
          title: "Hospitals and Clinics",
          text: "Appointment booking, patient FAQs, reminders, document collection, payment updates, report requests, and staff handover.",
        },
        {
          title: "Real Estate Teams",
          text: "Lead qualification, project details, site visit booking, budget capture, follow-ups, reminders, and sales handover.",
        },
        {
          title: "Education and Coaching",
          text: "Admission enquiries, course FAQs, demo class booking, document collection, fee reminders, and counsellor routing.",
        },
        {
          title: "Support Teams",
          text: "FAQ automation, issue capture, ticket creation, escalation, status updates, and customer follow-ups.",
        },
        {
          title: "Service Businesses",
          text: "Bookings, reminders, payment follow-ups, service requests, customer updates, and repeat-visit communication.",
        },
        {
          title: "Diagnostics and Labs",
          text: "Test enquiries, home collection booking, report updates, payment confirmation, reminders, and notifications.",
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
          text: "We understand your customer journey, repeated questions, manual steps, current tools, and where customers or teams get stuck.",
        },
        {
          title: "Design",
          text: "We map the workflow, messages, decisions, fallback paths, handover rules, and success outcomes.",
        },
        {
          title: "Build",
          text: "We configure the automation workflow, forms, reminders, FAQs, integrations, and team routing.",
        },
        {
          title: "Test",
          text: "We test real user scenarios, invalid inputs, handover cases, edge conditions, and fallback paths before launch.",
        },
        {
          title: "Launch",
          text: "We help you start with one practical workflow and monitor early usage.",
        },
        {
          title: "Improve",
          text: "We review drop-offs, repeated questions, missed opportunities, support escalations, and workflow outcomes to improve the automation over time.",
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
          text: "Crescora AI is not only a chatbot. It connects customer messages to business steps, records, reminders, and team actions.",
        },
        {
          title: "India-first, global-ready",
          text: "Crescora AI is designed around practical business needs in India, with workflows that can scale for global service teams as the business grows.",
        },
        {
          title: "Start small, expand later",
          text: "Businesses can begin with one workflow and scale into more use cases after the process is useful.",
        },
      ],
    },
    trust: {
      title: "Built for automation with control",
      description:
        "Crescora AI is designed to help teams automate routine work without losing visibility or ownership.",
      cards: [
        {
          title: "Human handover",
          text: "Escalate sensitive, urgent, or complex conversations to the right team with context.",
        },
        {
          title: "Workflow visibility",
          text: "Track conversations, pending tasks, reminders, drop-offs, and outcomes in one operating workflow.",
        },
        {
          title: "Governed automation",
          text: "Use approvals, audit history, retries, and role-based controls where the process requires accountability.",
        },
        {
          title: "Continuous improvement",
          text: "Review delays, repeated questions, support patterns, and workflow results to improve launch quality over time.",
        },
      ],
      bullets: [
        "Human handover for sensitive or high-value conversations",
        "Fallback paths when a step fails or a user drops off",
        "API failure handling, retries, and safe escalation",
        "Preview before publishing and pre-launch testing",
        "Role-based access, approvals, and audit history where required",
        "Visible progress for team action, reporting, and outcome tracking",
      ],
    },
    product: {
      title: "Crescora AI is one brand and one automation platform.",
      description:
        "Crescora AI is the company and the platform name we use publicly. We build AI-powered workflow automation for businesses that want faster responses, better follow-ups, human handover, and operational visibility.",
      details: [
        "Crescora AI combines workflow building, runtime execution, reminders, integrations, human handover, analytics, and monitoring in one operating layer.",
        "One public brand: Crescora AI",
        "One automation platform: Crescora AI",
        "Rollout model: launch one workflow first, then expand to more channels, teams, records, and use cases.",
      ],
    },
    pilot: {
      title: "Start with a focused pilot",
      description:
        "The best way to begin is with one high-impact workflow. For example, a hospital appointment workflow, real estate lead qualification workflow, education admission enquiry workflow, or customer support FAQ workflow.",
      bullets: [
        "One complete automation workflow",
        "Up to 15 workflow steps",
        "Web or WhatsApp setup",
        "Basic FAQ or scripted response workflow",
        "Demo walkthrough with your team",
        "Optimization suggestions after testing",
      ],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    finalCta: {
      title: "Ready to turn your customer workflow into automation?",
      note: "Start with one workflow. Prove value. Expand with confidence.",
      summary:
        "Tell us how your team currently handles enquiries, bookings, documents, payments, support, or follow-ups. We will map your process and show the fastest Crescora AI automation to launch first.",
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
      title: "Sales, support, contact, and office details.",
      description:
        "Use these contact points for new demos, technical help, phone contact, executive correspondence, or office visits.",
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
    nextSteps: {
      eyebrow: "What happens next?",
      title: "Your request becomes a workflow review, not just a sales callback.",
      items: [
        "We review your business, industry, and workflow",
        "We identify the best first automation",
        "We map the customer journey and handover points",
        "We confirm scope, channels, timeline, and provider costs",
        "We show a demo or pilot plan before rollout",
      ],
    },
    responseExpectation: "We usually respond within 1 business day.",
    founderLedNote:
      "For selected pilot requests, a founder or product team member may join the workflow discovery call.",
    consent:
      "By submitting this form, you agree that Crescora AI may contact you about your automation request. We use your details only for demo, sales, onboarding, and support communication. Read our Privacy Policy.",
  },
  pricing: {
    metadata: {
      title: "Crescora AI Pricing | India and Global Automation Packages",
      description:
        "Explore India and global package-based plans for workflow automation, rollout support, and scoped implementation.",
    },
    hero: {
      eyebrow: "Pricing",
      title: "Launch one workflow first. Scale automation as your business grows.",
      description:
        "Start with a focused automation for leads, bookings, payments, documents, reminders, support, or handovers. Expand into more teams, channels, integrations, and customer journeys when your operations are ready.",
      trustLine: "Plans are designed for real business workflows, not basic chatbot replies.",
      primaryCta: { label: "Book Free Demo", href: "/contact" },
      secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
    },
    regionSelector: {
      label: "Billing region",
      helperText:
        "Pricing changes by billing region, workflow scope, selected channels, integrations, automation complexity, and support requirements.",
      indiaLabel: "India - INR ₹",
      globalLabel: "Rest of World - USD $",
    },
    included: {
      title: "Every plan includes",
      items: [
        "Workflow planning and setup guidance",
        "Automation testing before launch",
        "Customer-facing conversation workflow",
        "Admin visibility for workflow activity",
        "Human handover path where required",
        "Upgrade path as your workflow grows",
      ],
    },
    beforeLaunch: {
      eyebrow: "Included before launch",
      title: "Every paid pilot includes practical rollout preparation.",
      items: [
        "Workflow discovery call",
        "First workflow map",
        "Conversation script and fallback copy",
        "Basic automation setup",
        "Testing with sample user scenarios",
        "Demo walkthrough",
        "Launch checklist",
        "One improvement review after testing",
      ],
    },
    mayCostExtra: {
      eyebrow: "What may cost extra",
      title: "Provider fees and complex scope are confirmed before billing starts.",
      items: [
        "WhatsApp Business API or messaging provider fees",
        "SMS and email provider fees",
        "Payment gateway charges",
        "Complex CRM or custom API integrations",
        "Custom dashboards",
        "Multi-location rollout",
        "Large-volume AI usage",
        "Dedicated SLA or support commitment",
      ],
    },
    trustCopy:
      "Before billing starts, Crescora AI confirms the workflow scope, channels, integrations, estimated usage, third-party provider costs, timeline, support expectations, and what is outside scope.",
    cancellationPolicy:
      "Monthly subscriptions can be cancelled before the next billing period. Provider charges, consumed usage, completed setup work, and activated custom implementation may not be refundable. Any custom agreement will define scope, payment schedule, cancellation terms, and deliverables before work begins.",
    clientReadiness: {
      eyebrow: "Client readiness checklist",
      title: "Before your Crescora AI pilot starts, prepare the inputs that prevent delay.",
      items: [
        "Business goal",
        "Primary workflow",
        "FAQ or service content",
        "Contact person from your team",
        "Required customer fields",
        "Handover owner or team",
        "Existing tool access",
        "Messaging, payment, or API provider status",
        "Sample customer scenarios",
        "Approval for messages and templates",
      ],
    },
    scopeClarity: {
      eyebrow: "Scope clarity before launch",
      title: "Crescora AI confirms the operating boundaries before rollout.",
      items: [
        "workflow to automate",
        "Channels required",
        "Integration systems",
        "Data to capture",
        "Handover owners",
        "Payment or provider requirements",
        "AI usage assumptions",
        "Third-party provider costs",
        "Timeline and dependencies",
        "Included revisions",
        "Support expectations",
      ],
    },
    scopeNote:
      "Package pricing starts from the listed monthly rate. Final pricing is confirmed after understanding your workflow scope, selected channels, integrations, automation complexity, message volume, AI usage, and support needs. We recommend the right package after reviewing your use case.",
    regionNotes: {
      india:
        "India pricing is shown in INR for India-billed customers. Final pricing still depends on workflow scope, selected channels, integrations, AI usage, support level, and rollout complexity.",
      global:
        "USD pricing is for customers outside India. Final pricing depends on workflow scope, selected channels, integrations, AI usage, support level, and rollout complexity.",
    },
    ctas: {
      primary: { label: "Book Free Demo", href: "/contact" },
      secondary: { label: "Discuss My Workflow", href: "/contact" },
    },
    factors: {
      eyebrow: "What affects pricing",
      title: "What affects your final pricing?",
      description:
        "The listed plan gives the starting package. Final scope depends on how much workflow depth, channel coverage, integration work, and rollout support your team needs.",
      items: [
        {
          title: "Workflow scope",
          description:
            "Number of workflows, branches, forms, reminders, handovers, and business rules.",
        },
        {
          title: "Channels",
          description:
            "Web chat, WhatsApp, and other approved customer touchpoints your workflow needs to support.",
        },
        {
          title: "Integrations",
          description:
            "CRM, Google Sheets, booking tools, payment systems, internal APIs, or custom systems.",
        },
        {
          title: "AI and automation depth",
          description:
            "FAQ answers, AI extraction, grounded responses, routing, summaries, and workflow logic.",
        },
        {
          title: "Support and rollout",
          description:
            "Testing, optimization, team training, multi-location rollout, and ongoing support.",
        },
      ],
    },
    faq: {
      eyebrow: "Pricing FAQ",
      title: "Common pricing questions before you book a demo.",
      description:
        "These answers help buyers understand how Crescora AI pricing works when the rollout starts with one workflow.",
      items: [
        {
          question: "Do you have separate pricing for India and global customers?",
          answer:
            "Yes. India pricing is shown in INR and Rest of World pricing is shown in USD. Select your billing region from the pricing dropdown to view the correct package rates.",
        },
        {
          question: "Are WhatsApp, SMS, payment gateway, and AI provider costs included?",
          answer:
            "Provider charges for WhatsApp, SMS, payment gateways, and AI services can vary based on your selected rollout scope, channels, usage volume, and support requirements. We confirm those costs during the scope discussion before launch.",
        },
        {
          question: "Can I start with one workflow and upgrade later?",
          answer:
            "Yes. Most businesses start with one high-impact workflow such as lead capture, appointment booking, payment reminders, FAQ support, or document follow-up, then expand into more workflows over time.",
        },
        {
          question: "Is setup included in the monthly price?",
          answer:
            "Basic setup and testing are included based on the selected plan. Complex integrations, custom workflows, multi-location rollout, or advanced automation may require separate implementation scope.",
        },
        {
          question: "Do I need WhatsApp from day one?",
          answer:
            "No. You can start with web chat or a demo workflow first, then add WhatsApp or other approved channels after the workflow is validated and approved.",
        },
      ],
    },
  },
  trust: {
    metadata: {
      title: "Crescora AI Trust | Client Control and Visibility",
      description:
        "Understand how Crescora AI supports client-facing workflows with human review, visible progress, and clear boundaries.",
    },
    hero: {
      eyebrow: "Trust and Control",
      title: "Control, visibility, and accountability for client-facing work.",
      description:
        "Crescora AI helps teams keep important conversations visible, reviewed, and on track while staff stay in control.",
      primaryCta: { label: "Discuss My Workflow", href: "/contact" },
      secondaryCta: { label: "Book Free Demo", href: "/contact" },
    },
    handoffBadge: "Human handover",
    handoffTitle: "Human review is part of the process from the start.",
    dependableBadge: "What keeps it dependable",
    dependableText:
      "Crescora AI keeps the client journey moving with reminders, follow-up steps, handover, records, and clear progress visibility.",
    controlTitle: "Responsible claims and clear boundaries",
    controlText:
      "Crescora AI supports business process control. Regulatory and legal claims should only be made after formal review and verification for your deployment context.",
    cta: { label: "Book Free Demo", href: "/contact" },
  },
  trustPages: {
    security: {
      metadata: {
        title: "Security and Data Protection | Crescora AI",
        description:
          "Crescora AI security and data protection approach for authentication, access control, auditability, integrations, and safe rollout.",
      },
      hero: {
        eyebrow: "Security",
        title: "Security and data protection for practical business automation.",
        description:
          "Crescora AI is early, and we do not claim certifications we do not yet have. Our security approach focuses on authentication, workspace isolation, role-based access, audit logs, controlled integrations, limited data access, monitoring, and safe rollout practices.",
        primaryCta: { label: "Book Founder-Led Pilot Review", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      sections: [
        {
          title: "Current safeguards",
          items: [
            "Account authentication",
            "Two-factor authentication support",
            "Workspace-scoped access",
            "Role-based access",
            "Audit logs where required",
            "Runtime validation before workflow launch",
            "Controlled channel and integration setup",
            "Provider credential handling",
            "Data export and deletion request path",
          ],
        },
        {
          title: "Not yet claimed",
          items: [
            "SOC 2 certification",
            "ISO 27001 certification",
            "HIPAA certification",
            "Guaranteed enterprise uptime SLA for every plan",
          ],
        },
      ],
    },
    responsibleAi: {
      metadata: {
        title: "Responsible AI at Crescora AI",
        description:
          "Responsible AI principles for Crescora AI workflows, including human review, low-confidence escalation, approved knowledge, and audit trails.",
      },
      hero: {
        eyebrow: "Responsible AI",
        title: "AI should assist workflows, not silently replace accountable people.",
        description:
          "Crescora AI uses AI to support classification, extraction, summarization, routing, recommendations, and response drafting. Sensitive decisions should remain under human review, especially in healthcare, finance, insurance, legal, education, compliance, and safety-related workflows.",
        primaryCta: { label: "Discuss My Workflow", href: "/contact" },
        secondaryCta: { label: "View Pricing", href: "/pricing" },
      },
      sections: [
        {
          title: "Responsible AI principles",
          items: [
            "AI assists; humans remain accountable",
            "Low-confidence cases should be routed to humans",
            "Sensitive actions should include review or approval",
            "AI answers should use approved business knowledge where possible",
            "Customers should configure consent and data usage correctly",
            "Audit trails should be enabled for sensitive workflows",
          ],
        },
        {
          title: "High-risk workflow note",
          items: [
            "Crescora AI can support intake, reminders, status updates, document collection, routing, and handover workflows",
            "It should not replace qualified professionals for medical, legal, financial, insurance, or regulated decisions",
            "Sensitive cases should use human review, clear ownership, and audit trails",
          ],
        },
      ],
    },
    dataProcessing: {
      metadata: {
        title: "Data Processing | Crescora AI",
        description:
          "How Crescora AI may process customer workflow data, why it is processed, retention expectations, deletion paths, and provider involvement.",
      },
      hero: {
        eyebrow: "Data Processing",
        title: "Clear data processing boundaries before workflow launch.",
        description:
          "Crescora AI may process customer messages, contact details, workflow fields, documents, payment status data, support context, handover notes, analytics events, and integration payloads when required for a scoped rollout.",
        primaryCta: { label: "Discuss My Workflow", href: "/contact" },
        secondaryCta: { label: "View Pricing", href: "/pricing" },
      },
      sections: [
        {
          title: "What data may be processed",
          items: [
            "Customer contact and enquiry details",
            "Conversation messages and workflow responses",
            "Booking, payment, document, support, and handover status",
            "Operational analytics such as completion and drop-off points",
            "Integration data required to complete the approved workflow",
          ],
        },
        {
          title: "Processing and control",
          items: [
            "Data is processed to run, monitor, improve, and support approved workflows",
            "The customer remains responsible for lawful collection, consent, and use of their customer data",
            "Retention, deletion, export, and provider involvement should be confirmed during scope review",
            "Businesses should not upload sensitive data without proper permission and a suitable workflow design",
          ],
        },
      ],
    },
    subprocessors: {
      metadata: {
        title: "Subprocessors | Crescora AI",
        description:
          "Subprocessor categories Crescora AI may use for hosting, database, AI models, messaging, email/SMS, payments, analytics, and monitoring.",
      },
      hero: {
        eyebrow: "Subprocessors",
        title: "Provider categories are disclosed before rollout.",
        description:
          "Exact vendor names will be added once finalized for each production rollout. Until then, Crescora AI lists provider categories so customers can review what may be involved.",
        primaryCta: { label: "Discuss My Workflow", href: "/contact" },
        secondaryCta: { label: "View Pricing", href: "/pricing" },
      },
      sections: [
        {
          title: "Provider categories",
          items: [
            "Hosting provider",
            "Database provider",
            "AI model providers",
            "Messaging providers",
            "SMS and email providers",
            "Payment provider",
            "Analytics and monitoring providers",
          ],
        },
        {
          title: "Commitment",
          items: [
            "Exact vendor names should be confirmed before production launch",
            "Provider costs and approval requirements are reviewed during scope planning",
            "Sensitive or regulated workflows may require extra contractual and security review",
          ],
        },
      ],
    },
    support: {
      metadata: {
        title: "Support at Crescora AI",
        description:
          "Crescora AI support channels, response targets, included support scope, exclusions, and escalation expectations.",
      },
      hero: {
        eyebrow: "Support",
        title: "Support expectations should be clear before launch.",
        description:
          "Crescora AI support covers bug checks, basic configuration guidance, workflow questions, and rollout support based on the selected plan and agreed scope.",
        primaryCta: { label: "Book Founder-Led Pilot Review", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      sections: [
        {
          title: "Support channels",
          items: [
            "Email support",
            "Sales or contact email",
            "Client communication channel after onboarding",
            "Emergency contact only for active business clients where agreed",
          ],
        },
        {
          title: "Response targets",
          items: [
            "Starter: within 2 business days",
            "Growth: within 1 business day",
            "Business: same business day where possible",
            "Enterprise/custom: based on agreed SLA",
          ],
        },
        {
          title: "What support does not include by default",
          items: [
            "Unlimited new workflows",
            "Unlimited custom integrations",
            "Third-party provider outages",
            "Major scope changes unless agreed",
          ],
        },
      ],
    },
  },
    platform: {
      metadata: {
        title: "How Crescora AI Works | Client Project Automation",
        description:
          "See how Crescora AI helps your team handle enquiries, follow-ups, and project handover with control.",
      },
      hero: {
        eyebrow: "How It Works",
        title: "See how Crescora AI turns enquiries into completed workflows.",
        description:
          "Crescora AI helps your team handle enquiries, follow-ups, handovers, reminders, and outcome tracking in one simple business workflow.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      section: {
        eyebrow: "What you get",
        title: "Built for business workflows that need structure and follow-through.",
        description:
          "Crescora AI helps your team stay consistent with enquiry handling, reminders, handover, records, and outcome tracking.",
      },
      architecture: {
        eyebrow: "How Crescora AI works",
        title: "The workflow behind the conversation.",
        description:
          "Crescora AI is built as a workflow automation system. The visual builder defines the customer journey, the runtime validates the workflow, the execution engine runs each step, and operational dashboards help teams monitor conversations, handovers, records, reminders, payments, and outcomes.",
        items: [
          "Visual automation builder",
          "Customer conversation layer",
          "Business rules and routing",
          "AI classification and extraction",
          "Knowledge base answers",
          "Records and structured data",
          "Payment and reminder steps",
          "Human handover",
          "Audit and analytics",
          "Integrations and webhooks",
          "Security and governance",
        ],
      },
      team: {
        badge: "Team control",
        title: "The team stays in control of important decisions.",
        startLabel: "Start here",
        startTitle: "See how Crescora AI can automate your first workflow.",
        startText:
          "We review your current setup, customer journey, and team structure to recommend the right starting point.",
        cta: { label: "Book Free Demo", href: "/contact" },
      },
    },
    industriesIndex: {
      metadata: {
        title: "Industries | Crescora AI",
        description: "Industry workflows built for real operations.",
      },
      hero: {
        eyebrow: "Industry workflows",
        title: "AI workflow automation for service businesses with repeated enquiries, bookings, documents, payments, reminders, support requests, and handovers.",
        description:
          "Start with a practical industry workflow and automate the steps your team repeats every day - enquiries, bookings, documents, payments, reminders, support requests, approvals, and human handovers.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
        trustLine:
          "Built for hospitals, clinics, schools, real estate, labs, coaching centers, finance teams, support teams, and service businesses.",
        previewLabel: "Workflow preview",
        previewTitle: "Enquiry to outcome, in one governed workflow.",
        previewSteps: [
          "Enquiry",
          "Qualification",
          "Booking",
          "Payment",
          "Reminder",
          "Handover",
        ],
      },
      proofStrip: {
        eyebrow: "Platform proof",
        title: "Built to automate real operations, not just answer chats.",
        description:
          "Crescora AI supports conversation nodes, business logic, timing and reliability controls, integrations, records, documents, appointments, payments, human handoff, language handling, analytics, and AI-assisted steps.",
        capabilities: [
          "Lead Capture",
          "Appointment Booking",
          "Payments",
          "Document Intake",
          "Support Routing",
          "Human Handoff",
          "Reminders",
          "Analytics",
          "Knowledge Base",
          "Governance",
        ],
        platformLine:
          "50 automation node types across conversation, logic, timing, reliability, integrations, records, documents, payments, handover, analytics, governance, and AI, multi-channel automation, human handoff, payments, records, analytics, and governance.",
      },
      cards: [
        {
          title: "Hospitals",
          href: "/industries/hospitals",
          description:
            "Automate appointment booking, patient intake, doctor routing, payments, lab report requests, admission enquiries, insurance support, reminders, and emergency handover.",
          ctaLabel: "View Hospital Workflow",
        },
        {
          title: "Clinics",
          href: "/industries/clinics",
          description:
            "Reduce front-desk pressure with automated appointment booking, patient details collection, consultation fee collection, doctor availability checks, and follow-up reminders.",
          ctaLabel: "View Clinic Workflow",
        },
        {
          title: "Real Estate",
          href: "/industries/real-estate",
          description:
            "Qualify property leads, collect budget and location preferences, share matching projects, schedule site visits, send reminders, and route hot leads to sales teams.",
          ctaLabel: "View Real Estate Workflow",
        },
        {
          title: "Education / Admissions",
          href: "/industries/education",
          description:
            "Handle admission enquiries, collect student details, explain courses or programs, schedule counselling calls, send fee reminders, and route parents to the right team.",
          ctaLabel: "View Education Workflow",
        },
        {
          title: "Coaching Centers / EdTech",
          href: "/contact",
          description:
            "Capture course enquiries, qualify students, book demo classes, share batch details, send payment reminders, and follow up with students and parents automatically.",
          ctaLabel: "Discuss My Workflow",
        },
        {
          title: "Diagnostics / Labs",
          href: "/templates/lab-report-notification-flow",
          description:
            "Automate test enquiries, home sample collection requests, report status checks, payment confirmation, patient reminders, and support handover for urgent cases.",
          ctaLabel: "View Lab Workflow",
        },
        {
          title: "Customer Support Teams",
          href: "/industries/support-teams",
          description:
            "Classify repeated questions, capture issue details, create support cases, route urgent requests, escalate unhappy customers, and track resolution status.",
          ctaLabel: "View Support Workflow",
        },
        {
          title: "Service Businesses",
          href: "/industries/service-businesses",
          description:
            "Automate bookings, service requests, payment follow-ups, reminders, customer updates, technician assignment, and repeat-visit follow-ups from one workflow.",
          ctaLabel: "View Service Workflow",
        },
        {
          title: "Salons / Spas / Wellness",
          href: "/contact",
          description:
            "Book slots, promote packages, confirm payments, send visit reminders, collect feedback, and bring customers back with automated repeat-visit follow-ups.",
          ctaLabel: "Discuss My Workflow",
        },
        {
          title: "Insurance / Finance Services",
          href: "/contact",
          description:
            "Collect leads, capture documents, track application status, send payment reminders, route policy or claim questions, and hand off sensitive cases to advisors.",
          ctaLabel: "Discuss My Workflow",
        },
      ],
      engineSection: {
        eyebrow: "Workflow engine",
        title: "One workflow engine. Multiple industries. Real business outcomes.",
        description:
          "Crescora AI helps teams move customer requests from enquiry to completion without scattered chats, manual follow-ups, missed payments, or unclear ownership. Each workflow can collect data, apply business rules, trigger AI assistance, send updates, create records, schedule reminders, and escalate exceptions to the right person.",
        outcomes: [
          {
            title: "Capture every enquiry",
            description:
              "Turn website, chat, social, and campaign enquiries into structured workflows.",
          },
          {
            title: "Respond faster",
            description:
              "Give customers instant next steps while your team focuses on high-value work.",
          },
          {
            title: "Stop manual follow-ups",
            description:
              "Automate reminders for bookings, payments, documents, visits, and callbacks.",
          },
          {
            title: "Route work clearly",
            description:
              "Send each request to the right department, agent, queue, or approval path.",
          },
          {
            title: "Keep humans in control",
            description:
              "Use handover, review, approval, and audit trails for sensitive or complex cases.",
          },
          {
            title: "Track what is pending",
            description:
              "Give owners and managers visibility into open tasks, delays, escalations, and outcomes.",
          },
        ],
      },
      moreIndustries: {
        eyebrow: "Industry fit",
        title: "Crescora AI can be adapted when the workflow is repeatable, scoped, and worth automating.",
        description:
          "Crescora AI can be adapted when the workflow is repeatable, the scope is clear, and the business has enough repeated customer interactions to justify automation.",
        chips: [
          "Ecommerce",
          "Retail stores",
          "Restaurants and cloud kitchens",
          "Travel agencies",
          "Hotels and resorts",
          "Gyms and fitness centers",
          "Automobile dealers",
          "Repair and maintenance services",
          "Logistics and courier businesses",
          "HR and recruitment agencies",
          "Legal service firms",
          "Accounting and tax consultants",
          "Interior design firms",
          "Construction companies",
          "Event management companies",
          "Packers and movers",
          "Local service providers",
          "B2B agencies",
          "SaaS support teams",
          "Manufacturing operations teams",
        ],
      },
      phaseTwo: {
        eyebrow: "Need another industry?",
        title: "Don't see your exact industry? We can still automate your workflow.",
        description:
          "If your business receives enquiries, collects information, books appointments, sends reminders, handles payments, manages support, or follows up with customers, Crescora AI can be configured around your process.",
        trustLine:
          "Share your current process. We'll show how it can be converted into an automated customer workflow.",
      },
      seoLandingPages: {
        eyebrow: "Workflow discovery pages",
        title: "Explore more automation solution pages.",
        description:
          "Each page explains a practical workflow, use case, and demo path for a specific industry or business problem.",
      },
    },
    useCasesIndex: {
      metadata: {
        title: "Use Cases | Crescora AI",
        description: "Choose the workflow you want to automate first.",
      },
      hero: {
        eyebrow: "Use Cases",
        title: "Choose the workflow you want to automate first.",
        description:
          "Start with the workflow that affects your response speed, revenue, support load, or daily operations the most.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
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
      moreWorkflowsLabel: "More workflows Crescora AI can automate",
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
    workflowsIndex: {
      metadata: {
        title: "Workflow Templates | Crescora AI",
        description: "Pilot-ready workflow blueprints for leads, bookings, payments, support, and follow-ups.",
      },
      hero: {
        eyebrow: "Workflow Templates",
        title: "Pilot-ready workflow blueprints for leads, bookings, payments, support, and follow-ups.",
        description:
          "Explore practical automation blueprints that show how customer requests move from intake to qualification, booking, reminders, payments, support, handover, reporting, and resolution.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
        trustLine: "Built for real operations, not basic chatbot replies.",
      },
      proofStrip: {
        eyebrow: "Crescora AI can coordinate the full customer journey.",
        title: "Capture, qualify, route, book, collect payment, send reminders, sync records, escalate, and track outcomes in one workflow layer.",
        description:
          "Crescora AI supports conversation nodes, business logic, timing and reliability controls, integrations, records, document intake, appointments, payments, human handoff, AI assistance, and operational visibility.",
        capabilities: [
          "Capture",
          "Qualify",
          "Route",
          "Book",
          "Collect Payment",
          "Send Reminder",
          "Sync Records",
          "Escalate",
          "Track Outcome",
        ],
      },
      section: {
        eyebrow: "Automation Blueprints",
        title: "Automation blueprints for the workflows your team repeats every day.",
        description:
          "Use these workflow templates to understand how Crescora AI can automate common business processes from first customer message to final outcome. Start with one workflow, validate the result, then expand into more channels, teams, and integrations.",
      },
      cards: [
        {
          eyebrow: "WhatsApp Automation Template",
          title: "WhatsApp Automation Workflow for Leads, Support, and Follow-Ups",
          href: "/workflows/whatsapp-automation",
          text: "Turn WhatsApp enquiries into structured workflows for lead capture, qualification, booking, reminders, support routing, and human handover.",
          ctaLabel: "View Workflow Blueprint →",
        },
        {
          eyebrow: "Appointment Booking Workflow",
          title: "Appointment Booking Workflow for Scheduling, Confirmation, and Reminders",
          href: "/workflows/appointment-booking",
          text: "Automate slot selection, customer details, booking confirmation, rescheduling, payment collection, reminders, and exception handover.",
          ctaLabel: "View Workflow Blueprint →",
        },
        {
          eyebrow: "Payment Follow-Up Workflow",
          title: "Payment Automation for Collections, Billing, and Follow-Up",
          href: "/workflows/payments",
          text: "Send payment links, reminders, confirmations, failed-payment recovery messages, receipts, and internal alerts when action is needed.",
          ctaLabel: "View Workflow Blueprint →",
        },
        {
          eyebrow: "Reminder Automation Workflow",
          title: "Reminder Automation for Appointments, Payments, Documents, and Callbacks",
          href: "/workflows/reminders",
          text: "Automate timely reminders for pending payments, missed documents, abandoned enquiries, scheduled calls, service visits, and renewal follow-ups.",
          ctaLabel: "View Workflow Blueprint →",
        },
        {
          eyebrow: "Document Collection Workflow",
          title: "Document Collection Workflow for Intake, KYC, Verification, and Missing Items",
          href: "/workflows/document-collection",
          text: "Collect files, request missing documents, validate submissions, extract key details, trigger review, and keep customers updated without manual chasing.",
          ctaLabel: "View Workflow Blueprint →",
        },
        {
          eyebrow: "Support Automation Workflow",
          title: "Customer Support Workflow for FAQ, Triage, Escalation, and Resolution",
          href: "/workflows/customer-support",
          text: "Classify issues, answer repeated questions, collect case details, create tickets, route urgent requests, and escalate unresolved cases with full context.",
          ctaLabel: "View Workflow Blueprint →",
        },
        {
          eyebrow: "Knowledge Automation Workflow",
          title: "Knowledge Assistant Workflow for Fast, Controlled Customer Answers",
          href: "/workflows/rag-knowledge-assistant",
          text: "Answer repeated questions from approved business knowledge, reduce support load, and escalate low-confidence or sensitive cases to a human team.",
          ctaLabel: "View Workflow Blueprint →",
        },
        {
          eyebrow: "Human Handoff Workflow",
          title: "Human Handoff Workflow for Escalation, Ownership, and Context Transfer",
          href: "/workflows/human-handoff",
          text: "Move urgent, sensitive, or high-value conversations to the right person with customer details, conversation history, priority, and next-step context.",
          ctaLabel: "View Workflow Blueprint →",
        },
        {
          eyebrow: "Billing Automation Workflow",
          title: "Billing and Collections Workflow for Service Teams",
          href: "/workflows/billing",
          text: "Automate invoice reminders, payment status updates, failed-payment follow-ups, customer confirmations, and team alerts for unresolved billing cases.",
          ctaLabel: "View Workflow Blueprint →",
        },
        {
          eyebrow: "Conversation Visibility Workflow",
          title: "Conversation Tracking Workflow for Teams, Managers, and Support Leaders",
          href: "/workflows/observability",
          text: "Track open conversations, pending tasks, escalations, handovers, unresolved requests, and workflow outcomes from one operational view.",
          ctaLabel: "View Workflow Blueprint →",
        },
      ],
      whyItMatters: {
        eyebrow: "Why workflow templates matter",
        title: "Most teams do not fail because they lack tools. They fail because the work path is unclear.",
        description:
          "Crescora AI templates give each process a clear path: capture the request, collect the right data, apply business rules, automate routine steps, escalate exceptions, and track the result.",
        cards: [
          {
            title: "Launch faster",
            text: "Start from a practical workflow instead of building from zero.",
          },
          {
            title: "Reduce manual work",
            text: "Automate repeated questions, reminders, routing, and updates.",
          },
          {
            title: "Keep control",
            text: "Use human handover, approvals, audit logs, and role-based workflows for sensitive steps.",
          },
          {
            title: "Improve over time",
            text: "Track outcomes, bottlenecks, escalations, and customer drop-offs.",
          },
        ],
        supportLine:
          "Crescora AI is designed to move requests through structured intake, AI understanding, business-rule routing, human control, automated communication, and operational visibility.",
      },
      finalCta: {
        eyebrow: "Workflow planning",
        title: "Want a workflow built around your exact process?",
        description:
          "Tell us how your team currently handles enquiries, bookings, payments, documents, support, or follow-ups. We will map your process and show the fastest automation workflow to launch first.",
        primary: { label: "Book Free Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
    templatesIndex: {
      metadata: {
        title: "Template Library | Crescora AI",
        description: "Ready-to-use Crescora AI templates for leads, bookings, payments, support, and follow-ups.",
      },
      hero: {
        eyebrow: "Templates",
        title: "Ready-to-use Crescora AI templates for leads, bookings, payments, support, and follow-ups.",
        description:
          "Start from practical starter templates based on common business workflows instead of building from zero. Use Crescora AI templates to launch faster across enquiries, appointment booking, payment reminders, document collection, support routing, knowledge answers, and human handover.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
        trustLine: "Built for real customer operations, not basic chatbot replies.",
      },
      launchStrip: {
        eyebrow: "What every Crescora AI template helps you launch",
        title: "Each template is designed to reduce setup time and give your team a practical automation starting point.",
        items: [
          "Customer greeting and intent capture",
          "Required data collection",
          "Business-rule based routing",
          "Reminder and follow-up steps",
          "Human handover for exceptions",
          "Optional payment, document, or CRM/API steps",
          "Testing and launch guidance",
        ],
        supportLine:
          "This matches Crescora AI's actual capability coverage across conversation, logic, reliability, integrations, records, document intake, appointments, payments, handover, language, and AI nodes.",
      },
      section: {
        eyebrow: "Template Library",
        title: "Choose a template and launch faster.",
        description:
          "Each template gives your team a practical starting point for a real business workflow. Pick a template, adapt the questions, connect the required channels, test the workflow, and launch with human handover where needed.",
      },
      filters: [
        "All",
        "Healthcare",
        "Real Estate",
        "Support",
        "Payments",
        "Documents",
        "Service Business",
        "AI Knowledge",
      ],
      cards: [
        {
          tag: "Popular Template",
          title: "WhatsApp Automation Template for Leads, Support, and Follow-Ups",
          href: "/templates/whatsapp-automation-template",
          text: "Launch a WhatsApp workflow that captures enquiries, qualifies users, answers common questions, sends reminders, routes requests, and escalates complex cases to your team.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Service Business", "Support"],
          featured: true,
        },
        {
          tag: "Healthcare",
          title: "Clinic Appointment Booking Template",
          href: "/templates/clinic-appointment-bot-template",
          text: "Automate appointment enquiries, patient details collection, doctor availability, slot confirmation, reminders, consultation fee follow-up, and front-desk handover.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Healthcare"],
          featured: true,
        },
        {
          tag: "Payments",
          title: "Payment Reminder Template for Collections and Follow-Ups",
          href: "/templates/payment-reminder-template",
          text: "Send payment reminders, share payment links, confirm successful payments, recover failed payments, and alert your team when manual follow-up is required.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Payments"],
          featured: true,
        },
        {
          tag: "Documents",
          title: "Document Collection Template for KYC, Forms, and Missing Files",
          href: "/templates/document-collection-template",
          text: "Collect required documents, request missing files, validate submissions, trigger review, and keep customers updated without repeated manual chasing.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Documents"],
        },
        {
          tag: "Support",
          title: "Customer Support Template for FAQ, Triage, and Escalation",
          href: "/templates/customer-support-bot-template",
          text: "Handle repeated questions, classify customer issues, capture details, create support context, and escalate urgent or unresolved cases to the right team.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Support"],
          featured: true,
        },
        {
          tag: "AI Knowledge",
          title: "Knowledge Assistant Template for Controlled Customer Answers",
          href: "/templates/rag-knowledge-assistant-template",
          text: "Answer questions from approved business knowledge, reduce repetitive support load, and hand off low-confidence or sensitive cases to a human agent.",
          ctaLabel: "Request This Template →",
          filterGroups: ["AI Knowledge", "Support"],
        },
        {
          tag: "Real Estate",
          title: "Real Estate Lead Qualification Template",
          href: "/templates/real-estate-lead-qualification-template",
          text: "Qualify property leads by budget, location, project interest, timeline, and site-visit intent, then route high-value buyers to your sales team.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Real Estate"],
          featured: true,
        },
        {
          tag: "Service Business",
          title: "Service Booking Template with Reminders and Follow-Ups",
          href: "/templates/service-business-booking-template",
          text: "Turn service enquiries into confirmed bookings with customer details, preferred time, service type, reminders, payment follow-up, and technician/team routing.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Service Business"],
        },
        {
          tag: "Billing",
          title: "Billing and Collections Template for Service Teams",
          href: "/templates/billing-and-collections-template",
          text: "Automate billing reminders, payment status updates, unresolved payment alerts, customer confirmations, and escalation for delayed collections.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Payments", "Service Business"],
        },
        {
          tag: "Operations",
          title: "Conversation Visibility Template for Teams and Managers",
          href: "/templates/observability-dashboard-template",
          text: "Track open conversations, pending requests, escalations, handovers, delayed responses, support issues, and workflow outcomes from one operational view.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Support", "Service Business"],
        },
        {
          tag: "Hospital",
          title: "Hospital Appointment Booking Template",
          href: "/templates/hospital-appointment-booking-flow",
          text: "Handle patient enquiries, department selection, doctor routing, slot booking, payment follow-up, reminders, report requests, and hospital staff handover.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Healthcare"],
        },
        {
          tag: "Real Estate",
          title: "Real Estate Lead Follow-Up Template",
          href: "/templates/real-estate-lead-followup-flow",
          text: "Move property leads from enquiry to site visit with qualification, project sharing, callback scheduling, visit reminders, and sales team handover.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Real Estate"],
        },
        {
          tag: "Support",
          title: "Customer Support FAQ Template",
          href: "/templates/customer-support-faq-flow",
          text: "Answer common support questions using approved responses, collect missing details, route unresolved issues, and escalate customers who need human help.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Support"],
        },
        {
          tag: "Payments",
          title: "Payment Reminder Workflow Template",
          href: "/templates/payment-reminder-flow",
          text: "Create a clear payment follow-up journey with reminders, confirmation messages, failed-payment recovery, team alerts, and escalation when payment is delayed.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Payments"],
        },
        {
          tag: "Diagnostics / Labs",
          title: "Lab Report Notification Template",
          href: "/templates/lab-report-notification-flow",
          text: "Notify patients when reports are ready, collect mobile number or report ID, share status updates, and route urgent or unresolved cases to staff.",
          ctaLabel: "Request This Template →",
          filterGroups: ["Healthcare"],
        },
      ],
      whyItMatters: {
        eyebrow: "Why start from a template?",
        title: "Most businesses know what they want to automate, but lose time deciding the exact workflow structure.",
        description:
          "Crescora AI templates give your team a practical path so you can start faster, reduce implementation mistakes, and customize only what matters.",
        cards: [
          {
            title: "Launch faster",
            text: "Start from a working workflow structure instead of building from zero.",
          },
          {
            title: "Customize safely",
            text: "Adapt questions, branches, messages, reminders, and handover rules to your business.",
          },
          {
            title: "Avoid missed steps",
            text: "Use templates that already consider fallback, escalation, reminders, and support paths.",
          },
          {
            title: "Expand later",
            text: "Start with one template, then add more workflows, channels, integrations, and analytics.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Template planning",
        title: "Need a template for your exact business process?",
        description:
          "Tell us how your team handles enquiries, bookings, payments, documents, support, or follow-ups today. We will recommend the right Crescora AI template and show how it can be adapted to your business.",
        primary: { label: "Book Free Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
  resources: {
    metadata: {
      title: "Resources | Crescora AI",
      description: "Playbooks, comparisons, proof pages, and guides for client businesses.",
    },
    hero: {
      eyebrow: "Resources",
      title: "Playbooks, comparisons, and proof for client businesses.",
      description:
        "Use this section for decision-stage content, rollout guidance, and future customer proof.",
      primaryCta: { label: "Book Free Demo", href: "/contact" },
      secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
    },
    decisionSection: {
      eyebrow: "Decision-stage content",
      title: "Comparisons and proof pages for buyers close to a decision.",
      description: "These pages help visitors understand why Crescora AI is the right fit before they book a demo.",
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
      title: "Compare Crescora AI | Decision-Stage Automation Comparisons",
      description:
        "Compare Crescora AI against chatbots, manual WhatsApp handling, simpler tools, and CRM-only workflows.",
    },
    hero: {
      eyebrow: "Compare",
      title: "Decision-stage comparisons for buyers narrowing the options.",
      description:
        "Use these pages when the team needs to compare client-flow options before choosing the right fit.",
      primaryCta: { label: "Book Free Demo", href: "/contact" },
      secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
    },
    section: {
      eyebrow: "Comparison pages",
      title: "Built for buyers who need a clear decision, not a vague feature list.",
      description: "Each comparison page isolates the business gap that matters in real work.",
    },
  },
  proofIndex: {
    metadata: {
      title: "Workflow Examples | Crescora AI",
      description:
        "Workflow examples for healthcare, real estate, and education workflows from enquiry to outcome.",
    },
    hero: {
      eyebrow: "Workflow examples",
      title: "See how Crescora AI moves customer requests from enquiry to outcome.",
      description:
        "Explore practical automation examples for healthcare, real estate, and education. Each example shows the customer journey, manual process gaps, Crescora AI automation steps, human handover points, and business outcomes to track.",
      trustLine:
        "Built for real operations - intake, routing, reminders, payments, documents, handover, analytics, and continuous improvement.",
      previewSteps: ["Customer Enquiry", "Data Capture", "Business Rules", "Automation", "Human Handover", "Outcome"],
      previewMetrics: ["Response speed", "Lead capture rate", "Booking completion", "Follow-up completion"],
      primaryCta: { label: "Book Free Demo", href: "/contact" },
      secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
    },
    notice:
      "These examples show how a Crescora AI pilot can be planned, built, tested, and expanded for your industry. They are designed to help teams understand workflow structure, customer journey, team ownership, handover points, and measurable business outcomes before rollout.",
    section: {
      eyebrow: "Workflow examples",
      title: "Workflow examples for high-impact business operations.",
      description:
        "Each example shows how a business can move from manual enquiry handling to a structured automation workflow with clear steps, team control, and human handover where needed.",
    },
    comparison: {
      eyebrow: "Before Crescora AI vs After Crescora AI",
      title: "What changes when the workflow becomes structured.",
      description:
        "These examples are believable because they map the same operational shift across industries: less manual coordination, clearer ownership, and measurable outcomes.",
      rows: [
        {
          before: "Enquiries are handled manually across chats and calls",
          after: "Every enquiry enters a structured workflow",
        },
        {
          before: "Teams ask the same questions repeatedly",
          after: "Crescora AI collects required details automatically",
        },
        {
          before: "Follow-ups depend on staff memory",
          after: "Reminders and status updates are automated",
        },
        {
          before: "Payments and documents are chased manually",
          after: "Payment and document workflows are tracked",
        },
        {
          before: "Complex cases lose context during handover",
          after: "Human teams receive conversation history and next steps",
        },
        {
          before: "Managers lack visibility",
          after: "Outcomes, delays, and handovers can be tracked",
        },
      ],
    },
    includes: {
      eyebrow: "What each workflow example includes",
      title: "What each workflow example includes",
      description:
        "Every example is structured around the same operating model so buyers can clearly understand what gets automated, what remains under human control, and how rollout success can be measured.",
      items: [
        "Customer enquiry scenario",
        "Manual process pain points",
        "Crescora AI automation journey",
        "Data captured",
        "Follow-up and reminder steps",
        "Human handover points",
        "Expected outcomes to track",
        "Suggested Focused pilot scope",
      ],
    },
    metrics: {
      eyebrow: "Pilot outcome metrics",
      title: "Outcomes to measure during a Crescora AI pilot.",
      description:
        "These examples do not promise fixed results. They show the operating outcomes teams should measure once the workflow goes live.",
      items: [
        {
          title: "Response speed",
          text: "How quickly customers receive the first useful reply.",
        },
        {
          title: "Lead capture rate",
          text: "How many enquiries are converted into structured records.",
        },
        {
          title: "Booking completion",
          text: "How many users complete appointment, demo, visit, or callback booking.",
        },
        {
          title: "Follow-up completion",
          text: "How many pending payments, documents, or enquiries receive timely reminders.",
        },
        {
          title: "Handover quality",
          text: "How many complex cases reach the right team with full context.",
        },
        {
          title: "Drop-off points",
          text: "Where customers stop responding or fail to complete the workflow.",
        },
      ],
    },
    credibility: {
      eyebrow: "Why these examples are practical",
      title: "Crescora AI is not only a chatbot response layer.",
      description:
        "Crescora AI supports structured workflow execution using conversation nodes, logic, timing and reliability nodes, integrations, records, document intake, appointment booking, payment collection, human handover, language handling, and AI nodes.",
      cards: [
        {
          title: "Structured intake",
          text: "Capture the right details before your team gets involved.",
        },
        {
          title: "Business rules",
          text: "Route requests based on intent, status, priority, department, or workflow stage.",
        },
        {
          title: "Human control",
          text: "Escalate sensitive, urgent, or high-value cases to the right person.",
        },
        {
          title: "Outcome tracking",
          text: "Measure bookings, payments, support cases, follow-ups, and drop-offs.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Ready to map your workflow into a Crescora AI pilot?",
      description:
        "Tell us your industry, current process, and the workflow that creates the most delay - enquiries, bookings, payments, documents, support, or follow-ups. We will recommend the best starting workflow and show how a Focused pilot can be structured.",
      note: "Start with one workflow. Measure the outcome. Expand with confidence.",
      primary: { label: "Book Free Demo", href: "/contact" },
      secondary: { label: "Discuss My Workflow", href: "/contact" },
    },
    cta: { label: "Book Free Demo", href: "/contact" },
  },
  industries: {
    healthcare: {
      metadata: {
        title: "Healthcare Automation Workflows | Crescora AI",
        description:
          "Automate patient enquiries, appointment booking, reminders, payment follow-ups, and document intake with human handoff controls.",
      },
      hero: {
        eyebrow: "Healthcare",
        title: "Automate patient enquiries, bookings, reminders, and follow-ups.",
        description:
          "Crescora AI helps healthcare teams handle repetitive patient workflows faster while routing sensitive and complex cases to staff.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
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
      workflowTitle: "What Crescora AI automates for healthcare teams",
      workflowDescription:
        "Crescora AI structures the repeated actions that otherwise rely on staff memory and manual follow-up.",
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
      afterTitle: "After Crescora AI",
      afterText:
        "Standardized response and booking workflows, automated reminders, and staff focus shifted to critical interactions.",
      trustText:
        "Crescora AI supports operational workflows and human escalation. It is not a replacement for clinical judgment or medical decision-making.",
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    hospitals: {
      metadata: {
        title:
          "Hospital Automation Software for Appointments, Patient Enquiries, Reports, and Follow-Ups | Crescora AI",
        description:
          "Automate hospital appointment booking, patient intake, lab report status, payment reminders, document collection, billing enquiries, and human handover with Crescora AI.",
      },
      hero: {
        eyebrow: "Hospital automation",
        title: "Hospital automation for appointments, patient enquiries, reminders, reports, and staff handover.",
        description:
          "Crescora AI helps hospitals and clinics automate front-desk conversations across Web, WhatsApp, Telegram, email, and SMS. Capture patient details, route requests, book appointments, send reminders, collect documents, follow up on payments, handle report status requests, and escalate urgent or complex cases to the right team.",
        trustLine:
          "Built for appointment booking, patient intake, lab reports, payment follow-ups, document collection, reminders, and human handover.",
        previewSteps: ["Patient Enquiry", "Department", "Details", "Slot / Report", "Reminder", "Handover", "Outcome"],
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      overviewCards: [
        {
          eyebrow: "Patient workflows",
          title: "Automate the front-desk work your team repeats every day.",
          text: "Crescora AI can handle appointment enquiries, doctor or department selection, patient details collection, slot confirmation, reminder messages, lab report requests, billing questions, and staff handover without forcing every request through manual calls.",
        },
        {
          eyebrow: "Human control",
          title: "Keep urgent and sensitive cases under hospital staff control.",
          text: "Automation should support hospital teams, not replace them. Crescora AI can route emergency, billing, insurance, admission, report, and unresolved patient cases to the correct staff queue with conversation context and next-step visibility.",
        },
      ],
      workflowSection: {
        eyebrow: "Hospital workflows",
        title: "Hospital workflows Crescora AI can automate",
        description:
          "Start with the hospital workflow that creates the most front-desk pressure, then expand into more patient journeys after the first rollout is stable.",
        cards: [
          {
            title: "Appointment booking",
            text: "Let patients choose a department, select a doctor or service, share basic details, pick an available slot, receive confirmation, and get reminder messages before the visit.",
          },
          {
            title: "Patient intake",
            text: "Collect patient name, mobile number, age, location, symptoms or visit reason, preferred department, and visit type before the front desk gets involved.",
          },
          {
            title: "Doctor availability",
            text: "Share available doctors, OPD timing, consultation type, and basic visit instructions in a structured way.",
          },
          {
            title: "Lab tests and reports",
            text: "Handle lab test enquiries, report status checks, report ID collection, patient mobile verification, report-ready notifications, and staff handover when the report cannot be found.",
          },
          {
            title: "Payment and billing follow-up",
            text: "Send consultation fee reminders, payment links, payment confirmations, billing status updates, and unresolved payment escalation to the billing team.",
          },
          {
            title: "Admission and insurance enquiries",
            text: "Collect admission-related questions, insurance details, required documents, and route complex cases to admission or insurance staff.",
          },
          {
            title: "Emergency and critical cases",
            text: "Show clear emergency guidance and route urgent requests to human support immediately. The workflow should not attempt to diagnose or handle emergencies as a normal automation path.",
          },
        ],
      },
      comparison: {
        eyebrow: "Before Crescora AI vs After Crescora AI",
        title: "What changes when front-desk requests move into a structured workflow.",
        rows: [
          {
            before: "Patients call repeatedly for appointments",
            after: "Patients can start appointment booking from chat",
          },
          {
            before: "Front desk asks the same questions again and again",
            after: "Crescora AI collects required details before staff involvement",
          },
          {
            before: "Follow-ups depend on manual reminders",
            after: "Appointment, payment, and report reminders can be automated",
          },
          {
            before: "Report status requests interrupt staff",
            after: "Crescora AI collects report ID and mobile number before routing",
          },
          {
            before: "Billing and insurance queries get mixed with general enquiries",
            after: "Requests can be routed to the right team",
          },
          {
            before: "Urgent cases may not get enough context",
            after: "Emergency and sensitive cases can move to human handover quickly",
          },
        ],
      },
      patientJourney: {
        eyebrow: "Patient journey",
        title: "Example hospital patient journey",
        description:
          "This shows how Crescora AI works as an operating layer, not only a chatbot reply layer.",
        steps: [
          "Patient starts a chat from website, WhatsApp, or another supported channel.",
          "Crescora AI asks what the patient needs: appointment, report, billing, insurance, admission, lab test, or support.",
          "Patient selects department or service.",
          "Crescora AI collects required details.",
          "Appointment, report, payment, or document workflow starts.",
          "Confirmation and reminder messages are sent.",
          "Urgent, unclear, or sensitive cases move to hospital staff with full context.",
          "Managers can track conversations, handovers, and workflow outcomes.",
        ],
        supportLine:
          "Crescora AI supports conversation nodes, logic and control, timing and reliability, integrations, records, document intake, appointment, payment, handover, language, and AI nodes.",
      },
      safety: {
        eyebrow: "Trust and safety",
        title: "Built for hospital workflows with safety and control",
        emergencyNote:
          "For medical emergencies, patients should contact the hospital emergency number or visit the nearest emergency department. Crescora AI can route urgent requests but should not replace emergency medical care.",
        cards: [
          {
            title: "Emergency guidance",
            text: "Critical or emergency-related conversations should show clear instructions and move to human escalation immediately.",
          },
          {
            title: "Human handover",
            text: "Complex cases can be transferred to front desk, billing, insurance, admission, emergency, or support teams.",
          },
          {
            title: "Audit-ready workflows",
            text: "Sensitive actions such as consent, document handling, payment, and escalation can be tracked with structured workflow records.",
          },
          {
            title: "Fallback paths",
            text: "If automation cannot complete a request, Crescora AI should guide the patient to the next safe step instead of leaving the conversation incomplete.",
          },
        ],
        supportLine:
          "Crescora AI requires fallback and observability paths for critical nodes, retries and timeout handling for external dependencies, and clear safety messaging for medical workflows.",
      },
      startingWorkflows: {
        eyebrow: "Best starting workflows",
        title: "Best hospital workflows to automate first",
        cards: [
          {
            step: "1",
            title: "Appointment booking",
            text: "Best for reducing front-desk calls and improving patient response speed.",
          },
          {
            step: "2",
            title: "Lab report status",
            text: "Best for reducing repeated report enquiries and collecting report ID or mobile number before staff involvement.",
          },
          {
            step: "3",
            title: "Payment follow-up",
            text: "Best for consultation fees, pending payments, billing confirmations, and failed payment recovery.",
          },
          {
            step: "4",
            title: "Insurance and admission enquiry",
            text: "Best for collecting documents, routing complex questions, and reducing back-and-forth communication.",
          },
          {
            step: "5",
            title: "Patient support and handover",
            text: "Best for routing unresolved cases to the right department with context.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Hospital demo",
        title: "Ready to automate your hospital front desk workflow?",
        description:
          "Tell us how your hospital currently handles appointments, patient enquiries, reports, billing, insurance, admissions, and follow-ups. We will map your current process and show the fastest Crescora AI workflow to launch first.",
        note: "Start with one workflow. Prove value. Expand into more patient journeys.",
        primary: { label: "Book Free Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
    clinics: {
      metadata: {
        title:
          "Clinic Appointment Automation Software for Bookings, Reminders, Follow-Ups, and Patient Support | Crescora AI",
        description:
          "Automate clinic appointment booking, patient intake, consultation reminders, payment follow-ups, FAQs, repeat visits, and staff handover with Crescora AI.",
      },
      hero: {
        eyebrow: "Clinic automation",
        title: "Clinic appointment automation for bookings, reminders, patient follow-ups, and front-desk support.",
        description:
          "Crescora AI helps clinics automate daily patient conversations across Web, WhatsApp, Telegram, email, and SMS. Capture patient details, book appointments, send reminders, collect consultation fees, answer common questions, manage follow-ups, and hand off sensitive or urgent cases to clinic staff.",
        trustLine:
          "Built for appointment booking, patient intake, consultation reminders, payment follow-ups, FAQs, repeat visits, and human handover.",
        previewSteps: ["Patient Enquiry", "Service / Doctor", "Details", "Slot", "Reminder", "Follow-Up", "Handover"],
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      overviewCards: [
        {
          eyebrow: "Front-desk automation",
          title: "Reduce repeated calls and manual appointment coordination.",
          text: "Crescora AI can help clinics handle appointment enquiries, patient details, preferred doctor or service, available slots, confirmation messages, reminders, consultation fee follow-ups, and rescheduling requests without every step depending on manual staff response.",
        },
        {
          eyebrow: "Patient follow-up",
          title: "Keep patients informed before and after the visit.",
          text: "Crescora AI can send visit reminders, collect missing details, share basic instructions, follow up after consultations, collect feedback, and route unresolved or sensitive cases to clinic staff with conversation context.",
        },
      ],
      workflowSection: {
        eyebrow: "Clinic workflows",
        title: "Clinic workflows Crescora AI can automate",
        description:
          "Start with the clinic workflow that creates the most front-desk friction, then expand into more patient support journeys after the first rollout is stable.",
        cards: [
          {
            title: "Appointment booking",
            text: "Let patients request an appointment, choose a service or doctor, share basic details, select a preferred slot, and receive confirmation.",
          },
          {
            title: "Patient intake",
            text: "Collect patient name, mobile number, age, location, visit reason, preferred date, and consultation type before staff involvement.",
          },
          {
            title: "Consultation reminders",
            text: "Send reminders before appointments so patients do not forget visits and staff do not need to call manually.",
          },
          {
            title: "Consultation fee follow-up",
            text: "Send payment links, fee reminders, confirmation messages, and billing handover when payment needs staff support.",
          },
          {
            title: "Follow-up visits",
            text: "Remind patients about review visits, repeat consultations, prescription follow-ups, or doctor-advised next steps.",
          },
          {
            title: "Clinic FAQs",
            text: "Answer repeated questions about timings, doctor availability, consultation fees, services, location, documents, and next steps.",
          },
          {
            title: "Patient support handover",
            text: "Move sensitive, unclear, urgent, or high-value cases to clinic staff with patient details and conversation history.",
          },
        ],
        supportLine:
          "Crescora AI supports the exact building blocks needed for these journeys, including appointment, payment, form, notification, FAQ, record, scheduler, handover, and AI nodes.",
      },
      comparison: {
        eyebrow: "Before Crescora AI vs After Crescora AI",
        title: "What changes when clinic coordination becomes structured.",
        rows: [
          {
            before: "Staff answer the same appointment questions repeatedly",
            after: "Patients can start appointment booking through chat",
          },
          {
            before: "Patient details are collected manually on calls",
            after: "Crescora AI collects required details before staff involvement",
          },
          {
            before: "Reminders depend on front-desk memory",
            after: "Appointment and follow-up reminders can be automated",
          },
          {
            before: "Payment follow-ups are manual",
            after: "Fee reminders and payment confirmations can be structured",
          },
          {
            before: "Missed calls become missed appointments",
            after: "Enquiries can be captured even when staff are busy",
          },
          {
            before: "Sensitive cases lose context",
            after: "Human handover can include patient details and conversation history",
          },
        ],
      },
      patientJourney: {
        eyebrow: "Patient journey",
        title: "Example clinic patient journey",
        description:
          "This shows the operational story behind clinic appointment automation instead of reducing the page to a single keyword phrase.",
        steps: [
          "Patient starts a chat from website, WhatsApp, or another supported channel.",
          "Crescora AI asks what the patient needs: appointment, fee details, doctor availability, follow-up visit, report query, or clinic support.",
          "Patient selects the service or doctor.",
          "Crescora AI collects patient details and preferred appointment time.",
          "Appointment confirmation is sent.",
          "Reminder is sent before the visit.",
          "Payment or consultation fee follow-up happens where required.",
          "Sensitive, urgent, or unclear cases move to clinic staff with full context.",
        ],
        supportLine:
          "Crescora AI supports clinic communication and workflow routing through appointment, payment, form, notification, FAQ, record, scheduler, handover, language, and AI nodes.",
      },
      safety: {
        eyebrow: "Trust and safety",
        title: "Built for clinic workflows with human control",
        emergencyNote:
          "Crescora AI supports clinic communication and workflow routing. It should not replace emergency care or medical diagnosis.",
        cards: [
          {
            title: "Sensitive case handover",
            text: "When a patient request is urgent, unclear, or sensitive, Crescora AI can route it to clinic staff instead of continuing as a normal automated conversation.",
          },
          {
            title: "Clear fallback paths",
            text: "If a patient gives incomplete information or the automation cannot complete the request, the workflow should guide them to the next safe step.",
          },
          {
            title: "Controlled patient communication",
            text: "Use approved messages for confirmations, reminders, payment updates, and follow-ups.",
          },
          {
            title: "Operational visibility",
            text: "Track appointment enquiries, completed bookings, pending follow-ups, handovers, and unresolved cases.",
          },
        ],
        supportLine:
          "For medical or high-risk workflows, Crescora AI requires explicit safety messaging and escalation paths rather than vague automation-only handling.",
      },
      startingWorkflows: {
        eyebrow: "Best clinic workflows to start with",
        title: "Best clinic workflows to automate first",
        cards: [
          {
            step: "1",
            title: "Appointment booking",
            text: "Best for reducing repeated front-desk calls and improving response speed.",
          },
          {
            step: "2",
            title: "Reminder automation",
            text: "Best for reducing no-shows and manual calling before visits.",
          },
          {
            step: "3",
            title: "Consultation fee follow-up",
            text: "Best for clinics that collect fees before or after booking.",
          },
          {
            step: "4",
            title: "Patient follow-up",
            text: "Best for review visits, repeat consultations, prescription follow-ups, and feedback.",
          },
          {
            step: "5",
            title: "FAQ and support routing",
            text: "Best for repeated questions about timing, fees, services, location, and doctor availability.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Clinic demo",
        title: "Ready to automate your clinic appointment workflow?",
        description:
          "Tell us how your clinic currently handles patient enquiries, appointment booking, reminders, consultation fees, follow-ups, and staff handover. We will map your current process and show the fastest Crescora AI workflow to launch first.",
        note: "Start with appointment booking. Prove value. Expand into reminders, payments, follow-ups, and patient support.",
        primary: { label: "Book Free Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
    realEstate: {
      metadata: {
        title: "Real Estate Automation Software for Lead Qualification, Site Visits, and Follow-Ups | Crescora AI",
        description:
          "Automate real estate lead capture, buyer qualification, project sharing, site visit booking, sales rep assignment, CRM sync, reminders, and follow-ups with Crescora AI.",
      },
      hero: {
        eyebrow: "Real estate automation",
        title: "Convert property enquiries into scheduled visits and qualified opportunities.",
        description:
          "Crescora AI helps real estate teams respond faster, qualify buyer intent, collect budget and location preferences, share project details, schedule site visits, assign leads to sales reps, send reminders, and automate follow-ups across Web, WhatsApp, Telegram, email, and SMS.",
        trustLine:
          "Built for lead capture, buyer qualification, project sharing, site visit booking, sales handover, CRM sync, and follow-up automation.",
        previewSteps: ["Property Enquiry", "Budget/Location", "Project Match", "Site Visit", "Sales Rep", "Follow-Up"],
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      painTitle: "Your leads are valuable. Delayed follow-up is expensive.",
      painDescription:
        "Real estate enquiries lose value quickly when buyers wait for a callback, receive generic replies, or are not routed to the right sales person on time.",
      painPoints: [
        {
          title: "Missed and stale leads",
          text: "High-intent buyers drop off when enquiries are not captured and followed up quickly.",
        },
        {
          title: "Slow first response",
          text: "Delayed replies reduce trust and push prospects toward competing projects.",
        },
        {
          title: "Manual lead qualification",
          text: "Sales teams waste time calling leads without knowing budget, location, property type, or timeline.",
        },
        {
          title: "Site visit coordination friction",
          text: "Visit scheduling becomes slow when availability, location, reminders, and confirmation are handled manually.",
        },
        {
          title: "Lead ownership confusion",
          text: "Managers struggle to know which sales rep owns which lead and what the next action is.",
        },
        {
          title: "Weak follow-up consistency",
          text: "Follow-ups depend on individual discipline instead of a structured process.",
        },
        {
          title: "No clear pipeline visibility",
          text: "Teams cannot easily see which leads are new, qualified, visit-booked, visited, negotiation-stage, or cold.",
        },
      ],
      workflowTitle: "What Crescora AI automates for real estate teams",
      workflowDescription:
        "Crescora AI connects property enquiries to a structured sales workflow - from first message to qualification, project matching, site visit scheduling, sales rep handover, CRM updates, reminders, and follow-up tracking.",
      workflows: [
        {
          title: "Lead capture and response automation",
          text: "Capture website, WhatsApp, ad campaign, and social enquiries instantly, then start a structured buyer conversation.",
        },
        {
          title: "Qualification logic and routing",
          text: "Ask budget, location, property type, BHK, timeline, possession preference, and buying intent before routing the lead.",
        },
        {
          title: "Project matching and brochure sharing",
          text: "Share matching projects, location details, floor plans, price range, amenities, or brochures based on buyer preference.",
        },
        {
          title: "Site visit scheduling",
          text: "Let buyers request a site visit, choose a preferred date or time, receive confirmation, and get reminders before the visit.",
        },
        {
          title: "Reminder and confirmation Workflows",
          text: "Send reminders for scheduled visits, callbacks, document sharing, payment steps, and follow-up conversations.",
        },
        {
          title: "Sales rep assignment",
          text: "Route qualified leads to the right sales person based on project, location, budget, language, or availability.",
        },
        {
          title: "Lead status updates",
          text: "Track lead stage such as new enquiry, qualified, visit scheduled, visit completed, follow-up pending, negotiation, or closed.",
        },
        {
          title: "Escalation for high-intent opportunities",
          text: "Move hot buyers, urgent site visit requests, and high-budget leads to the sales team with full conversation context.",
        },
      ],
      projectSharing: {
        eyebrow: "Project sharing",
        title: "Share the right property details at the right time",
        description:
          "Crescora AI can help real estate teams present project information in a structured way instead of sending random messages manually.",
        items: [
          "Project overview",
          "Location and nearby landmarks",
          "Budget range",
          "BHK and unit type",
          "Floor plan or brochure link",
          "Amenities",
          "Possession timeline",
          "Site visit CTA",
          "Sales rep callback option",
        ],
        supportLine:
          "Crescora AI includes media and carousel nodes for sending brochures, images, rich cards, plans, service choices, and next-step CTAs where the channel supports them.",
      },
      journey: {
        eyebrow: "Buyer journey",
        title: "Example real estate buyer journey",
        description:
          "This page should show that Crescora AI is a structured sales workflow layer, not only a real estate chatbot.",
        steps: [
          "Buyer starts a chat from website, WhatsApp, ad campaign, or social channel.",
          "Crescora AI asks what they are looking for: apartment, villa, plot, commercial space, rental, resale, or project details.",
          "Buyer shares preferred location, budget, property type, BHK, possession timeline, and contact details.",
          "Crescora AI qualifies the buyer and shows relevant project options or captures request details.",
          "Buyer requests a site visit or callback.",
          "Crescora AI confirms the preferred time and sends reminders.",
          "The lead is assigned to the right sales rep with conversation history and buyer preferences.",
          "CRM or sheet records can be updated with lead status.",
          "Follow-up reminders continue until the buyer is contacted, visit is completed, or status changes.",
        ],
        supportLine:
          "Crescora AI's shared schema supports conversation logic, timing and reliability, communication integrations, records, forms, appointments, handover, analytics, and AI-assisted steps as one structured automation path.",
      },
      comparison: {
        eyebrow: "Before Crescora AI vs After Crescora AI",
        title: "What changes when property enquiries move into one structured sales workflow.",
        rows: [
          {
            before: "Leads are scattered across ads, WhatsApp, calls, forms, and phones",
            after: "Every enquiry enters a structured sales workflow",
          },
          {
            before: "Sales reps call without enough buyer context",
            after: "Crescora AI captures budget, location, property type, and timeline first",
          },
          {
            before: "Site visits are coordinated manually",
            after: "Visit requests, confirmations, and reminders can be automated",
          },
          {
            before: "Lead ownership is unclear",
            after: "Leads can be assigned to the right sales rep or project team",
          },
          {
            before: "Follow-ups depend on memory",
            after: "Reminder and follow-up workflows keep the lead moving",
          },
          {
            before: "Managers lack visibility",
            after: "Lead stages, handovers, pending follow-ups, and outcomes can be tracked",
          },
        ],
      },
      trust: {
        eyebrow: "Trust and control",
        title: "Built for real estate sales teams with visibility and control",
        cards: [
          {
            title: "Sales handover with context",
            text: "Move qualified or high-intent buyers to the right sales rep with budget, location, property type, timeline, and conversation history.",
          },
          {
            title: "CRM and sheet sync",
            text: "Send captured leads, visit requests, and status updates to CRM, Google Sheets, booking systems, or internal tools.",
          },
          {
            title: "Follow-up discipline",
            text: "Automate reminders so prospects do not go cold after the first enquiry or missed callback.",
          },
          {
            title: "Manager visibility",
            text: "Track open leads, site visit requests, assigned reps, pending follow-ups, and conversion stages.",
          },
          {
            title: "Human control where it matters",
            text: "Let automation handle repetitive intake and reminders while sales teams handle negotiation, relationship-building, and closing.",
          },
        ],
        supportLine:
          "The product already includes conversation queue operations, assignment, session status updates, analytics, and outcome surfaces, which makes this visibility and control positioning credible.",
      },
      metrics: {
        eyebrow: "Outcome metrics",
        title: "Outcomes real estate teams can track",
        items: [
          {
            title: "First response speed",
            text: "How quickly new property enquiries receive a useful reply.",
          },
          {
            title: "Lead qualification rate",
            text: "How many enquiries provide budget, location, property type, and timeline details.",
          },
          {
            title: "Site visit booking rate",
            text: "How many qualified buyers schedule a visit or callback.",
          },
          {
            title: "Follow-up completion",
            text: "How many buyers receive reminders after enquiry, project sharing, missed call, or site visit.",
          },
          {
            title: "Sales handover quality",
            text: "How many hot leads reach the right sales rep with complete context.",
          },
          {
            title: "Pipeline visibility",
            text: "How many leads are new, qualified, visit-booked, visited, follow-up pending, negotiation-stage, or cold.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Real estate demo",
        title: "Ready to automate your real estate lead follow-up workflow?",
        description:
          "Tell us how your team currently handles property enquiries, lead qualification, project sharing, site visit scheduling, sales rep assignment, CRM updates, and follow-ups. We'll map your current process and show the fastest Crescora AI workflow to launch first.",
        note: "Start with lead capture and site visit booking. Prove value. Expand into CRM sync, reminders, and sales pipeline visibility.",
        primary: { label: "Book Free Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
    education: {
      metadata: {
        title:
          "Education Automation Software for Admissions, Demo Bookings, Fee Reminders, and Follow-Ups | Crescora AI",
        description:
          "Automate education enquiries, demo class booking, admission follow-ups, fee reminders, counsellor routing, document collection, and student support with Crescora AI.",
      },
      hero: {
        eyebrow: "Education automation",
        title: "Automate enquiries, demo bookings, fee reminders, and admissions follow-ups.",
        description:
          "Crescora AI helps schools, colleges, coaching centers, and EdTech teams respond faster to student and parent enquiries, collect the right details, book demo classes, send fee reminders, route high-intent leads to counsellors, and track every admissions follow-up.",
        trustLine:
          "Built for admissions enquiries, demo class booking, counsellor routing, fee reminders, document follow-up, and student status updates.",
        previewSteps: ["Enquiry", "Course Interest", "Demo Booking", "Counsellor", "Fee Reminder", "Admission"],
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      painTitle: "Admissions growth depends on fast response, consistent follow-up, and clear ownership.",
      painDescription:
        "Education teams lose admissions when enquiries are answered late, demo class requests are not followed up, counsellors miss high-intent students, fee reminders are delayed, and parent questions are repeated across calls, chats, and forms.",
      painPoints: [
        "Repetitive course and fee questions",
        "Manual counseling coordination",
        "Missed demo class opportunities",
        "Weak admission follow-up",
        "Delayed fee reminders",
        "No clear enquiry visibility",
      ],
      workflowTitle: "What Crescora AI automates for education teams",
      workflowDescription:
        "Crescora AI connects student and parent conversations to structured admissions actions - from first enquiry to demo booking, fee follow-up, document collection, counsellor handover, and admission status tracking.",
      workflows: [
        {
          title: "Course enquiry response",
          text: "Answer questions about courses, batches, eligibility, fees, schedules, location, demo classes, and admission steps.",
        },
        {
          title: "Student and parent details capture",
          text: "Collect name, phone number, grade or course interest, location, preferred batch, enquiry source, and follow-up preference.",
        },
        {
          title: "Demo class booking",
          text: "Let students or parents request a demo class, select a preferred time, receive confirmation, and get reminders.",
        },
        {
          title: "Admission checklist and reminders",
          text: "Share required documents, admission steps, pending items, and follow-up reminders.",
        },
        {
          title: "Fee reminder and payment follow-up",
          text: "Send fee reminders, payment follow-up messages, status updates, and escalation alerts when manual action is needed.",
        },
        {
          title: "Counsellor routing for high-intent students",
          text: "Route serious enquiries to the right counsellor with student details, course interest, conversation history, and next step.",
        },
        {
          title: "Interaction tracking and status updates",
          text: "Track enquiry stage, demo booked, follow-up pending, payment pending, document pending, and admission completed.",
        },
        {
          title: "Support and FAQ automation",
          text: "Handle repeated questions while routing complex or sensitive cases to staff with full context.",
        },
      ],
      journey: {
        eyebrow: "Admissions journey",
        title: "Example education admissions journey",
        description:
          "This page should show the full operational value of admissions automation, not only a list of features.",
        steps: [
          "Student or parent starts a chat from website, WhatsApp, or another supported channel.",
          "Crescora AI asks what they need: course details, admission process, fee structure, demo class, documents, payment, or counsellor call.",
          "Crescora AI captures student details and course interest.",
          "The system answers common questions from approved content or routes to staff when needed.",
          "Demo class or counselling call is booked.",
          "Reminder is sent before the demo or call.",
          "Fee and document follow-ups are sent based on admission stage.",
          "High-intent or unresolved enquiries move to a counsellor with full conversation context.",
          "Managers can track enquiry progress, drop-offs, pending follow-ups, and conversion stages.",
        ],
        supportLine:
          "Crescora AI can coordinate intake, routing, reminders, records, payments, documents, human handover, and analytics-backed workflow improvement.",
      },
      comparison: {
        eyebrow: "Before Crescora AI vs After Crescora AI",
        title: "What changes when admissions work moves into one structured Workflow.",
        rows: [
          {
            before: "Enquiries are scattered across calls, forms, WhatsApp, and website chat",
            after: "Every enquiry enters a structured admissions workflow",
          },
          {
            before: "Staff answer the same course and fee questions repeatedly",
            after: "Common questions are answered automatically from approved content",
          },
          {
            before: "Demo bookings depend on manual coordination",
            after: "Demo class requests, confirmations, and reminders can be automated",
          },
          {
            before: "Counsellors receive incomplete lead details",
            after: "Crescora AI collects student details before handover",
          },
          {
            before: "Fee reminders depend on staff memory",
            after: "Fee follow-ups can be scheduled and tracked",
          },
          {
            before: "Managers lack visibility into enquiry stages",
            after: "Admissions teams can track pending, contacted, demo-booked, payment-pending, and converted leads",
          },
        ],
      },
      trust: {
        eyebrow: "Trust and control",
        title: "Built for admissions teams with human control",
        cards: [
          {
            title: "Counsellor handover",
            text: "Move high-intent, sensitive, or complex enquiries to the right counsellor with full context.",
          },
          {
            title: "Approved answers",
            text: "Use controlled responses for course details, fees, timings, admission steps, and documents.",
          },
          {
            title: "Follow-up discipline",
            text: "Automate reminders so interested students do not disappear after the first enquiry.",
          },
          {
            title: "Admissions visibility",
            text: "Track open enquiries, demo bookings, pending payments, document follow-ups, and conversion stages.",
          },
          {
            title: "Safe fallback paths",
            text: "When Crescora AI cannot complete an enquiry, it should guide the student or parent to the next clear step instead of ending the conversation.",
          },
        ],
        supportLine:
          "The Crescora AI playbook emphasizes clear happy paths, fallback paths, error paths, meaningful variables, retries, timeout handling, and human escalation where needed.",
      },
      metrics: {
        eyebrow: "Outcome metrics",
        title: "Outcomes education teams can track",
        items: [
          {
            title: "First response speed",
            text: "How quickly students and parents receive a useful reply.",
          },
          {
            title: "Enquiry capture rate",
            text: "How many visitors become structured student enquiries.",
          },
          {
            title: "Demo booking rate",
            text: "How many interested leads book a demo class or counselling call.",
          },
          {
            title: "Follow-up completion",
            text: "How many pending enquiries receive timely reminders.",
          },
          {
            title: "Fee reminder progress",
            text: "How many payment-pending students receive structured follow-up.",
          },
          {
            title: "Counsellor handover quality",
            text: "How many high-intent students reach counsellors with complete context.",
          },
          {
            title: "Admissions pipeline visibility",
            text: "How many enquiries are new, contacted, demo-booked, pending payment, document-pending, or admitted.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Education demo",
        title: "Ready to automate your admissions follow-up workflow?",
        description:
          "Tell us how your team currently handles student enquiries, demo class bookings, counselling calls, fee reminders, admission documents, and follow-ups. We will map your current process and show the fastest Crescora AI workflow to launch first.",
        note: "Start with one admissions workflow. Prove value. Expand into counselling, payments, documents, and student support.",
        primary: { label: "Book Free Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
    supportTeams: {
      metadata: {
        title: "Customer Support Automation Software for FAQ, Triage, Ticket Routing, and Escalation | Crescora AI",
        description:
          "Automate customer support FAQs, issue triage, ticket creation, human handover, status updates, escalation, and support visibility with Crescora AI.",
      },
      hero: {
        eyebrow: "Customer support automation",
        title: "Automate support triage, repeated answers, ticket routing, and human escalation.",
        description:
          "Crescora AI helps support teams respond faster, reduce repetitive questions, capture issue details, route requests, create support context, escalate urgent cases, and track unresolved conversations across Web, WhatsApp, Telegram, email, and SMS.",
        trustLine:
          "Built for FAQ automation, issue triage, ticket creation, escalation, SLA visibility, support handover, and conversation tracking.",
        previewSteps: ["Customer Issue", "Category", "FAQ / Ticket", "Priority", "Handover", "Status Update"],
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      overviewCards: [
        {
          eyebrow: "Support triage",
          title: "Turn repeated support questions into structured workflows.",
          text: "Crescora AI can classify support requests, ask the right follow-up questions, collect issue details, answer common queries from approved knowledge, and route unresolved cases to the right support team.",
        },
        {
          eyebrow: "Human escalation",
          title: "Escalate complex cases with context, not confusion.",
          text: "When automation cannot resolve a request, Crescora AI can move the conversation to a human team with issue type, customer details, conversation history, priority, and next-step context.",
        },
      ],
      overviewSupportLine:
        "The Crescora AI playbook specifically supports support deflection with safe escalation using grounded answers, fallback handling, and handover when the issue cannot be resolved automatically.",
      painTitle: "Support teams lose time when every issue starts from zero.",
      painDescription:
        "Support workload increases when customers ask repeated questions, agents collect the same details again and again, urgent cases are not prioritized, and managers cannot see which conversations are stuck.",
      painPoints: [
        {
          title: "Repeated questions",
          text: "Agents spend too much time answering the same pricing, policy, service, or process questions.",
        },
        {
          title: "Slow first response",
          text: "Customers wait too long before receiving a useful answer or next step.",
        },
        {
          title: "Incomplete issue details",
          text: "Support teams receive vague requests without category, urgency, customer details, or required context.",
        },
        {
          title: "Manual ticket routing",
          text: "Issues are assigned manually, causing delays and ownership confusion.",
        },
        {
          title: "Poor handover context",
          text: "Customers repeat the same story when the case moves from bot to human.",
        },
        {
          title: "Weak support visibility",
          text: "Managers struggle to see pending, escalated, unresolved, and repeated issues.",
        },
      ],
      workflowTitle: "Support workflows Crescora AI can automate",
      workflowDescription:
        "Crescora AI can coordinate FAQ automation, issue triage, ticket creation, handover, SLA visibility, queue control, and follow-up tracking as one structured support workflow instead of isolated bot replies.",
      workflows: [
        {
          title: "FAQ resolution",
          text: "Answer repeated questions about pricing, services, availability, order status, documents, policies, support steps, timings, and common issues using approved business knowledge.",
        },
        {
          title: "Issue triage",
          text: "Ask the right questions based on the customer's issue type, urgency, product, department, account status, or support category.",
        },
        {
          title: "Ticket creation",
          text: "Capture customer details, issue description, attachments, priority, and support category before creating a support case or sending it to the team.",
        },
        {
          title: "Human handover",
          text: "Move unresolved, urgent, angry, sensitive, or high-value conversations to the right support person with context.",
        },
        {
          title: "Status updates",
          text: "Send updates for open requests, pending documents, payment issues, service requests, callbacks, and unresolved cases.",
        },
        {
          title: "SLA and queue visibility",
          text: "Help teams see which conversations are waiting, assigned, escalated, or unresolved.",
        },
        {
          title: "Feedback collection",
          text: "Collect feedback after support resolution and route low ratings or negative comments for follow-up.",
        },
        {
          title: "CRM and helpdesk sync",
          text: "Send captured issue details, status updates, and handover context to CRM, Google Sheets, helpdesk tools, or internal APIs.",
        },
      ],
      journey: {
        eyebrow: "Support journey",
        title: "Example customer support journey",
        description:
          "This page should show that Crescora AI is a support workflow system, not just a support chatbot.",
        steps: [
          "Customer starts a chat from website, WhatsApp, or another supported channel.",
          "Crescora AI asks what the customer needs: FAQ, order or status query, billing issue, technical issue, document request, complaint, or human support.",
          "Crescora AI captures issue category, customer details, urgency, and required context.",
          "Simple questions are answered from approved knowledge.",
          "Account-specific or unresolved issues are routed to a support workflow or team.",
          "Urgent or negative-sentiment cases move to priority handover.",
          "The support team receives issue details and conversation history.",
          "Managers can track open cases, escalations, unresolved conversations, and support outcomes.",
        ],
        supportLine:
          "Crescora AI can coordinate support deflection, queue assignment, ticket context capture, escalation, handover, knowledge-grounded replies, notifications, and outcome tracking inside one workflow layer.",
      },
      comparison: {
        eyebrow: "Before Crescora AI vs After Crescora AI",
        title: "What changes when customer support runs through one structured workflow.",
        rows: [
          {
            before: "Customers ask the same questions repeatedly",
            after: "Crescora AI answers common questions from approved knowledge",
          },
          {
            before: "Agents spend time collecting basic issue details",
            after: "Crescora AI captures issue type, priority, and required information first",
          },
          {
            before: "Complex cases lose context during handover",
            after: "Human teams receive conversation history and next steps",
          },
          {
            before: "Support requests are scattered across chats and inboxes",
            after: "Every request can enter a structured support workflow",
          },
          {
            before: "Managers cannot easily see pending or escalated cases",
            after: "Queue, handover, and status visibility improve operational control",
          },
          {
            before: "Follow-ups depend on manual effort",
            after: "Reminders and status updates can be automated",
          },
        ],
      },
      difference: {
        eyebrow: "More than FAQ replies",
        title: "What makes this different from a basic support bot",
        cards: [
          {
            title: "Understand the request",
            text: "Capture issue category, customer details, urgency, and missing information.",
          },
          {
            title: "Answer safely",
            text: "Use approved FAQ or knowledge responses for repeated questions.",
          },
          {
            title: "Route correctly",
            text: "Send billing, technical, service, complaint, or sales-support cases to the right team.",
          },
          {
            title: "Escalate with context",
            text: "Move sensitive, angry, urgent, or unresolved customers to a human agent.",
          },
          {
            title: "Track outcomes",
            text: "Measure unresolved cases, repeated questions, handovers, response delays, and drop-offs.",
          },
        ],
        supportLine:
          "Crescora AI supports queue assignment, handover, FAQ, language handling, notifications, analytics, audit logs, and support-oriented workflow patterns, which makes this positioning credible.",
      },
      observability: {
        eyebrow: "Observability",
        title: "Make support observability real, not a vague promise",
        description:
          "Support leaders need to see queue health, handover quality, and unresolved conversations without stitching together multiple inboxes manually.",
        cards: [
          {
            title: "Open cases",
            text: "Track how many requests are active and which categories are building up.",
          },
          {
            title: "Assigned cases",
            text: "See which issues already have an owner and which ones are still waiting.",
          },
          {
            title: "Escalations",
            text: "Measure how many conversations moved to urgent or human-priority handling.",
          },
          {
            title: "Repeated questions",
            text: "Spot which FAQs or issue types appear most often so knowledge gaps can be fixed.",
          },
          {
            title: "SLA risk",
            text: "See which conversations are at risk of missing response or handover targets.",
          },
          {
            title: "Handover volume",
            text: "Track how often automation routes cases to humans and whether context quality is improving.",
          },
        ],
      },
      metrics: {
        eyebrow: "Outcome metrics",
        title: "Outcomes support teams can track",
        items: [
          {
            title: "First response speed",
            text: "How quickly customers receive a useful first reply.",
          },
          {
            title: "FAQ deflection rate",
            text: "How many repeated questions are answered without human involvement.",
          },
          {
            title: "Issue capture quality",
            text: "How many support cases include category, urgency, customer details, and required context.",
          },
          {
            title: "Escalation quality",
            text: "How many handovers include full conversation history and next-step context.",
          },
          {
            title: "Resolution progress",
            text: "How many cases are open, assigned, escalated, pending customer response, or closed.",
          },
          {
            title: "Repeated issue patterns",
            text: "Which questions, complaints, and support categories appear most often.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Support demo",
        title: "Ready to automate your support workflow?",
        description:
          "Tell us how your team currently handles repeated questions, issue triage, ticket creation, escalation, status updates, and support follow-ups. We'll map your current process and show the fastest Crescora AI workflow to launch first.",
        note: "Start with FAQ and triage. Prove value. Expand into ticketing, handover, analytics, and support visibility.",
        primary: { label: "Book Free Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
    serviceBusinesses: {
      metadata: {
        title: "Service Business Automation Software for Bookings, Payments, Reminders, and Follow-Ups | Crescora AI",
        description:
          "Automate service business bookings, customer enquiries, payment reminders, collections, service updates, staff handover, feedback, and follow-ups with Crescora AI.",
      },
      hero: {
        eyebrow: "Service business automation",
        title: "Automate service bookings, reminders, payments, collections, and customer follow-ups.",
        description:
          "Crescora AI helps service businesses respond faster, capture customer requests, confirm bookings, send reminders, collect payments, manage service updates, route requests to the right team, and follow up with customers across Web, WhatsApp, Telegram, email, and SMS.",
        trustLine:
          "Built for booking requests, payment reminders, collections, service updates, customer support, repeat visits, and human handover.",
        previewSteps: ["Enquiry", "Service Type", "Booking", "Reminder", "Payment", "Completion", "Feedback"],
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      overviewCards: [
        {
          eyebrow: "Booking automation",
          title: "Turn service enquiries into confirmed bookings.",
          text: "Crescora AI can collect customer details, service type, preferred date and time, location, contact number, booking notes, and urgency level before routing the request to your team or confirming the next step.",
        },
        {
          eyebrow: "Payments and follow-ups",
          title: "Stop chasing customers manually for reminders and payments.",
          text: "Crescora AI can send appointment reminders, payment follow-ups, pending collection alerts, service status updates, feedback requests, and repeat-visit messages so your team does not depend only on manual calling.",
        },
      ],
      overviewSupportLine:
        "Crescora AI has the required workflow building blocks for this journey, including forms, appointments, payments, notifications, records, handover, AI, FAQ, scheduler, and communication nodes.",
      painTitle: "Service teams lose revenue when bookings and follow-ups depend on manual work.",
      painDescription:
        "Service businesses often lose customers because enquiries are missed, booking details are incomplete, reminders are delayed, payments are not followed up, and teams do not have clear ownership of each request.",
      painPoints: [
        {
          title: "Missed service enquiries",
          text: "Customers drop off when nobody responds quickly enough.",
        },
        {
          title: "Manual booking coordination",
          text: "Staff spend time collecting basic details instead of closing bookings.",
        },
        {
          title: "Incomplete customer details",
          text: "Teams receive requests without service type, location, timing, or urgency.",
        },
        {
          title: "Delayed payment follow-up",
          text: "Collections depend on manual calls and reminders.",
        },
        {
          title: "No clear service ownership",
          text: "Requests are passed between team members without clear accountability.",
        },
        {
          title: "Weak repeat-visit follow-up",
          text: "Customers are not reminded to book again after service completion.",
        },
      ],
      workflowTitle: "Service workflows Crescora AI can automate",
      workflowDescription:
        "Crescora AI can coordinate booking requests, reminders, payments, customer support, routing, status updates, reviews, and repeat-service follow-ups as one structured operational workflow.",
      workflows: [
        {
          title: "Service booking requests",
          text: "Capture the customer name, phone number, service type, preferred time, location, and request details.",
        },
        {
          title: "Appointment and visit reminders",
          text: "Send reminders before scheduled visits, consultations, home services, pickups, or callbacks.",
        },
        {
          title: "Payment and collection follow-ups",
          text: "Share payment links, send pending payment reminders, confirm payments, and alert your team when manual action is needed.",
        },
        {
          title: "Customer support and issue routing",
          text: "Capture complaints, service issues, refund requests, rescheduling requests, and route them to the right team.",
        },
        {
          title: "Technician or staff assignment",
          text: "Route service requests based on location, service type, urgency, or team availability.",
        },
        {
          title: "Service status updates",
          text: "Notify customers when a booking is confirmed, rescheduled, completed, delayed, or awaiting payment.",
        },
        {
          title: "Feedback and review collection",
          text: "Collect customer feedback after service completion and route poor ratings for follow-up.",
        },
        {
          title: "Repeat booking follow-ups",
          text: "Bring customers back with reminders for renewals, maintenance, repeat visits, or package-based services.",
        },
      ],
      journey: {
        eyebrow: "Service journey",
        title: "Example service business journey",
        description:
          "This page should feel like a real operational workflow, not just a service booking bot.",
        steps: [
          "Customer starts a chat from website, WhatsApp, or another supported channel.",
          "Crescora AI asks what they need: new booking, reschedule, payment, complaint, service update, or support.",
          "Customer selects the service type.",
          "Crescora AI collects contact details, location, preferred date or time, and request notes.",
          "Booking or callback request is confirmed.",
          "Reminder is sent before the service.",
          "Payment or collection follow-up is sent where required.",
          "Completed service can trigger feedback, review collection, or repeat-booking follow-up.",
          "Urgent, unclear, or unhappy customer cases move to human handover with context.",
        ],
        supportLine:
          "Crescora AI's runtime and product surfaces support conversation tracking, handover, queue status, analytics, scheduling, reminders, payment steps, and operational visibility.",
      },
      comparison: {
        eyebrow: "Before Crescora AI vs After Crescora AI",
        title: "What changes when service bookings and follow-ups run through one structured workflow.",
        rows: [
          {
            before: "Enquiries come from calls, website forms, WhatsApp, and social messages",
            after: "Every enquiry enters a structured service workflow",
          },
          {
            before: "Staff collect the same booking details manually",
            after: "Crescora AI collects customer, service, time, and location details first",
          },
          {
            before: "Reminders depend on staff memory",
            after: "Booking, payment, and service reminders can be automated",
          },
          {
            before: "Payment follow-ups are manual",
            after: "Payment links, reminders, confirmations, and failed-payment recovery can be structured",
          },
          {
            before: "Service ownership is unclear",
            after: "Requests can be routed to the right staff, technician, or support team",
          },
          {
            before: "Customers do not get timely updates",
            after: "Crescora AI can send booking, delay, completion, and follow-up updates",
          },
        ],
      },
      metrics: {
        eyebrow: "Outcome metrics",
        title: "Outcomes service businesses can track",
        items: [
          {
            title: "First response speed",
            text: "How quickly customers receive a useful first reply.",
          },
          {
            title: "Booking completion rate",
            text: "How many enquiries become confirmed bookings or callbacks.",
          },
          {
            title: "Payment follow-up progress",
            text: "How many pending payments receive reminders and confirmations.",
          },
          {
            title: "Service request quality",
            text: "How many bookings include service type, location, timing, and contact details.",
          },
          {
            title: "Handover quality",
            text: "How many urgent or complex cases reach the right team with context.",
          },
          {
            title: "Repeat booking opportunities",
            text: "How many completed services trigger follow-up, review, or repeat-visit messages.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Service business demo",
        title: "Ready to automate your service booking workflow?",
        description:
          "Tell us how your business currently handles enquiries, bookings, reminders, payments, collections, service updates, and customer follow-ups. We'll map your current process and show the fastest Crescora AI workflow to launch first.",
        note: "Start with one booking or payment follow-up workflow. Prove value. Expand into support, reminders, reviews, and repeat visits.",
        primary: { label: "Book Free Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
    },
  },
  useCases: {
    whatsapp: {
      metadata: {
        title: "WhatsApp Automation Workflows and AI Chatbots | Crescora AI",
        description:
          "Run AI-powered WhatsApp automation workflows for lead handling, website chatbot handoff, social messaging follow-up, booking, reminders, payments, document collection, support, and human handoff.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Run AI-powered WhatsApp automation workflows for leads, bookings, support, and follow-up.",
        description:
          "Crescora AI automates WhatsApp lead capture, AI-assisted replies, appointment booking, payment follow-ups, reminders, document collection, support triage, and escalation while staying connected to website chatbots and business systems.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      painTitle: "Manual WhatsApp handling creates response delays and lost opportunities.",
      painPoints: [
        "Missed enquiries after business hours",
        "Delayed response during peak hours",
        "Inconsistent follow-up execution",
        "No structured outcome tracking",
      ],
      automationTitle: "What Crescora AI automates with WhatsApp AI workflows",
      automations: [
        "Instant first-response logic and AI-assisted answers",
        "Lead qualification, routing, and CRM tagging",
        "Appointment, demo, and callback booking",
        "Payment reminder and collections workflows",
        "Document intake, missing-item reminders, and updates",
        "Human handoff for complex, sensitive, or high-value requests",
      ],
      coverageTitle: "Connect WhatsApp automation to the rest of your funnel",
      coverageDescription:
        "The strongest WhatsApp automations are not isolated bots. They stay connected to website chat, social messaging, and the tools your team works from every day.",
      coverageCards: [
        {
          title: "Connected channels",
          items: [
            "WhatsApp Business conversations and follow-up sequences",
            "Website chatbots and lead forms feeding the same workflow",
            "Instagram DM and Facebook Messenger escalation into operations",
            "Team inbox or call-back handoff when a person needs to take over",
          ],
        },
        {
          title: "Business integrations",
          items: [
            "CRM, booking calendar, and lead assignment sync",
            "Payment links, status checks, and reminder triggers",
            "Google Sheets, helpdesk queues, and reporting dashboards",
            "Internal APIs for downstream operations and status updates",
          ],
        },
      ],
      serviceTitle: "Services teams launch first on WhatsApp",
      serviceDescription:
        "Start with the workflow your team repeats every day, then expand to adjacent services once the first automation proves value.",
      services: [
        "Lead capture and qualification",
        "Appointment and demo booking",
        "Support replies and FAQ handling",
        "Document collection and onboarding",
        "Payment reminders and collections follow-up",
        "Human handoff with full conversation context",
      ],
      exampleFlowTitle: "Example Workflow",
      exampleFlow: [
        "Customer sends WhatsApp enquiry",
        "Crescora AI identifies intent",
        "Qualification questions asked",
        "Booking or follow-up workflow started",
        "Reminder sequence triggered",
        "Human handoff if needed",
        "Outcome recorded",
      ],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    appointment: {
      metadata: {
        title: "Appointment Booking Automation | Crescora AI",
        description:
          "Reduce back-and-forth by automating availability checks, confirmation, reminders, and rescheduling.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Reduce back-and-forth by automating appointment booking.",
        description:
          "Crescora AI handles availability checks, confirmations, reminders, and rescheduling so your team spends less time coordinating.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      items: ["Availability collection", "Booking confirmation", "Reminder sequences", "Rescheduling support"],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    payment: {
      metadata: {
        title: "Payment Follow-Up Automation | Crescora AI",
        description:
          "Send structured payment reminders and escalate unresolved cases to the right team.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Send payment reminders and escalate unresolved cases.",
        description:
          "Crescora AI automates structured payment follow-up so staff do not spend time manually chasing reminders and statuses.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      items: [
        "Payment due notifications",
        "Reminder sequences",
        "Status collection",
        "Escalation for overdue cases",
      ],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    document: {
      metadata: {
        title: "Document Collection Automation | Crescora AI",
        description: "Request, collect, and follow up on documents without manual chasing.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Request and collect documents without manual chasing.",
        description:
          "Crescora AI automates document request, follow-up, and status tracking so your team gets fewer incomplete submissions.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      items: [
        "Document request workflow",
        "Missing document reminders",
        "Upload/intake tracking",
        "Human review and escalation",
      ],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    customerSupport: {
      metadata: {
        title: "Customer Support Automation | Crescora AI",
        description:
          "Handle repetitive support queries and route complex tickets with context.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Handle repetitive support queries and route complex tickets with context.",
        description:
          "Crescora AI reduces support load by answering routine questions and handing off edge cases cleanly.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      items: ["FAQ resolution", "Ticket routing", "Context handoff", "Support status updates"],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    humanHandoff: {
      metadata: {
        title: "Human Handoff Automation | Crescora AI",
        description: "Move conversations to humans with full history and the right next action.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Move conversations to humans with full history and the right next action.",
        description:
          "Crescora AI hands off context-rich conversations so the next person sees the full interaction history and a clear next step.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
      },
      items: ["Escalation rules", "Context transfer", "Priority routing", "SLA visibility"],
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    leadCaptureQualification: {
      metadata: {
      title: "Lead Capture and Qualification Automation for WhatsApp, Website, Ads, Sales Routing, and Follow-Ups",
        description:
          "Capture enquiries and qualify leads automatically with Crescora AI. Convert WhatsApp, website, ad, and landing page enquiries into structured leads with routing, follow-ups, CRM updates, and outcome tracking.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Capture enquiries and qualify leads automatically.",
        description:
          "Crescora AI helps businesses turn enquiries from website chat, WhatsApp, ads, landing pages, and campaigns into structured lead workflows. Ask the right questions, capture contact details, understand buyer intent, route qualified leads to the right team, and follow up when enquiries are incomplete.",
        primaryCta: { label: "Book Free Demo", href: "/contact" },
        secondaryCta: { label: "Discuss My Workflow", href: "/contact" },
        supportText:
          "Built for inbound enquiries, lead qualification, buyer intent scoring, callback requests, sales routing, CRM updates, incomplete enquiry recovery, and follow-up automation.",
      },
      rollout: {
        eyebrow: "What Crescora AI handles",
        title: "A practical rollout path for lead capture and qualification",
        description:
          "Start with one high-intent enquiry source, capture the required lead details, qualify buyer intent, route serious opportunities to your team, and follow up with leads that do not complete the journey.",
      },
      items: [
        "Web, WhatsApp, and ad enquiry capture",
        "Qualification questions and intent scoring",
        "Qualified lead routing with context",
        "Follow-up for incomplete enquiries",
      ],
      itemDescriptions: [
        "Capture enquiries from website chat, WhatsApp, landing pages, ad campaigns, social messages, and inbound forms. Every enquiry can enter a structured workflow instead of staying scattered across channels.",
        "Ask the right questions based on your business: requirement, budget, location, urgency, timeline, service interest, preferred contact time, and buying intent.",
        "Route hot leads to sales, support, admissions, front desk, real estate reps, service teams, or consultants with captured details and conversation history.",
        "Recover leads that drop off before sharing details, choosing a slot, confirming interest, or requesting a callback. Crescora AI can trigger reminders and next-step prompts.",
      ],
      captureSection: {
        eyebrow: "What Crescora AI captures",
        title: "What Crescora AI captures before your team steps in",
        description:
          "Structure the enquiry first so your sales or operations team gets context instead of an unqualified message thread.",
        items: [
          {
            title: "Customer identity",
            description:
              "Name, mobile number, email, preferred language, location, and channel source.",
          },
          {
            title: "Business requirement",
            description:
              "Service needed, product interest, project interest, course interest, appointment need, support need, or consultation request.",
          },
          {
            title: "Qualification details",
            description:
              "Budget, timeline, urgency, preferred date and time, location preference, customer type, and decision stage.",
          },
          {
            title: "Lead source",
            description:
              "Website chat, WhatsApp, ad campaign, landing page, social message, QR campaign, referral, or manual entry.",
          },
          {
            title: "Next action",
            description:
              "Book callback, schedule appointment, share brochure, send pricing, route to sales, collect payment, request documents, or hand over to staff.",
          },
          {
            title: "Lead status",
            description:
              "New, captured, qualified, incomplete, callback requested, assigned, followed up, converted, cold, or closed.",
          },
        ],
      },
      workflowSection: {
        eyebrow: "Workflow diagram",
        title: "Lead capture and qualification path",
        description:
          "Map the enquiry from first message to a business-ready outcome instead of stopping at contact collection.",
        steps: [
          "Enquiry",
          "Contact Capture",
          "Requirement",
          "Qualification",
          "Intent Score",
          "Sales Routing",
          "Follow-Up",
          "Outcome Tracking",
        ],
        supportLine:
          "The goal is not only to collect leads. The goal is to move every enquiry toward a clear business result: qualified, assigned, booked, followed up, converted, or closed.",
        statusChips: [
          "New Enquiry",
          "Details Captured",
          "Qualified",
          "High Intent",
          "Assigned",
          "Follow-Up Pending",
          "Converted",
        ],
      },
      comparisonSection: {
        eyebrow: "Before and after",
        title: "What changes when Crescora AI runs the workflow",
        description:
          "Show the shift from scattered enquiries to a structured lead workflow with routing and follow-up.",
        rows: [
          {
            before: "Leads arrive from many channels and get missed",
            after: "Every enquiry can enter a structured lead workflow",
          },
          {
            before: "Staff ask the same questions manually",
            after: "Crescora AI captures key lead details automatically",
          },
          {
            before: "Sales teams receive incomplete leads",
            after: "Qualified leads can include requirement, budget, urgency, and context",
          },
          {
            before: "Hot leads wait too long",
            after: "High-intent enquiries can be routed faster",
          },
          {
            before: "Incomplete enquiries are forgotten",
            after: "Follow-up reminders can recover dropped leads",
          },
          {
            before: "Managers lack lead visibility",
            after: "Lead status can be tracked from enquiry to outcome",
          },
        ],
      },
      useCasesSection: {
        eyebrow: "Use cases",
        title: "Use this workflow for",
        description:
          "Start with the lead source or business workflow that produces the most inbound volume, then expand into routing, reminders, and CRM sync.",
        items: [
          {
            title: "Website lead capture",
            description:
              "Convert website visitors into structured enquiries with name, contact, requirement, and next step.",
          },
          {
            title: "WhatsApp enquiry qualification",
            description:
              "Turn WhatsApp messages into qualified leads instead of unstructured chat threads.",
          },
          {
            title: "Ad campaign lead routing",
            description:
              "Capture source, campaign, intent, and sales context before assigning the lead.",
          },
          {
            title: "Real estate buyer qualification",
            description:
              "Collect budget, location, BHK, project interest, and site visit preference.",
          },
          {
            title: "Education admissions enquiries",
            description:
              "Capture course interest, student details, batch preference, fee questions, and counsellor routing.",
          },
          {
            title: "Service business bookings",
            description:
              "Capture service type, location, urgency, preferred time, and staff assignment.",
          },
          {
            title: "Healthcare appointment enquiries",
            description:
              "Capture department, patient details, preferred slot, and front-desk handover when needed.",
          },
        ],
      },
      metricsSection: {
        eyebrow: "Metrics",
        title: "What to measure after launching this workflow",
        description:
          "Treat the pilot as a measurable lead system, not just a contact form replacement.",
        items: [
          {
            title: "Lead capture rate",
            description:
              "How many visitors or enquiries become captured leads.",
          },
          {
            title: "Qualification completion rate",
            description:
              "How many leads answer the required qualification questions.",
          },
          {
            title: "Hot lead routing speed",
            description:
              "How quickly qualified leads reach the right team.",
          },
          {
            title: "Incomplete enquiry recovery",
            description:
              "How many dropped leads respond after follow-up.",
          },
          {
            title: "Callback booking rate",
            description:
              "How many leads request a call, demo, appointment, or visit.",
          },
          {
            title: "Conversion visibility",
            description:
              "How many leads move from new to qualified, assigned, followed up, converted, or closed.",
          },
          {
            title: "Source performance",
            description:
              "Which channels produce better leads: WhatsApp, website, ads, social, referrals, or landing pages.",
          },
        ],
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Frequently asked questions",
        description:
          "Answer the rollout questions before implementation so the lead workflow can launch without ambiguity.",
        items: [
          {
            question: "Can Crescora AI capture leads from WhatsApp and website chat?",
            answer:
              "Yes. Crescora AI supports multi-channel customer workflows, including website chat, WhatsApp, Telegram, email, SMS, and connected systems depending on rollout scope.",
          },
          {
            question: "Can Crescora AI qualify leads automatically?",
            answer:
              "Yes. Crescora AI can ask qualification questions, collect structured fields, classify intent, and route leads based on business rules.",
          },
          {
            question: "Can leads be sent to CRM, Google Sheets, or internal tools?",
            answer:
              "Yes, based on rollout scope. Crescora AI supports records, API calls, connectors, notifications, analytics events, and workflow-owned structured data.",
          },
          {
            question: "What happens when a lead does not complete the enquiry?",
            answer:
              "The workflow can trigger follow-up reminders, ask for missing details, offer a callback, or hand over the conversation to a human team.",
          },
          {
            question: "Can high-value leads be routed faster?",
            answer:
              "Yes. Lead routing can use urgency, budget, source, location, customer type, or selected service to route serious enquiries to the right team.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Next step",
        title: "Ready to automate your lead capture and qualification workflow?",
        description:
          "Tell us how your business currently handles enquiries from WhatsApp, website, ads, forms, and calls. We'll map your lead capture process, qualification questions, routing rules, follow-up sequence, and the fastest Crescora AI workflow to launch first.",
        note:
          "Start with one lead source. Prove value. Expand into routing, reminders, CRM sync, and pipeline visibility.",
        primary: { label: "Book Free Demo", href: "/contact" },
        secondary: { label: "Discuss My Workflow", href: "/contact" },
      },
      cta: { label: "Book Free Demo", href: "/contact" },
    },
    faqAutomation: {
      metadata: {
        title: "FAQ Automation for Business | Crescora AI",
        description:
          "Answer repeated questions about pricing, availability, services, documents, timings, and next steps.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Answer repeated questions before they slow your team down.",
        description:
          "Crescora AI handles routine FAQ conversations and escalates anything complex with full context.",
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
        title: "CRM and API Sync Automation | Crescora AI",
        description:
          "Send captured leads, appointments, payments, and support details to CRM, Google Sheets, booking systems, or internal tools.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Sync customer actions to your CRM and internal tools.",
        description:
          "Crescora AI can send leads, bookings, payments, and support updates into the systems your team already uses.",
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
        title: "Reminder Automation for Business | Crescora AI",
        description:
          "Send follow-ups for appointments, payments, pending documents, abandoned enquiries, and scheduled callbacks.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Send follow-up reminders at the right time.",
        description:
          "Crescora AI triggers reminders for the next step so enquiries, bookings, and payments do not stall silently.",
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
        title: "Ticket Creation and Escalation Automation | Crescora AI",
        description:
          "Capture issue details, create support tickets, and escalate complex cases with full context.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Create support tickets and escalate complex cases.",
        description:
          "Crescora AI captures issue details, creates the ticket, and routes it with context so nothing gets lost.",
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
        title: "Feedback and Review Collection Automation | Crescora AI",
        description:
          "Collect customer feedback after appointments, service completion, delivery, or support resolution.",
      },
      hero: {
        eyebrow: "Use case",
        title: "Collect feedback and reviews after each customer action.",
        description:
          "Crescora AI requests ratings or comments after appointments, service completion, delivery, or support resolution.",
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
      updatedOn: "June 23, 2026",
      sections: [
        {
          title: "Information we collect",
          paragraphs: [
            "When you contact us or request a demo, we may collect your name, company name, work email, phone or WhatsApp number, country, industry, primary use case, expected timeline, monthly enquiry volume, preferred channel, current tools, and the problem you want to solve.",
            "We may also collect page URL, referrer URL, campaign parameters such as UTM values, and high-level website interaction data such as page views, CTA clicks, contact-page visits, scroll depth, and lead-form funnel events so we can understand where an enquiry came from and how visitors move through the site.",
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
      updatedOn: "June 23, 2026",
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
            "The checked-in website now loads Google tag / Google Analytics on the public marketing site to measure page views, CTA clicks, contact-page traffic, scroll depth, lead-form funnel events, and frontend performance metrics.",
            "The checked-in site still does not ship a cookie banner or preference center. Browser, hosting, or embedded services may also set technical data needed to deliver the page, protect the site, or support third-party features.",
          ],
        },
        {
          title: "How we use similar technologies",
          paragraphs: [
            "Analytics is currently used to understand site performance, campaign quality, contact intent, and lead-form completion patterns so we can improve the marketing funnel and page experience.",
            "We still keep the implementation limited to operational analytics rather than ad personalization, and we will update this policy again if the behavior changes materially.",
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
    secondaryCta: { label: "Book Free Demo", href: "/contact" },
  },
} as const;

export type SiteContent = typeof siteContent;
export type PageHeroData = PageHeroCopy;
export type SplitCardPageData = SplitCardPage;
export type LegalPageData = LegalPageCopy;
