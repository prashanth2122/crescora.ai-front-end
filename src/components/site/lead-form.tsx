"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useEffectEvent, useRef, useState } from "react";

import {
  ANALYTICS_ENABLED,
  buildLeadFormProgress,
  buildLeadFormSelectionSnapshot,
  getPageAnalyticsContext,
  trackEvent,
} from "@/lib/analytics";
import { leadFormOptions } from "@/lib/site-data";
import { isValidPhoneForCountry } from "@/lib/lead-form-validation";
import { siteContent } from "@/lib/site-content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check, Loader2, ShieldCheck } from "lucide-react";

type FormState = {
  fullName: string;
  companyName: string;
  workEmail: string;
  country: string;
  phoneOrWhatsapp: string;
  industry: string;
  primaryUseCase: string;
  monthlyEnquiryVolume: string;
  timeline: string;
  preferredChannel: string;
  currentTools: string;
  keyProblem: string;
};

type LeadFormVariant = "contact" | "homepage";

const initialState: FormState = {
  fullName: "",
  companyName: "",
  workEmail: "",
  country: "India",
  phoneOrWhatsapp: "",
  industry: "",
  primaryUseCase: "",
  monthlyEnquiryVolume: "",
  timeline: "",
  preferredChannel: "",
  currentTools: "",
  keyProblem: "",
};

const variantConfig = {
  contact: {
    analyticsVariant: "contact_detailed_demo",
    requiredFields: [
      "fullName",
      "companyName",
      "workEmail",
      "phoneOrWhatsapp",
      "primaryUseCase",
    ] as const,
    showCountry: false,
    showIndustry: false,
    showMonthlyVolume: false,
    showTimeline: false,
    showPreferredChannel: false,
    showCurrentTools: false,
  },
  homepage: {
    analyticsVariant: "homepage_demo_request",
    requiredFields: [
      "fullName",
      "companyName",
      "workEmail",
      "phoneOrWhatsapp",
      "primaryUseCase",
    ] as const,
    showCountry: false,
    showIndustry: false,
    showMonthlyVolume: false,
    showTimeline: false,
    showPreferredChannel: false,
    showCurrentTools: false,
  },
} as const;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function getCompletedRequiredFieldCount(
  form: FormState,
  requiredFields: readonly (keyof FormState)[],
) {
  return requiredFields.filter((field) => form[field].trim()).length;
}

