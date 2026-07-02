import { ProofPageTemplate } from "@/components/site/decision-pages";
import { proofPages } from "@/lib/decision-pages";
import { createExactPageMetadata } from "@/lib/seo";

const page = proofPages["real-estate-lead-operations"];

export const metadata = createExactPageMetadata({
  title: page.metadata.title,
  description: page.metadata.description,
  path: "/workflow-examples/real-estate-lead-operations",
});

export default function RealEstateLeadOperationsPage() {
  return <ProofPageTemplate {...page} />;
}
