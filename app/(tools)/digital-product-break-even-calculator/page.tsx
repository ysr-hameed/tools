import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DigitalProductBreakEvenCalculator } from "./digital-product-break-even-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Digital Product Break-even Calculator — Sales Needed",
  description: "Calculate how many sales a template, course, guide, or digital download needs to recover its build and marketing costs.",
  alternates: { canonical: "https://tools.slyxup.com/digital-product-break-even-calculator/" },
};

export default function DigitalProductBreakEvenCalculatorPage() {
  return <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-16 sm:px-6"><div className="mx-auto mb-10 max-w-3xl text-center"><Badge variant="secondary" className="mb-6">New · for small launches</Badge><h1 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl">How many sales until your digital product pays for itself?</h1><p className="mt-4 text-lg text-muted-foreground">Put the build cost and the launch math in one place. This is the number to know before “passive income” becomes an expensive hobby.</p></div><DigitalProductBreakEvenCalculator /><div className="mx-auto mt-16 max-w-3xl space-y-10 text-muted-foreground"><div className="rounded-lg border bg-muted/40 p-5"><p className="font-medium text-foreground">The number that matters</p><p className="mt-2 text-sm leading-7">Revenue is not the same as recovery. Your break-even point includes the work you already paid for, the platform fee on every order, and the marketing budget you expect to spend to get the first customers.</p></div><div><h2 className="font-heading text-2xl font-medium text-foreground">Do not hide the build cost</h2><p className="mt-3 leading-7">If you spent 40 hours making a course, the product has a real cost even if no invoice was sent. You can keep that cost private when you price the product, but keep it visible when you decide whether the project is worth repeating.</p></div><div><h2 className="font-heading text-2xl font-medium text-foreground">Use break-even to choose your next experiment</h2><p className="mt-3 leading-7">A high sales target is useful feedback. Try one change at a time: a sharper promise, a better checkout page, a higher price with a bonus, or a distribution channel that does not charge for every click. The goal is not to make the spreadsheet look good. It is to learn what changes the outcome.</p></div><div className="rounded-lg border p-5"><p className="font-medium text-foreground">Keep going</p><p className="mt-2 text-sm leading-7">Once your offer has a price that works, check the margin on every sale before adding affiliates, discounts, or marketplace fees.</p><Button className="mt-4" variant="outline" nativeButton={false} render={<Link href="/print-on-demand-profit-calculator" />}>Check product margins <ArrowRight className="ml-2 size-4" /></Button></div></div></section>;
}
