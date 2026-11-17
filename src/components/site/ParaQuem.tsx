import escritorio from "@/assets/escritorio.jpg.asset.json";
import { publicos } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ParaQuem({ variant = "split" }: { variant?: "split" | "timeline" }) {
  if (variant === "timeline") {
    return (
      <section id="para-quem" className="overflow-hidden bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading eyebrow="Para cada etapa do seu negócio" title="Quem" highlight="Atendemos">
              Do primeiro CNPJ à empresa consolidada, acompanhamos você com a mesma dedicação.
            </SectionHeading>
          </Reveal>

          <ol className="relative mt-16 border-l border-primary/30 pl-8 md:mt-20 md:border-l-0 md:pl-0">
            <div className="absolute left-1/2 top-0 hidden h-full w-px bg-primary/30 md:block" aria-hidden />
            {publicos.map((p, i) => {
              const esquerda = i % 2 === 0;

              return (
                <Reveal
                  as="li"
                  key={p.titulo}
                  delay={(i % 2) * 100}
                  className="relative mb-12 last:mb-0 md:mb-0 md:grid md:min-h-52 md:grid-cols-2 md:gap-20"
                >
                  <span
                    className="absolute -left-[2.1875rem] top-2 size-2.5 rounded-full border-2 border-background bg-primary md:left-1/2 md:top-3 md:-translate-x-1/2"
                    aria-hidden
                  />
                  <div
                    className={cn(
                      "max-w-md",
                      esquerda
                        ? "md:col-start-1 md:justify-self-end md:pr-2 md:text-right"
                        : "md:col-start-2 md:pl-2",
                    )}
                  >
                    <span className="font-display text-sm font-bold tabular-nums text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-foreground sm:text-2xl">
                      {p.titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{p.texto}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>
    );
  }

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
          <div className="gold-frame -inset-y-5 -left-5 right-0 rounded-l-sm" aria-hidden />
          <img
            src={escritorio.url}
            alt="Mesa de escritório elegante com caneca, notebook e caderno sob luz dourada"
            className="relative mt-10 aspect-[4/3] w-full object-cover lg:mt-16 lg:aspect-auto lg:h-[520px]"
            loading="lazy"
            width={1672}
            height={941}
          />
        </Reveal>
      </div>
    </section>
  );
}