export function LeadForm({ variant = "contact" }: { variant?: LeadFormVariant }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);
  const hasTrackedFormViewRef = useRef(false);
  const hasTrackedFormStartRef = useRef(false);
  const trackedCompletedFieldsRef = useRef<Set<keyof FormState>>(new Set());
  const config = variantConfig[variant];
  const copy = siteContent.leadForm.variants[variant];
  const requiredFields: readonly (keyof FormState)[] = config.requiredFields;

  const trackFormView = useEffectEvent(() => {
    trackEvent("lead_form_view", {
      ...getPageAnalyticsContext(window.location.pathname, window.location.search),
      form_variant: config.analyticsVariant,
    });
  });

  useEffect(() => {
    if (!ANALYTICS_ENABLED || hasTrackedFormViewRef.current || !containerRef.current) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      hasTrackedFormViewRef.current = true;
      trackFormView();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry || !entry.isIntersecting || entry.intersectionRatio < 0.35) {
          return;
        }

        hasTrackedFormViewRef.current = true;
        trackFormView();
        observer.disconnect();
      },
      { threshold: [0.35] },
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [trackFormView]);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function trackFormStart() {
    if (hasTrackedFormStartRef.current) {
      return;
    }

    hasTrackedFormStartRef.current = true;
    const payload = {
      ...getPageAnalyticsContext(window.location.pathname, window.location.search),
      form_variant: config.analyticsVariant,
    };
    trackEvent("lead_form_start", payload);
    trackEvent("demo_form_start", payload);
  }

  function trackRequiredFieldCompletion(
    field: keyof FormState,
    value: string,
    fieldType: "input" | "select",
  ) {
    if (!requiredFields.includes(field) || !value.trim()) {
      return;
    }

    if (trackedCompletedFieldsRef.current.has(field)) {
      return;
    }

    trackedCompletedFieldsRef.current.add(field);
    trackEvent("lead_form_field_complete", {
      ...getPageAnalyticsContext(window.location.pathname, window.location.search),
      form_variant: config.analyticsVariant,
      field_name: field,
      field_type: fieldType,
      ...buildLeadFormProgress(
        trackedCompletedFieldsRef.current.size,
        requiredFields.length,
      ),
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const selectedCountry =
      leadFormOptions.countries.find((item) => item.value === form.country) ??
      leadFormOptions.countries[0];
    const missing = requiredFields.filter((field) => !form[field].trim());
    const completedRequiredFields = getCompletedRequiredFieldCount(form, requiredFields);
    const progress = buildLeadFormProgress(completedRequiredFields, requiredFields.length);
    const selectionSnapshot = buildLeadFormSelectionSnapshot(form);

    if (missing.length > 0) {
      trackEvent("lead_form_validation_error", {
        ...getPageAnalyticsContext(window.location.pathname, window.location.search),
        form_variant: config.analyticsVariant,
        validation_type: "missing_required_fields",
        missing_fields: missing.join("|"),
        missing_fields_count: missing.length,
        ...progress,
      });
      setStatus("error");
      setMessage(siteContent.leadForm.validationError);
      return;
    }

    const invalidFields: string[] = [];
    if (!isValidEmail(form.workEmail)) {
      invalidFields.push("workEmail");
    }

    if (!isValidPhoneForCountry(form.phoneOrWhatsapp, selectedCountry)) {
      invalidFields.push("phoneOrWhatsapp");
    }

    if (invalidFields.length > 0) {
      trackEvent("lead_form_validation_error", {
        ...getPageAnalyticsContext(window.location.pathname, window.location.search),
        form_variant: config.analyticsVariant,
        validation_type: "invalid_contact_details",
        invalid_fields: invalidFields.join("|"),
        invalid_fields_count: invalidFields.length,
        ...progress,
      });
      setStatus("error");
      setMessage(siteContent.leadForm.invalidContactError);
      return;
    }

    let failureTracked = false;

    try {
      const submitPayload = {
        ...getPageAnalyticsContext(window.location.pathname, window.location.search),
        form_variant: config.analyticsVariant,
        ...selectionSnapshot,
        ...progress,
      };

      trackEvent("lead_form_submit", submitPayload);
      trackEvent("demo_form_submit", submitPayload);

      const pageUrl = window.location.href;
      const referrerUrl = document.referrer || null;
      const currentUrl = new URL(pageUrl);
      const utmSource = currentUrl.searchParams.get("utm_source");
      const utmMedium = currentUrl.searchParams.get("utm_medium");
      const utmCampaign = currentUrl.searchParams.get("utm_campaign");

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          companyName: form.companyName,
          workEmail: form.workEmail,
          phoneOrWhatsapp: form.phoneOrWhatsapp,
          primaryUseCase: form.primaryUseCase,
          keyProblem: form.keyProblem,
          pageUrl,
          referrerUrl,
          utmSource,
          utmMedium,
          utmCampaign,
        }),
      });

      if (!response.ok) {
        failureTracked = true;
        trackEvent("lead_form_failure", {
          ...getPageAnalyticsContext(window.location.pathname, window.location.search),
          form_variant: config.analyticsVariant,
          failure_stage: "api_response",
          http_status: response.status,
          ...selectionSnapshot,
          ...progress,
        });
        throw new Error("Submission failed");
      }

      trackEvent("lead_form_success", {
        ...getPageAnalyticsContext(window.location.pathname, window.location.search),
        form_variant: config.analyticsVariant,
        ...selectionSnapshot,
        ...progress,
      });
      setStatus("success");
      setMessage(siteContent.leadForm.successMessage);
      setForm(initialState);
      hasTrackedFormStartRef.current = false;
      trackedCompletedFieldsRef.current = new Set();
    } catch {
      if (!failureTracked) {
        trackEvent("lead_form_failure", {
          ...getPageAnalyticsContext(window.location.pathname, window.location.search),
          form_variant: config.analyticsVariant,
          failure_stage: "network_or_runtime",
          ...selectionSnapshot,
          ...progress,
        });
      }
      setStatus("error");
      setMessage(siteContent.leadForm.errorMessage);
    }
  }

  return (
    <Card
      ref={containerRef}
      data-analytics-area="lead_form"
      className="border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
            {copy.badge}
          </Badge>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
            {copy.title}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-600">
            {copy.description}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          {siteContent.leadForm.secureLabel}
        </div>
      </div>

      <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={onSubmit}>
        <Field id="fullName" label={siteContent.leadForm.labels.fullName} required>
          <Input
            id="fullName"
            value={form.fullName}
            onChange={(event) => {
              trackFormStart();
              updateField("fullName", event.target.value);
            }}
            onBlur={(event) =>
              trackRequiredFieldCompletion("fullName", event.target.value, "input")
            }
            placeholder={siteContent.leadForm.placeholders.fullName}
          />
        </Field>

        <Field id="companyName" label={siteContent.leadForm.labels.companyName} required>
          <Input
            id="companyName"
            value={form.companyName}
            onChange={(event) => {
              trackFormStart();
              updateField("companyName", event.target.value);
            }}
            onBlur={(event) =>
              trackRequiredFieldCompletion("companyName", event.target.value, "input")
            }
            placeholder={siteContent.leadForm.placeholders.companyName}
          />
        </Field>

        <Field
          id="phoneOrWhatsapp"
          label={siteContent.leadForm.labels.phoneOrWhatsapp}
          required
        >
          <Input
            id="phoneOrWhatsapp"
            value={form.phoneOrWhatsapp}
            onChange={(event) => {
              trackFormStart();
              updateField("phoneOrWhatsapp", event.target.value);
            }}
            onBlur={(event) =>
              trackRequiredFieldCompletion(
                "phoneOrWhatsapp",
                event.target.value,
                "input",
              )
            }
            placeholder={siteContent.leadForm.placeholders.phoneOrWhatsapp}
          />
        </Field>

        <Field id="workEmail" label={siteContent.leadForm.labels.workEmail} required>
          <Input
            id="workEmail"
            type="email"
            value={form.workEmail}
            onChange={(event) => {
              trackFormStart();
              updateField("workEmail", event.target.value);
            }}
            onBlur={(event) =>
              trackRequiredFieldCompletion("workEmail", event.target.value, "input")
            }
            placeholder={siteContent.leadForm.placeholders.workEmail}
          />
        </Field>

        {config.showIndustry ? (
          <Field id="industry" label={siteContent.leadForm.labels.industry} required>
            <Select
              value={form.industry}
              onValueChange={(value) => {
                trackFormStart();
                updateField("industry", value);
                trackRequiredFieldCompletion("industry", value, "select");
              }}
            >
              <SelectTrigger id="industry">
                <SelectValue placeholder={siteContent.leadForm.selectPlaceholders.industry} />
              </SelectTrigger>
              <SelectContent>
                {leadFormOptions.industries.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        ) : null}

        <Field id="primaryUseCase" label={siteContent.leadForm.labels.primaryUseCase} required>
          <Select
            value={form.primaryUseCase}
            onValueChange={(value) => {
              trackFormStart();
              updateField("primaryUseCase", value);
              trackRequiredFieldCompletion("primaryUseCase", value, "select");
            }}
          >
            <SelectTrigger id="primaryUseCase">
              <SelectValue placeholder={siteContent.leadForm.selectPlaceholders.primaryUseCase} />
            </SelectTrigger>
            <SelectContent>
              {leadFormOptions.useCases.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        {config.showMonthlyVolume ? (
          <Field
            id="monthlyEnquiryVolume"
            label={siteContent.leadForm.labels.monthlyEnquiryVolume}
          >
            <Select
              value={form.monthlyEnquiryVolume}
              onValueChange={(value) => {
                trackFormStart();
                updateField("monthlyEnquiryVolume", value);
              }}
            >
              <SelectTrigger id="monthlyEnquiryVolume">
                <SelectValue placeholder={siteContent.leadForm.selectPlaceholders.monthlyEnquiryVolume} />
              </SelectTrigger>
              <SelectContent>
                {leadFormOptions.volumes.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        ) : null}

        {config.showTimeline ? (
          <Field id="timeline" label={siteContent.leadForm.labels.timeline}>
            <Select
              value={form.timeline}
              onValueChange={(value) => {
                trackFormStart();
                updateField("timeline", value);
              }}
            >
              <SelectTrigger id="timeline">
                <SelectValue placeholder={siteContent.leadForm.selectPlaceholders.timeline} />
              </SelectTrigger>
              <SelectContent>
                {leadFormOptions.timelines.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        ) : null}

        {config.showPreferredChannel ? (
          <div className="sm:col-span-2">
            <Field
              id="preferredChannel"
              label={siteContent.leadForm.labels.preferredChannel}
              hint={siteContent.leadForm.hints.preferredChannel}
            >
              <Select
                value={form.preferredChannel}
                onValueChange={(value) => {
                  trackFormStart();
                  updateField("preferredChannel", value);
                }}
              >
                <SelectTrigger id="preferredChannel">
                  <SelectValue placeholder={siteContent.leadForm.selectPlaceholders.preferredChannel} />
                </SelectTrigger>
                <SelectContent>
                  {leadFormOptions.channels.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>
        ) : null}

        {config.showCurrentTools ? (
          <div className="sm:col-span-2">
            <Field
              id="currentTools"
              label={siteContent.leadForm.labels.currentTools}
              hint={siteContent.leadForm.hints.currentTools}
            >
              <Input
                id="currentTools"
                value={form.currentTools}
                onChange={(event) => {
                  trackFormStart();
                  updateField("currentTools", event.target.value);
                }}
                placeholder={siteContent.leadForm.placeholders.currentTools}
              />
            </Field>
          </div>
        ) : null}

        <div className="sm:col-span-2">
          <Field
            id="keyProblem"
            label={siteContent.leadForm.labels.keyProblem}
            hint={siteContent.leadForm.hints.keyProblem}
          >
            <Textarea
              id="keyProblem"
              value={form.keyProblem}
              onChange={(event) => {
                trackFormStart();
                updateField("keyProblem", event.target.value);
              }}
              placeholder={siteContent.leadForm.placeholders.keyProblem}
              className={variant === "homepage" ? "min-h-28" : "min-h-32"}
            />
          </Field>
        </div>

        <div className="sm:col-span-2 flex flex-col gap-4 pt-2">
          <Button
            type="submit"
            data-analytics-role="cta"
            className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {siteContent.leadForm.submitLoading}
              </>
            ) : (
              <>
                <span>{copy.submitIdle}</span>
                {variant === "contact" ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
              </>
            )}
          </Button>
          {copy.benefits.length > 0 ? (
            <div className="grid gap-2 text-sm text-zinc-600 sm:grid-cols-3">
              {copy.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-2 rounded-2xl border border-zinc-200 bg-zinc-50/80 px-3 py-3"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <span className="leading-6">{benefit}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm leading-7 text-zinc-500">{copy.note}</p>
          )}
          {message ? (
            <p className={status === "success" ? "text-sm text-emerald-700" : "text-sm text-rose-600"}>
              {message}
            </p>
          ) : null}
        </div>
      </form>
    </Card>
  );
}

function Field({
  id,
  label,
  hint,
  required,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <Label htmlFor={id} className="text-sm font-medium text-zinc-800">
          {label} {required ? <span className="text-rose-500">*</span> : null}
        </Label>
        {hint ? <span className="text-xs text-zinc-500">{hint}</span> : null}
      </div>
      {children}
    </div>
  );
}
