import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Etsy POD Fees vs Own Store: Where Should You Sell? (2026)",
  description:
    "Etsy POD fees vs your own store in 2026 — real fee math, traffic costs, and where print on demand sellers keep more.",
  alternates: {
    canonical: "https://tools.slyxup.in/etsy-pod-fees-vs-own-store/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Etsy POD Fees vs Own Store: Where Should You Sell? (2026)",
      description: "Etsy vs own-store POD fee math for 2026.",
      url: "https://tools.slyxup.in/etsy-pod-fees-vs-own-store/",
      datePublished: "2026-09-10",
      dateModified: "2026-09-10",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/etsy-pod-fees-vs-own-store/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Etsy vs own store",
          item: "https://tools.slyxup.in/etsy-pod-fees-vs-own-store/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does Etsy take from a POD sale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roughly 6.5% transaction fee plus payment processing around 3% + $0.25, plus $0.20 listing — about $2–$3 on a $25 shirt.",
          },
        },
        {
          "@type": "Question",
          name: "Is it cheaper to sell POD on my own store?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Per sale yes — Shopify plus Stripe costs less than Etsy fees. But you pay for traffic instead, which usually costs more than the fee gap until you have an audience.",
          },
        },
      ],
    },
  ],
};

export default function EtsyPodFeesVsOwnStorePage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            Etsy POD Fees vs Own Store (2026)
          </h1>
          <p className="mt-3 text-sm">Updated September 2026 · 5 min read</p>
        </header>

        <p>
          You&apos;re paying Etsy $2–$3 per shirt and wondering if Shopify
          would keep more in your pocket. It would — per sale. But
          that&apos;s the wrong math, and it tricks a lot of sellers.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The short answer
        </h2>
        <div className="rounded-lg border bg-muted/40 p-5">
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">Etsy $25 tee:</strong> ~$2–$3
              in fees, buyer traffic included
            </li>
            <li>
              <strong className="text-foreground">Own store $25 tee:</strong>{" "}
              ~$1 in processing, but you buy every visitor
            </li>
            <li>
              <strong className="text-foreground">Rule:</strong> start on Etsy,
              move winners to your own store
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          What Etsy really charges
        </h2>
        <p>
          Roughly 6.5% transaction, ~3% + $0.25 processing, $0.20 listing. On a
          $24.99 shirt that&apos;s about $1.62 + $1.00 + $0.20 — call it
          $2.80. Painful, but that $2.80 buys you placement in front of people
          already searching &ldquo;funny nurse shirt.&rdquo; Your Shopify
          store charges $0 for placement because there is no placement.
        </p>
        <p>
          Here&apos;s the thing: a Facebook click costs $0.50–$1.50. At a 2%
          conversion rate you need 50 clicks per sale — that&apos;s $25–$75 to
          replace what Etsy gave you for $2.80. Unless you&apos;ve got TikTok
          organic or an email list, your own store is the expensive option.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          When to move off Etsy
        </h2>
        <p>
          Once a design sells 100+ units with reviews, clone it to your own
          store and run traffic straight there. You&apos;ve proven demand, so
          ad spend converts. Keep Etsy as the discovery net, your store as the
          profit keeper. Model both with the{" "}
          <Link
            href="/print-on-demand-profit-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            POD Profit Calculator
          </Link>{" "}
          by changing the fee percent.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Still deciding on POD at all?
        </h2>
        <p>
          Read{" "}
          <Link
            href="/is-print-on-demand-worth-it/"
            className="text-primary underline-offset-4 hover:underline"
          >
            is print on demand worth it
          </Link>{" "}
          first — channel choice only matters if the underlying margins work.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">The bottom line</p>
          <p className="mt-1 text-sm">
            Etsy wins for discovery, your store wins per sale. Start where the
            buyers are, graduate when your bestsellers can fund their own
            traffic.
          </p>
          <Button
            className="mt-4"
            nativeButton={false}
            render={<Link href="/print-on-demand-profit-calculator/" />}
          >
            Open POD Profit Calculator
          </Button>
        </div>
      </article>
    </section>
  );
}
