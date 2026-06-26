import assert from "node:assert/strict";
import test from "node:test";

import { proofCards } from "@/lib/decision-pages";
import { acceptableUsePolicyContent } from "@/lib/acceptable-use-policy-content";
import { isValidPhoneForCountry } from "@/lib/lead-form-validation";
import { cookiePolicyContent } from "@/lib/cookie-policy-content";
import { privacyPolicyContent } from "@/lib/privacy-policy-content";
import { enLocaleCopy } from "@/lib/locales/en";
import { hiLocaleCopy } from "@/lib/locales/hi";
import { solutionPages } from "@/lib/seo-marketing-data";
import { siteContent } from "@/lib/site-content";
import { termsOfServiceContent } from "@/lib/terms-of-service-content";
import { homepageFlowSteps, pricingPackages, pricingPackagesByRegion, pricingRegions, useCases } from "@/lib/site-data";

test("homepage copy reflects the conversion-focused messaging", () => {
  assert.equal(siteContent.site.productFull, "FLOW by Crescora AI");
  assert.equal(siteContent.ctas.bookProjectDemo.label, "Book Free Demo");
  assert.equal(siteContent.ctas.viewIndustryWorkflow.label, "View Industry Workflows");
  assert.equal(siteContent.homepage.hero.title, "WhatsApp automation, AI chatbots, and workflow automation for customer conversations.");
  assert.equal(siteContent.homepage.hero.description, "FLOW by Crescora AI helps businesses automate WhatsApp conversations, website chatbots, Instagram and Facebook follow-ups, appointment booking, lead qualification, document collection, payment reminders, support replies, and human handover.");
  assert.equal(siteContent.homepage.hero.stats[1].value, "14 days");
  assert.equal(siteContent.homepage.automation.cards.length, 6);
  assert.equal(siteContent.homepage.automation.cards[1].title, "WhatsApp enquiry and follow-up");
  assert.equal(siteContent.homepage.coverage.cards.length, 3);
  assert.equal(siteContent.homepage.coverage.cards[0].title, "Customer channels");
  assert.equal(siteContent.homepage.pain.cards.length, 6);
  assert.equal(siteContent.homepage.pain.cards[0].text, "Delays and manual handling create revenue leakage, operational drag, and poor customer experience.");
  assert.equal(siteContent.homepage.pilot.eyebrow, "14-day pilot");
  assert.equal(siteContent.homepage.pilot.secondaryCta.label, "View Industry Workflows");
  assert.equal(siteContent.homepage.outcomes.impactLabel, "Expected impact");
  assert.equal(siteContent.homepage.outcomes.items.length, 4);
  assert.equal(siteContent.homepage.industries.description, "Start with workflows that directly improve revenue, response time, and operations.");
  assert.equal(siteContent.homepage.explore.title, "Open the page that matches your buying question.");
  assert.equal(siteContent.homepage.explore.cards[2].ctaLabel, "See pricing");
  assert.equal(siteContent.homepage.trust.title, "AI handles routine work. Your team keeps control, visibility, and fallback.");
  assert.equal(solutionPages[0].title, "WhatsApp Automation Workflows and AI Chatbots in India | FLOW by Crescora AI");
  assert.equal(solutionPages[1].title, "AI Chatbots for Websites, WhatsApp, and Social Media | FLOW by Crescora AI");
  assert.equal(solutionPages[2].title, "Business Workflow Automation Software in India | FLOW by Crescora AI");
  assert.equal(solutionPages[3].title, "Customer Support Automation for Small Businesses in India | FLOW by Crescora AI");
  assert.equal(solutionPages[0].keywordTarget, "WhatsApp automation workflows");
  assert.equal(solutionPages[1].keywordTarget, "AI chatbot for website and WhatsApp");
  assert.equal(solutionPages[2].keywordTarget, "workflow automation software");
  assert.equal(solutionPages[3].keywordTarget, "customer support automation for small business");
  assert.equal(siteContent.homepage.finalCta.description, "We will review your current process and recommend the first workflow worth automating.");
  assert.equal(siteContent.homepage.finalCta.secondary.label, "See Pricing");
  assert.equal(siteContent.ctas.requestScopeCall.label, "Discuss My Workflow");
  assert.equal(siteContent.ctas.getProjectScope.label, "Get Project Scope");
  assert.ok(siteContent.ctas.openUseCase.label.startsWith("Open use case"));
  assert.equal(siteContent.footerGroups[3].links[1].href, "/terms");
  assert.equal(siteContent.footerGroups[3].links[2].href, "/cookies");
  assert.equal(siteContent.footerGroups[3].links[3].href, "/acceptable-use");
  assert.equal(enLocaleCopy.footerGroups[3].links[1].href, "/terms");
  assert.equal(enLocaleCopy.footerGroups[3].links[2].href, "/cookies");
  assert.equal(enLocaleCopy.footerGroups[3].links[3].href, "/acceptable-use");
  assert.equal(hiLocaleCopy.footerGroups[3].links[1].href, "/terms");
  assert.equal(hiLocaleCopy.footerGroups[3].links[2].href, "/cookies");
  assert.equal(hiLocaleCopy.footerGroups[3].links[3].href, "/acceptable-use");
  assert.equal(siteContent.industriesIndex.hero.title, "AI workflow automation for every service business.");
  assert.equal(siteContent.industriesIndex.hero.trustLine, "Built for hospitals, clinics, schools, real estate, labs, coaching centers, finance teams, support teams, and service businesses.");
  assert.equal(siteContent.industriesIndex.hero.previewSteps.length, 6);
  assert.equal(siteContent.industriesIndex.proofStrip.capabilities.length, 10);
  assert.equal(siteContent.industriesIndex.cards.length, 10);
  assert.equal(siteContent.industriesIndex.cards[0].ctaLabel, "View Hospital Workflow");
  assert.equal(siteContent.industriesIndex.engineSection.title, "One workflow engine. Multiple industries. Real business outcomes.");
  assert.equal(siteContent.industriesIndex.phaseTwo.title, "Don't see your exact industry? We can still automate your workflow.");
  assert.equal(siteContent.industriesIndex.seoLandingPages.title, "Explore more automation solution pages.");
  assert.equal(siteContent.useCasesIndex.hero.description, "Start with the workflow that affects your response speed, revenue, support load, or daily operations the most.");
  assert.equal(siteContent.useCasesIndex.cards.length, 12);
  assert.equal(siteContent.useCasesIndex.cards[1].title, "Lead Capture & Qualification");
  assert.equal(siteContent.useCasesIndex.cards[10].title, "Ticket Creation & Escalation");
  assert.equal(useCases.length, 12);
  assert.equal(useCases[0].title, "WhatsApp Automation");
  assert.equal(siteContent.workflowsIndex.hero.title, "Launch-ready workflows for leads, bookings, payments, support, and follow-ups.");
  assert.equal(siteContent.workflowsIndex.hero.trustLine, "Built for real operations, not basic chatbot replies.");
  assert.equal(siteContent.workflowsIndex.proofStrip.capabilities.length, 9);
  assert.equal(siteContent.workflowsIndex.section.eyebrow, "Automation Blueprints");
  assert.equal(siteContent.workflowsIndex.cards.length, 10);
  assert.equal(siteContent.workflowsIndex.cards[0].title, "WhatsApp Automation Workflow for Leads, Support, and Follow-Ups");
  assert.equal(siteContent.workflowsIndex.cards[6].title, "Knowledge Assistant Workflow for Fast, Controlled Customer Answers");
  assert.equal(siteContent.workflowsIndex.whyItMatters.cards.length, 4);
  assert.equal(siteContent.workflowsIndex.finalCta.title, "Want a workflow built around your exact process?");
  assert.equal(siteContent.templatesIndex.hero.title, "Ready-to-use FLOW templates for leads, bookings, payments, support, and follow-ups.");
  assert.equal(siteContent.templatesIndex.hero.trustLine, "Built for real customer operations, not basic chatbot replies.");
  assert.equal(siteContent.templatesIndex.launchStrip.items.length, 7);
  assert.equal(siteContent.templatesIndex.filters.length, 8);
  assert.equal(siteContent.templatesIndex.cards.length, 15);
  assert.equal(siteContent.templatesIndex.cards[0].title, "WhatsApp Automation Template for Leads, Support, and Follow-Ups");
  assert.equal(siteContent.templatesIndex.cards[0].featured, true);
  assert.equal(siteContent.templatesIndex.cards[5].tag, "AI Knowledge");
  assert.equal(siteContent.templatesIndex.whyItMatters.cards.length, 4);
  assert.equal(siteContent.templatesIndex.finalCta.title, "Need a template for your exact business process?");
  assert.equal(siteContent.platform.hero.title, "See how FLOW turns enquiries into completed workflows.");
  assert.equal(siteContent.platform.section.title, "Built for business workflows that need structure and follow-through.");
  assert.equal(siteContent.platform.team.startTitle, "See how FLOW can automate your first workflow.");
  assert.equal(siteContent.platform.hero.primaryCta.label, "Book Free Demo");
  assert.equal(siteContent.platform.hero.secondaryCta.label, "Discuss My Workflow");
  assert.equal(siteContent.pricing.hero.title, "Launch one workflow first. Scale automation as your business grows.");
  assert.equal(siteContent.pricing.hero.description, "Start with a focused automation for leads, bookings, payments, documents, reminders, support, or handovers. Expand into more teams, channels, integrations, and customer journeys when your operations are ready.");
  assert.equal(siteContent.pricing.hero.trustLine, "Plans are designed for real business workflows, not basic chatbot replies.");
  assert.equal(siteContent.pricing.regionSelector.label, "Billing region");
  assert.equal(siteContent.pricing.included.items.length, 6);
  assert.equal(siteContent.pricing.ctas.primary.label, "Book Free Demo");
  assert.equal(siteContent.pricing.ctas.secondary.label, "Get Project Scope");
  assert.ok(siteContent.pricing.scopeNote.startsWith("Package pricing starts from the listed monthly rate."));
  assert.equal(siteContent.pricing.factors.items.length, 5);
  assert.equal(siteContent.pricing.faq.items.length, 5);
  assert.equal(siteContent.pricing.faq.items[0].question, "Do you have separate pricing for India and global customers?");
  assert.equal(pricingRegions[0].label, "India - INR ₹");
  assert.equal(pricingPackages[0].price, "₹10,000/mo");
  assert.equal(pricingPackages[0].bestFor, "Small teams launching their first focused automation.");
  assert.equal(pricingPackages[1].price, "₹49,999/mo");
  assert.equal(pricingPackages[1].badge, "Most Popular");
  assert.equal(pricingPackages[2].price, "₹99,999/mo");
  assert.equal(pricingPackages[2].bestFor, "Teams that need automation across departments, routes, handovers, integrations, and reporting.");
  assert.equal(pricingPackages[3].price, "Custom");
  assert.equal(pricingPackages[3].priceDetail, "Typically starts from ₹2,49,999/mo based on rollout scope.");
  assert.equal(pricingPackages[3].ctaLabel, "Talk to Sales");
  assert.equal(pricingPackagesByRegion.global[0].price, "$199/mo");
  assert.equal(pricingPackagesByRegion.global[3].priceDetail, "Typically starts from $2,999/mo based on rollout scope.");
  assert.ok(siteContent.homepage.faq.items.every((item) => item.answer.length > 0));
  assert.equal(siteContent.useCases.whatsapp.metadata.title, "WhatsApp Automation Workflows and AI Chatbots | FLOW by Crescora");
  assert.equal(siteContent.useCases.whatsapp.services.length, 6);
  assert.equal(
    siteContent.useCases.leadCaptureQualification.metadata.title,
    "Lead Capture and Qualification Automation for WhatsApp, Website, Ads, Sales Routing, and Follow-Ups",
  );
  assert.equal(siteContent.useCases.leadCaptureQualification.hero.title, "Capture enquiries and qualify leads automatically.");
  assert.equal(siteContent.useCases.leadCaptureQualification.hero.primaryCta.label, "Book Lead Capture Demo");
  assert.equal(siteContent.useCases.leadCaptureQualification.captureSection?.items.length, 6);
  assert.equal(siteContent.useCases.leadCaptureQualification.workflowSection?.steps.length, 8);
  assert.equal(siteContent.useCases.leadCaptureQualification.useCasesSection?.items.length, 7);
  assert.equal(siteContent.useCases.leadCaptureQualification.metricsSection?.items.length, 7);
  assert.equal(siteContent.useCases.leadCaptureQualification.finalCta?.title, "Ready to automate your lead capture and qualification workflow?");
  assert.equal(siteContent.useCases.reminderAutomation.items[0], "Appointment reminders");
  assert.equal(siteContent.useCases.feedbackCollection.metadata.title, "Feedback and Review Collection Automation | FLOW by Crescora");
  assert.equal(siteContent.contact.metadata.title, "Contact | Crescora AI");
  assert.equal(siteContent.contact.hero.title, "Contact Crescora AI.");
  assert.equal(siteContent.contact.details.items.length, 4);
  assert.equal(siteContent.contact.details.items[0].value, "sales@crescora.ai");
  assert.equal(siteContent.contact.details.items[1].value, "support@crescora.ai");
  assert.equal(siteContent.contact.details.items[2].value, "navya@crescora.ai");
  assert.equal(siteContent.contact.details.items[3].value, "2nd floor, Urbanrise Oncloud 33, Bachupally, Hyderabad, Telangana, India");
  assert.equal(siteContent.industries.hospitals.metadata.title, "Hospital Automation Software for Appointments, Patient Enquiries, Reports, and Follow-Ups | Crescora FLOW");
  assert.equal(siteContent.industries.hospitals.hero.eyebrow, "Hospital automation");
  assert.equal(siteContent.industries.hospitals.hero.primaryCta.label, "Book Hospital Demo");
  assert.equal(siteContent.industries.hospitals.overviewCards.length, 2);
  assert.equal(siteContent.industries.hospitals.workflowSection.cards.length, 7);
  assert.equal(siteContent.industries.hospitals.workflowSection.cards[3].title, "Lab tests and reports");
  assert.equal(siteContent.industries.hospitals.comparison.rows.length, 6);
  assert.equal(siteContent.industries.hospitals.patientJourney.steps.length, 8);
  assert.ok(siteContent.industries.hospitals.safety.emergencyNote.includes("should not replace emergency medical care"));
  assert.equal(siteContent.industries.hospitals.startingWorkflows.cards.length, 5);
  assert.equal(siteContent.industries.hospitals.finalCta.title, "Ready to automate your hospital front desk workflow?");
  assert.equal(siteContent.industries.clinics.metadata.title, "Clinic Appointment Automation Software for Bookings, Reminders, Follow-Ups, and Patient Support | Crescora FLOW");
  assert.equal(siteContent.industries.clinics.hero.eyebrow, "Clinic automation");
  assert.equal(siteContent.industries.clinics.hero.primaryCta.label, "Book Clinic Demo");
  assert.equal(siteContent.industries.clinics.overviewCards.length, 2);
  assert.equal(siteContent.industries.clinics.workflowSection.cards.length, 7);
  assert.equal(siteContent.industries.clinics.workflowSection.cards[5].title, "Clinic FAQs");
  assert.ok(siteContent.industries.clinics.workflowSection.supportLine.includes("appointment, payment, form"));
  assert.equal(siteContent.industries.clinics.comparison.rows.length, 6);
  assert.equal(siteContent.industries.clinics.patientJourney.steps.length, 8);
  assert.ok(siteContent.industries.clinics.safety.emergencyNote.includes("should not replace emergency care or medical diagnosis"));
  assert.equal(siteContent.industries.clinics.startingWorkflows.cards.length, 5);
  assert.equal(siteContent.industries.clinics.finalCta.title, "Ready to automate your clinic appointment workflow?");
  assert.equal(
    siteContent.industries.education.metadata.title,
    "Education Automation Software for Admissions, Demo Bookings, Fee Reminders, and Follow-Ups | Crescora FLOW",
  );
  assert.equal(siteContent.industries.education.hero.eyebrow, "Education automation");
  assert.equal(siteContent.industries.education.hero.secondaryCta.label, "Discuss My Admissions Workflow");
  assert.equal(siteContent.industries.education.hero.previewSteps.length, 6);
  assert.equal(siteContent.industries.education.painPoints.length, 6);
  assert.equal(siteContent.industries.education.workflows.length, 8);
  assert.equal(siteContent.industries.education.workflows[7].title, "Support and FAQ automation");
  assert.equal(siteContent.industries.education.journey.steps.length, 9);
  assert.equal(siteContent.industries.education.comparison.rows.length, 6);
  assert.equal(siteContent.industries.education.trust.cards.length, 5);
  assert.equal(siteContent.industries.education.metrics.items.length, 7);
  assert.equal(siteContent.industries.education.finalCta.title, "Ready to automate your admissions follow-up workflow?");
  assert.equal(
    siteContent.industries.realEstate.metadata.title,
    "Real Estate Automation Software for Lead Qualification, Site Visits, and Follow-Ups | Crescora FLOW",
  );
  assert.equal(siteContent.industries.realEstate.hero.eyebrow, "Real estate automation");
  assert.equal(siteContent.industries.realEstate.hero.secondaryCta.label, "Discuss My Sales Workflow");
  assert.equal(siteContent.industries.realEstate.hero.previewSteps.length, 6);
  assert.equal(siteContent.industries.realEstate.painPoints.length, 7);
  assert.equal(siteContent.industries.realEstate.painPoints[6].title, "No clear pipeline visibility");
  assert.equal(siteContent.industries.realEstate.workflows.length, 8);
  assert.equal(siteContent.industries.realEstate.workflows[2].title, "Project matching and brochure sharing");
  assert.equal(siteContent.industries.realEstate.projectSharing.items.length, 9);
  assert.equal(siteContent.industries.realEstate.journey.steps.length, 9);
  assert.equal(siteContent.industries.realEstate.comparison.rows.length, 6);
  assert.equal(siteContent.industries.realEstate.trust.cards.length, 5);
  assert.equal(siteContent.industries.realEstate.metrics.items.length, 6);
  assert.equal(siteContent.industries.realEstate.finalCta.title, "Ready to automate your real estate lead follow-up workflow?");
  assert.equal(
    siteContent.industries.supportTeams.metadata.title,
    "Customer Support Automation Software for FAQ, Triage, Ticket Routing, and Escalation | Crescora FLOW",
  );
  assert.equal(siteContent.industries.supportTeams.hero.eyebrow, "Customer support automation");
  assert.equal(siteContent.industries.supportTeams.hero.secondaryCta.label, "Discuss My Support Workflow");
  assert.equal(siteContent.industries.supportTeams.hero.previewSteps.length, 6);
  assert.equal(siteContent.industries.supportTeams.overviewCards.length, 2);
  assert.equal(siteContent.industries.supportTeams.painPoints.length, 6);
  assert.equal(siteContent.industries.supportTeams.workflows.length, 8);
  assert.equal(siteContent.industries.supportTeams.workflows[2].title, "Ticket creation");
  assert.equal(siteContent.industries.supportTeams.journey.steps.length, 8);
  assert.equal(siteContent.industries.supportTeams.comparison.rows.length, 6);
  assert.equal(siteContent.industries.supportTeams.difference.cards.length, 5);
  assert.equal(siteContent.industries.supportTeams.observability.cards.length, 6);
  assert.equal(siteContent.industries.supportTeams.metrics.items.length, 6);
  assert.equal(siteContent.industries.supportTeams.finalCta.title, "Ready to automate your support workflow?");
  assert.equal(
    siteContent.industries.serviceBusinesses.metadata.title,
    "Service Business Automation Software for Bookings, Payments, Reminders, and Follow-Ups | Crescora FLOW",
  );
  assert.equal(siteContent.industries.serviceBusinesses.hero.eyebrow, "Service business automation");
  assert.equal(siteContent.industries.serviceBusinesses.hero.primaryCta.label, "Book Service Business Demo");
  assert.equal(siteContent.industries.serviceBusinesses.hero.previewSteps.length, 7);
  assert.equal(siteContent.industries.serviceBusinesses.overviewCards.length, 2);
  assert.equal(siteContent.industries.serviceBusinesses.painPoints.length, 6);
  assert.equal(siteContent.industries.serviceBusinesses.workflows.length, 8);
  assert.equal(siteContent.industries.serviceBusinesses.workflows[2].title, "Payment and collection follow-ups");
  assert.equal(siteContent.industries.serviceBusinesses.journey.steps.length, 9);
  assert.equal(siteContent.industries.serviceBusinesses.comparison.rows.length, 6);
  assert.equal(siteContent.industries.serviceBusinesses.metrics.items.length, 6);
  assert.equal(siteContent.industries.serviceBusinesses.finalCta.title, "Ready to automate your service booking workflow?");
  assert.equal(siteContent.leadForm.badge, "Workflow enquiry");
  assert.equal(siteContent.leadForm.title, "Book a free workflow demo");
  assert.equal(
    siteContent.leadForm.description,
    "Tell us your industry and highest-priority workflow. We will review your current process and suggest the best automation pilot for your team.",
  );
  assert.equal(siteContent.leadForm.submitIdle, "Request Free Workflow Demo");
  assert.equal(siteContent.leadForm.labels.country, "Country");
  assert.equal(siteContent.leadForm.labels.phoneOrWhatsapp, "Phone / WhatsApp number with country code");
  assert.equal(siteContent.leadForm.placeholders.country, "Select country");
  assert.equal(siteContent.leadForm.placeholders.phoneOrWhatsapp, "+91 98765 43210");
  assert.equal(siteContent.leadForm.options.countries[0].label, "India (+91)");
  assert.equal(isValidPhoneForCountry("+91 98765 43210", siteContent.leadForm.options.countries[0]), true);
  assert.equal(isValidPhoneForCountry("+1 415 555 0123", siteContent.leadForm.options.countries[1]), true);
  assert.equal(isValidPhoneForCountry("123", siteContent.leadForm.options.countries[0]), false);
  assert.equal(siteContent.homepage.trust.points[1], "Fallback paths when a step fails or a user drops off");
  assert.equal(homepageFlowSteps[0], "New customer enquiry received");
  assert.equal(homepageFlowSteps[3], "Booking, payment, or document step completed");
});

