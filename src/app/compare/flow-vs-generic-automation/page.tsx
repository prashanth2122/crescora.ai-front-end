import { ComparisonPageTemplate } from "@/components/site/decision-pages";
import { comparisonPages } from "@/lib/decision-pages";

export const metadata = {
  ...comparisonPages["flow-vs-generic-automation"].metadata,
};

export default function FlowVsGenericAutomationPage() {
  return <ComparisonPageTemplate {...comparisonPages["flow-vs-generic-automation"]} />;
}
