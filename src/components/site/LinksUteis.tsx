import { ArrowUpRight } from "lucide-react";
import { linksUteis } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function LinksUteis() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Acesso rápido" title="Links" highlight="Úteis">
            Os principais portais do dia a dia da sua empresa, reunidos em um só lugar.
          </SectionHeading>
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {linksUteis.map((l, i) => (
            <Reveal key={l.titulo} delay={(i % 4) * 80}>
              <a href={l.href} target="_blank" rel="noreferrer" className="service-card group h-full items-start text-left">
                <ArrowUpRight className="size-5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide text-foreground">{l.titulo}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{l.texto}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
