import { SectionTitle } from "./SectionTitle";
import { IMG } from "./data";

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
            <div
              key={i}
              className={`overflow-hidden rounded-2xl border border-gold-500/20 shadow-sm ${
                i === 0 || i === 3 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={im.s}
                alt={im.a}
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}