"use client";

import * as React from "react";
import { NumberField, ProfitCalculatorShell, ResultMetric, ResultPanel, money } from "@/components/profit-calculator-shell";

const defaults = { revenue: 500, miles: 300, gasPrice: 3.6, mpg: 28, maintenance: 0.2, insurance: 25, hours: 20, taxRate: 25 };

export function GasMileageProfitCalculator() {
  const [values, setValues] = React.useState(defaults);
  const set = (key: keyof typeof defaults) => (value: number) => setValues((current) => ({ ...current, [key]: value }));
  const fuel = values.mpg > 0 ? values.miles / values.mpg * values.gasPrice : 0;
  const maintenance = values.miles * values.maintenance;
  const totalCosts = fuel + maintenance + values.insurance;
  const net = values.revenue - totalCosts;
  const netHourly = values.hours > 0 ? net / values.hours : 0;
  const mileageCost = values.miles > 0 ? totalCosts / values.miles : 0;
  const afterTax = net - Math.max(0, net) * values.taxRate / 100;

  return <ProfitCalculatorShell title="Gas, Mileage & Delivery Profit Calculator" description="Find the true profit from a delivery, route, or side hustle after fuel, maintenance, insurance, mileage, and tax reserve.">
    <div className="grid gap-4 sm:grid-cols-2">
      <NumberField id="mileage-revenue" label="Weekly revenue ($)" value={values.revenue} onChange={set("revenue")} step={1} />
      <NumberField id="mileage-hours" label="Hours worked" value={values.hours} onChange={set("hours")} step={0.5} />
      <NumberField id="mileage-miles" label="Miles driven" value={values.miles} onChange={set("miles")} />
      <NumberField id="mileage-gas" label="Gas price ($/gal)" value={values.gasPrice} onChange={set("gasPrice")} step={0.01} />
      <NumberField id="mileage-mpg" label="Vehicle MPG" value={values.mpg} onChange={set("mpg")} step={0.5} />
      <NumberField id="mileage-maintenance" label="Maintenance / mile ($)" value={values.maintenance} onChange={set("maintenance")} step={0.01} />
      <NumberField id="mileage-insurance" label="Weekly insurance allocation ($)" value={values.insurance} onChange={set("insurance")} step={1} />
      <NumberField id="mileage-tax" label="Tax reserve" value={values.taxRate} onChange={set("taxRate")} step={1} suffix="%" />
    </div>
    <p className="border-t border-border/70 pt-4 text-xs leading-5 text-muted-foreground">Maintenance is editable because tires, oil, repairs, and depreciation vary dramatically by vehicle.</p>
    <ResultPanel eyebrow="True route economics" title={`${money(netHourly)}/hr net`} reset={() => setValues(defaults)} note={`The route leaves ${money(afterTax)} after the tax reserve. Your estimated all-in vehicle cost is ${money(mileageCost)} per mile.`} metrics={<><ResultMetric label="Net profit" value={money(net)} highlight detail={`${money(values.revenue)} revenue`} /><ResultMetric label="Fuel cost" value={`−${money(fuel)}`} detail={`${values.miles.toLocaleString()} miles`} /><ResultMetric label="All-in vehicle cost" value={`−${money(totalCosts)}`} detail={`${money(mileageCost)} per mile`} /><ResultMetric label="Net hourly" value={`${money(netHourly)}/hr`} /></>} />
  </ProfitCalculatorShell>;
}
