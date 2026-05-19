import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  const msg = encodeURIComponent("Hi, I'm interested in importing from China. Can you help?");
  return (
    <a
      href={`https://wa.me/919899118900?text=${msg}`}
      target="_blank" rel="noopener"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform animate-gold-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" stroke="white" strokeWidth={1.5} />
    </a>
  );
}
