import { ScopedIndustryPage, type ScopedIndustryPageContent } from "@/components/site/scoped-industry-page";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: "Lab Automation for Test Requests, Report Updates, Patient Reminders, and Review | Crescora AI",
  description:
    "Automate lab workflows for test requests, collection scheduling, report-ready updates, payment follow-up, document intake, and human review.",
  path: "/industries/labs",
});

const page: ScopedIndustryPageContent = {
  hero: {
    eyebrow: "Lab automation",
    title: "Turn repeated lab requests into structured workflows with staff review.",
    description:
      "Crescora AI helps labs capture requests, send reminders, manage report-status communication, and hand sensitive cases to staff with context.",
    image: {
      src: "/marketing/labs-test-usecases.png",
      alt: "Crescora AI lab workflow graphic for test requests, report updates, payment reminders, and staff review.",
      caption: "Sample workflow visual for lab operations. It is not a claim of live medical-report interpretation.",
    },
  },
  sections: [
    {
      eyebrow: "Workflow coverage",
      title: "Lab communication that can be structured",
      description: "Focus the first rollout on repeated front-desk and support requests.",
      items: [
        "Test request intake with customer details, preferred branch, collection type, and timing.",
        "Preparation instruction answers from approved lab content with fallback for unclear questions.",
        "Report-ready notifications, unavailable-report fallback, and staff review for exceptions.",
        "Payment status capture, receipt follow-up, and billing handover when manual action is needed.",
      ],
    },
    {
      eyebrow: "Safety",
      title: "Boundaries for lab workflows",
      description: "Keep medically sensitive communication controlled and auditable.",
      items: [
        "Do not interpret lab values or give clinical advice through automation.",
        "Route urgent, sensitive, abnormal, or unclear report questions to staff.",
        "Use approved content for timings, preparation, pricing, branches, and document requirements.",
        "Confirm channel approvals, privacy rules, and retention expectations before launch.",
      ],
    },
  ],
  trustNote:
    "Crescora AI supports operational lab workflows. Medical interpretation, clinical recommendations, and regulated decisions should remain with qualified professionals.",
  finalCta: {
    title: "Ready to automate repeated lab communication?",
    description:
      "Share how your team handles test requests, report calls, reminders, payments, and exceptions. We will scope the safest first automation.",
  },
};

export default function LabsIndustryPage() {
  return <ScopedIndustryPage page={page} />;
}
