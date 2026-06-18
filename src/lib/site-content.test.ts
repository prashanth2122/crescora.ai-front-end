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
import { homepageFlowSteps, useCases } from "@/lib/site-data";

test("homepage copy reflects the conversion-focused messaging", () => {
  assert.equal(siteContent.site.productFull, "FLOW by Crescora AI");
  assert.equal(siteContent.ctas.bookProjectDemo.label, "Book Free Demo");
  assert.equal(siteContent.ctas.viewIndustryWorkflow.label, "View Industry Workflows");
  assert.equal(siteContent.homepage.hero.title, "Automate customer enquiries, WhatsApp follow-ups, and business workflows.");
  assert.equal(siteContent.homepage.hero.description, "FLOW by Crescora AI helps Indian businesses capture leads, answer repeated questions, book appointments, collect documents, confirm payments, and hand over complex cases to the right team.");
  assert.equal(siteContent.homepage.automation.cards.length, 8);
  assert.equal(siteContent.homepage.automation.cards[1].title, "WhatsApp enquiry and follow-up automation");
  assert.equal(siteContent.homepage.painSpotlights.length, 3);
  assert.equal(siteContent.homepage.pain.cards.length, 6);
  assert.equal(siteContent.homepage.pain.cards[0].text, "Delays and manual handling create revenue leakage, operational drag, and poor customer experience.");
  assert.equal(siteContent.homepage.pilot.eyebrow, "14-day pilot");
  assert.equal(siteContent.homepage.pilot.secondaryCta.label, "View Industry Workflows");
  assert.equal(siteContent.homepage.outcomes.impactLabel, "Expected impact");
  assert.equal(siteContent.homepage.industries.description, "Start with workflows that directly improve revenue, response time, and operations.");
  assert.equal(siteContent.homepage.blog.title, "Explore practical automation guidance.");
  assert.equal(siteContent.homepage.blog.cards[0].title, "How WhatsApp Automation Helps Small Businesses in India");
  assert.equal(siteContent.homepage.trust.title, "AI handles routine work. Your team keeps control, visibility, and fallback.");
  assert.equal(siteContent.homepage.pricing.description, "Start with one focused workflow, then expand to more teams, channels, integrations, and customer journeys as you grow.");
  assert.ok(siteContent.homepage.pricing.note.startsWith("Pricing depends on workflow scope"));
  assert.equal(solutionPages[0].title, "WhatsApp Business Automation in India | FLOW by Crescora AI");
  assert.equal(solutionPages[1].title, "No-Code AI Chatbot Builder in India | FLOW by Crescora AI");
  assert.equal(solutionPages[2].title, "Business Workflow Automation Software in India | FLOW by Crescora AI");
  assert.equal(solutionPages[3].title, "Customer Support Automation for Small Businesses in India | FLOW by Crescora AI");
  assert.equal(solutionPages[0].keywordTarget, "WhatsApp business automation");
  assert.equal(solutionPages[1].keywordTarget, "AI chatbot builder");
  assert.equal(solutionPages[2].keywordTarget, "workflow automation software");
  assert.equal(solutionPages[3].keywordTarget, "customer support automation for small business");
  assert.equal(siteContent.homepage.finalCta.description, "See how FLOW by Crescora AI can automate one high-impact customer workflow for your business.");
  assert.equal(siteContent.homepage.finalCta.secondary.label, "Discuss My Workflow");
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
  assert.equal(siteContent.industriesIndex.hero.title, "Industry workflows FLOW can automate for your business.");
  assert.equal(siteContent.industriesIndex.phaseTwo.title, "Don't see your industry here?");
  assert.equal(siteContent.industriesIndex.seoLandingPages.title, "Explore more automation solution pages.");
  assert.equal(siteContent.useCasesIndex.hero.description, "Start with the workflow that affects your response speed, revenue, support load, or daily operations the most.");
  assert.equal(siteContent.useCasesIndex.cards.length, 12);
  assert.equal(siteContent.useCasesIndex.cards[1].title, "Lead Capture & Qualification");
  assert.equal(siteContent.useCasesIndex.cards[10].title, "Ticket Creation & Escalation");
  assert.equal(useCases.length, 12);
  assert.equal(useCases[0].title, "WhatsApp Automation");
  assert.equal(siteContent.platform.hero.title, "See how FLOW turns enquiries into completed workflows.");
  assert.equal(siteContent.platform.section.title, "Built for business workflows that need structure and follow-through.");
  assert.equal(siteContent.platform.team.startTitle, "See how FLOW can automate your first workflow.");
  assert.equal(siteContent.platform.hero.primaryCta.label, "Book Free Demo");
  assert.equal(siteContent.platform.hero.secondaryCta.label, "Discuss My Workflow");
  assert.equal(siteContent.pricing.hero.title, "Pricing that scales with your automation needs.");
  assert.equal(siteContent.pricing.hero.description, "Start with one focused workflow, then expand to more teams, channels, integrations, and customer journeys as you grow.");
  assert.equal(siteContent.pricing.ctas.primary.label, "Book Free Demo");
  assert.equal(siteContent.pricing.ctas.secondary.label, "Get Project Scope");
  assert.ok(siteContent.pricing.note.startsWith("Pricing depends on workflow scope"));
  assert.equal(siteContent.pricing.faq.items.length, 4);
  assert.equal(siteContent.pricing.faq.items[0].question, "Can I start with one workflow?");
  assert.ok(siteContent.homepage.faq.items.every((item) => item.answer.length > 0));
  assert.equal(siteContent.useCases.leadCaptureQualification.hero.title, "Capture enquiries and qualify leads automatically.");
  assert.equal(siteContent.useCases.reminderAutomation.items[0], "Appointment reminders");
  assert.equal(siteContent.useCases.feedbackCollection.metadata.title, "Feedback and Review Collection Automation | FLOW by Crescora");
  assert.equal(siteContent.contact.metadata.title, "Contact | Crescora AI");
  assert.equal(siteContent.contact.hero.title, "Contact Crescora AI.");
  assert.equal(siteContent.contact.details.items.length, 4);
  assert.equal(siteContent.contact.details.items[0].value, "sales@crescora.ai");
  assert.equal(siteContent.contact.details.items[1].value, "support@crescora.ai");
  assert.equal(siteContent.contact.details.items[2].value, "navya@crescora.ai");
  assert.equal(siteContent.contact.details.items[3].value, "2nd floor, Urbanrise Oncloud 33, Bachupally, Hyderabad, Telangana, India");
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
  assert.equal(siteContent.about.metadata.description, "Crescora AI helps Indian businesses turn enquiries into automated workflows.");
  assert.equal(siteContent.about.hero.eyebrow, "About Crescora AI");
  assert.equal(siteContent.about.hero.title, "Crescora AI builds practical automation for customer conversations and business workflows.");
  assert.equal(siteContent.about.hero.description, "We help Indian businesses turn enquiries, repeated questions, bookings, follow-ups, payments, documents, and support requests into structured automated workflows with human control where it matters.");
  assert.equal(siteContent.about.hero.primaryCta.label, "Book Free Demo");
  assert.equal(siteContent.about.hero.secondaryCta.label, "Explore FLOW");
  assert.equal(siteContent.about.whoWeAre.title, "Who we are");
  assert.equal(siteContent.about.mission.description, "Our mission is to help businesses reduce manual follow-up work and respond to customers faster without losing human control.");
  assert.equal(siteContent.about.whatWeBuild.items.length, 10);
  assert.equal(siteContent.about.whyWeBuiltFlow.paragraphs.length, 2);
  assert.equal(siteContent.about.belief.card, "Start small. Prove value. Scale with confidence.");
  assert.equal(siteContent.about.whoWeHelp.cards.length, 6);
  assert.equal(siteContent.about.howWeWork.steps.length, 6);
  assert.equal(siteContent.about.different.cards.length, 5);
  assert.equal(siteContent.about.trust.bullets.length, 6);
  assert.equal(siteContent.about.product.details[0], "When businesses use FLOW, they get a structured way to automate customer journeys such as enquiries, bookings, follow-ups, document collection, payment confirmation, support routing, and team handover.");
  assert.equal(siteContent.about.pilot.cta.label, "Book Free Demo");
  assert.equal(siteContent.about.finalCta.title, "Ready to automate your first customer workflow?");
  assert.equal(siteContent.about.finalCta.secondary.label, "Discuss My Workflow");
  assert.equal(siteContent.about.cta.label, "Book Free Demo");
});

