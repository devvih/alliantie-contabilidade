import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CtaFaleConosco() {
  return (
    <section className="border-y border-border/70 bg-surface py-16">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div>
          <h2 className="heading-display text-3xl sm:text-4xl">Fale <span className="text-gold">Conosco</span></h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Conte sobre a sua empresa e descubra como podemos cuidar da sua contabilidade com proximidade.
          </p>
        </div>
        <Button asChild variant="goldSolid" size="pill">
          <Link to="/contato">Entre em contato <ArrowRight /></Link>
        </Button>
      </Reveal>
    </section>
  );
}
