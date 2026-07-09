import {
  Waves,
  Wine,
  UtensilsCrossed,
  Dumbbell,
  Trees,
  ShieldCheck,
  Baby,
  ShoppingBag,
  Car,
  BellRing,
  Cpu,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";
import { DOCS, IMG } from "./data";
import { Reveal } from "./Reveal";

const items = [
  { icon: Waves, title: "Bể bơi vô cực 1.000m²", desc: "Sky pool tầng cao, view sông Hàn & cầu Rồng", g: "Tầng 4–5" },
  { icon: Wine, title: "Sky Bar & Lounge", desc: "Rooftop bar sang trọng, phục vụ 24/7", g: "Rooftop 29" },
  { icon: UtensilsCrossed, title: "Nhà hàng Panorama", desc: "Ẩm thực Á – Âu, view 360°", g: "Rooftop 29" },
  { icon: Dumbbell, title: "Gym & Spa 5★", desc: "Trung tâm thể chất chuẩn quốc tế", g: "Tầng 4–5" },
  { icon: Trees, title: "Công viên nội khu", desc: "Hơn 1.350 m² cây xanh, đường dạo bộ", g: "Nội khu" },
  { icon: ShieldCheck, title: "An ninh 24/7", desc: "Camera AI, thẻ từ, bảo vệ chuyên nghiệp", g: "Nội khu" },
  { icon: Baby, title: "Kids Zone", desc: "Khu vui chơi trẻ em, thư viện thiếu nhi", g: "Tầng 4–5" },
  { icon: ShoppingBag, title: "TTTM & Cinema", desc: "Trung tâm thương mại 3 tầng khối đế", g: "Khối đế 1–3" },
  { icon: Car, title: "Hầm để xe 3 tầng", desc: "Ưu tiên xe điện, sạc nhanh", g: "Nội khu" },
  { icon: BellRing, title: "Sảnh lễ tân 5★", desc: "Chuẩn khách sạn quốc tế, concierge", g: "Khối đế 1–3" },
  { icon: Cpu, title: "Smart Home", desc: "Điều khiển từ xa, cảm biến toàn căn", g: "Trong căn" },
  { icon: PartyPopper, title: "Ballroom 800 khách", desc: "Hội nghị & sự kiện quy mô lớn", g: "Khối đế 1–3" },
];

export function Amenities() {
  return (
    <section id="tien-ich" className="py-20 md:py-28 bg-royal-950 text-white relative overflow-hidden">
      <img
        src={IMG.pool}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-royal-950 via-royal-950/95 to-royal-950" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionTitle
          invert
          eyebrow="03 — TIỆN ÍCH & HỆ SINH THÁI"
          title={
            <>
              Sống như <span className="text-gradient-gold">resort 5 sao</span> giữa lòng phố
            </>
          }
          sub="Hơn 50 tiện ích được tinh chọn — trải rộng khối đế, tầng tiện ích 4–5 và rooftop tầng 29. Mỗi ngày đều là một kỳ nghỉ."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              variant="up"
              delay={i * 60}
              className="group rounded-2xl border border-gold-400/20 bg-white/[0.03] p-5 hover:border-gold-400/60 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center text-royal-950 shadow-gold">
                <it.icon className="w-5 h-5" />
              </div>
              <p className="mt-4 font-display font-semibold text-lg text-gold-200">
                {it.title}
              </p>
              <p className="mt-1 text-sm text-white/70">{it.desc}</p>
              <p className="mt-3 text-[10px] tracking-widest text-gold-400/80">{it.g}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold text-royal-950 font-semibold shadow-gold hover:opacity-90"
          >
            <a href={DOCS.mbTienIch} target="_blank" rel="noopener noreferrer">
              Xem mặt bằng tiện ích chi tiết →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}