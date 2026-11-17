import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { parceiros } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ParceiroLogo({ p, className }: { p: (typeof parceiros)[number]; className?: string }) {
  return (
    <div className={cn("flex aspect-[3/2] items-center justify-center rounded-md border border-border/70 bg-card p-6", className)}>
      {p.logo ? (
        <img src={p.logo} alt={p.nome} className="max-h-full w-auto object-contain" loading="lazy" />
      ) : (
        <span className="text-center font-display text-lg text-foreground/70">{p.nome}</span>
      )}
    </div>
  );
}

export function ParceirosCarrossel() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Juntos vamos mais longe" title="Nossos" highlight="Parceiros" />
        </Reveal>
        <Reveal className="mt-14 px-12">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {parceiros.map((p) => (
                <CarouselItem key={p.nome} className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
                  <ParceiroLogo p={p} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/40 bg-card text-primary" />
            <CarouselNext className="border-primary/40 bg-card text-primary" />
          </Carousel>
        </Reveal>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="gold" size="pill">
            <Link to="/parceiros">Conheça nossos parceiros <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
