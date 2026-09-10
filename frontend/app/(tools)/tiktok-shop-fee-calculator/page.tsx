import type { Metadata } from "next";
import Link from "next/link";
import { TikTokShopFeeCalculator } from "./tiktok-shop-fee-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title:
    "TikTok Shop Fee Calculator — See Exactly How Much You Keep Per Sale (2026)",
  description:
    "Free TikTok Shop Fee Calculator for 2026. See the 6% unified referral fee (processing included) and net you keep per sale by category. No sign-up.",
  alternates: {
    canonical: "https://tools.slyxup.in/tiktok-shop-fee-calculator/",
  },
  openGraph: {
    title:
      "TikTok Shop Fee Calculator — See Exactly How Much You Keep Per Sale (2026)",
    description:
      "Work out your TikTok Shop referral fee and how much of each sale you actually keep. Free, no sign-up.",
    url: "https://tools.slyxup.in/tiktok-shop-fee-calculator/",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "TikTok Shop Fee Calculator",
      url: "https://tools.slyxup.in/tiktok-shop-fee-calculator/",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      description:
        "Free TikTok Shop Fee Calculator to estimate the 2026 unified referral fee and net profit per sale by category.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Referral fee by category",
        "Processing included in referral fee",
        "Optional shipping costs",
        "Net profit and % kept per sale",
        "No sign-up required",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "TikTok Shop Fee Calculator",
          item: "https://tools.slyxup.in/tiktok-shop-fee-calculator/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does TikTok Shop charge sellers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TikTok Shop charges a unified 6% referral fee on most US categories in 2026 (5% for jewelry), with payment processing included. So on a $50 sale you keep $47.00 before shipping.",
          },
        },
        {
          "@type": "Question",
          name: "What is the TikTok Shop referral fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The referral fee is 6% of each US sale across most categories, 5% for jewelry. Payment processing is bundled — there is no separate transaction fee.",
          },
        },
        {
          "@type": "Question",
          name: "How much do you keep from a TikTok Shop sale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After the 6% unified referral fee you keep 94% of the sale price before shipping and your product cost — $47.00 on a $50 sale.",
          },
        },
      ],
    },
  ],
};

const feeTable = [
  ["Beauty", "6%", "$47.00"],
  ["Fashion", "6%", "$47.00"],
  ["Home & Living", "6%", "$47.00"],
  ["General", "6%", "$47.00"],
  ["Electronics", "6%", "$47.00"],
  ["Books", "6%", "$47.00"],
  ["Jewelry", "5%", "$47.50"],
];

export default function TikTokShopFeeCalculatorPage() {
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
          TikTok Shop Fee Calculator
        </h1>
        <p className="mt-4 text-muted-foreground">
          TikTok Shop looks free until you price a product and watch the fees
          eat the margin. This tool shows the 2026 unified referral fee and
          exactly how much you keep per sale.
        </p>
      </div>

      <TikTokShopFeeCalculator />

      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-muted-foreground">
        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="font-medium text-foreground">TL;DR</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>
              Most US categories carry a <strong>6% unified referral fee</strong>;
              jewelry runs <strong>5%</strong>. Processing is included.
            </li>
            <li>
              On a $50 sale you keep <strong>$47.00</strong> before shipping
              and your product cost — <strong>94%</strong>.
            </li>
            <li>
              Price your products so your <strong>target margin</strong> still
              holds after fees — not before.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            How the calculation works
          </h2>
          <p className="mt-3">
            Your net is the sale price minus two things: the{" "}
            <strong>unified referral fee</strong> (6% most categories, 5%
            jewelry, processing included) and any <strong>shipping</strong> you
            cover yourself:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg border bg-muted/40 p-4 font-mono text-sm text-foreground">
            Net = Price − Referral (6%, processing included) − Shipping
          </pre>
          <p className="mt-3">
            Pick your category to apply the right referral rate, add your
            shipping cost if you pay it, and the calculator breaks out every fee
            plus the percent of the sale you keep.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Referral fee by category
          </h2>
          <p className="mt-3">
            Net kept on a $50 sale (before shipping and product cost):
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Category</th>
                  <th className="py-2 pr-4 font-medium">Referral fee</th>
                  <th className="py-2 font-medium">You keep from $50</th>
                </tr>
              </thead>
              <tbody>
                {feeTable.map((row) => (
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
                $30 beauty product
              </p>
              <p className="mt-1 text-sm">
                $1.80 referral (6%, processing included). You keep about{" "}
                <strong>$28.20</strong> before shipping and product cost —
                94%.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                $120 jewelry item
              </p>
              <p className="mt-1 text-sm">
                $6.00 referral (5%). You keep about{" "}
                <strong>$114.00</strong> before shipping and product cost.
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
                Are TikTok Shop fees worth it?
              </h3>
              <p className="mt-1">
                For most sellers yes — the 94% you keep after fees is on par
                with other marketplaces, and the built-in discovery is the real
                draw. It only stops making sense on thin-margin items.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                Does TikTok Shop charge a listing fee?
              </h3>
              <p className="mt-1">
                No. There&apos;s no upfront or monthly fee to list, so you only
                pay when you make a sale.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                How do I set a profitable price on TikTok Shop?
              </h3>
              <p className="mt-1">
                Start from your target profit, add the 6% referral and
                shipping, then back into a price. This calculator does that
                math for you.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Methodology & sources
          </h2>
          <p className="mt-3 text-sm">
            Fee rates are based on TikTok Shop&apos;s published US seller fee
            schedule for 2026 (6% unified referral, 5% jewelry, processing
            included). Fees can vary by region, promo, and sales channel
            (affiliate vs organic), so treat all figures as estimates. This
            tool is for informational purposes only and is not affiliated with
            or endorsed by TikTok.
          </p>
        </div>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">Related tools & guides</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/how-much-are-tiktok-shop-fees/" />}
            >
              How much are TikTok Shop fees?
            </Button>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/youtube-shorts-calculator/" />}
            >
              YouTube Shorts Calculator
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