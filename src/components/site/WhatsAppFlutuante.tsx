import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-content";

export function WhatsAppFlutuante() {
  return (
    <a
      href={whatsappLink("Olá, Alliantie! Gostaria de mais informações.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
