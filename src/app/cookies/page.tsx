import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";
import { cookiePolicyContent } from "@/lib/cookie-policy-content";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createExactPageMetadata({
  title: cookiePolicyContent.metadata.title,
  description: cookiePolicyContent.metadata.description,
  path: "/cookies",
});

export default function CookiesPage() {
  return <LegalPage page={cookiePolicyContent} showContactCard={false} />;
}
