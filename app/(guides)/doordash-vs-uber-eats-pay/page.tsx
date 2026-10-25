import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "DoorDash vs Uber Eats Pay (2026: Which Pays More?)",
  description:
    "DoorDash vs Uber Eats pay in 2026 — real hourly medians, base pay, tips, and which app to run first.",
  alternates: {
    canonical: "https://tools.slyxup.com/doordash-vs-uber-eats-pay/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "DoorDash vs Uber Eats Pay (2026: Which Pays More?)",
      description: "2026 DoorDash vs Uber Eats driver pay comparison.",
      url: "https://tools.slyxup.com/doordash-vs-uber-eats-pay/",
      datePublished: "2026-09-10",
      dateModified: "2026-09-10",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.com/doordash-vs-uber-eats-pay/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "DoorDash vs Uber Eats pay",
          item: "https://tools.slyxup.com/doordash-vs-uber-eats-pay/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which pays more, DoorDash or Uber Eats?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In H1 2026 tracked data DoorDash medians ran about 13% higher per hour ($15.95 vs $14.16 gross), with higher base pay and bigger tips.",
          },
        },
        {
          "@type": "Question",
          name: "Should I run both apps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Multi-apping during dinner rush cuts idle time — the top earners run DoorDash first, Uber Eats as the fill-in.",
          },
        },
      ],
    },
  ],
};

export default function DoorDashVsUberEatsPayPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            DoorDash vs Uber Eats Pay (2026)
          </h1>
          <p className="mt-3 text-sm">Updated September 2026 · 6 min read</p>
        </header>

        <p>
          You&apos;ve got both apps installed and one dinner rush. Which one
          do you open first? For years the answer was &ldquo;either&rdquo; —
          in 2026 the data finally picked a winner.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The short answer
        </h2>
        <div className="rounded-lg border bg-muted/40 p-5">
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">DoorDash median:</strong>{" "}
              <strong>$15.95/hr gross</strong> ($9.80 base/order, $8.82 tip)
            </li>
            <li>
              <strong className="text-foreground">Uber Eats median:</strong>{" "}
              <strong>$14.16/hr gross</strong> ($4.11 base/order, $5.00 tip)
            </li>
            <li>
              <strong className="text-foreground">Play:</strong> DoorDash
              first, Uber Eats as backup — multi-app both
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Why DoorDash pulled ahead
        </h2>
        <p>
          Two gaps opened up. Base pay medians sit near $9.80 on DoorDash vs
          $4.11 on Uber Eats, so a bad-tip order still pays on DoorDash and
          collapses on Uber. And tips run nearly double — $8.82 vs $5.00
          medians. Same dinners, different math.
        </p>
        <p>
          Here&apos;s the thing, though: medians hide your market. Uber Eats
          surge and Quests can beat DoorDash Peak Pay on specific nights, and
          Uber&apos;s order flow wins in a few dense downtowns. Real talk:
          run both for two Fridays, track net $/hr separately, and let your
          own data decide. Most drivers end up DoorDash-primary within a
          month.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The multi-app play
        </h2>
        <p>
          Open DoorDash first at 5pm, accept only $2/mile+. When it goes quiet,
          flip Uber Eats on and take the best Quest-eligible order. Never run
          both active on the same delivery — late drop-offs murder both
          ratings. Model your combined week in the{" "}
          <Link
            href="/doordash-pay-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            DoorDash Pay Calculator
          </Link>{" "}
          by adding both apps&apos; deliveries together.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          How much can you make overall?
        </h2>
        <p>
          See{" "}
          <Link
            href="/how-much-do-doordash-drivers-make/"
            className="text-primary underline-offset-4 hover:underline"
          >
            how much DoorDash drivers make
          </Link>{" "}
          for the full gross-to-net weekly breakdown.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">The bottom line</p>
          <p className="mt-1 text-sm">
            My take: DoorDash is the lead horse in 2026, Uber Eats is the
            backup singer. Run DoorDash for base-pay safety, keep Uber Eats
            warm for surge nights, and cherry-pick like your car payment
            depends on it — because it does.
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
