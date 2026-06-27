import assert from "node:assert/strict";
import test from "node:test";

import { metadata as aboutPageMetadata } from "@/app/about/page";
import BlogPage from "@/app/blog/page";
import BlogPostPage, { generateMetadata as generateBlogPostMetadata } from "@/app/blog/[slug]/page";
import { generateMetadata as generateCompareDetailMetadata } from "@/app/compare/[slug]/page";
import ComparePage, { metadata as compareHubMetadata } from "@/app/compare/page";
import { metadata as healthcareIndustryMetadata } from "@/app/industries/healthcare/page";
import HomePage from "@/app/page";
import PricingPage from "@/app/pricing/page";
import { metadata as privacyPageMetadata } from "@/app/privacy/page";
import ProofPage from "@/app/proof/page";
import { metadata as proofExampleMetadata } from "@/app/proof/healthcare-front-desk-automation/page";
import { generateMetadata as generateSolutionMetadata } from "@/app/solutions/[slug]/page";
import TemplateDetailPage, { generateMetadata as generateTemplateDetailMetadata } from "@/app/templates/[template]/page";
import TemplatesHubPage from "@/app/templates/page";
import UseCaseDetailPage, { generateMetadata as generateUseCaseDetailMetadata } from "@/app/use-cases/[slug]/page";
import WorkflowDetailPage, { generateMetadata as generateWorkflowMetadata } from "@/app/workflows/[workflow]/page";
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
  assert.ok(urls.includes(`${siteOrigin}/compare/yellow-ai-alternative`));
  assert.ok(urls.includes(`${siteOrigin}/compare/zendesk-ai-alternative`));
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
  assert.equal(
    buildRouteSocialImagePath("/compare/yellow-ai-alternative"),
    "/compare/yellow-ai-alternative/opengraph-image",
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
    params: Promise.resolve({ slug: "yellow-ai-alternative" }),
  });

  const routeAssertions = [
    { metadata: aboutPageMetadata, canonical: "/about" },
    { metadata: compareHubMetadata, canonical: "/compare" },
    { metadata: healthcareIndustryMetadata, canonical: "/industries/healthcare" },
    { metadata: privacyPageMetadata, canonical: "/privacy" },
    { metadata: proofExampleMetadata, canonical: "/proof/healthcare-front-desk-automation" },
    { metadata: compareDetailMetadata, canonical: "/compare/yellow-ai-alternative" },
  ];

  for (const route of routeAssertions) {
    const openGraph = route.metadata.openGraph as { url?: string } | undefined;

    assert.equal(route.metadata.alternates?.canonical, route.canonical);
    assert.equal(openGraph?.url, `${siteOrigin}${route.canonical}`);
  }
});

test("whatsapp template detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "whatsapp-automation-template" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "whatsapp-automation-template" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "WhatsApp Automation Template for Leads, Bookings, Payments, Support, and Follow-Ups | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a WhatsApp automation template for lead capture, appointment booking, reminders, payment follow-ups, document requests, support routing, and human handover with Crescora FLOW.",
  );
  assert.match(html, /Launch a WhatsApp automation template for leads, bookings, reminders, support, and follow-ups\./);
  assert.match(html, /Book WhatsApp Template Demo/);
  assert.match(html, /What this WhatsApp automation template includes/);
  assert.match(html, /What changes when FLOW runs the workflow/);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show|screenshots|handoff logic/i);
});

test("clinic template detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "clinic-appointment-bot-template" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "clinic-appointment-bot-template" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Clinic Appointment Bot Template for Booking, Reminders, Fees, and Patient Handover | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a clinic appointment booking template with Crescora FLOW. Automate patient enquiries, doctor selection, slot booking, reminders, consultation fee follow-up, rescheduling, and staff handover.",
  );
  assert.match(html, /Launch a clinic appointment booking template for patient enquiries, reminders, and staff handover\./);
  assert.match(html, /Book Clinic Template Demo/);
  assert.match(html, /What this clinic appointment template includes/);
  assert.match(html, /Important clinic workflow note/);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show|screenshots|handoff logic/i);
});

test("payment reminder template detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "payment-reminder-template" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "payment-reminder-template" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Payment Reminder Template for Collections, Failed Payments, WhatsApp Follow-Ups, and Billing Handover | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a payment reminder template with Crescora FLOW. Automate payment reminders, payment links, failed-payment recovery, reference capture, overdue escalation, and billing handover.",
  );
  assert.match(html, /Launch a payment reminder template for collections, failed payments, and follow-ups\./);
  assert.match(html, /Book Payment Template Demo/);
  assert.match(html, /What this payment reminder template includes/);
  assert.match(html, /Important setup note/);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show/i);
});

test("document collection template detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "document-collection-template" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "document-collection-template" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Document Collection Template for KYC, Intake, Missing Files, Review, and Follow-Ups | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a document collection template with Crescora FLOW. Automate KYC intake, missing-document reminders, upload tracking, review routing, approval workflows, and customer follow-ups.",
  );
  assert.match(
    html,
    /Launch a document collection template for KYC, intake, missing files, and review workflows\./,
  );
  assert.match(html, /Book Document Template Demo/);
  assert.match(html, /What this document collection template includes/);
  assert.match(html, /Built for document workflows with privacy and control/);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show/i);
});

test("customer support bot template detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "customer-support-bot-template" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "customer-support-bot-template" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Customer Support Bot Template for FAQ, Issue Triage, Human Handover, and Support Visibility | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a customer support bot template with Crescora FLOW. Automate FAQ resolution, issue triage, support routing, human handover, status updates, and support analytics.",
  );
  assert.match(
    html,
    /Launch a customer support bot template for FAQ resolution, issue triage, and human handover\./,
  );
  assert.match(html, /Book Support Template Demo/);
  assert.match(html, /What this customer support template includes/);
  assert.match(html, /Open cases, escalated cases, repeated questions, and unresolved conversations\./);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show|Watch demo/i);
});

test("knowledge assistant template detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "rag-knowledge-assistant-template" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "rag-knowledge-assistant-template" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Knowledge Assistant Template for RAG, FAQ Automation, Grounded Answers, and Human Handover | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a knowledge assistant template with Crescora FLOW. Answer FAQs from approved documents, detect knowledge gaps, avoid unsupported AI answers, and hand off low-confidence questions to support teams.",
  );
  assert.match(
    html,
    /Launch a knowledge assistant template for approved answers, FAQ automation, and human handover\./,
  );
  assert.match(html, /Book Knowledge Assistant Demo/);
  assert.match(html, /What this knowledge assistant template includes/);
  assert.match(html, /Start with one knowledge area\. Prove answer quality\./);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show|Try the use case/i);
});

test("service business booking template detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "service-business-booking-template" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "service-business-booking-template" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Service Business Booking Template for Appointments, Reminders, Payments, Staff Assignment, and Follow-Ups | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a service business booking template with Crescora FLOW. Automate customer enquiries, service booking, reminders, payment follow-ups, staff handover, service updates, feedback, and repeat bookings.",
  );
  assert.match(
    html,
    /Launch a service booking template for enquiries, appointments, reminders, payments, and follow-ups\./,
  );
  assert.match(html, /Book Service Template Demo/);
  assert.match(html, /What this service booking template includes/);
  assert.match(html, /Start with one booking workflow\. Prove value\./);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show|See pricing/i);
});

test("billing and collections template detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "billing-and-collections-template" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "billing-and-collections-template" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Billing and Collections Template for Payment Reminders, Failed Payments, Disputes, and Follow-Ups | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a billing and collections template with Crescora FLOW. Automate payment reminders, invoice follow-ups, failed-payment recovery, receipt capture, overdue escalation, dispute routing, and billing handover.",
  );
  assert.match(
    html,
    /Launch a billing and collections template for reminders, payment follow-ups, overdue cases, and exception handover\./,
  );
  assert.match(html, /Book Billing Template Demo/);
  assert.match(html, /What this billing and collections template includes/);
  assert.match(html, /Built for billing workflows with control/);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show|Talk to sales/i);
});

