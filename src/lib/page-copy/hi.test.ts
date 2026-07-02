import assert from "node:assert/strict";
import test from "node:test";

import { hiPageCopy } from "@/lib/page-copy/hi";

test("Hindi home page copy includes the multilingual hub route set", () => {
  assert.equal(hiPageCopy.home.routeCards.length, 7);
  assert.equal(hiPageCopy.home.routeCards[0].href, "/hi/solutions");
  assert.equal(hiPageCopy.home.breadcrumb[1].href, "https://www.crescora.ai/hi");
});

test("Hindi India hub page copy keeps the localized hero labels together", () => {
  assert.match(hiPageCopy.india.metadata.title, /AI Automation Services for Indian Businesses/i);
  assert.match(hiPageCopy.india.hero.title, /Indian businesses/i);
  assert.match(hiPageCopy.india.stateSection.title, /automation examples/i);
  assert.match(hiPageCopy.india.localSection.title, /Real service area/i);
  assert.doesNotMatch(
    [
      hiPageCopy.india.metadata.description,
      hiPageCopy.india.hero.description,
      hiPageCopy.india.stateSection.title,
      hiPageCopy.india.workflowSection.description,
      hiPageCopy.india.templateSection.title,
      hiPageCopy.india.localSection.title,
    ].join(" "),
    /state hubs|Hindi index|Template-led pages|Localized trust signals|non-brand search/i,
  );
});

