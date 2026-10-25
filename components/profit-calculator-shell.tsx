"use client";

import { useEffect, type ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trackEvent } from "@/lib/analytics";

export function money(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

export function numberValue(value: string): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
}

export function NumberField({
  id,
  label,
  value,
  onChange,
  step = 1,
  suffix,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  suffix?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type="number"
          min={0}
          step={step}
          value={value}
          onChange={(event) => {
            const nextValue = numberValue(event.target.value);
            onChange(nextValue);
            trackEvent("calculator_input_changed", { field: id, value: nextValue });
          }}
          className={suffix ? "pr-12" : undefined}
        />
        {suffix && <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">{suffix}</span>}
      </div>
    </div>
  );
}

export function ResultMetric({ label, value, detail, highlight = false }: { label: string; value: string; detail?: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${highlight ? "border-primary/30 bg-primary/5" : "bg-card"}`}>
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
      <p className="mt-2 font-mono text-2xl font-bold tracking-[-0.06em]">{value}</p>
      {detail && <p className="mt-1 text-xs text-muted-foreground">{detail}</p>}
    </div>
  );
}

export function ProfitCalculatorShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Card className="mx-auto w-full max-w-5xl">
      <CardHeader className="border-b border-border/70 pb-5">
        <CardTitle className="font-heading text-2xl font-bold tracking-[-0.05em]">{title}</CardTitle>
        <CardDescription className="max-w-2xl leading-6">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-5 sm:p-7" onFocusCapture={() => trackEvent("calculator_started", { calculator: title })}>
        <div className="space-y-6">{children}</div>
      </CardContent>
    </Card>
  );
}

export function ResultPanel({
  eyebrow,
  title,
  metrics,
  note,
  reset,
}: {
  eyebrow: string;
  title: string;
  metrics: ReactNode;
  note: string;
  reset: () => void;
}) {
  useEffect(() => {
    trackEvent("calculator_result_viewed", { result: title });
  }, [title]);

  return (
    <div className="rounded-2xl border border-primary/20 bg-muted/40 p-5">
      <div className="flex items-start justify-between gap-4">
        <div><p className="label text-primary">{eyebrow}</p><h3 className="mt-2 font-heading text-2xl font-bold tracking-[-0.05em]">{title}</h3></div>
        <button type="button" onClick={() => { reset(); trackEvent("calculator_reset", { calculator: title }); }} className="rounded-lg border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-background hover:text-foreground">Reset</button>
      </div>
      <div className="mt-5 grid gap-3">{metrics}</div>
      <p className="mt-5 border-t border-border/70 pt-4 text-sm leading-6 text-muted-foreground">{note}</p>
    </div>
  );
}
