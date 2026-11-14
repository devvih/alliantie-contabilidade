import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  children,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  children?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
        {title} <span className="text-gold">{highlight}</span>
      </h2>
      {children && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{children}</p>
      )}
    </div>
  );
}
