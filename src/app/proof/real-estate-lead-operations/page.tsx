import { ProofPageTemplate } from "@/components/site/decision-pages";
import { proofPages } from "@/lib/decision-pages";
import { buildRouteSocialImagePath, createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: proofPages["real-estate-lead-operations"].metadata.title,
  description: proofPages["real-estate-lead-operations"].metadata.description,
  path: "/proof/real-estate-lead-operations",
  imagePath: buildRouteSocialImagePath("/proof/real-estate-lead-operations"),
});

export default function RealEstateLeadOperationsPage() {
  return <ProofPageTemplate {...proofPages["real-estate-lead-operations"]} />;
}
