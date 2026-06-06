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

export const siteContent = {
  site: {
    name: "Crescora AI",
    product: "FLOW",
    productFull: "FLOW by Crescora",
    legalName: "Crescora",
    seoTitle: "FLOW Automation for Customer Conversations & Workflows",
    tagline: "Book more client projects from faster enquiry handling and follow-ups.",
    description:
      "FLOW by Crescora helps client businesses turn enquiries into booked calls, clear follow-ups, and completed projects across WhatsApp, web chat, voice, and team inboxes.",
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
      intro: "India-led, premium in presentation, and built for businesses that need practical client project flows across customer operations.",
      allRightsReserved: "All rights reserved.",
      companyReferenceLabel: "Company reference:",
      productLabel: "Product:",
    },
    workflowVisual: {
      eyebrow: "FLOW project flow",
      title: "Client enquiry to completed project step",
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
        "FLOW moves from first reply to next action to handoff while keeping the conversation clear for staff.",
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
        { label: "Proof", href: "/resources" },
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
    bookProjectDemo: { label: "Book Project Demo", href: "/contact" },
    requestScopeCall: { label: "Request Scope Call", href: "/contact" },
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
    openComparison: { label: "Open comparison", href: "#" },
    openProofPage: { label: "Open proof page", href: "#" },
    openUseCase: { label: "Open use case", href: "#" },
    seePricing: { label: "See Pricing", href: "/pricing" },
    viewWorkflow: { label: "View workflows", href: "#" },
    viewIndustryWorkflow: { label: "View Industry Workflows", href: "#" },
  } as const,
  homepage: {
    hero: {
      badge: "Crescora AI presents FLOW",
      title: "Automate customer conversations, workflows, and follow-ups.",
      description:
        "FLOW by Crescora helps Indian businesses automate customer conversations, bookings, follow-ups, support, payments, and workflow operations across WhatsApp, web chat, voice, and team inboxes.",
      builtForLabel: "Built for",
      builtForText:
        "Hospitals, clinics, real estate teams, support teams, and service businesses.",
      stats: [
        { value: "70-90%", label: "repetitive customer workflows automated" },
        { value: "5", label: "first-release industries prioritized" },
        { value: "4", label: "pricing packages with clear growth paths" },
      ],
    },
    painPoints: [
      "Missed customer leads",
      "Manual WhatsApp replies",
      "Repetitive support questions",
      "Appointment chaos",
      "Payment and document delays",
      "No visibility into team performance",
    ],
    pain: {
      eyebrow: "Pain",
      title: "Your business is not losing customers because of demand. It is losing them because of delay.",
      description:
        "Every missed reply, delayed follow-up, repeated question, manual booking, pending payment, and forgotten lead creates revenue leakage. FLOW turns these gaps into automated workflows.",
      cardText:
        "FLOW structures the follow-up or workflow that is otherwise handled manually.",
      warningText:
        "Delays and manual handling create revenue leakage, operational drag, and poor customer experience.",
    },
    outcomes: {
      eyebrow: "Outcomes",
      title: "FLOW does not just answer. It gets work done.",
      description:
        "After a customer message, FLOW can qualify, book, collect, remind, escalate, update records, and report outcomes automatically.",
      items: [
        "Enquiry -> appointment booked",
        "Lead -> site visit scheduled",
        "Student question -> demo class booked",
        "Payment due -> reminder sent and status updated",
        "Document request -> intake completed",
        "Complex issue -> routed to human with context",
      ],
      automationClaim:
        "Automate up to 70-90% of repetitive customer conversations and follow-up workflows.",
      automationSupport:
        "Not 100% automation. Better automation with human handoff built in for complex, sensitive, and high-value cases.",
      results: [
        "Faster first response",
        "Consistent follow-up execution",
        "Lower manual operations load",
        "Human control preserved",
      ],
    },
    industries: {
      eyebrow: "Industries",
      title: "See how FLOW works in your industry.",
      description: "Start with workflows that directly affect revenue and operations in your business.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "The business flow behind the promise.",
      description:
        "FLOW keeps enquiry handling, follow-up, handoff, and outcome tracking in one simple client journey.",
      teamLabel: "What the team sees",
      teamDescription:
        "FLOW gives your team a clear path from enquiry to next step, with reminders, handoff, records, and progress visibility built into the process.",
      sectionDescription:
        "Keep enquiry handling, follow-up, handoff, and outcome tracking in one simple client journey.",
    },
    beforeAfter: {
      beforeLabel: "Before",
      afterLabel: "After FLOW",
      beforeItems: ["Leads delayed", "Follow-ups missed", "Staff overloaded", "No clear visibility"],
      afterItems: [
        "Faster responses",
        "Automated follow-ups",
        "Consistent process execution",
        "Better conversion visibility",
      ],
    },
    trust: {
      eyebrow: "Trust and control",
      title: "AI handles routine work. Your team controls critical decisions.",
      points: [
        "Human review for sensitive or high-value conversations",
        "Clear escalation paths",
        "Visible progress for the team",
        "Configured around your business process, not guesswork",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      items: [
        {
          question: "Is FLOW only for WhatsApp?",
          answer:
            "No. FLOW works across WhatsApp, web chat, voice, and team inboxes so client conversations do not stall in one place.",
        },
        {
          question: "Will AI replace our team?",
          answer:
            "No. FLOW handles repetitive work and routes important conversations to people with full context.",
        },
        {
          question: "How quickly can we launch?",
          answer:
            "Most teams start with one high-value client journey first, then expand once the process is proven.",
        },
        {
          question: "Can FLOW work with our current setup?",
          answer:
            "Yes. FLOW is designed to fit into your current process and support the tools your team already uses.",
        },
        {
          question: "Can we start small?",
          answer:
            "Yes. The Starter package is designed for one or two focused workflows with a clear business case.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Start with high-impact workflows. Scale as you grow.",
      description:
        "Choose a package that matches your current automation maturity, then expand channels and workflows over time.",
    },
    finalCta: {
      eyebrow: "Final CTA",
      title: "Stop losing leads and time to manual follow-ups.",
      description: "Get an industry-specific demo of how FLOW can automate your customer operations.",
      primary: { label: "Book Project Demo", href: "/contact" },
      secondary: { label: "Request Scope Call", href: "/contact" },
    },
  },
  leadForm: {
    badge: "Project enquiry",
    title: "Book a project demo for your client business",
    description:
      "Tell us your industry and highest-priority client journey. We will map a practical project plan for your team.",
    secureLabel: "Secure form handling",
    submitIdle: "Book Project Demo",
    submitLoading: "Submitting...",
    validationError: "Please complete all required fields before submitting.",
    successMessage:
      "Your project demo request is confirmed. Our team will contact you with a practical rollout plan for your business.",
    errorMessage: "We could not submit your request right now. Please retry or contact us directly.",
    labels: {
      fullName: "Full name",
      companyName: "Company name",
      workEmail: "Work email",
      phoneOrWhatsapp: "Phone or WhatsApp",
      industry: "Industry",
      primaryUseCase: "Primary use case",
      monthlyEnquiryVolume: "Monthly enquiry volume",
      timeline: "Timeline",
      currentTools: "Current tools",
      keyProblem: "Key problem",
    },
    hints: {
      currentTools: "Optional",
      keyProblem: "Optional",
    },
    placeholders: {
      fullName: "Your name",
      companyName: "Company / business name",
      workEmail: "name@company.com",
      phoneOrWhatsapp: "+91...",
      currentTools: "Website, WhatsApp, email, team inbox, etc.",
      keyProblem: "Describe the client journey or process gap you want to improve.",
    },
    selectPlaceholders: {
      industry: "Select industry",
      primaryUseCase: "Select project type",
      monthlyEnquiryVolume: "Select monthly enquiry volume",
      timeline: "Select timeline",
    },
    options: {
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
    },
  },
  about: {
    metadata: {
      title: "About | Crescora AI",
      description: "Crescora AI helps client businesses turn enquiries into booked projects.",
    },
    hero: {
      eyebrow: "About",
      title: "Crescora AI helps client businesses win more projects.",
      description:
        "Our mission is to turn customer enquiries into booked next steps through a simple, credible, and controlled business flow.",
      primaryCta: { label: "Book Project Demo", href: "/contact" },
      secondaryCta: { label: "Talk to Sales", href: "/contact" },
    },
    mission: {
      title: "Mission",
      description: "Turn customer conversations into booked meetings, clear follow-ups, and completed projects.",
    },
    belief: {
      title: "Belief",
      description:
        "Keep the process simple, keep humans for critical decisions, and build trust from the first interaction.",
    },
    cta: { label: "Book Project Demo", href: "/contact" },
  },
  contact: {
    metadata: {
      title: "Book FLOW Project Demo | Client Business Automation",
      description:
        "Book an industry-specific FLOW demo and get a practical rollout recommendation for your client operations.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Book your FLOW project demo.",
      description:
        "Tell us your industry and highest-priority client journey. We will map a practical rollout for your team.",
    },
  },
  pricing: {
    metadata: {
      title: "FLOW Pricing | Business Automation Packages",
      description: "Explore package-based plans for client journeys, follow-ups, and project scale.",
    },
    hero: {
      eyebrow: "Pricing",
      title: "Pricing that scales with your project needs.",
      description:
        "Start with one focused client journey, then expand to more teams and more business flows as you grow.",
      primaryCta: { label: "Talk to Sales", href: "/contact" },
      secondaryCta: { label: "Book Project Demo", href: "/contact" },
    },
    note: "Package-based pricing aligned to project scope, channels, and support requirements.",
    ctas: {
      primary: { label: "Talk to Sales", href: "/contact" },
      secondary: { label: "Request Scope Call", href: "/contact" },
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
    handoffBadge: "Human handoff",
    handoffTitle: "Human review is part of the process from the start.",
    dependableBadge: "What keeps it dependable",
    dependableText:
      "FLOW keeps the client journey moving with reminders, follow-up steps, handoff, records, and clear progress visibility.",
    controlTitle: "Responsible claims and clear boundaries",
    controlText:
      "FLOW supports business process control. Regulatory and legal claims should only be made after formal review and verification for your deployment context.",
    cta: { label: "Book Project Demo", href: "/contact" },
  },
  platform: {
    metadata: {
      title: "How FLOW Works | Client Project Automation",
      description:
        "See how FLOW helps your team handle enquiries, follow-ups, and project handoff with control.",
    },
    hero: {
      eyebrow: "How It Works",
      title: "See how FLOW fits your team.",
      description:
        "FLOW helps you handle enquiries, follow-ups, and handoff in a simple business flow your team can use every day.",
      primaryCta: { label: "Book Project Demo", href: "/contact" },
      secondaryCta: { label: "Talk to Sales", href: "/contact" },
    },
    section: {
      eyebrow: "What you get",
      title: "Built for client projects that need structure and follow-through.",
      description:
        "FLOW helps your team stay consistent with enquiry handling, reminders, handoff, and outcome tracking.",
    },
    team: {
      badge: "Team control",
      title: "The team stays in control of important decisions.",
      startLabel: "Start here",
      startTitle: "See how FLOW fits your first project rollout.",
      startText:
        "We use your current setup, customer journey, and team structure to recommend the right starting point.",
      cta: { label: "Book Project Demo", href: "/contact" },
    },
  },
  industriesIndex: {
    metadata: {
      title: "Industries | FLOW by Crescora",
      description: "Industry workflows built for real operations.",
    },
    hero: {
      eyebrow: "Industries",
      title: "Industry workflows built for real operations.",
      description: "See how FLOW automates repetitive customer operations in your business context.",
      primaryCta: { label: "Book Project Demo", href: "/contact" },
      secondaryCta: { label: "Request Scope Call", href: "/contact" },
    },
    phaseTwo: {
      eyebrow: "Phase 2",
      title: "Expand local-language and state-specific variants after the five core verticals.",
      description:
        "Use Search Console demand, proof, and conversion data to expand beyond the initial vertical set without creating thin pages.",
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
        "Start with the use case that directly affects your response speed, revenue, or operations.",
      primaryCta: { label: "Find My Use Case", href: "/contact" },
      secondaryCta: { label: "Book Project Demo", href: "/contact" },
    },
    cards: [
      {
        title: "WhatsApp Automation",
        href: "/use-cases/whatsapp-automation",
        text: "Turn WhatsApp enquiries into automated business workflows with qualification, booking, reminders, follow-up, and escalation.",
      },
      {
        title: "Appointment Booking",
        href: "/use-cases/appointment-booking-automation",
        text: "Reduce back-and-forth by automating availability checks, confirmation, reminders, and rescheduling.",
      },
      {
        title: "Payment Follow-Up",
        href: "/use-cases/payment-follow-up-automation",
        text: "Send structured payment reminders and escalate unresolved cases to the right team.",
      },
      {
        title: "Document Collection",
        href: "/use-cases/document-collection-automation",
        text: "Request, collect, and follow up on documents without manual chasing.",
      },
      {
        title: "Customer Support",
        href: "/use-cases/customer-support-automation",
        text: "Handle repetitive support queries and route complex tickets with context.",
      },
      {
        title: "Human Handoff",
        href: "/use-cases/human-handoff-automation",
        text: "Move conversations to humans with full history and the right next action.",
      },
    ],
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
      title: "Proof | Illustrative Workflow Case Studies",
      description:
        "Illustrative proof pages for healthcare, real estate, and education automation rollout patterns.",
    },
    hero: {
      eyebrow: "Proof",
      title: "Illustrative proof pages for industry-specific workflow automation.",
      description:
        "These pages are implementation narratives, not named customer claims, and they are written to support enterprise buying decisions.",
      primaryCta: { label: "Book Project Demo", href: "/contact" },
      secondaryCta: { label: "Request Scope Call", href: "/contact" },
    },
    notice:
      "The goal of these pages is to show the operating model, the rollout sequence, and the expected business impact. They should read like a real implementation story without inventing customer claims.",
    section: {
      eyebrow: "Illustrative stories",
      title: "Three proof narratives for the first release industries.",
      description:
        "Each page shows the operational flow and the controls that keep the rollout enterprise-ready.",
    },
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
  },
  legal: {
    privacy: {
      metadata: {
        title: "Privacy Policy | Crescora AI",
        description: "This page should be finalized with legal review before public launch.",
      },
      hero: {
        eyebrow: "Legal",
        title: "Privacy Policy",
        description:
          "This page should be finalized with legal review before public launch. It currently acts as the policy placeholder for the production build.",
      },
      body: [
        "Document the data collected, purpose, retention, sharing, user rights, and contact channels.",
        "Review this policy with legal counsel before launch.",
      ],
    },
    terms: {
      metadata: {
        title: "Terms of Service | Crescora AI",
        description: "Finalize this page with legal review before launch.",
      },
      hero: {
        eyebrow: "Legal",
        title: "Terms of Service",
        description:
          "Finalize this page with legal review before launch. It should define scope, responsibilities, limitations, and acceptable use.",
      },
      body: [
        "Document service scope, responsibilities, limitations, payment terms, and liability framework.",
        "Review this policy with legal counsel before launch.",
      ],
    },
    cookies: {
      metadata: {
        title: "Cookie Policy | Crescora AI",
        description: "Document analytics, preference management, and consent behavior before launch.",
      },
      hero: {
        eyebrow: "Legal",
        title: "Cookie Policy",
        description: "Document analytics, preference management, and consent behavior before launch.",
      },
      body: [
        "Describe analytics cookies, preference management, and consent handling.",
        "Review this policy with legal counsel before launch.",
      ],
    },
    acceptableUse: {
      metadata: {
        title: "Acceptable Use Policy | Crescora AI",
        description: "Define abuse, spam, harmful automation, and unauthorized data use before launch.",
      },
      hero: {
        eyebrow: "Legal",
        title: "Acceptable Use Policy",
        description:
          "Define abuse, spam, harmful automation, and unauthorized data use before launch.",
      },
      body: [
        "Restrict abuse, spam, deceptive automation, and unauthorized data use.",
        "Review this policy with legal counsel before launch.",
      ],
    },
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
