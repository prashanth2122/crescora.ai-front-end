import assert from "node:assert/strict";
import test from "node:test";

import {
  buildLeadFormProgress,
  buildLeadFormSelectionSnapshot,
  getDestinationPath,
  getLinkTargetType,
  getMarketingParams,
  getPageAnalyticsContext,
  getPageCategory,
  sanitizeEventName,
} from "@/lib/analytics";

test("analytics categorizes key route types", () => {
  assert.equal(getPageCategory("/"), "home");
  assert.equal(getPageCategory("/contact"), "contact");
  assert.equal(getPageCategory("/pricing"), "pricing");
  assert.equal(getPageCategory("/industries"), "industry_index");
  assert.equal(getPageCategory("/industries/hospitals"), "industry_detail");
  assert.equal(getPageCategory("/use-cases/appointment-booking-automation"), "use_case_detail");
  assert.equal(getPageCategory("/hi/workflows"), "workflow_index");
  assert.equal(getPageCategory("/privacy"), "legal");
});

test("analytics context includes locale, sections, and marketing params", () => {
  assert.deepEqual(
    getPageAnalyticsContext(
      "/hi/industries/hospitals",
      "?utm_source=google&utm_campaign=demo&gclid=test-click",
    ),
    {
      page_path: "/hi/industries/hospitals",
      page_locale: "hi",
      page_category: "industry_detail",
      page_depth: 2,
      primary_section: "industries",
      secondary_section: "hospitals",
      has_query_params: true,
      utm_source: "google",
      utm_campaign: "demo",
      gclid: "test-click",
    },
  );
});

test("analytics helpers normalize events and link targets", () => {
  assert.equal(sanitizeEventName("Lead Form Success"), "lead_form_success");
  assert.equal(
    getDestinationPath("/contact?utm_source=google", "https://crescora.ai"),
    "/contact",
  );
  assert.equal(
    getLinkTargetType("/contact", "https://crescora.ai"),
    "internal",
  );
  assert.equal(
    getLinkTargetType("mailto:sales@crescora.ai", "https://crescora.ai"),
    "mailto",
  );
  assert.equal(
    getLinkTargetType("https://example.com", "https://crescora.ai"),
    "external",
  );
});

test("lead form analytics snapshots avoid pii and keep funnel state", () => {
  assert.deepEqual(
    buildLeadFormSelectionSnapshot({
      country: "India",
      industry: "Healthcare",
      primaryUseCase: "Appointment booking",
      monthlyEnquiryVolume: "100-500",
      timeline: "This month",
      preferredChannel: "",
      currentTools: "WhatsApp, Google Sheets",
      keyProblem: "",
    }),
    {
      country: "India",
      industry: "Healthcare",
      primary_use_case: "Appointment booking",
      monthly_enquiry_volume: "100-500",
      timeline: "This month",
      preferred_channel: "unspecified",
      has_current_tools: true,
      has_problem_statement: false,
    },
  );

  assert.deepEqual(buildLeadFormProgress(3, 9), {
    completed_required_fields: 3,
    required_fields_total: 9,
    completion_percent: 33,
  });
});

test("marketing helper only keeps supported parameters", () => {
  assert.deepEqual(
    getMarketingParams("utm_medium=cpc&utm_content=hero&utm_term=workflow&foo=bar"),
    {
      utm_medium: "cpc",
      utm_content: "hero",
      utm_term: "workflow",
    },
  );
});
