import { BarChart3, BookOpenText, CreditCard, FileText, MessageSquareText, UserCheck, Workflow } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";

type ProductProofPanel = {
  title: string;
  description: string;
  metric: string;
};

type ProductProofSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  disclaimer: string;
  panels: readonly ProductProofPanel[];
};

const proofIcons = [Workflow, MessageSquareText, UserCheck, BookOpenText, BarChart3, CreditCard, FileText];

export function ProductProofSection({
  eyebrow,
  title,
  description,
  disclaimer,
  panels,
}: ProductProofSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {panels.map((panel, index) => {
          const Icon = proofIcons[index % proofIcons.length];

          return (
            <Card key={panel.title} className="overflow-hidden border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-0">
                <div className="border-b border-zinc-200 bg-zinc-950 p-5 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="max-w-[11rem] rounded-full border border-white/10 bg-white/10 px-3 py-1 text-right text-xs font-medium leading-4 text-white/80">
                      Demo product screen using dummy data
                    </span>
                  </div>
                  <p className="mt-5 text-lg font-semibold tracking-tight">{panel.title}</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">{panel.description}</p>
                </div>
                <div className="bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">What it proves</p>
                  <p className="mt-2 text-base font-semibold text-zinc-950">{panel.metric}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <p className="mt-6 max-w-4xl rounded-3xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-950">
        {disclaimer}
      </p>
    </section>
  );
}
