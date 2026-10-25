import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Influencer Rates Per 1,000 Followers (2026 Rate Card)",
  description:
    "2026 influencer rates per 1,000 followers by tier and platform — nano to mega, with real per-post benchmarks.",
  alternates: {
    canonical: "https://tools.slyxup.com/influencer-rates-per-1000-followers/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Influencer Rates Per 1,000 Followers (2026 Rate Card)",
      description:
        "2026 influencer rate card per 1,000 followers across nano, micro, macro, and mega tiers.",
      url: "https://tools.slyxup.com/influencer-rates-per-1000-followers/",
      datePublished: "2026-09-10",
      dateModified: "2026-09-10",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.com/influencer-rates-per-1000-followers/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Rates per 1,000 followers",
          item: "https://tools.slyxup.com/influencer-rates-per-1000-followers/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much per 1,000 followers on Instagram?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roughly $10–$30 per 1,000 followers on Instagram in 2026, so 10K followers earns about $100–$300 per post at base rates.",
          },
        },
        {
          "@type": "Question",
          name: "How much for 100K followers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "About $1,000–$3,000 per Instagram post, $500–$1,500 on TikTok, and $2,000–$5,000 on YouTube at average engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Do bigger accounts earn less per follower?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Per-follower rates compress as you grow — mega accounts earn more total but less per 1,000 followers than engaged micro creators.",
          },
        },
      ],
    },
  ],
};

export default function InfluencerRatesPer1000FollowersPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            Influencer Rates Per 1,000 Followers (2026)
          </h1>
          <p className="mt-3 text-sm">Updated September 2026 · 5 min read</p>
        </header>

        <p>
          You typed &ldquo;how much per 1k followers&rdquo; into Google because
          you want one number you can multiply. Fair enough — here it is, with
          the catch that actually matters.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The short answer
        </h2>
        <div className="rounded-lg border bg-muted/40 p-5">
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">Instagram:</strong>{" "}
              <strong>$10–$30</strong> per 1,000 followers
            </li>
            <li>
              <strong className="text-foreground">TikTok:</strong>{" "}
              <strong>$5–$15</strong> per 1,000 followers
            </li>
            <li>
              <strong className="text-foreground">YouTube:</strong>{" "}
              <strong>$20–$50</strong> per 1,000 subscribers
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          What that means at real sizes
        </h2>
        <p>
          Say you&apos;re sitting at 10K on Instagram. At $10–$30 per 1K,
          you&apos;re looking at $100–$300 a post before niche adjustments. Hit
          100K with the same engagement and you&apos;re at $1,000–$3,000. The
          math is linear — your leverage isn&apos;t.
        </p>
        <p>
          The short version: small accounts punch above their weight per
          follower because their audiences actually listen. A 10K creator with
          7% engagement will routinely out-close a 100K account with 1%
          engagement, and smart brands know it. That&apos;s why nano rates
          look &ldquo;high&rdquo; per 1K — they&apos;re priced on trust, not
          reach.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The compression nobody warns you about
        </h2>
        <p>
          As you grow past 500K, your per-1K rate slides. A mega creator might
          earn $15K for a post that &ldquo;should&rdquo; cost $30K on linear
          math. Brands pay for incremental reach at that scale, and incremental
          reach gets cheaper. Don&apos;t anchor your 20K rate to a
          celebrity&apos;s rate card — you&apos;ll price yourself out of the
          deals you can actually win.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Run your own numbers
        </h2>
        <p>
          Multiply your followers by the range above, then adjust for your
          niche — or skip the mental math and use the{" "}
          <Link
            href="/influencer-rate-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            Influencer Rate Calculator
          </Link>
          . It handles niche, engagement, and usage markups automatically.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          How do platforms compare?
        </h2>
        <p>
          Per-1K is only half the story — a TikTok view and a YouTube view
          aren&apos;t priced the same. See{" "}
          <Link
            href="/instagram-vs-tiktok-vs-youtube-rates/"
            className="text-primary underline-offset-4 hover:underline"
          >
            Instagram vs TikTok vs YouTube rates
          </Link>{" "}
          for the platform-by-platform breakdown.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">The bottom line</p>
          <p className="mt-1 text-sm">
            Memorize this: $10–$30 per 1K on Instagram, half that on TikTok,
            double on YouTube. Then adjust up for engagement and niche, and
            never quote without adding usage. That&apos;ll put you ahead of
            90% of creators guessing in DMs.
          </p>
          <Button
            className="mt-4"
            nativeButton={false}
            render={<Link href="/influencer-rate-calculator/" />}
          >
            Open Influencer Rate Calculator
          </Button>
        </div>
      </article>
    </section>
  );
}
