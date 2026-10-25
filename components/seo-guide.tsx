import Link from "next/link";
import type { ReactNode } from "react";

type Faq = { question: string; answer: string };

export function SeoGuide({ title, description, url, datePublished, readTime, category, faqs, children, calculatorHref, calculatorLabel }: { title: string; description: string; url: string; datePublished: string; readTime: string; category: string; faqs: Faq[]; children: ReactNode; calculatorHref: string; calculatorLabel: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: title, description, url, datePublished, dateModified: datePublished, author: { "@type": "Organization", name: "Slyxup Tools" }, publisher: { "@type": "Organization", name: "Slyxup Tools" }, mainEntityOfPage: { "@type": "WebPage", "@id": url } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.com/" }, { "@type": "ListItem", position: 2, name: title, item: url }] },
      { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  };

  return <section className="section-shell flex flex-1 flex-col py-14 sm:py-20"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><article className="mx-auto w-full max-w-3xl text-muted-foreground"><header className="border-b border-border/70 pb-8"><p className="eyebrow">{category}</p><h1 className="mt-5 font-heading text-5xl font-bold leading-[0.95] tracking-[-0.07em] text-foreground sm:text-6xl">{title}</h1><p className="mt-5 text-lg leading-8">{description}</p><p className="mt-5 text-sm">Updated September 2026 · {readTime}</p></header><div className="prose-like space-y-6 pt-8 text-[1.05rem] leading-8">{children}</div><div className="mt-10 rounded-2xl border border-primary/20 bg-muted/40 p-6"><p className="font-heading text-2xl font-bold text-foreground">Run your own numbers</p><p className="mt-2 leading-7">A guide gives you context. The calculator gives you the number for your exact product, platform, costs, and margin.</p><Link href={calculatorHref} className="mt-5 inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-85">{calculatorLabel}</Link></div><section className="mt-12 border-t border-border/70 pt-8"><h2 className="font-heading text-3xl font-bold tracking-[-0.05em] text-foreground">Frequently asked questions</h2><div className="mt-5 space-y-5">{faqs.map((faq) => <div key={faq.question}><h3 className="font-heading text-xl font-bold text-foreground">{faq.question}</h3><p className="mt-2 leading-7">{faq.answer}</p></div>)}</div></section></article></section>;
}
