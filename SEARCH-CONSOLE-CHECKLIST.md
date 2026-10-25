# Search Console Launch Checklist

Property:

`https://tools.slyxup.com`

## Submit

- Add the domain or URL-prefix property in Google Search Console.
- Submit `https://tools.slyxup.com/sitemap.xml`.
- Confirm `https://tools.slyxup.com/robots.txt` references the same sitemap.
- Add `https://tools.slyxup.com` to Bing Webmaster Tools and submit the same sitemap.

## Request Indexing

Use URL Inspection and request indexing for these new calculator pages:

- `/etsy-fee-profit-calculator/`
- `/ebay-fee-profit-calculator/`
- `/delivery-app-pay-calculator/`
- `/gas-mileage-profit-calculator/`
- `/marketplace-seller-profit-calculator/`

Use URL Inspection and request indexing for these guide pages:

- `/how-much-does-etsy-take/`
- `/etsy-profit-per-sale/`
- `/how-much-does-ebay-take/`
- `/delivery-driver-net-pay-after-gas/`
- `/how-to-calculate-marketplace-profit-margin/`

## First 30 Days

- Check Pages, Impressions, Clicks, CTR, and Average Position weekly.
- Filter Search results by each new page.
- Export queries with impressions and positions 8–30.
- Improve titles and first paragraphs for queries with impressions but low CTR.
- Add internal links when a query reveals a missing supporting page.

## Analytics Events

The app emits these browser events and forwards them to `dataLayer`, `gtag`, and Plausible when those providers are present:

- `page_view`
- `calculator_started`
- `calculator_input_changed`
- `calculator_result_viewed`
- `calculator_reset`

Listen for the custom `slyxup:analytics` browser event if a provider is configured later.
