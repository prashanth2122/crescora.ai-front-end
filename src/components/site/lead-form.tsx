"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

import { leadFormOptions } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { isValidPhoneForCountry } from "@/lib/lead-form-validation";
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

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");
  function updateField<K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    const selectedCountry =
      leadFormOptions.countries.find((item) => item.value === form.country) ??
      leadFormOptions.countries[0];

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

    const missing = requiredFields.filter((field) => !form[field].trim());
    if (missing.length > 0) {
      setStatus("error");
      setMessage(siteContent.leadForm.validationError);
      return;
    }

    if (
      !isValidEmail(form.workEmail) ||
      !isValidPhoneForCountry(form.phoneOrWhatsapp, selectedCountry)
    ) {
      setStatus("error");
      setMessage(siteContent.leadForm.invalidContactError);
      return;
    }

    try {
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
        throw new Error("Submission failed");
      }

      setStatus("success");
      setMessage(siteContent.leadForm.successMessage);
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage(siteContent.leadForm.errorMessage);
    }
  }

  return (
    <Card className="border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
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
            onChange={(event) => updateField("fullName", event.target.value)}
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
            onChange={(event) => updateField("companyName", event.target.value)}
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
            onChange={(event) => updateField("workEmail", event.target.value)}
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
              onChange={(event) => updateField("country", event.target.value)}
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
            onChange={(event) =>
              updateField("phoneOrWhatsapp", event.target.value)
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
            onValueChange={(value) => updateField("industry", value)}
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
            onValueChange={(value) => updateField("primaryUseCase", value)}
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
            onValueChange={(value) =>
              updateField("monthlyEnquiryVolume", value)
            }
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
            onValueChange={(value) => updateField("timeline", value)}
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
              onValueChange={(value) => updateField("preferredChannel", value)}
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
              onChange={(event) =>
                updateField("currentTools", event.target.value)
              }
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
              onChange={(event) =>
                updateField("keyProblem", event.target.value)
              }
              placeholder={siteContent.leadForm.placeholders.keyProblem}
              className="min-h-32"
            />
          </Field>
        </div>

        <div className="sm:col-span-2 flex flex-col gap-4 pt-2">
          <Button
            type="submit"
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
