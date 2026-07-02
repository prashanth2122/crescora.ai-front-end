import { ScopedIndustryPage, type ScopedIndustryPageContent } from "@/components/site/scoped-industry-page";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: "Finance Workflow Automation for Documents, Payment Follow-Up, Support, and Review | Crescora AI",
  description:
    "Automate finance service workflows for document intake, payment reminders, status updates, support routing, and human review with clear compliance boundaries.",
  path: "/industries/finance",
});

const page: ScopedIndustryPageContent = {
  hero: {
    eyebrow: "Finance workflows",
    title: "Automate finance service coordination without automating regulated decisions.",
    description:
      "Crescora AI helps finance teams collect information, follow up on documents and payments, route support requests, and keep sensitive cases under human review.",
    image: {
      src: "/marketing/insurance-finance-usecases.png",
      alt: "Crescora AI finance workflow graphic for document intake, payment reminders, support routing, and human review.",
      caption: "Finance workflow visual for scoped operations. Not financial advice, underwriting, or regulated decision automation.",
    },
  },
  sections: [
    {
      eyebrow: "Workflows",
      title: "Finance workflows Crescora AI can support",
      description: "Use automation for coordination, reminders, intake, and routing where your policies allow it.",
      items: [
        "Lead or client enquiry intake with service type, contact details, urgency, and next-step preference.",
        "Document request, missing-file reminders, status tracking, and handover to an accountable reviewer.",
        "Payment reminders, invoice follow-up, failed-payment recovery, and billing escalation.",
        "Support triage for account, service, document, billing, or callback requests.",
      ],
    },
    {
      eyebrow: "Boundaries",
      title: "What Crescora AI should not decide",
      description: "Finance workflows need clear review ownership before launch.",
      items: [
        "No investment advice, credit approval, underwriting, eligibility decision, or legal/compliance judgment by automation.",
        "Sensitive or low-confidence cases route to staff with captured context.",
        "Customer consent, provider costs, data retention, and access roles are confirmed during scope.",
        "Approved knowledge should be used for process guidance, not personalized financial recommendations.",
      ],
    },
  ],
  trustNote:
    "Crescora AI can support operational finance workflows, but regulated financial, compliance, eligibility, or advisory decisions should remain with qualified humans and approved systems.",
  finalCta: {
    title: "Ready to scope a finance workflow safely?",
    description:
      "Tell us which intake, document, payment, or support workflow creates the most delay. We will map a pilot with review controls and clear boundaries.",
  },
};

export default function FinanceIndustryPage() {
  return <ScopedIndustryPage page={page} />;
}
