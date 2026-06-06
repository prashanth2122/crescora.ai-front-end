import { ProofPageTemplate } from "@/components/site/decision-pages";
import { proofPages } from "@/lib/decision-pages";

export const metadata = {
  ...proofPages["education-admissions-workflow"].metadata,
};

export default function EducationAdmissionsWorkflowPage() {
  return <ProofPageTemplate {...proofPages["education-admissions-workflow"]} />;
}
