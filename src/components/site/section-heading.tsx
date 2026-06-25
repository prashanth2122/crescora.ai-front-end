import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
      style={{ animation: "rise-up 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both" }}
    >
      {eyebrow ? (
        <p className={cn("mb-3 text-xs font-semibold uppercase tracking-[0.3em]", tone === "inverse" ? "text-white/50" : "text-zinc-500")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("text-3xl font-semibold tracking-tight sm:text-4xl", tone === "inverse" ? "text-white" : "text-zinc-950")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-8 sm:text-lg", tone === "inverse" ? "text-white/70" : "text-zinc-600")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
