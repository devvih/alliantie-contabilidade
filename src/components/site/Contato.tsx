import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { contato, servicos, whatsappLink } from "@/lib/site-content";
import { montarMensagemContato, validarContato, type ContatoForm } from "@/lib/contato-form";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const infos = [
  { icone: MessageCircle, rotulo: "WhatsApp", valor: contato.telefoneExibicao, href: whatsappLink() },
  { icone: Mail, rotulo: "E-mail", valor: contato.email, href: `mailto:${contato.email}` },
  { icone: MapPin, rotulo: "Endereço", valor: contato.endereco },
  { icone: Clock, rotulo: "Atendimento", valor: contato.horario },
];

export function Contato() {
  const [assunto, onAssunto] = useState("");
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const [erros, setErros] = useState<Partial<Record<keyof ContatoForm, string>>>({});

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  function enviar(e: FormEvent) {
    e.preventDefault();
    const dados: ContatoForm = { ...form, assunto };
    const resultado = validarContato(dados);
    if (!resultado.ok) {
      setErros(resultado.erros);
      toast.error("Confira os campos destacados.");
      return;
    }
    setErros({});
    window.open(whatsappLink(montarMensagemContato(resultado.dados)), "_blank", "noopener");
    toast.success("Abrindo o WhatsApp com sua mensagem.");
  }

  return (
    <section id="contato" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <SectionHeading eyebrow="Vamos conversar" title="Fale" highlight="Conosco" align="left">
            Conte um pouco sobre a sua empresa. Respondemos rapidamente, com a atenção que você
            merece.
          </SectionHeading>

          <ul className="mt-10 space-y-6">
            {infos.map((i) => {
              const conteudo = (
                <>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/40">
                    <i.icone className="size-4 text-primary" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {i.rotulo}
                    </span>
                    <span className="mt-0.5 block text-sm text-foreground">{i.valor}</span>
                  </span>
                </>
              );
              return (
                <li key={i.rotulo}>
                  {i.href ? (
                    <a
                      href={i.href}
                      target={i.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-4 transition-colors hover:text-primary"
                    >
                      {conteudo}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{conteudo}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={enviar}
            noValidate
            className="rounded-md border border-border/70 bg-card p-6 sm:p-10"
            aria-label="Formulário de contato"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Campo label="Nome" erro={erros.nome} className="sm:col-span-2">
                <input
                  className="field"
                  name="nome"
                  autoComplete="name"
                  maxLength={80}
                  value={form.nome}
                  onChange={(e) => set("nome")(e.target.value)}
                  placeholder="Seu nome completo"
                />
              </Campo>
              <Campo label="Telefone / WhatsApp" erro={erros.telefone}>
                <input
                  className="field"
                  name="telefone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={20}
                  value={form.telefone}
                  onChange={(e) => set("telefone")(e.target.value)}
                  placeholder="(00) 00000-0000"
                />
              </Campo>
              <Campo label="E-mail" erro={erros.email}>
                <input
                  className="field"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={120}
                  value={form.email}
                  onChange={(e) => set("email")(e.target.value)}
                  placeholder="voce@empresa.com.br"
                />
              </Campo>
              <Campo label="Assunto" className="sm:col-span-2">
                <select
                  className="field appearance-none"
                  name="assunto"
                  value={assunto}
                  onChange={(e) => onAssunto(e.target.value)}
                >
                  <option value="">Selecione um serviço</option>
                  {servicos.map((s) => (
                    <option key={s.titulo} value={s.titulo}>
                      {s.titulo}
                    </option>
                  ))}
                  <option value="Quero ser parceiro">Quero ser parceiro</option>
                  <option value="Outro assunto">Outro assunto</option>
                </select>
              </Campo>
              <Campo label="Mensagem" erro={erros.mensagem} className="sm:col-span-2">
                <textarea
                  className="field min-h-32 resize-y"
                  name="mensagem"
                  maxLength={1000}
                  value={form.mensagem}
                  onChange={(e) => set("mensagem")(e.target.value)}
                  placeholder="Como podemos ajudar a sua empresa?"
                />
              </Campo>
            </div>
            <Button type="submit" variant="goldSolid" size="pill" className="mt-8 w-full sm:w-auto">
              Enviar pelo WhatsApp <Send />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Campo({
  label,
  erro,
  className,
  children,
}: {
  label: string;
  erro?: string | undefined;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      {children}
      {erro && <span className="mt-1.5 block text-xs text-destructive">{erro}</span>}
    </label>
  );
}
