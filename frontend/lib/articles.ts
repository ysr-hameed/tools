export interface Article {
  title: string;
  slug: string;
  description: string;
  category: string;
  datePublished: string;
  readTime: string;
  href: string;
}

/**
 * Central blog registry.
 *
 * Add a new article here and it will automatically appear on the /blog index.
 * Each entry maps to a page under `app/blog/[slug]/`. The `href` is where the
 * full article lives (for now existing guides keep their own routes).
 */
export const articles: Article[] = [
  {
    title: "YouTube Shorts RPM: How Much Do Shorts Pay Per View? (2026)",
    slug: "youtube-shorts-rpm-per-1000-views",
    description:
      "Real YouTube Shorts RPM figures for 2026, how Shorts payouts work, and why Shorts earn less than long-form.",
    category: "YouTube",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/youtube-shorts-rpm-per-1000-views",
  },
  {
    title: "How Much Do 1 Million Shorts Views Pay on YouTube? (2026)",
    slug: "how-much-do-1-million-shorts-views-pay",
    description:
      "Real payouts for 1 million YouTube Shorts views, including ad revenue and bonus incentives.",
    category: "YouTube",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/how-much-do-1-million-shorts-views-pay",
  },
  {
    title: "How to Make Money With YouTube Shorts in 2026",
    slug: "how-to-make-money-with-youtube-shorts",
    description:
      "A practical guide to Shorts monetization: requirements, RPM, bonuses, and the fastest income strategies.",
    category: "YouTube",
    datePublished: "2026-08-13",
    readTime: "6 min read",
    href: "/how-to-make-money-with-youtube-shorts",
  },
  {
    title: "How Much Do Twitch Streamers Make? (2026)",
    slug: "how-much-do-twitch-streamers-make",
    description:
      "Real Twitch income figures for 2026 across subscriptions, Bits, ads, and donations.",
    category: "Twitch",
    datePublished: "2026-08-13",
    readTime: "6 min read",
    href: "/how-much-do-twitch-streamers-make",
  },
  {
    title: "How Much Does Twitch Pay Per Sub? (2026)",
    slug: "how-much-does-twitch-pay-per-sub",
    description:
      "The 50/50 sub split, Tier 1/2/3 payouts, Prime subs, and gifted subs explained.",
    category: "Twitch",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/how-much-does-twitch-pay-per-sub",
  },
  {
    title: "How Many Subscribers to Make Money on Twitch? (2026)",
    slug: "how-many-subscribers-to-make-money-on-twitch",
    description:
      "The follower and subscription milestones where Twitch streamers start earning real money.",
    category: "Twitch",
    datePublished: "2026-08-13",
    readTime: "5 min read",
    href: "/how-many-subscribers-to-make-money-on-twitch",
  },
  {
    title: "How Much Are TikTok Shop Fees? (2026 Seller Fee Breakdown)",
    slug: "how-much-are-tiktok-shop-fees",
    description:
      "Real TikTok Shop referral and processing fees for 2026, with examples of how much you keep per sale.",
    category: "TikTok Shop",
    datePublished: "2026-08-15",
    readTime: "5 min read",
    href: "/how-much-are-tiktok-shop-fees",
  },
  {
    title: "How Much Do You Keep From a TikTok Shop Sale? (2026)",
    slug: "how-much-do-you-keep-from-a-tiktok-shop-sale",
    description:
      "Net you keep per TikTok Shop sale after referral and processing fees, with examples by price point.",
    category: "TikTok Shop",
    datePublished: "2026-08-15",
    readTime: "5 min read",
    href: "/how-much-do-you-keep-from-a-tiktok-shop-sale",
  },
  {
    title: "Is TikTok Shop Worth It? Fees vs. Profit in 2026",
    slug: "is-tiktok-shop-worth-it",
    description:
      "Whether TikTok Shop is worth it in 2026, based on real fee math, margin, and which products keep sellers profitable.",
    category: "TikTok Shop",
    datePublished: "2026-08-15",
    readTime: "6 min read",
    href: "/is-tiktok-shop-worth-it",
  },
  {
    title: "How Much Should I Charge Brands? (2026 Creator Rates)",
    slug: "how-much-should-i-charge-brands",
    description:
      "Real 2026 brand deal rates by follower count, niche, and usage rights — with a free calculator.",
    category: "Creator Rates",
    datePublished: "2026-09-10",
    readTime: "6 min read",
    href: "/how-much-should-i-charge-brands",
  },
  {
    title: "Influencer Rates Per 1,000 Followers (2026 Rate Card)",
    slug: "influencer-rates-per-1000-followers",
    description:
      "2026 influencer rates per 1,000 followers by tier and platform — nano to mega, with real per-post benchmarks.",
    category: "Creator Rates",
    datePublished: "2026-09-10",
    readTime: "5 min read",
    href: "/influencer-rates-per-1000-followers",
  },
  {
    title: "Instagram vs TikTok vs YouTube Rates (2026 Brand Deals)",
    slug: "instagram-vs-tiktok-vs-youtube-rates",
    description:
      "Instagram vs TikTok vs YouTube influencer rates in 2026 — which platform pays most per post and why.",
    category: "Creator Rates",
    datePublished: "2026-09-10",
    readTime: "6 min read",
    href: "/instagram-vs-tiktok-vs-youtube-rates",
  },
  {
    title: "Print on Demand Profit Per Shirt (2026 Real Numbers)",
    slug: "print-on-demand-profit-per-shirt",
    description:
      "How much profit per POD shirt in 2026? Real base costs, fees, and margins for tees, hoodies, and mugs.",
    category: "Print on Demand",
    datePublished: "2026-09-10",
    readTime: "5 min read",
    href: "/print-on-demand-profit-per-shirt",
  },
  {
    title: "Is Print on Demand Worth It? Profit vs Reality (2026)",
    slug: "is-print-on-demand-worth-it",
    description:
      "Is print on demand worth it in 2026? Real margins, costs, and who actually makes money with POD.",
    category: "Print on Demand",
    datePublished: "2026-09-10",
    readTime: "6 min read",
    href: "/is-print-on-demand-worth-it",
  },
  {
    title: "Etsy POD Fees vs Own Store: Where Should You Sell? (2026)",
    slug: "etsy-pod-fees-vs-own-store",
    description:
      "Etsy POD fees vs your own store in 2026 — real fee math, traffic costs, and where sellers keep more.",
    category: "Print on Demand",
    datePublished: "2026-09-10",
    readTime: "5 min read",
    href: "/etsy-pod-fees-vs-own-store",
  },
  {
    title: "How Much Do DoorDash Drivers Make? (2026 Real Pay)",
    slug: "how-much-do-doordash-drivers-make",
    description:
      "How much do DoorDash drivers make in 2026? Real gross and net hourly pay, per-delivery rates, and top earner tactics.",
    category: "Gig Work",
    datePublished: "2026-09-10",
    readTime: "6 min read",
    href: "/how-much-do-doordash-drivers-make",
  },
  {
    title: "DoorDash Pay Per Delivery (2026 Base, Tips & Peak Pay)",
    slug: "doordash-pay-per-delivery",
    description:
      "DoorDash pay per delivery in 2026 — base pay, tips, and Peak Pay broken down with the $2/mile rule.",
    category: "Gig Work",
    datePublished: "2026-09-10",
    readTime: "5 min read",
    href: "/doordash-pay-per-delivery",
  },
  {
    title: "DoorDash vs Uber Eats Pay (2026: Which Pays More?)",
    slug: "doordash-vs-uber-eats-pay",
    description:
      "DoorDash vs Uber Eats pay in 2026 — real hourly medians, base pay, tips, and which app to run first.",
    category: "Gig Work",
    datePublished: "2026-09-10",
    readTime: "6 min read",
    href: "/doordash-vs-uber-eats-pay",
  },
];
