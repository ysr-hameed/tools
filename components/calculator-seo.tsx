import Link from "next/link";

type Faq = { question: string; answer: string };
type RelatedLink = { label: string; href: string };

export function CalculatorSeo({
  name,
  url,
  description,
  formula,
  sourceLabel,
  sourceUrl,
  faqs,
  relatedLinks,
}: {
  name: string;
  url: string;
  description: string;
  formula: string;
  sourceLabel: string;
  sourceUrl: string;
  faqs: Faq[];
  relatedLinks: RelatedLink[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name,
        url,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Any",
        description,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: ["Live profit calculation", "Break-even estimate", "Mobile-friendly inputs", "No sign-up required"],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.com/" },
          { "@type": "ListItem", position: 2, name, item: url },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto mt-14 max-w-4xl space-y-12 text-muted-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section>
        <p className="eyebrow">How the math works</p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.05em] text-foreground">Use the number after every cost</h2>
        <p className="mt-4 leading-7">This calculator shows the amount left after the costs that are easy to forget. Change the assumptions to match your marketplace, product, vehicle, or region instead of relying on a generic rule of thumb.</p>
        <pre className="mt-5 overflow-x-auto rounded-xl border bg-muted/50 p-4 font-mono text-sm text-foreground">{formula}</pre>
      </section>
      <section>
        <p className="eyebrow">Questions sellers ask</p>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => <div key={faq.question} className="rounded-xl border p-5"><h3 className="font-heading text-lg font-bold text-foreground">{faq.question}</h3><p className="mt-2 text-sm leading-6">{faq.answer}</p></div>)}
        </div>
      </section>
      <section className="rounded-xl border bg-muted/40 p-5">
        <p className="font-semibold text-foreground">Fee assumptions and related tools</p>
        <p className="mt-2 text-sm leading-6">Rates change by country, category, seller status, and platform policy. Review the <a href={sourceUrl} target="_blank" rel="noreferrer" className="text-primary underline-offset-4 hover:underline">{sourceLabel}</a> before publishing prices.</p>
        <div className="mt-4 flex flex-wrap gap-2">{relatedLinks.map((link) => <Link key={link.href} href={link.href} className="rounded-lg border px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">{link.label}</Link>)}</div>
      </section>
    </div>
  );
}
