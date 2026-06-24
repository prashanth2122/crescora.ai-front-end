import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";
import { privacyPolicyContent } from "@/lib/privacy-policy-content";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createExactPageMetadata({
  title: privacyPolicyContent.metadata.title,
  description: privacyPolicyContent.metadata.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage page={privacyPolicyContent} showContactCard={false} />;
}
