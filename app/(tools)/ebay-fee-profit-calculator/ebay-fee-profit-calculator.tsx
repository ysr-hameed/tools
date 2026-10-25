"use client";

import * as React from "react";
import { NumberField, ProfitCalculatorShell, ResultMetric, ResultPanel, money } from "@/components/profit-calculator-shell";

const defaults = { price: 39.99, shippingCharged: 5.99, shippingCost: 5.99, productCost: 12, packaging: 0.75, feeRate: 13.25, orderFee: 0.4, promotedRate: 0, taxRate: 25 };

export function EbayFeeProfitCalculator() {
  const [values, setValues] = React.useState(defaults);
  const set = (key: keyof typeof defaults) => (value: number) => setValues((current) => ({ ...current, [key]: value }));
  const sale = values.price + values.shippingCharged;
  const finalValueFee = sale * values.feeRate / 100;
  const promotedFee = values.price * values.promotedRate / 100;
  const costs = values.shippingCost + values.productCost + values.packaging + finalValueFee + promotedFee + values.orderFee;
  const profit = sale - costs;
  const margin = sale > 0 ? profit / sale * 100 : 0;
  const tax = Math.max(0, profit) * values.taxRate / 100;
  const breakEven = (values.shippingCost + values.productCost + values.packaging + values.orderFee) / (1 - (values.feeRate + values.promotedRate) / 100);

  return <ProfitCalculatorShell title="eBay Fee & Profit Calculator" description="Estimate your eBay payout after final value fees, order fees, shipping, promoted listings, product cost, and tax.">
    <div className="grid gap-4 sm:grid-cols-2">
      <NumberField id="ebay-price" label="Sale price ($)" value={values.price} onChange={set("price")} step={0.01} />
      <NumberField id="ebay-shipping-charged" label="Shipping charged ($)" value={values.shippingCharged} onChange={set("shippingCharged")} step={0.01} />
      <NumberField id="ebay-shipping-cost" label="Your shipping cost ($)" value={values.shippingCost} onChange={set("shippingCost")} step={0.01} />
      <NumberField id="ebay-product-cost" label="Product cost ($)" value={values.productCost} onChange={set("productCost")} step={0.01} />
      <NumberField id="ebay-packaging" label="Packaging cost ($)" value={values.packaging} onChange={set("packaging")} step={0.01} />
      <NumberField id="ebay-fee-rate" label="Final value fee" value={values.feeRate} onChange={set("feeRate")} step={0.1} suffix="%" />
      <NumberField id="ebay-order-fee" label="Per-order fee ($)" value={values.orderFee} onChange={set("orderFee")} step={0.01} />
      <NumberField id="ebay-promoted-rate" label="Promoted listing rate" value={values.promotedRate} onChange={set("promotedRate")} step={0.5} suffix="%" />
      <NumberField id="ebay-tax-rate" label="Tax reserve" value={values.taxRate} onChange={set("taxRate")} step={1} suffix="%" />
    </div>
    <p className="border-t border-border/70 pt-4 text-xs leading-5 text-muted-foreground">eBay fees vary by category, store status, seller account, and optional promotions. Edit the assumptions for your listing.</p>
    <ResultPanel eyebrow="Live seller math" title={`${money(profit)} profit per order`} reset={() => setValues(defaults)} note={`Your estimated after-tax profit is ${money(profit - tax)}. At this cost structure, you need about ${money(breakEven)} in sale revenue to break even.`} metrics={<><ResultMetric label="Net after fees" value={money(profit)} highlight /><ResultMetric label="Margin" value={`${margin.toFixed(1)}%`} detail={`${money(sale)} customer payment`} /><ResultMetric label="Marketplace costs" value={money(finalValueFee + promotedFee + values.orderFee)} detail={`Final value + promoted + order fee`} /><ResultMetric label="Break-even revenue" value={money(breakEven)} /></>} />
  </ProfitCalculatorShell>;
}