test("about page copy reflects the workflow example positioning", () => {
  assert.equal(siteContent.about.metadata.title, "About | Crescora AI");
  assert.equal(
    siteContent.about.metadata.description,
    "Crescora AI builds AI workflow automation for enquiries, follow-ups, bookings, support, and business operations.",
  );
  assert.equal(siteContent.about.hero.eyebrow, "About Crescora AI");
  assert.equal(siteContent.about.hero.title, "Crescora AI builds practical automation for customer conversations, workflows, and follow-ups.");
  assert.equal(
    siteContent.about.hero.description,
    "We help businesses turn enquiries, repeated questions, bookings, payments, documents, support requests, and follow-ups into structured workflows with human control where it matters.",
  );
  assert.equal(siteContent.about.hero.workflowSteps?.length, 6);
  assert.equal(siteContent.about.hero.workflowSignals?.[0], "Runtime execution and workflow validation");
  assert.equal(siteContent.about.hero.primaryCta.label, "Book Free Demo");
  assert.equal(siteContent.about.hero.secondaryCta.label, "Explore FLOW");
  assert.equal(siteContent.about.whoWeAre.title, "Who we are");
  assert.equal(siteContent.about.mission.description, "Our mission is to help businesses reduce manual follow-up work and respond to customers faster without losing human control.");
  assert.equal(siteContent.about.mission.card, "Turn every customer request into a clear, trackable workflow.");
  assert.equal(siteContent.about.whatWeBuild.items.length, 10);
  assert.ok(siteContent.about.whatWeBuild.support?.includes("fallback paths"));
  assert.equal(siteContent.about.whyWeBuiltFlow.paragraphs.length, 2);
  assert.equal(siteContent.about.belief.card, "Start small. Prove value. Scale with confidence.");
  assert.equal(siteContent.about.whoWeHelp.cards.length, 6);
  assert.equal(siteContent.about.howWeWork.steps.length, 6);
  assert.equal(siteContent.about.different.cards.length, 5);
  assert.equal(siteContent.about.different.cards[3].title, "India-first, global-ready");
  assert.equal(siteContent.about.trust.title, "Built for automation with control");
  assert.equal(siteContent.about.trust.cards?.length, 4);
  assert.equal(siteContent.about.trust.bullets.length, 6);
  assert.equal(siteContent.about.product.title, "Crescora AI is the company. FLOW is the product.");
  assert.equal(siteContent.about.product.details[0], "FLOW combines workflow builder, runtime execution, reminders, integrations, human handover, analytics, and monitoring in one product layer.");
  assert.equal(siteContent.about.pilot.cta.label, "Book Free Demo");
  assert.equal(siteContent.about.finalCta.title, "Ready to turn your customer workflow into automation?");
  assert.equal(siteContent.about.finalCta.note, "Start with one workflow. Prove value. Expand with confidence.");
  assert.ok(siteContent.about.finalCta.summary?.includes("documents, payments, support, or follow-ups"));
  assert.equal(siteContent.about.finalCta.secondary.label, "Discuss My Workflow");
  assert.equal(siteContent.about.cta.label, "Book Free Demo");
});

