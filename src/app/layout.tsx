import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { GoogleTag } from "@/components/analytics/google-tag";
import { SiteAnalytics } from "@/components/analytics/site-analytics";
import { AnalyticsWebVitals } from "@/components/analytics/web-vitals";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { createPageMetadata, siteMetadataBase } from "@/lib/seo";
import { site } from "@/lib/site-data";
import { getLocaleCopy } from "@/lib/locales";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const copy = getLocaleCopy("en");

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <SiteAnalytics />
        </Suspense>
        <AnalyticsWebVitals />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
      <GoogleTag />
    </html>
  );
}
