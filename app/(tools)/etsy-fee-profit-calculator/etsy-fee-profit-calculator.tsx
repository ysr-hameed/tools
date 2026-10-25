"use client";

import * as React from "react";
import { NumberField, ProfitCalculatorShell, ResultMetric, ResultPanel, money } from "@/components/profit-calculator-shell";

const defaults = { price: 24.99, shippingCharged: 4.99, shippingCost: 4.99, productCost: 7, packaging: 0.75, discount: 0, transactionRate: 6.5, processingRate: 3, processingFixed: 0.25, adsRate: 0, taxRate: 25 };

export function EtsyFeeProfitCalculator() {
  const [values, setValues] = React.useState(defaults);
  const set = (key: keyof typeof defaults) => (value: number) => setValues((current) => ({ ...current, [key]: value }));
  const sale = Math.max(0, values.price + values.shippingCharged - values.discount);
  const transactionFee = sale * values.transactionRate / 100;
  const processingFee = sale * values.processingRate / 100 + values.processingFixed;
  const adsFee = sale * values.adsRate / 100;
  const costs = transactionFee + processingFee + adsFee + values.shippingCost + values.productCost + values.packaging;
  const profit = sale - costs;
  const margin = sale > 0 ? profit / sale * 100 : 0;
  const tax = Math.max(0, profit) * values.taxRate / 100;
  const afterTax = profit - tax;
  const breakEven = values.transactionRate < 100 ? (values.productCost + values.packaging + values.shippingCost + values.processingFixed) / (1 - (values.transactionRate + values.processingRate + values.adsRate) / 100) : 0;

  return <ProfitCalculatorShell title="Etsy Fee & Profit Calculator" description="See what you actually keep from an Etsy sale after transaction fees, payment processing, shipping, product cost, ads, packaging, and tax.">
    <div className="grid gap-4 sm:grid-cols-2">
      <NumberField id="etsy-price" label="Item price ($)" value={values.price} onChange={set("price")} step={0.01} />
      <NumberField id="etsy-shipping-charged" label="Shipping charged ($)" value={values.shippingCharged} onChange={set("shippingCharged")} step={0.01} />
      <NumberField id="etsy-shipping-cost" label="Your shipping cost ($)" value={values.shippingCost} onChange={set("shippingCost")} step={0.01} />
      <NumberField id="etsy-product-cost" label="Product / POD cost ($)" value={values.productCost} onChange={set("productCost")} step={0.01} />
      <NumberField id="etsy-packaging" label="Packaging cost ($)" value={values.packaging} onChange={set("packaging")} step={0.01} />
      <NumberField id="etsy-discount" label="Discounts ($)" value={values.discount} onChange={set("discount")} step={0.01} />
      <NumberField id="etsy-transaction-rate" label="Transaction fee" value={values.transactionRate} onChange={set("transactionRate")} step={0.1} suffix="%" />
      <NumberField id="etsy-processing-rate" label="Payment processing" value={values.processingRate} onChange={set("processingRate")} step={0.1} suffix="%" />
      <NumberField id="etsy-processing-fixed" label="Processing fixed fee ($)" value={values.processingFixed} onChange={set("processingFixed")} step={0.01} />
      <NumberField id="etsy-ads-rate" label="Ads / Offsite Ads" value={values.adsRate} onChange={set("adsRate")} step={0.5} suffix="%" />
      <NumberField id="etsy-tax-rate" label="Tax reserve" value={values.taxRate} onChange={set("taxRate")} step={1} suffix="%" />
    </div>
    <p className="border-t border-border/70 pt-4 text-xs leading-5 text-muted-foreground">US-first assumptions are editable. Etsy fees can vary by country, seller status, category, and advertising program.</p>
    <ResultPanel eyebrow="Live seller math" title={`${money(profit)} profit per sale`} reset={() => setValues(defaults)} note={`At this price, you keep ${margin.toFixed(1)}% before tax. Your estimated after-tax profit is ${money(afterTax)}. The break-even price is ${money(breakEven)} before tax.`} metrics={<><ResultMetric label="Net after fees" value={money(profit)} highlight /><ResultMetric label="Margin" value={`${margin.toFixed(1)}%`} detail={`${money(sale)} customer payment`} /><ResultMetric label="Total Etsy + product costs" value={money(costs)} detail={`Fees: ${money(transactionFee + processingFee + adsFee)}`} /><ResultMetric label="Break-even price" value={money(breakEven)} /></>} />
  </ProfitCalculatorShell>;
}
