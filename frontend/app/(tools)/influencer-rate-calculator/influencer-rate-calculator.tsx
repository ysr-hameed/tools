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

// 2026 static benchmarks: $ earned per follower (low–high range by platform).
// Calibrated so 50K IG ≈ $500–$1,500, TikTok ≈ $250–$750, YouTube ≈ $1,000–$2,500.
const PLATFORM_RATES: Record<string, { low: number; high: number }> = {
  instagram: { low: 0.01, high: 0.03 },
  tiktok: { low: 0.005, high: 0.015 },
  youtube: { low: 0.02, high: 0.05 },
  twitch: { low: 0.01, high: 0.03 },
};

const PLATFORM_LABELS: Record<string, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
  twitch: "Twitch",
};

const NICHE_MULTIPLIERS: Record<string, number> = {
  finance: 1.4,
  tech: 1.3,
  beauty: 1.2,
  fitness: 1.1,
  gaming: 1.1,
  travel: 1.0,
  food: 1.0,
  lifestyle: 1.0,
};

const NICHE_LABELS: Record<string, string> = {
  finance: "Finance & Investing",
  tech: "Tech & Gadgets",
  beauty: "Beauty & Skincare",
  fitness: "Fitness & Health",
  gaming: "Gaming",
  travel: "Travel",
  food: "Food",
  lifestyle: "Lifestyle & Other",
};

const USAGE_MARKUP: Record<string, number> = {
  organic: 0,
  organic30: 0.1,
  organic90: 0.2,
  paidads: 0.4,
  buyout: 1.5,
};

const USAGE_LABELS: Record<string, string> = {
  organic: "Organic post only",
  organic30: "Organic + 30-day usage (+10%)",
  organic90: "Organic + 90-day usage (+20%)",
  paidads: "Paid ads / whitelisting 3 mo (+40%)",
  buyout: "Full buyout (+150%)",
};

function engagementMultiplier(er: number): number {
  if (er < 1.5) return 0.8;
  if (er < 3) return 1.0;
  if (er < 6) return 1.2;
  return 1.4;
}

function formatUsd(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function InfluencerRateCalculator() {
  const [followers, setFollowers] = React.useState(50000);
  const [platform, setPlatform] =
    React.useState<keyof typeof PLATFORM_RATES>("instagram");
  const [niche, setNiche] =
    React.useState<keyof typeof NICHE_MULTIPLIERS>("lifestyle");
  const [engagement, setEngagement] = React.useState(3.5);
  const [usage, setUsage] =
    React.useState<keyof typeof USAGE_MARKUP>("organic");

  const rates = PLATFORM_RATES[platform];
  const nicheMult = NICHE_MULTIPLIERS[niche];
  const engMult = engagementMultiplier(engagement);
  const usageMult = 1 + USAGE_MARKUP[usage];

  const low = followers * rates.low * nicheMult * engMult * usageMult;
  const high = followers * rates.high * nicheMult * engMult * usageMult;
  const per1kLow = (low / Math.max(1, followers)) * 1000;
  const per1kHigh = (high / Math.max(1, followers)) * 1000;

  const reset = () => {
    setFollowers(50000);
    setPlatform("instagram");
    setNiche("lifestyle");
    setEngagement(3.5);
    setUsage("organic");
  };

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">
          Influencer Rate Calculator
        </CardTitle>
        <CardDescription>
          Work out a fair per-post brand deal price from followers, platform,
          niche, and engagement.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="followers">Followers / subscribers</Label>
            <Input
              id="followers"
              type="number"
              min={0}
              step={100}
              value={followers}
              onChange={(e) =>
                setFollowers(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="engagement">Engagement rate (%)</Label>
            <Input
              id="engagement"
              type="number"
              min={0}
              step={0.1}
              value={engagement}
              onChange={(e) =>
                setEngagement(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="platform">Platform</Label>
            <Select
              value={platform}
              onValueChange={(v) => setPlatform(v as typeof platform)}
            >
              <SelectTrigger id="platform" className="w-full">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="twitch">Twitch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="niche">Niche</Label>
            <Select
              value={niche}
              onValueChange={(v) => setNiche(v as typeof niche)}
            >
              <SelectTrigger id="niche" className="w-full">
                <SelectValue placeholder="Select niche" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="finance">Finance & Investing</SelectItem>
                <SelectItem value="tech">Tech & Gadgets</SelectItem>
                <SelectItem value="beauty">Beauty & Skincare</SelectItem>
                <SelectItem value="fitness">Fitness & Health</SelectItem>
                <SelectItem value="gaming">Gaming</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="lifestyle">Lifestyle & Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="usage">Usage rights</Label>
            <Select
              value={usage}
              onValueChange={(v) => setUsage(v as typeof usage)}
            >
              <SelectTrigger id="usage" className="w-full">
                <SelectValue placeholder="Select usage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="organic">Organic post only</SelectItem>
                <SelectItem value="organic30">
                  Organic + 30-day usage (+10%)
                </SelectItem>
                <SelectItem value="organic90">
                  Organic + 90-day usage (+20%)
                </SelectItem>
                <SelectItem value="paidads">
                  Paid ads / whitelisting 3 mo (+40%)
                </SelectItem>
                <SelectItem value="buyout">Full buyout (+150%)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        <div className="rounded-lg border bg-muted/40 p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-muted-foreground">
              Fair rate — {PLATFORM_LABELS[platform]} × {NICHE_LABELS[niche]} ×{" "}
              {USAGE_LABELS[usage]}
            </p>
            <button
              type="button"
              onClick={reset}
              className="rounded-md border px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Reset
            </button>
          </div>
          <div className="mt-5 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm font-medium text-foreground">
              Suggested per-post rate
            </p>
            <p className="mt-1 font-mono text-2xl font-semibold text-foreground">
              {formatUsd(low)}–{formatUsd(high)}
            </p>
            <p className="text-xs text-muted-foreground">
              That&apos;s ≈ {formatUsd(per1kLow)}–{formatUsd(per1kHigh)} per
              1,000 followers. Open near the midpoint, then adjust for
              deliverables and exclusivity. See methodology below.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
