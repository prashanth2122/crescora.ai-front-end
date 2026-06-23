"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useEffectEvent, useRef, useState } from "react";

import { leadFormOptions } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { isValidPhoneForCountry } from "@/lib/lead-form-validation";
import {
  ANALYTICS_ENABLED,
  buildLeadFormProgress,
  buildLeadFormSelectionSnapshot,
  getPageAnalyticsContext,
  trackEvent,
} from "@/lib/analytics";
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
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Loader2, ShieldCheck } from "lucide-react";

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

const requiredFields: Array<keyof FormState> = [
  "fullName",
  "companyName",
  "workEmail",
  "country",
  "phoneOrWhatsapp",
  "industry",
  "primaryUseCase",
  "monthlyEnquiryVolume",
  "timeline",
];

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function getCompletedRequiredFieldCount(form: FormState) {
  return requiredFields.filter((field) => form[field].trim()).length;
}

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);
  const hasTrackedFormViewRef = useRef(false);
  const hasTrackedFormStartRef = useRef(false);
  const trackedCompletedFieldsRef = useRef<Set<keyof FormState>>(new Set());

  const trackFormView = useEffectEvent(() => {
    trackEvent("lead_form_view", {
      ...getPageAnalyticsContext(window.location.pathname, window.location.search),
      form_variant: "workflow_demo_contact",
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
  }, []);

  function updateField<K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function trackFormStart() {
    if (hasTrackedFormStartRef.current) {
      return;
    }

    hasTrackedFormStartRef.current = true;
    trackEvent("lead_form_start", {
      ...getPageAnalyticsContext(window.location.pathname, window.location.search),
      form_variant: "workflow_demo_contact",
    });
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
      form_variant: "workflow_demo_contact",
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
    const completedRequiredFields = getCompletedRequiredFieldCount(form);
    const progress = buildLeadFormProgress(
      completedRequiredFields,
      requiredFields.length,
    );
    const selectionSnapshot = buildLeadFormSelectionSnapshot(form);
    if (missing.length > 0) {
      trackEvent("lead_form_validation_error", {
        ...getPageAnalyticsContext(window.location.pathname, window.location.search),
        form_variant: "workflow_demo_contact",
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
    if (
      !isValidEmail(form.workEmail)
    ) {
      invalidFields.push("workEmail");
    }

    if (!isValidPhoneForCountry(form.phoneOrWhatsapp, selectedCountry)) {
      invalidFields.push("phoneOrWhatsapp");
    }

    if (invalidFields.length > 0) {
      trackEvent("lead_form_validation_error", {
        ...getPageAnalyticsContext(window.location.pathname, window.location.search),
        form_variant: "workflow_demo_contact",
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
      trackEvent("lead_form_submit", {
        ...getPageAnalyticsContext(window.location.pathname, window.location.search),
        form_variant: "workflow_demo_contact",
        ...selectionSnapshot,
        ...progress,
      });

      const pageUrl = window.location.href;
      const referrerUrl = document.referrer || null;
      const currentUrl = new URL(pageUrl);
      const utmSource = currentUrl.searchParams.get("utm_source");
      const utmMedium = currentUrl.searchParams.get("utm_medium");
      const utmCampaign = currentUrl.searchParams.get("utm_campaign");

      const response = await fetch(`/api/lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
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
          form_variant: "workflow_demo_contact",
          failure_stage: "api_response",
          http_status: response.status,
          ...selectionSnapshot,
          ...progress,
        });
        throw new Error("Submission failed");
      }

      trackEvent("lead_form_success", {
        ...getPageAnalyticsContext(window.location.pathname, window.location.search),
        form_variant: "workflow_demo_contact",
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
          form_variant: "workflow_demo_contact",
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
          <Badge
            variant="secondary"
            className="rounded-full bg-zinc-100 text-zinc-700"
          >
            {siteContent.leadForm.badge}
          </Badge>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
            {siteContent.leadForm.title}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-600">
            {siteContent.leadForm.description}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          {siteContent.leadForm.secureLabel}
        </div>
      </div>

      <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={onSubmit}>
        <Field
          id="fullName"
          label={siteContent.leadForm.labels.fullName}
          required
        >
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
        <Field
          id="companyName"
          label={siteContent.leadForm.labels.companyName}
          required
        >
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
          id="workEmail"
          label={siteContent.leadForm.labels.workEmail}
          required
        >
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
        <Field
          id="country"
          label={siteContent.leadForm.labels.country}
          required
        >
          <div className="relative">
            <select
              id="country"
              value={form.country}
              onChange={(event) => {
                trackFormStart();
                updateField("country", event.target.value);
                trackRequiredFieldCompletion("country", event.target.value, "select");
              }}
              className="h-8 w-full appearance-none rounded-lg border border-input bg-transparent px-2.5 pr-8 py-1 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80"
            >
              {leadFormOptions.countries.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          </div>
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
        <Field
          id="industry"
          label={siteContent.leadForm.labels.industry}
          required
        >
          <Select
            value={form.industry}
            onValueChange={(value) => {
              trackFormStart();
              updateField("industry", value);
              trackRequiredFieldCompletion("industry", value, "select");
            }}
          >
            <SelectTrigger id="industry">
              <SelectValue
                placeholder={siteContent.leadForm.selectPlaceholders.industry}
              />
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
        <Field
          id="primaryUseCase"
          label={siteContent.leadForm.labels.primaryUseCase}
          required
        >
          <Select
            value={form.primaryUseCase}
            onValueChange={(value) => {
              trackFormStart();
              updateField("primaryUseCase", value);
              trackRequiredFieldCompletion("primaryUseCase", value, "select");
            }}
          >
            <SelectTrigger id="primaryUseCase">
              <SelectValue
                placeholder={
                  siteContent.leadForm.selectPlaceholders.primaryUseCase
                }
              />
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
        <Field
          id="monthlyEnquiryVolume"
          label={siteContent.leadForm.labels.monthlyEnquiryVolume}
          required
        >
          <Select
            value={form.monthlyEnquiryVolume}
            onValueChange={(value) => {
              trackFormStart();
              updateField("monthlyEnquiryVolume", value);
              trackRequiredFieldCompletion(
                "monthlyEnquiryVolume",
                value,
                "select",
              );
            }}
          >
            <SelectTrigger id="monthlyEnquiryVolume">
              <SelectValue
                placeholder={
                  siteContent.leadForm.selectPlaceholders.monthlyEnquiryVolume
                }
              />
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
        <Field
          id="timeline"
          label={siteContent.leadForm.labels.timeline}
          required
        >
          <Select
            value={form.timeline}
            onValueChange={(value) => {
              trackFormStart();
              updateField("timeline", value);
              trackRequiredFieldCompletion("timeline", value, "select");
            }}
          >
            <SelectTrigger id="timeline">
              <SelectValue
                placeholder={siteContent.leadForm.selectPlaceholders.timeline}
              />
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
                <SelectValue
                  placeholder={
                    siteContent.leadForm.selectPlaceholders.preferredChannel
                  }
                />
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
              className="min-h-32"
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
              siteContent.leadForm.submitIdle
            )}
          </Button>
          <p className="text-sm leading-7 text-zinc-500">
            {siteContent.leadForm.note}
          </p>
          {message ? (
            <p
              className={
                status === "success"
                  ? "text-sm text-emerald-700"
                  : "text-sm text-rose-600"
              }
            >
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
