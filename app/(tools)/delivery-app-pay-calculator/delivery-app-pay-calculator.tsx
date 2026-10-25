"use client";

import * as React from "react";
import { NumberField, ProfitCalculatorShell, ResultMetric, ResultPanel, money } from "@/components/profit-calculator-shell";

const defaults = { deliveries: 80, hours: 24, miles: 360, gasPrice: 3.6, mpg: 28, basePay: 3.5, tips: 5, bonus: 1.5, costs: 35, taxRate: 25 };

export function DeliveryAppPayCalculator() {
  const [values, setValues] = React.useState(defaults);
  const set = (key: keyof typeof defaults) => (value: number) => setValues((current) => ({ ...current, [key]: value }));
  const gross = values.deliveries * (values.basePay + values.tips + values.bonus);
  const fuel = values.mpg > 0 ? values.miles / values.mpg * values.gasPrice : 0;
  const totalCosts = fuel + values.costs;
  const net = gross - totalCosts;
  const netHourly = values.hours > 0 ? net / values.hours : 0;
  const afterTax = net - Math.max(0, net) * values.taxRate / 100;
  const monthly = net * 4.33;

  return <ProfitCalculatorShell title="Delivery App Net Pay Calculator" description="Compare your true weekly and monthly pay across DoorDash, Uber Eats, Instacart, Grubhub, or any delivery app after fuel, vehicle costs, and tax reserve.">
    <div className="grid gap-4 sm:grid-cols-2">
      <NumberField id="delivery-deliveries" label="Deliveries per week" value={values.deliveries} onChange={set("deliveries")} />
      <NumberField id="delivery-hours" label="Hours per week" value={values.hours} onChange={set("hours")} step={0.5} />
      <NumberField id="delivery-miles" label="Miles per week" value={values.miles} onChange={set("miles")} />
      <NumberField id="delivery-base" label="Average base pay ($)" value={values.basePay} onChange={set("basePay")} step={0.1} />
      <NumberField id="delivery-tips" label="Average tips ($)" value={values.tips} onChange={set("tips")} step={0.1} />
      <NumberField id="delivery-bonus" label="Bonus / peak pay ($)" value={values.bonus} onChange={set("bonus")} step={0.1} />
      <NumberField id="delivery-gas" label="Gas price ($/gal)" value={values.gasPrice} onChange={set("gasPrice")} step={0.01} />
      <NumberField id="delivery-mpg" label="Vehicle MPG" value={values.mpg} onChange={set("mpg")} step={0.5} />
      <NumberField id="delivery-costs" label="Other weekly costs ($)" value={values.costs} onChange={set("costs")} step={1} />
      <NumberField id="delivery-tax" label="Tax reserve" value={values.taxRate} onChange={set("taxRate")} step={1} suffix="%" />
    </div>
    <p className="border-t border-border/70 pt-4 text-xs leading-5 text-muted-foreground">Use your own average payout and mileage. The result is an estimate, not a promise of platform earnings.</p>
    <ResultPanel eyebrow="Weekly comparison" title={`${money(netHourly)}/hr net`} reset={() => setValues(defaults)} note={`At this pace, your estimated net is ${money(net)} per week, ${money(monthly)} per month, and ${money(afterTax)} after the tax reserve.`} metrics={<><ResultMetric label="Net hourly" value={`${money(netHourly)}/hr`} highlight /><ResultMetric label="Net weekly" value={money(net)} detail={`${money(gross)} gross before costs`} /><ResultMetric label="Vehicle + other costs" value={`−${money(totalCosts)}`} detail={`${money(fuel)} estimated fuel`} /><ResultMetric label="Net per delivery" value={money(values.deliveries > 0 ? net / values.deliveries : 0)} /></>} />
  </ProfitCalculatorShell>;
}
