import { ComparisonPageTemplate } from "@/components/site/decision-pages";
import { comparisonPages } from "@/lib/decision-pages";

export const metadata = {
  ...comparisonPages["flow-vs-manual-whatsapp"].metadata,
};

export default function FlowVsManualWhatsAppPage() {
  return <ComparisonPageTemplate {...comparisonPages["flow-vs-manual-whatsapp"]} />;
}
