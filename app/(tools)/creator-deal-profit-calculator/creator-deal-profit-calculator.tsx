"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

function usd(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

const safe = (value: number) => Math.max(0, Number.isFinite(value) ? value : 0);

export function CreatorDealProfitCalculator() {
  const [quote, setQuote] = React.useState(1000);
  const [productionHours, setProductionHours] = React.useState(5);
  const [editingHours, setEditingHours] = React.useState(8);
  const [adminHours, setAdminHours] = React.useState(2);
  const [revisions, setRevisions] = React.useState(2);
  const [revisionHours, setRevisionHours] = React.useState(1.5);
  const [expenses, setExpenses] = React.useState(75);
  const [taxRate, setTaxRate] = React.useState(25);
  const [targetHourly, setTargetHourly] = React.useState(50);

  const totalHours = safe(productionHours) + safe(editingHours) + safe(adminHours) + safe(revisions) * safe(revisionHours);
  const afterExpenses = safe(quote) - safe(expenses);
  const tax = afterExpenses * (safe(taxRate) / 100);
  const takeHome = afterExpenses - tax;
  const hourly = totalHours > 0 ? takeHome / totalHours : 0;
  const minimumQuote = totalHours * safe(targetHourly) + safe(expenses);
  const reset = () => {
    setQuote(1000); setProductionHours(5); setEditingHours(8); setAdminHours(2); setRevisions(2); setRevisionHours(1.5); setExpenses(75); setTaxRate(25); setTargetHourly(50);
  };

  const numberField = (id: string, label: string, value: number, setValue: (value: number) => void, step = 1) => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type="number" min={0} step={step} value={value} onChange={(event) => setValue(safe(Number(event.target.value)))} />
    </div>
  );

  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">Creator Deal Profit Calculator</CardTitle>
        <CardDescription>A quote is not a paycheck. Add the invisible work and see what this deal is actually paying you per hour.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {numberField("quote", "Brand quote ($)", quote, setQuote, 10)}
          {numberField("production", "Filming / production hours", productionHours, setProductionHours, 0.5)}
          {numberField("editing", "Editing hours", editingHours, setEditingHours, 0.5)}
          {numberField("admin", "Briefs, email & admin hours", adminHours, setAdminHours, 0.5)}
          {numberField("revisions", "Included revision rounds", revisions, setRevisions)}
          {numberField("revision-hours", "Hours per revision round", revisionHours, setRevisionHours, 0.5)}
          {numberField("expenses", "Out-of-pocket costs ($)", expenses, setExpenses, 5)}
          {numberField("tax", "Set-aside for tax (%)", taxRate, setTaxRate, 1)}
          {numberField("target", "Your target hourly rate ($)", targetHourly, setTargetHourly, 5)}
        </div>
        <Separator />
        <div className="rounded-lg border bg-muted/40 p-5">
          <div className="flex items-start justify-between gap-4">
            <div><p className="text-sm font-medium text-muted-foreground">The honest version of this deal</p><p className="mt-1 text-xs text-muted-foreground">{totalHours.toFixed(1)} total hours · {revisions} revision rounds · {taxRate}% tax set aside</p></div>
            <button type="button" onClick={reset} className="rounded-md border px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Reset</button>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border bg-card p-4"><p className="text-sm text-muted-foreground">After expenses</p><p className="mt-1 font-mono text-xl font-semibold">{usd(afterExpenses)}</p></div>
            <div className="rounded-lg border bg-card p-4"><p className="text-sm text-muted-foreground">Tax set-aside</p><p className="mt-1 font-mono text-xl font-semibold">−{usd(tax)}</p></div>
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4"><p className="text-sm font-medium text-foreground">Real hourly pay</p><p className="mt-1 font-mono text-2xl font-semibold text-foreground">{usd(hourly)}/hr</p></div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">To hit {usd(targetHourly)}/hr, this scope needs a minimum quote of <strong className="text-foreground">{usd(minimumQuote)}</strong>. That gives you a clean number to use when the brand asks for “just one more thing.”</p>
        </div>
      </CardContent>
    </Card>
  );
}
