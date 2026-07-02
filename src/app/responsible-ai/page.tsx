import { TrustInfoPage } from "@/components/site/trust-info-page";
import { createExactPageMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";

const copy = siteContent.trustPages.responsibleAi;

export const metadata = createExactPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/responsible-ai",
});

export default function ResponsibleAiPage() {
  return <TrustInfoPage path="/responsible-ai" breadcrumbLabel="Responsible AI" copy={copy} />;
}
