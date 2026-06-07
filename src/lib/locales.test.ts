import test from "node:test";
import assert from "node:assert/strict";

import { enLocaleCopy } from "@/lib/locales/en";
import {
  buildLocalizedHref,
  getLocaleFromPath,
  getLocalizedRoutePath,
  stripLocalePrefix,
  withLocalePrefix,
} from "@/lib/locales";

test("detects locale from the path prefix", () => {
  assert.equal(getLocaleFromPath("/"), "en");
  assert.equal(getLocaleFromPath("/solutions"), "en");
  assert.equal(getLocaleFromPath("/hi"), "hi");
  assert.equal(getLocaleFromPath("/hi/blog"), "hi");
});

test("strips locale prefixes from localized paths", () => {
  assert.equal(stripLocalePrefix("/hi"), "/");
  assert.equal(stripLocalePrefix("/hi/solutions"), "/solutions");
  assert.equal(stripLocalePrefix("/solutions"), "/solutions");
});

test("builds localized hrefs without breaking unsupported english routes", () => {
  assert.equal(buildLocalizedHref("/solutions", "hi"), "/hi/solutions");
  assert.equal(buildLocalizedHref("/contact", "hi"), "/contact");
  assert.equal(buildLocalizedHref("/contact", "en"), "/contact");
});

test("maps locale switcher routes to available localized hubs", () => {
  assert.equal(getLocalizedRoutePath("/", "hi"), "/hi");
  assert.equal(getLocalizedRoutePath("/solutions", "hi"), "/hi/solutions");
  assert.equal(getLocalizedRoutePath("/solutions/flow-vs-chatbots", "hi"), "/hi/solutions");
  assert.equal(getLocalizedRoutePath("/contact", "hi"), "/hi");
  assert.equal(getLocalizedRoutePath("/hi/solutions", "en"), "/solutions");
});

test("keeps locale prefix helper deterministic", () => {
  assert.equal(withLocalePrefix("/solutions", "hi"), "/hi/solutions");
  assert.equal(withLocalePrefix("/contact", "hi"), "/contact");
  assert.equal(withLocalePrefix("/hi/blog", "en"), "/blog");
});

test("footer copy reflects the cleaned public-facing labels", () => {
  assert.equal(
    enLocaleCopy.footer.intro,
    "Built for Indian businesses that want practical automation across enquiries, bookings, follow-ups, support, payments, and operations.",
  );
  assert.equal(enLocaleCopy.ctas.requestScopeCall.label, "Discuss My Workflow");
  assert.equal(enLocaleCopy.footerGroups[1].links[2].label, "Education");
  assert.equal(enLocaleCopy.footerGroups[2].links[3].label, "Pilot Program");
});
