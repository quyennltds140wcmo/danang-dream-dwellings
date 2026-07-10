import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";
import { DOCS, IMG } from "./data";
import { Reveal } from "./Reveal";

const products = [
  {
    name: "Căn hộ 1 BR",
    qty: "308 căn",
    area: "40 – 55 m²",
    own: "Sở hữu lâu dài",
    img: IMG.product1br,
    desc: "Studio – 1 phòng ngủ tối ưu công năng, phù hợp người trẻ & đầu tư cho thuê.",
  },
  {
    name: "Căn hộ 1 BR + 1",
    qty: "88 căn",
    area: "58 – 63 m²",
    own: "Sở hữu lâu dài",
    img: IMG.product1brPlus,
    desc: "1 phòng ngủ + phòng đa năng, linh hoạt làm việc tại nhà hoặc phòng ngủ phụ.",
  },
  {
    name: "Căn hộ 2 BR",
    qty: "308 căn",
    area: "73 – 84 m²",
    own: "Sở hữu lâu dài",
    img: IMG.product2br,
    desc: "Lựa chọn hàng đầu cho gia đình trẻ — 2 ngủ, 2 vệ sinh, phòng khách rộng rãi.",
  },
  {
    name: "Căn hộ 3 BR",
    qty: "88 căn",
    area: "112 – 115 m²",
    own: "Sở hữu lâu dài",
    img: IMG.product3br,
    desc: "Không gian sống rộng cho gia đình đa thế hệ, view sông Hàn & cầu Rồng.",
  },
  {
    name: "Penthouse",
    qty: "8 căn",
    area: "256 – 415 m²",
    own: "Sở hữu lâu dài",
    img: IMG.productPenthouse,
    desc: "Siêu phẩm đỉnh tháp — trần cao, sân vườn riêng, tầm view panorama 360°.",
  },
];

export function Products() {
  return (
    <section
      id="san-pham"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="06 — SẢN PHẨM"
          title={
            <>
              Các dòng căn hộ tại{" "}
              <span className="text-gradient-gold">The Legend Đà Nẵng</span>
            </>
          }
          sub="800 căn hộ thương mại sở hữu lâu dài — đa dạng diện tích từ 40 m² đến 415 m², đáp ứng mọi nhu cầu an cư và đầu tư."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Reveal
              key={p.name}
              variant="up"
              delay={i * 80}
              className="group rounded-2xl overflow-hidden border border-royal-900/10 bg-white shadow-luxury hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.name} The Legend Đà Nẵng`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-royal-950 shadow-gold">
                  {p.own}
                </div>
              </div>
              <div className="p-5">
                <p className="font-display font-bold text-xl text-royal-950">
                  {p.name}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-lg bg-slate-100 px-3 py-2">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">
                      Số lượng
                    </p>
                    <p className="font-semibold text-royal-800">{p.qty}</p>
                  </div>
                  <div className="rounded-lg bg-slate-100 px-3 py-2">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">
                      Diện tích
                    </p>
                    <p className="font-semibold text-royal-800">{p.area}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 w-full border-gold-500 text-royal-900 hover:bg-gradient-gold hover:text-royal-950 hover:border-transparent"
                >
                  <a href="#dang-ky">Xem thêm →</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold text-royal-950 font-semibold shadow-gold hover:opacity-90"
          >
            <a href={DOCS.mbCanHo} target="_blank" rel="noopener noreferrer">
              Tải toàn bộ mặt bằng căn hộ →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}