import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { PageTransition } from "@/components/site/page-transition";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.06),transparent_38%),linear-gradient(180deg,rgba(247,244,236,0.9)_0%,rgba(255,255,255,1)_24%)]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.08),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.08),transparent_20%)]"
        style={{ animation: "float-soft 8s ease-in-out infinite" }}
      />
      <PageTransition>{children}</PageTransition>
    </div>
  );
}