test("proof page copy uses workflow example language", () => {
  assert.equal(siteContent.proofIndex.metadata.title, "Workflow Examples | FLOW by Crescora");
  assert.equal(siteContent.proofIndex.hero.eyebrow, "Workflow examples");
  assert.equal(siteContent.proofIndex.hero.title, "See how FLOW moves customer requests from enquiry to outcome.");
  assert.equal(siteContent.proofIndex.hero.trustLine, "Built for real operations - intake, routing, reminders, payments, documents, handover, analytics, and continuous improvement.");
  assert.equal(siteContent.proofIndex.hero.previewSteps?.length, 6);
  assert.equal(siteContent.proofIndex.notice, "These examples show how a FLOW pilot can be planned, built, tested, and expanded for your industry. They are designed to help teams understand workflow structure, customer journey, team ownership, handover points, and measurable business outcomes before rollout.");
  assert.equal(siteContent.proofIndex.section.title, "Workflow examples for high-impact business operations.");
  assert.equal(siteContent.proofIndex.comparison.rows.length, 6);
  assert.equal(siteContent.proofIndex.includes.items.length, 8);
  assert.equal(siteContent.proofIndex.includes.items[4], "Follow-up and reminder steps");
  assert.equal(siteContent.proofIndex.metrics.items.length, 6);
  assert.equal(siteContent.proofIndex.credibility.cards.length, 4);
  assert.equal(siteContent.proofIndex.finalCta.title, "Ready to map your workflow into a FLOW pilot?");
  assert.equal(siteContent.proofIndex.finalCta.note, "Start with one workflow. Measure the outcome. Expand with confidence.");
  assert.equal(siteContent.ctas.openProofPage.label, "Open workflow example →");
  assert.equal(proofCards[0].text, "See how hospitals and clinics can automate appointment intake, patient details collection, doctor or department routing, payment follow-up, lab report requests, reminders, and staff handover for urgent or complex cases.");
  assert.equal(proofCards[1].ctaLabel, "View Real Estate Example →");
  assert.equal(proofCards[2].outcomeTags?.length, 3);
});

