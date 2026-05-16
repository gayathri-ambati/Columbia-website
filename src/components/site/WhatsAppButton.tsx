import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Epitome%20Steel%2C%20I%27d%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed z-50 bottom-6 right-6"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" />
      <span className="relative grid place-items-center w-14 h-14 rounded-full glass border border-white/80 shadow-[0_18px_40px_-12px_rgba(37,99,235,0.45)]">
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[--brand-sky]/30 to-white/10" />
        <span className="absolute inset-1 rounded-full bg-white grid place-items-center">
          <MessageCircle className="w-6 h-6 text-[--brand-deep]" strokeWidth={2.2} />
        </span>
      </span>
      <span className="pointer-events-none absolute right-[72px] top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold text-[--brand-deep] bg-white border border-[--brand-sky]/40 rounded-full px-3 py-1.5 shadow-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition">
        Chat With Us
      </span>
    </a>
  );
}
