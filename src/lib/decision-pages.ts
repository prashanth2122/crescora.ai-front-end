export type ComparisonRow = {
  label: string;
  flow: string;
  alternative: string;
};

export type ComparisonPageData = {
  metadata: {
    title: string;
    description: string;
  };
  title: string;
  eyebrow: string;
  description: string;
  bottomLine: string;
  rows: ComparisonRow[];
  whyFlowWins: string[];
  whenAlternativeFits: string[];
  rolloutSteps: string[];
};

export type ProofPageData = {
  metadata: {
    title: string;
    description: string;
  };
  title: string;
  eyebrow: string;
  description: string;
  note: string;
  context: string;
  challenge: string[];
  workflow: string[];
  controls: string[];
  outcomes: string[];
  rolloutSteps: string[];
};

export const comparisonCards = [
  {
    title: "FLOW vs Chatbots",
    href: "/compare/flow-vs-chatbots",
    text: "Understand the gap between answering questions and running a workflow that books, follows up, escalates, and updates records.",
  },
  {
    title: "FLOW vs Manual WhatsApp",
    href: "/compare/flow-vs-manual-whatsapp",
    text: "See why shared inbox handling breaks down once volume, shift changes, and follow-up discipline start to matter.",
  },
  {
    title: "FLOW vs Generic Automation",
    href: "/compare/flow-vs-generic-automation",
    text: "Compare a full client-journey flow with simpler tools that only answer questions or pass messages along.",
  },
  {
    title: "FLOW vs CRM-Led Process",
    href: "/compare/flow-vs-crm-only",
    text: "Show why the CRM should store the result after FLOW handles the conversation and follow-up.",
  },
] as const;

export const proofCards = [
  {
    title: "Healthcare Front Desk Automation",
    href: "/proof/healthcare-front-desk-automation",
    text: "Illustrative proof page for appointment intake, reminders, document collection, payment follow-up, and sensitive handoff.",
  },
  {
    title: "Real Estate Lead Operations",
    href: "/proof/real-estate-lead-operations",
    text: "Illustrative proof page for fast lead response, qualification, site visit booking, assignment, and follow-up discipline.",
  },
  {
    title: "Education Admissions Workflow",
    href: "/proof/education-admissions-workflow",
    text: "Illustrative proof page for enquiry handling, demo bookings, counselor handoff, and admissions follow-up.",
  },
] as const;

