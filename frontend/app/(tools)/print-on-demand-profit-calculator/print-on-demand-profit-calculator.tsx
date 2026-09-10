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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 2026 static POD base costs (blank + print) and sensible retail defaults.
const PRODUCTS: Record<
  string,
  { label: string; base: number; suggested: number }
> = {
  tshirt: { label: "T-Shirt", base: 9.5, suggested: 24.99 },
  hoodie: { label: "Hoodie", base: 24, suggested: 49.99 },
  sweatshirt: { label: "Sweatshirt", base: 20, suggested: 44.99 },
  mug: { label: "Mug", base: 7, suggested: 16.99 },
  tote: { label: "Tote Bag", base: 11, suggested: 22.99 },
  poster: { label: "Poster / Wall Art", base: 8, suggested: 19.99 },
  hat: { label: "Hat / Cap", base: 14, suggested: 29.99 },
  phonecase: { label: "Phone Case", base: 12, suggested: 24.99 },
};

function formatUsd(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function PrintOnDemandProfitCalculator() {
  const [product, setProduct] =
    React.useState<keyof typeof PRODUCTS>("tshirt");
  const [price, setPrice] = React.useState(PRODUCTS.tshirt.suggested);
  const [baseCost, setBaseCost] = React.useState(PRODUCTS.tshirt.base);
  const [feePercent, setFeePercent] = React.useState(6.5);
  const [fixedFee, setFixedFee] = React.useState(0.3);
  const [monthlySales, setMonthlySales] = React.useState(100);

  const pickProduct = (v: keyof typeof PRODUCTS) => {
    setProduct(v);
    setPrice(PRODUCTS[v].suggested);
    setBaseCost(PRODUCTS[v].base);
  };

  const feeRate = Math.max(0, feePercent) / 100;
  const fee = price * feeRate + Math.max(0, fixedFee);
  const totalCost = baseCost + fee;
  const profit = price - totalCost;
  const margin = price > 0 ? (profit / price) * 100 : 0;
  const monthlyProfit = profit * Math.max(0, monthlySales);
  const per100 = profit * 100;
  const breakEven =
    feeRate < 1 ? (baseCost + Math.max(0, fixedFee)) / (1 - feeRate) : 0;

  const reset = () => {
    setProduct("tshirt");
    setPrice(PRODUCTS.tshirt.suggested);
    setBaseCost(PRODUCTS.tshirt.base);
    setFeePercent(6.5);
    setFixedFee(0.3);
    setMonthlySales(100);
  };

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">
          Print on Demand Profit Calculator
        </CardTitle>
        <CardDescription>
          Work out per-item profit, margin, and monthly income after base cost
          and marketplace fees.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="product">Product</Label>
            <Select
              value={product}
              onValueChange={(v) => pickProduct(v as typeof product)}
            >
              <SelectTrigger id="product" className="w-full">
                <SelectValue placeholder="Select product" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(PRODUCTS).map(([key, p]) => (
                  <SelectItem key={key} value={key}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sales">Sales per month</Label>
            <Input
              id="sales"
              type="number"
              min={0}
              value={monthlySales}
              onChange={(e) =>
                setMonthlySales(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Retail price ($)</Label>
            <Input
              id="price"
              type="number"
              min={0}
              step={0.01}
              value={price}
              onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="base">Base / print cost ($)</Label>
            <Input
              id="base"
              type="number"
              min={0}
              step={0.01}
              value={baseCost}
              onChange={(e) =>
                setBaseCost(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fee">Marketplace fee (%)</Label>
            <Input
              id="fee"
              type="number"
              min={0}
              step={0.1}
              value={feePercent}
              onChange={(e) =>
                setFeePercent(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fixed">Fixed fee per order ($)</Label>
            <Input
              id="fixed"
              type="number"
              min={0}
              step={0.01}
              value={fixedFee}
              onChange={(e) =>
                setFixedFee(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
        </div>

        <Separator />

        <div className="rounded-lg border bg-muted/40 p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-muted-foreground">
              Profit breakdown — {PRODUCTS[product].label} at {formatUsd(price)}
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
              <p className="text-sm text-muted-foreground">Marketplace fees</p>
              <p className="mt-1 font-mono text-lg font-semibold">
                −{formatUsd(fee)}
              </p>
              <p className="text-xs text-muted-foreground">
                {feePercent}% + {formatUsd(Math.max(0, fixedFee))}
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-sm text-muted-foreground">Total cost</p>
              <p className="mt-1 font-mono text-lg font-semibold">
                {formatUsd(totalCost)}
              </p>
              <p className="text-xs text-muted-foreground">
                base {formatUsd(baseCost)} + fees
              </p>
            </div>
          </div>
          <div className="mt-5 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm font-medium text-foreground">
              Profit per item
            </p>
            <p className="mt-1 font-mono text-2xl font-semibold text-foreground">
              {formatUsd(profit)}
            </p>
            <p className="text-xs text-muted-foreground">
              That&apos;s {margin.toFixed(1)}% margin · ≈ {formatUsd(per100)}{" "}
              per 100 sales · {formatUsd(monthlyProfit)}/mo at {monthlySales}{" "}
              sales. Break-even price: {formatUsd(breakEven)}. See methodology
              below.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
