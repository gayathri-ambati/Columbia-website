// import { MessageCircle } from "lucide-react";

// export function WhatsAppButton() {
//   return (
//     <a
//       href="https://wa.me/919876543210?text=Hi%20Epitome%20Steel%2C%20I%27d%20like%20to%20discuss%20a%20project."
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Chat on WhatsApp"
//       className="group fixed z-50 bottom-6 right-6"
//     >
//       <span className="absolute inset-0 rounded-full animate-pulse-ring" />
//       <span className="relative grid place-items-center w-14 h-14 rounded-full glass border border-white/80 shadow-[0_18px_40px_-12px_rgba(37,99,235,0.45)]">
//         <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[--brand-sky]/30 to-white/10" />
//         <span className="absolute inset-1 rounded-full bg-white grid place-items-center">
//           <MessageCircle className="w-6 h-6 text-[--brand-deep]" strokeWidth={2.2} />
//         </span>
//       </span>
//       <span className="pointer-events-none absolute right-[72px] top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold text-[--brand-deep] bg-white border border-[--brand-sky]/40 rounded-full px-3 py-1.5 shadow-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition">
//         Chat With Us
//       </span>
//     </a>
//   );
// }



import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

interface WhatsAppButtonProps {
  numbers?: string[];
  defaultMessage?: string;
}

export function WhatsAppButton({ 
  numbers = ["919538204699"],
  defaultMessage = "Hi%20Epitome%20Steel%2C%20I%27d%20like%20to%20discuss%20a%20project."
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = (number: string) => {
    const url = `https://wa.me/${number}?text=${defaultMessage}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Button */}
      <div className="relative group">
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="WhatsApp Chat"
          className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-[0_12px_35px_rgba(37,211,102,0.45)] hover:scale-110 transition-all duration-300"
        >
          <FaWhatsapp className="text-white text-[38px]" />
        </button>
      </div>

      {/* Dropdown Menu for Multiple Numbers */}
      {isOpen && numbers.length > 1 && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-2 min-w-[220px] animate-in slide-in-from-bottom-4 duration-200">
          <div className="space-y-1">
            {numbers.map((number, index) => (
              <button
                key={index}
                onClick={() => handleWhatsAppClick(number)}
                className="flex items-center gap-3 w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-[#25D366]/10 rounded-xl transition-all duration-200 group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-colors">
                  <FaWhatsapp className="text-[#25D366] text-lg" />
                </div>
                <div>
                  <p className="font-medium">+{number}</p>
                  <p className="text-xs text-gray-500">
                    {index === 0 ? "Sales Team" : `Support ${index}`}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Single Number - Direct Click */}
      {numbers.length === 1 && (
        <a
          href={`https://wa.me/${numbers[0]}?text=${defaultMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
          aria-label="WhatsApp Chat"
        >
          {/* The button is already rendered above */}
        </a>
      )}

      {/* Close on outside click */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}