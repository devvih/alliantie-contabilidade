import { z } from "zod";

export const contatoSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome.").max(80, "Nome muito longo."),
  telefone: z
    .string()
    .trim()
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Informe um telefone com DDD."),
  email: z
    .string()
    .trim()
    .max(120)
    .refine((v) => v === "" || z.string().email().safeParse(v).success, "E-mail inválido."),
  assunto: z.string().max(60),
  mensagem: z.string().trim().max(1000, "Mensagem muito longa."),
});

export type ContatoForm = z.infer<typeof contatoSchema>;

export function validarContato(
  dados: ContatoForm,
):
  | { ok: true; dados: ContatoForm }
  | { ok: false; erros: Partial<Record<keyof ContatoForm, string>> } {
  const r = contatoSchema.safeParse(dados);
  if (r.success) return { ok: true, dados: r.data };
  const erros: Partial<Record<keyof ContatoForm, string>> = {};
  for (const issue of r.error.issues) {
    const campo = issue.path[0] as keyof ContatoForm;
    erros[campo] ??= issue.message;
  }
  return { ok: false, erros };
}

export function montarMensagemContato(d: ContatoForm) {
  return [
    `Olá, Alliantie! Meu nome é ${d.nome}.`,
    d.assunto && `Assunto: ${d.assunto}`,
    `Telefone: ${d.telefone}`,
    d.email && `E-mail: ${d.email}`,
    d.mensagem && `\n${d.mensagem}`,
  ]
    .filter(Boolean)
    .join("\n");
}
