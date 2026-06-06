import { notFound } from "next/navigation";

import { IndustrySeoPage } from "@/components/site/industry-seo-page";
import { PageShell } from "@/components/site/page-shell";
import { industryBySlug } from "@/lib/india-seo-data";

export const metadata = {
  title: "Hospital WhatsApp Automation and Patient Flows | FLOW",
  description: "Automate patient communication, reminders, document collection, and human handoff for hospitals.",
  alternates: { canonical: "/industries/hospitals" },
};

export default function HospitalsIndustryPage() {
  const industry = industryBySlug.get("hospitals");

  if (!industry) {
    notFound();
  }

  return (
    <PageShell>
      <IndustrySeoPage
        industry={industry}
        breadcrumbs={[
          { name: "Home", href: "https://crescora.ai" },
          { name: "Industries", href: "https://crescora.ai/industries" },
          { name: "Hospitals", href: "https://crescora.ai/industries/hospitals" },
        ]}
        backHref="/industries"
        backLabel="Back to industries"
      />
    </PageShell>
  );
}
