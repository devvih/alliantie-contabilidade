import type { ReactNode } from "react";
import leao from "@/assets/hero-leao.jpg.asset.json";

export function PageHero({ eyebrow, title, highlight, children, image = leao.url }: {
  eyebrow: string; title: string; highlight: string; children?: ReactNode; image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" aria-hidden className="h-full w-full object-cover object-[70%_center] opacity-70" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-fade-bottom)" }} />
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-40 sm:pb-24">
        <div className="max-w-xl">
          <p className="eyebrow animate-rise">{eyebrow}</p>
          <h1 className="heading-display animate-rise mt-5 text-5xl sm:text-6xl">
            {title} <span className="text-gold">{highlight}</span>
          </h1>
          {children && <p className="animate-rise mt-6 max-w-md text-base leading-relaxed text-foreground/85">{children}</p>}
        </div>
      </div>
    </section>
  );
}