test("proof page copy uses workflow example language", () => {
  assert.equal(siteContent.proofIndex.metadata.title, "Workflow Examples | FLOW by Crescora");
  assert.equal(siteContent.proofIndex.hero.eyebrow, "Workflow examples");
  assert.equal(siteContent.proofIndex.hero.title, "See how FLOW can work in real business scenarios.");
  assert.equal(siteContent.proofIndex.notice, "These examples are designed to help you understand how a FLOW pilot can be planned, built, tested, and expanded for your industry. They focus on workflow structure, team control, handover points, and measurable outcomes.");
  assert.equal(siteContent.proofIndex.section.title, "Workflow examples for priority industries.");
  assert.equal(siteContent.proofIndex.includes.items.length, 8);
  assert.equal(siteContent.ctas.openProofPage.label, "Open workflow example →");
  assert.equal(proofCards[0].text, "See how a hospital or clinic can automate appointment intake, patient reminders, document collection, payment follow-up, and safe handover for sensitive cases.");
});

test("legal page copy is structured and no longer placeholder text", () => {
  assert.equal(siteContent.legal.privacy.metadata.title, "Privacy Policy | Crescora AI");
  assert.equal(siteContent.legal.privacy.updatedOn, "June 18, 2026");
  assert.equal(siteContent.legal.privacy.sections.length, 6);
  assert.equal(siteContent.legal.privacy.sections[0].title, "Information we collect");
  assert.ok(siteContent.legal.privacy.sections[0].paragraphs[0].includes("work email"));
  assert.equal(siteContent.legal.terms.sections[1].title, "Service scope");
  assert.equal(siteContent.legal.cookies.sections[0].title, "Current cookie behavior");
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
  assert.equal(privacyPolicyContent.updatedOn, "06-June 2026");
  assert.equal(privacyPolicyContent.sections.length, 16);
  assert.equal(privacyPolicyContent.sections[0].title, "1. Scope of this Policy");
  assert.equal(privacyPolicyContent.sections[1].title, "2. Our Role in Data Processing");
  assert.equal(privacyPolicyContent.sections[2].bullets?.[0], "Account and workspace information: name, email address, phone number, password credentials, role, workspace name, organization details, member permissions, login activity, 2FA status, invitation status, and account preferences.");
  assert.equal(privacyPolicyContent.sections[3].title, "4. How We Use Information");
  assert.equal(privacyPolicyContent.sections[12].title, "13. Your Rights");
  assert.ok(privacyPolicyContent.sections[15].bullets?.includes("Email: support@crescora.ai"));
});

test("cookie policy page uses the supplied Crescora Flow copy", () => {
  assert.equal(cookiePolicyContent.metadata.title, "Cookie Policy | Crescora Flow");
  assert.equal(
    cookiePolicyContent.metadata.description,
    "Understand how Crescora Flow uses cookies and similar technologies for authentication, security, preferences, analytics, performance, and marketing.",
  );
  assert.equal(cookiePolicyContent.dateLabel, "Effective date");
  assert.equal(cookiePolicyContent.updatedOn, "06-June 2026");
  assert.equal(cookiePolicyContent.sections.length, 10);
  assert.equal(cookiePolicyContent.sections[0].title, "1. What Are Cookies?");
  assert.equal(cookiePolicyContent.sections[2].bullets?.[0], "Strictly necessary cookies: Required for the website and application to function. They support login, authentication, security, session management, CSRF protection, load balancing, and workspace access.");
  assert.equal(cookiePolicyContent.sections[3].tables?.[0].headers[0], "Category");
  assert.equal(cookiePolicyContent.sections[3].tables?.[0].rows[0][0], "Essential");
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
