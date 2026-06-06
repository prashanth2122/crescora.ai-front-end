import { homepageFlowSteps } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2, MessageSquareText, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type WorkflowVisualProps = {
  className?: string;
};

export function WorkflowVisual({ className }: WorkflowVisualProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden border-white/10 bg-zinc-950/95 text-white shadow-2xl shadow-zinc-950/30",
        className,
      )}
    >
      <div className="border-b border-white/10 bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(139,92,246,0.14),rgba(16,185,129,0.12))] p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/55">{siteContent.ui.workflowVisual.eyebrow}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{siteContent.ui.workflowVisual.title}</h3>
          </div>
          <Badge className="border-white/10 bg-white/10 text-white hover:bg-white/15">
            {siteContent.ui.workflowVisual.badge}
          </Badge>
        </div>
      </div>
      <div className="space-y-3 p-5">
        {homepageFlowSteps.map((step, index) => {
          const icons = [MessageSquareText, Sparkles, ArrowRight, CheckCircle2];
          const Icon = icons[index % icons.length];
          return (
            <div
              key={step}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(14,165,233,0.9),rgba(139,92,246,0.9))] text-white">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-white/75">
                  {siteContent.ui.workflowVisual.stepLabel} {index + 1}
                </p>
                <p className="text-sm font-medium text-white">{step}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
