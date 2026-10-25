"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const safe = (value: number) => Math.max(0, Number.isFinite(value) ? value : 0);
const usd = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(value);

export function DigitalProductBreakEvenCalculator() {
  const [price, setPrice] = React.useState(19);
  const [fixedCosts, setFixedCosts] = React.useState(650);
  const [monthlyMarketing, setMonthlyMarketing] = React.useState(100);
  const [feePercent, setFeePercent] = React.useState(5);
  const [fixedFee, setFixedFee] = React.useState(0.3);
  const [salesGoal, setSalesGoal] = React.useState(100);
  const netPerSale = safe(price) * (1 - safe(feePercent) / 100) - safe(fixedFee);
  const breakEvenSales = netPerSale > 0 ? Math.ceil((safe(fixedCosts) + safe(monthlyMarketing)) / netPerSale) : 0;
  const monthlyProfit = netPerSale * safe(salesGoal) - safe(monthlyMarketing);
  const margin = safe(price) > 0 ? (netPerSale / safe(price)) * 100 : 0;
  const reset = () => { setPrice(19); setFixedCosts(650); setMonthlyMarketing(100); setFeePercent(5); setFixedFee(0.3); setSalesGoal(100); };
  const field = (id: string, label: string, value: number, setter: (value: number) => void, step = 1) => <div className="space-y-2"><Label htmlFor={id}>{label}</Label><Input id={id} type="number" min={0} step={step} value={value} onChange={(event) => setter(safe(Number(event.target.value)))} /></div>;
  return <Card className="mx-auto w-full max-w-4xl"><CardHeader><CardTitle className="font-heading text-2xl font-medium">Digital Product Break-even Calculator</CardTitle><CardDescription>Know the sales number before you spend weeks making the thing. Works for templates, guides, courses, presets, and downloads.</CardDescription></CardHeader><CardContent className="space-y-6"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{field("price", "Product price ($)", price, setPrice, 0.5)}{field("fixed-costs", "One-time build costs ($)", fixedCosts, setFixedCosts, 10)}{field("marketing", "Monthly marketing ($)", monthlyMarketing, setMonthlyMarketing, 10)}{field("fee", "Platform fee (%)", feePercent, setFeePercent, 0.5)}{field("fixed-fee", "Fixed fee per sale ($)", fixedFee, setFixedFee, 0.05)}{field("goal", "Sales in your plan", salesGoal, setSalesGoal)}</div><Separator /><div className="rounded-lg border bg-muted/40 p-5"><div className="flex items-center justify-between gap-4"><p className="text-sm font-medium text-muted-foreground">Your product economics</p><button type="button" onClick={reset} className="rounded-md border px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Reset</button></div><div className="mt-5 grid gap-3 sm:grid-cols-3"><div className="rounded-lg border bg-card p-4"><p className="text-sm text-muted-foreground">You keep per sale</p><p className="mt-1 font-mono text-xl font-semibold">{usd(netPerSale)}</p><p className="mt-1 text-xs text-muted-foreground">{margin.toFixed(1)}% after platform fees</p></div><div className="rounded-lg border border-primary/30 bg-primary/5 p-4"><p className="text-sm font-medium text-foreground">Break-even sales</p><p className="mt-1 font-mono text-2xl font-semibold text-foreground">{breakEvenSales}</p><p className="mt-1 text-xs text-muted-foreground">to recover build + one month marketing</p></div><div className="rounded-lg border bg-card p-4"><p className="text-sm text-muted-foreground">At {salesGoal} sales</p><p className="mt-1 font-mono text-xl font-semibold">{usd(monthlyProfit)}</p><p className="mt-1 text-xs text-muted-foreground">after monthly marketing</p></div></div><p className="mt-4 text-sm text-muted-foreground">If the break-even number feels uncomfortable, test the offer before making more features: change the price, bundle a bonus, or cut the acquisition cost.</p></div></CardContent></Card>;
}