test("observability dashboard template detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "observability-dashboard-template" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "observability-dashboard-template" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Conversation Observability Dashboard Template for Workflow Analytics, Handover Tracking, SLA Visibility, and Customer Outcomes | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a conversation observability dashboard template with Crescora FLOW. Track workflow stages, handovers, SLA risk, drop-offs, follow-ups, escalations, and customer outcomes.",
  );
  assert.match(
    html,
    /Launch a conversation observability dashboard template for workflow visibility, leakage tracking, and outcome reporting\./,
  );
  assert.match(html, /Book Observability Template Demo/);
  assert.match(html, /What this observability dashboard template includes/);
  assert.match(html, /Built for observability with clean data and privacy control/);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show|See dashboard/i);
});

test("hospital appointment booking flow detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "hospital-appointment-booking-flow" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "hospital-appointment-booking-flow" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Hospital Appointment Booking Flow for OPD, Reminders, Payments, and Patient Handover | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a hospital appointment booking flow with Crescora FLOW. Automate OPD enquiries, patient intake, doctor selection, slot booking, reminders, consultation fee follow-up, rescheduling, and staff handover.",
  );
  assert.match(
    html,
    /Launch a hospital appointment booking flow for OPD visits, reminders, payments, and staff handover\./,
  );
  assert.match(html, /Book Hospital Workflow Demo/);
  assert.match(html, /What this hospital appointment flow includes/);
  assert.match(html, /Important hospital workflow note/);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show|Use this automation for your business/i);
});

test("real estate lead follow-up flow detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "real-estate-lead-followup-flow" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "real-estate-lead-followup-flow" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Real Estate Lead Follow-Up Flow for Property Enquiries, Site Visits, Sales Handover, and Reminders | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a real estate lead follow-up flow with Crescora FLOW. Capture property enquiries, qualify buyers, share projects, book site visits, assign sales reps, and automate follow-ups.",
  );
  assert.match(
    html,
    /Launch a real estate lead follow-up flow for property enquiries, site visits, and sales handover\./,
  );
  assert.match(html, /Book Real Estate Follow-Up Demo/);
  assert.match(html, /What this real estate follow-up flow includes/);
  assert.match(html, /Start with lead qualification and site visit follow-up\. Prove value\./);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show|Use this automation for your business/i);
});

test("customer support faq flow detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "customer-support-faq-flow" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "customer-support-faq-flow" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Customer Support FAQ Flow for Approved Answers, Issue Triage, Human Handover, and Support Analytics | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a customer support FAQ flow with Crescora FLOW. Automate approved answers, repeated questions, issue triage, fallback handling, human escalation, status updates, and support visibility.",
  );
  assert.match(
    html,
    /Launch a customer support FAQ flow for approved answers, issue triage, and human escalation\./,
  );
  assert.match(html, /Book Support FAQ Flow Demo/);
  assert.match(html, /What this customer support FAQ flow includes/);
  assert.match(html, /FLOW capabilities used in this flow/);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show|Use this automation for your business/i);
});

test("payment reminder flow detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "payment-reminder-flow" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "payment-reminder-flow" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Payment Reminder Flow for Collections, Failed Payments, Overdue Escalation, and Billing Follow-Ups | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a payment reminder flow with Crescora FLOW. Automate payment reminders, payment links, failed-payment recovery, receipt capture, overdue escalation, billing handover, and payment status tracking.",
  );
  assert.match(
    html,
    /Launch a payment reminder flow for pending collections, failed payments, overdue escalation, and status updates\./,
  );
  assert.match(html, /Book Payment Reminder Flow Demo/);
  assert.match(html, /What this payment reminder flow includes/);
  assert.match(html, /FLOW capabilities used in this flow/);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show|Use this automation for your business/i);
});

test("lab report notification flow detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateTemplateDetailMetadata({
    params: Promise.resolve({ template: "lab-report-notification-flow" }),
  });
  const html = renderToStaticMarkup(
    await TemplateDetailPage({
      params: Promise.resolve({ template: "lab-report-notification-flow" }),
    }),
  );

  assert.deepEqual(metadata.title, {
    absolute:
      "Lab Report Notification Flow for Report-Ready Alerts, Secure Access, Receipt Confirmation, and Patient Handover | Crescora FLOW",
  });
  assert.equal(
    metadata.description,
    "Launch a lab report notification flow with Crescora FLOW. Notify patients when reports are ready, verify patient details, share secure access instructions, confirm receipt, handle failed delivery, and route report support cases to staff.",
  );
  assert.match(
    html,
    /Launch a lab report notification flow for report-ready alerts, secure access, and patient confirmation\./,
  );
  assert.match(html, /Book Lab Report Flow Demo/);
  assert.match(html, /What this lab report notification flow includes/);
  assert.match(html, /Important healthcare privacy note/);
  assert.match(html, /FLOW capabilities used in this flow/);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /BOFU|What the template page should show|Use this automation for your business/i);
});

test("lead capture use-case detail page publishes buyer-facing copy and exact metadata", async () => {
  const metadata = await generateUseCaseDetailMetadata({
    params: Promise.resolve({ slug: "lead-capture-qualification" }),
  });
  const html = renderToStaticMarkup(
    await UseCaseDetailPage({
      params: Promise.resolve({ slug: "lead-capture-qualification" }),
    }),
  );

  assert.equal(
    metadata.title,
    "Lead Capture and Qualification Automation for WhatsApp, Website, Ads, Sales Routing, and Follow-Ups | FLOW by Crescora AI",
  );
  assert.equal(
    metadata.description,
    "Capture enquiries and qualify leads automatically with Crescora FLOW. Convert WhatsApp, website, ad, and landing page enquiries into structured leads with routing, follow-ups, CRM updates, and outcome tracking.",
  );
  assert.match(html, /Capture enquiries and qualify leads automatically\./);
  assert.match(html, /Book Lead Capture Demo/);
  assert.match(html, /What FLOW captures before your team steps in/);
  assert.match(html, /Lead capture and qualification path/);
  assert.match(html, /Frequently asked questions/);
  assert.doesNotMatch(html, /Request Scope Call|A practical rollout path for this workflow\./i);
});

