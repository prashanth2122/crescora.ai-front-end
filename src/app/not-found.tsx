import Link from "next/link";

import { siteContent } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-3xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <Card className="w-full border-zinc-200 bg-white p-10 text-center shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">{siteContent.notFound.title}</h1>
        <p className="mt-4 text-base leading-8 text-zinc-600">{siteContent.notFound.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full bg-zinc-950 text-white hover:bg-zinc-800">
            <Link href={siteContent.notFound.primaryCta.href}>{siteContent.notFound.primaryCta.label}</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href={siteContent.notFound.secondaryCta.href}>{siteContent.notFound.secondaryCta.label}</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
