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
];
