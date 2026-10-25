import type { Metadata } from "next";
import { SeoGuide } from "@/components/seo-guide";

const title = "How Much Does eBay Take From a Sale? (2026 Fee Guide)";
const description = "Understand eBay final value fees, order fees, promoted listings, shipping, and the amount left as seller profit.";
const url = "https://tools.slyxup.com/how-much-does-ebay-take/";
const faqs = [
  { question: "How much does eBay take from sellers?", answer: "The total depends on the product category, seller account, store plan, order fee, and optional promoted listing rate. There is no single percentage for every eBay order." },
  { question: "Are eBay fees charged on shipping?", answer: "Fee treatment depends on the current eBay policy and the amount charged to the buyer. Include the full buyer payment in your model and verify the current category rules." },
  { question: "How do I calculate eBay profit?", answer: "Subtract final value fees, order fees, promoted listing costs, shipping, product cost, packaging, refunds, and tax reserve from the total customer payment." },
];

export const metadata: Metadata = { title, description, alternates: { canonical: url } };

export default function HowMuchDoesEbayTakePage() {
  return <SeoGuide title={title} description={description} url={url} datePublished="2026-09-11" readTime="6 min read" category="eBay Seller Guide" faqs={faqs} calculatorHref="/ebay-fee-profit-calculator/" calculatorLabel="Calculate eBay profit"><p>eBay fees are easier to underestimate than they look. The platform fee can change by category and seller setup, while promoted listings and shipping can turn a good-looking sale into a weak one.</p><h2 className="font-heading text-3xl font-bold tracking-[-0.05em] text-foreground">What belongs in an eBay fee estimate?</h2><div className="grid gap-3 sm:grid-cols-2"><div className="rounded-xl border p-4"><h3 className="font-heading text-lg font-bold text-foreground">Marketplace deductions</h3><p className="mt-2 text-sm leading-6">Final value fee, per-order fee, promoted listing rate, and any account-specific charges.</p></div><div className="rounded-xl border p-4"><h3 className="font-heading text-lg font-bold text-foreground">Order costs</h3><p className="mt-2 text-sm leading-6">Inventory, packaging, postage, refunds, returns, and your tax reserve.</p></div></div><h2 className="font-heading text-3xl font-bold tracking-[-0.05em] text-foreground">Example listing math</h2><p>Suppose an item sells for $40, shipping adds $6, inventory costs $14, and postage costs $6. The $46 customer payment is not your payout. Percentage fees apply, then fixed charges and optional promotion reduce it further.</p><p>Run the number before listing. If the margin is too thin, increase the price, reduce shipping cost, source the item more cheaply, or skip the promoted listing.</p><h2 className="font-heading text-3xl font-bold tracking-[-0.05em] text-foreground">Use current category assumptions</h2><p>eBay changes fees and category rules. Keep a note of the rate used for each product and revisit it when your store plan or category changes.</p></SeoGuide>;
}