export const comparisonPages: Record<string, ComparisonPageData> = {
  "flow-vs-chatbots": {
    metadata: {
      title: "FLOW vs Chatbots | Comparison",
      description: "See why FLOW is designed to complete workflows, while chatbots primarily answer questions.",
    },
    title: "FLOW vs Chatbots",
    eyebrow: "Comparison",
    description:
      "A chatbot can answer. FLOW can answer and keep the business moving by completing the next step in the workflow.",
    bottomLine:
      "Use a chatbot when you need lightweight Q&A. Use FLOW when the conversation must lead to a booked appointment, updated record, reminder, payment follow-up, or human handoff.",
    rows: [
      {
        label: "Primary job",
        flow: "Run a business workflow from conversation to outcome.",
        alternative: "Answer common questions and provide scripted replies.",
      },
      {
        label: "Workflow action",
        flow: "Books, routes, reminds, collects, updates, and escalates.",
        alternative: "Stops after the answer unless custom logic is added externally.",
      },
      {
        label: "Human handoff",
        flow: "Carries conversation history and context into escalation.",
        alternative: "Often hands off with limited context or no operating state.",
      },
      {
        label: "Systems integration",
        flow: "Triggers records, tasks, reminders, and downstream workflow steps.",
        alternative: "Usually needs separate steps to move information into the business process.",
      },
      {
        label: "Auditability",
        flow: "Designed around workflow visibility and outcome logging.",
        alternative: "Typically focused on conversation content, not process state.",
      },
      {
        label: "Best fit",
        flow: "Enquiry-heavy businesses with repeatable operational actions.",
        alternative: "Static FAQ experiences or simple support deflection.",
      },
    ],
    whyFlowWins: [
      "The business needs more than an answer; it needs a next action.",
      "A single conversation must support qualification, scheduling, reminders, or document intake.",
      "The team needs to know what happened, what is pending, and what escalated.",
      "Operational consistency matters more than ad hoc bot replies.",
    ],
    whenAlternativeFits: [
      "You only need a lightweight FAQ layer on a low-risk website.",
      "There is no follow-up, booking, payment, or handoff requirement.",
      "The process is not worth configuring as a real workflow yet.",
    ],
    rolloutSteps: [
      "Start with a single enquiry path and define the desired outcome.",
      "Add qualification logic before expanding to more intents.",
      "Connect booking, reminders, or record updates before going broad.",
      "Use human handoff as a planned step, not an exception after failure.",
    ],
  },
  "flow-vs-manual-whatsapp": {
    metadata: {
      title: "FLOW vs Manual WhatsApp | Comparison",
      description: "See how FLOW replaces inbox chaos with consistent, trackable WhatsApp workflow automation.",
    },
    title: "FLOW vs Manual WhatsApp",
    eyebrow: "Comparison",
    description:
      "Manual WhatsApp handling works until volume, staffing, and follow-up discipline turn every chat into a process risk.",
    bottomLine:
      "Use manual handling for very low-volume, temporary, or experimental operations. Use FLOW when WhatsApp is a core customer channel and missed replies or inconsistent follow-up cost revenue.",
    rows: [
      {
        label: "Response speed",
        flow: "Instant first response and structured follow-up logic.",
        alternative: "Depends on staff availability, shift coverage, and inbox discipline.",
      },
      {
        label: "Consistency",
        flow: "Same workflow every time, across every channel and shift.",
        alternative: "Varies by person, time of day, and workload.",
      },
      {
        label: "After-hours handling",
        flow: "Captures the lead, advances the workflow, and logs the next step.",
        alternative: "Messages may sit unanswered until someone returns.",
      },
      {
        label: "Follow-up",
        flow: "Automated reminders, retries, and escalation rules.",
        alternative: "Relies on memory, manual task lists, and staff availability.",
      },
      {
        label: "Visibility",
        flow: "Shows where each conversation sits in the workflow.",
        alternative: "Hard to track in a shared inbox once volume grows.",
      },
      {
        label: "Scale",
        flow: "Designed to handle more conversations without proportional headcount growth.",
        alternative: "Staff load rises almost linearly with volume.",
      },
    ],
    whyFlowWins: [
      "WhatsApp is not just a communication channel; it is a revenue and operations channel.",
      "The business needs repeatable qualification, booking, and follow-up discipline.",
      "More than one person touches the inbox and the team needs workflow consistency.",
      "Missed messages and late replies create a visible loss of trust and conversion.",
    ],
    whenAlternativeFits: [
      "A tiny team is handling a handful of messages per day.",
      "The channel is temporary and not part of the core operating model.",
      "The business is still validating demand before automating the workflow.",
    ],
    rolloutSteps: [
      "Automate first response and lead capture first.",
      "Add qualification, booking, and reminders after that baseline is stable.",
      "Move repeated status checks and document requests into structured flows.",
      "Keep staff access and takeover rules visible from the beginning.",
    ],
  },
  "flow-vs-generic-automation": {
    metadata: {
      title: "FLOW vs Generic Automation | Comparison",
      description:
        "Compare FLOW with generic automation tools that connect apps but do not run the customer conversation itself.",
    },
    title: "FLOW vs Generic Automation",
    eyebrow: "Comparison",
    description:
      "Generic automation tools connect apps. FLOW is designed to orchestrate customer conversations and outcomes across the full workflow.",
    bottomLine:
      "Use generic automation for internal data movement or one-off tasks. Use FLOW when the client conversation itself is part of the business process and the next step needs to be guided clearly.",
    rows: [
      {
        label: "Conversation logic",
        flow: "Built around intents, responses, and next best actions.",
        alternative: "Usually assumes a trigger-action chain rather than a conversation state.",
      },
      {
        label: "Channel coverage",
        flow: "Designed for WhatsApp, web chat, voice, and connected systems.",
        alternative: "Often requires extra glue to behave like a customer-facing layer.",
      },
      {
        label: "Human-in-the-loop",
        flow: "Hand-off is a first-class part of the operating model.",
        alternative: "Handoff usually needs separate design and error handling.",
      },
      {
        label: "Template depth",
        flow: "Ready for business workflows such as bookings, reminders, and document intake.",
        alternative: "General-purpose automation needs more custom assembly per workflow.",
      },
      {
        label: "Governance",
        flow: "Outcome tracking and workflow visibility are core expectations.",
        alternative: "Visibility can be fragmented across multiple tools and triggers.",
      },
      {
        label: "Business fit",
        flow: "High-frequency customer operations with repeatable decisions.",
        alternative: "Straightforward back-office tasks or single-step automations.",
      },
    ],
    whyFlowWins: [
      "The workflow begins with a customer message, not a system event.",
      "Business teams need prebuilt patterns for the most common operational journeys.",
      "The company wants a platform, not a pile of loosely connected automations.",
      "Support, sales, and operations all need to understand the same flow model.",
    ],
    whenAlternativeFits: [
      "You only need an internal sync between two apps.",
      "There is no customer conversation layer involved.",
      "The workflow is simple enough to remain a straight trigger-action automation.",
    ],
    rolloutSteps: [
      "Map the conversation path before connecting any tools.",
      "Define the business outcome and the handoff rules before scaling.",
      "Connect other tools after the flow itself is stable.",
      "Review edge cases where the customer journey can stall or branch.",
    ],
  },
  "flow-vs-crm-only": {
    metadata: {
      title: "FLOW vs CRM-Led Process | Comparison",
      description: "Compare FLOW against a CRM-led process and see why the client-flow layer matters before record storage.",
    },
    title: "FLOW vs CRM-Led Process",
    eyebrow: "Comparison",
    description:
      "A CRM stores the relationship. FLOW runs the conversation and follow-up that creates the result in the first place.",
    bottomLine:
      "Use the CRM as the record store. Use FLOW as the layer that qualifies, books, follows up, reminds, collects, and escalates before the record is updated.",
    rows: [
      {
        label: "Core role",
        flow: "Operates the customer interaction and workflow journey.",
        alternative: "Stores accounts, leads, activities, and pipeline state.",
      },
      {
        label: "Conversation handling",
        flow: "Handles the dialogue that moves the customer forward.",
        alternative: "Usually receives the outcome after the interaction is already done.",
      },
      {
        label: "Follow-up execution",
        flow: "Automates reminders, check-ins, and action sequences.",
        alternative: "Can track tasks, but usually does not run the conversation itself.",
      },
      {
        label: "Document and payment workflows",
        flow: "Requests, follows up, and escalates in context.",
        alternative: "Needs surrounding tooling to drive those customer interactions.",
      },
      {
        label: "Escalation model",
        flow: "Routes with full context to the right human owner.",
        alternative: "Depends on manual activity updates and rep discipline.",
      },
      {
        label: "Best fit",
        flow: "When the conversation is the operating layer.",
        alternative: "When the team only needs record management and pipeline visibility.",
      },
    ],
    whyFlowWins: [
      "The client journey starts before the CRM and must be actively managed.",
      "The business needs reminders, follow-ups, and handoffs that the CRM alone does not run.",
      "The team wants a clear separation between the flow and record storage.",
      "Lead handling should not depend on every rep manually updating the CRM in real time.",
    ],
    whenAlternativeFits: [
      "Your CRM already handles the full interaction layer, which is rare.",
      "The workflow is only about storing notes and changing pipeline stages.",
      "There is no customer-facing automation requirement at all.",
    ],
    rolloutSteps: [
      "Keep the CRM as the data store and FLOW as the client-flow layer.",
      "Agree on which fields and events should sync downstream.",
      "Design the conversation flow before the CRM setup.",
      "Audit handoff points so rep follow-up is not lost between systems.",
    ],
  },
  "flow-vs-chatbot-builder": {
    metadata: {
      title: "FLOW vs Chatbot Builder | Comparison",
      description: "See why FLOW is a workflow engine, not just a chatbot builder.",
    },
    title: "FLOW vs Chatbot Builder",
    eyebrow: "Comparison",
    description:
      "A chatbot builder creates chat experiences. FLOW is designed to move the customer journey forward with booking, follow-up, handoff, and record updates.",
    bottomLine:
      "Use a chatbot builder if you only need to assemble conversations. Use FLOW when the conversation must create an operational result.",
    rows: [
      { label: "Primary job", flow: "Run a customer workflow.", alternative: "Build a chat experience." },
      { label: "Business logic", flow: "Includes reminders, handoff, and records.", alternative: "Often needs extra automation around it." },
      { label: "Outcome focus", flow: "Built for conversion and process completion.", alternative: "Usually focused on responses and routing." },
      { label: "Templates", flow: "Ready for Indian business workflows.", alternative: "Usually generic and assembly-heavy." },
      { label: "Analytics", flow: "Tracks workflow progress and leakage.", alternative: "May not model the full business journey." },
      { label: "Best fit", flow: "Operational customer journeys.", alternative: "Conversation prototypes and simple bots." },
    ],
    whyFlowWins: [
      "The team wants the customer message to trigger a real business process.",
      "The workflow needs booking, reminders, payment follow-up, or document handling.",
      "The business wants one platform for the conversation and the next action.",
    ],
    whenAlternativeFits: [
      "The goal is only to prototype a chat UI.",
      "No workflow or outcome is needed beyond the message exchange.",
      "The team is still exploring a bot idea rather than a production process.",
    ],
    rolloutSteps: [
      "Define the customer journey and the final business outcome first.",
      "Add booking, follow-up, and escalation rules around the bot.",
      "Connect records and analytics after the flow is stable.",
      "Keep human handoff visible from the start.",
    ],
  },
  "flow-vs-whatsapp-chatbot-tools": {
    metadata: {
      title: "FLOW vs WhatsApp Chatbot Tools | Comparison",
      description: "Compare FLOW with WhatsApp-only bot tools that do not manage the full workflow.",
    },
    title: "FLOW vs WhatsApp Chatbot Tools",
    eyebrow: "Comparison",
    description:
      "WhatsApp chatbot tools are useful for conversation handling. FLOW is built to manage the business process that follows the conversation.",
    bottomLine:
      "Use WhatsApp-only tools for simple replies. Use FLOW when WhatsApp is the start of a broader workflow that needs a clear outcome.",
    rows: [
      { label: "Channel scope", flow: "Runs a multi-step workflow around WhatsApp.", alternative: "Usually limited to the chat layer." },
      { label: "Follow-up", flow: "Automated reminders and retries.", alternative: "Often manual or externally stitched together." },
      { label: "Handoff", flow: "Human takeover is part of the design.", alternative: "Handoff may be basic or fragmented." },
      { label: "Records", flow: "Updates business records and outcomes.", alternative: "Often stops at the message reply." },
      { label: "Templates", flow: "Supports industry-specific workflows.", alternative: "Usually generic or heavily customized." },
      { label: "Best fit", flow: "Revenue and operations workflows.", alternative: "FAQ and lightweight engagement bots." },
    ],
    whyFlowWins: [
      "The business needs a measurable outcome, not just a response.",
      "The workflow depends on reminders, handoff, or data capture.",
      "The team wants one place for process visibility and follow-up.",
    ],
    whenAlternativeFits: [
      "The business only needs a simple chatbot on WhatsApp.",
      "There is no downstream workflow to manage.",
      "The deployment is temporary or experimental.",
    ],
    rolloutSteps: [
      "Start with the highest-volume WhatsApp journey.",
      "Add workflow steps that create the business outcome.",
      "Keep handoff and analytics visible.",
      "Expand only after the first flow works reliably.",
    ],
  },
  "flow-vs-manual-customer-support": {
    metadata: {
      title: "FLOW vs Manual Customer Support | Comparison",
      description: "See why support teams need automation for triage, FAQs, and escalation.",
    },
    title: "FLOW vs Manual Customer Support",
    eyebrow: "Comparison",
    description:
      "Manual support is flexible, but it does not scale well when response speed, consistency, and escalation discipline matter.",
    bottomLine:
      "Use manual support for low-volume, ad hoc communication. Use FLOW when support work needs repeatable triage, deflection, and handoff.",
    rows: [
      { label: "Response speed", flow: "Immediate triage and response logic.", alternative: "Depends on staffing and inbox discipline." },
      { label: "Consistency", flow: "Every customer sees the same process.", alternative: "Varies by person and shift." },
      { label: "Escalation", flow: "Context moves with the case.", alternative: "Context can be lost between agents." },
      { label: "Analytics", flow: "Tracks leakage and resolution.", alternative: "Often scattered across tools and inboxes." },
      { label: "Scale", flow: "Handles repeated questions without linear headcount growth.", alternative: "More volume usually means more staff." },
      { label: "Best fit", flow: "Operational support teams.", alternative: "Small, temporary, or low-volume setups." },
    ],
    whyFlowWins: [
      "The support queue has repeatable questions and repetitive triage.",
      "The business needs to capture, route, and resolve cases consistently.",
      "Support outcomes need to be visible in one operating model.",
    ],
    whenAlternativeFits: [
      "The team only gets a few support requests per day.",
      "The channel is not tied to business-critical response SLAs.",
      "The support process is still being defined.",
    ],
    rolloutSteps: [
      "Automate the top FAQs and the highest-volume triage path.",
      "Add escalation and context handoff next.",
      "Track leakage and resolved cases in analytics.",
      "Expand to more categories only after the first route stabilizes.",
    ],
  },
  "flow-vs-zapier-for-indian-businesses": {
    metadata: {
      title: "FLOW vs Zapier for Indian Businesses | Comparison",
      description: "Compare customer-facing workflow orchestration with generic trigger-action automation.",
    },
    title: "FLOW vs Zapier for Indian Businesses",
    eyebrow: "Comparison",
    description:
      "Zapier is excellent for connecting apps. FLOW is designed to orchestrate customer conversations and business outcomes across channels.",
    bottomLine:
      "Use Zapier for internal task automation. Use FLOW when the customer journey itself needs to be managed from first message to final outcome.",
    rows: [
      { label: "Primary role", flow: "Customer workflow orchestration.", alternative: "App-to-app trigger-action automation." },
      { label: "Conversation layer", flow: "Built into the product.", alternative: "Usually external to the automation." },
      { label: "Handoff", flow: "Designed for human takeover.", alternative: "Needs custom design around the workflow." },
      { label: "Templates", flow: "Built for Indian business use cases.", alternative: "General-purpose automation logic." },
      { label: "Analytics", flow: "Tracks journey outcomes and leakage.", alternative: "Tracks automation runs, not customer flow quality." },
      { label: "Best fit", flow: "Revenue and operations journeys.", alternative: "Back-office integrations and internal tasks." },
    ],
    whyFlowWins: [
      "The workflow starts with a customer conversation, not a system event.",
      "The team needs the interaction itself to lead to a business outcome.",
      "The process requires human handoff and context preservation.",
    ],
    whenAlternativeFits: [
      "You only need to connect two internal SaaS tools.",
      "No customer interaction is involved.",
      "The task is simple enough for a generic automation tool.",
    ],
    rolloutSteps: [
      "Map the customer journey before picking tools.",
      "Use FLOW for the conversation and Zapier only where app sync is required.",
      "Keep the business outcome and escalation rules in one design.",
      "Expand the stack only after the first workflow is stable.",
    ],
  },
};

