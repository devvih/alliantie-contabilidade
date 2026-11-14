import { describe, expect, it } from "vitest";
import { montarMensagemContato, validarContato } from "@/lib/contato-form";

const base = { nome: "Maria Souza", telefone: "(11) 98888-7777", email: "", assunto: "", mensagem: "" };

describe("formulário de contato", () => {
  it("exige telefone com DDD", () => {
    const r = validarContato({ ...base, telefone: "98888-777" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.erros.telefone).toBe("Informe um telefone com DDD.");
  });

  it("aceita e-mail vazio, mas recusa e-mail inválido", () => {
    expect(validarContato(base).ok).toBe(true);
    const r = validarContato({ ...base, email: "maria@" });
    expect(r.ok).toBe(false);
  });

  it("inclui o assunto escolhido na mensagem do WhatsApp", () => {
    const msg = montarMensagemContato({ ...base, assunto: "Fiscal" });
    expect(msg).toContain("Assunto: Fiscal");
    expect(msg).toContain("Maria Souza");
  });
});
