import type { LegalPageData } from "@/lib/site-content";

export const privacyPolicyContent = {
  metadata: {
    title: "Privacy Policy | Crescora Flow",
    description:
      "Learn how Crescora Flow collects, uses, protects, and manages personal data across AI automation, workspaces, channels, integrations, and customer conversations.",
  },
  hero: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    description:
      'This Privacy Policy explains how Crescora AI, operating as Crescora Flow and Crescora AI ("Crescora", "we", "our", or "us"), collects, uses, stores, shares, and protects information when you use our websites, applications, workspaces, automation builder, web chat widget, AI features, integrations, and related services.',
  },
  dateLabel: "Effective date",
  updatedOn: "06-June 2026",
  sections: [
    {
      title: "1. Scope of this Policy",
      paragraphs: ["This Privacy Policy applies to:"],
      bullets: [
        "Visitors to our website.",
        "Users who create or access Crescora Flow accounts.",
        "Workspace owners, admins, agents, and team members.",
        "Customers or end users who interact with bots, web widgets, or automation flows powered by Crescora Flow.",
        "People who contact us for sales, support, demos, onboarding, or billing.",
        "This Policy does not apply to third-party websites, services, or platforms that we do not control.",
      ],
    },
    {
      title: "2. Our Role in Data Processing",
      paragraphs: [
        "Crescora Flow may process data in different roles depending on the context.",
        "For account, billing, website, security, support, and platform administration data, Crescora generally acts as the organization responsible for deciding why and how that data is processed.",
        "For customer conversation data, bot messages, workflow records, uploaded documents, channel messages, and business data processed inside a client workspace, the workspace owner or business customer usually controls the purpose of processing, and Crescora processes that data to provide the platform.",
        "Business customers are responsible for ensuring that their use of Crescora Flow complies with applicable laws, consent requirements, sector-specific obligations, and messaging platform rules.",
      ],
    },
    {
      title: "3. Information We Collect",
      paragraphs: ["We may collect the following categories of information."],
      bullets: [
        "Account and workspace information: name, email address, phone number, password credentials, role, workspace name, organization details, member permissions, login activity, 2FA status, invitation status, and account preferences.",
        "Bot, workflow, and automation data: bot names, flow definitions, nodes, prompts, variables, automation settings, knowledge base content, guardrail configuration, channel settings, integration settings, templates, logs, runtime traces, and workflow outcomes.",
        "Conversation and customer interaction data: user messages, bot replies, conversation transcripts, session IDs, channel identifiers, uploaded documents, form responses, appointment details, payment status updates, support requests, handover notes, agent replies, and workflow records.",
        "Channel and integration data: configuration and delivery data related to WhatsApp, Telegram, email, SMS, payment providers, CRM systems, calendars, helpdesks, APIs, webhooks, or other integrations.",
        "Billing and commercial information: plan selection, billing contact details, subscription status, invoice details, checkout references, payment verification status, usage limits, credits, and transaction metadata. We do not intentionally store full card details unless a payment provider makes such storage available to us under applicable compliance standards.",
        "AI and model usage data: prompts, context, generated responses, classification results, extracted fields, model routing metadata, evaluation results, guardrail decisions, fallback outputs, and observability logs. Unless we clearly state otherwise or receive explicit permission, customer workspace content is not used to train general-purpose foundation models owned by Crescora.",
        "Device, log, and security data: IP address, device type, browser type, operating system, timestamps, pages viewed, referring URLs, login attempts, error logs, security events, usage metrics, and diagnostic data.",
        "Cookies and similar technologies: cookies and similar technologies for authentication, security, preferences, analytics, and performance. More details are available in our Cookie Policy.",
      ],
    },
    {
      title: "4. How We Use Information",
      bullets: [
        "Create, secure, and manage user accounts.",
        "Provide workspace access and role-based permissions.",
        "Build, save, test, deploy, and run automation flows.",
        "Process customer conversations across supported channels.",
        "Enable human handoff, queue management, agent replies, and support workflows.",
        "Provide AI-powered classification, extraction, generation, routing, summaries, and guardrails.",
        "Store knowledge base content and workflow records.",
        "Send transactional notifications, alerts, reminders, and service messages.",
        "Process subscriptions, billing, payments, and invoices.",
        "Monitor reliability, quality, usage, cost, errors, and platform performance.",
        "Detect abuse, spam, unauthorized access, fraud, and security incidents.",
        "Improve product functionality, user experience, and operational safety.",
        "Provide customer support, onboarding, demos, and account assistance.",
        "Comply with legal, regulatory, tax, accounting, and contractual obligations.",
      ],
    },
    {
      title: "5. AI Processing",
      paragraphs: [
        "Crescora Flow includes AI-powered features that may classify messages, extract fields, generate responses, summarize conversations, evaluate quality, assist agents, or recommend workflow actions.",
        "AI outputs may be incorrect, incomplete, or unsuitable for sensitive decisions without human review. Business customers are responsible for reviewing AI-generated content before using it in high-risk contexts such as healthcare, legal, financial, employment, insurance, eligibility, safety, or compliance-related workflows.",
        "We may use third-party AI providers depending on workspace settings, model routing, provider availability, cost controls, and customer configuration. Data sent to AI providers is limited to what is reasonably required to perform the requested AI task.",
      ],
    },
    {
      title: "6. Legal Bases and Consent",
      paragraphs: ["Where applicable, we process personal data based on one or more lawful grounds, such as:"],
      bullets: [
        "Performance of a contract.",
        "Consent.",
        "Compliance with legal obligations.",
        "Legitimate business interests.",
        "Protection of security, platform integrity, and user rights.",
        "Processing requested by a business customer through its workspace.",
      ],
    },
    {
      title: "7. Sharing of Information",
      bullets: [
        "Workspace owners, admins, and authorized team members.",
        "Service providers that help us operate hosting, databases, email, SMS, analytics, AI processing, payments, support, security, and infrastructure.",
        "Connected third-party platforms chosen by the workspace owner.",
        "Payment processors and billing providers.",
        "Professional advisers, auditors, or legal representatives.",
        "Authorities, regulators, or law enforcement where required by law.",
        "Successors in connection with merger, acquisition, restructuring, or asset transfer.",
      ],
      paragraphs: ["We do not sell personal data."],
    },
    {
      title: "8. Third-Party Services",
      paragraphs: [
        "Crescora Flow may integrate with services such as messaging platforms, AI providers, payment gateways, email providers, SMS providers, CRM systems, calendars, helpdesks, webhooks, and APIs.",
        "Use of third-party services may be subject to their own terms, privacy policies, messaging rules, rate limits, and compliance requirements. Workspace owners are responsible for configuring integrations lawfully and securely.",
      ],
    },
    {
      title: "9. Data Retention",
      paragraphs: [
        "We retain information for as long as necessary to provide the services, maintain accounts, comply with legal obligations, resolve disputes, enforce agreements, maintain audit records, prevent abuse, and support business operations.",
        "Retention periods may vary depending on the type of data, workspace settings, plan status, legal requirements, and customer instructions.",
        "Business customers may request deletion or export of workspace data subject to account status, legal obligations, backup limitations, and contractual terms.",
      ],
    },
    {
      title: "10. Security",
      paragraphs: [
        "We use reasonable technical and organizational safeguards designed to protect information against unauthorized access, loss, misuse, alteration, or disclosure.",
        "These safeguards may include authentication, 2FA, role-based access, workspace scoping, encryption where appropriate, logging, monitoring, access controls, secure development practices, and operational review.",
        "No online platform can guarantee absolute security. Users are responsible for keeping credentials confidential and promptly reporting suspected unauthorized access.",
      ],
    },
    {
      title: "11. International Transfers",
      paragraphs: [
        "Data may be processed in India or other countries where Crescora, its infrastructure providers, AI providers, communication providers, or subprocessors operate.",
        "Where required, we use appropriate safeguards for cross-border data transfers.",
      ],
    },
    {
      title: "12. Children's Data",
      paragraphs: [
        "Crescora Flow is a business platform and is not intended for direct use by children. Business customers must not use Crescora Flow to knowingly collect children's personal data unless they have appropriate authority, parental consent where required, and compliance controls in place.",
      ],
    },
    {
      title: "13. Your Rights",
      paragraphs: ["Depending on applicable law, you may have rights to:"],
      bullets: [
        "Access your personal data.",
        "Correct inaccurate data.",
        "Delete data.",
        "Withdraw consent.",
        "Object to or restrict certain processing.",
        "Request portability.",
        "Raise grievances or complaints.",
        "Nominate another person where applicable law allows.",
        "To exercise rights, contact us at support@crescora.ai.",
        "If your data was collected by a Crescora customer through a bot or workflow, we may direct your request to that customer because they control the purpose of processing.",
      ],
    },
    {
      title: "14. Marketing Communications",
      paragraphs: [
        "We may send product updates, onboarding messages, promotional communications, or event information where permitted. You can opt out of marketing emails using the unsubscribe option or by contacting us.",
        "Transactional and service messages may still be sent when necessary for account, security, billing, or operational reasons.",
      ],
    },
    {
      title: "15. Changes to this Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. When we make material changes, we may notify users through the website, dashboard, email, or other appropriate channels.",
        "The updated version will be effective from the date shown at the top.",
      ],
    },
    {
      title: "16. Contact Us",
      paragraphs: ["For privacy questions, requests, or grievances, contact:"],
      bullets: [
        "Crescora AI",
        "Crescora AI, 2nd floor,Club house, Urbanrise oncloud 33, bachupally,hyderabad-90 Telangana,India",
        "Email: support@crescora.ai",
        "Grievance contact: support@crescora.ai",
      ],
    },
  ],
} as const satisfies LegalPageData;
