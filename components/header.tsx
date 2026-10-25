"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="order-3 hidden items-center gap-1 md:order-2 md:flex" aria-label="Main">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground",
                  active &&
                    "bg-secondary text-secondary-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="order-2 flex items-center gap-2 md:order-3">
          <Button
            size="sm"
            nativeButton={false}
            className="hidden lg:inline-flex"
            render={<Link href="/tools" />}
          >
            Browse tools
          </Button>
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
