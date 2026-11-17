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

const MAX_DIGITOS_TELEFONE = 11;

function formatarTelefone(digitos: string) {
  if (!digitos) return "";
  const ddd = digitos.slice(0, 2);
  if (digitos.length <= 2) return `(${ddd}`;
  const corpo = digitos.slice(2);
  if (corpo.length <= 4) return `(${ddd}) ${corpo}`;
  const separador = corpo.length <= 8 ? 4 : 5;
  return `(${ddd}) ${corpo.slice(0, separador)}-${corpo.slice(separador)}`;
}

/**
 * Mantém o campo no formato (11) 98731-0052 enquanto a pessoa digita.
 * `anterior` é o valor já formatado antes da edição; serve para que apagar
 * um separador (o ")" ou o "-") apague junto o dígito da frente.
 */
export function mascararTelefone(valor: string, anterior = "") {
  const digitos = valor.replace(/\D/g, "");
  const digitosAnteriores = anterior.replace(/\D/g, "");
  if (anterior && valor.length < anterior.length && digitos.length === digitosAnteriores.length) {
    return formatarTelefone(digitos.slice(0, -1));
  }
  return formatarTelefone(digitos.slice(0, MAX_DIGITOS_TELEFONE));
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
