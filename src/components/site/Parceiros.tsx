import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { parceiros, whatsappLink } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { ParceiroLogo } from "./ParceirosCarrossel";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Parceiros() {
  return (
    <section id="parceiros" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Juntos vamos mais longe" title="Nossos" highlight="Parceiros">
            Trabalhamos lado a lado com advogados, consultores, bancos e empresas que compartilham
            dos nossos valores.
          </SectionHeading>
        </Reveal>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {parceiros.map((p, i) => {
            const invertido = i % 2 === 1;

            return (
              <Reveal key={p.nome}>
                <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
                  <ParceiroLogo
                    p={p}
                    className={cn("aspect-[4/3] bg-surface p-10", invertido && "md:order-2")}
                  />
                  <div className={cn(invertido && "md:order-1")}>
                    <p className="eyebrow">{p.area}</p>
                    <h3 className="heading-display mt-5 text-3xl sm:text-4xl">{p.nome}</h3>
                    <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                      Uma parceria construída com transparência, respeito e valores em comum para
                      oferecer ainda mais suporte ao seu negócio.
                    </p>
                    <Button asChild variant="gold" size="pill" className="mt-8">
                      <a
                        href={whatsappLink(`Olá! Quero saber mais sobre a parceria com ${p.nome}.`)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Fale conosco <ArrowRight />
                      </a>
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-20 flex justify-center border-t border-border/70 pt-12">
          <Button asChild variant="goldSolid" size="pill">
            <a href={whatsappLink("Olá! Quero ser parceiro da Alliantie.")} target="_blank" rel="noreferrer">
              Quero ser parceiro <ArrowRight />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
