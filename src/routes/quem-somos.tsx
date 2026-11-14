import { createFileRoute } from "@tanstack/react-router";
import simbolo from "@/assets/alliantie-simbolo.png.asset.json";
import { CtaFaleConosco } from "@/components/site/CtaFaleConosco";
import { PageHero } from "@/components/site/PageHero";
import { QuemSomos } from "@/components/site/QuemSomos";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { trajetoria } from "@/lib/site-content";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: pageMeta(
      "Quem Somos | Alliantie Assessoria",
      "Conheça a história, a missão e os valores da Alliantie: contabilidade com excelência, confiança e fé.",
    ),
  }),
  component: QuemSomosPage,
});

function QuemSomosPage() {
  return (
    <>
      <PageHero eyebrow="Sobre a Alliantie" title="Quem" highlight="Somos">
        Uma contabilidade que vai além dos números: uma aliança verdadeira com cada cliente.
      </PageHero>
      <QuemSomos />
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading eyebrow="Nossa história" title="Nossa" highlight="Trajetória" />
          </Reveal>
          <ol className="relative mt-16 grid gap-10 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-primary/30 md:block" aria-hidden />
            {trajetoria.map((t, i) => (
              <Reveal as="li" key={t.titulo} delay={i * 120} className="relative text-center">
                <span className="relative mx-auto flex size-10 items-center justify-center rounded-full border border-primary bg-background font-display text-primary">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold uppercase text-foreground">{t.titulo}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal className="flex aspect-[4/3] items-center justify-center rounded-md border border-primary/30 bg-card">
            <img src={simbolo.url} alt="Símbolo da Alliantie" className="h-48 w-auto" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="Identidade" title="Nossa" highlight="Marca" align="left" />
            <p className="mt-6 text-base leading-relaxed text-foreground/85">
              O nome Alliantie vem de aliança: um compromisso firme, construído com confiança. O leão
              representa força, coragem e liderança, e o dourado traduz a excelência que buscamos em
              cada entrega.
            </p>
          </Reveal>
        </div>
      </section>
      <CtaFaleConosco />
    </>
  );
}
