import assert from "node:assert/strict";
import test from "node:test";

import { metadata as aboutPageMetadata } from "@/app/about/page";
import { generateMetadata as generateCompareDetailMetadata } from "@/app/compare/[slug]/page";
import { metadata as compareHubMetadata } from "@/app/compare/page";
import { metadata as healthcareIndustryMetadata } from "@/app/industries/healthcare/page";
import { metadata as privacyPageMetadata } from "@/app/privacy/page";
import { metadata as proofExampleMetadata } from "@/app/proof/healthcare-front-desk-automation/page";
import sitemap, { indexableRoutes } from "@/app/sitemap";
import {
  buildAbsoluteUrl,
  buildMetadataTitle,
  createArticleMetadata,
  createExactPageMetadata,
  createPageMetadata,
  jsonLdSafeStringify,
  noIndexRobots,
  siteOrigin,
} from "@/lib/seo";

test("sitemap publishes each indexable route once on the production host", () => {
  const entries = sitemap();
  const urls = entries.map((entry) => entry.url);

  assert.equal(entries.length, indexableRoutes.length);
  assert.equal(new Set(urls).size, urls.length);
  assert.ok(urls.every((url) => url === siteOrigin || url.startsWith(`${siteOrigin}/`)));
  assert.ok(urls.includes(`${siteOrigin}/blog`));
  assert.ok(urls.includes(`${siteOrigin}/hi`));
  assert.ok(urls.includes(`${siteOrigin}/india/maharashtra/workflows/whatsapp-automation`));
});

test("json-ld payloads are sanitized before rendering", () => {
  const payload = {
    "@context": "https://schema.org",
    description: "<b>unsafe</b>",
  };

  assert.equal(
    jsonLdSafeStringify(payload),
    "{\"@context\":\"https://schema.org\",\"description\":\"\\u003cb>unsafe\\u003c/b>\"}",
  );
});

test("absolute url builder standardizes to www host", () => {
  assert.equal(buildAbsoluteUrl("/solutions/whatsapp-automation"), `${siteOrigin}/solutions/whatsapp-automation`);
});

test("metadata title builder appends the product brand once", () => {
  assert.equal(
    buildMetadataTitle("Workflow Automation"),
    "Workflow Automation | FLOW by Crescora AI",
  );
  assert.equal(
    buildMetadataTitle("Workflow Automation | FLOW by Crescora AI"),
    "Workflow Automation | FLOW by Crescora AI",
  );
  assert.equal(
    buildMetadataTitle("Appointment Booking Automation | FLOW by Crescora"),
    "Appointment Booking Automation | FLOW by Crescora AI",
  );
});

test("page metadata uses canonical paths and noindex robots when requested", () => {
  const metadata = createPageMetadata({
    title: "Draft Blog",
    description: "Internal editorial page.",
    path: "/blog",
    noIndex: true,
  });

  assert.equal(metadata.alternates?.canonical, "/blog");
  assert.deepEqual(metadata.robots, noIndexRobots);
  assert.equal(metadata.openGraph?.url, `${siteOrigin}/blog`);
});

test("exact page metadata preserves the supplied title while publishing self-canonical metadata", () => {
  const metadata = createExactPageMetadata({
    title: "FLOW vs Chatbots | Comparison",
    description: "Decision-stage comparison page.",
    path: "/compare/flow-vs-chatbots",
  });
  const openGraph = metadata.openGraph as { title?: string; url?: string };
  const twitter = metadata.twitter as { title?: string };

  assert.deepEqual(metadata.title, { absolute: "FLOW vs Chatbots | Comparison" });
  assert.equal(metadata.alternates?.canonical, "/compare/flow-vs-chatbots");
  assert.equal(openGraph.title, "FLOW vs Chatbots | Comparison");
  assert.equal(openGraph.url, `${siteOrigin}/compare/flow-vs-chatbots`);
  assert.equal(twitter.title, "FLOW vs Chatbots | Comparison");
});

test("representative route modules publish self-canonical metadata instead of inheriting the homepage graph", async () => {
  const compareDetailMetadata = await generateCompareDetailMetadata({
    params: Promise.resolve({ slug: "flow-vs-chatbot-builder" }),
  });

  const routeAssertions = [
    { metadata: aboutPageMetadata, canonical: "/about" },
    { metadata: compareHubMetadata, canonical: "/compare" },
    { metadata: healthcareIndustryMetadata, canonical: "/industries/healthcare" },
    { metadata: privacyPageMetadata, canonical: "/privacy" },
    { metadata: proofExampleMetadata, canonical: "/proof/healthcare-front-desk-automation" },
    { metadata: compareDetailMetadata, canonical: "/compare/flow-vs-chatbot-builder" },
  ];

  for (const route of routeAssertions) {
    const openGraph = route.metadata.openGraph as { url?: string } | undefined;

    assert.equal(route.metadata.alternates?.canonical, route.canonical);
    assert.equal(openGraph?.url, `${siteOrigin}${route.canonical}`);
  }
});

test("article metadata includes authorship and publication dates", () => {
  const metadata = createArticleMetadata({
    title: "Example article",
    description: "An example article.",
    path: "/blog/example-article",
    authors: ["Crescora Editorial Team"],
    publishedTime: "2026-06-01T00:00:00.000Z",
    modifiedTime: "2026-06-24T00:00:00.000Z",
    noIndex: true,
  });
  const articleOpenGraph = metadata.openGraph as {
    type?: string;
    publishedTime?: string;
    modifiedTime?: string;
  };

  assert.deepEqual(metadata.authors, [{ name: "Crescora Editorial Team" }]);
  assert.equal(articleOpenGraph.type, "article");
  assert.equal(articleOpenGraph.publishedTime, "2026-06-01T00:00:00.000Z");
  assert.equal(articleOpenGraph.modifiedTime, "2026-06-24T00:00:00.000Z");
});
