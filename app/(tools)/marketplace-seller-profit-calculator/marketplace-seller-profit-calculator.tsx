"use client";

import * as React from "react";
import { NumberField, ProfitCalculatorShell, ResultMetric, ResultPanel, money } from "@/components/profit-calculator-shell";

const defaults = { price: 49.99, shippingCharged: 0, productCost: 16, shippingCost: 6, packaging: 1, platformRate: 12, paymentRate: 3, paymentFixed: 0.3, adRate: 0, discount: 0, monthlySales: 50 };

export function MarketplaceSellerProfitCalculator() {
  const [values, setValues] = React.useState(defaults);
  const set = (key: keyof typeof defaults) => (value: number) => setValues((current) => ({ ...current, [key]: value }));
  const sale = Math.max(0, values.price + values.shippingCharged - values.discount);
  const platformFees = sale * values.platformRate / 100;
  const paymentFees = sale * values.paymentRate / 100 + values.paymentFixed;
  const adFees = sale * values.adRate / 100;
  const costs = values.productCost + values.shippingCost + values.packaging + platformFees + paymentFees + adFees;
  const profit = sale - costs;
  const margin = sale > 0 ? profit / sale * 100 : 0;
  const monthly = profit * values.monthlySales;
  const breakEven = (values.productCost + values.shippingCost + values.packaging + values.paymentFixed) / (1 - (values.platformRate + values.paymentRate + values.adRate) / 100);

  return <ProfitCalculatorShell title="Marketplace Seller Profit Calculator" description="Model profit for Etsy, eBay, TikTok Shop, Shopify, or another marketplace with editable platform fees, ads, shipping, product cost, and sales volume.">
    <div className="grid gap-4 sm:grid-cols-2">
      <NumberField id="market-price" label="Selling price ($)" value={values.price} onChange={set("price")} step={0.01} />
      <NumberField id="market-shipping-charged" label="Shipping charged ($)" value={values.shippingCharged} onChange={set("shippingCharged")} step={0.01} />
      <NumberField id="market-product-cost" label="Product cost ($)" value={values.productCost} onChange={set("productCost")} step={0.01} />
      <NumberField id="market-shipping-cost" label="Shipping cost ($)" value={values.shippingCost} onChange={set("shippingCost")} step={0.01} />
      <NumberField id="market-packaging" label="Packaging cost ($)" value={values.packaging} onChange={set("packaging")} step={0.01} />
      <NumberField id="market-discount" label="Discount ($)" value={values.discount} onChange={set("discount")} step={0.01} />
      <NumberField id="market-platform-rate" label="Platform fee" value={values.platformRate} onChange={set("platformRate")} step={0.1} suffix="%" />
      <NumberField id="market-payment-rate" label="Payment processing" value={values.paymentRate} onChange={set("paymentRate")} step={0.1} suffix="%" />
      <NumberField id="market-payment-fixed" label="Processing fixed fee ($)" value={values.paymentFixed} onChange={set("paymentFixed")} step={0.01} />
      <NumberField id="market-ad-rate" label="Ads / promoted listing" value={values.adRate} onChange={set("adRate")} step={0.5} suffix="%" />
      <NumberField id="market-monthly-sales" label="Monthly sales" value={values.monthlySales} onChange={set("monthlySales")} />
    </div>
    <p className="border-t border-border/70 pt-4 text-xs leading-5 text-muted-foreground">Use this as a flexible model when you sell across multiple marketplaces. Replace the fee assumptions with the current rates for each platform.</p>
    <ResultPanel eyebrow="Margin planner" title={`${money(profit)} profit per sale`} reset={() => setValues(defaults)} note={`${values.monthlySales} sales at this margin would produce about ${money(monthly)} per month. Your break-even selling price is ${money(breakEven)}.`} metrics={<><ResultMetric label="Profit per sale" value={money(profit)} highlight /><ResultMetric label="Margin" value={`${margin.toFixed(1)}%`} detail={`${values.monthlySales} sales / month`} /><ResultMetric label="Platform + payment fees" value={money(platformFees + paymentFees + adFees)} /><ResultMetric label="Monthly profit" value={money(monthly)} /></>} />
  </ProfitCalculatorShell>;
}
