import { ComparisonPageTemplate } from "@/components/site/decision-pages";
import { comparisonPages } from "@/lib/decision-pages";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: comparisonPages["flow-vs-crm-only"].metadata.title,
  description: comparisonPages["flow-vs-crm-only"].metadata.description,
  path: "/compare/flow-vs-crm-only",
});

export default function FlowVsCrmOnlyPage() {
  return <ComparisonPageTemplate {...comparisonPages["flow-vs-crm-only"]} />;
}
