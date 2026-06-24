import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";
import { termsOfServiceContent } from "@/lib/terms-of-service-content";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createExactPageMetadata({
  title: termsOfServiceContent.metadata.title,
  description: termsOfServiceContent.metadata.description,
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage page={termsOfServiceContent} showContactCard={false} />;
}
