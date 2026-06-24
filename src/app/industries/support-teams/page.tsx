import { notFound } from "next/navigation";

import { IndustrySeoPage } from "@/components/site/industry-seo-page";
import { PageShell } from "@/components/site/page-shell";
import { industryBySlug } from "@/lib/india-seo-data";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: "Customer Support Automation for Teams | FLOW",
  description: "Automate support triage, FAQ resolution, escalation, and observability for support teams.",
  path: "/industries/support-teams",
});

export default function SupportTeamsIndustryPage() {
  const industry = industryBySlug.get("support-teams");

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
          { name: "Support Teams", href: "https://www.crescora.ai/industries/support-teams" },
        ]}
        backHref="/industries"
        backLabel="Back to industries"
      />
    </PageShell>
  );
}