test("legal page copy is structured and no longer placeholder text", () => {
  assert.equal(siteContent.legal.privacy.metadata.title, "Privacy Policy | Crescora AI");
  assert.equal(siteContent.legal.privacy.updatedOn, "June 23, 2026");
  assert.equal(siteContent.legal.privacy.sections.length, 6);
  assert.equal(siteContent.legal.privacy.sections[0].title, "Information we collect");
  assert.ok(siteContent.legal.privacy.sections[0].paragraphs[0].includes("work email"));
  assert.ok(siteContent.legal.privacy.sections[0].paragraphs[1].includes("lead-form funnel events"));
  assert.equal(siteContent.legal.terms.sections[1].title, "Service scope");
  assert.equal(siteContent.legal.cookies.sections[0].title, "Current cookie behavior");
  assert.ok(siteContent.legal.cookies.sections[0].paragraphs[0].includes("Google tag / Google Analytics"));
  assert.equal(siteContent.legal.acceptableUse.metadata.title, "Acceptable Use Policy | Crescora Flow");
  assert.equal(siteContent.legal.acceptableUse.sections.length, 14);
  assert.equal(siteContent.legal.acceptableUse.sections[0].title, "1. General Rule");
  assert.ok(!siteContent.legal.privacy.hero.description.includes("placeholder"));
  assert.ok(!siteContent.legal.terms.metadata.description.includes("Finalize this page with legal review"));
});

