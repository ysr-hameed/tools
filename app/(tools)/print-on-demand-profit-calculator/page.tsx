import type { Metadata } from "next";
import Link from "next/link";
import { PrintOnDemandProfitCalculator } from "./print-on-demand-profit-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Print on Demand Profit Calculator — Per-Item Profit & Margin (2026)",
  description:
    "Free Print on Demand Profit Calculator for 2026. See profit per shirt, hoodie, or mug after base cost and marketplace fees. No sign-up.",
  alternates: {
    canonical: "https://tools.slyxup.com/print-on-demand-profit-calculator/",
  },
  openGraph: {
    title: "Print on Demand Profit Calculator — Per-Item Profit & Margin (2026)",
    description:
      "Work out your POD profit per sale, margin, and monthly income. Free, no sign-up.",
    url: "https://tools.slyxup.com/print-on-demand-profit-calculator/",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Print on Demand Profit Calculator",
      url: "https://tools.slyxup.com/print-on-demand-profit-calculator/",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      description:
        "Free Print on Demand Profit Calculator to estimate per-item profit, margin, and monthly income after base cost and fees.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Profit by product type",
        "Base cost and fee inputs",
        "Margin and break-even price",
        "Monthly profit projection",
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
          name: "Print on Demand Profit Calculator",
          item: "https://tools.slyxup.com/print-on-demand-profit-calculator/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much profit do you make per POD shirt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A $24.99 tee with a $9.50 base cost and typical marketplace fees keeps roughly $13–$14 before ads — about a 50% margin.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good profit margin for print on demand?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aim for 40–50%. Below 30% leaves no room for ads or returns; above 60% usually means you're overpriced for the design quality.",
          },
        },
        {
          "@type": "Question",
          name: "What is the break-even price for a POD product?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Break-even is (base cost + fixed fee) divided by (1 − fee rate). A $9.50 shirt at 6.5% + $0.30 breaks even around $10.48.",
          },
        },
      ],
    },
  ],
};

const profitTable = [
  ["T-Shirt ($24.99)", "$9.50", "≈ $13.57"],
  ["Hoodie ($49.99)", "$24.00", "≈ $22.44"],
  ["Mug ($16.99)", "$7.00", "≈ $8.59"],
  ["Tote ($22.99)", "$11.00", "≈ $10.20"],
];

export default function PrintOnDemandProfitCalculatorPage() {
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
          Print on Demand Profit Calculator
        </h1>
        <p className="mt-4 text-muted-foreground">
          A $25 shirt doesn&apos;t mean $25 profit. This tool subtracts the
          base cost and marketplace fees so you see what actually lands per
          sale.
        </p>
      </div>

      <PrintOnDemandProfitCalculator />

      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-muted-foreground">
        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="font-medium text-foreground">TL;DR</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>
              A <strong>$24.99 tee</strong> at $9.50 base keeps about{" "}
              <strong>$13.57</strong> before ads — roughly 50% margin.
            </li>
            <li>
              That&apos;s ≈ <strong>$1,357 per 100 sales</strong> at the same
              price and cost.
            </li>
            <li>
              Target <strong>40–50% margin</strong>; price from your break-even
              up, not from vibes.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            How the calculation works
          </h2>
          <p className="mt-3">
            Your profit is the retail price minus the{" "}
            <strong>base cost</strong> (blank + print) and the{" "}
            <strong>marketplace fees</strong> (a percent plus a fixed fee):
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg border bg-muted/40 p-4 font-mono text-sm text-foreground">
            Profit = Price − Base − (Price × Fee% + Fixed)
          </pre>
          <p className="mt-3">
            Pick your product to load a realistic 2026 base cost, set your
            price and fee, and the calculator shows profit, margin, monthly
            income, and break-even.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Profit at common prices
          </h2>
          <p className="mt-3">
            Net per sale at 6.5% + $0.30 fees (before ads and shipping gaps):
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Product</th>
                  <th className="py-2 pr-4 font-medium">Base cost</th>
                  <th className="py-2 font-medium">You keep</th>
                </tr>
              </thead>
              <tbody>
                {profitTable.map((row) => (
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
                100 tees a month at $24.99
              </p>
              <p className="mt-1 text-sm">
                About <strong>$13.57 profit each</strong> means roughly{" "}
                <strong>$1,357/month</strong> before ads. Spend $400 on ads and
                you&apos;re still near $950 net.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                Hoodie at $49.99 with $24 base
              </p>
              <p className="mt-1 text-sm">
                About <strong>$22.44 per sale</strong>. Fewer sales needed —
                50 hoodies beat 100 tees on profit.
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
                Is print on demand still profitable?
              </h3>
              <p className="mt-1">
                Yes, at 40–50% margins with designs people actually search for.
                It stops working when base costs plus ads eat the margin —
                usually under $20 tees or broad niches with $1+ CPCs.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                Should I sell on Etsy or my own store?
              </h3>
              <p className="mt-1">
                Etsy brings built-in search but charges ~6.5% plus processing;
                your own store keeps more per sale but you pay for every
                visitor. Most sellers start on Etsy, then move winners to
                their own store.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                How do I raise POD profit without raising prices?
              </h3>
              <p className="mt-1">
                Switch to a cheaper print provider, bundle (2-pack tees),
                push hoodies and mugs with better dollar profit, and cut ad
                waste before touching retail price.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Methodology & sources
          </h2>
          <p className="mt-3 text-sm">
            Base costs reflect 2026 published POD supplier ranges (Printify,
            Printful: tees $8–$15, hoodies $20–$35, mugs $6–$10). Fee defaults
            mirror common marketplace structures. Treat all figures as
            estimates — confirm your provider&apos;s live base and shipping
            before pricing. Informational only.
          </p>
        </div>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">Related tools & guides</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/print-on-demand-profit-per-shirt/" />}
            >
              Profit per shirt
            </Button>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/doordash-pay-calculator/" />}
            >
              DoorDash Pay Calculator
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
