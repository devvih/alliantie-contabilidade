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
];

export function Servicos({ id = "servicos" }: { id?: string }) {
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
