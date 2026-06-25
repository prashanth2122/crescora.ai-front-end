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
