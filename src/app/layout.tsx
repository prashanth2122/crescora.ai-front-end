import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { site } from "@/lib/site-data";
import { getLocaleCopy, resolveLocaleFromHeaders } from "@/lib/locales";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const locale = resolveLocaleFromHeaders(requestHeaders);
  const copy = getLocaleCopy(locale);

  return {
    metadataBase: new URL("https://crescora.ai"),
    title: {
      default: `${site.name} | ${copy.site.seoTitle}`,
      template: `%s | ${site.name}`,
    },
    description: copy.site.description,
    openGraph: {
      title: `${site.name} | ${copy.site.seoTitle}`,
      description: copy.site.description,
      type: "website",
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} | ${copy.site.seoTitle}`,
      description: copy.site.description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = resolveLocaleFromHeaders(requestHeaders);

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
