import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

export const dynamic = "force-static";

const baseUrl = "https://tools.slyxup.com";

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

const routes: RouteConfig[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/tools", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/tiktok-shop-fee-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/youtube-shorts-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/twitch-earnings-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/influencer-rate-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/print-on-demand-profit-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/doordash-pay-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/creator-deal-profit-calculator", priority: 0.95, changeFrequency: "monthly" },
  { path: "/digital-product-break-even-calculator", priority: 0.95, changeFrequency: "monthly" },
  { path: "/etsy-fee-profit-calculator", priority: 0.95, changeFrequency: "monthly" },
  { path: "/ebay-fee-profit-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/delivery-app-pay-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/gas-mileage-profit-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/marketplace-seller-profit-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/how-much-does-etsy-take", priority: 0.85, changeFrequency: "monthly" },
  { path: "/etsy-profit-per-sale", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-much-does-ebay-take", priority: 0.85, changeFrequency: "monthly" },
  { path: "/delivery-driver-net-pay-after-gas", priority: 0.85, changeFrequency: "monthly" },
  { path: "/how-to-calculate-marketplace-profit-margin", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticUrls = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}${article.href}`,
    lastModified: new Date(article.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const uniqueUrls = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of [...staticUrls, ...articleUrls]) {
    uniqueUrls.set(entry.url, entry);
  }

  return [...uniqueUrls.values()];
}
