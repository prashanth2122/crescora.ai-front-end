import { ComparisonPageTemplate } from "@/components/site/decision-pages";
import { comparisonPages } from "@/lib/decision-pages";
import { buildRouteSocialImagePath, createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: comparisonPages["flow-vs-manual-whatsapp"].metadata.title,
  description: comparisonPages["flow-vs-manual-whatsapp"].metadata.description,
  path: "/compare/flow-vs-manual-whatsapp",
  imagePath: buildRouteSocialImagePath("/compare/flow-vs-manual-whatsapp"),
});

export default function FlowVsManualWhatsAppPage() {
  return <ComparisonPageTemplate {...comparisonPages["flow-vs-manual-whatsapp"]} />;
}
