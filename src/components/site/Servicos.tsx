import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { servicos, whatsappLink, type Servico } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

// Alterna larguras como no layout original: estreito/largo, largo/estreito, estreito/largo.
const spans = [
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5",
];

export function Servicos({ id = "servicos", variant = "cards" }: { id?: string; variant?: "cards" | "detailed" }) {
  const [ativo, setAtivo] = useState<Servico | null>(null);

  return (
    <section id={id} className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Trabalhando com você" title="Nossos" highlight="Serviços">
            Soluções contábeis completas para cuidar da sua empresa com segurança, proximidade e
            excelência.
          </SectionHeading>
        </Reveal>

        {variant === "detailed" ? (
          <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
            {servicos.map((s, i) => {
              const Icone = s.icone;
              const invertido = i % 2 === 1;

              return (
                <Reveal key={s.titulo}>
                  <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
                    <div
                      className={cn(
                        "relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md border border-border/70 bg-surface",
                        invertido && "md:order-2",
                      )}
                    >
                      <div className="absolute inset-5 rounded-sm border border-primary/15" aria-hidden />
                      <div className="absolute size-56 rounded-full border border-primary/15 sm:size-64" aria-hidden />
                      <div className="absolute size-40 rounded-full border border-primary/25 sm:size-48" aria-hidden />
                      <span className="relative flex size-24 items-center justify-center rounded-full border border-primary/40 bg-card shadow-[var(--shadow-gold)]">
                        <Icone className="size-10 text-primary" strokeWidth={1.25} aria-hidden />
                      </span>
                    </div>

                    <div className={cn(invertido && "md:order-1")}>
                      <p className="eyebrow">Serviço {String(i + 1).padStart(2, "0")}</p>
                      <h3 className="heading-display mt-5 text-3xl sm:text-4xl">{s.titulo}</h3>
                      <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {s.resumo}
                      </p>
                      <ul className="mt-7 space-y-3">
                        {s.detalhes.slice(0, 3).map((detalhe) => (
                          <li key={detalhe} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                            <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.8} aria-hidden />
                            {detalhe}
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="gold" size="pill" className="mt-8">
                        <a
                          href={whatsappLink(`Olá! Quero falar sobre ${s.titulo}.`)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Saiba mais <ArrowRight />
                        </a>
                      </Button>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <div className="mt-16 grid gap-6 md:grid-cols-12">
            {servicos.map((s, i) => {
              const Icone = s.icone;
              return (
                <Reveal key={s.titulo} className={cn(spans[i])} delay={(i % 2) * 120}>
                  <article className="service-card h-full">
                    <Icone className="size-6 text-primary" strokeWidth={1.6} aria-hidden />
                    <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-foreground">
                      {s.titulo}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {s.resumo}
                    </p>
                    <button onClick={() => setAtivo(s)} className="link-gold mt-6">
                      Saiba Mais <ArrowRight className="size-3" />
                    </button>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>

      <Dialog open={!!ativo} onOpenChange={(o) => !o && setAtivo(null)}>
        <DialogContent className="border-primary/30 bg-card sm:max-w-lg">
          {ativo && (
            <>
              <DialogHeader>
                <ativo.icone className="size-7 text-primary" strokeWidth={1.6} aria-hidden />
                <DialogTitle className="pt-2 font-display text-2xl font-bold uppercase">
                  {ativo.titulo}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">{ativo.resumo}</DialogDescription>
              </DialogHeader>
              <ul className="mt-2 space-y-3">
                {ativo.detalhes.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-foreground/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
              <Button asChild variant="goldSolid" size="pill" className="mt-4 w-full">
                <a
                  href={whatsappLink(`Olá! Quero falar sobre ${ativo.titulo}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Quero falar sobre {ativo.titulo.toLowerCase()} <ArrowRight />
                </a>
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
