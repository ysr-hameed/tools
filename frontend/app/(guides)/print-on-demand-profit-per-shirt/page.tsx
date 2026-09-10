import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Print on Demand Profit Per Shirt (2026 Real Numbers)",
  description:
    "How much profit per POD shirt in 2026? Real base costs, fees, and margins for tees, hoodies, and mugs.",
  alternates: {
    canonical: "https://tools.slyxup.in/print-on-demand-profit-per-shirt/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Print on Demand Profit Per Shirt (2026 Real Numbers)",
      description: "Real 2026 POD profit per shirt, hoodie, and mug.",
      url: "https://tools.slyxup.in/print-on-demand-profit-per-shirt/",
      datePublished: "2026-09-10",
      dateModified: "2026-09-10",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/print-on-demand-profit-per-shirt/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Profit per shirt",
          item: "https://tools.slyxup.in/print-on-demand-profit-per-shirt/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much profit per POD t-shirt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "About $13–$14 on a $24.99 tee with a $9.50 base cost at typical marketplace fees — roughly 50% margin before ads.",
          },
        },
        {
          "@type": "Question",
          name: "Which POD product has the best profit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hoodies in dollars per sale (about $22 on a $49.99 hoodie). Tees win on volume; mugs and posters win on margin percentage.",
          },
        },
      ],
    },
  ],
};

export default function PrintOnDemandProfitPerShirtPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            Print on Demand Profit Per Shirt (2026)
          </h1>
          <p className="mt-3 text-sm">Updated September 2026 · 5 min read</p>
        </header>

        <p>
          You sold a shirt for $25 and feel rich until the base cost, the
          marketplace cut, and the ad click all take their share. So
          what&apos;s actually left per shirt?
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The short answer
        </h2>
        <div className="rounded-lg border bg-muted/40 p-5">
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">Tee at $24.99:</strong> about{" "}
              <strong>$13.57 profit</strong> (~54% margin)
            </li>
            <li>
              <strong className="text-foreground">Hoodie at $49.99:</strong>{" "}
              about <strong>$22.44 profit</strong>
            </li>
            <li>
              <strong className="text-foreground">Mug at $16.99:</strong> about{" "}
              <strong>$8.59 profit</strong>
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Where the $25 actually goes
        </h2>
        <p>
          Say it&apos;s a standard tee: $9.50 goes to the printer for blank +
          print, about $1.92 to marketplace fees. You keep $13.57. That&apos;s
          before ads — and here&apos;s the thing, ads are the whole game. A $5
          customer acquisition cost turns that $13.57 into $8.57 real quick.
        </p>
        <p>
          Hoodies look better because the dollars are bigger even when the
          percentage is similar. Fifty hoodie sales beat a hundred tee sales on
          profit, with half the customer service headaches. Real talk: if
          you&apos;re only selling tees under $22, you&apos;re working for the
          printer.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Run your own numbers
        </h2>
        <p>
          Plug your price and base cost into the{" "}
          <Link
            href="/print-on-demand-profit-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            Print on Demand Profit Calculator
          </Link>{" "}
          — it shows profit, margin, per-100-sales income, and your break-even
          price in seconds.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Is POD even worth it?
        </h2>
        <p>
          Depends on your designs and traffic. Read{" "}
          <Link
            href="/is-print-on-demand-worth-it/"
            className="text-primary underline-offset-4 hover:underline"
          >
            is print on demand worth it
          </Link>{" "}
          before you upload 200 designs nobody searches for.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">The bottom line</p>
          <p className="mt-1 text-sm">
            Price tees at $24.99+, hold 40–50% margin, and push hoodies for
            dollar profit. One winning design at $13 profit beats twenty
            designs earning $4.
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
