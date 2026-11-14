import { ArrowRight, Award, HeartHandshake, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { parceiros, whatsappLink } from "@/lib/site-content";
import { ParceiroLogo } from "./ParceirosCarrossel";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const beneficios = [
  {
    icone: HeartHandshake,
    titulo: "Relação de confiança",
    texto: "Parcerias construídas com transparência, respeito e valores em comum.",
  },
  {
    icone: TrendingUp,
    titulo: "Crescimento conjunto",
    texto: "Indicações, projetos e soluções que geram valor para os dois lados.",
  },
  {
    icone: Award,
    titulo: "Excelência no atendimento",
    texto: "Seus clientes recebem o mesmo cuidado que oferecemos aos nossos.",
  },
];

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

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {beneficios.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 120}>
              <div className="service-card h-full items-start text-left">
                <span className="flex size-12 items-center justify-center rounded-full border border-primary/40">
                  <b.icone className="size-5 text-primary" strokeWidth={1.6} aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wide text-foreground">
                  {b.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {parceiros.map((p, i) => (
            <Reveal key={p.nome} delay={(i % 3) * 100}>
              <ParceiroLogo p={p} />
              <p className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.area}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button asChild variant="gold" size="pill">
            <a href={whatsappLink("Olá! Quero ser parceiro da Alliantie.")} target="_blank" rel="noreferrer">
              Quero ser parceiro <ArrowRight />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
