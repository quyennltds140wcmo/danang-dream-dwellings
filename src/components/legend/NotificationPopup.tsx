import { useEffect, useState } from "react";
import { X, Gift } from "lucide-react";
import { LeadForm } from "./LeadForm";

export function NotificationPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("legend_popup_shown")) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("legend_popup_shown", "1");
    }, 8000);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-royal-950/70 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-luxury border-2 border-gold-400/50 animate-in zoom-in-95 duration-300"
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Đóng"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-royal-950 flex items-center justify-center shadow"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="bg-gradient-royal px-6 py-4 flex items-center gap-3 text-white">
          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-royal-950 shadow-gold">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] text-gold-300">ƯU ĐÃI GIỚI HẠN</p>
            <p className="font-display font-bold text-gold-200">Tặng 5 chỉ vàng + CK 8%</p>
          </div>
        </div>
        <div className="bg-white">
          <LeadForm id="popup-lead" variant="light" />
        </div>
      </div>
    </div>
  );
}