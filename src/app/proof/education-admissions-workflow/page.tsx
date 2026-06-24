import { ProofPageTemplate } from "@/components/site/decision-pages";
import { proofPages } from "@/lib/decision-pages";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: proofPages["education-admissions-workflow"].metadata.title,
  description: proofPages["education-admissions-workflow"].metadata.description,
  path: "/proof/education-admissions-workflow",
});

export default function EducationAdmissionsWorkflowPage() {
  return <ProofPageTemplate {...proofPages["education-admissions-workflow"]} />;
}
