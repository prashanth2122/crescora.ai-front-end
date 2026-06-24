import { notFound } from "next/navigation";

import { IndustrySeoPage } from "@/components/site/industry-seo-page";
import { PageShell } from "@/components/site/page-shell";
import { industryBySlug } from "@/lib/india-seo-data";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: "Service Business Booking and Collections | FLOW",
  description: "Automate bookings, reminders, billing, and collections follow-up for service businesses.",
  path: "/industries/service-businesses",
});

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
          { name: "Home", href: "https://www.crescora.ai" },
          { name: "Industries", href: "https://www.crescora.ai/industries" },
          { name: "Service Businesses", href: "https://www.crescora.ai/industries/service-businesses" },
        ]}
        backHref="/industries"
        backLabel="Back to industries"
      />
    </PageShell>
  );
}
