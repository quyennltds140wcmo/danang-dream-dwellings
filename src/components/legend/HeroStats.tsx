import { Button } from "@/components/ui/button";
import { IMG, DOCS } from "./data";

const stats = [
  { v: "800+", l: "Căn hộ" },
  { v: "29", l: "Tầng nổi" },
  { v: "5★", l: "Khách sạn" },
  { v: "1.350m²", l: "Cây xanh" },
];

export function HeroStats() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-royal-950/85 via-royal-900/80 to-royal-950/95" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 text-white">
        <p className="text-xs md:text-sm tracking-[0.3em] text-gold-300 mb-4">
          CĂN HỘ CAO CẤP · ĐÀ NẴNG 2026
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Biểu tượng sống <span className="text-gradient-gold">bên sông Hàn</span>
        </h1>
        <p className="mt-5 max-w-2xl text-white/85 text-base md:text-lg">
          Tổ hợp căn hộ – khách sạn 5 sao – trung tâm thương mại tại lô "kim cương"
          A20, giao lộ Võ Văn Kiệt – An Hải Tây. 4 mặt tiền đắt giá, 100m tới cầu
          Rồng, 1km tới biển Mỹ Khê.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold text-royal-950 font-semibold shadow-gold hover:opacity-90"
          >
            <a href="#dang-ky">Nhận bảng giá 07/2026</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gold-400 text-gold-300 hover:bg-gold-400/10 hover:text-gold-200 bg-transparent"
          >
            <a href={DOCS.vr360} target="_blank" rel="noopener noreferrer">
              Xem tour VR360°
            </a>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-gold-400/30 bg-royal-950/40 backdrop-blur-sm px-5 py-6 text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
                {s.v}
              </div>
              <div className="mt-1 text-sm text-white/80">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}