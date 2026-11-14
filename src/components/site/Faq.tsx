import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function FaqLista() {
  return (
    <Accordion type="single" collapsible defaultValue="item-0" className="border-t border-border/70">
      {faq.map((f, i) => (
        <AccordionItem key={f.pergunta} value={`item-${i}`} className="border-border/70">
          <AccordionTrigger className="py-5 text-left font-display text-lg text-foreground hover:text-primary hover:no-underline">
            {f.pergunta}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.resposta}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function Faq() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal>
          <SectionHeading eyebrow="Tire suas dúvidas" title="Perguntas" highlight="Frequentes" align="left" />
        </Reveal>
        <Reveal delay={120}><FaqLista /></Reveal>
      </div>
    </section>
  );
}
