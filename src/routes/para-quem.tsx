import { createFileRoute } from "@tanstack/react-router";
import { CtaFaleConosco } from "@/components/site/CtaFaleConosco";
import { PageHero } from "@/components/site/PageHero";
import { ParaQuem } from "@/components/site/ParaQuem";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/para-quem")({
  head: () => ({
    meta: pageMeta(
      "Para Quem | Alliantie Assessoria",
      "Atendemos MEI, autônomos, profissionais liberais, pequenas e médias empresas e quem vai empreender.",
    ),
  }),
  component: () => (
    <>
      <PageHero eyebrow="Para cada etapa do seu negócio" title="Quem" highlight="Atendemos">
        Do primeiro CNPJ à empresa consolidada, acompanhamos você com a mesma dedicação.
      </PageHero>
      <ParaQuem />
      <CtaFaleConosco />
    </>
  ),
});
