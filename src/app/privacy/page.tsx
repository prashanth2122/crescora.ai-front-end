import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = siteContent.legal.privacy.metadata;

export default function PrivacyPage() {
  const page = siteContent.legal.privacy;

  return (
    <PageShell>
      <PageHero eyebrow={page.hero.eyebrow} title={page.hero.title} description={page.hero.description} />
      <section className="mx-auto w-full max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card className="border-zinc-200 bg-white">
          <CardContent className="space-y-4 p-6 text-sm leading-7 text-zinc-600 sm:p-8">
            {page.body.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
