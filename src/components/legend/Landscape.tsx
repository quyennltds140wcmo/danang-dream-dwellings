import { SectionTitle } from "./SectionTitle";
import { IMG, AMENITY_PLANS } from "./data";
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

        <Reveal variant="up" className="mt-8 rounded-2xl overflow-hidden border-4 border-gold-400/40 shadow-luxury bg-white group">
          <img
            src={IMG.hpLandscapeFloor}
            alt="Mặt bằng tầng điển hình The Legend Đà Nẵng"
            loading="lazy"
            className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="p-4 bg-gradient-royal text-white">
            <p className="text-xs tracking-widest text-gold-300">TỔNG MẶT BẰNG</p>
            <p className="font-display font-semibold">Mặt bằng tầng điển hình — bố trí 2 tháp</p>
          </div>
        </Reveal>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { src: IMG.hpLandscape1, alt: "Mặt bằng cảnh quan The Legend City — góc 1" },
            { src: IMG.hpLandscape2, alt: "Mặt bằng cảnh quan The Legend City — góc 2" },
            { src: IMG.hpLandscape3, alt: "Mặt bằng cảnh quan The Legend City — góc 3" },
            { src: IMG.hpLandscape4, alt: "Mặt bằng cảnh quan The Legend City — góc 4" },
          ].map((c, i) => (
            <Reveal
              key={c.src}
              variant="up"
              delay={i * 80}
              className="rounded-2xl overflow-hidden border border-gold-400/30 shadow-sm bg-white group"
            >
              <img src={c.src} alt={c.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Reveal variant="up" className="rounded-2xl overflow-hidden border border-royal-900/10 shadow-sm group">
            <img src={IMG.amenitiesEco} alt="Hệ sinh thái tiện ích The Legend Đà Nẵng" loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
          </Reveal>
          <Reveal variant="up" delay={120} className="rounded-2xl overflow-hidden border border-royal-900/10 shadow-sm group">
            <img src={IMG.amenitiesEco2} alt="Tiện ích nội khu The Legend City" loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
          </Reveal>
        </div>

        <div className="mt-10">
          <p className="text-center text-xs md:text-sm tracking-[0.25em] text-royal-900/70 mb-6">
            MẶT BẰNG TIỆN ÍCH CHI TIẾT — 3 TẦNG
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: AMENITY_PLANS.ground, tag: "TẦNG TRỆT", desc: "Sảnh đón, lobby, retail, cảnh quan" },
              { src: AMENITY_PLANS.l3, tag: "TẦNG 3 — PODIUM", desc: "Hồ bơi, gym, spa, kids club" },
              { src: AMENITY_PLANS.roof, tag: "TẦNG MÁI — SKY", desc: "Sky bar, infinity pool, sky garden" },
            ].map((c, i) => (
              <Reveal
                key={c.src}
                variant="up"
                delay={i * 100}
                className="rounded-2xl overflow-hidden border-2 border-gold-400/40 shadow-luxury bg-white group"
              >
                <img src={c.src} alt={`${c.tag} — Mặt bằng tiện ích The Legend Đà Nẵng`} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
                <div className="p-4 bg-gradient-royal text-white">
                  <p className="text-xs tracking-widest text-gold-300">{c.tag}</p>
                  <p className="font-display font-semibold text-sm">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}