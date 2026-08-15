import assert from "node:assert/strict";
import test from "node:test";

import { getProductImageDimensions, productImageDimensions } from "@/lib/product-image-dimensions";
import { siteContent } from "@/lib/site-content";

test("homepage platform screenshots have mapped source dimensions", () => {
  const heroDimensions = getProductImageDimensions(siteContent.homepage.hero.visual.src);

  assert.ok(
    siteContent.homepage.hero.visual.src in productImageDimensions,
    `missing product image dimensions for ${siteContent.homepage.hero.visual.src}`,
  );
  assert.ok(heroDimensions.width > 0, `invalid width for ${siteContent.homepage.hero.visual.src}`);
  assert.ok(heroDimensions.height > 0, `invalid height for ${siteContent.homepage.hero.visual.src}`);

  for (const tab of siteContent.homepage.platformProof.tabs) {
    const dimensions = getProductImageDimensions(tab.image.src);

    assert.ok(
      tab.image.src in productImageDimensions,
      `missing product image dimensions for ${tab.image.src}`,
    );
    assert.ok(dimensions.width > 0, `invalid width for ${tab.image.src}`);
    assert.ok(dimensions.height > 0, `invalid height for ${tab.image.src}`);
  }
});

test("homepage platform proof keeps scroll-heavy tall screenshots available", () => {
  const portraitScreens = [
    siteContent.homepage.platformProof.tabs[2]?.image.src,
    siteContent.homepage.platformProof.tabs[3]?.image.src,
  ].filter((src): src is string => Boolean(src));

  assert.ok(portraitScreens.length >= 2);

  for (const src of portraitScreens) {
    const dimensions = getProductImageDimensions(src);
    assert.ok(dimensions.height > dimensions.width, `${src} should remain taller than wide`);
  }
});
