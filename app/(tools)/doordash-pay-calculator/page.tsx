import type { Metadata } from "next";
import Link from "next/link";
import { DoorDashPayCalculator } from "./doordash-pay-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "DoorDash Pay Calculator — True Net $/Hour After Costs (2026)",
  description:
    "Free DoorDash Pay Calculator for 2026. See gross, gas, and true net hourly pay per delivery and per mile. No sign-up.",
  alternates: {
    canonical: "https://tools.slyxup.com/doordash-pay-calculator/",
  },
  openGraph: {
    title: "DoorDash Pay Calculator — True Net $/Hour After Costs (2026)",
    description:
      "Work out what DoorDash really pays per hour after gas and vehicle costs. Free, no sign-up.",
    url: "https://tools.slyxup.com/doordash-pay-calculator/",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "DoorDash Pay Calculator",
      url: "https://tools.slyxup.com/doordash-pay-calculator/",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      description:
        "Free DoorDash Pay Calculator to estimate gross, costs, and true net hourly pay in 2026.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Gross from base pay and tips",
        "Fuel cost from miles and MPG",
        "Net hourly, per-delivery, per-mile",
        "Monthly projection",
        "No sign-up required",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "DoorDash Pay Calculator",
          item: "https://tools.slyxup.com/doordash-pay-calculator/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much do DoorDash drivers make per hour?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Dashers gross $15–$25 per hour in 2026, with net pay around $11–$19 per hour after gas and vehicle costs.",
          },
        },
        {
          "@type": "Question",
          name: "How much per DoorDash delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typically $6–$9 per delivery including tips. Base pay alone runs $2–$10; tips make up roughly half of total pay.",
          },
        },
        {
          "@type": "Question",
          name: "What orders should I accept?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Experienced Dashers only accept orders above $1.50–$2 per mile of total driving. Below that, mileage usually eats the margin.",
          },
        },
      ],
    },
  ],
};

const payTable = [
  ["Off-peak (20 deliveries)", "$8–$11", "$9–$13"],
  ["Typical (60 deliveries)", "$15–$20", "$12–$16"],
  ["Peak + cherry-pick", "$20–$28", "$16–$22"],
];

export default function DoorDashPayCalculatorPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <Badge variant="secondary" className="mb-6">
          Updated for 2026
        </Badge>
        <h1 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl">
          DoorDash Pay Calculator
        </h1>
        <p className="mt-4 text-muted-foreground">
          The app shows gross — your car bills you the rest. This tool
          subtracts gas and vehicle costs so you see your true net $/hour.
        </p>
      </div>

      <DoorDashPayCalculator />

      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-muted-foreground">
        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="font-medium text-foreground">TL;DR</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>
              Most Dashers gross <strong>$15–$25/hr</strong>, net{" "}
              <strong>$11–$19/hr</strong> after costs in 2026.
            </li>
            <li>
              Typical delivery pays <strong>$6–$9</strong> with tips; tips are
              roughly half of pay.
            </li>
            <li>
              Only accept orders above <strong>$1.50–$2 per mile</strong> —
              that one rule decides your hourly.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            How the calculation works
          </h2>
          <p className="mt-3">
            Your net is <strong>gross</strong> (deliveries × base + tips)
            minus <strong>fuel</strong> (miles ÷ MPG × gas price) and{" "}
            <strong>other costs</strong> (maintenance, phone):
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg border bg-muted/40 p-4 font-mono text-sm text-foreground">
            Net/hr = (Deliveries × (Base + Tip) − Fuel − Other) ÷ Hours
          </pre>
          <p className="mt-3">
            Enter a normal week — deliveries, hours, miles, and your car&apos;s
            MPG — and the calculator shows net hourly, per-delivery, per-mile,
            and monthly pay.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Gross vs net by driving style
          </h2>
          <p className="mt-3">
            2026 tracked-driver ranges (before vs after vehicle costs):
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Style</th>
                  <th className="py-2 pr-4 font-medium">Gross/hr</th>
                  <th className="py-2 font-medium">Net/hr</th>
                </tr>
              </thead>
              <tbody>
                {payTable.map((row) => (
                  <tr key={row[0]} className="border-b">
                    <td className="py-2 pr-4 text-foreground">{row[0]}</td>
                    <td className="py-2 pr-4">{row[1]}</td>
                    <td className="py-2">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Realistic example
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                60 deliveries, 20 hrs, 300 miles
              </p>
              <p className="mt-1 text-sm">
                $480 gross ($3.50 base + $4.50 tip) minus ~$38.57 fuel and $20
                other costs nets about <strong>$421/week</strong> — roughly{" "}
                <strong>$21/hr gross, $18/hr net</strong> before taxes.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                Pickup truck at 17 MPG instead of 28
              </p>
              <p className="mt-1 text-sm">
                Same week burns ~$63.53 in fuel instead of ~$38.57. That one
                vehicle choice costs about <strong>$25/week</strong> — over{" "}
                <strong>$1,200/year</strong>.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Frequently asked questions
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium text-foreground">
                Is DoorDash worth it in 2026?
              </h3>
              <p className="mt-1">
                Yes for Fri/Sat dinner rushes with cherry-picking — $18–$25/hr
                net is realistic. Random weekday daytime accepting everything
                often nets $11–$14/hr, which rarely beats a $15 minimum-wage
                shift once wear is counted.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                Do I owe taxes on DoorDash pay?
              </h3>
              <p className="mt-1">
                Yes — you&apos;re a 1099 contractor, so nothing is withheld.
                Track every business mile (2026 IRS rate is 72.5¢ Jan–Jun,
                76¢ from Jul 1) and set aside ~25–30% for income plus
                15.3% self-employment tax.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                DoorDash or Uber Eats — which pays more?
              </h3>
              <p className="mt-1">
                In H1 2026 tracked data DoorDash medians ran ~13% higher per
                hour ($15.95 vs $14.16 gross). Multi-apping both during dinner
                rush beats either one alone.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Methodology & sources
          </h2>
          <p className="mt-3 text-sm">
            Pay ranges reflect H1 2026 tracked-driver datasets and driver
            guides (base $2–$10, tips ~50% of pay, $1–$4 Peak Pay). Mileage
            rates are IRS Notice 2026-10 and Announcement 2026-11. Treat all
            figures as estimates — your market, hours, and acceptance strategy
            decide your number. Informational only.
          </p>
        </div>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">Related tools & guides</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/doordash-pay-per-delivery/" />}
            >
              Pay per delivery
            </Button>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/print-on-demand-profit-calculator/" />}
            >
              POD Profit Calculator
            </Button>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/tools" />}
            >
              Browse all tools
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
