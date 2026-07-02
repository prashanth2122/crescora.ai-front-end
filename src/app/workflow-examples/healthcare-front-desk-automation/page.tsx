import { ProofPageTemplate } from "@/components/site/decision-pages";
import { proofPages } from "@/lib/decision-pages";
import { createExactPageMetadata } from "@/lib/seo";

const page = proofPages["healthcare-front-desk-automation"];

export const metadata = createExactPageMetadata({
  title: page.metadata.title,
  description: page.metadata.description,
  path: "/workflow-examples/healthcare-front-desk-automation",
});

export default function HealthcareFrontDeskAutomationPage() {
  return <ProofPageTemplate {...page} />;
}
