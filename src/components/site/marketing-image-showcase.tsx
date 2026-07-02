import Image from "next/image";

import { cn } from "@/lib/utils";

type MarketingImageShowcaseProps = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  priority?: boolean;
};

export function MarketingImageShowcase({
  src,
  alt,
  caption,
  className,
  priority = false,
}: MarketingImageShowcaseProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]",
        className,
      )}
    >
      <div className="relative aspect-[3/2] bg-zinc-950">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 42vw, 92vw"
          className="object-contain"
          priority={priority}
        />
      </div>
      <figcaption className="border-t border-zinc-200 bg-white px-5 py-3 text-xs leading-6 text-zinc-500">
        {caption}
      </figcaption>
    </figure>
  );
}
