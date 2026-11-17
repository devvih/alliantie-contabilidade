import { describe, expect, it } from "vitest";
import { mascararTelefone, montarMensagemContato, validarContato } from "@/lib/contato-form";

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

describe("máscara de telefone", () => {
  it("forma celular e fixo enquanto a pessoa digita", () => {
    expect(mascararTelefone("11")).toBe("(11");
    expect(mascararTelefone("119")).toBe("(11) 9");
    expect(mascararTelefone("11987310052")).toBe("(11) 98731-0052");
    expect(mascararTelefone("1132310052")).toBe("(11) 3231-0052");
  });

  it("aceita colagem e ignora pontos, espaços e traços", () => {
    expect(mascararTelefone("(11) 98731.0052")).toBe("(11) 98731-0052");
    expect(mascararTelefone("11 98731-0052 ramal 3")).toBe("(11) 98731-0052");
  });

  it("apagar o último dígito não deixa o separador sozinho", () => {
    expect(mascararTelefone("(11) ", "(11) 9")).toBe("(1");
    expect(mascararTelefone("(11) 98731-", "(11) 98731-0")).toBe("(11) 9873-1");
  });
});
