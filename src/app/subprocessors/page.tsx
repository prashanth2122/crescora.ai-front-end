import { TrustInfoPage } from "@/components/site/trust-info-page";
import { createExactPageMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";

const copy = siteContent.trustPages.subprocessors;

export const metadata = createExactPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/subprocessors",
});

export default function SubprocessorsPage() {
  return <TrustInfoPage path="/subprocessors" breadcrumbLabel="Subprocessors" copy={copy} />;
}
