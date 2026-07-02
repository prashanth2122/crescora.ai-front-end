import { ScopedIndustryPage, type ScopedIndustryPageContent } from "@/components/site/scoped-industry-page";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: "Insurance Workflow Automation for Enquiries, Documents, Claims Support, and Handover | Crescora AI",
  description:
    "Automate insurance service workflows for enquiry intake, document collection, claim-status support, payment reminders, and human handover.",
  path: "/industries/insurance",
});

const page: ScopedIndustryPageContent = {
  hero: {
    eyebrow: "Insurance workflows",
    title: "Automate insurance service coordination while keeping decisions under human review.",
    description:
      "Crescora AI helps insurance teams collect documents, route enquiries, follow up on missing items, and hand sensitive policy or claim cases to staff.",
    image: {
      src: "/marketing/insurance-finance-usecases.png",
      alt: "Crescora AI insurance workflow graphic for enquiry intake, document collection, claim support, and human handover.",
      caption: "Insurance workflow visual for sample operations. Not underwriting, claims approval, or regulated advice.",
    },
  },
  sections: [
    {
      eyebrow: "Workflows",
      title: "Insurance workflows Crescora AI can support",
      description: "Begin with service coordination and document follow-up before deeper system integrations.",
      items: [
        "Policy enquiry intake with customer details, product interest, renewal status, and callback preference.",
        "Document collection for policies, claims, KYC, forms, receipts, and missing supporting files.",
        "Claim-status support that captures reference details and routes unresolved cases to the right team.",
        "Renewal reminders, payment follow-ups, and staff handover for exceptions or disputes.",
      ],
    },
    {
      eyebrow: "Boundaries",
      title: "Insurance automation needs explicit guardrails",
      description: "Keep regulated or sensitive decisions outside automated reply logic.",
      items: [
        "No automated coverage advice, underwriting, claim approval, claim rejection, or legal interpretation.",
        "Complex, sensitive, disputed, or low-confidence cases move to licensed or accountable staff.",
        "Approved knowledge can explain process steps, document lists, timing, and routing.",
        "Consent, retention, access, and provider obligations should be documented before launch.",
      ],
    },
  ],
  trustNote:
    "Crescora AI can help coordinate insurance workflows. Underwriting, claim decisions, coverage advice, legal interpretation, and regulated judgment should remain with qualified staff.",
  finalCta: {
    title: "Ready to map an insurance workflow?",
    description:
      "Share the enquiry, document, claim-support, renewal, or payment workflow that slows your team down. We will scope the safest first pilot.",
  },
};

export default function InsuranceIndustryPage() {
  return <ScopedIndustryPage page={page} />;
}
