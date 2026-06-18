import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";
import { cookiePolicyContent } from "@/lib/cookie-policy-content";

export const metadata: Metadata = {
  title: { absolute: cookiePolicyContent.metadata.title },
  description: cookiePolicyContent.metadata.description,
};

export default function CookiesPage() {
  return <LegalPage page={cookiePolicyContent} showContactCard={false} />;
}