test("marketing route metadata publishes route-specific social image urls", async () => {
  const solutionMetadata = await generateSolutionMetadata({
    params: Promise.resolve({ slug: "whatsapp-automation" }),
  });
  const compareDetailMetadata = await generateCompareDetailMetadata({
    params: Promise.resolve({ slug: "yellow-ai-alternative" }),
  });
  const blogMetadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "how-whatsapp-automation-helps-small-businesses-in-india" }),
  });
  const workflowMetadata = await generateWorkflowMetadata({
    params: Promise.resolve({ workflow: "appointment-booking" }),
  });
  const remindersMetadata = await generateWorkflowMetadata({
    params: Promise.resolve({ workflow: "reminders" }),
  });
  const customerSupportMetadata = await generateWorkflowMetadata({
    params: Promise.resolve({ workflow: "customer-support" }),
  });
  const knowledgeAssistantMetadata = await generateWorkflowMetadata({
    params: Promise.resolve({ workflow: "rag-knowledge-assistant" }),
  });
  const handoffMetadata = await generateWorkflowMetadata({
    params: Promise.resolve({ workflow: "human-handoff" }),
  });
  const billingMetadata = await generateWorkflowMetadata({
    params: Promise.resolve({ workflow: "billing" }),
  });

  const solutionOpenGraph = solutionMetadata.openGraph as { title?: string; images?: Array<{ url?: string } | string> } | undefined;
  const solutionTwitter = solutionMetadata.twitter as { title?: string } | undefined;
  const compareOpenGraph = compareDetailMetadata.openGraph as { images?: Array<{ url?: string } | string> } | undefined;
  const blogOpenGraph = blogMetadata.openGraph as { images?: Array<{ url?: string } | string> } | undefined;
  const blogTwitter = blogMetadata.twitter as { images?: string[] } | undefined;
  const workflowOpenGraph = workflowMetadata.openGraph as { title?: string; url?: string } | undefined;
  const remindersOpenGraph = remindersMetadata.openGraph as { title?: string; url?: string } | undefined;
  const customerSupportOpenGraph = customerSupportMetadata.openGraph as { title?: string; url?: string } | undefined;
  const knowledgeAssistantOpenGraph = knowledgeAssistantMetadata.openGraph as { title?: string; url?: string } | undefined;
  const handoffOpenGraph = handoffMetadata.openGraph as { title?: string; url?: string } | undefined;
  const billingOpenGraph = billingMetadata.openGraph as { title?: string; url?: string } | undefined;

  assert.deepEqual(solutionMetadata.alternates?.canonical, "/solutions/whatsapp-automation");
  assert.deepEqual(solutionMetadata.title, {
    absolute: "WhatsApp Automation Workflows for Sales, Support, Booking, Payments, and Follow-Ups | Crescora FLOW",
  });
  assert.equal(
    solutionMetadata.description,
    "Automate WhatsApp enquiries, lead qualification, appointment booking, reminders, support routing, payment follow-ups, CRM updates, and human handover with Crescora FLOW.",
  );
  assert.equal(solutionOpenGraph?.title, "WhatsApp Automation Workflows for Sales, Support, Booking, Payments, and Follow-Ups | Crescora FLOW");
  assert.equal(solutionTwitter?.title, "WhatsApp Automation Workflows for Sales, Support, Booking, Payments, and Follow-Ups | Crescora FLOW");
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
    `${siteOrigin}/compare/yellow-ai-alternative/opengraph-image`,
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
  assert.equal(
    blogMetadata.title,
    "WhatsApp Automation for Small Businesses in India: Leads, Bookings, Payments, Support, and Follow-Ups | Crescora FLOW",
  );
  assert.equal(
    blogMetadata.description,
    "Learn how WhatsApp automation helps small businesses in India capture leads, book appointments, send reminders, follow up on payments, collect documents, route support, and grow faster with Crescora FLOW.",
  );
  assert.deepEqual(workflowMetadata.title, {
    absolute: "Appointment Booking Automation for WhatsApp, Web, Reminders, Rescheduling, and Follow-Ups | Crescora FLOW",
  });
  assert.equal(
    workflowMetadata.description,
    "Automate appointment booking, slot confirmation, reminders, rescheduling, payment follow-ups, staff handover, and booking status tracking with Crescora FLOW.",
  );
  assert.equal(workflowMetadata.alternates?.canonical, "/workflows/appointment-booking");
  assert.equal(workflowOpenGraph?.title, "Appointment Booking Automation for WhatsApp, Web, Reminders, Rescheduling, and Follow-Ups | Crescora FLOW");
  assert.equal(workflowOpenGraph?.url, `${siteOrigin}/workflows/appointment-booking`);
  assert.deepEqual(remindersMetadata.title, {
    absolute: "Reminder Automation Software for Follow-Ups, Appointments, Payments, Documents, and Renewals | Crescora FLOW",
  });
  assert.equal(
    remindersMetadata.description,
    "Automate reminders for appointments, payments, missing documents, callbacks, renewals, no-shows, and follow-ups with Crescora FLOW. Schedule, track, retry, and escalate reminder workflows.",
  );
  assert.equal(remindersMetadata.alternates?.canonical, "/workflows/reminders");
  assert.equal(remindersOpenGraph?.title, "Reminder Automation Software for Follow-Ups, Appointments, Payments, Documents, and Renewals | Crescora FLOW");
  assert.equal(remindersOpenGraph?.url, `${siteOrigin}/workflows/reminders`);
  assert.deepEqual(customerSupportMetadata.title, {
    absolute: "Customer Support Automation for FAQs, Issue Triage, Ticket Routing, Human Handover, and Analytics | Crescora FLOW",
  });
  assert.equal(
    customerSupportMetadata.description,
    "Automate customer support workflows with FAQ resolution, issue triage, ticket creation, priority routing, human handover, status updates, queue visibility, and support analytics using Crescora FLOW.",
  );
  assert.equal(customerSupportMetadata.alternates?.canonical, "/workflows/customer-support");
  assert.equal(customerSupportOpenGraph?.title, "Customer Support Automation for FAQs, Issue Triage, Ticket Routing, Human Handover, and Analytics | Crescora FLOW");
  assert.equal(customerSupportOpenGraph?.url, `${siteOrigin}/workflows/customer-support`);
  assert.deepEqual(knowledgeAssistantMetadata.title, {
    absolute: "RAG Knowledge Assistant for Support Teams, FAQ Automation, Grounded Answers, and Human Handover | Crescora FLOW",
  });
  assert.equal(
    knowledgeAssistantMetadata.description,
    "Build a RAG knowledge assistant with Crescora FLOW. Answer customer FAQs from approved knowledge, detect gaps, avoid unsupported AI responses, and hand off low-confidence questions to support teams.",
  );
  assert.equal(knowledgeAssistantMetadata.alternates?.canonical, "/workflows/rag-knowledge-assistant");
  assert.equal(knowledgeAssistantOpenGraph?.title, "RAG Knowledge Assistant for Support Teams, FAQ Automation, Grounded Answers, and Human Handover | Crescora FLOW");
  assert.equal(knowledgeAssistantOpenGraph?.url, `${siteOrigin}/workflows/rag-knowledge-assistant`);
  assert.deepEqual(handoffMetadata.title, {
    absolute: "Human Handoff Automation for Escalation, Context Transfer, SLA Visibility, and Support Routing | Crescora FLOW",
  });
  assert.equal(
    handoffMetadata.description,
    "Automate human handoff workflows with context-rich escalation, queue assignment, SLA visibility, support routing, sales handover, billing escalation, and conversation tracking using Crescora FLOW.",
  );
  assert.equal(handoffMetadata.alternates?.canonical, "/workflows/human-handoff");
  assert.equal(handoffOpenGraph?.title, "Human Handoff Automation for Escalation, Context Transfer, SLA Visibility, and Support Routing | Crescora FLOW");
  assert.equal(handoffOpenGraph?.url, `${siteOrigin}/workflows/human-handoff`);
  assert.deepEqual(billingMetadata.title, {
    absolute: "Billing and Collections Automation for Payment Reminders, Failed Payments, Disputes, and Follow-Ups | Crescora FLOW",
  });
  assert.equal(
    billingMetadata.description,
    "Automate billing reminders, payment links, collections follow-ups, failed-payment recovery, receipt capture, overdue escalation, dispute handover, and payment status tracking with Crescora FLOW.",
  );
  assert.equal(billingMetadata.alternates?.canonical, "/workflows/billing");
  assert.equal(billingOpenGraph?.title, "Billing and Collections Automation for Payment Reminders, Failed Payments, Disputes, and Follow-Ups | Crescora FLOW");
  assert.equal(billingOpenGraph?.url, `${siteOrigin}/workflows/billing`);
});

test("whatsapp small business blog post renders public article content instead of internal SEO planning copy", async () => {
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "how-whatsapp-automation-helps-small-businesses-in-india" }),
    }),
  );

  assert.match(
    html,
    /How WhatsApp automation helps small businesses in India capture leads, book appointments, and follow up faster\./,
  );
  assert.match(html, /Table of contents/);
  assert.match(html, /7 WhatsApp automation workflows small businesses should launch first/);
  assert.match(html, /Example WhatsApp automation journey/);
  assert.match(html, /Before WhatsApp automation vs after Crescora FLOW/);
  assert.match(html, /Frequently asked questions/);
  assert.match(html, /Book WhatsApp Automation Demo/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Open page/i,
  );
});

test("healthcare chatbot blog post renders public hospital content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "best-ai-chatbot-use-cases-for-hospitals-and-clinics" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "best-ai-chatbot-use-cases-for-hospitals-and-clinics" }),
    }),
  );

  assert.equal(metadata.title, "Best AI Chatbot Use Cases for Hospitals and Clinics in India | FLOW");
  assert.equal(
    metadata.description,
    "Explore the best AI chatbot use cases for hospitals and clinics in India, including appointment booking, patient enquiries, lab report updates, reminders, payments, documents, and human handoff.",
  );
  assert.match(html, /Best AI chatbot use cases for hospitals and clinics in India/);
  assert.match(html, /Why hospitals and clinics need AI chatbot automation/);
  assert.match(html, /Best AI chatbot use cases for hospitals and clinics/);
  assert.match(html, /AI chatbot vs workflow automation for hospitals/);
  assert.match(html, /Suggested hospital automation rollout plan/);
  assert.match(html, /Frequently asked questions/);
  assert.match(html, /Book Healthcare Demo/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Open page/i,
  );
});

