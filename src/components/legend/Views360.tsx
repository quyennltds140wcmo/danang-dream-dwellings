import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { DOCS, IMG } from "./data";

const views = [
  { img: IMG.river, title: "View sông Hàn", desc: "Sông Hàn về đêm với cầu Rồng, cầu Tình Yêu" },
  { img: IMG.beach, title: "View biển Mỹ Khê", desc: "Bãi biển xanh ngọc — chỉ 1km" },
  { img: IMG.interior, title: "View nội khu", desc: "Phòng khách penthouse với cửa kính khổng lồ" },
  { img: IMG.pool, title: "View sky pool", desc: "Bể bơi vô cực tầng 29" },
];

export function Views360() {
  return (
    <section id="view" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="04 — TẦM VIEW 360°"
          title={
            <>
              Mỗi khung cửa — <span className="text-gradient-gold">một kiệt tác</span>
            </>
          }
          sub="Từ sông Hàn đến biển Mỹ Khê, từ cầu Rồng đến bán đảo Sơn Trà — toàn cảnh Đà Nẵng thu vào tầm mắt."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {views.map((v) => (
            <div
              key={v.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-luxury border border-gold-500/20"
            >
              <img
                src={v.img}
                alt={v.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 text-white">
                <p className="font-display font-bold text-lg md:text-xl text-gold-300">
                  {v.title}
                </p>
                <p className="text-xs md:text-sm text-white/80 mt-1">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-royal text-white hover:opacity-90 shadow-luxury"
          >
            <a href={DOCS.vr360} target="_blank" rel="noopener noreferrer">
              <Compass className="w-4 h-4 mr-2" /> Trải nghiệm Tour VR360° trực tuyến
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}