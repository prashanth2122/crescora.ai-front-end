import { TrustInfoPage } from "@/components/site/trust-info-page";
import { createExactPageMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";

const copy = siteContent.trustPages.security;

export const metadata = createExactPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/security",
});

export default function SecurityPage() {
  return <TrustInfoPage path="/security" breadcrumbLabel="Security" copy={copy} />;
}
