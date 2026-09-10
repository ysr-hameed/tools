import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeDollarSign, Bike, Clapperboard, Gamepad2, Shirt, Store } from "lucide-react";
import { articles } from "@/lib/articles";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Free Creator, Seller & Gig Calculators — 6 Tools",
  description:
    "Browse free TikTok Shop fee, Shorts earnings, Twitch, influencer rate, POD profit, and DoorDash pay calculators. Fast, private, no sign-up.",
};

const availableTools = [
  {
    title: "TikTok Shop Fee Calculator",
    href: "/tiktok-shop-fee-calculator",
    description:
      "See exactly how much you keep per TikTok Shop sale after the 6% referral fee (processing included), by category.",
    icon: Store,
  },
  {
    title: "YouTube Shorts Money Calculator",
    href: "/youtube-shorts-calculator",
    description:
      "Estimate your YouTube Shorts earnings from Shorts ad revenue and bonus payouts per 1,000 views based on niche and region.",
    icon: Clapperboard,
  },
  {
    title: "Twitch Earnings Calculator",
    href: "/twitch-earnings-calculator",
    description:
      "Estimate your monthly Twitch income from subscriptions (50% split), Bits, ads, and donations based on viewers and activity.",
    icon: Gamepad2,
  },
  {
    title: "Influencer Rate Calculator",
    href: "/influencer-rate-calculator",
    description:
      "Price sponsored posts by followers, platform, niche, and engagement — with usage rights markup.",
    icon: BadgeDollarSign,
  },
  {
    title: "Print on Demand Profit Calculator",
    href: "/print-on-demand-profit-calculator",
    description:
      "See per-item profit, margin, and monthly income after base cost and marketplace fees.",
    icon: Shirt,
  },
  {
    title: "DoorDash Pay Calculator",
    href: "/doordash-pay-calculator",
    description:
      "See true net hourly pay after gas and vehicle costs — per delivery and per mile.",
    icon: Bike,
  },
];

export default function ToolsPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Tools"
        title="All tools"
        description="Free, fast and privacy-friendly — everything runs right in your browser."
        align="left"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {availableTools.map((tool, i) => (
          <Card
            key={tool.href}
            className="group flex flex-col transition-all hover:-translate-y-0.5 hover:bg-muted/50"
          >
            <CardHeader>
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <tool.icon className="size-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <CardTitle className="font-heading text-lg font-medium">
                  {tool.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="flex-1 text-sm text-muted-foreground">
                {tool.description}
              </p>
              <Button
                className="mt-4"
                variant="outline"
                size="sm"
                nativeButton={false}
                render={<Link href={tool.href} />}
              >
                Open tool <ArrowRight className="ml-1.5 size-3.5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <div className="flex items-end justify-between">
          <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
            Guides & resources
          </h2>
          <Button
            variant="ghost"
            nativeButton={false}
            render={<Link href="/blog" />}
          >
            View all guides <ArrowRight className="ml-1 size-4" />
          </Button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {articles.map((guide) => (
            <Link
              key={guide.slug}
              href={guide.href}
              className="group flex flex-col rounded-xl ring-1 ring-foreground/10 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-primary/40"
            >
              <Card className="flex flex-1 flex-col rounded-xl">
                <CardHeader>
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {guide.category}
                  </span>
                  <CardTitle className="font-heading text-lg font-medium">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="flex-1 text-sm text-muted-foreground">
                    {guide.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read guide
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}