test("whatsapp appointment booking blog post renders public booking content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "how-to-automate-appointment-booking-using-whatsapp" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "how-to-automate-appointment-booking-using-whatsapp" }),
    }),
  );

  assert.equal(
    metadata.title,
    "WhatsApp Appointment Booking Automation for Clinics, Services, Salons, and Small Businesses | Crescora FLOW",
  );
  assert.equal(
    metadata.description,
    "Learn how WhatsApp appointment booking automation helps businesses capture enquiries, confirm slots, send reminders, support rescheduling, follow up on payments, and reduce manual coordination with Crescora FLOW.",
  );
  assert.match(html, /How to automate appointment booking using WhatsApp/);
  assert.match(html, /Why manual appointment booking creates delays/);
  assert.match(html, /Appointment booking workflow example/);
  assert.match(html, /Before and after appointment automation/);
  assert.match(html, /Who can use WhatsApp appointment booking automation\?/);
  assert.match(html, /What to measure after automating appointment booking/);
  assert.match(html, /Book WhatsApp Booking Demo/);
  assert.match(html, /Discuss My Appointment Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Open page/i,
  );
});

test("real estate lead follow-up blog post renders public property workflow content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "how-real-estate-businesses-can-automate-lead-follow-ups" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "how-real-estate-businesses-can-automate-lead-follow-ups" }),
    }),
  );

  assert.equal(
    metadata.title,
    "How Real Estate Businesses Can Automate Lead Follow-Ups and Book More Site Visits | Crescora FLOW",
  );
  assert.equal(
    metadata.description,
    "Learn how real estate businesses can automate lead follow-ups, buyer qualification, project sharing, site visit booking, sales rep handover, and post-visit reminders with Crescora FLOW.",
  );
  assert.match(html, /How real estate businesses can automate lead follow-ups and book more site visits/);
  assert.match(html, /What is real estate lead follow-up automation\?/);
  assert.match(html, /Why real estate leads get missed/);
  assert.match(html, /Real estate lead follow-up workflow example/);
  assert.match(html, /How to automate project sharing/);
  assert.match(html, /How to automate site visit booking/);
  assert.match(html, /How to assign leads to sales reps/);
  assert.match(html, /Post-site-visit follow-up automation/);
  assert.match(html, /Best real estate workflows to automate first/);
  assert.match(html, /How Crescora FLOW helps real estate teams/);
  assert.match(html, /Book Real Estate Automation Demo/);
  assert.match(html, /Map My Sales Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Open page/i,
  );
});

test("customer support automation blog post renders public support workflow content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "customer-support-automation-ideas-for-indian-businesses" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "customer-support-automation-ideas-for-indian-businesses" }),
    }),
  );

  assert.equal(metadata.title, "Customer Support Automation Ideas for Indian Businesses | Crescora FLOW");
  assert.equal(
    metadata.description,
    "Explore customer support automation ideas for Indian businesses. Automate FAQs, WhatsApp support, ticket routing, payment queries, document follow-ups, complaint escalation, human handover, and support analytics with Crescora FLOW.",
  );
  assert.match(html, /Customer support automation ideas for Indian businesses/);
  assert.match(html, /What is customer support automation\?/);
  assert.match(html, /Why Indian businesses need support automation/);
  assert.match(html, /Best customer support automation ideas/);
  assert.match(html, /FAQ automation for repeated questions/);
  assert.match(html, /WhatsApp support automation/);
  assert.match(html, /Ticket creation and escalation workflows/);
  assert.match(html, /Payment, order, and appointment support/);
  assert.match(html, /Human handover with full context/);
  assert.match(html, /Support automation by industry/);
  assert.match(html, /How Crescora FLOW helps support teams/);
  assert.match(html, /Before and after support automation/);
  assert.match(html, /Book Support Automation Demo/);
  assert.match(html, /Map My Support Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Open page/i,
  );
});

test("clinic front desk automation blog post renders public clinic workflow content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "how-clinics-can-reduce-front-desk-calls-with-automation" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "how-clinics-can-reduce-front-desk-calls-with-automation" }),
    }),
  );

  assert.equal(metadata.title, "How Clinics Can Reduce Front Desk Calls With Automation | Crescora FLOW");
  assert.equal(
    metadata.description,
    "Learn how clinics can reduce front desk calls with automation. Automate appointment booking, doctor availability questions, reminders, rescheduling, payments, reports, documents, FAQs, and human handover with Crescora FLOW.",
  );
  assert.match(html, /How clinics can reduce front desk calls with automation/);
  assert.match(html, /What is clinic front desk automation\?/);
  assert.match(html, /Why clinics receive too many front desk calls/);
  assert.match(html, /Best clinic workflows to automate first/);
  assert.match(html, /Appointment booking automation/);
  assert.match(html, /Doctor availability enquiry automation/);
  assert.match(html, /Reminder and rescheduling automation/);
  assert.match(html, /Fee, payment, and billing support automation/);
  assert.match(html, /Lab report and document support automation/);
  assert.match(html, /Human handover for sensitive cases/);
  assert.match(html, /How Crescora FLOW helps clinics/);
  assert.match(html, /Before and after clinic automation/);
  assert.match(html, /Book Clinic Automation Demo/);
  assert.match(html, /Map My Clinic Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Open page/i,
  );
});

test("no-code chatbot automation blog post renders public workflow education content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "what-is-no-code-chatbot-automation" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "what-is-no-code-chatbot-automation" }),
    }),
  );

  assert.equal(
    metadata.title,
    "What Is No-Code Chatbot Automation? Business Workflow Guide | Crescora FLOW",
  );
  assert.equal(
    metadata.description,
    "Learn what no-code chatbot automation is and how businesses use it to automate leads, appointments, support, payments, documents, reminders, WhatsApp workflows, and human handoff with Crescora FLOW.",
  );
  assert.match(html, /What is no-code chatbot automation\?/);
  assert.match(html, /How no-code chatbot automation works/);
  assert.match(html, /No-code chatbot vs normal chatbot/);
  assert.match(html, /What businesses can automate first/);
  assert.match(html, /Best no-code chatbot automation use cases/);
  assert.match(html, /Benefits of no-code chatbot automation/);
  assert.match(html, /What a good no-code chatbot builder should include/);
  assert.match(html, /How Crescora FLOW helps/);
  assert.match(html, /Recommended rollout plan/);
  assert.match(html, /Before and after no-code chatbot automation/);
  assert.match(html, /Industries that can use no-code chatbot automation/);
  assert.match(html, /Book No-Code Automation Demo/);
  assert.match(html, /Explore FLOW Workflows/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Open page|Explore the next page for your workflow decision/i,
  );
});

test("payment reminder automation blog post renders public billing workflow content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "how-to-automate-payment-reminders-for-customers" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "how-to-automate-payment-reminders-for-customers" }),
    }),
  );

  assert.equal(metadata.title, "How to Automate Payment Reminders for Customers | Crescora FLOW");
  assert.equal(
    metadata.description,
    "Learn how to automate payment reminders for customers with Crescora FLOW. Send due reminders, share payment links, collect status, recover failed payments, escalate overdue cases, and track billing outcomes.",
  );
  assert.match(html, /How to automate payment reminders for customers/);
  assert.match(html, /What is payment reminder automation\?/);
  assert.match(html, /Why manual payment follow-up fails/);
  assert.match(html, /Payment reminder workflow example/);
  assert.match(html, /What payment details should be captured/);
  assert.match(html, /How to write payment reminders professionally/);
  assert.match(html, /Reminder sequence before and after due date/);
  assert.match(html, /Payment link and status collection/);
  assert.match(html, /Failed payment and overdue escalation/);
  assert.match(html, /Best payment workflows to automate first/);
  assert.match(html, /How Crescora FLOW helps/);
  assert.match(html, /Before and after payment reminder automation/);
  assert.match(html, /Metrics to measure after payment automation/);
  assert.match(html, /Book Payment Automation Demo/);
  assert.match(html, /Map My Payment Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Open page|Explore the next page for your workflow decision/i,
  );
});

