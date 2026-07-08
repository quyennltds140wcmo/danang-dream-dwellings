import { Diamond, TrendingUp, Award } from "lucide-react";
import { IMG } from "./data";

const reasons = [
  {
    icon: Diamond,
    title: "Vị trí tứ giác vàng",
    desc: "Lô A20 Võ Văn Kiệt — 4 mặt tiền, cách cầu Rồng 100m, biển Mỹ Khê 1km. Quỹ đất trung tâm ngày càng khan hiếm — thanh khoản cao, tăng giá 12–18%/năm.",
  },
  {
    icon: TrendingUp,
    title: "ROI 8 – 12%/năm",
    desc: "Đà Nẵng đón 10 triệu lượt khách/năm 2026. CĐT cam kết thuê lại tối thiểu 12%/năm — dòng tiền ổn định từ cho thuê ngắn hạn & dài hạn.",
  },
  {
    icon: Award,
    title: "Chuẩn sống 5★",
    desc: "HBA Singapore thiết kế · NDA (Pháp) cảnh quan · Boydens (Bỉ) MEP xanh EU. Vận hành bởi ROX Signature — dịch vụ concierge quốc tế.",
  },
];

export function WhyInvest() {
  return (
    <section className="relative py-20 md:py-28 text-white overflow-hidden">
      <img src={IMG.bigNight} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-royal-950/95 via-royal-950/90 to-royal-950/95" />
      <div className="relative mx-auto max-w-7xl px-4">
        <p className="text-xs md:text-sm tracking-[0.3em] text-gold-300 text-center">
          LÝ DO ĐẦU TƯ 2026
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-center max-w-3xl mx-auto">
          Không chỉ mua bất động sản —{" "}
          <span className="text-gradient-gold">sở hữu tài sản để đời</span>
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-gold-400/30 bg-white/[0.04] backdrop-blur-sm p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-royal-950 shadow-gold">
                <r.icon className="w-7 h-7" />
              </div>
              <p className="mt-5 font-display font-bold text-2xl text-gold-200">{r.title}</p>
              <p className="mt-3 text-white/80 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="mt-16 text-center max-w-3xl mx-auto">
          <p className="font-display text-2xl md:text-4xl italic text-gradient-gold leading-snug">
            "Mở cửa là phố, bước ra là biển, lên cao là trời."
          </p>
          <p className="mt-3 text-sm tracking-widest text-white/60">— THE LEGEND ĐÀ NẴNG</p>
        </blockquote>
      </div>
    </section>
  );
}