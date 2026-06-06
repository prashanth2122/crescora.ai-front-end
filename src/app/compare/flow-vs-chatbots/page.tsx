import { ComparisonPageTemplate } from "@/components/site/decision-pages";
import { comparisonPages } from "@/lib/decision-pages";

export const metadata = {
  ...comparisonPages["flow-vs-chatbots"].metadata,
};

export default function FlowVsChatbotsPage() {
  return <ComparisonPageTemplate {...comparisonPages["flow-vs-chatbots"]} />;
}
