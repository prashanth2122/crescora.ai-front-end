import type { LegalPageData } from "@/lib/site-content";

export const acceptableUsePolicyContent = {
  metadata: {
    title: "Acceptable Use Policy | Crescora AI",
    description:
      "Crescora AI's Acceptable Use Policy explains prohibited uses, AI safety expectations, messaging rules, data restrictions, platform abuse rules, and enforcement actions.",
  },
  hero: {
    eyebrow: "Legal",
    title: "Acceptable Use Policy",
    description:
      'This Acceptable Use Policy ("Policy") explains what is not allowed when using Crescora AI, Crescora AI websites, applications, workspaces, automation builder, AI features, integrations, channels, web widgets, APIs, and related services.',
  },
  dateLabel: "Effective date",
  updatedOn: "06-June 2026",
  sections: [
    {
      title: "1. General Rule",
      paragraphs: [
        "This Policy applies to all customers, workspace owners, admins, agents, users, developers, and anyone using or accessing the Services.",
        "You must use Crescora AI responsibly, lawfully, and in a way that protects customers, businesses, third-party platforms, and the integrity of the Services.",
        "You may not use Crescora AI to create, automate, assist, promote, or conceal unlawful, harmful, deceptive, abusive, exploitative, infringing, unsafe, or unauthorized activity.",
      ],
    },
    {
      title: "2. Illegal or Harmful Activity",
      paragraphs: ["You may not use the Services to:"],
      bullets: [
        "Violate laws, regulations, court orders, or third-party rights.",
        "Facilitate fraud, scams, phishing, impersonation, money laundering, or identity theft.",
        "Promote violence, exploitation, harassment, abuse, or threats.",
        "Sell, distribute, or facilitate illegal goods or services.",
        "Encourage self-harm, harm to others, or dangerous behavior.",
        "Collect or process data without required rights, notice, or consent.",
      ],
    },
    {
      title: "3. Messaging Abuse and Spam",
      paragraphs: ["You may not use the Services to:"],
      bullets: [
        "Send spam or unauthorized bulk messages.",
        "Bypass opt-out, consent, or template approval requirements.",
        "Send misleading, deceptive, or unwanted promotional messages.",
        "Use WhatsApp, Telegram, SMS, email, or web chat in violation of platform rules.",
        "Scrape contact lists or message users without permission.",
        "Rotate senders, accounts, or workspaces to avoid limits or enforcement.",
      ],
    },
    {
      title: "4. AI Misuse",
      paragraphs: ["You may not use AI features to:"],
      bullets: [
        "Generate deceptive, fraudulent, or manipulative content.",
        "Impersonate people, businesses, public officials, or professionals without authorization.",
        "Produce content that violates privacy, intellectual property, or consumer protection laws.",
        "Make high-risk decisions without appropriate human review.",
        "Present AI-generated answers as guaranteed, certified, professional, or human-reviewed when they are not.",
        "Generate medical, legal, financial, employment, insurance, or safety advice without suitable disclaimers, controls, and qualified review where required.",
        "Bypass AI safety, grounding, guardrail, moderation, or human approval controls.",
      ],
    },
    {
      title: "5. Sensitive and Regulated Use Cases",
      paragraphs: [
        "You must apply extra care when using Crescora AI for healthcare, finance, insurance, education, employment, legal, government, children's services, identity verification, KYC, documents, or other regulated workflows.",
        "You are responsible for collecting valid consent, providing required notices, using human review where appropriate, verifying AI output before action, maintaining audit evidence, and following sector-specific rules.",
        "Crescora may restrict workflows that create unacceptable legal, safety, privacy, or reputational risk.",
      ],
    },
    {
      title: "6. Data Protection and Privacy",
      paragraphs: ["You may not use the Services to:"],
      bullets: [
        "Collect personal data without lawful basis or consent where required.",
        "Upload or process data you are not authorized to use.",
        "Store unnecessary sensitive data.",
        "Expose secrets, passwords, API keys, private tokens, or credentials.",
        "Re-identify anonymized data without authorization.",
        "Sell, leak, misuse, or unlawfully transfer personal data.",
        "Use customer conversation data for unrelated purposes without notice and permission.",
      ],
    },
    {
      title: "7. Security and Platform Integrity",
      paragraphs: ["You may not:"],
      bullets: [
        "Attempt unauthorized access to accounts, workspaces, APIs, systems, or data.",
        "Probe, scan, exploit, or test vulnerabilities without written permission.",
        "Introduce malware, ransomware, spyware, worms, or harmful code.",
        "Overload, disrupt, or degrade platform infrastructure.",
        "Circumvent rate limits, billing limits, usage controls, or access restrictions.",
        "Reverse engineer, copy, resell, or misuse platform technology.",
        "Use automation to create abusive accounts or workspaces.",
        "Interfere with monitoring, logging, audit trails, or security controls.",
      ],
    },
    {
      title: "8. Intellectual Property and Content Rights",
      paragraphs: ["You may not use the Services to:"],
      bullets: [
        "Upload or distribute content that infringes copyrights, trademarks, trade secrets, publicity rights, or other rights.",
        "Misrepresent ownership of content, brands, logos, templates, or documents.",
        "Remove copyright notices or licensing restrictions.",
        "Generate or distribute content that violates third-party rights.",
      ],
    },
    {
      title: "9. Deceptive or Misleading Use",
      paragraphs: ["You may not:"],
      bullets: [
        "Mislead users about who operates a bot or workflow.",
        "Hide that a user is interacting with automation where disclosure is required.",
        "Misrepresent pricing, offers, availability, refunds, policies, or service terms.",
        "Use fake reviews, fake testimonials, fake identities, or fake urgency.",
        "Manipulate users into sharing sensitive information unnecessarily.",
      ],
    },
    {
      title: "10. Prohibited High-Risk Automation",
      paragraphs: [
        "You may not use Crescora AI to fully automate final decisions that have serious legal, financial, health, employment, housing, education, or safety effects without appropriate human review, notices, and lawful authority.",
        "Examples include denying insurance, loans, employment, education, healthcare, or essential services; providing emergency medical decisions without human intervention; approving or rejecting legal claims without qualified review; making eligibility decisions based only on AI output; and performing surveillance or profiling without lawful basis.",
      ],
    },
    {
      title: "11. Credentials, Secrets, and Integrations",
      paragraphs: [
        "You must protect API keys, webhook secrets, tokens, channel credentials, payment credentials, and integration access.",
        "You may not share credentials with unauthorized users, hardcode secrets in unsafe locations, or connect integrations that you do not have permission to use.",
      ],
    },
    {
      title: "12. Enforcement",
      paragraphs: [
        "If we believe this Policy has been violated, we may take action, including warning the workspace owner, removing or disabling content, bots, flows, templates, integrations, or channels, restricting message sending or AI usage, suspending users or workspaces, terminating access, reporting unlawful activity to authorities where appropriate, and preserving evidence for investigation, audit, or legal compliance.",
        "We may act immediately if needed to protect users, third parties, the platform, or legal compliance.",
      ],
    },
    {
      title: "13. Reporting Abuse",
      paragraphs: [
        "To report abuse, security concerns, spam, impersonation, unlawful workflows, or policy violations, contact:",
        "Please include relevant details such as workspace name, bot link, message screenshots, timestamps, and the reason for reporting.",
      ],
      bullets: ["Abuse reports: support@crescora.ai", "General support: support@crescora.ai"],
    },
    {
      title: "14. Updates",
      paragraphs: [
        "We may update this Policy from time to time. Continued use of the Services after updates means you agree to the updated Policy.",
      ],
    },
  ],
} as const satisfies LegalPageData;
