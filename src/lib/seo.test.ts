import assert from "node:assert/strict";
import test from "node:test";

import { metadata as aboutPageMetadata } from "@/app/about/page";
import BlogPage from "@/app/blog/page";
import { generateMetadata as generateBlogPostMetadata } from "@/app/blog/[slug]/page";
import { generateMetadata as generateCompareDetailMetadata } from "@/app/compare/[slug]/page";
import ComparePage, { metadata as compareHubMetadata } from "@/app/compare/page";
import { metadata as healthcareIndustryMetadata } from "@/app/industries/healthcare/page";
import HomePage from "@/app/page";
import PricingPage from "@/app/pricing/page";
import { metadata as privacyPageMetadata } from "@/app/privacy/page";
import ProofPage from "@/app/proof/page";
import { metadata as proofExampleMetadata } from "@/app/proof/healthcare-front-desk-automation/page";
import { generateMetadata as generateSolutionMetadata } from "@/app/solutions/[slug]/page";
import TemplatesHubPage from "@/app/templates/page";
import WorkflowsHubPage from "@/app/workflows/page";
import sitemap, { indexableRoutes } from "@/app/sitemap";
import { RevenueSolutionPage } from "@/components/site/revenue-solution-page";
import { renderToStaticMarkup } from "react-dom/server";
import { revenuePages } from "@/lib/revenue-pages";
import {
  buildAbsoluteUrl,
  buildFaqPageSchema,
  buildItemListSchema,
  buildMetadataTitle,
  buildPageSchema,
  buildRouteSocialImagePath,
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

test("route social image builder maps routes to metadata image endpoints", () => {
  assert.equal(buildRouteSocialImagePath("/"), "/opengraph-image");
  assert.equal(buildRouteSocialImagePath("/blog"), "/blog/opengraph-image");
  assert.equal(
    buildRouteSocialImagePath("/compare/flow-vs-chatbots"),
    "/compare/flow-vs-chatbots/opengraph-image",
  );
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

test("schema helpers publish FAQ, page, and item-list JSON-LD with stable URLs", () => {
  const faqSchema = buildFaqPageSchema([
    {
      question: "Can I start with one workflow?",
      answer: "Yes. Start with one high-impact workflow first.",
    },
  ]);
  const pageSchema = buildPageSchema({
    type: "ContactPage",
    name: "Contact Crescora",
    description: "Talk to the Crescora team.",
    path: "/contact",
  });
  const itemListSchema = buildItemListSchema("Comparison pages", [
    {
      name: "FLOW vs Chatbots",
      url: buildAbsoluteUrl("/compare/flow-vs-chatbots"),
      description: "Decision-stage comparison page.",
    },
  ]);

  assert.equal(faqSchema["@type"], "FAQPage");
  assert.equal(faqSchema.mainEntity[0]?.name, "Can I start with one workflow?");
  assert.equal(faqSchema.mainEntity[0]?.acceptedAnswer.text, "Yes. Start with one high-impact workflow first.");

  assert.equal(pageSchema["@type"], "ContactPage");
  assert.equal(pageSchema.url, `${siteOrigin}/contact`);

  assert.equal(itemListSchema["@type"], "ItemList");
  assert.equal(itemListSchema.itemListElement[0]?.url, `${siteOrigin}/compare/flow-vs-chatbots`);
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

test("marketing route metadata publishes route-specific social image urls", async () => {
  const solutionMetadata = await generateSolutionMetadata({
    params: Promise.resolve({ slug: "whatsapp-automation" }),
  });
  const compareDetailMetadata = await generateCompareDetailMetadata({
    params: Promise.resolve({ slug: "flow-vs-chatbot-builder" }),
  });
  const blogMetadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "how-whatsapp-automation-helps-small-businesses-in-india" }),
  });

  const solutionOpenGraph = solutionMetadata.openGraph as { images?: Array<{ url?: string } | string> } | undefined;
  const compareOpenGraph = compareDetailMetadata.openGraph as { images?: Array<{ url?: string } | string> } | undefined;
  const blogOpenGraph = blogMetadata.openGraph as { images?: Array<{ url?: string } | string> } | undefined;
  const blogTwitter = blogMetadata.twitter as { images?: string[] } | undefined;

  assert.deepEqual(solutionMetadata.alternates?.canonical, "/solutions/whatsapp-automation");
  assert.equal(
    typeof solutionOpenGraph?.images?.[0] === "string"
      ? solutionOpenGraph?.images?.[0]
      : solutionOpenGraph?.images?.[0]?.url,
    `${siteOrigin}/solutions/whatsapp-automation/opengraph-image`,
  );
  assert.equal(
    typeof compareOpenGraph?.images?.[0] === "string"
      ? compareOpenGraph?.images?.[0]
      : compareOpenGraph?.images?.[0]?.url,
    `${siteOrigin}/compare/flow-vs-chatbot-builder/opengraph-image`,
  );
  assert.equal(
    typeof blogOpenGraph?.images?.[0] === "string"
      ? blogOpenGraph?.images?.[0]
      : blogOpenGraph?.images?.[0]?.url,
    `${siteOrigin}/blog/how-whatsapp-automation-helps-small-businesses-in-india/opengraph-image`,
  );
  assert.equal(
    blogTwitter?.images?.[0],
    `${siteOrigin}/blog/how-whatsapp-automation-helps-small-businesses-in-india/opengraph-image`,
  );
});

test("public hub copy matches the indexable SEO strategy", () => {
  const blogHtml = renderToStaticMarkup(BlogPage());
  const workflowsHtml = renderToStaticMarkup(WorkflowsHubPage());
  const templatesHtml = renderToStaticMarkup(TemplatesHubPage());

  assert.match(blogHtml, /Articles for operators and buyers/);
  assert.doesNotMatch(blogHtml, /draft articles|search index/i);

  assert.match(workflowsHtml, /Workflow references for common automation paths/);
  assert.doesNotMatch(workflowsHtml, /internal linking|primary index targets/i);

  assert.match(templatesHtml, /launch patterns, handoff logic, and automation setup paths/i);
  assert.doesNotMatch(templatesHtml, /no longer compete|route commercial search intent/i);
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

test("representative pages emit FAQ and discovery JSON-LD on indexable commercial routes", () => {
  const homeHtml = renderToStaticMarkup(HomePage());
  const pricingHtml = renderToStaticMarkup(PricingPage());
  const compareHtml = renderToStaticMarkup(ComparePage());
  const proofHtml = renderToStaticMarkup(ProofPage());
  const solutionHtml = renderToStaticMarkup(
    RevenueSolutionPage({
      page: revenuePages[0]!,
      breadcrumbs: [
        { name: "Home", href: buildAbsoluteUrl("/") },
        { name: "Solutions", href: buildAbsoluteUrl("/solutions") },
        { name: revenuePages[0]!.title, href: buildAbsoluteUrl(`/solutions/${revenuePages[0]!.slug}`) },
      ],
    }),
  );

  assert.match(homeHtml, /"@type":"FAQPage"/);

  assert.match(pricingHtml, /"@type":"FAQPage"/);
  assert.match(pricingHtml, /"@type":"BreadcrumbList"/);
  assert.match(pricingHtml, /"@type":"ItemList"/);

  assert.match(compareHtml, /"@type":"CollectionPage"/);
  assert.match(compareHtml, /"@type":"ItemList"/);

  assert.match(proofHtml, /"@type":"CollectionPage"/);
  assert.match(proofHtml, /"@type":"ItemList"/);

  assert.match(solutionHtml, /"@type":"FAQPage"/);
});
