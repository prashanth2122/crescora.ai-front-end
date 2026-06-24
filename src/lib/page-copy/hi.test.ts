import assert from "node:assert/strict";
import test from "node:test";

import { hiPageCopy } from "@/lib/page-copy/hi";

test("Hindi home page copy includes the multilingual hub route set", () => {
  assert.equal(hiPageCopy.home.routeCards.length, 7);
  assert.equal(hiPageCopy.home.routeCards[0].href, "/hi/solutions");
  assert.equal(hiPageCopy.home.breadcrumb[1].href, "https://www.crescora.ai/hi");
});

test("Hindi India hub page copy keeps the localized hero labels together", () => {
  assert.equal(hiPageCopy.india.hero.eyebrow, "इंडिया SEO");
  assert.equal(hiPageCopy.india.stateSection.title, "Priority state hubs के लिए Hindi index.");
  assert.equal(hiPageCopy.india.localSection.title, "Localized trust signals के लिए checklist.");
});

