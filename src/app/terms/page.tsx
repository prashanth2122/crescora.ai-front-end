import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";
import { termsOfServiceContent } from "@/lib/terms-of-service-content";

export const metadata: Metadata = {
  title: { absolute: termsOfServiceContent.metadata.title },
  description: termsOfServiceContent.metadata.description,
};

export default function TermsPage() {
  return <LegalPage page={termsOfServiceContent} showContactCard={false} />;
}
