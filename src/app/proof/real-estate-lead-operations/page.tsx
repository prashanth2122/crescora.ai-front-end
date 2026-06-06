import { ProofPageTemplate } from "@/components/site/decision-pages";
import { proofPages } from "@/lib/decision-pages";

export const metadata = {
  ...proofPages["real-estate-lead-operations"].metadata,
};

export default function RealEstateLeadOperationsPage() {
  return <ProofPageTemplate {...proofPages["real-estate-lead-operations"]} />;
}
