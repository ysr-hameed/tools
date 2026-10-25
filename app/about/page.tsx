import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Slyxup Tools and Yasir Hameed, the developer behind it.",
};

const values = [
  {
    title: "Fast by default",
    description:
      "Every tool is engineered to run instantly in your browser. No waiting, no spin-up, no lag.",
  },
  {
    title: "Private by design",
    description:
      "No accounts, no trackers, no data collection. Your content never leaves your device.",
  },
  {
    title: "Simple to use",
    description:
      "One focused job per tool. No clutter, no paywalls, no watermarks.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="About"
        title="Slyxup Tools"
         description="An independent collection of free online utilities built by Yasir Hameed to be fast, simple and respectful of your privacy."
      />

      <div className="space-y-4 text-muted-foreground">
        <p>
           Slyxup Tools is built by Yasir Hameed, a web developer and designer
           from Ambedkar Nagar, India. He creates useful utilities that just
           work — without the sign-ups, ads and tracking that plague most
           &quot;free&quot; tool sites.
        </p>
        <p>
          No accounts, no watermarks, no data collection — just tools that do
          the job and get out of the way.
        </p>
        <p>
          Yasir is currently building StartElio and pursuing his BA at TNPG
          College. He works across React, Next.js, TypeScript, Node.js,
          Python, AI/ML, UI/UX, and cloud infrastructure, with 20+ projects
          built and shipped across web and AI products.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3 text-sm">
        <a href="https://ysr-hameed.github.io/" target="_blank" rel="noreferrer" className="text-primary hover:underline">Portfolio</a>
        <a href="https://ysr-hameed.github.io/resume.pdf" target="_blank" rel="noreferrer" className="text-primary hover:underline">Resume</a>
        <a href="https://github.com/ysr-hameed" target="_blank" rel="noreferrer" className="text-primary hover:underline">GitHub</a>
        <a href="https://www.linkedin.com/in/yasir-hameed-59b70b36b" target="_blank" rel="noreferrer" className="text-primary hover:underline">LinkedIn</a>
        <a href="https://twitter.com/ysr_hameed" target="_blank" rel="noreferrer" className="text-primary hover:underline">Twitter</a>
        <a href="https://www.instagram.com/ysr_hameed" target="_blank" rel="noreferrer" className="text-primary hover:underline">Instagram</a>
        <a href="mailto:ysr.hameed.yh@gmail.com" className="text-primary hover:underline">Email Yasir</a>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {values.map((value) => (
          <Card key={value.title}>
            <CardContent className="pt-5">
              <h2 className="font-heading text-base font-medium">
                {value.title}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
