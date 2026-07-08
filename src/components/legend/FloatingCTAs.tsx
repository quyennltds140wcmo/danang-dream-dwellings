import { Phone, MessageCircle, FileText } from "lucide-react";
import { HOTLINE_TEL, ZALO } from "./data";

export function FloatingCTAs() {
  return (
    <div className="fixed right-3 md:right-5 bottom-4 md:bottom-6 z-50 flex flex-col gap-2">
      <a
        href={`tel:${HOTLINE_TEL}`}
        aria-label="Gọi ngay"
        className="w-12 h-12 rounded-full bg-gradient-gold text-royal-950 shadow-gold flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a
        href={ZALO}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="w-12 h-12 rounded-full bg-[#0068ff] text-white shadow-luxury flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      <a
        href="#dang-ky"
        aria-label="Đăng ký"
        className="w-12 h-12 rounded-full bg-royal-800 text-gold-300 shadow-luxury flex items-center justify-center hover:scale-110 transition-transform"
      >
        <FileText className="w-5 h-5" />
      </a>
    </div>
  );
}