import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
         <p className="eyebrow">{eyebrow}</p>
      )}
       <h1 className="mt-5 max-w-2xl font-heading text-5xl font-bold leading-[0.98] tracking-[-0.06em] text-balance sm:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-muted-foreground text-pretty">{description}</p>
      )}
    </div>
  );
}
