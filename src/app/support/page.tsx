import { TrustInfoPage } from "@/components/site/trust-info-page";
import { createExactPageMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";

const copy = siteContent.trustPages.support;

export const metadata = createExactPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/support",
});

export default function SupportPage() {
  return <TrustInfoPage path="/support" breadcrumbLabel="Support" copy={copy} />;
}
