import escritorio from "@/assets/escritorio.jpg.asset.json";
import { publicos } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ParaQuem() {
  return (
    <section id="para-quem" className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Para cada etapa do seu negócio"
              title="Para"
              highlight="Quem"
              align="left"
            >
              Do primeiro CNPJ à empresa consolidada, acompanhamos você com a mesma dedicação.
            </SectionHeading>
          </Reveal>

          <ol className="mt-12 divide-y divide-border/70 border-y border-border/70">
            {publicos.map((p, i) => (
              <Reveal as="li" key={p.titulo} delay={i * 90} className="group flex gap-6 py-6">
                <span className="w-9 shrink-0 font-display text-2xl font-bold lining-nums tabular-nums text-primary/80 transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                    {p.titulo}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="relative lg:-mr-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]" delay={150}>
          <div className="gold-frame -inset-y-5 -left-5 right-0 rounded-l-sm lg:translate-y-1/2" aria-hidden />
          <img
            src={escritorio.url}
            alt="Mesa de escritório elegante com caneca, notebook e caderno sob luz dourada"
            className="relative aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-[520px] lg:self-center lg:translate-y-1/2"
            loading="lazy"
            width={1672}
            height={941}
          />
        </Reveal>
      </div>
    </section>
  );
}
