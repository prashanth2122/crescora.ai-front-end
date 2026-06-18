import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";
import { privacyPolicyContent } from "@/lib/privacy-policy-content";

export const metadata: Metadata = {
  title: { absolute: privacyPolicyContent.metadata.title },
  description: privacyPolicyContent.metadata.description,
};

export default function PrivacyPage() {
  return <LegalPage page={privacyPolicyContent} showContactCard={false} />;
}
