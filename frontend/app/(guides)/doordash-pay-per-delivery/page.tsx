import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "DoorDash Pay Per Delivery (2026 Base, Tips & Peak Pay)",
  description:
    "DoorDash pay per delivery in 2026 — base pay, tips, and Peak Pay broken down with the $2/mile acceptance rule.",
  alternates: {
    canonical: "https://tools.slyxup.in/doordash-pay-per-delivery/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "DoorDash Pay Per Delivery (2026 Base, Tips & Peak Pay)",
      description: "2026 DoorDash per-delivery pay breakdown.",
      url: "https://tools.slyxup.in/doordash-pay-per-delivery/",
      datePublished: "2026-09-10",
      dateModified: "2026-09-10",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/doordash-pay-per-delivery/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pay per delivery",
          item: "https://tools.slyxup.in/doordash-pay-per-delivery/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does DoorDash pay per delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typically $6–$9 total: $2–$10 base pay plus tips, with Peak Pay adding $1–$4 during busy windows.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good per-mile rate for DoorDash?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At least $1.50–$2 per mile of total driving. Below that, fuel and wear usually erase the profit.",
          },
        },
      ],
    },
  ],
};

export default function DoorDashPayPerDeliveryPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            DoorDash Pay Per Delivery (2026)
          </h1>
          <p className="mt-3 text-sm">Updated September 2026 · 5 min read</p>
        </header>

        <p>
          The offer screen flashes $6.75 for 4.2 miles and you&apos;ve got
          three seconds to decide. Take it or decline? This is the math that
          answers that question every time.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The short answer
        </h2>
        <div className="rounded-lg border bg-muted/40 p-5">
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">Typical total:</strong>{" "}
              <strong>$6–$9</strong> (base + tip)
            </li>
            <li>
              <strong className="text-foreground">Base alone:</strong>{" "}
              <strong>$2–$10</strong>, usually $3–$5
            </li>
            <li>
              <strong className="text-foreground">Accept rule:</strong> only
              above <strong>$1.50–$2/mile</strong>
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Base, tips, and Peak Pay
        </h2>
        <p>
          Base covers distance, time, and how badly DoorDash needs a driver —
          longer and less desirable pays more. Tips are 100% yours and run
          about half your income. Peak Pay tacks on $1–$4 during dinner rush,
          rain, and game nights. That $6.75 offer? Probably $3.25 base + $3.50
          tip. Fine at 3 miles, terrible at 8.
        </p>
        <p>
          Here&apos;s the thing: that $6.75 for 4.2 miles is $1.61/mile —
          borderline. At 28 MPG and $3.60 gas you burn ~$0.54 in fuel, keep
          ~$6.21, and spend ~15 minutes. Three of those an hour is decent. One
          of those plus two duds is a $12/hr trap.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Run your week through the calculator
        </h2>
        <p>
          Enter your average base, tip, miles, and hours in the{" "}
          <Link
            href="/doordash-pay-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            DoorDash Pay Calculator
          </Link>{" "}
          and it&apos;ll tell you your real per-delivery and per-mile net.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          DoorDash vs Uber Eats?
        </h2>
        <p>
          If you multi-app, compare both in{" "}
          <Link
            href="/doordash-vs-uber-eats-pay/"
            className="text-primary underline-offset-4 hover:underline"
          >
            DoorDash vs Uber Eats pay
          </Link>{" "}
          — 2026 data flipped the old winner.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">The bottom line</p>
          <p className="mt-1 text-sm">
            Memorize $2/mile and a $6 floor. Every offer above both is usually
            worth taking; everything below both is donating wear to your car.
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
