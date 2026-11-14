import { ArrowRight, Award, HeartHandshake, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function Parceiros({ onEscolher }: { onEscolher: (assunto: string) => void }) {
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

        <Reveal className="mt-12 flex justify-center">
          <Button
            variant="gold"
            size="pill"
            onClick={() => {
              onEscolher("Quero ser parceiro");
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Quero ser parceiro <ArrowRight />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