test("hospital chatbot workflows blog post renders public healthcare workflow content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "best-chatbot-workflows-for-hospitals" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "best-chatbot-workflows-for-hospitals" }),
    }),
  );

  assert.equal(
    metadata.title,
    "Best AI Chatbot Workflows for Hospitals and Clinics | Crescora FLOW",
  );
  assert.equal(
    metadata.description,
    "Explore the best AI chatbot workflows for hospitals and clinics, including appointment booking, doctor availability, lab report status, billing support, health packages, insurance queries, emergency routing, and patient follow-ups with Crescora FLOW.",
  );
  assert.match(html, /Best AI chatbot workflows for hospitals and clinics/);
  assert.match(html, /Why hospital chatbot workflows matter/);
  assert.match(html, /Best chatbot workflows for hospitals and clinics/);
  assert.match(html, /How Crescora Flow connects the full patient journey/);
  assert.match(html, /Built for healthcare workflows that need control/);
  assert.match(html, /Hospital workflows that should not stay manual/);
  assert.match(html, /What a strong hospital bot should handle/);
  assert.match(html, /Book a Hospital Workflow Demo/);
  assert.match(html, /Explore Healthcare Automation/);
  assert.match(html, /Ready to automate your hospital patient workflows\?/);
  assert.match(html, /Book a Hospital Demo/);
  assert.match(html, /Discuss My Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Use this article to improve|The page should/i,
  );
});

test("missed appointments ai blog post renders public healthcare conversion content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "how-ai-can-reduce-missed-appointments" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "how-ai-can-reduce-missed-appointments" }),
    }),
  );

  assert.equal(
    metadata.title,
    "How AI Can Reduce Missed Appointments for Hospitals and Clinics | Crescora FLOW",
  );
  assert.equal(
    metadata.description,
    "Learn how AI can reduce missed appointments for hospitals and clinics using automated confirmations, reminders, rescheduling, payment nudges, and staff escalation with Crescora FLOW.",
  );
  assert.match(html, /How AI can reduce missed appointments for hospitals and clinics/);
  assert.match(html, /Why hospitals miss appointments/);
  assert.match(html, /How AI reduces missed appointments/);
  assert.match(html, /How Crescora Flow connects the appointment journey/);
  assert.match(html, /Appointment automation with human control/);
  assert.match(html, /Book a Healthcare Demo/);
  assert.match(html, /Explore Appointment Workflow/);
  assert.match(html, /Ready to reduce missed appointments in your hospital or clinic\?/);
  assert.match(html, /Discuss My Appointment Flow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Use this article to improve|The page should/i,
  );
});

test("website and whatsapp lead capture blog post renders public lead workflow content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "how-to-collect-leads-automatically-from-website-and-whatsapp" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "how-to-collect-leads-automatically-from-website-and-whatsapp" }),
    }),
  );

  assert.equal(
    metadata.title,
    "How to Collect Leads Automatically From Website and WhatsApp | Crescora FLOW",
  );
  assert.equal(
    metadata.description,
    "Learn how to collect leads automatically from website and WhatsApp with Crescora FLOW. Capture enquiries, qualify intent, store lead records, alert your team, and automate follow-ups before leads go cold.",
  );
  assert.match(html, /Turn website visitors and WhatsApp enquiries into qualified leads automatically/);
  assert.match(html, /What you&#x27;ll learn|What you'll learn/);
  assert.match(html, /Why businesses lose website and WhatsApp leads/);
  assert.match(html, /How automatic lead capture works/);
  assert.match(html, /Website and WhatsApp lead workflow example/);
  assert.match(html, /How Crescora Flow connects website and WhatsApp lead capture/);
  assert.match(html, /Lead automation with control, not random bot replies/);
  assert.match(html, /Explore More Lead Automation Resources/);
  assert.match(html, /Book a Lead Automation Demo/);
  assert.match(html, /Explore Lead Capture Workflow/);
  assert.match(html, /Ready to capture more leads automatically\?/);
  assert.match(html, /Discuss My Lead Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Use this article to improve|The page should/i,
  );
});

test("business support faq automation blog post renders public support faq content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "how-to-automate-faqs-for-business-support" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "how-to-automate-faqs-for-business-support" }),
    }),
  );

  assert.equal(metadata.title, "How to Automate FAQs for Business Support | Crescora FLOW");
  assert.equal(
    metadata.description,
    "Learn how to automate FAQs for business support with Crescora FLOW. Answer repeated customer questions, collect missing details, route unresolved issues, and escalate complex cases with human control.",
  );
  assert.match(html, /Reduce support workload by automating repeated customer questions/);
  assert.match(html, /What you&#x27;ll learn|What you'll learn/);
  assert.match(html, /Why businesses need FAQ automation/);
  assert.match(html, /How FAQ automation works in business support/);
  assert.match(html, /Sample FAQ support workflow/);
  assert.match(html, /How Crescora Flow connects FAQ automation to the full support journey/);
  assert.match(html, /FAQ automation with control, not random AI replies/);
  assert.match(html, /Explore More Support Automation Resources/);
  assert.match(html, /Book Support Automation Demo/);
  assert.match(html, /Explore FAQ Workflow/);
  assert.match(html, /Ready to reduce repetitive support questions\?/);
  assert.match(html, /Discuss My FAQ Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Use this article to improve|The page should/i,
  );
});

test("human handoff blog post renders public escalation content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "how-to-use-human-handoff-in-chatbot-automation" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "how-to-use-human-handoff-in-chatbot-automation" }),
    }),
  );

  assert.equal(metadata.title, "How to Use Human Handoff in Chatbot Automation | Crescora FLOW");
  assert.equal(
    metadata.description,
    "Learn how to use human handoff in chatbot automation with Crescora FLOW. Detect escalation triggers, collect customer context, route cases to the right team, and keep urgent or sensitive conversations under human control.",
  );
  assert.match(html, /Automate routine chats, escalate critical conversations to humans/);
  assert.match(html, /What you&#x27;ll learn|What you'll learn/);
  assert.match(html, /Why human handoff matters in chatbot automation/);
  assert.match(html, /How human handoff works in a chatbot workflow/);
  assert.match(html, /Sample human handoff workflow/);
  assert.match(html, /How Crescora Flow connects human handoff to the full customer journey/);
  assert.match(html, /Human handoff with control, not random escalation/);
  assert.match(html, /Explore More Support Automation Resources/);
  assert.match(html, /Book Handoff Demo/);
  assert.match(html, /Explore Handoff Workflow/);
  assert.match(html, /Ready to add human handoff to your chatbot workflow\?/);
  assert.match(html, /Discuss My Support Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Use this article to improve|The page should/i,
  );
});

test("whatsapp business api blog post renders public workflow content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "whatsapp-business-api-automation-explained" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "whatsapp-business-api-automation-explained" }),
    }),
  );

  assert.equal(metadata.title, "WhatsApp Business API Automation Explained | Crescora FLOW");
  assert.equal(
    metadata.description,
    "Learn how WhatsApp Business API automation helps businesses capture enquiries, qualify leads, send reminders, automate support, connect payments or bookings, and route complex cases with Crescora FLOW.",
  );
  assert.match(html, /Turn WhatsApp enquiries into automated leads, bookings, payments, and support workflows/);
  assert.match(html, /What you&#x27;ll learn|What you'll learn/);
  assert.match(html, /Why WhatsApp Business API automation matters/);
  assert.match(html, /What WhatsApp API automation can do for businesses/);
  assert.match(html, /Sample WhatsApp lead and support workflow/);
  assert.match(html, /How Crescora Flow connects WhatsApp automation to the full customer journey/);
  assert.match(html, /WhatsApp automation with control, not random replies/);
  assert.match(html, /Explore More WhatsApp Automation Resources/);
  assert.match(html, /Book WhatsApp Automation Demo/);
  assert.match(html, /Explore WhatsApp Workflow/);
  assert.match(html, /Ready to automate your WhatsApp customer workflows\?/);
  assert.match(html, /Discuss My WhatsApp Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Use this article to improve|The page should/i,
  );
});

