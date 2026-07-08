import { MapPin } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { IMG } from "./data";

const points = [
  { d: "100 m", l: "Chân cầu Rồng — biểu tượng Đà Nẵng" },
  { d: "2 phút", l: "Vincom Plaza & trung tâm hành chính" },
  { d: "5 phút", l: "Cầu Tình Yêu, bãi tắm Phạm Văn Đồng" },
  { d: "1 km", l: "Biển Mỹ Khê — top 6 bãi biển đẹp nhất hành tinh" },
  { d: "10 phút", l: "Sân bay quốc tế Đà Nẵng" },
  { d: "7 km", l: "Danh thắng Ngũ Hành Sơn" },
];

export function Location() {
  return (
    <section id="vi-tri" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="02 — VỊ TRÍ DỰ ÁN"
          title={
            <>
              Tâm điểm vàng —{" "}
              <span className="text-gradient-gold">cận giang · cận hải · cận thị</span>
            </>
          }
          sub="Lô A20, giao lộ Võ Văn Kiệt – An Hải Tây (Sơn Trà), nơi hội tụ 4 mặt tiền đắt giá: Võ Văn Kiệt, Ngô Quyền, Mai Hắc Đế, Lý Nam Đế."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-luxury border-4 border-gold-400/40">
            <img
              src={IMG.locationMap}
              alt="Bản đồ vị trí The Legend Đà Nẵng"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 rounded-full bg-royal-950/90 text-gold-300 px-4 py-2 text-sm font-medium inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Lô A20 · Võ Văn Kiệt
            </div>
          </div>

          <ul className="space-y-3">
            {points.map((p) => (
              <li
                key={p.l}
                className="flex items-center gap-4 rounded-2xl border border-royal-900/10 bg-white px-5 py-4 shadow-sm hover:shadow-luxury transition-shadow"
              >
                <div className="w-20 h-14 flex-shrink-0 rounded-xl bg-gradient-royal flex items-center justify-center text-gold-300 font-display font-bold text-sm">
                  {p.d}
                </div>
                <p className="text-royal-950 font-medium">{p.l}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}