export const proofPages: Record<string, ProofPageData> = {
  "healthcare-front-desk-automation": {
    metadata: {
      title: "Healthcare Front Desk Automation | Proof",
      description:
        "Illustrative healthcare automation story covering enquiry intake, bookings, reminders, documents, payment follow-up, and handoff.",
    },
    title: "Healthcare Front Desk Automation",
    eyebrow: "Proof",
    description:
      "An illustrative rollout story for a clinic or hospital front desk that needs faster enquiry handling, fewer missed bookings, and cleaner handoff.",
    note: "Illustrative implementation story. Use this page until a named client case study is ready.",
    context:
      "Healthcare teams often handle a steady stream of appointment questions, follow-up reminders, document requests, and payment status checks across WhatsApp and other channels.",
    challenge: [
      "Front-desk staff spend too much time answering the same questions.",
      "Patients wait for replies when the team is busy or after hours.",
      "Appointment reminders and follow-up messages depend on manual discipline.",
      "Sensitive cases need a controlled handoff rather than an automated dead end.",
    ],
    workflow: [
      "Enquiry arrives through WhatsApp or web chat.",
      "FLOW identifies the intent and asks the minimum qualification questions.",
      "The appointment or follow-up workflow starts immediately.",
      "Reminders, payment follow-up, and document requests run on schedule.",
      "Sensitive or complex cases are handed to staff with full conversation context.",
      "The outcome is logged so the team can see what happened next.",
    ],
    controls: [
      "No medical diagnosis is attempted by the automation layer.",
      "Clinical judgment and sensitive decisions remain with staff.",
      "Escalation paths are visible and predictable for reception and operations teams.",
      "Workflow history supports operational review without exposing unnecessary detail.",
    ],
    outcomes: [
      "Faster first response for appointment and enquiry traffic.",
      "More consistent reminders and follow-up execution.",
      "Less manual pressure on the front desk.",
      "Cleaner handoff when a human needs to step in.",
      "Better visibility into pending patient actions and outstanding requests.",
    ],
    rolloutSteps: [
      "Start with appointment intake and first-response automation.",
      "Add reminder and rescheduling logic after the baseline is stable.",
      "Extend to document collection and payment follow-up.",
      "Introduce escalation rules and audit review for sensitive interactions.",
    ],
  },
  "real-estate-lead-operations": {
    metadata: {
      title: "Real Estate Lead Operations | Proof",
      description:
        "Illustrative real estate automation story covering lead response, qualification, site visit scheduling, assignment, and follow-up.",
    },
    title: "Real Estate Lead Operations",
    eyebrow: "Proof",
    description:
      "An illustrative rollout story for a real estate team that needs faster lead response, stronger qualification, and disciplined site visit scheduling.",
    note: "Illustrative implementation story. Use this page until a named client case study is ready.",
    context:
      "Real estate teams often receive leads from ads, websites, referrals, and WhatsApp. The operational problem is rarely lead volume alone; it is the speed and consistency of response.",
    challenge: [
      "Leads go cold when first response is delayed.",
      "Sales teams qualify inconsistently across channels and shifts.",
      "Site visit scheduling becomes a back-and-forth task.",
      "Reps forget follow-up steps when work is distributed across multiple people.",
    ],
    workflow: [
      "Lead enters from a campaign, form, or WhatsApp message.",
      "FLOW captures the source, intent, budget, and location signals.",
      "Qualification and routing logic assigns the lead to the right owner.",
      "Visit scheduling, reminders, and follow-up messages run automatically.",
      "The CRM is updated with the result so management can see the pipeline state.",
      "Unresolved cases move to human follow-up with full context attached.",
    ],
    controls: [
      "The automation does not replace the sales team; it makes the team faster and more consistent.",
      "Lead routing rules are explicit so ownership is not ambiguous.",
      "Conversation history stays attached to the lead record.",
      "Follow-up discipline is built into the workflow instead of relying on rep memory.",
    ],
    outcomes: [
      "Faster lead acknowledgement during and after business hours.",
      "Cleaner qualification before the rep spends manual time.",
      "Better site visit scheduling discipline.",
      "Less leakage between lead capture and sales follow-up.",
      "Improved visibility into where each lead stalls.",
    ],
    rolloutSteps: [
      "Automate lead capture and first response first.",
      "Add qualification and rep routing next.",
      "Layer in site visit scheduling and reminder loops.",
      "Connect record updates and escalation rules after the core flow is reliable.",
    ],
  },
  "education-admissions-workflow": {
    metadata: {
      title: "Education Admissions Workflow | Proof",
      description:
        "Illustrative education automation story covering enquiry handling, demo booking, reminders, documents, fee follow-up, and handoff.",
    },
    title: "Education Admissions Workflow",
    eyebrow: "Proof",
    description:
      "An illustrative rollout story for an education business that needs enquiry handling, demo booking, fee follow-up, and admissions coordination.",
    note: "Illustrative implementation story. Use this page until a named client case study is ready.",
    context:
      "Education teams handle repeated course and admissions questions, often across WhatsApp, website forms, and calls. The highest-value workflow is usually enquiry-to-demo-to-admission follow-up.",
    challenge: [
      "Counselors answer the same questions repeatedly.",
      "Demo class bookings and reminders are inconsistent.",
      "Fee follow-up and document requests require manual chasing.",
      "Leads drop off when the handoff between enquiry and counselor is unclear.",
    ],
    workflow: [
      "Enquiry enters from the web or WhatsApp.",
      "FLOW classifies the program interest and collects the minimum details.",
      "The demo class or counseling booking workflow starts immediately.",
      "Reminder and fee follow-up sequences run on schedule.",
      "Document requests and outstanding tasks are tracked before admissions handoff.",
      "The counselor receives the context needed to continue the conversation.",
    ],
    controls: [
      "The workflow supports the admissions team but does not replace counseling judgment.",
      "Program-specific paths can be separated without rebuilding the whole system.",
      "Escalation and handoff keep the student experience coherent.",
      "Operational visibility helps managers see where leads stall in the funnel.",
    ],
    outcomes: [
      "More consistent enquiry handling across channels.",
      "Better demo booking flow and reminder discipline.",
      "Reduced manual effort for repeated follow-ups.",
      "Cleaner counselor handoff with conversation context preserved.",
      "Improved visibility into admissions pipeline friction.",
    ],
    rolloutSteps: [
      "Start with enquiry capture and demo booking.",
      "Add reminders and counselor handoff after the baseline flow is live.",
      "Extend to fee reminders and document collection.",
      "Use the workflow history to refine admissions operations over time.",
    ],
  },
};
