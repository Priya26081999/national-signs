import { MessageCircle } from "lucide-react";
import { company } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full grid place-items-center text-white shadow-soft hover:scale-110 transition-transform"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
    >
      <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "#25D366", opacity: 0.4 }} />
      <MessageCircle className="h-6 w-6 relative" />
    </a>
  );
}