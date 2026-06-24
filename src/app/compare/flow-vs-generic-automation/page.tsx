import { ComparisonPageTemplate } from "@/components/site/decision-pages";
import { comparisonPages } from "@/lib/decision-pages";
import { buildRouteSocialImagePath, createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: comparisonPages["flow-vs-generic-automation"].metadata.title,
  description: comparisonPages["flow-vs-generic-automation"].metadata.description,
  path: "/compare/flow-vs-generic-automation",
  imagePath: buildRouteSocialImagePath("/compare/flow-vs-generic-automation"),
});

export default function FlowVsGenericAutomationPage() {
  return <ComparisonPageTemplate {...comparisonPages["flow-vs-generic-automation"]} />;
}
