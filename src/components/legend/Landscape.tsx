import { SectionTitle } from "./SectionTitle";
import { IMG } from "./data";
import { Reveal } from "./Reveal";

export function Landscape() {
  return (
    <section id="canh-quan" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="04B — MẶT BẰNG CẢNH QUAN"
          title={
            <>
              Hệ cảnh quan <span className="text-gradient-gold">NDA Landscape (Pháp)</span>
            </>
          }
          sub="Mặt bằng tổng thể tầng trệt & tầng tiện ích — công viên nội khu, hồ cảnh quan, đường dạo bộ và các cụm tiện ích được bố trí liên hoàn."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal variant="left" className="rounded-2xl overflow-hidden border-4 border-gold-400/40 shadow-luxury bg-white group">
            <img src={IMG.landscape} alt="Mặt bằng cảnh quan tầng trệt The Legend Đà Nẵng" loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
            <div className="p-4 bg-gradient-royal text-white">
              <p className="text-xs tracking-widest text-gold-300">TẦNG TRỆT</p>
              <p className="font-display font-semibold">Sảnh đón, hồ cảnh quan, công viên</p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120} className="rounded-2xl overflow-hidden border-4 border-gold-400/40 shadow-luxury bg-white group">
            <img src={IMG.landscape2} alt="Mặt bằng tiện ích tầng 3 The Legend Đà Nẵng" loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
            <div className="p-4 bg-gradient-royal text-white">
              <p className="text-xs tracking-widest text-gold-300">TẦNG 3 — TIỆN ÍCH</p>
              <p className="font-display font-semibold">Hồ bơi, gym, spa, kids zone</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Reveal variant="up" className="rounded-2xl overflow-hidden border border-royal-900/10 shadow-sm group">
            <img src={IMG.amenitiesEco} alt="Hệ sinh thái tiện ích The Legend Đà Nẵng" loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
          </Reveal>
          <Reveal variant="up" delay={120} className="rounded-2xl overflow-hidden border border-royal-900/10 shadow-sm group">
            <img src={IMG.amenitiesEco2} alt="Tiện ích nội khu The Legend City" loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}