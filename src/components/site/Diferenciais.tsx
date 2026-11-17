import { BadgeCheck, Handshake, MessagesSquare, ShieldCheck } from "lucide-react";
import { diferenciais } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icones = [BadgeCheck, Handshake, MessagesSquare, ShieldCheck];

export function Diferenciais({
  eyebrow = "Por que a Alliantie",
  title = "Nossos",
  highlight = "Diferenciais",
  variant = "split",
}: {
  eyebrow?: string;
  title?: string;
  highlight?: string;
  variant?: "split" | "columns";
}) {
  if (variant === "columns") {
    return (
      <section className="border-t border-border/70 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading eyebrow={eyebrow} title={title} highlight={highlight} align="left">
              Mais do que entregar obrigações, construímos uma aliança com o seu negócio.
            </SectionHeading>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 md:mt-16 md:grid-cols-4 md:gap-0">
            {diferenciais.map((d, i) => {
              const Icone = icones[i] ?? BadgeCheck;
              return (
                <Reveal
                  key={d.titulo}
                  delay={i * 90}
                  className={cn(
                    "md:px-8 md:first:pl-0 md:last:pr-0",
                    i > 0 && "md:border-l md:border-border/70",
                  )}
                >
                  <Icone className="size-8 text-primary" strokeWidth={1.4} aria-hidden />
                  <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wide text-foreground">
                    {d.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} highlight={highlight} align="left">
            Mais do que entregar obrigações, construímos uma aliança com o seu negócio.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {diferenciais.map((d, i) => (
            <Reveal key={d.titulo} delay={i * 90} className="border-l-2 border-primary bg-card p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">{d.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
