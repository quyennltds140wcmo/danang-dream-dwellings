import { SectionTitle } from "./SectionTitle";
import { IMG } from "./data";
import { Reveal } from "./Reveal";

const imgs = [
  { s: IMG.hero, a: "Tòa tháp The Legend Đà Nẵng" },
  { s: IMG.render3d, a: "Phối cảnh 3D The Legend" },
  { s: IMG.pool, a: "Bể bơi vô cực" },
  { s: IMG.river, a: "View sông Hàn về đêm" },
  { s: IMG.beach, a: "View biển Mỹ Khê" },
  { s: IMG.interior, a: "Nội thất căn hộ" },
  { s: IMG.garden, a: "Sân vườn nội khu" },
  { s: IMG.facade, a: "Mặt tiền dự án" },
];

export function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="THƯ VIỆN HÌNH ẢNH"
          title={
            <>
              Không gian sống <span className="text-gradient-gold">tiêu chuẩn 5★</span>
            </>
          }
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {imgs.map((im, i) => (
            <Reveal
              key={i}
              variant="scale"
              delay={i * 70}
              className={`overflow-hidden rounded-2xl border border-gold-500/20 shadow-sm ${
                i === 0 || i === 3 ? "md:col-span-2 md:row-span-2" : ""
              } group relative`}
            >
              <img
                src={im.s}
                alt={im.a}
                className="w-full h-full object-cover aspect-square animate-ken-burns transition-transform duration-700 group-hover:scale-110"
                style={{ animationDelay: `${(i % 4) * -3}s` }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                <p className="text-white text-xs md:text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{im.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}