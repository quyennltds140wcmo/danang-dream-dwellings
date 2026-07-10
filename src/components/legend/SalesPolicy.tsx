import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";
import { DOCS, IMG } from "./data";
import { Reveal } from "./Reveal";

const highlights = [
  { v: "8%", l: "Chiết khấu", d: "Cho khách thanh toán sớm 95% giá trị hợp đồng" },
  { v: "0%", l: "Lãi suất", d: "Ân hạn gốc & lãi 24 tháng từ VCB / MSB / MB Bank" },
  { v: "70%", l: "Hỗ trợ vay", d: "3 ngân hàng đồng hành, giải ngân 5 ngày làm việc" },
  { v: "12%", l: "Cam kết thuê", d: "CĐT cam kết thuê 2 năm đầu, tối thiểu 12%/năm" },
  { v: "5 chỉ", l: "Vàng tặng", d: "Cho khách đặt cọc trong tháng 7/2026" },
  { v: "0đ", l: "Phí quản lý", d: "Miễn phí quản lý 2 năm đầu sau bàn giao" },
];

export function SalesPolicy() {
  return (
    <section id="csbh" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="06 — CHÍNH SÁCH BÁN HÀNG"
          title={
            <>
              Ưu đãi <span className="text-gradient-gold">kim cương 07/2026</span>
            </>
          }
          sub="Bộ chính sách bán hàng mạnh nhất từ trước tới nay — chỉ áp dụng cho 100 khách hàng đầu tiên."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
          {highlights.map((h, i) => (
            <Reveal
              key={h.l}
              variant="up"
              delay={i * 80}
              className="relative rounded-2xl border border-gold-500/30 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold text-gradient-gold leading-none">
                {h.v}
              </div>
              <p className="mt-2 font-semibold text-royal-950">{h.l}</p>
              <p className="mt-1 text-sm text-slate-600">{h.d}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <Reveal variant="left" className="rounded-2xl overflow-hidden border-4 border-gold-400/40 shadow-luxury bg-white group">
            <img src={IMG.csbhEarlyBirdV2} alt="Chính sách Early Bird The Legend Đà Nẵng — giá từ 116tr/m², CK 1%, tặng nội thất đến 1.8 tỷ" className="w-full transition-transform duration-700 group-hover:scale-105" />
          </Reveal>
          <Reveal variant="right" delay={120} className="rounded-2xl overflow-hidden border-4 border-gold-400/40 shadow-luxury bg-white group">
            <img src={IMG.csbhPayment} alt="Phương thức thanh toán The Legend Đà Nẵng — 4 lộ trình CK 3%/6%/8%/12%" className="w-full transition-transform duration-700 group-hover:scale-105" />
          </Reveal>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { src: IMG.csbhExtra1, alt: "Chính sách chiết khấu The Legend Đà Nẵng" },
            { src: IMG.csbhExtra2, alt: "Chính sách hỗ trợ vay The Legend Đà Nẵng" },
            { src: IMG.csbhExtra3, alt: "Chính sách quà tặng The Legend Đà Nẵng" },
            { src: IMG.csbhExtra4, alt: "Chính sách thanh toán The Legend Đà Nẵng" },
            { src: IMG.csbhExtra5, alt: "Chính sách cam kết thuê lại The Legend" },
            { src: IMG.csbhExtra6, alt: "Ưu đãi ngân hàng The Legend Đà Nẵng" },
          ].map((c, i) => (
            <Reveal
              key={c.src}
              variant="up"
              delay={i * 60}
              className="rounded-2xl overflow-hidden border border-gold-400/30 shadow-sm bg-white group"
            >
              <img src={c.src} alt={c.alt} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-royal text-white hover:opacity-90 shadow-luxury"
          >
            <a href={DOCS.csbh} target="_blank" rel="noopener noreferrer">
              Tải chính sách bán hàng mới nhất →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}