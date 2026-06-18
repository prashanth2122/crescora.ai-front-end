import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";
import { acceptableUsePolicyContent } from "@/lib/acceptable-use-policy-content";

export const metadata: Metadata = {
  title: { absolute: acceptableUsePolicyContent.metadata.title },
  description: acceptableUsePolicyContent.metadata.description,
};

export default function AcceptableUsePage() {
  return <LegalPage page={acceptableUsePolicyContent} showContactCard={false} />;
}
