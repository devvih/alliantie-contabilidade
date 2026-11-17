import simbolo from "@/assets/logo-alliantie.svg.asset.json";
import { valores } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function QuemSomos() {
  return (
    <section id="quem-somos" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <img
        src={simbolo.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-[560px] w-auto -translate-y-1/2 opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal delay={150} className="flex items-center">
            <figure className="border-l-2 border-primary pl-6">
              <blockquote className="font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
                “Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.”
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-primary">
                Provérbios 16:3
              </figcaption>
            </figure>
          </Reveal>

          <Reveal>
            <SectionHeading eyebrow="Nossa essência" title="Quem" highlight="Somos" align="left" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                A história da Alliantie começou em 2008, com a decisão corajosa de deixar o emprego
                e construir um caminho próprio na contabilidade. Começamos em casa, com apenas um
                cliente, crescendo pela confiança e pela divulgação boca a boca.
              </p>
              <p className="text-muted-foreground">
                Mais do que números e obrigações, construímos relacionamentos duradouros e uma
                trajetória marcada por perseverança, credibilidade, qualidade e comprometimento.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-md border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-5">
          {valores.map((v, i) => (
            <Reveal key={v.titulo} delay={(i % 5) * 80} className="bg-card p-6">
              <span className="font-display text-sm lining-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase text-foreground">
                {v.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
