import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";
import { LeadForm } from "./LeadForm";
import { HOTLINE, HOTLINE_TEL, EMAIL, ZALO } from "./data";

export function Contact() {
  return (
    <section id="lien-he" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="09 — LIÊN HỆ"
          title={
            <>
              Đăng ký <span className="text-gradient-gold">tư vấn 1–1</span> trực tiếp
            </>
          }
          sub="Đội ngũ chuyên viên VIPICO tư vấn miễn phí, đưa quý khách tham quan nhà mẫu và cung cấp bảng giá đầy đủ mọi căn còn lại."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-gradient-royal text-white p-8 md:p-10 shadow-luxury relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs tracking-[0.3em] text-gold-300">NHÀ MẪU ĐÀ NẴNG</p>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-gradient-gold">
                The Legend Đà Nẵng
              </h3>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    Lô A20, đường Võ Văn Kiệt, P. An Hải Tây, Q. Sơn Trà, TP. Đà Nẵng
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-300 flex-shrink-0" />
                  <a href={`tel:${HOTLINE_TEL}`} className="text-white/90 hover:text-gold-200 font-medium">
                    Hotline: {HOTLINE}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-300 flex-shrink-0" />
                  <a href={`mailto:${EMAIL}`} className="text-white/90 hover:text-gold-200 break-all">
                    {EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold-300 flex-shrink-0" />
                  <span className="text-white/90">8:00 – 20:00, tất cả các ngày</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-gradient-gold text-royal-950 font-semibold shadow-gold hover:opacity-90">
                  <a href={`tel:${HOTLINE_TEL}`}>
                    <Phone className="w-4 h-4 mr-2" /> Gọi ngay
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gold-400 text-gold-300 hover:bg-gold-400/10 hover:text-gold-200 bg-transparent">
                  <a href={ZALO} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> Chat Zalo
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <LeadForm id="dang-ky" />
        </div>
      </div>
    </section>
  );
}