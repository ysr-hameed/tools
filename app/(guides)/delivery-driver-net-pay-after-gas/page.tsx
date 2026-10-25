import type { Metadata } from "next";
import { SeoGuide } from "@/components/seo-guide";

const title = "How Much Do Delivery Drivers Make After Gas?";
const description = "Calculate delivery driver take-home pay after fuel, maintenance, mileage, vehicle costs, and tax reserve.";
const url = "https://tools.slyxup.com/delivery-driver-net-pay-after-gas/";
const faqs = [
  { question: "How much do delivery drivers make after gas?", answer: "It depends on gross payout, hours, miles, vehicle MPG, gas price, maintenance, and market. Net hourly pay is always lower than the app's gross number." },
  { question: "What is the biggest delivery driver cost?", answer: "Fuel is visible, but maintenance, depreciation, insurance, and unpaid driving can be just as important over time." },
  { question: "Should I track miles for delivery work?", answer: "Yes. Track business miles and keep records for tax and profitability decisions. Mileage is also the fastest way to compare two offers." },
];

export const metadata: Metadata = { title, description, alternates: { canonical: url } };

export default function DeliveryDriverNetPayPage() {
  return <SeoGuide title={title} description={description} url={url} datePublished="2026-09-11" readTime="6 min read" category="Gig Work Guide" faqs={faqs} calculatorHref="/delivery-app-pay-calculator/" calculatorLabel="Calculate delivery app net pay"><p>The payout shown in a delivery app is gross revenue. Your actual pay is what remains after the miles, fuel, maintenance, insurance, and tax reserve required to produce that revenue.</p><h2 className="font-heading text-3xl font-bold tracking-[-0.05em] text-foreground">Gross pay is not hourly pay</h2><p>A driver can earn $25 per hour on the app screen and keep much less after a long-distance order. Divide net weekly profit by the full time spent online, driving, waiting, and returning to a busy zone.</p><h2 className="font-heading text-3xl font-bold tracking-[-0.05em] text-foreground">The costs that disappear from a payout</h2><ul className="list-inside list-disc space-y-2"><li>Fuel based on miles and vehicle MPG</li><li>Oil, tires, repairs, and depreciation</li><li>Insurance and phone allocation</li><li>Unpaid repositioning and waiting time</li><li>Income and self-employment tax reserve</li></ul><h2 className="font-heading text-3xl font-bold tracking-[-0.05em] text-foreground">Compare platforms fairly</h2><p>Use the same hours, miles, vehicle, and cost assumptions for DoorDash, Uber Eats, Instacart, and Grubhub. Then compare net hourly pay, not the biggest single-order screenshot.</p></SeoGuide>;
}
