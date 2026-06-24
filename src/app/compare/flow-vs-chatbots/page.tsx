import { ComparisonPageTemplate } from "@/components/site/decision-pages";
import { comparisonPages } from "@/lib/decision-pages";
import { buildRouteSocialImagePath, createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: comparisonPages["flow-vs-chatbots"].metadata.title,
  description: comparisonPages["flow-vs-chatbots"].metadata.description,
  path: "/compare/flow-vs-chatbots",
  imagePath: buildRouteSocialImagePath("/compare/flow-vs-chatbots"),
});

export default function FlowVsChatbotsPage() {
  return <ComparisonPageTemplate {...comparisonPages["flow-vs-chatbots"]} />;
}
