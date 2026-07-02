import { TrustInfoPage } from "@/components/site/trust-info-page";
import { createExactPageMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";

const copy = siteContent.trustPages.dataProcessing;

export const metadata = createExactPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/data-processing",
});

export default function DataProcessingPage() {
  return <TrustInfoPage path="/data-processing" breadcrumbLabel="Data Processing" copy={copy} />;
}
