import { Clock, Mail, MapPin, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contato, mapaEmbedUrl, mapaLink, whatsappLink } from "@/lib/site-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const infos = [
  { icone: MapPin, rotulo: "Endereço", valor: contato.endereco },
  { icone: MessageCircle, rotulo: "WhatsApp", valor: contato.telefoneExibicao, href: whatsappLink() },
  { icone: Mail, rotulo: "E-mail", valor: contato.email, href: `mailto:${contato.email}` },
  { icone: Clock, rotulo: "Atendimento", valor: contato.horario },
];

export function Mapa() {
  return (
    <div className="relative overflow-hidden rounded-md border border-primary/30">
      <iframe
        title="Mapa do escritório da Alliantie"
        src={mapaEmbedUrl}
        className="h-[380px] w-full lg:h-[460px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export function OndeEstamos({ eyebrow = "Venha nos visitar", title = "Entre em", highlight = "Contato", id = "contato" }: {
  eyebrow?: string; title?: string; highlight?: string; id?: string;
}) {
  return (
    <section id={id} className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} highlight={highlight} align="left" />
          <ul className="mt-10 space-y-6">
            {infos.map((i) => {
              const inner = (
                <>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/40">
                    <i.icone className="size-4 text-primary" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">{i.rotulo}</span>
                    <span className="mt-0.5 block text-sm text-foreground">{i.valor}</span>
                  </span>
                </>
              );
              return (
                <li key={i.rotulo}>
                  {i.href ? (
                    <a href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 hover:text-primary">{inner}</a>
                  ) : (
                    <div className="flex items-center gap-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <Button asChild variant="gold" size="pill" className="mt-10">
            <a href={mapaLink} target="_blank" rel="noreferrer">Como chegar <Navigation /></a>
          </Button>
        </Reveal>
        <Reveal delay={150}><Mapa /></Reveal>
      </div>
    </section>
  );
}
