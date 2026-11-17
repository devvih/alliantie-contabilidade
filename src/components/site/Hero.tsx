import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/hero-leao.jpg"
          alt="Leão em perfil sobre fundo escuro, símbolo de força e liderança"
          className="animate-hero-zoom h-full w-full object-cover object-[50%_center] md:object-[70%_center]"
          width={1926}
          height={816}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-fade-bottom)" }} />
        <div className="absolute inset-0 bg-background/55 md:hidden" />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 pb-20 pt-32 md:min-h-[640px]">
        <div className="max-w-xl">
          <p className="eyebrow animate-rise">Excelência • Confiança • Fé</p>
          <h1
            className="heading-display animate-rise mt-5 text-5xl sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Alliantie
            <br />é mais que
            <br />
            <span className="text-gold">Assessoria.</span>
          </h1>
          <p
            className="animate-rise mt-6 max-w-sm text-base leading-relaxed text-foreground/90"
            style={{ animationDelay: "240ms" }}
          >
            Cuidamos da sua contabilidade com excelência, responsabilidade e proximidade, guiados
            pela fé em Deus e pelo compromisso de servir.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
            <Button asChild variant="gold" size="pill">
              <Link to="/contato">
                Fale Conosco <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="pill" className="text-foreground/80">
              <Link to="/servicos">Conheça os serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
