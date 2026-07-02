import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { GoogleTag } from "@/components/analytics/google-tag";
import { SiteAnalytics } from "@/components/analytics/site-analytics";
import { AnalyticsWebVitals } from "@/components/analytics/web-vitals";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { WhatsAppFloatingButton } from "@/components/site/whatsapp-floating-button";
import { getPublicContactSurfaceConfig, getPublicDirectContactItem } from "@/lib/app-config";
import { createPageMetadata, siteMetadataBase } from "@/lib/seo";
import { site } from "@/lib/site-data";
import { getLocaleCopy } from "@/lib/locales";

const copy = getLocaleCopy("en");
const publicContactSurfaceConfig = getPublicContactSurfaceConfig();
const publicDirectContactItem = getPublicDirectContactItem();

export const metadata: Metadata = {
  ...createPageMetadata({
    title: copy.site.seoTitle,
    description: copy.site.description,
    path: "/",
  }),
  metadataBase: siteMetadataBase,
  applicationName: site.productFull,
  category: "Business automation software",
  creator: site.name,
  publisher: site.name,
  title: {
    default: `${copy.site.seoTitle} | ${site.productFull}`,
    template: "%s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <SiteAnalytics />
        </Suspense>
        <AnalyticsWebVitals />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <WhatsAppFloatingButton
          bookCallHref={publicContactSurfaceConfig.bookCallUrl}
          callHref={publicContactSurfaceConfig.callHref}
          demoHref="/demo"
          supportEmailHref={publicContactSurfaceConfig.supportEmailHref}
          whatsappHref={publicContactSurfaceConfig.whatsappHref}
        />
        <SiteFooter directContactItem={publicDirectContactItem} />
      </body>
      <GoogleTag />
    </html>
  );
}
