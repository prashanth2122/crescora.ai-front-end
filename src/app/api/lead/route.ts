import { NextResponse } from "next/server";

type LeadPayload = {
  fullName?: string;
  companyName?: string;
  workEmail?: string;
  phoneOrWhatsapp?: string;
  industry?: string;
  primaryUseCase?: string;
  monthlyEnquiryVolume?: string;
  timeline?: string;
  currentTools?: string;
  keyProblem?: string;
};

function isBlank(value: unknown) {
  return typeof value !== "string" || value.trim().length === 0;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    const required = [
      body.fullName,
      body.companyName,
      body.workEmail,
      body.phoneOrWhatsapp,
      body.industry,
      body.primaryUseCase,
      body.monthlyEnquiryVolume,
      body.timeline,
    ];

    if (required.some(isBlank)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const payload = {
      ...body,
      source: "website",
      submittedAt: new Date().toISOString(),
    };

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json({ error: "Lead forwarding failed" }, { status: 502 });
      }
    } else {
      console.info("Lead captured", payload.fullName, payload.companyName, payload.industry);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

