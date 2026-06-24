type SummaryCard = {
  label: string;
  value: string;
  description: string;
};

type ScreenshotPanel = {
  eyebrow: string;
  title: string;
  description: string;
  variant: "inbox" | "builder" | "dashboard";
  primaryItems: string[];
  secondaryItems: string[];
  footer: string;
};

type ImplementationPhase = {
  title: string;
  summary: string;
  items: string[];
};

type ExampleBlock = {
  title: string;
  description: string;
  items: string[];
};

type ProofPoint = {
  label: string;
  value: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

export type RevenuePage = {
  slug: string;
  title: string;
  heroTitle: string;
  heroDescription: string;
  description: string;
  keywordTarget: string;
  updatedAt: string;
  summaryCards: SummaryCard[];
  screenshots: ScreenshotPanel[];
  implementation: ImplementationPhase[];
  examples: ExampleBlock[];
  proofPoints: ProofPoint[];
  outcomes: string[];
  faq: FaqItem[];
  relatedLinks: RelatedLink[];
  ctaLabel: string;
  ctaHref: string;
};

function link(label: string, href: string, description: string): RelatedLink {
  return { label, href, description };
}

function page(input: RevenuePage): RevenuePage {
  return input;
}

export const revenuePages = [
  page({
    slug: "whatsapp-automation",
    title: "WhatsApp Automation Workflows for Sales, Support, and Follow-Up",
    heroTitle: "Automate WhatsApp conversations without losing the operational next step.",
    heroDescription:
      "FLOW turns WhatsApp from a shared inbox into a controlled workflow for lead qualification, booking, reminders, support, payment follow-up, and human takeover.",
    description:
      "Production-ready WhatsApp automation for businesses that need fast replies, structured handover, connected systems, and visible operational outcomes.",
    keywordTarget: "WhatsApp automation workflows",
    updatedAt: "2026-06-24",
    summaryCards: [
      { label: "Channels", value: "WhatsApp + web", description: "Run the same qualification and handoff logic across customer entry points." },
      { label: "Handover", value: "Context preserved", description: "Every takeover includes captured answers, intent, and pending next actions." },
      { label: "Pilot scope", value: "14-day rollout", description: "Start with one production workflow, one team, and one measurable conversion path." },
    ],
    screenshots: [
      {
        eyebrow: "Inbox surface",
        title: "Lead capture and qualification happen inside the first conversation.",
        description: "The operator sees the conversation state, the captured lead fields, and the next step before a human ever needs to intervene.",
        variant: "inbox",
        primaryItems: ["Ask intent and service type", "Capture name, city, and urgency", "Route qualified conversations to sales or support"],
        secondaryItems: ["Lead source: WhatsApp ad", "Status: Qualified", "Next action: Book callback"],
        footer: "Use this view to control first response, qualification quality, and handoff readiness.",
      },
      {
        eyebrow: "Operations dashboard",
        title: "Managers track response discipline, open conversations, and follow-up leakage.",
        description: "The same workflow produces operational metrics instead of relying on manual inbox reviews.",
        variant: "dashboard",
        primaryItems: ["First-response SLA", "Open handovers", "Pending payment or document reminders"],
        secondaryItems: ["Today: 38 new enquiries", "Qualified: 21", "Escalated: 4"],
        footer: "Proof comes from visible queue movement, not generic chatbot claims.",
      },
    ],
    implementation: [
      {
        title: "Map the revenue path",
        summary: "Define the customer journey before any automation is turned on.",
        items: ["Choose the entry points that matter most", "Set the qualification questions", "Define when a human must take over"],
      },
      {
        title: "Connect the business systems",
        summary: "Wire the conversation to the records and reminders that keep the workflow moving.",
        items: ["CRM or sheet sync", "Booking and callback triggers", "Payment, document, or support updates"],
      },
      {
        title: "Launch with audit visibility",
        summary: "Go live with clear metrics and exception handling from day one.",
        items: ["Review unresolved paths", "Verify escalation timing", "Measure conversions and missed follow-ups"],
      },
    ],
    examples: [
      {
        title: "Sales lead workflow",
        description: "Qualify inbound enquiries before the rep steps in.",
        items: ["Ask project type and budget range", "Collect location and preferred timing", "Schedule callback for qualified leads"],
      },
      {
        title: "Post-sale support workflow",
        description: "Answer repeated questions, then escalate complex cases with context.",
        items: ["Resolve common service queries", "Create support tickets for unresolved cases", "Notify the owning team with full conversation history"],
      },
    ],
    proofPoints: [
      { label: "Operator proof", value: "Captured fields", description: "You can verify exactly what the workflow collected before handoff." },
      { label: "Team proof", value: "Queue visibility", description: "Managers see which conversations are waiting, booked, escalated, or stalled." },
      { label: "Commercial proof", value: "Booked next steps", description: "The pilot is measured by booked calls, confirmed appointments, or completed follow-up actions." },
    ],
    outcomes: [
      "Faster first responses during and after business hours.",
      "Cleaner lead routing before human time is spent.",
      "Less follow-up leakage between message and booking.",
      "A visible escalation path for high-value conversations.",
    ],
    faq: [
      {
        question: "Can this stay limited to one WhatsApp workflow first?",
        answer: "Yes. The recommended rollout is one entry point, one qualification path, and one booked next action before expanding to more intents.",
      },
      {
        question: "What happens when the automation cannot finish the job?",
        answer: "The workflow hands the conversation to a human with the collected context, current status, and pending next step already visible.",
      },
      {
        question: "Do we need a CRM before starting?",
        answer: "No. Teams often start with sheet or inbox updates and add CRM synchronization once the live workflow is stable.",
      },
    ],
    relatedLinks: [
      link("Workflow examples", "/proof", "See rollout-oriented proof pages for healthcare, real estate, and education."),
      link("Pricing", "/pricing", "Choose a first-workflow pilot or a broader multi-team rollout."),
      link("Contact sales", "/contact", "Map your current WhatsApp journey with the Crescora team."),
    ],
    ctaLabel: "Request WhatsApp workflow demo",
    ctaHref: "/contact",
  }),
  page({
    slug: "ai-chatbot-builder",
    title: "AI Chatbots for Websites, WhatsApp, and Social Messaging",
    heroTitle: "Deploy AI chatbots that operate inside a real business workflow.",
    heroDescription:
      "FLOW combines conversational AI with routing, task creation, reminders, and human takeover so the bot does more than answer FAQs.",
    description:
      "Multi-channel AI chatbot delivery for businesses that need grounded answers, lead capture, support triage, and downstream workflow execution.",
    keywordTarget: "AI chatbot for website and WhatsApp",
    updatedAt: "2026-06-24",
    summaryCards: [
      { label: "Surfaces", value: "Web + WhatsApp", description: "Keep a shared workflow across the website, messaging, and follow-up channels." },
      { label: "Answers", value: "Grounded + routed", description: "Handle repeated questions without losing the ability to escalate or create work." },
      { label: "Controls", value: "Human review", description: "Sensitive, high-value, or off-policy requests are routed instead of improvised." },
    ],
    screenshots: [
      {
        eyebrow: "Builder surface",
        title: "Design the bot around business decisions, not only message branches.",
        description: "The builder view shows intent capture, answer logic, fallbacks, and the exact downstream actions triggered by the conversation.",
        variant: "builder",
        primaryItems: ["Intent detection", "Grounded answer block", "Escalation + record update"],
        secondaryItems: ["Entry: Website widget", "Fallback: Human review", "Notify: Support queue"],
        footer: "The bot is useful because it is connected to the operating workflow.",
      },
      {
        eyebrow: "Conversation surface",
        title: "Customers receive answers, options, and a clear next action in one flow.",
        description: "The live interface is designed to book, route, and confirm the next step instead of stopping at a text reply.",
        variant: "inbox",
        primaryItems: ["Answer the repeated question", "Offer the next logical action", "Capture enough detail before handoff"],
        secondaryItems: ["Topic: Pricing", "Intent: Demo request", "Status: Booked call"],
        footer: "Use interface-level proof to show how the chatbot changes the customer journey.",
      },
    ],
    implementation: [
      {
        title: "Define the answer boundaries",
        summary: "Separate what the bot can answer from what must escalate to a person.",
        items: ["Pick the high-volume intents", "Set the fallback rules", "Define approved answer sources"],
      },
      {
        title: "Attach operational actions",
        summary: "Every resolved or escalated conversation should update the next system cleanly.",
        items: ["Lead or ticket creation", "Booking or callback triggers", "Queue or owner notifications"],
      },
      {
        title: "Measure answer quality",
        summary: "Track whether the bot resolved the request, routed it correctly, or leaked work back to staff.",
        items: ["Resolved without handoff", "Escalations with context", "Repeated-question deflection"],
      },
    ],
    examples: [
      {
        title: "Website lead capture bot",
        description: "Move anonymous visitors into qualified conversations quickly.",
        items: ["Capture service interest", "Collect contact details", "Send qualified leads to the sales queue"],
      },
      {
        title: "Support triage bot",
        description: "Handle repeated questions before tickets reach the human queue.",
        items: ["Ground answers from approved knowledge", "Tag unresolved issues", "Escalate with captured context"],
      },
    ],
    proofPoints: [
      { label: "Quality signal", value: "Fallback coverage", description: "You can audit how often the bot stays inside approved answer paths." },
      { label: "Operational signal", value: "Created work", description: "Each routed lead, ticket, or booking is visible as an action, not just a transcript." },
      { label: "Buyer signal", value: "Next-step conversion", description: "The proof point is whether the bot pushed the customer into the next controlled action." },
    ],
    outcomes: [
      "Lower repeated-question load for staff.",
      "More qualified conversations captured from the website.",
      "Better escalation quality for complex support work.",
      "A shared bot layer across channels instead of isolated scripts.",
    ],
    faq: [
      {
        question: "Is this only a website widget?",
        answer: "No. The same bot logic can support website chat, WhatsApp, and adjacent social messaging entry points where the workflow requires it.",
      },
      {
        question: "Can the AI answer freely from the internet?",
        answer: "That is not the recommended operating model. Production flows should answer from approved sources and escalate when the answer boundary is unclear.",
      },
      {
        question: "How do we prove the bot is helping operations?",
        answer: "Review resolved conversations, routed work items, escalation quality, and whether the customer actually completed the intended next step.",
      },
    ],
    relatedLinks: [
      link("Support automation", "/solutions/customer-support-automation", "See how the bot layer feeds a support workflow."),
      link("Compare FLOW vs chatbots", "/compare/flow-vs-chatbots", "Understand the difference between answers and end-to-end workflow execution."),
      link("Trust", "/trust", "Review the product, workflow, and governance posture."),
    ],
    ctaLabel: "Request builder demo",
    ctaHref: "/contact",
  }),
  page({
    slug: "workflow-automation",
    title: "Business Workflow Automation for Enquiries, Follow-Up, and Operations",
    heroTitle: "Run the customer workflow from first message to logged outcome.",
    heroDescription:
      "FLOW gives teams one operating layer for conversation handling, reminders, bookings, record updates, escalations, and proof of execution.",
    description:
      "Workflow automation for businesses that need a visible operating path across customer conversations, internal actions, and human handover.",
    keywordTarget: "workflow automation software",
    updatedAt: "2026-06-24",
    summaryCards: [
      { label: "Model", value: "Conversation to action", description: "Treat the customer interaction as the start of the workflow, not an isolated inbox event." },
      { label: "Coverage", value: "Sales + support + ops", description: "Use one orchestration layer for follow-up, reminders, documents, and handoff." },
      { label: "Visibility", value: "Outcome logging", description: "Each workflow run ends with a measurable result instead of a lost manual task." },
    ],
    screenshots: [
      {
        eyebrow: "Workflow builder",
        title: "Operators see the workflow as a sequence of business decisions.",
        description: "The builder makes the handoff points, reminders, and record updates explicit before the process goes live.",
        variant: "builder",
        primaryItems: ["Capture request", "Choose the next action", "Update the system of record"],
        secondaryItems: ["Retry rule", "Escalation owner", "Completion event"],
        footer: "This is where implementation detail replaces generic automation claims.",
      },
      {
        eyebrow: "Execution dashboard",
        title: "The live queue shows which workflows completed, stalled, or escalated.",
        description: "Managers can inspect the operational health of the workflow instead of inferring performance from scattered tools.",
        variant: "dashboard",
        primaryItems: ["Completed actions", "Pending exceptions", "Team-owned escalations"],
        secondaryItems: ["Appointments booked", "Documents pending", "Follow-ups due"],
        footer: "A workflow platform should make operational state easy to inspect.",
      },
    ],
    implementation: [
      {
        title: "Choose the first high-friction journey",
        summary: "Start where manual steps already create visible leakage.",
        items: ["New lead response", "Booking and reminders", "Document or payment follow-up"],
      },
      {
        title: "Define the operating rules",
        summary: "Write down the decisions, exceptions, and owners before launch.",
        items: ["What triggers the workflow", "Who owns escalations", "How completion is confirmed"],
      },
      {
        title: "Measure completion, not just activity",
        summary: "The reporting layer should show whether the business outcome was reached.",
        items: ["Booked next step", "Updated record", "Closed or escalated case"],
      },
    ],
    examples: [
      {
        title: "Lead-to-callback workflow",
        description: "Capture interest, qualify the request, and create a booked sales action.",
        items: ["Initial reply", "Qualification", "Callback confirmation"],
      },
      {
        title: "Collection workflow",
        description: "Move outstanding actions forward without manual chasing.",
        items: ["Payment reminder", "Exception path", "Status update back to the team"],
      },
    ],
    proofPoints: [
      { label: "Workflow proof", value: "Completion states", description: "Every path has a visible end state instead of an assumed manual follow-up." },
      { label: "Team proof", value: "Owner clarity", description: "Escalations and exceptions are assigned to a visible person or queue." },
      { label: "Business proof", value: "Operational outcomes", description: "The pilot focuses on booked, resolved, collected, or submitted outcomes." },
    ],
    outcomes: [
      "Fewer dropped handoffs between teams.",
      "Cleaner follow-up execution across shifts.",
      "Better visibility into stalled work.",
      "A repeatable launch pattern for new workflows.",
    ],
    faq: [
      {
        question: "How broad should the first workflow be?",
        answer: "Keep the first rollout narrow. One business journey with a clear completion state is better than a broad process with unclear ownership.",
      },
      {
        question: "Can workflows stay human-in-the-loop?",
        answer: "Yes. Human approval, review, or takeover can be a planned step in the workflow rather than a failure case.",
      },
      {
        question: "What is the proof that the workflow is ready to expand?",
        answer: "Consistent completion, visible exception handling, and stable reporting are the signals that justify broadening the workflow to more use cases.",
      },
    ],
    relatedLinks: [
      link("Platform", "/platform", "See the broader orchestration and product positioning."),
      link("Proof pages", "/proof", "Review concrete rollout narratives."),
      link("Talk to sales", "/contact", "Map the first workflow with the implementation team."),
    ],
    ctaLabel: "Book workflow demo",
    ctaHref: "/contact",
  }),
  page({
    slug: "customer-support-automation",
    title: "Customer Support Automation for Triage, Answers, and Escalation",
    heroTitle: "Reduce repeated support work without losing control of escalations.",
    heroDescription:
      "FLOW helps support teams answer common questions, capture issue detail, route cases, and surface unresolved work with full context for the next human owner.",
    description:
      "Support workflow automation for businesses that need faster replies, better ticket quality, and visible escalation performance across customer channels.",
    keywordTarget: "customer support automation for small business",
    updatedAt: "2026-06-24",
    summaryCards: [
      { label: "Queue hygiene", value: "Cleaner intake", description: "Collect the issue, urgency, and customer context before an agent touches the queue." },
      { label: "Deflection", value: "Approved answers", description: "Resolve repeated questions while keeping answer sources and fallback rules explicit." },
      { label: "Escalation", value: "Context retained", description: "Every transferred case includes the captured problem and prior workflow state." },
    ],
    screenshots: [
      {
        eyebrow: "Support intake",
        title: "The workflow gathers enough detail before creating or routing the case.",
        description: "Instead of a vague message thread, the support team gets a structured issue summary and a visible next owner.",
        variant: "inbox",
        primaryItems: ["Identify issue category", "Collect account or order context", "Route to the right queue or owner"],
        secondaryItems: ["Priority: Medium", "Intent: Billing", "Owner: Collections queue"],
        footer: "Support automation should improve ticket quality, not only response speed.",
      },
      {
        eyebrow: "Support dashboard",
        title: "Resolution, leakage, and escalations are visible in one operating view.",
        description: "Leaders can see whether automation reduced queue pressure or simply pushed work around.",
        variant: "dashboard",
        primaryItems: ["Resolved without human", "Escalated with context", "Cases waiting on customer action"],
        secondaryItems: ["Resolved: 44", "Escalated: 7", "Waiting: 9"],
        footer: "This is the proof layer for support rollout decisions.",
      },
    ],
    implementation: [
      {
        title: "Start with repeated questions",
        summary: "Pick the top FAQ or support-intake categories first.",
        items: ["Status checks", "Billing or plan questions", "Basic troubleshooting or appointment support"],
      },
      {
        title: "Define routing rules",
        summary: "Agents need predictable ownership when the automation cannot close the case.",
        items: ["Queue by category", "Escalate by urgency", "Keep the prior conversation attached"],
      },
      {
        title: "Review queue quality weekly",
        summary: "Measure whether the automation is reducing workload and improving case quality.",
        items: ["Deflected volume", "Escalation accuracy", "Backlog by owner or queue"],
      },
    ],
    examples: [
      {
        title: "FAQ and billing intake",
        description: "Handle repeated questions before a human sees the case.",
        items: ["Answer recurring billing questions", "Capture invoice or plan context", "Send unresolved cases to the right owner"],
      },
      {
        title: "Escalation with handoff",
        description: "Escalate only when a real decision or manual action is required.",
        items: ["Create the ticket summary", "Assign queue ownership", "Notify the human owner with context"],
      },
    ],
    proofPoints: [
      { label: "Quality proof", value: "Better tickets", description: "Cases arrive with category, urgency, and context already attached." },
      { label: "Service proof", value: "Faster triage", description: "Teams see reduced time to first structured response." },
      { label: "Operational proof", value: "Visible leakage", description: "Managers can inspect which issues still escape the designed workflow." },
    ],
    outcomes: [
      "Lower agent time on repeated questions.",
      "Cleaner case routing and queue ownership.",
      "More consistent escalation quality.",
      "Better visibility into unresolved support work.",
    ],
    faq: [
      {
        question: "Can we start without replacing the helpdesk?",
        answer: "Yes. Many teams start by improving intake and routing first, then add deeper helpdesk or CRM synchronization later.",
      },
      {
        question: "Does this work only for support?",
        answer: "No. The same support pattern can also be used for operations, collections, and service updates where repeated incoming questions need controlled handling.",
      },
      {
        question: "How do we avoid bad automated answers?",
        answer: "Limit the first rollout to approved answer sources, explicit fallback rules, and clear escalation for anything sensitive or uncertain.",
      },
    ],
    relatedLinks: [
      link("Support industry page", "/industries/support-teams", "See the support-specific positioning and examples."),
      link("Compare FLOW vs chatbots", "/compare/flow-vs-chatbots", "Understand the difference between FAQ answers and operational support workflows."),
      link("Trust", "/trust", "Review governance, rollout, and operating safeguards."),
    ],
    ctaLabel: "Request support demo",
    ctaHref: "/contact",
  }),
  page({
    slug: "appointment-booking-automation",
    title: "Appointment Booking Automation for Scheduling, Confirmation, and Reminders",
    heroTitle: "Turn booking requests into confirmed appointments without back-and-forth overload.",
    heroDescription:
      "FLOW handles booking intake, slot coordination, reminders, reschedules, and exception routing so the team spends less time chasing confirmations.",
    description:
      "Appointment booking automation for clinics, hospitals, education teams, and service businesses that need fewer no-shows and cleaner scheduling workflows.",
    keywordTarget: "appointment booking automation",
    updatedAt: "2026-06-24",
    summaryCards: [
      { label: "Booking path", value: "Request to confirmation", description: "Capture scheduling intent and route the customer to a confirmed slot quickly." },
      { label: "Reminder path", value: "Automated follow-up", description: "Send confirmations and reminder chains without manual calls or ad hoc messages." },
      { label: "Exception path", value: "Reschedule + handoff", description: "Move edge cases to the team when slots, approvals, or sensitive cases require manual control." },
    ],
    screenshots: [
      {
        eyebrow: "Booking capture",
        title: "The workflow captures timing, service type, and customer details in one thread.",
        description: "Scheduling works best when the workflow asks only the fields needed to confirm the next step.",
        variant: "inbox",
        primaryItems: ["Collect preferred date or service", "Check availability rules", "Confirm or reroute the booking"],
        secondaryItems: ["Service: Consultation", "Time window: Tomorrow morning", "Status: Waiting for confirmation"],
        footer: "A good booking workflow reduces both waiting time and staff coordination load.",
      },
      {
        eyebrow: "Reminder dashboard",
        title: "The team sees confirmed, pending, and rescheduled appointments in one place.",
        description: "Instead of relying on memory, staff can review reminder performance and unresolved booking cases directly from the dashboard.",
        variant: "dashboard",
        primaryItems: ["Confirmed appointments", "Pending confirmations", "Reschedules or no-response cases"],
        secondaryItems: ["Confirmed: 26", "Pending: 5", "Reschedules: 3"],
        footer: "The proof is visible in the scheduling queue and reminder completion rates.",
      },
    ],
    implementation: [
      {
        title: "Map the scheduling constraints",
        summary: "Start with the slots, services, and rules that matter most.",
        items: ["Available windows", "Team or location constraints", "Cases that require manual review"],
      },
      {
        title: "Automate confirmations and reminders",
        summary: "Make sure the confirmed booking immediately triggers the follow-up path.",
        items: ["Confirmation message", "Reminder cadence", "Customer-initiated reschedule path"],
      },
      {
        title: "Review no-show and backlog data",
        summary: "Use the live queue to improve both the booking script and the reminder timing.",
        items: ["Pending confirmations", "No-show patterns", "Manual intervention rate"],
      },
    ],
    examples: [
      {
        title: "Healthcare appointments",
        description: "Handle appointment requests without overloading the front desk.",
        items: ["Collect appointment type", "Confirm a slot", "Send reminders and reschedule links"],
      },
      {
        title: "Demo or callback booking",
        description: "Move qualified leads into the right time slot quickly.",
        items: ["Offer available windows", "Confirm the next interaction", "Notify the internal owner"],
      },
    ],
    proofPoints: [
      { label: "Scheduling proof", value: "Confirmed slots", description: "You can measure whether enquiries are converting into confirmed appointments." },
      { label: "Reminder proof", value: "Sent on time", description: "The workflow shows whether confirmations and reminders were actually delivered." },
      { label: "Exception proof", value: "Manual load", description: "Track how many cases still require manual intervention and why." },
    ],
    outcomes: [
      "Less manual coordination around booking requests.",
      "Fewer missed confirmations and reminder gaps.",
      "Cleaner reschedule handling for the team.",
      "Better visibility into pending scheduling work.",
    ],
    faq: [
      {
        question: "Can this work without a full calendar integration on day one?",
        answer: "Yes. Teams often start with limited slot logic or callback scheduling and add deeper calendar integration after the first flow proves out.",
      },
      {
        question: "What if a booking needs approval?",
        answer: "Approval can stay as an explicit handoff step. The automation still captures the request, queues the decision, and keeps the customer updated.",
      },
      {
        question: "How do we measure success?",
        answer: "Look at confirmed bookings, reminder completion, manual intervention rate, and whether no-shows or missed callbacks drop after launch.",
      },
    ],
    relatedLinks: [
      link("Healthcare workflows", "/industries/healthcare", "See how booking flows support healthcare operations."),
      link("Education workflows", "/industries/education", "Use the same model for demos, admissions calls, and counselor bookings."),
      link("Pricing", "/pricing", "Scope a first-booking workflow pilot."),
    ],
    ctaLabel: "Request booking automation demo",
    ctaHref: "/contact",
  }),
  page({
    slug: "lead-capture-automation",
    title: "Lead Capture Automation for Qualification, Routing, and Follow-Up",
    heroTitle: "Capture, qualify, and route leads before they go cold.",
    heroDescription:
      "FLOW turns website, WhatsApp, and inbound conversation traffic into structured lead records with clear next actions for the sales team.",
    description:
      "Lead capture automation for businesses that need faster first response, better qualification, and cleaner sales follow-up from inbound enquiries.",
    keywordTarget: "lead capture automation software",
    updatedAt: "2026-06-24",
    summaryCards: [
      { label: "Capture", value: "Every entry point", description: "Handle inbound leads from web chat, forms, ads, and WhatsApp in one structured workflow." },
      { label: "Qualification", value: "Minimum useful detail", description: "Collect the fields that decide routing, urgency, and fit." },
      { label: "Routing", value: "Owner clarity", description: "Move the right leads to the right rep or queue before manual work begins." },
    ],
    screenshots: [
      {
        eyebrow: "Lead intake",
        title: "Qualification fields are captured inside the first conversation.",
        description: "The workflow asks enough to route the lead cleanly without forcing the customer through an oversized form.",
        variant: "inbox",
        primaryItems: ["Identify service need", "Collect timing and location", "Route based on fit or urgency"],
        secondaryItems: ["Budget: Mid-market", "Region: Hyderabad", "Owner: Demo team"],
        footer: "Lead quality improves when the first conversation is structured, not improvised.",
      },
      {
        eyebrow: "Lead routing dashboard",
        title: "Sales sees which leads are qualified, waiting, or missing action.",
        description: "The dashboard view helps management spot whether the follow-up path is disciplined or leaking revenue.",
        variant: "dashboard",
        primaryItems: ["New qualified leads", "Awaiting callback", "Leads without owner response"],
        secondaryItems: ["Qualified: 18", "Callbacks due: 6", "At risk: 3"],
        footer: "The proof is visible in response speed, ownership, and booked follow-up actions.",
      },
    ],
    implementation: [
      {
        title: "Choose the qualification fields",
        summary: "Only collect the information needed to route and prioritize the lead.",
        items: ["Use-case or service type", "Timing or urgency", "Location or segment fit"],
      },
      {
        title: "Define routing logic",
        summary: "Decide which owners, queues, or callbacks the workflow should trigger.",
        items: ["Rep assignment", "Callback scheduling", "Escalation for high-intent opportunities"],
      },
      {
        title: "Audit follow-up execution",
        summary: "Monitor whether qualified leads receive the expected response and next action.",
        items: ["Time to first qualified response", "Callback completion", "Leads left without owner action"],
      },
    ],
    examples: [
      {
        title: "Website and ad leads",
        description: "Capture interest quickly before a rep takes over.",
        items: ["Ask the first qualification questions", "Create the lead record", "Schedule the next sales action"],
      },
      {
        title: "Service enquiry routing",
        description: "Separate urgent or high-fit enquiries from lower-priority traffic.",
        items: ["Identify the intent", "Assign the owner", "Trigger the follow-up path"],
      },
    ],
    proofPoints: [
      { label: "Revenue proof", value: "Booked follow-up", description: "Qualified leads should end in a scheduled next action, not an unowned inbox thread." },
      { label: "Sales proof", value: "Cleaner ownership", description: "You can inspect which rep or queue received each qualified lead." },
      { label: "Process proof", value: "Qualification consistency", description: "The same core fields are captured across every lead source." },
    ],
    outcomes: [
      "Faster lead response during and after working hours.",
      "More consistent qualification before rep involvement.",
      "Cleaner assignment and follow-up ownership.",
      "Less lead leakage between capture and callback.",
    ],
    faq: [
      {
        question: "Can this work for both website and WhatsApp leads?",
        answer: "Yes. One of the main advantages is using the same qualification and routing logic across web, forms, ads, and messaging channels.",
      },
      {
        question: "Should we ask every possible question in the first interaction?",
        answer: "No. Capture the minimum fields that improve routing and follow-up. Over-collecting fields usually hurts conversion and slows the conversation.",
      },
      {
        question: "How do we prove lead quality improved?",
        answer: "Review response speed, callback completion, lead owner clarity, and whether fewer qualified leads stall without a next step.",
      },
    ],
    relatedLinks: [
      link("Real estate workflows", "/industries/real-estate", "See a lead-heavy rollout pattern in property sales."),
      link("Workflow automation", "/solutions/workflow-automation", "Connect lead capture to the broader operating model."),
      link("Contact", "/contact", "Scope the first qualification and routing workflow."),
    ],
    ctaLabel: "Request lead capture demo",
    ctaHref: "/contact",
  }),
  page({
    slug: "payment-reminder-automation",
    title: "Payment Reminder Automation for Billing, Collections, and Status Follow-Up",
    heroTitle: "Move payments forward without relying on memory and manual chase lists.",
    heroDescription:
      "FLOW automates reminder sequences, payment-status capture, owner notifications, and escalation for overdue or exception-driven cases.",
    description:
      "Payment reminder automation for teams that need cleaner collections follow-up, visible owner handoff, and fewer overdue actions slipping through the cracks.",
    keywordTarget: "payment reminder automation",
    updatedAt: "2026-06-24",
    summaryCards: [
      { label: "Reminder model", value: "Scheduled follow-up", description: "Run payment reminders on a defined cadence instead of one-off manual messages." },
      { label: "Status capture", value: "Reply-aware", description: "Track whether the customer paid, needs help, or must be escalated to a human owner." },
      { label: "Escalation", value: "Collections visibility", description: "Exception cases move to the right owner with the payment context already captured." },
    ],
    screenshots: [
      {
        eyebrow: "Collections workflow",
        title: "The reminder path tracks payment state instead of broadcasting the same message repeatedly.",
        description: "Customers can confirm, delay, or escalate, and each reply changes the next step in the workflow.",
        variant: "inbox",
        primaryItems: ["Send due-date reminder", "Capture payment status", "Escalate unresolved cases"],
        secondaryItems: ["Status: Overdue", "Reply: Need callback", "Owner: Collections lead"],
        footer: "Payment workflows work best when the reply changes the downstream action.",
      },
      {
        eyebrow: "Collections dashboard",
        title: "Finance or operations teams can review what is paid, pending, or blocked.",
        description: "The live view reduces manual spreadsheet chasing and shows which cases require direct owner action.",
        variant: "dashboard",
        primaryItems: ["Paid after reminder", "Awaiting customer response", "Escalated overdue cases"],
        secondaryItems: ["Recovered: 12", "Pending: 8", "Escalated: 4"],
        footer: "Collections proof comes from queue movement and recovery visibility.",
      },
    ],
    implementation: [
      {
        title: "Define the reminder cadence",
        summary: "Set the timing and tone by invoice type or business rule.",
        items: ["Initial reminder", "Overdue reminder", "Escalation threshold"],
      },
      {
        title: "Capture response states",
        summary: "Use the customer reply to decide the next business action.",
        items: ["Paid confirmation", "Delay or issue raised", "Escalation to finance or account owner"],
      },
      {
        title: "Review collections leakage",
        summary: "Track which cases recover through automation and which still require direct human work.",
        items: ["Recovery rate", "Manual escalation count", "Pending-response backlog"],
      },
    ],
    examples: [
      {
        title: "Service invoice reminders",
        description: "Keep collections consistent without daily manual follow-up.",
        items: ["Send reminder on the due date", "Capture reply state", "Notify the account owner if needed"],
      },
      {
        title: "Education or healthcare payments",
        description: "Use the same pattern for fee or billing follow-up where confirmation matters.",
        items: ["Reminder message", "Customer response capture", "Manual exception routing"],
      },
    ],
    proofPoints: [
      { label: "Finance proof", value: "Recovery visibility", description: "You can see which reminders recovered payment and which cases remain open." },
      { label: "Operational proof", value: "Manual load reduced", description: "The team spends less time on repetitive due-date follow-up." },
      { label: "Escalation proof", value: "Exception ownership", description: "Overdue or disputed cases are routed to a visible owner with context attached." },
    ],
    outcomes: [
      "More consistent collections follow-up.",
      "Better visibility into overdue cases.",
      "Lower manual reminder load for staff.",
      "Clearer escalation when payment needs a human conversation.",
    ],
    faq: [
      {
        question: "Can this work with simple payment links first?",
        answer: "Yes. Teams often begin with reminder timing and response capture, then connect deeper billing or ERP systems after the flow is stable.",
      },
      {
        question: "What if a customer has a dispute instead of paying?",
        answer: "The dispute becomes a routed exception. The workflow should notify the right human owner and preserve the payment context for follow-up.",
      },
      {
        question: "How do we avoid sounding aggressive?",
        answer: "The cadence, copy, and escalation threshold should be tuned to your customer journey and approved by the operating team before launch.",
      },
    ],
    relatedLinks: [
      link("Service business workflows", "/industries/service-businesses", "See how collections and reminders fit into service operations."),
      link("Pricing", "/pricing", "Scope a first reminder and collections rollout."),
      link("Contact", "/contact", "Map your reminder, status, and escalation path."),
    ],
    ctaLabel: "Request collections workflow demo",
    ctaHref: "/contact",
  }),
  page({
    slug: "document-collection-automation",
    title: "Document Collection Automation for Intake, KYC, and Missing-Item Follow-Up",
    heroTitle: "Collect documents without endless manual chasing.",
    heroDescription:
      "FLOW coordinates request messages, upload status, missing-item reminders, and human follow-up so document-heavy processes move faster with better visibility.",
    description:
      "Document collection automation for businesses that need structured intake, missing-item tracking, and owner visibility across onboarding, KYC, and service workflows.",
    keywordTarget: "document collection automation",
    updatedAt: "2026-06-24",
    summaryCards: [
      { label: "Requests", value: "Structured intake", description: "Tell the customer exactly what is needed and what is still missing." },
      { label: "Tracking", value: "Missing-item state", description: "The workflow tracks partial submissions and reminder timing instead of relying on inbox memory." },
      { label: "Escalation", value: "Owner visibility", description: "Manual follow-up begins with the current status already visible to the team." },
    ],
    screenshots: [
      {
        eyebrow: "Document intake",
        title: "The workflow knows which files are pending, received, or blocked.",
        description: "Customers see the next required item while the team sees the real intake status instead of a fragmented message trail.",
        variant: "inbox",
        primaryItems: ["List required documents", "Confirm received items", "Remind on missing uploads"],
        secondaryItems: ["Received: ID proof", "Pending: Address proof", "Owner: Onboarding"],
        footer: "Document collection works when the status stays visible throughout the intake path.",
      },
      {
        eyebrow: "Intake dashboard",
        title: "Operations can review which submissions are complete, partial, or waiting on the customer.",
        description: "The queue makes it easier to see which onboarding or KYC cases need direct intervention.",
        variant: "dashboard",
        primaryItems: ["Complete submissions", "Partial cases", "Escalated exceptions"],
        secondaryItems: ["Complete: 14", "Partial: 9", "Escalated: 2"],
        footer: "The proof point is fewer stalled cases and better intake visibility.",
      },
    ],
    implementation: [
      {
        title: "Define the intake checklist",
        summary: "Start with the exact documents and states the process needs.",
        items: ["Required files", "Optional or alternative files", "Exceptions that require human review"],
      },
      {
        title: "Track state changes clearly",
        summary: "Every submission should move the workflow to a known state.",
        items: ["Requested", "Partially received", "Complete or escalated"],
      },
      {
        title: "Review stalled cases",
        summary: "Use the queue to identify which customers need direct human follow-up.",
        items: ["Longest pending cases", "Most-missed items", "Owner response time"],
      },
    ],
    examples: [
      {
        title: "KYC or onboarding",
        description: "Move a customer through required document intake without manual spreadsheet tracking.",
        items: ["Request each file", "Track missing items", "Escalate blocked cases"],
      },
      {
        title: "Admissions or claims intake",
        description: "Use the same pattern wherever a process cannot proceed until files are complete.",
        items: ["Explain required documents", "Confirm partial receipt", "Notify the owner when the case is ready"],
      },
    ],
    proofPoints: [
      { label: "Process proof", value: "Visible intake state", description: "You can see whether the case is complete, partial, or blocked at any moment." },
      { label: "Team proof", value: "Lower chase load", description: "Staff spend less time repeating the same file reminders manually." },
      { label: "Business proof", value: "Fewer stalled cases", description: "Track how many submissions complete after reminders versus remaining blocked." },
    ],
    outcomes: [
      "Faster intake completion for document-heavy workflows.",
      "Lower manual reminder effort.",
      "Better visibility into missing files and blocked cases.",
      "Cleaner handoff to the team when a case needs manual intervention.",
    ],
    faq: [
      {
        question: "Can we launch this without a full document portal?",
        answer: "Yes. Many teams start with message-led requests, status tracking, and owner notifications before adding a deeper portal or storage workflow.",
      },
      {
        question: "What if the customer uploads the wrong file?",
        answer: "The workflow can keep the case in a partial state and trigger a corrective reminder or human review path with the current status visible.",
      },
      {
        question: "How do we measure success?",
        answer: "Review completion rate, time to complete intake, manual intervention count, and the number of cases still blocked on missing items.",
      },
    ],
    relatedLinks: [
      link("Workflow automation", "/solutions/workflow-automation", "See how document intake fits into the wider operating model."),
      link("Education workflows", "/industries/education", "Use document collection for admissions and onboarding journeys."),
      link("Contact", "/contact", "Scope the first intake checklist and reminder path."),
    ],
    ctaLabel: "Request document collection demo",
    ctaHref: "/contact",
  }),
  page({
    slug: "crm-api-workflow-automation",
    title: "CRM and API Workflow Automation for Record Sync and Operational Handover",
    heroTitle: "Keep the conversation workflow connected to the system of record.",
    heroDescription:
      "FLOW updates CRM fields, creates downstream tasks, triggers internal APIs, and keeps human owners informed after the customer conversation moves forward.",
    description:
      "CRM and API workflow automation for teams that need conversation-driven record updates, notifications, and operational handover without brittle manual syncing.",
    keywordTarget: "CRM and API workflow automation",
    updatedAt: "2026-06-24",
    summaryCards: [
      { label: "Sync model", value: "Conversation-driven", description: "Updates happen when the customer journey reaches a meaningful state, not on random manual timing." },
      { label: "Targets", value: "CRM + APIs", description: "Push the result into internal systems, dashboards, helpdesks, or custom operational endpoints." },
      { label: "Ownership", value: "Clear downstream action", description: "Every sync is tied to an event or handoff the team can inspect." },
    ],
    screenshots: [
      {
        eyebrow: "Workflow builder",
        title: "The flow shows exactly when records update and which downstream systems are triggered.",
        description: "This makes integrations part of the business workflow instead of a hidden technical afterthought.",
        variant: "builder",
        primaryItems: ["Lead qualified", "CRM update action", "Notify owner or downstream service"],
        secondaryItems: ["Endpoint: Lead API", "Retry: Enabled", "Owner: Sales ops"],
        footer: "Connected systems should mirror the workflow state, not compete with it.",
      },
      {
        eyebrow: "Operations dashboard",
        title: "Teams can verify whether the sync succeeded, retried, or needs manual intervention.",
        description: "Operational proof matters because a broken sync creates silent leakage after the customer conversation is complete.",
        variant: "dashboard",
        primaryItems: ["Successful updates", "Retry queue", "Manual fix required"],
        secondaryItems: ["Synced: 32", "Retries: 3", "Failed: 1"],
        footer: "Visibility into sync health is part of the product value.",
      },
    ],
    implementation: [
      {
        title: "Pick the critical events",
        summary: "Only automate the updates that materially move the business process forward.",
        items: ["Qualified lead", "Booked appointment", "Resolved support case"],
      },
      {
        title: "Define the payload and owner",
        summary: "Make sure the receiving system and team both understand the expected state.",
        items: ["Fields to update", "Notifications to send", "Manual fallback owner"],
      },
      {
        title: "Monitor sync reliability",
        summary: "Track whether integration actions are succeeding or silently leaking work.",
        items: ["Success rate", "Retry count", "Manual recovery cases"],
      },
    ],
    examples: [
      {
        title: "Qualified lead to CRM",
        description: "Move the conversation outcome into the sales pipeline immediately.",
        items: ["Create or update the lead", "Assign the rep", "Trigger the callback task"],
      },
      {
        title: "Support escalation to internal API",
        description: "Use the same pattern for operational systems beyond a standard CRM.",
        items: ["Capture the case summary", "Call the internal service", "Notify the responsible team"],
      },
    ],
    proofPoints: [
      { label: "System proof", value: "Sync health", description: "You can review successful, retried, and failed updates from the workflow dashboard." },
      { label: "Team proof", value: "Downstream ownership", description: "The next owner is notified when the workflow creates or updates work." },
      { label: "Business proof", value: "Fewer silent failures", description: "The rollout reduces the gap between customer action and internal system state." },
    ],
    outcomes: [
      "Cleaner updates to CRM or internal systems.",
      "Less manual copy-paste between tools.",
      "Better visibility into integration reliability.",
      "Stronger owner handoff after customer-facing actions.",
    ],
    faq: [
      {
        question: "Do we need every system connected in the first pilot?",
        answer: "No. Start with the one downstream action that matters most to the workflow outcome, then add more systems once the first sync is reliable.",
      },
      {
        question: "What if an API call fails?",
        answer: "The workflow should expose that failure state clearly, retry where appropriate, and assign manual recovery ownership instead of hiding the problem.",
      },
      {
        question: "Can this work with spreadsheets first?",
        answer: "Yes. Many pilots start with sheet, email, or dashboard updates before moving to a deeper CRM or custom API integration layer.",
      },
    ],
    relatedLinks: [
      link("Lead capture automation", "/solutions/lead-capture-automation", "See how qualification events feed downstream system updates."),
      link("Workflow automation", "/solutions/workflow-automation", "Place CRM and API sync inside the wider operating model."),
      link("Contact", "/contact", "Scope the first record update and downstream action flow."),
    ],
    ctaLabel: "Request integration workflow demo",
    ctaHref: "/contact",
  }),
  page({
    slug: "human-handover-automation",
    title: "Human Handover Automation for Escalation, Ownership, and Context Transfer",
    heroTitle: "Escalate to a person without resetting the conversation.",
    heroDescription:
      "FLOW treats human handover as a planned workflow step, preserving context, queue ownership, and the exact reason the case left automation.",
    description:
      "Human handover automation for teams that need clean escalation from chatbot, WhatsApp, support, or sales workflows into a controlled manual owner path.",
    keywordTarget: "human handover automation",
    updatedAt: "2026-06-24",
    summaryCards: [
      { label: "Escalation", value: "Planned path", description: "Define when and why a human should take over instead of waiting for the customer journey to break." },
      { label: "Context", value: "Transferred intact", description: "The next owner sees the captured data, current status, and prior workflow steps immediately." },
      { label: "Ownership", value: "Visible queue", description: "Handover only works when a real person or queue owns the next step visibly." },
    ],
    screenshots: [
      {
        eyebrow: "Handover summary",
        title: "The human owner receives a structured case summary instead of a raw message dump.",
        description: "Escalation quality improves when the workflow captures the reason, urgency, and next required action before transfer.",
        variant: "inbox",
        primaryItems: ["Why the case escalated", "What the automation already collected", "Which team owns the next action"],
        secondaryItems: ["Reason: Sensitive request", "Urgency: High", "Owner: Senior support"],
        footer: "Human takeover is most useful when context transfer is explicit and auditable.",
      },
      {
        eyebrow: "Escalation dashboard",
        title: "Managers track takeover volume, queue age, and owner response.",
        description: "The dashboard shows whether handovers are improving service or becoming a hidden backlog.",
        variant: "dashboard",
        primaryItems: ["Open handovers", "Average queue age", "Resolved after escalation"],
        secondaryItems: ["Open: 11", "Avg age: 27 min", "Resolved: 19"],
        footer: "Escalation proof comes from ownership and resolution quality, not from merely enabling a transfer button.",
      },
    ],
    implementation: [
      {
        title: "Define the escalation triggers",
        summary: "Choose the moments where a person must take over.",
        items: ["Sensitive issues", "High-value decisions", "Cases outside the approved answer boundary"],
      },
      {
        title: "Structure the transfer payload",
        summary: "Send the human owner the context they need to act immediately.",
        items: ["Customer summary", "Workflow history", "Next required action"],
      },
      {
        title: "Measure queue performance",
        summary: "Treat human handover as an operational workflow with measurable quality.",
        items: ["Queue age", "Response time", "Resolution after escalation"],
      },
    ],
    examples: [
      {
        title: "Support escalation",
        description: "Move unresolved or sensitive support issues to the right human owner.",
        items: ["Collect issue context", "Assign the correct queue", "Track owner response"],
      },
      {
        title: "Sales escalation",
        description: "Route high-intent or unusual purchase conversations to a senior rep quickly.",
        items: ["Mark high-value signals", "Transfer with context", "Notify the right closer or manager"],
      },
    ],
    proofPoints: [
      { label: "Queue proof", value: "Owner clarity", description: "You can inspect exactly who owns the case after escalation." },
      { label: "Service proof", value: "Faster resolution", description: "Track whether escalated cases move faster because context is preserved." },
      { label: "Process proof", value: "Lower reset rate", description: "Customers should not need to restate the whole issue after the handover." },
    ],
    outcomes: [
      "Cleaner transfers from automation to humans.",
      "Better case ownership and queue visibility.",
      "Lower customer frustration during escalation.",
      "More measurable human-in-the-loop operations.",
    ],
    faq: [
      {
        question: "Is human handover only for failures?",
        answer: "No. In a good operating model, handover is a deliberate workflow step for sensitive, high-value, or exception-driven work.",
      },
      {
        question: "What should the receiving agent see?",
        answer: "The owner should receive the captured data, reason for escalation, prior workflow steps, and the immediate next action needed to continue the case.",
      },
      {
        question: "How do we know escalation is working well?",
        answer: "Measure queue age, resolution time after escalation, owner clarity, and whether customers have to repeat themselves after the transfer.",
      },
    ],
    relatedLinks: [
      link("Support automation", "/solutions/customer-support-automation", "See how handover fits inside the support workflow."),
      link("Workflow automation", "/solutions/workflow-automation", "Place escalation in the wider operating model."),
      link("Contact", "/contact", "Design your escalation triggers and owner paths."),
    ],
    ctaLabel: "Request handover workflow demo",
    ctaHref: "/contact",
  }),
] as const satisfies readonly RevenuePage[];

export const revenuePagesBySlug = new Map(revenuePages.map((page) => [page.slug, page] as const));
