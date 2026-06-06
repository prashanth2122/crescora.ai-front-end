import { notFound } from "next/navigation";

import { IndustrySeoPage } from "@/components/site/industry-seo-page";
import { PageShell } from "@/components/site/page-shell";
import { industryBySlug } from "@/lib/india-seo-data";

export const metadata = {
  title: "Service Business Booking and Collections | FLOW",
  description: "Automate bookings, reminders, billing, and collections follow-up for service businesses.",
  alternates: { canonical: "/industries/service-businesses" },
};

export default function ServiceBusinessesIndustryPage() {
  const industry = industryBySlug.get("service-businesses");

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
          { name: "Service Businesses", href: "https://crescora.ai/industries/service-businesses" },
        ]}
        backHref="/industries"
        backLabel="Back to industries"
      />
    </PageShell>
  );
}
