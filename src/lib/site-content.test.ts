import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import assert from "node:assert/strict";
import test from "node:test";

import { proofCards } from "@/lib/decision-pages";
import { acceptableUsePolicyContent } from "@/lib/acceptable-use-policy-content";
import { isValidPhoneForCountry } from "@/lib/lead-form-validation";
import { cookiePolicyContent } from "@/lib/cookie-policy-content";
import { homepageReviews } from "@/lib/homepage-reviews";
import { privacyPolicyContent } from "@/lib/privacy-policy-content";
import { enLocaleCopy } from "@/lib/locales/en";
import { siteContent } from "@/lib/site-content";
import { termsOfServiceContent } from "@/lib/terms-of-service-content";
import { pricingPackages, pricingPackagesByRegion, pricingRegions, useCases } from "@/lib/site-data";
import { buildPublicPricingDataFromApiResponse } from "@/lib/public-pricing";

const approvedCtaLabels = new Set([
  "Book a Free Demo",
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

test("homepage content matches the new brand, structure, and proof model", () => {
  assert.equal(siteContent.site.name, "Crescora.ai");
  assert.equal(siteContent.site.product, "Crescora AI");
  assert.equal(siteContent.site.productFull, "Crescora AI");
  assert.equal(siteContent.site.seoTitle, "AI Workflow Automation for WhatsApp & Web Chat | Crescora.ai");
  assert.equal(siteContent.homepage.hero.badge, "AI WORKFLOW AUTOMATION FOR CUSTOMER OPERATIONS");
  assert.equal(
    siteContent.homepage.hero.title,
    "AI Workflow Automation That Turns Conversations Into Business Actions.",
  );
  assert.equal(siteContent.homepage.hero.secondaryCtaHref, "#homepage-demo");
  assert.equal(siteContent.homepage.hero.proofStrip.length, 6);
  assert.equal(siteContent.homepage.hero.proofStrip[5], "Governance & Control");
  assert.equal(siteContent.homepage.demoVideo.title, "See one complete business workflow in action.");
  assert.equal(siteContent.homepage.demoVideo.whatYouWillSee.length, 4);
  assert.equal(siteContent.homepage.testimonial.title, "What clients say about Crescora.ai");
  assert.equal(homepageReviews.length, 1);
  assert.equal(homepageReviews[0]?.sourceLabel, "Google Review");
  assert.equal(homepageReviews[0]?.logoName, "Google");
  assert.equal(homepageReviews[0]?.imageUrl, "/reviews/vidya-review.png");
  assert.match(homepageReviews[0]?.imageAlt ?? "", /Vidya/);
  assert.match(siteContent.homepage.demoVideo.note, /product walkthrough/);
  assert.equal(
    siteContent.homepage.platformProof.title,
    "Build, operate, and improve customer automation from one workspace.",
  );
  assert.equal(siteContent.homepage.platformProof.tabs.length, 5);
  assert.equal(siteContent.homepage.platformProof.tabs[0]?.proofPoints[0], "50 supported workflow node types");
  assert.equal(siteContent.homepage.platformProof.tabs[4]?.proofPoints[0], "Web Widget");
  assert.equal(siteContent.homepage.automation.cards.length, 6);
  assert.equal(siteContent.homepage.industries.cards.length, 6);
  assert.equal(siteContent.homepage.trust.cards.length, 4);
  assert.equal(siteContent.homepage.implementation.steps.length, 3);
  assert.equal(siteContent.homepage.implementation.metrics.length, 4);
  assert.equal(siteContent.homepage.faq.items.length, 6);
});

test("homepage uses proof-safe claims and focused rollout language", () => {
  const homepageText = JSON.stringify(siteContent.homepage);

  assert.doesNotMatch(homepageText, /70-90%|70–90%|70â/i);
  assert.doesNotMatch(homepageText, /14 days/i);
  assert.match(siteContent.homepage.implementation.rolloutNote, /workflow complexity/);
  assert.deepEqual(
    siteContent.homepage.implementation.steps.map((step) => step.title),
    ["Map the workflow", "Build & test", "Launch & improve"],
  );
  assert.equal(siteContent.homepage.implementation.metricsEyebrow, "WHAT WE MEASURE AFTER LAUNCH");
  assert.ok(siteContent.homepage.implementation.founderCallout.items.includes("Fallback paths tested"));
  assert.ok(siteContent.homepage.trust.links.some((item) => item.label === "Responsible AI"));
  assert.doesNotMatch(homepageText, /Role and company not published/);
  assert.match(siteContent.homepage.trust.description, /human oversight/);
});

test("navigation and resources keep workflow examples off the top-level nav", () => {
  assert.equal(siteContent.navigation.length, 5);
  assert.equal(enLocaleCopy.navigation.length, 5);
  assert.equal(siteContent.navigation[3]?.href, "/resources");
  assert.equal(siteContent.navigation[3]?.label, "Resources");
  assert.equal(enLocaleCopy.navigation[3]?.href, "/resources");
  assert.ok(proofCards.every((card) => card.href.startsWith("/workflow-examples/")));
  assert.equal(siteContent.footerGroups[2]?.links[1]?.label, "Workflow Examples");
  assert.equal(siteContent.ctas.openProofPage.label, "Open workflow example ->");
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

  assert.equal(siteContent.ctas.bookProjectDemo.label, "Book a Free Demo");
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

test("public pricing API data maps to selectable pricing cards", () => {
  const pricingData = buildPublicPricingDataFromApiResponse({
    generatedAt: "2026-07-19T00:00:00.000Z",
    billingRegion: {
      title: "Billing region",
      description: "Pricing changes by billing region.",
      defaultRegionCode: "IN",
      regions: [
        { code: "IN", label: "India - INR ₹", currency: "INR", currencySymbol: "₹", isDefault: true },
        { code: "ROW", label: "Rest of World - USD $", currency: "USD", currencySymbol: "$", isDefault: false },
      ],
    },
    plans: [
      {
        code: "growth",
        name: "Growth",
        eyebrow: "Growing operations",
        badge: "Most Popular",
        sortOrder: 20,
        isCustomPricing: false,
        bestFor: "Growing operations",
        description: "Best for teams expanding automation.",
        includes: ["5 active flows", "15,000 AI credits/month"],
        channels: ["WEB", "WHATSAPP"],
        ctaLabel: "Choose Growth",
        price: {
          currency: "INR",
          regionCode: "IN",
          interval: "month",
          amountPaise: 2999900,
          amountMajor: 29999,
          display: "₹29,999/mo",
          startsFromDisplay: null,
          baseAmountPaise: 4999900,
          discountedAmountPaise: 2999900,
        },
        pricesByRegion: {
          IN: {
            currency: "INR",
            regionCode: "IN",
            interval: "month",
            amountPaise: 2999900,
            amountMajor: 29999,
            display: "₹29,999/mo",
            startsFromDisplay: null,
            baseAmountPaise: 4999900,
            discountedAmountPaise: 2999900,
          },
          ROW: {
            currency: "USD",
            regionCode: "ROW",
            interval: "month",
            amountPaise: 59900,
            amountMajor: 599,
            display: "$599/mo",
            startsFromDisplay: null,
            baseAmountPaise: 59900,
            discountedAmountPaise: null,
          },
        },
        limits: {
          bots: 1,
          flows: 5,
          users: 3,
          aiCredits: 15000,
          monthlyConversations: 10000,
          kbStorageMb: 2048,
          whatsappTemplates: 10,
        },
      },
    ],
  });

  assert.equal(pricingData.source, "api");
  assert.equal(pricingData.defaultRegion, "IN");
  assert.equal(pricingData.regionOptions[1]?.value, "ROW");
  assert.equal(pricingData.packagesByRegion.IN?.[0]?.price, "₹29,999/mo");
  assert.equal(pricingData.packagesByRegion.ROW?.[0]?.price, "$599/mo");
  assert.equal(pricingData.packagesByRegion.IN?.[0]?.badge, "Most Popular");
  assert.deepEqual(pricingData.packagesByRegion.IN?.[0]?.includes, ["5 active flows", "15,000 AI credits/month"]);
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
  assert.equal(siteContent.about.founderLed.founders[0]?.image.src, "/founders/navya-chirumalla-founder.png");
  assert.equal(siteContent.about.founderLed.founders[1]?.image.src, "/founders/prashanth-chinala-founder.png");
  assert.match(siteContent.about.founderLed.founders[0]?.summary ?? "", /several AI companies/);
  assert.match(siteContent.about.founderLed.founders[1]?.summary ?? "", /billion-dollar enterprise environments/);
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
  assert.equal(siteContent.leadForm.badge, "Demo request");
  assert.equal(siteContent.leadForm.submitIdle, "Request My Demo");
  assert.equal(siteContent.leadForm.variants.homepage.submitIdle, "Request My Demo");
  assert.equal(siteContent.leadForm.variants.homepage.badge, "Book a free demo");
  assert.equal(
    siteContent.leadForm.variants.contact.title,
    "See How Crescora.ai Can Automate Your Business",
  );
  assert.equal(
    siteContent.leadForm.variants.contact.submitIdle,
    "Book My Free Demo",
  );
  assert.deepEqual(siteContent.leadForm.variants.contact.benefits, [
    "No commitment",
    "Personalized business demo",
    "Our team will contact you to schedule a convenient time",
  ]);
  assert.equal(
    siteContent.leadForm.successMessage,
    "Thanks — your demo request has been received. We'll review your workflow and contact you to schedule the next step.",
  );
  assert.equal(siteContent.ui.footer.publicLocation, "Hyderabad, Telangana, India");
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