test("privacy policy page uses the supplied Crescora Flow copy", () => {
  assert.equal(privacyPolicyContent.metadata.title, "Privacy Policy | Crescora Flow");
  assert.equal(
    privacyPolicyContent.metadata.description,
    "Learn how Crescora Flow collects, uses, protects, and manages personal data across AI automation, workspaces, channels, integrations, and customer conversations.",
  );
  assert.equal(privacyPolicyContent.dateLabel, "Effective date");
  assert.equal(privacyPolicyContent.updatedOn, "23-June 2026");
  assert.equal(privacyPolicyContent.sections.length, 16);
  assert.equal(privacyPolicyContent.sections[0].title, "1. Scope of this Policy");
  assert.equal(privacyPolicyContent.sections[1].title, "2. Our Role in Data Processing");
  assert.equal(privacyPolicyContent.sections[2].bullets?.[0], "Account and workspace information: name, email address, phone number, password credentials, role, workspace name, organization details, member permissions, login activity, 2FA status, invitation status, and account preferences.");
  assert.equal(privacyPolicyContent.sections[3].title, "4. How We Use Information");
  assert.equal(privacyPolicyContent.sections[12].title, "13. Your Rights");
  assert.ok(privacyPolicyContent.sections[2].bullets?.[6].includes("lead-form funnel events"));
  assert.ok(privacyPolicyContent.sections[15].bullets?.includes("Email: support@crescora.ai"));
});

