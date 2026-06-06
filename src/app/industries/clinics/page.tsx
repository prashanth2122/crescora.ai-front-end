import { notFound } from "next/navigation";

import { IndustrySeoPage } from "@/components/site/industry-seo-page";
import { PageShell } from "@/components/site/page-shell";
import { industryBySlug } from "@/lib/india-seo-data";

export const metadata = {
  title: "Clinic Appointment Automation and Follow-Up | FLOW",
  description: "Automate clinic appointments, reminders, and handoff for clinics and outpatient teams.",
  alternates: { canonical: "/industries/clinics" },
};

export default function ClinicsIndustryPage() {
  const industry = industryBySlug.get("clinics");

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
          { name: "Clinics", href: "https://crescora.ai/industries/clinics" },
        ]}
        backHref="/industries"
        backLabel="Back to industries"
      />
    </PageShell>
  );
}
