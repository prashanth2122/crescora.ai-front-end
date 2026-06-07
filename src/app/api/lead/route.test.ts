import assert from "node:assert/strict";
import test from "node:test";

import { POST } from "./route";

test("forwards the lead form to the customer intake API with a signed token", async () => {
  const originalFetch = globalThis.fetch;
  const calls: Array<{
    url: string;
    init?: RequestInit;
  }> = [];

  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    calls.push({ url, init });

    if (url.endsWith("/customer-facing-website/token")) {
      return new Response(
        JSON.stringify({
          tokenType: "Bearer",
          token: "signed-token",
          expiresAt: "2026-06-07T00:05:00.000Z",
          expiresInSeconds: 300,
        }),
        {
          status: 200,
          headers: {
            "content-type": "application/json",
          },
        },
      );
    }

    if (url.endsWith("/customer-facing-website/intakes")) {
      return new Response(
        JSON.stringify({
          id: "inq_1",
          assessment: {
            verdict: "VALID_CUSTOMER",
          },
        }),
        {
          status: 201,
          headers: {
            "content-type": "application/json",
          },
        },
      );
    }

    throw new Error(`Unexpected fetch call: ${url}`);
  }) as typeof fetch;

  try {
    const request = new Request("http://localhost:3001/api/lead", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        origin: "http://localhost:3001",
        referer: "http://localhost:3001/?utm_source=google&utm_medium=cpc&utm_campaign=demo",
        "user-agent": "Mozilla/5.0",
        "accept-language": "en-US,en;q=0.9",
        "x-forwarded-for": "203.0.113.10",
      },
      body: JSON.stringify({
        fullName: "Asha Patel",
        companyName: "Blue River Logistics",
        workEmail: "asha@blueriver.com",
        country: "India",
        phoneOrWhatsapp: "+91 9876543210",
        industry: "Logistics",
        primaryUseCase: "Lead Capture and Qualification",
        monthlyEnquiryVolume: "100-250",
        timeline: "This month",
        preferredChannel: "Email",
        currentTools: "Sheets",
        keyProblem: "Manual lead triage",
      }),
    });

    const response = await POST(request);
    const responseBody = (await response.json()) as {
      id?: string;
      assessment?: { verdict?: string };
    };

    assert.equal(response.status, 201);
    assert.equal(calls.length, 2);
    assert.equal(calls[0]?.url.endsWith("/customer-facing-website/token"), true);
    assert.equal(calls[1]?.url.endsWith("/customer-facing-website/intakes"), true);

    const tokenHeaders = new Headers(calls[0]?.init?.headers);
    assert.equal(tokenHeaders.get("origin"), "http://localhost:3001");
    assert.equal(tokenHeaders.get("referer"), "http://localhost:3001/?utm_source=google&utm_medium=cpc&utm_campaign=demo");

    const intakeHeaders = new Headers(calls[1]?.init?.headers);
    assert.equal(intakeHeaders.get("authorization"), "Bearer signed-token");
    assert.equal(intakeHeaders.get("content-type"), "application/json");

    const intakeBody = JSON.parse(String(calls[1]?.init?.body)) as {
      fullName?: string;
      companyName?: string;
      workEmail?: string;
      phoneNumber?: string;
      pageUrl?: string | null;
      utmSource?: string | null;
      utmMedium?: string | null;
      utmCampaign?: string | null;
    };

    assert.equal(intakeBody.fullName, "Asha Patel");
    assert.equal(intakeBody.phoneNumber, "+91 9876543210");
    assert.equal(intakeBody.pageUrl, "http://localhost:3001/?utm_source=google&utm_medium=cpc&utm_campaign=demo");
    assert.equal(intakeBody.utmSource, "google");
    assert.equal(intakeBody.utmMedium, "cpc");
    assert.equal(intakeBody.utmCampaign, "demo");
    assert.equal(responseBody.id, "inq_1");
    assert.equal(responseBody.assessment?.verdict, "VALID_CUSTOMER");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("rejects incomplete submissions before calling the backend", async () => {
  const originalFetch = globalThis.fetch;
  let called = false;

  globalThis.fetch = (async () => {
    called = true;
    throw new Error("should not be called");
  }) as typeof fetch;

  try {
    const request = new Request("http://localhost:3001/api/lead", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fullName: "Asha Patel",
      }),
    });

    const response = await POST(request);
    const body = (await response.json()) as { error?: string };

    assert.equal(response.status, 400);
    assert.equal(called, false);
    assert.equal(body.error, "Missing required fields");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("returns service unavailable when the backend cannot be reached", async () => {
  const originalFetch = globalThis.fetch;

  globalThis.fetch = (async () => {
    throw new Error("backend offline");
  }) as typeof fetch;

  try {
    const request = new Request("http://localhost:3001/api/lead", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fullName: "Asha Patel",
        companyName: "Blue River Logistics",
        workEmail: "asha@blueriver.com",
        country: "India",
        phoneOrWhatsapp: "+91 9876543210",
        industry: "Logistics",
        primaryUseCase: "Lead Capture and Qualification",
        monthlyEnquiryVolume: "100-250",
        timeline: "This month",
      }),
    });

    const response = await POST(request);
    const body = (await response.json()) as { error?: string };

    assert.equal(response.status, 503);
    assert.equal(body.error, "Lead service unavailable");
  } finally {
    globalThis.fetch = originalFetch;
  }
});
