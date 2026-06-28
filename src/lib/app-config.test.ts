import assert from "node:assert/strict";
import test from "node:test";

import {
  buildMailtoHref,
  buildPhoneHref,
  buildWhatsAppHref,
  getPublicContactSurfaceConfig,
  normalizeEmailAddress,
  normalizeDialablePhoneNumber,
} from "@/lib/app-config";

test("whatsapp helpers normalize configured numbers and build click-to-chat urls", () => {
  assert.equal(
    normalizeDialablePhoneNumber("+91 98765 43210"),
    "919876543210",
  );
  assert.equal(normalizeDialablePhoneNumber("abc"), null);
  assert.equal(
    buildWhatsAppHref("+91 98765 43210", "Hi Crescora"),
    "https://wa.me/919876543210?text=Hi%20Crescora",
  );
  assert.equal(buildPhoneHref("+91 98765 43210"), "tel:+919876543210");
  assert.equal(normalizeEmailAddress(" support@crescora.ai "), "support@crescora.ai");
  assert.equal(normalizeEmailAddress("invalid"), null);
  assert.equal(buildMailtoHref(" support@crescora.ai "), "mailto:support@crescora.ai");
});

test("public contact surface config keeps a safe fallback when env is incomplete", () => {
  assert.deepEqual(
    getPublicContactSurfaceConfig({}),
    {
      bookCallUrl: "/contact",
      callHref: null,
      supportEmailHref: "mailto:support@crescora.ai",
      whatsappHref:
        "https://wa.me/919642021224?text=I'm%20interested%20in%20your%20product",
      whatsappPrefillText: "I'm interested in your product",
    },
  );

  assert.deepEqual(
    getPublicContactSurfaceConfig({
      BOOK_A_CALL_URL: "https://cal.com/crescora/demo",
      SUPPORT_EMAIL: "hello@crescora.ai",
      WHATSAPP_PHONE_NUMBER: "+91 98765 43210",
      WHATSAPP_PREFILL_TEXT: "Need a workflow demo",
    }),
    {
      bookCallUrl: "https://cal.com/crescora/demo",
      callHref: "tel:+919876543210",
      supportEmailHref: "mailto:hello@crescora.ai",
      whatsappHref:
        "https://wa.me/919876543210?text=Need%20a%20workflow%20demo",
      whatsappPrefillText: "Need a workflow demo",
    },
  );

  assert.deepEqual(
    getPublicContactSurfaceConfig({
      WHATSAPP_PHONE_NUMBER: "+91 98765 43210",
      SUPPORT_PHONE_NUMBER: "+1 415 555 0123",
    }),
    {
      bookCallUrl: "/contact",
      callHref: "tel:+14155550123",
      supportEmailHref: "mailto:support@crescora.ai",
      whatsappHref:
        "https://wa.me/919876543210?text=I'm%20interested%20in%20your%20product",
      whatsappPrefillText: "I'm interested in your product",
    },
  );
});
