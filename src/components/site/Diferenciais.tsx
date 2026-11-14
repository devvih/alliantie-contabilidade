import { diferenciais } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Diferenciais({ eyebrow = "Por que a Alliantie", title = "Nossos", highlight = "Diferenciais" }: {
  eyebrow?: string; title?: string; highlight?: string;
}) {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} highlight={highlight} align="left">
            Mais do que entregar obrigações, construímos uma aliança com o seu negócio.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {diferenciais.map((d, i) => (
            <Reveal key={d.titulo} delay={i * 90} className="border-l-2 border-primary bg-card p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">{d.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
