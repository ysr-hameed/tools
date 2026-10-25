"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

function formatUsd(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatHourly(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function DoorDashPayCalculator() {
  const [deliveries, setDeliveries] = React.useState(60);
  const [basePay, setBasePay] = React.useState(3.5);
  const [tips, setTips] = React.useState(4.5);
  const [hours, setHours] = React.useState(20);
  const [miles, setMiles] = React.useState(300);
  const [gasPrice, setGasPrice] = React.useState(3.6);
  const [mpg, setMpg] = React.useState(28);
  const [otherCosts, setOtherCosts] = React.useState(20);

  const gross = Math.max(0, deliveries) * (Math.max(0, basePay) + Math.max(0, tips));
  const fuel =
    Math.max(0, mpg) > 0
      ? (Math.max(0, miles) / Math.max(0.1, mpg)) * Math.max(0, gasPrice)
      : 0;
  const totalCosts = fuel + Math.max(0, otherCosts);
  const net = gross - totalCosts;
  const netHourly = Math.max(0, hours) > 0 ? net / Math.max(0, hours) : 0;
  const perDelivery =
    Math.max(0, deliveries) > 0 ? net / Math.max(0, deliveries) : 0;
  const perMile = Math.max(0, miles) > 0 ? net / Math.max(0, miles) : 0;
  const monthly = net * 4.33;

  const reset = () => {
    setDeliveries(60);
    setBasePay(3.5);
    setTips(4.5);
    setHours(20);
    setMiles(300);
    setGasPrice(3.6);
    setMpg(28);
    setOtherCosts(20);
  };

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">
          DoorDash Pay Calculator
        </CardTitle>
        <CardDescription>
          Work out your true net hourly pay after gas and vehicle costs — not
          just the gross Dasher payout.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="deliveries">Deliveries per week</Label>
            <Input
              id="deliveries"
              type="number"
              min={0}
              value={deliveries}
              onChange={(e) =>
                setDeliveries(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hours">Hours worked per week</Label>
            <Input
              id="hours"
              type="number"
              min={0}
              step={0.5}
              value={hours}
              onChange={(e) => setHours(Math.max(0, Number(e.target.value)))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="base">Avg base pay per delivery ($)</Label>
            <Input
              id="base"
              type="number"
              min={0}
              step={0.1}
              value={basePay}
              onChange={(e) =>
                setBasePay(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tips">Avg tip per delivery ($)</Label>
            <Input
              id="tips"
              type="number"
              min={0}
              step={0.1}
              value={tips}
              onChange={(e) => setTips(Math.max(0, Number(e.target.value)))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="miles">Miles driven per week</Label>
            <Input
              id="miles"
              type="number"
              min={0}
              value={miles}
              onChange={(e) => setMiles(Math.max(0, Number(e.target.value)))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mpg">Vehicle MPG</Label>
            <Input
              id="mpg"
              type="number"
              min={0}
              step={0.5}
              value={mpg}
              onChange={(e) => setMpg(Math.max(0, Number(e.target.value)))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gas">Gas price ($/gal)</Label>
            <Input
              id="gas"
              type="number"
              min={0}
              step={0.01}
              value={gasPrice}
              onChange={(e) =>
                setGasPrice(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="other">Other weekly costs ($)</Label>
            <Input
              id="other"
              type="number"
              min={0}
              step={1}
              value={otherCosts}
              onChange={(e) =>
                setOtherCosts(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
        </div>

        <Separator />

        <div className="rounded-lg border bg-muted/40 p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-muted-foreground">
              Net pay — {deliveries} deliveries / {hours} hrs / {miles} mi
            </p>
            <button
              type="button"
              onClick={reset}
              className="rounded-md border px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Reset
            </button>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-3">
              <p className="text-sm text-muted-foreground">Gross pay</p>
              <p className="mt-1 font-mono text-lg font-semibold">
                {formatUsd(gross)}
              </p>
              <p className="text-xs text-muted-foreground">base + tips</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-sm text-muted-foreground">Vehicle costs</p>
              <p className="mt-1 font-mono text-lg font-semibold">
                −{formatUsd(totalCosts)}
              </p>
              <p className="text-xs text-muted-foreground">
                fuel {formatUsd(fuel)} + other {formatUsd(Math.max(0, otherCosts))}
              </p>
            </div>
          </div>
          <div className="mt-5 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm font-medium text-foreground">
              Net hourly pay
            </p>
            <p className="mt-1 font-mono text-2xl font-semibold text-foreground">
              {formatHourly(netHourly)}/hr
            </p>
            <p className="text-xs text-muted-foreground">
              That&apos;s {formatUsd(net)}/week · ≈ {formatUsd(monthly)}/mo ·{" "}
              {formatUsd(perDelivery)} per delivery · {formatUsd(perMile)} per
              mile. Cherry-pick orders above $1.50–$2/mi. See methodology
              below.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
