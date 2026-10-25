import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Much Do DoorDash Drivers Make? (2026 Real Pay)",
  description:
    "How much do DoorDash drivers make in 2026? Real gross and net hourly pay, per-delivery rates, and what top Dashers earn.",
  alternates: {
    canonical: "https://tools.slyxup.com/how-much-do-doordash-drivers-make/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How Much Do DoorDash Drivers Make? (2026 Real Pay)",
      description: "Real 2026 DoorDash driver pay — gross, net, and top earner tactics.",
      url: "https://tools.slyxup.com/how-much-do-doordash-drivers-make/",
      datePublished: "2026-09-10",
      dateModified: "2026-09-10",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.com/how-much-do-doordash-drivers-make/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "How much do DoorDash drivers make?",
          item: "https://tools.slyxup.com/how-much-do-doordash-drivers-make/",
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
            text: "Most Dashers gross $15–$25 per hour in 2026, netting about $11–$19 after gas and vehicle costs.",
          },
        },
        {
          "@type": "Question",
          name: "Can you make $1,000 a week on DoorDash?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Possible at 40+ peak hours with cherry-picking — roughly $800–$1,000 gross, $600–$750 net after costs, before taxes.",
          },
        },
      ],
    },
  ],
};

export default function HowMuchDoDoorDashDriversMakePage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            How Much Do DoorDash Drivers Make? (2026)
          </h1>
          <p className="mt-3 text-sm">Updated September 2026 · 6 min read</p>
        </header>

        <p>
          You&apos;ve seen the &ldquo;I made $400 in a weekend&rdquo; screenshots
          and the &ldquo;after gas I made $9/hr&rdquo; rants. Both are true —
          they&apos;re just describing different drivers.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The short answer
        </h2>
        <div className="rounded-lg border bg-muted/40 p-5">
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">Gross:</strong>{" "}
              <strong>$15–$25/hr</strong>, ~$6–$9 per delivery with tips
            </li>
            <li>
              <strong className="text-foreground">Net:</strong>{" "}
              <strong>$11–$19/hr</strong> after gas and vehicle costs
            </li>
            <li>
              <strong className="text-foreground">Top Dashers:</strong>{" "}
              <strong>$22–$28/hr net</strong> cherry-picking peak windows
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Where the money actually comes from
        </h2>
        <p>
          Base pay is $2–$10 per order — usually $3–$5 — plus Peak Pay of
          $1–$4 when it&apos;s busy, plus tips. Tips are roughly half your pay
          at a median near $8.82 per delivery in 2026 data. No-tip $3 orders
          are why average accept-everything drivers stall at $13–$16/hr net.
        </p>
        <p>
          Here&apos;s the thing: your car is a silent business partner taking
          30–40% off the top. Say you drive 300 miles in a 20-hour week —
          that&apos;s ~$39 in gas plus $20 in wear, $59 gone before
          you&apos;ve eaten. A 28-MPG sedan vs a 17-MPG truck is a $1,200/year
          decision wearing a car disguise.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Run your own numbers
        </h2>
        <p>
          Don&apos;t trust averages with your car and your market. Enter your
          deliveries, hours, miles, and MPG in the{" "}
          <Link
            href="/doordash-pay-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            DoorDash Pay Calculator
          </Link>{" "}
          and it&apos;ll show gross, costs, and true net hourly in seconds.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          What about per-delivery pay?
        </h2>
        <p>
          For the order-level breakdown — base vs tips vs Peak Pay — read{" "}
          <Link
            href="/doordash-pay-per-delivery/"
            className="text-primary underline-offset-4 hover:underline"
          >
            DoorDash pay per delivery
          </Link>{" "}
          next.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">The bottom line</p>
          <p className="mt-1 text-sm">
            DoorDash pays real money if you treat it like a business: peak
            hours, $2/mile minimum, track everything. Treat it like a slot
            machine that sends you orders and you&apos;ll earn slot-machine
            wages.
          </p>
          <Button
            className="mt-4"
            nativeButton={false}
            render={<Link href="/doordash-pay-calculator/" />}
          >
            Open DoorDash Pay Calculator
          </Button>
        </div>
      </article>
    </section>
  );
}
