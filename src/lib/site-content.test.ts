import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import assert from "node:assert/strict";
import test from "node:test";

import { proofCards } from "@/lib/decision-pages";
import { acceptableUsePolicyContent } from "@/lib/acceptable-use-policy-content";
import { isValidPhoneForCountry } from "@/lib/lead-form-validation";
import { cookiePolicyContent } from "@/lib/cookie-policy-content";
import { privacyPolicyContent } from "@/lib/privacy-policy-content";
import { enLocaleCopy } from "@/lib/locales/en";
import { siteContent } from "@/lib/site-content";
import { termsOfServiceContent } from "@/lib/terms-of-service-content";
import { pricingPackages, pricingPackagesByRegion, pricingRegions, useCases } from "@/lib/site-data";

const approvedCtaLabels = new Set([
  "Book Free Demo",
  "Discuss My Workflow",
  "View Pricing",
  "Book Founder-Led Pilot Review",
  "Try Crescora AI Demo",
]);

function collectSourceFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const absolute = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(entry.name)) {
        return [];
      }

      return collectSourceFiles(absolute);
    }

    if (!entry.isFile() || !/\.(ts|tsx|md)$/.test(entry.name)) {
      return [];
    }

    return [absolute];
  });
}

test("public brand positioning uses Crescora AI without separate product branding", () => {
  assert.equal(siteContent.site.name, "Crescora AI");
  assert.equal(siteContent.site.product, "Crescora AI");
  assert.equal(siteContent.site.productFull, "Crescora AI");
  assert.equal(siteContent.homepage.hero.badge, "Founder-led AI workflow automation");
  assert.equal(
    siteContent.homepage.hero.title,
    "AI workflow automation for customer conversations, follow-ups, and business operations.",
  );
  assert.match(siteContent.homepage.hero.description, /enquiries, appointment booking, lead qualification/);
  assert.match(siteContent.homepage.founderTrust.description, /selected businesses/);
  assert.equal(siteContent.homepage.productProof.panels[0]?.metric, "50 automation node types");
});

test("homepage uses proof-safe claims and measurable pilot language", () => {
  const homepageText = JSON.stringify(siteContent.homepage);

  assert.doesNotMatch(homepageText, /70-90%|70–90%|70â/i);
  assert.doesNotMatch(homepageText, /14 days/i);
  assert.match(siteContent.homepage.outcomes.automationClaim, /large share of repetitive FAQs/);
  assert.match(siteContent.homepage.outcomes.automationSupport, /response speed, lead capture rate/);
  assert.match(siteContent.homepage.pilot.description, /around two weeks/);
  assert.deepEqual(siteContent.homepage.pilotProcess.steps, [
    "Workflow discovery",
    "Pilot scope",
    "Workflow design",
    "Build and test",
    "Launch and monitor",
    "Expand safely",
  ]);
});

test("navigation and workflow examples use the new public route", () => {
  assert.equal(siteContent.navigation[3]?.href, "/workflow-examples");
  assert.equal(siteContent.navigation[3]?.label, "Workflow Examples");
  assert.equal(enLocaleCopy.navigation[3]?.href, "/workflow-examples");
  assert.ok(proofCards.every((card) => card.href.startsWith("/workflow-examples/")));
  assert.equal(siteContent.ctas.openProofPage.label, "Open workflow example →");
});

test("approved CTAs are used for conversion actions", () => {
  const ctaValues = [
    siteContent.ctas.bookProjectDemo.label,
    siteContent.ctas.requestScopeCall.label,
    siteContent.ctas.talkToSales.label,
    siteContent.ctas.bookFounderPilotReview.label,
    siteContent.ctas.tryDemo.label,
    siteContent.pricing.hero.primaryCta.label,
    siteContent.pricing.hero.secondaryCta.label,
    siteContent.contact.hero.title,
    pricingPackages[3].ctaLabel,
  ];

  assert.equal(siteContent.ctas.bookProjectDemo.label, "Book Free Demo");
  assert.equal(siteContent.ctas.requestScopeCall.label, "Discuss My Workflow");
  assert.equal(siteContent.ctas.seePricing.label, "View Pricing");
  assert.equal(siteContent.ctas.tryDemo.href, "/demo");
  assert.equal(pricingPackages[3].ctaLabel, "Discuss My Workflow");
  assert.ok(ctaValues.filter((label) => approvedCtaLabels.has(label)).length >= 6);
});

test("pricing and contact copy clarify scope, extras, cancellation, and consent", () => {
  assert.equal(pricingRegions[0].value, "india");
  assert.equal(pricingPackagesByRegion.global[0].price, "$199/mo");
  assert.match(siteContent.pricing.trustCopy, /Before billing starts/);
  assert.match(siteContent.pricing.cancellationPolicy, /cancelled before the next billing period/);
  assert.ok(siteContent.pricing.beforeLaunch.items.includes("Workflow discovery call"));
  assert.ok(siteContent.pricing.mayCostExtra.items.includes("Payment gateway charges"));
  assert.ok(siteContent.pricing.clientReadiness.items.includes("Sample customer scenarios"));
  assert.ok(siteContent.pricing.scopeClarity.items.includes("Third-party provider costs"));
  assert.match(siteContent.contact.consent, /Privacy Policy/);
  assert.match(siteContent.contact.responseExpectation, /1 business day/);
});