test("ai chatbot pricing blog post renders public pricing content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "ai-chatbot-pricing-in-india-what-businesses-should-know" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "ai-chatbot-pricing-in-india-what-businesses-should-know" }),
    }),
  );

  assert.equal(metadata.title, "AI Chatbot Pricing in India: What Businesses Should Know | Crescora FLOW");
  assert.equal(
    metadata.description,
    "Learn what affects AI chatbot pricing in India, what businesses should compare, and how Crescora FLOW helps teams control automation cost through workflows, guardrails, analytics, and human handoff.",
  );
  assert.match(html, /Understand AI chatbot pricing before you pay for the wrong automation tool/);
  assert.match(html, /What you&#x27;ll learn|What you'll learn/);
  assert.match(html, /Why AI chatbot pricing in India varies so much/);
  assert.match(html, /What businesses should compare before buying an AI chatbot/);
  assert.match(html, /Common pricing mistakes businesses make/);
  assert.match(html, /How Crescora Flow connects pricing to real business value/);
  assert.match(html, /Pricing should be transparent, predictable, and outcome-based/);
  assert.match(html, /Explore More Pricing and Automation Resources/);
  assert.match(html, /Book Pricing Consultation/);
  assert.match(html, /Discuss My Workflow Cost/);
  assert.match(html, /Ready to estimate the right AI chatbot cost for your business\?/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Use this article to improve|The page should/i,
  );
});

test("customer follow-up blog post renders public follow-up content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "how-to-automate-customer-follow-ups-after-enquiry" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "how-to-automate-customer-follow-ups-after-enquiry" }),
    }),
  );

  assert.equal(metadata.title, "How to Automate Customer Follow-Ups After Enquiry | Crescora FLOW");
  assert.equal(
    metadata.description,
    "Learn how to automate customer follow-ups after enquiry with Crescora FLOW. Capture lead details, schedule reminders, notify teams, recover silent customers, and track every enquiry from first message to conversion.",
  );
  assert.match(html, /Stop losing interested customers after the first enquiry/);
  assert.match(html, /What you&#x27;ll learn|What you'll learn/);
  assert.match(html, /Why customer follow-up automation matters/);
  assert.match(html, /How automated follow-ups work after an enquiry/);
  assert.match(html, /Example customer follow-up workflow/);
  assert.match(html, /How Crescora Flow connects the complete follow-up journey/);
  assert.match(html, /Follow-up automation with control, not message spam/);
  assert.match(html, /Explore More Lead and Follow-Up Automation Resources/);
  assert.match(html, /Book Follow-Up Demo/);
  assert.match(html, /Explore Follow-Up Workflow/);
  assert.match(html, /Ready to automate customer follow-ups after every enquiry\?/);
  assert.match(html, /Discuss My Follow-Up Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Use this article to improve|The page should/i,
  );
});

test("service workflow examples blog post renders public service-business content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "best-workflow-automation-examples-for-service-businesses" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "best-workflow-automation-examples-for-service-businesses" }),
    }),
  );

  assert.equal(metadata.title, "Best Workflow Automation Examples for Service Businesses | Crescora FLOW");
  assert.equal(
    metadata.description,
    "Explore practical workflow automation examples for service businesses with Crescora FLOW, including lead capture, appointment booking, follow-ups, payments, support routing, document collection, renewals, and human handoff.",
  );
  assert.match(html, /Practical workflow automation examples that help service businesses save time and win more customers/);
  assert.match(html, /What you&#x27;ll learn|What you'll learn/);
  assert.match(html, /Why workflow automation matters for service businesses/);
  assert.match(html, /Best workflow automation examples for service businesses/);
  assert.match(html, /Example service business workflow map/);
  assert.match(html, /How Crescora Flow connects these workflows/);
  assert.match(html, /Workflow automation with control, not random AI actions/);
  assert.match(html, /Explore More Workflow Automation Resources/);
  assert.match(html, /Book Workflow Demo/);
  assert.match(html, /Explore Automation Examples/);
  assert.match(html, /Ready to automate your service business workflows\?/);
  assert.match(html, /Discuss My Business Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Use this article to improve|The page should/i,
  );
});

test("hospital demo chatbot blog post renders public healthcare demo content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "how-to-build-a-hospital-demo-chatbot" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "how-to-build-a-hospital-demo-chatbot" }),
    }),
  );

  assert.equal(metadata.title, "How to Build a Hospital Demo Chatbot | Crescora FLOW");
  assert.equal(
    metadata.description,
    "Learn how to build a hospital demo chatbot with Crescora FLOW. Show appointment booking, doctor availability, lab report status, billing help, insurance support, reminders, and safe human handoff in one controlled healthcare workflow.",
  );
  assert.match(html, /Build a hospital demo chatbot that automates appointments, reports, billing, and patient support/);
  assert.match(html, /What you&#x27;ll learn|What you'll learn/);
  assert.match(html, /Why a hospital demo chatbot matters/);
  assert.match(html, /What to include in a hospital demo chatbot/);
  assert.match(html, /Example hospital demo flow map/);
  assert.match(html, /How Crescora Flow connects the hospital demo journey/);
  assert.match(html, /Hospital demo automation with safety and control/);
  assert.match(html, /Explore More Healthcare Automation Resources/);
  assert.match(html, /Book Hospital Demo/);
  assert.match(html, /Explore Hospital Workflow/);
  assert.match(html, /Ready to build a hospital demo chatbot that wins trust\?/);
  assert.match(html, /Discuss My Hospital Workflow/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Use this article to improve|The page should/i,
  );
});

test("small business conversation automation blog post renders public buyer-facing content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "why-small-businesses-need-conversation-automation" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "why-small-businesses-need-conversation-automation" }),
    }),
  );

  assert.equal(metadata.title, "Why Small Businesses Need Conversation Automation | Crescora FLOW");
  assert.equal(
    metadata.description,
    "Learn why small businesses need conversation automation to capture enquiries, answer faster, automate follow-ups, route serious leads, and stop losing customers across calls, WhatsApp, website chat, and social channels.",
  );
  assert.match(html, /Stop losing customers to missed messages, slow replies, and forgotten follow-ups/);
  assert.match(html, /What you&#x27;ll learn|What you'll learn/);
  assert.match(html, /Why conversation automation matters for small businesses/);
  assert.match(html, /What conversation automation can do for small businesses/);
  assert.match(html, /Example small business conversation workflow/);
  assert.match(html, /How Crescora Flow connects conversations to business outcomes/);
  assert.match(html, /Conversation automation with control, not random bot replies/);
  assert.match(html, /Explore More Small Business Automation Resources/);
  assert.match(html, /Book Free Demo/);
  assert.match(html, /Discuss My Workflow/);
  assert.match(html, /Ready to automate customer conversations for your business\?/);
  assert.match(html, /shared-blog-featured\.png/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Use this article to improve|The page should/i,
  );
});

