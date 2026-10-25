import Link from "next/link";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "All tools", href: "/tools" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "TikTok Shop fees", href: "/how-much-are-tiktok-shop-fees" },
      { label: "Shorts RPM", href: "/youtube-shorts-rpm-per-1000-views" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "SlyxUp",
    links: [
      { label: "SlyxUp home", href: "https://slyxup.com" },
      { label: "Promptly", href: "https://prompt.slyxup.com" },
      { label: "Stack", href: "https://stack.slyxup.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-50">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
        <div>
          <Logo />
           <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
             Practical calculators and decision tools for the messy middle of
             internet work. Clear assumptions, useful numbers, no account wall.
           </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              Built by <strong className="font-medium text-zinc-200">Yasir Hameed</strong>, a web developer and designer from Ambedkar Nagar, India. All profiles live on the about page.
            </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
             <p className="label text-red-300">{col.title}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                     className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
       <div className="border-t border-white/15">
         <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:px-6">
           <p>© {new Date().getFullYear()} Slyxup desk. All rights reserved.</p>
           <p>Built for people doing the work.</p>
        </div>
      </div>
    </footer>
  );
}
