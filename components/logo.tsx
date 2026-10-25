"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-1.5 ${className ?? ""}`}>
      <Image src="/slyxup-fox.svg" alt="SlyxUp" width={36} height={36} className="size-8 shrink-0 object-contain sm:size-9" />
      {showText && (
         <span className="font-heading text-lg font-bold tracking-tight sm:text-xl">
            SlyxUp
         </span>
      )}
    </Link>
  );
}
