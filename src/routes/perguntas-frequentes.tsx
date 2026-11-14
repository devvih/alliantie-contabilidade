import { createFileRoute } from "@tanstack/react-router";
import { CtaFaleConosco } from "@/components/site/CtaFaleConosco";
import { FaqLista } from "@/components/site/Faq";
import { PageHero } from "@/components/site/PageHero";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/perguntas-frequentes")({
  head: () => ({
    meta: pageMeta(
      "Perguntas Frequentes | Alliantie Assessoria",
      "Respostas para as dúvidas mais comuns sobre contabilidade, abertura de empresas e troca de contador.",
    ),
  }),
  component: () => (
    <>
      <PageHero eyebrow="Tire suas dúvidas" title="Perguntas" highlight="Frequentes">
        Reunimos as dúvidas mais comuns dos nossos clientes. Não encontrou a sua? Fale com a gente.
      </PageHero>
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6"><FaqLista /></div>
      </section>
      <CtaFaleConosco />
    </>
  ),
});
