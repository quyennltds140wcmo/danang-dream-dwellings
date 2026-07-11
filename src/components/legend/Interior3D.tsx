import { SectionTitle } from "./SectionTitle";
import { IMG } from "./data";
import { Reveal } from "./Reveal";

const shots = [
  { src: IMG.interior3d1, alt: "Phòng khách căn hộ mẫu The Legend Đà Nẵng" },
  { src: IMG.interior3d2, alt: "Phòng ngủ master The Legend Đà Nẵng" },
  { src: IMG.interior3d3, alt: "Không gian bếp & dining The Legend Đà Nẵng" },
  { src: IMG.interior3d4, alt: "Chi tiết nội thất căn hộ mẫu" },
  { src: IMG.interior3d5, alt: "Phòng ngủ view sông Hàn" },
  { src: IMG.interior3d6, alt: "Phòng tắm cao cấp The Legend" },
  { src: IMG.bedroom1, alt: "Phòng ngủ 1 — căn 1PN The Legend Đà Nẵng" },
  { src: IMG.bedroom2, alt: "Phòng ngủ master — căn 1PN view sông Hàn" },
  { src: IMG.bedroom3, alt: "Phòng ngủ ấm cúng — căn 1PN The Legend" },
  { src: IMG.bedroom4, alt: "Phòng ngủ cao cấp — căn 1PN The Legend" },
  { src: IMG.bedroom5, alt: "Phòng ngủ master — căn 2PN The Legend" },
  { src: IMG.bedroom6, alt: "Phòng ngủ phụ — căn 2PN The Legend Đà Nẵng" },
];

export function Interior3D() {
  return (
    <section id="noi-that" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="07 — ẢNH 3D CĂN HỘ MẪU"
          title={
            <>
              Nội thất bàn giao <span className="text-gradient-gold">chuẩn 5 sao</span>
            </>
          }
          sub="Bộ ảnh 3D thực tế căn hộ mẫu The Legend Đà Nẵng — thiết kế bởi HBA Singapore, vật liệu nhập khẩu, bàn giao full nội thất cao cấp."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {shots.map((s, i) => (
            <Reveal
              key={s.src}
              variant="up"
              delay={i * 80}
              className="group relative rounded-2xl overflow-hidden border-4 border-gold-400/40 shadow-luxury bg-white"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-royal-950/85 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-gold-200 text-sm font-medium">{s.alt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}