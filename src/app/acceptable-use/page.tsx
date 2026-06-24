import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";
import { acceptableUsePolicyContent } from "@/lib/acceptable-use-policy-content";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createExactPageMetadata({
  title: acceptableUsePolicyContent.metadata.title,
  description: acceptableUsePolicyContent.metadata.description,
  path: "/acceptable-use",
});

export default function AcceptableUsePage() {
  return <LegalPage page={acceptableUsePolicyContent} showContactCard={false} />;
}
