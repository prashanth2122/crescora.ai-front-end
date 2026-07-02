import { ProofPageTemplate } from "@/components/site/decision-pages";
import { proofPages } from "@/lib/decision-pages";
import { createExactPageMetadata } from "@/lib/seo";

const page = proofPages["education-admissions-workflow"];

export const metadata = createExactPageMetadata({
  title: page.metadata.title,
  description: page.metadata.description,
  path: "/workflow-examples/education-admissions-workflow",
});

export default function EducationAdmissionsWorkflowPage() {
  return <ProofPageTemplate {...page} />;
}
