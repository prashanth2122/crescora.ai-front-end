import { ScopedIndustryPage, type ScopedIndustryPageContent } from "@/components/site/scoped-industry-page";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: "Diagnostics Automation for Lab Enquiries, Report Status, Reminders, and Handover | Crescora AI",
  description:
    "Automate diagnostics and lab communication workflows for test enquiries, home collection requests, report status, reminders, payments, and human handover.",
  path: "/industries/diagnostics",
});

const page: ScopedIndustryPageContent = {
  hero: {
    eyebrow: "Diagnostics automation",
    title: "Automate lab enquiries, report status updates, reminders, and staff handover.",
    description:
      "Crescora AI helps diagnostics teams structure repeated patient communication while keeping medical, emergency, and sensitive cases with qualified staff.",
    image: {
      src: "/marketing/labs-test-usecases.png",
      alt: "Crescora AI diagnostics and lab workflow graphic for test enquiries, report status, reminders, and handover.",
      caption: "Demo-safe diagnostics workflow visual. Not a live diagnostic system or medical advice surface.",
    },
  },
  sections: [
    {
      eyebrow: "Workflows",
      title: "Diagnostics workflows Crescora AI can support",
      description: "Start with repeated operational requests before expanding into deeper integrations.",
      items: [
        "Test enquiries, package questions, preparation instructions, and location or timing guidance from approved content.",
        "Home collection request intake, preferred slot capture, reminder messages, and staff handover when availability needs review.",
        "Report status collection with report ID, phone number, date, and fallback routing when the report cannot be found.",
        "Payment follow-up, receipt capture, unresolved billing escalation, and customer status updates.",
      ],
    },
    {
      eyebrow: "Controls",
      title: "What should stay controlled",
      description: "Diagnostics automation should reduce coordination load without making clinical claims.",
      items: [
        "No diagnosis, interpretation of reports, or emergency triage as an automated decision.",
        "Urgent, unclear, sensitive, or complaint-related cases route to human staff with context.",
        "Approved knowledge only for preparation, timing, location, pricing, and operational instructions.",
        "Consent, data handling, access, and retention rules should be confirmed during rollout scope.",
      ],
    },
  ],
  trustNote:
    "Crescora AI can support lab communication and operational routing. It should not interpret medical reports, provide medical advice, or replace qualified healthcare staff.",
  finalCta: {
    title: "Ready to map your diagnostics workflow?",
    description:
      "Tell us how your lab handles enquiries, bookings, report status, payments, reminders, and staff escalation. We will recommend the safest first workflow.",
  },
};

export default function DiagnosticsIndustryPage() {
  return <ScopedIndustryPage page={page} />;
}
