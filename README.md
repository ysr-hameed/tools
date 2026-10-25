# Tools.slyxup.in

Creator payout + fee calculators — Next.js static site.

## What it is

A collection of browser-based calculators and guides that help creators and small businesses understand platform payouts and fees. No signup, no backend, no tracking — everything runs in the browser.

## Calculators

| Calculator | What it does |
|---|---|
| DoorDash Pay | Estimate per-delivery and weekly DoorDash earnings |
| Influencer Rate | Suggest sponsorship rates by followers + engagement |
| Print-on-Demand Profit | POD profit per shirt vs. own-store margin |
| TikTok Shop Fees | TikTok Shop fee breakdown and net payout |
| Twitch Earnings | Subscriber + ad + bits income estimate |
| YouTube Shorts | RPM and revenue per 1,000 Shorts views |

## Guides

Step-by-step write-ups for each calculator, plus comparisons (DoorDash vs Uber Eats, TikTok Shop worth it, POD vs own store, Twitch/YouTube earnings).

## Structure

```
tools/
├── app/             # Next.js App Router pages
│   ├── (tools)/     # calculator pages
│   └── (guides)/    # how-to / comparison pages
├── components/      # shared UI (header, footer, theme toggle)
├── lib/             # calculator logic + data
├── public/          # static assets
├── next.config.ts   # static output (next build → out/)
├── package.json
└── tsconfig.json
```

## Run locally

```bash
npm install   # or pnpm install
npm run dev   # http://localhost:3000
npm run build # static export to out/
npm run start # serve the export
npm run lint  # eslint
npm run typecheck # tsc --noEmit
```

## Deploy

This is a static Next.js site. Deploy the `out/` folder to any static host (Cloudflare Pages, Vercel, Netlify, etc.):

```bash
npm run build
# then deploy the `out/` directory
```

Or connect the repo to Cloudflare Pages / Vercel for automatic deploys on push.

## License

Private / internal SlyxUp project.
