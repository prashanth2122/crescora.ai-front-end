import { ProofPageTemplate } from "@/components/site/decision-pages";
import { proofPages } from "@/lib/decision-pages";

export const metadata = {
  ...proofPages["healthcare-front-desk-automation"].metadata,
};

export default function HealthcareFrontDeskAutomationPage() {
  return <ProofPageTemplate {...proofPages["healthcare-front-desk-automation"]} />;
}
