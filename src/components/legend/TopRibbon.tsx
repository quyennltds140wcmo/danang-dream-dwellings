import { Phone } from "lucide-react";
import { HOTLINE, HOTLINE_TEL } from "./data";

export function TopRibbon() {
  return (
    <div className="bg-gradient-royal text-gold-300 text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <p className="font-medium tracking-wide">
          🎆 Ưu đãi 07/2026: Chiết khấu đến <span className="text-gold-200 font-semibold">8%</span> + gói nội thất cao cấp
        </p>
        <a
          href={`tel:${HOTLINE_TEL}`}
          className="inline-flex items-center gap-1.5 hover:text-gold-200 transition-colors"
        >
          <Phone className="w-3.5 h-3.5" /> Hotline {HOTLINE}
        </a>
      </div>
    </div>
  );
}