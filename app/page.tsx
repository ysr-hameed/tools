import Link from "next/link";
import {
  ArrowUpRight,
  BadgeDollarSign,
  BarChart3,
  BookOpen,
  Calculator,
  Check,
  CircleDollarSign,
  Clock3,
  FileSpreadsheet,
  MoveRight,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { articles } from "@/lib/articles";
import { Button } from "@/components/ui/button";

const accentClasses = {
  coral: "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300",
  teal: "bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300",
  gold: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  navy: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
} as const;

type ToolAccent = keyof typeof accentClasses;

const tools: Array<{
  title: string;
  href: string;
  description: string;
  icon: typeof BadgeDollarSign;
  tag: string;
  accent: ToolAccent;
}> = [
  {
    title: "Creator deal profit",
    href: "/creator-deal-profit-calculator",
    description: "Turn a brand quote into a real hourly rate after fees, tax, revisions, and the time it will actually take.",
    icon: BadgeDollarSign,
    tag: "Most used",
    accent: "coral",
  },
  {
    title: "TikTok Shop fees",
    href: "/tiktok-shop-fee-calculator",
    description: "See what stays in your pocket from every sale before you set a price or run a promotion.",
    icon: WalletCards,
    tag: "Seller math",
    accent: "teal",
  },
  {
    title: "Digital product break-even",
    href: "/digital-product-break-even-calculator",
    description: "Find the sales number that pays back your design, software, and launch costs.",
    icon: CircleDollarSign,
    tag: "New",
    accent: "gold",
  },
  {
    title: "Influencer rate",
    href: "/influencer-rate-calculator",
    description: "Build a defensible starting rate from followers, engagement, niche, and usage rights.",
    icon: BarChart3,
    tag: "Creator rates",
    accent: "navy",
  },
  {
    title: "DoorDash pay",
    href: "/doordash-pay-calculator",
    description: "See net hourly pay after fuel and vehicle costs, not just the payout screen.",
    icon: Clock3,
    tag: "Gig work",
    accent: "teal",
  },
  {
    title: "Print on demand profit",
    href: "/print-on-demand-profit-calculator",
    description: "Price products with fees and base cost in view, then check the monthly upside.",
    icon: FileSpreadsheet,
    tag: "POD",
    accent: "coral",
  },
  {
    title: "Etsy fees & profit",
    href: "/etsy-fee-profit-calculator",
    description: "See the money left after Etsy fees, shipping, product cost, ads, and tax.",
    icon: WalletCards,
    tag: "Seller money",
    accent: "teal",
  },
  {
    title: "Delivery app net pay",
    href: "/delivery-app-pay-calculator",
    description: "Compare delivery app payouts after gas, vehicle costs, mileage, and tax.",
    icon: Clock3,
    tag: "Gig work",
    accent: "navy",
  },
];

const principles = [
  "Numbers first, hype second",
  "Assumptions shown in plain English",
  "No sign-up before the useful bit",
];

export default function Home() {
  const recentArticles = articles.slice(0, 3);

  return (
    <section className="flex flex-1 flex-col overflow-hidden">
      <div className="relative border-b border-zinc-800 bg-zinc-950 text-zinc-50 dark:border-zinc-800">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="absolute -right-32 -top-48 size-[34rem] rounded-full bg-red-600/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20 lg:pb-24">
          <div>
            <p className="eyebrow text-red-300">The practical side of online work</p>
            <h1 className="mt-7 max-w-4xl font-heading text-6xl font-bold leading-[0.91] tracking-[-0.075em] sm:text-8xl">
              Make the number <span className="text-red-300">make sense.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Free calculators for creators, sellers, freelancers, and gig workers who want the honest version before they say yes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" nativeButton={false} render={<Link href="/tools" />}>
                Find your tool <MoveRight className="ml-2 size-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 bg-transparent text-zinc-50 hover:bg-white/10 hover:text-white" nativeButton={false} render={<Link href="/blog" />}>
                Read the field notes
              </Button>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/15 pt-5">
              <div><p className="font-mono text-2xl font-bold tracking-[-0.05em] text-zinc-50">8</p><p className="mt-1 text-xs text-zinc-400">free tools</p></div>
              <div><p className="font-mono text-2xl font-bold tracking-[-0.05em] text-zinc-50">0</p><p className="mt-1 text-xs text-zinc-400">accounts needed</p></div>
              <div><p className="font-mono text-2xl font-bold tracking-[-0.05em] text-zinc-50">100%</p><p className="mt-1 text-xs text-zinc-400">browser-private</p></div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mb-2">
            <div className="absolute -inset-3 rounded-[1.5rem] border border-red-400/20" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl bg-white p-5 text-zinc-950 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] dark:bg-zinc-100">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-red-600" /><span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">Quick read / 01</span></div>
                <span className="rounded-full bg-teal-50 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-teal-700">Live math</span>
              </div>
              <div className="py-9">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">A $1,000 brand deal can mean</p>
                <p className="mt-3 font-mono text-6xl font-bold tracking-[-0.09em] text-zinc-950">$31<span className="ml-1 text-2xl font-medium tracking-[-0.04em] text-zinc-500">/hr</span></p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-200"><div className="h-full w-[38%] rounded-full bg-red-600" /></div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-xs"><div><p className="text-zinc-500">Quote</p><p className="mt-1 font-bold">$1,000</p></div><div><p className="text-zinc-500">Total time</p><p className="mt-1 font-bold">32 hrs</p></div><div><p className="text-zinc-500">Tax set aside</p><p className="mt-1 font-bold">$231</p></div></div>
              </div>
              <Link href="/creator-deal-profit-calculator" className="flex items-center justify-between border-t border-zinc-200 pt-4 text-sm font-bold text-red-700 transition-colors hover:text-zinc-950">
                Check your next deal <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.75fr_1.7fr] lg:gap-20 lg:py-24">
        <div>
          <p className="eyebrow">Start with the decision</p>
          <h2 className="mt-5 max-w-sm font-heading text-4xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-5xl">Tools for the question in front of you.</h2>
          <p className="mt-5 max-w-sm text-muted-foreground">Not a directory of random widgets. Each tool answers one expensive question clearly.</p>
          <div className="mt-8 space-y-4">
            {principles.map((principle) => (
              <div key={principle} className="flex items-center gap-3 text-sm font-semibold"><span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-red-300"><Check className="size-3" /></span>{principle}</div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {tools.map((tool, index) => (
            <Link key={tool.href} href={tool.href} className={`group relative flex min-h-56 flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_50px_-30px_rgba(16,45,60,0.8)] ${index === 0 ? "sm:col-span-2 sm:min-h-48" : ""}`}>
              <div className="flex items-start justify-between gap-4"><div className={`flex size-11 items-center justify-center rounded-xl ${accentClasses[tool.accent]}`}><tool.icon className="size-5" /></div><span className="label text-muted-foreground">{tool.tag}</span></div>
              <h3 className="mt-8 max-w-sm font-heading text-2xl font-bold leading-[1.02] tracking-[-0.05em] group-hover:text-primary">{tool.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{tool.description}</p>
              <span className="mt-auto flex items-center gap-1 pt-6 text-sm font-bold text-primary">Open calculator <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-y border-zinc-200 bg-zinc-100/80 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="section-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><p className="eyebrow text-teal-700 dark:text-teal-300">Read before you decide</p><h2 className="mt-5 max-w-md font-heading text-4xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-5xl">The useful bit between “should I?” and “I did it.”</h2><p className="mt-5 max-w-md text-muted-foreground">Short, human guides that show the math, the trade-offs, and the part most rate cards leave out.</p><Button variant="outline" className="mt-8" nativeButton={false} render={<Link href="/blog" />}>Browse all guides <ArrowUpRight className="ml-2 size-4" /></Button></div>
          <div className="grid gap-0">
            {recentArticles.map((article) => (
              <Link key={article.slug} href={article.href} className="group flex items-start justify-between gap-5 border-b border-zinc-300 py-5 first:border-t dark:border-zinc-800"><div><p className="label text-teal-700 dark:text-teal-300">{article.category} · {article.readTime}</p><h3 className="mt-2 max-w-xl font-heading text-xl font-bold leading-tight group-hover:text-primary">{article.title}</h3><p className="mt-2 max-w-xl text-sm text-muted-foreground">{article.description}</p></div><ArrowUpRight className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
            ))}
          </div>
        </div>
      </div>

      <div className="section-shell grid gap-6 py-14 sm:grid-cols-3 sm:py-20">
        <div className="flex items-start gap-4 border-t border-foreground/15 pt-4"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"><ShieldCheck className="size-5" /></div><div><p className="font-bold">Private by default</p><p className="mt-1 text-sm text-muted-foreground">Your numbers stay in your browser.</p></div></div>
        <div className="flex items-start gap-4 border-t border-foreground/15 pt-4"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300"><Calculator className="size-5" /></div><div><p className="font-bold">Built for action</p><p className="mt-1 text-sm text-muted-foreground">Inputs lead to a next step, not a dead end.</p></div></div>
        <div className="flex items-start gap-4 border-t border-foreground/15 pt-4"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300"><BookOpen className="size-5" /></div><div><p className="font-bold">Context included</p><p className="mt-1 text-sm text-muted-foreground">Every result explains its assumptions.</p></div></div>
      </div>
    </section>
  );
}
