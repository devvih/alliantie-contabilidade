import { missao, visao } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function MissaoVisao() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Nosso propósito" title="Missão e" highlight="Visão" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-md border border-border/70 bg-card p-8 sm:p-10">
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Missão</span>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">{missao}</p>
          </Reveal>
          <Reveal delay={120} className="rounded-md border border-border/70 bg-card p-8 sm:p-10">
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Visão</span>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">{visao}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
