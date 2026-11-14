import { createFileRoute } from "@tanstack/react-router";
import { CtaFaleConosco } from "@/components/site/CtaFaleConosco";
import { PageHero } from "@/components/site/PageHero";
import { Parceiros } from "@/components/site/Parceiros";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: pageMeta(
      "Parceiros | Alliantie Assessoria",
      "Advogados, consultores, bancos e empresas que compartilham dos valores da Alliantie.",
    ),
  }),
  component: () => (
    <>
      <PageHero eyebrow="Juntos vamos mais longe" title="Nossos" highlight="Parceiros">
        Parcerias construídas com transparência, respeito e valores em comum.
      </PageHero>
      <Parceiros />
      <CtaFaleConosco />
    </>
  ),
});
