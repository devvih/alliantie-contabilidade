import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Faq } from "@/components/site/Faq";
import { Hero } from "@/components/site/Hero";
import { LinksUteis } from "@/components/site/LinksUteis";
import { OndeEstamos } from "@/components/site/OndeEstamos";
import { ParaQuem } from "@/components/site/ParaQuem";
import { ParceirosCarrossel } from "@/components/site/ParceirosCarrossel";
import { QuemSomos } from "@/components/site/QuemSomos";
import { Servicos } from "@/components/site/Servicos";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "Alliantie Assessoria | Contabilidade com excelência, confiança e fé",
      "Contabilidade, fiscal, departamento pessoal, abertura de empresas e consultoria com atendimento próximo e responsável.",
    ),
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Servicos />
      <div className="-mt-12 flex justify-center bg-background pb-24">
        <Button asChild variant="gold" size="pill">
          <Link to="/servicos">Ver todos os serviços <ArrowRight /></Link>
        </Button>
      </div>
      <ParaQuem />
      <Diferenciais />
      <QuemSomos />
      <ParceirosCarrossel />
      <Faq />
      <LinksUteis />
      <OndeEstamos />
    </>
  );
}
