import { NextResponse } from "next/server";

import { customerIntakeApiConfig } from "@/lib/app-config";

type LeadPayload = {
  fullName?: string;
  companyName?: string;
  workEmail?: string;
  country?: string;
  phoneOrWhatsapp?: string;
  industry?: string;
  primaryUseCase?: string;
  monthlyEnquiryVolume?: string;
  timeline?: string;
  preferredChannel?: string;
  currentTools?: string;
  keyProblem?: string;
  pageUrl?: string;
  referrerUrl?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
};

function isBlank(value: unknown) {
  return typeof value !== "string" || value.trim().length === 0;
}

function normalizeBaseUrl(value: string) {
  return value.trim().replace(/\/+$/, "");
}

function buildForwardHeaders(request: Request) {
  const headers = new Headers();

  for (const headerName of [
    "origin",
    "referer",
    "user-agent",
    "accept-language",
    "x-forwarded-for",
    "x-real-ip",
  ]) {
    const value = request.headers.get(headerName);
    if (value) {
      headers.set(headerName, value);
    }
  }

  return headers;
}

function toCleanString(value: string | undefined | null) {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.trim();
  return normalized.length > 0 ? normalized : null;
}

function extractUtmParams(pageUrl: string | null) {
  if (!pageUrl) {
    return {
      utmSource: null,
      utmMedium: null,
      utmCampaign: null,
    };
  }

  try {
    const url = new URL(pageUrl);
    return {
      utmSource: toCleanString(url.searchParams.get("utm_source")),
      utmMedium: toCleanString(url.searchParams.get("utm_medium")),
      utmCampaign: toCleanString(url.searchParams.get("utm_campaign")),
    };
  } catch {
    return {
      utmSource: null,
      utmMedium: null,
      utmCampaign: null,
    };
  }
}

async function readResponseBody(response: Response) {
  if (response.status === 204) {
    return null;
  }

  const contentType = response.headers.get("content-type") ?? "";
  const rawText = await response.text();

  if (!rawText) {
    return null;
  }

  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(rawText);
    } catch {
      return rawText;
    }
  }

  return rawText;
}

function buildCustomerIntakePayload(body: LeadPayload, request: Request) {
  const pageUrl =
    toCleanString(body.pageUrl) ??
    toCleanString(request.headers.get("referer"));
  const referrerUrl = toCleanString(body.referrerUrl);
  const utm = extractUtmParams(pageUrl);

  return {
    formName: "Project enquiry",
    fullName: body.fullName?.trim(),
    companyName: body.companyName?.trim(),
    workEmail: body.workEmail?.trim(),
    phoneNumber: body.phoneOrWhatsapp?.trim(),
    industry: body.industry?.trim(),
    primaryWorkflowToAutomate: body.primaryUseCase?.trim(),
    monthlyEnquiryVolume: body.monthlyEnquiryVolume?.trim(),
    expectedTimeline: body.timeline?.trim(),
    preferredChannel: toCleanString(body.preferredChannel),
    currentTools: toCleanString(body.currentTools),
    mainProblemToSolve: toCleanString(body.keyProblem),
    pageUrl,
    referrerUrl,
    utmSource: toCleanString(body.utmSource) ?? utm.utmSource,
    utmMedium: toCleanString(body.utmMedium) ?? utm.utmMedium,
    utmCampaign: toCleanString(body.utmCampaign) ?? utm.utmCampaign,
  };
}

async function requestIntakeToken(request: Request, backendBase: string) {
  let tokenResponse: Response;
  try {
    tokenResponse = await fetch(
      `${backendBase}${customerIntakeApiConfig.tokenPath}`,
      {
        method: "GET",
        headers: buildForwardHeaders(request),
        cache: "no-store",
      },
    );
  } catch {
    return {
      ok: false as const,
      response: NextResponse.json(
        { error: "Lead service unavailable" },
        { status: 503 },
      ),
    };
  }

  const tokenBody = await readResponseBody(tokenResponse);

  if (!tokenResponse.ok) {
    const message =
      typeof tokenBody === "object" && tokenBody && "message" in tokenBody
        ? String(
            (tokenBody as { message?: unknown }).message ??
              "Token request failed",
          )
        : "Token request failed";

    return {
      ok: false as const,
      response: NextResponse.json(
        { error: message, details: tokenBody },
        { status: tokenResponse.status },
      ),
    };
  }

  const token =
    tokenBody && typeof tokenBody === "object"
      ? (tokenBody as { token?: unknown }).token
      : undefined;
  if (typeof token !== "string" || token.trim().length === 0) {
    return {
      ok: false as const,
      response: NextResponse.json(
        { error: "Token response missing token" },
        { status: 502 },
      ),
    };
  }

  return { ok: true as const, token };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    const required = [
      body.fullName,
      body.companyName,
      body.workEmail,
      body.country,
      body.phoneOrWhatsapp,
      body.industry,
      body.primaryUseCase,
      body.monthlyEnquiryVolume,
      body.timeline,
    ];

    if (required.some(isBlank)) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const backendBase = normalizeBaseUrl(customerIntakeApiConfig.baseUrl);

    const tokenResult = await requestIntakeToken(request, backendBase);
    if (!tokenResult.ok) {
      return tokenResult.response;
    }

    let intakeResponse: Response;
    try {
      intakeResponse = await fetch(
        `${backendBase}${customerIntakeApiConfig.intakesPath}`,
        {
          method: "POST",
          headers: {
            ...Object.fromEntries(buildForwardHeaders(request).entries()),
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenResult.token}`,
          },
          body: JSON.stringify(buildCustomerIntakePayload(body, request)),
          cache: "no-store",
        },
      );
    } catch {
      return NextResponse.json(
        { error: "Lead service unavailable" },
        { status: 503 },
      );
    }

    const intakeBody = await readResponseBody(intakeResponse);
    if (!intakeResponse.ok) {
      const message =
        typeof intakeBody === "object" && intakeBody && "message" in intakeBody
          ? String(
              (intakeBody as { message?: unknown }).message ??
                "Lead forwarding failed",
            )
          : "Lead forwarding failed";

      return NextResponse.json(
        { error: message, details: intakeBody },
        { status: intakeResponse.status },
      );
    }

    return NextResponse.json(intakeBody ?? { ok: true }, {
      status: intakeResponse.status,
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