test("trust pages publish honest early-stage security and responsible AI boundaries", () => {
  assert.match(siteContent.trustPages.security.hero.description, /we do not claim certifications/);
  assert.ok(siteContent.trustPages.security.sections[1]?.items.includes("SOC 2 certification"));
  assert.match(siteContent.trustPages.responsibleAi.hero.description, /Sensitive decisions should remain under human review/);
  assert.ok(siteContent.trustPages.dataProcessing.sections[1]?.items.some((item) => item.includes("consent")));
  assert.ok(siteContent.trustPages.subprocessors.sections[0]?.items.includes("AI model providers"));
  assert.ok(siteContent.trustPages.support.sections[1]?.items.includes("Growth: within 1 business day"));
});

test("about page copy includes founder-led proof policy and safe legal identity defaults", () => {
  assert.match(siteContent.about.founderLed.paragraphs.join(" "), /Hyderabad/);
  assert.equal(siteContent.about.founderLed.founders.length, 2);
  assert.match(siteContent.about.founderLed.founders[0]?.linkedin ?? "", /linkedin\.com\/in\/navyachirumalla/);
  assert.match(siteContent.about.founderLed.founders[1]?.linkedin ?? "", /linkedin\.com\/in\/prashanth-chinala/);
  assert.ok(siteContent.about.whatWeWillNotDo.items.includes("We will not show fake client logos"));
  assert.match(siteContent.about.notOnly.summary, /workflow automation system/);
  assert.match(siteContent.about.proofPolicy.description, /fake testimonials/);
  assert.equal(siteContent.about.proofPolicy.reviewScreenshots.items.length, 4);
  assert.equal(siteContent.about.proofPolicy.reviewScreenshots.items[3]?.quote, null);
  assert.ok(siteContent.about.proofPolicy.reviewScreenshots.items.every((review) => review.isPublicReviewScreenshot));
  assert.match(siteContent.about.legalIdentity.description, /UDYAM-TS-02-0344089/);
  assert.match(siteContent.about.legalIdentity.description, /Monday to Saturday, 10:00 AM to 6:00 PM IST/);
  assert.match(siteContent.about.legalIdentity.description, /Support coverage depends on plan/);
  assert.ok(siteContent.about.legalIdentity.details.some((detail) => detail.value === "By appointment through email"));
});

test("legal and lead-form content remains structured", () => {
  assert.equal(siteContent.leadForm.badge, "Workflow enquiry");
  assert.equal(siteContent.leadForm.submitIdle, "Book Free Demo");
  assert.equal(isValidPhoneForCountry("+91 98765 43210", siteContent.leadForm.options.countries[0]), true);
  assert.equal(isValidPhoneForCountry("123", siteContent.leadForm.options.countries[0]), false);
  assert.ok(useCases.length >= 12);
  assert.match(privacyPolicyContent.metadata.title, /Crescora AI/);
  assert.match(cookiePolicyContent.metadata.title, /Crescora AI/);
  assert.match(termsOfServiceContent.metadata.title, /Crescora AI/);
  assert.match(JSON.stringify(acceptableUsePolicyContent), /healthcare, finance, insurance/);
});

test("public source does not contain banned marketing or internal planning phrases", () => {
  const banned = [
    /FLOW by Crescora AI/,
    /\bFLOW\b/,
    /Crescora FLOW/,
    /Crescora Flow/,
    /70-90%/,
    /70–90%/,
    /50\+ workflow node types/i,
    /revenue pages/i,
    /commercial intent/i,
    /demoted from index/i,
    /proven automation templates/i,
    /Talk to Sales/,
    /Get Started/,
    /Launch Now/,
    /Find My Use Case/,
    /Get Project Scope/,
    /Search target/,
    /SEO landing page/,
    /convert the SEO visitor/i,
    /Keyword target/i,
    /Use this article/i,
    /Practical SEO article/i,
    /Link this article/i,
    /linking into solution/i,
    /Search-intent/i,
    /search intent/i,
    /Bot understands customer need/i,
    /launch-ready/i,
    /search-result markup/i,
    /thin keyword/i,
    /Proof pages/i,
    /Request support demo/i,
    /state hubs/i,
    /Priority workflows/i,
    /Local trust/i,
    /Open state hub/i,
    /report recommends/i,
    /template-led pages/i,
    /Discuss My Workflow Cost/,
  ];
  const files = collectSourceFiles(join(process.cwd(), "src")).filter((file) => {
    const relative = file.replace(process.cwd(), "");
    return !relative.includes(".test.");
  });

  assert.ok(files.length > 0);

  for (const file of files) {
    if (statSync(file).size === 0) {
      continue;
    }

    const source = readFileSync(file, "utf8");
    for (const pattern of banned) {
      assert.doesNotMatch(source, pattern, `${pattern} found in ${file}`);
    }
  }
});
