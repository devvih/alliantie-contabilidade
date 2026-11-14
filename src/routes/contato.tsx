import { createFileRoute } from "@tanstack/react-router";
import { Contato } from "@/components/site/Contato";
import { CtaFaleConosco } from "@/components/site/CtaFaleConosco";
import { OndeEstamos } from "@/components/site/OndeEstamos";
import { PageHero } from "@/components/site/PageHero";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: pageMeta(
      "Contato | Alliantie Assessoria",
      "Fale com a Alliantie pelo WhatsApp, e-mail ou visite nosso escritório em Osasco (SP).",
    ),
  }),
  component: () => (
    <>
      <PageHero eyebrow="Estamos aqui para você" title="Fale" highlight="Conosco">
        Conte um pouco sobre a sua empresa. Respondemos rapidamente, com a atenção que você merece.
      </PageHero>
      <Contato />
      <OndeEstamos id="onde-estamos" eyebrow="Venha nos visitar" title="Onde" highlight="Estamos" />
      <CtaFaleConosco />
    </>
  ),
});
