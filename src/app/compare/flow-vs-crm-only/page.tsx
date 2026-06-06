import { ComparisonPageTemplate } from "@/components/site/decision-pages";
import { comparisonPages } from "@/lib/decision-pages";

export const metadata = {
  ...comparisonPages["flow-vs-crm-only"].metadata,
};

export default function FlowVsCrmOnlyPage() {
  return <ComparisonPageTemplate {...comparisonPages["flow-vs-crm-only"]} />;
}