test("whatsapp chatbot vs website chatbot blog post renders public comparison content and exact metadata", async () => {
  const metadata = await generateBlogPostMetadata({
    params: Promise.resolve({ slug: "whatsapp-chatbot-vs-website-chatbot-which-is-better" }),
  });
  const html = renderToStaticMarkup(
    await BlogPostPage({
      params: Promise.resolve({ slug: "whatsapp-chatbot-vs-website-chatbot-which-is-better" }),
    }),
  );

  assert.equal(
    metadata.title,
    "WhatsApp Chatbot vs Website Chatbot: Which Is Better for Your Business? | Crescora FLOW",
  );
  assert.equal(
    metadata.description,
    "Compare WhatsApp chatbot vs website chatbot for lead capture, appointment booking, reminders, support, payments, and follow-ups. Learn when to use website chat, WhatsApp automation, or both with Crescora FLOW.",
  );
  assert.match(html, /WhatsApp chatbot vs website chatbot: which is better for your business\?/);
  assert.match(html, /What is a website chatbot\?/);
  assert.match(html, /What is a WhatsApp chatbot\?/);
  assert.match(html, /Comparison table/);
  assert.match(html, /Area/);
  assert.match(html, /Website Chatbot/);
  assert.match(html, /WhatsApp Chatbot/);
  assert.match(html, /Best stage/);
  assert.match(html, /First website visit/);
  assert.match(html, /Follow-up and ongoing conversation/);
  assert.match(html, /When a website chatbot is better/);
  assert.match(html, /When a WhatsApp chatbot is better/);
  assert.match(html, /Why many businesses need both/);
  assert.match(html, /How Crescora FLOW connects both channels/);
  assert.match(html, /Book Chatbot Strategy Demo/);
  assert.match(html, /Compare My Workflow/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(
    html,
    /Keyword target|SEO notes|Representative image|Each post should point back to the money pages|Why this keyword matters|What the post should explain|How to connect it to the site|Open page/i,
  );
});

test("payment workflow metadata publishes the production title and canonical", async () => {
  const paymentMetadata = await generateWorkflowMetadata({
    params: Promise.resolve({ workflow: "payments" }),
  });
  const paymentOpenGraph = paymentMetadata.openGraph as { title?: string; url?: string } | undefined;

  assert.deepEqual(paymentMetadata.title, {
    absolute: "Payment Automation for Collections, Payment Reminders, Failed Payment Recovery, and Follow-Ups | Crescora FLOW",
  });
  assert.equal(
    paymentMetadata.description,
    "Automate payment reminders, payment links, collections follow-ups, failed-payment recovery, receipt confirmation, overdue escalation, and billing handover with Crescora FLOW.",
  );
  assert.equal(paymentMetadata.alternates?.canonical, "/workflows/payments");
  assert.equal(paymentOpenGraph?.title, "Payment Automation for Collections, Payment Reminders, Failed Payment Recovery, and Follow-Ups | Crescora FLOW");
  assert.equal(paymentOpenGraph?.url, `${siteOrigin}/workflows/payments`);
});

test("whatsapp solution page renders the page-specific rollout copy and CTA labels", () => {
  const whatsappPage = revenuePages.find((page) => page.slug === "whatsapp-automation");

  assert.ok(whatsappPage);
  if (!whatsappPage) {
    throw new Error("Expected whatsapp revenue page to exist");
  }

  const html = renderToStaticMarkup(
    RevenueSolutionPage({
      page: whatsappPage,
      breadcrumbs: [
        { name: "Home", href: siteOrigin },
        { name: "Solutions", href: `${siteOrigin}/solutions` },
        { name: whatsappPage.title, href: `${siteOrigin}/solutions/${whatsappPage.slug}` },
      ],
    }),
  );

  assert.match(html, /Automate WhatsApp conversations without losing the next business step\./);
  assert.match(html, /Built for WhatsApp \+ Web automation, lead capture, booking, reminders, support routing, payment follow-ups, and context-rich handover\./);
  assert.match(html, /See how WhatsApp conversations become trackable workflows/);
  assert.match(html, /WhatsApp use cases grounded in customer operations/);
  assert.match(html, /Implementation questions buyers ask before rollout/);
  assert.match(html, /View Examples -&gt;/);
  assert.match(html, /Ready to turn WhatsApp enquiries into a workflow\?/);
  assert.match(html, /Start with one WhatsApp workflow\. Prove value\. Expand into more channels and teams\./);
});

test("document collection workflow page renders customer-facing document workflow content", async () => {
  const html = renderToStaticMarkup(
    await WorkflowDetailPage({
      params: Promise.resolve({ workflow: "document-collection" }),
    }),
  );

  assert.match(html, /Automate document collection, missing-file follow-ups, KYC intake, and review routing\./);
  assert.match(html, /Book Document Workflow Demo/);
  assert.match(html, /Document workflows FLOW can automate/);
  assert.match(html, /KYC document collection/);
  assert.match(html, /Before FLOW vs After FLOW/);
  assert.match(html, /Example document collection journey/);
  assert.match(html, /Built for document workflows with privacy, review, and control/);
  assert.match(html, /Outcomes document-heavy teams can track/);
  assert.match(html, /Ready to automate your document collection workflow\?/);
  assert.match(html, /Start with one document workflow\. Prove value\. Expand into review, approval, reminders, and status tracking\./);
  assert.doesNotMatch(html, /Open India hub|BOFU landing page|Google/);
});

test("whatsapp workflow page renders customer-facing whatsapp workflow content", async () => {
  const html = renderToStaticMarkup(
    await WorkflowDetailPage({
      params: Promise.resolve({ workflow: "whatsapp-automation" }),
    }),
  );

  assert.match(html, /Launch a WhatsApp automation workflow for leads, bookings, reminders, support, and follow-ups\./);
  assert.match(html, /Book WhatsApp Workflow Demo/);
  assert.match(html, /Start from a proven WhatsApp automation structure\./);
  assert.match(html, /What this WhatsApp workflow template includes/);
  assert.match(html, /Example WhatsApp automation journey/);
  assert.match(html, /Before FLOW vs After FLOW/);
  assert.match(html, /WhatsApp workflows businesses can launch first/);
  assert.match(html, /What to measure during the WhatsApp workflow pilot/);
  assert.match(html, /Common questions before launching WhatsApp workflow automation/);
  assert.match(html, /Ready to launch your WhatsApp automation workflow\?/);
  assert.match(html, /Start with one WhatsApp workflow\. Prove value\. Expand into more channels, teams, and integrations\./);
  assert.match(html, /New/);
  assert.match(html, /Escalated/);
  assert.doesNotMatch(
    html,
    /Open India hub|BOFU landing page|Google(?:&#x27;|’|')s guidance|Search target|Keep the page structured and commercially explicit/i,
  );
});

test("appointment booking workflow page renders customer-facing booking content", async () => {
  const html = renderToStaticMarkup(
    await WorkflowDetailPage({
      params: Promise.resolve({ workflow: "appointment-booking" }),
    }),
  );

  assert.match(html, /Automate appointment booking, confirmations, reminders, rescheduling, and follow-ups\./);
  assert.match(html, /Book Appointment Workflow Demo/);
  assert.match(html, /Turn appointment enquiries into confirmed next steps\./);
  assert.match(html, /What this appointment workflow can automate/);
  assert.match(html, /Example appointment booking journey/);
  assert.match(html, /Before FLOW vs After FLOW/);
  assert.match(html, /Appointment workflows businesses can launch first/);
  assert.match(html, /What to measure during the appointment workflow pilot/);
  assert.match(html, /Common questions before launching appointment booking automation/);
  assert.match(html, /Ready to automate your appointment booking workflow\?/);
  assert.match(html, /Start with one appointment workflow\. Prove value\. Expand into payments, reminders, rescheduling, and customer follow-ups\./);
  assert.match(html, /Requested/);
  assert.match(html, /Escalated/);
  assert.doesNotMatch(html, /Open India hub|BOFU landing page|Search target|Keep the page structured and commercially explicit/i);
});

test("payment workflow page renders customer-facing payment content", async () => {
  const html = renderToStaticMarkup(
    await WorkflowDetailPage({
      params: Promise.resolve({ workflow: "payments" }),
    }),
  );

  assert.match(html, /Automate payment reminders, collections follow-ups, confirmations, and overdue escalation\./);
  assert.match(html, /Book Payment Workflow Demo/);
  assert.match(html, /Stop chasing pending payments manually\./);
  assert.match(html, /Give failed or overdue payments a clear recovery path\./);
  assert.match(html, /What this payment workflow can automate/);
  assert.match(html, /Example payment automation journey/);
  assert.match(html, /Before FLOW vs After FLOW/);
  assert.match(html, /Payment workflows businesses can launch first/);
  assert.match(html, /Built for payment workflows with control/);
  assert.match(html, /What to measure during the payment workflow pilot/);
  assert.match(html, /Common questions before launching payment automation/);
  assert.match(html, /Ready to automate your payment follow-up workflow\?/);
  assert.match(html, /Start with one payment reminder workflow\. Prove value\. Expand into verification, receipts, billing escalation, and collection visibility\./);
  assert.match(html, /Requested/);
  assert.match(html, /Closed/);
  assert.doesNotMatch(html, /Open India hub|BOFU landing page|Search target|Keep the page structured and commercially explicit/i);
});

test("reminders workflow page renders customer-facing reminder content", async () => {
  const html = renderToStaticMarkup(
    await WorkflowDetailPage({
      params: Promise.resolve({ workflow: "reminders" }),
    }),
  );

  assert.match(html, /Automate reminders for appointments, payments, documents, callbacks, renewals, and follow-ups\./);
  assert.match(html, /Book Reminder Workflow Demo/);
  assert.match(html, /Stop depending on staff memory for follow-ups\./);
  assert.match(html, /Recover missed actions before they become lost opportunities\./);
  assert.match(html, /What this reminder workflow can automate/);
  assert.match(html, /Example reminder automation journey/);
  assert.match(html, /Before FLOW vs After FLOW/);
  assert.match(html, /Reminder workflows businesses can launch first/);
  assert.match(html, /Built for reminder workflows with timing control/);
  assert.match(html, /What to measure during the reminder workflow pilot/);
  assert.match(html, /Common questions before launching reminder automation/);
  assert.match(html, /Ready to automate your reminder and follow-up workflow\?/);
  assert.match(html, /Start with one reminder workflow\. Prove value\. Expand into payments, documents, bookings, support, and renewals\./);
  assert.match(html, /Scheduled/);
  assert.match(html, /Expired/);
  assert.doesNotMatch(html, /Open India hub|BOFU landing page|Search Target|Keep the page structured and commercially explicit/i);
});

test("customer support workflow page renders customer-facing support content", async () => {
  const html = renderToStaticMarkup(
    await WorkflowDetailPage({
      params: Promise.resolve({ workflow: "customer-support" }),
    }),
  );

  assert.match(html, /Automate customer support FAQs, issue triage, ticket routing, and human handover\./);
  assert.match(html, /Book Support Workflow Demo/);
  assert.match(html, /Discuss My Support Workflow/);
  assert.match(html, /What this customer support workflow can automate/);
  assert.match(html, /Turn repeated support questions into structured workflows\./);
  assert.match(html, /Escalate complex cases with context, not confusion\./);
  assert.match(html, /How support conversations move through FLOW/);
  assert.match(html, /Before FLOW vs After FLOW/);
  assert.match(html, /What support teams can monitor during rollout/);
  assert.match(html, /Ready to automate your customer support workflow\?/);
  assert.match(html, /Start with FAQ and triage\. Prove value\. Expand into ticketing, handover, analytics, and support visibility\./);
  assert.match(html, /New/);
  assert.match(html, /Closed/);
  assert.match(html, /Open cases/);
  assert.match(html, /Handover volume/);
  assert.doesNotMatch(html, /Open India hub|BOFU landing page|Search target|support bot template|Keep the page structured and commercially explicit|convert search intent into a demo request/i);
});

test("knowledge assistant workflow page renders customer-facing grounded-answer content", async () => {
  const html = renderToStaticMarkup(
    await WorkflowDetailPage({
      params: Promise.resolve({ workflow: "rag-knowledge-assistant" }),
    }),
  );

  assert.match(html, /Answer customer questions from approved knowledge - and hand off when confidence is low\./);
  assert.match(html, /Book Knowledge Assistant Demo/);
  assert.match(html, /Discuss My Support Workflow/);
  assert.match(html, /Answer from approved business knowledge, not random AI guesses\./);
  assert.match(html, /Hand off low-confidence or sensitive questions to humans\./);
  assert.match(html, /What this knowledge assistant workflow can automate/);
  assert.match(html, /How a controlled knowledge assistant should operate/);
  assert.match(html, /Before FLOW vs After FLOW/);
  assert.match(html, /Built for knowledge workflows with control/);
  assert.match(html, /Knowledge assistant workflows businesses can launch first/);
  assert.match(html, /What to measure during the knowledge assistant pilot/);
  assert.match(html, /Ready to build a controlled knowledge assistant workflow\?/);
  assert.match(html, /Start with one knowledge area\. Prove answer quality\. Expand into more FAQs, documents, channels, and support workflows\./);
  assert.match(html, /Answered/);
  assert.match(html, /Published/);
  assert.match(html, /Gap Tracking/);
  assert.doesNotMatch(html, /Open India hub|BOFU landing page|Search target|knowledge base chatbot template|Keep the page structured and commercially explicit|convert search intent into a demo request/i);
});

test("human handoff workflow page renders customer-facing escalation content", async () => {
  const html = renderToStaticMarkup(
    await WorkflowDetailPage({
      params: Promise.resolve({ workflow: "human-handoff" }),
    }),
  );

  assert.match(html, /Escalate complex conversations to the right human team with full context\./);
  assert.match(html, /Book Handoff Workflow Demo/);
  assert.match(html, /Stop handing off conversations without the story\./);
  assert.match(html, /Route each handoff to the right owner, queue, or team\./);
  assert.match(html, /What this human handoff workflow can automate/);
  assert.match(html, /When automation should hand off to a human/);
  assert.match(html, /Example human handoff journey/);
  assert.match(html, /What context should be transferred to the human team/);
  assert.match(html, /Built for human handoff with operational control/);
  assert.match(html, /What to measure during the handoff workflow pilot/);
  assert.match(html, /Common questions before launching human handoff automation/);
  assert.match(html, /Ready to build a context-rich human handoff workflow\?/);
  assert.match(html, /Start with one handoff workflow\. Prove value\. Expand into queues, SLA visibility, agent console, and outcome tracking\./);
  assert.match(html, /Triggered/);
  assert.match(html, /Failed/);
  assert.doesNotMatch(html, /Open India hub|BOFU landing page|Search target|Keep the page structured and commercially explicit/i);
});

test("billing workflow page renders customer-facing billing and collections content", async () => {
  const html = renderToStaticMarkup(
    await WorkflowDetailPage({
      params: Promise.resolve({ workflow: "billing" }),
    }),
  );

  assert.match(html, /Automate billing reminders, collections follow-ups, payment status updates, and exception handover\./);
  assert.match(html, /Book Billing Workflow Demo/);
  assert.match(html, /Stop chasing customers manually for billing updates\./);
  assert.match(html, /Give overdue, failed, or disputed payments a clear path\./);
  assert.match(html, /What this billing workflow can automate/);
  assert.match(html, /Example billing and collections journey/);
  assert.match(html, /Before FLOW vs After FLOW/);
  assert.match(html, /Billing workflows service teams can launch first/);
  assert.match(html, /Built for billing workflows with control/);
  assert.match(html, /What to measure during the billing workflow pilot/);
  assert.match(html, /Ready to automate your billing and collections workflow\?/);
  assert.match(html, /Start with one billing follow-up workflow\. Prove value\. Expand into verification, receipts, disputes, escalation, and collection visibility\./);
  assert.match(html, /Requested/);
  assert.match(html, /Disputed/);
  assert.match(html, /Razorpay/);
  assert.doesNotMatch(html, /Open India hub|BOFU landing page|Search target|billing automation template|Keep the page structured and commercially explicit|convert search intent into a demo request/i);
});

test("public hub copy matches the indexable SEO strategy", () => {
  const blogHtml = renderToStaticMarkup(BlogPage());
  const workflowsHtml = renderToStaticMarkup(WorkflowsHubPage());
  const templatesHtml = renderToStaticMarkup(TemplatesHubPage());
  const compareHtml = renderToStaticMarkup(ComparePage());

  assert.match(blogHtml, /Articles for operators and buyers/);
  assert.doesNotMatch(blogHtml, /draft articles|search index/i);

  assert.match(workflowsHtml, /Launch-ready workflows for leads, bookings, payments, support, and follow-ups/);
  assert.doesNotMatch(workflowsHtml, /internal linking|primary index targets/i);

  assert.match(templatesHtml, /Ready-to-use FLOW templates for leads, bookings, payments, support, and follow-ups/i);
  assert.doesNotMatch(templatesHtml, /no longer compete|route commercial search intent/i);

  assert.match(compareHtml, /Compare AI Automation Platforms: Why Growing Businesses Choose Crescora FLOW/);
  assert.match(compareHtml, /yellow-ai-alternative/);
  assert.doesNotMatch(compareHtml, /seo keywords|internal seo page strategy/i);
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
  assert.match(compareHtml, /"@type":"FAQPage"/);

  assert.match(proofHtml, /"@type":"CollectionPage"/);
  assert.match(proofHtml, /"@type":"ItemList"/);

  assert.match(solutionHtml, /"@type":"FAQPage"/);
});

test("compare hub metadata publishes the production comparison title and canonical", () => {
  const compareOpenGraph = compareHubMetadata.openGraph as { title?: string; url?: string } | undefined;

  assert.deepEqual(compareHubMetadata.title, {
    absolute: "Crescora FLOW vs Other AI Automation Platforms | AI Workflow Automation for Businesses",
  });
  assert.equal(compareHubMetadata.description, "Compare Crescora FLOW with leading AI automation platforms. See why businesses choose FLOW for customer conversations, workflows, follow-ups, payments, appointments, handover, and operations.");
  assert.equal(compareHubMetadata.alternates?.canonical, "/compare");
  assert.equal(compareOpenGraph?.url, `${siteOrigin}/compare`);
});
