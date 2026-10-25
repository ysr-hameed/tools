import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CreatorDealProfitCalculator } from "./creator-deal-profit-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Creator Deal Profit Calculator — Real Hourly Rate",
  description: "See what a brand deal really pays after production time, revisions, expenses, and tax. Free creator calculator with no sign-up.",
  alternates: { canonical: "https://tools.slyxup.com/creator-deal-profit-calculator/" },
};

export default function CreatorDealProfitCalculatorPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-16 sm:px-6">
      <div className="mx-auto mb-10 max-w-3xl text-center"><Badge variant="secondary" className="mb-6">New · built for the messy part</Badge><h1 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl">What is this brand deal really paying me?</h1><p className="mt-4 text-lg text-muted-foreground">Use the number after the brief, the edit, the revisions, and the tax set-aside. It is the rate that helps you decide whether to accept, counter, or walk.</p></div>
      <CreatorDealProfitCalculator />
      <div className="mx-auto mt-16 max-w-3xl space-y-10 text-muted-foreground">
        <div className="rounded-lg border bg-muted/40 p-5"><p className="font-medium text-foreground">The short version</p><p className="mt-2 text-sm leading-7">A $1,000 quote is not $1,000 of income. Subtract your direct costs, reserve tax, and divide what remains by every hour the job takes. If the result is below your floor, the problem is usually the scope, not your ambition.</p></div>
        <div><h2 className="font-heading text-2xl font-medium text-foreground">Count the hours people forget</h2><p className="mt-3 leading-7">Most creators remember filming and editing, then quietly donate the rest. Include the creative brief, product setup, shot list, exports, captions, email, invoicing, revision rounds, and the time spent waiting for feedback. A simple job only looks simple from the outside.</p></div>
        <div><h2 className="font-heading text-2xl font-medium text-foreground">How to use the result in a negotiation</h2><p className="mt-3 leading-7">If your real hourly rate is too low, do not only ask for a higher number. Offer a smaller scope: one revision instead of three, organic usage instead of paid ads, or a shorter exclusivity window. This keeps the conversation practical and gives the brand options.</p></div>
        <div className="rounded-lg border p-5"><p className="font-medium text-foreground">Next move</p><p className="mt-2 text-sm leading-7">Use the calculator to find your minimum quote, then open with a range above it. Your minimum is a private boundary, not the number you lead with.</p><Button className="mt-4" variant="outline" nativeButton={false} render={<Link href="/influencer-rate-calculator" />}>Build a public rate range <ArrowRight className="ml-2 size-4" /></Button></div>
      </div>
    </section>
  );
}
