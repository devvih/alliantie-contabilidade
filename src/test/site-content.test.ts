import { describe, expect, it } from "vitest";
import { contato, whatsappLink } from "@/lib/site-content";

describe("dados oficiais de contato", () => {
  it("usa o WhatsApp informado no briefing", () => {
    expect(contato.telefoneExibicao).toBe("(11) 98731-0052");
    expect(whatsappLink()).toBe("https://wa.me/5511987310052");
  });

  it("usa o e-mail informado no briefing", () => {
    expect(contato.email).toBe("contato.alliatie@gmail.com");
  });
});
