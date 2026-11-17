import { createFileRoute } from "@tanstack/react-router";
import { CtaFaleConosco } from "@/components/site/CtaFaleConosco";
import { Diferenciais } from "@/components/site/Diferenciais";
import { PageHero } from "@/components/site/PageHero";
import { Servicos } from "@/components/site/Servicos";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: pageMeta(
      "Serviços | Alliantie Assessoria",
      "Contabilidade, fiscal, departamento pessoal, abertura, alteração e encerramento de empresas e consultoria.",
    ),
  }),
  component: () => (
    <>
      <PageHero eyebrow="Trabalhando com você" title="Nossos" highlight="Serviços">
        Soluções contábeis completas para cuidar da sua empresa com segurança e proximidade.
      </PageHero>
      <Servicos variant="detailed" />
      <Diferenciais
        eyebrow="Nossos diferenciais"
        title="Por que escolher a"
        highlight="Alliantie"
        variant="columns"
      />
      <CtaFaleConosco />
    </>
  ),
});
