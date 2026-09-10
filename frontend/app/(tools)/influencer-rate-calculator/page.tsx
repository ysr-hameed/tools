import type { Metadata } from "next";
import Link from "next/link";
import { InfluencerRateCalculator } from "./influencer-rate-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title:
    "Influencer Rate Calculator — How Much to Charge Brands Per Post (2026)",
  description:
    "Free Influencer Rate Calculator for 2026. Price sponsored posts by followers, platform, niche, and engagement. No sign-up.",
  alternates: {
    canonical: "https://tools.slyxup.in/influencer-rate-calculator/",
  },
  openGraph: {
    title:
      "Influencer Rate Calculator — How Much to Charge Brands Per Post (2026)",
    description:
      "Work out a fair brand deal rate from your followers, niche, and engagement. Free, no sign-up.",
    url: "https://tools.slyxup.in/influencer-rate-calculator/",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Influencer Rate Calculator",
      url: "https://tools.slyxup.in/influencer-rate-calculator/",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      description:
        "Free Influencer Rate Calculator to estimate fair sponsored post rates by followers, platform, niche, and engagement.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Rate by followers and platform",
        "Niche and engagement multipliers",
        "Usage rights markup",
        "Per-1,000-follower rate",
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
          name: "Influencer Rate Calculator",
          item: "https://tools.slyxup.in/influencer-rate-calculator/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much should I charge brands per post?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 50K Instagram creator with average engagement charges roughly $500–$1,500 per post in 2026. Finance and tech niches charge 30–40% more, and paid usage rights add 10–150% on top.",
          },
        },
        {
          "@type": "Question",
          name: "What is a fair rate per 1,000 followers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roughly $10–$30 per 1,000 followers on Instagram, $5–$15 on TikTok, and $20–$50 on YouTube, before niche and engagement adjustments.",
          },
        },
        {
          "@type": "Question",
          name: "Does engagement change my rate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Creators above 3–6% engagement can charge 20–40% more than average at the same follower count, while under 1.5% usually discounts the rate.",
          },
        },
      ],
    },
  ],
};

const rateTable = [
  ["Instagram", "$10–$30", "$500–$1,500"],
  ["TikTok", "$5–$15", "$250–$750"],
  ["YouTube", "$20–$50", "$1,000–$2,500"],
  ["Twitch", "$10–$30", "$500–$1,500"],
];

export default function InfluencerRateCalculatorPage() {
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
          Influencer Rate Calculator
        </h1>
        <p className="mt-4 text-muted-foreground">
          Brands ask for your rate and your mind goes blank. This tool turns
          followers, platform, niche, and engagement into a defensible per-post
          price.
        </p>
      </div>

      <InfluencerRateCalculator />

      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-muted-foreground">
        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="font-medium text-foreground">TL;DR</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>
              A 50K Instagram creator charges about{" "}
              <strong>$500–$1,500</strong> per post at average engagement.
            </li>
            <li>
              That&apos;s roughly <strong>$10–$30 per 1,000 followers</strong>{" "}
              on Instagram, $5–$15 on TikTok, $20–$50 on YouTube.
            </li>
            <li>
              Finance (+40%) and tech (+30%) pay the biggest niche premiums.
            </li>
            <li>
              Paid usage adds <strong>10–150%</strong> — never give whitelisting
              away free.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            How the calculation works
          </h2>
          <p className="mt-3">
            Your rate starts from a per-follower range by platform, then gets
            adjusted for <strong>niche</strong>, <strong>engagement</strong>,
            and <strong>usage rights</strong>:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg border bg-muted/40 p-4 font-mono text-sm text-foreground">
            Rate = Followers × Platform rate × Niche × Engagement × Usage
          </pre>
          <p className="mt-3">
            Set your followers and engagement from your last 12 posts, pick the
            platform and niche, and add usage markup if the brand wants to run
            your content as ads.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Rate per 1,000 followers by platform
          </h2>
          <p className="mt-3">
            Base ranges before niche and engagement (50K follower example):
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Platform</th>
                  <th className="py-2 pr-4 font-medium">Per 1K followers</th>
                  <th className="py-2 font-medium">50K example</th>
                </tr>
              </thead>
              <tbody>
                {rateTable.map((row) => (
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
                50K Instagram fitness creator, 4% engagement
              </p>
              <p className="mt-1 text-sm">
                Base $500–$1,500 × 1.1 niche × 1.2 engagement. You quote about{" "}
                <strong>$660–$1,980</strong> — open near $1,300 for one Reel.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                50K TikTok finance creator, 6% engagement
              </p>
              <p className="mt-1 text-sm">
                Base $250–$750 × 1.4 niche × 1.4 engagement. You quote about{" "}
                <strong>$490–$1,470</strong> — finance pays more despite
                TikTok&apos;s lower base.
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
                Should I charge per follower or per view?
              </h3>
              <p className="mt-1">
                Per follower for the quote, per view for the sanity check.
                Brands buy reach, so followers anchor the negotiation — but if
                your average views are far below your follower count, expect
                pushback.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                How much extra for usage rights?
              </h3>
              <p className="mt-1">
                Add 10% for 30-day organic reuse, 20% for 90 days, 40% for paid
                whitelisting, and 150% for a full buyout. Get it in writing
                before you post.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                What if I have a small following?
              </h3>
              <p className="mt-1">
                Nano creators (1K–10K) still charge $50–$500 per post. High
                engagement and a valuable niche matter more than raw follower
                count at that size.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Methodology & sources
          </h2>
          <p className="mt-3 text-sm">
            Rate ranges are based on 2026 published creator benchmarks
            (Influencer Marketing Hub, Shopify, Collabstr) and industry rate
            cards, adjusted for platform, niche, and engagement. Every deal is
            negotiated — treat all figures as starting estimates, not
            guarantees. This tool is for informational purposes only.
          </p>
        </div>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">Related tools & guides</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/how-much-should-i-charge-brands/" />}
            >
              How much should I charge?
            </Button>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/tiktok-shop-fee-calculator/" />}
            >
              TikTok Shop Fee Calculator
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