test("cookie policy page uses the supplied Crescora Flow copy", () => {
  assert.equal(cookiePolicyContent.metadata.title, "Cookie Policy | Crescora Flow");
  assert.equal(
    cookiePolicyContent.metadata.description,
    "Understand how Crescora Flow uses cookies and similar technologies for authentication, security, preferences, analytics, performance, and marketing.",
  );
  assert.equal(cookiePolicyContent.dateLabel, "Effective date");
  assert.equal(cookiePolicyContent.updatedOn, "23-June 2026");
  assert.equal(cookiePolicyContent.sections.length, 10);
  assert.equal(cookiePolicyContent.sections[0].title, "1. What Are Cookies?");
  assert.equal(cookiePolicyContent.sections[2].bullets?.[0], "Strictly necessary cookies: Required for the website and application to function. They support login, authentication, security, session management, CSRF protection, load balancing, and workspace access.");
  assert.equal(cookiePolicyContent.sections[3].tables?.[0].headers[0], "Category");
  assert.equal(cookiePolicyContent.sections[3].tables?.[0].rows[0][0], "Essential");
  assert.ok(cookiePolicyContent.sections[4].paragraphs?.[1].includes("Google tag / Google Analytics"));
  assert.equal(cookiePolicyContent.sections[6].paragraphs?.[0], "The checked-in marketing site does not currently include a cookie banner or preference center.");
  assert.equal(cookiePolicyContent.sections[9].bullets?.[1], "Email: support@crescora.ai");
});

