import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";
import { DOCS, IMG } from "./data";

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
          {highlights.map((h) => (
            <div
              key={h.l}
              className="relative rounded-2xl border border-gold-500/30 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm hover:shadow-luxury transition-shadow"
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold text-gradient-gold leading-none">
                {h.v}
              </div>
              <p className="mt-2 font-semibold text-royal-950">{h.l}</p>
              <p className="mt-1 text-sm text-slate-600">{h.d}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-2xl overflow-hidden border-4 border-gold-400/40 shadow-luxury bg-white">
            <img src={IMG.csbh1} alt="Bảng chính sách bán hàng The Legend Đà Nẵng" className="w-full" />
          </div>
          <div className="rounded-2xl overflow-hidden border-4 border-gold-400/40 shadow-luxury bg-white">
            <img src={IMG.csbh2} alt="Lịch thanh toán The Legend Đà Nẵng" className="w-full" />
          </div>
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