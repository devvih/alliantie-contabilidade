import { contato, navLinks, whatsappLink } from "@/lib/site-content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Contabilidade com excelência, confiança e fé. Mais que assessoria: uma aliança com o seu
            negócio.
          </p>
        </div>
        <nav aria-label="Rodapé">
          <h3 className="text-xs uppercase tracking-[0.2em] text-primary">Navegação</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-foreground/80 hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-primary">Contato</h3>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-primary">
                {contato.telefoneExibicao}
              </a>
            </li>
            <li>
              <a href={`mailto:${contato.email}`} className="hover:text-primary">
                {contato.email}
              </a>
            </li>
            <li>{contato.horario}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alliantie Assessoria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
