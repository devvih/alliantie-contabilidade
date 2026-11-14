import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Contato } from "@/components/site/Contato";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ParaQuem } from "@/components/site/ParaQuem";
import { Parceiros } from "@/components/site/Parceiros";
import { QuemSomos } from "@/components/site/QuemSomos";
import { Servicos } from "@/components/site/Servicos";
import { WhatsAppFlutuante } from "@/components/site/WhatsAppFlutuante";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alliantie Assessoria | Contabilidade com excelência, confiança e fé" },
      {
        name: "description",
        content:
          "Contabilidade, fiscal, departamento pessoal, abertura de empresas e consultoria com atendimento próximo e responsável.",
      },
      { property: "og:title", content: "Alliantie Assessoria | Mais que assessoria" },
      {
        property: "og:description",
        content:
          "Cuidamos da sua contabilidade com excelência, responsabilidade e proximidade, guiados pela fé em Deus.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [assunto, setAssunto] = useState("");

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos onEscolher={setAssunto} />
        <ParaQuem />
        <QuemSomos />
        <Parceiros onEscolher={setAssunto} />
        <Contato assunto={assunto} onAssunto={setAssunto} />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