test("terms of service page uses the supplied Crescora Flow copy", () => {
  assert.equal(termsOfServiceContent.metadata.title, "Terms of Service | Crescora Flow");
  assert.equal(
    termsOfServiceContent.metadata.description,
    "Review the terms that govern access to Crescora Flow, including workspaces, automation flows, AI features, integrations, billing, acceptable use, and service limitations.",
  );
  assert.equal(termsOfServiceContent.dateLabel, "Effective date");
  assert.equal(termsOfServiceContent.updatedOn, "06-June 2026");
  assert.equal(termsOfServiceContent.sections.length, 22);
  assert.equal(termsOfServiceContent.sections[0].title, "1. About Crescora Flow");
  assert.equal(termsOfServiceContent.sections[3].title, "4. Customer Content");
  assert.equal(termsOfServiceContent.sections[8].bullets?.[0], "Fees are exclusive of taxes.");
  assert.equal(termsOfServiceContent.sections[16].title, "17. Disclaimers");
  assert.equal(termsOfServiceContent.sections[21].title, "22. Contact");
});

test("acceptable use policy page uses the supplied Crescora Flow copy", () => {
  assert.equal(acceptableUsePolicyContent.metadata.title, "Acceptable Use Policy | Crescora Flow");
  assert.equal(
    acceptableUsePolicyContent.metadata.description,
    "Crescora Flow's Acceptable Use Policy explains prohibited uses, AI safety expectations, messaging rules, data restrictions, platform abuse rules, and enforcement actions.",
  );
  assert.equal(acceptableUsePolicyContent.dateLabel, "Effective date");
  assert.equal(acceptableUsePolicyContent.updatedOn, "06-June 2026");
  assert.equal(acceptableUsePolicyContent.sections.length, 14);
  assert.equal(acceptableUsePolicyContent.sections[0].title, "1. General Rule");
  assert.equal(acceptableUsePolicyContent.sections[3].title, "4. AI Misuse");
  assert.equal(acceptableUsePolicyContent.sections[5].bullets?.[0], "Collect personal data without lawful basis or consent where required.");
  assert.equal(acceptableUsePolicyContent.sections[12].bullets?.[0], "Abuse reports: support@crescora.ai");
  assert.equal(acceptableUsePolicyContent.sections[12].bullets?.[1], "General support: support@crescora.ai");
});
