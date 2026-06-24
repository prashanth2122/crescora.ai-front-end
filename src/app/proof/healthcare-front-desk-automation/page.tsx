import { ProofPageTemplate } from "@/components/site/decision-pages";
import { proofPages } from "@/lib/decision-pages";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: proofPages["healthcare-front-desk-automation"].metadata.title,
  description: proofPages["healthcare-front-desk-automation"].metadata.description,
  path: "/proof/healthcare-front-desk-automation",
});

export default function HealthcareFrontDeskAutomationPage() {
  return <ProofPageTemplate {...proofPages["healthcare-front-desk-automation"]} />;
}
