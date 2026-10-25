import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeDollarSign, Bike, Clapperboard, CircleDollarSign, Gamepad2, Shirt, Store, Fuel, ShoppingBag, Truck } from "lucide-react";
import { articles } from "@/lib/articles";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Free Creator, Seller & Gig Tools",
  description:
    "Browse free TikTok Shop fee, Shorts earnings, Twitch, influencer rate, POD profit, and DoorDash pay calculators. Fast, private, no sign-up.",
};

const availableTools = [
  {
    title: "Creator Deal Profit Calculator",
    href: "/creator-deal-profit-calculator",
    description: "Turn a flat brand quote into a real hourly rate after tax, revisions, admin, and production time.",
    icon: BadgeDollarSign,
    category: "Creator money",
    isNew: true,
  },
  {
    title: "Digital Product Break-even Calculator",
    href: "/digital-product-break-even-calculator",
    description: "Find how many sales your template, course, or download needs before it pays back the work.",
    icon: CircleDollarSign,
    category: "Digital products",
    isNew: true,
  },
  {
    title: "TikTok Shop Fee Calculator",
    href: "/tiktok-shop-fee-calculator",
    description:
      "See exactly how much you keep per TikTok Shop sale after the 6% referral fee (processing included), by category.",
    icon: Store,
    category: "Seller money",
    isNew: false,
  },
  {
    title: "YouTube Shorts Money Calculator",
    href: "/youtube-shorts-calculator",
    description:
      "Estimate your YouTube Shorts earnings from Shorts ad revenue and bonus payouts per 1,000 views based on niche and region.",
    icon: Clapperboard,
    category: "Creator money",
    isNew: false,
  },
  {
    title: "Twitch Earnings Calculator",
    href: "/twitch-earnings-calculator",
    description:
      "Estimate your monthly Twitch income from subscriptions (50% split), Bits, ads, and donations based on viewers and activity.",
    icon: Gamepad2,
    category: "Creator money",
    isNew: false,
  },
  {
    title: "Influencer Rate Calculator",
    href: "/influencer-rate-calculator",
    description:
      "Price sponsored posts by followers, platform, niche, and engagement — with usage rights markup.",
    icon: BadgeDollarSign,
    category: "Creator money",
    isNew: false,
  },
  {
    title: "Print on Demand Profit Calculator",
    href: "/print-on-demand-profit-calculator",
    description:
      "See per-item profit, margin, and monthly income after base cost and marketplace fees.",
    icon: Shirt,
    category: "Seller money",
    isNew: false,
  },
  {
    title: "DoorDash Pay Calculator",
    href: "/doordash-pay-calculator",
    description:
      "See true net hourly pay after gas and vehicle costs — per delivery and per mile.",
    icon: Bike,
    category: "Gig work",
    isNew: false,
  },
  {
    title: "Etsy Fee & Profit Calculator",
    href: "/etsy-fee-profit-calculator",
    description: "Calculate what you keep after Etsy fees, shipping, product cost, ads, packaging, and tax.",
    icon: ShoppingBag,
    category: "Seller money",
    isNew: true,
  },
  {
    title: "eBay Fee & Profit Calculator",
    href: "/ebay-fee-profit-calculator",
    description: "Model eBay fees, promoted listings, shipping, product cost, break-even revenue, and margin.",
    icon: Store,
    category: "Resale money",
    isNew: true,
  },
  {
    title: "Delivery App Net Pay Calculator",
    href: "/delivery-app-pay-calculator",
    description: "Compare delivery app earnings after fuel, vehicle costs, tax reserve, and working time.",
    icon: Truck,
    category: "Gig work",
    isNew: true,
  },
  {
    title: "Gas & Mileage Profit Calculator",
    href: "/gas-mileage-profit-calculator",
    description: "See whether a route is profitable after gas, maintenance, insurance, mileage, and taxes.",
    icon: Fuel,
    category: "Gig work",
    isNew: true,
  },
  {
    title: "Marketplace Seller Profit Calculator",
    href: "/marketplace-seller-profit-calculator",
    description: "Compare product margins across Etsy, eBay, TikTok Shop, Shopify, and other marketplaces.",
    icon: ShoppingBag,
    category: "Seller money",
    isNew: true,
  },
];

export default function ToolsPage() {
  return (
    <section className="section-shell flex flex-1 flex-col py-14 sm:py-20">
      <PageHeader
        eyebrow="The toolkit"
        title="One useful answer at a time."
        description="Calculators for creators, sellers, freelancers, and gig workers. Built around real decisions, with the assumptions left visible."
        align="left"
      />

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {availableTools.map((tool) => (
          <Card
            key={tool.href}
            className="group flex flex-col"
          >
            <CardHeader>
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <tool.icon className="size-5" />
              </div>
                <div className="flex items-start gap-2">
                {tool.isNew && <span className="label mt-1 text-primary">New</span>}
                <CardTitle className="font-heading text-xl font-bold tracking-[-0.04em]">
                  {tool.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
                <p className="flex-1 text-sm leading-6 text-muted-foreground">
                {tool.description}
              </p>
                <p className="label mt-3 text-muted-foreground">{tool.category}</p>
                <Button
                 className="mt-5 w-full justify-between"
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
          <h2 className="font-heading text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
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
