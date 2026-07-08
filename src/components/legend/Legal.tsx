import { Button } from "@/components/ui/button";
import { FileCheck2, Landmark } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { DOCS } from "./data";

const docs = [
  { t: "Chủ trương đầu tư & Quy hoạch 1/500", d: "QĐ 2941/QĐ-UBND — Đầy đủ, diện tích đất 11.487 m²." },
  { t: "Giấy phép xây dựng", d: "Số 07/GPXD — 2 tòa tháp 29 tầng + 3 tầng hầm." },
  { t: "Sổ đỏ tổng thể", d: "Công văn 075200 — Có, đang thế chấp tại Ngân hàng MSB." },
  { t: "Chấp thuận bán nhà HTTL", d: "Hợp đồng mua bán số 1818/SXD-QLN đã được cấp." },
  { t: "Thông báo huy động vốn", d: "Số 674/SXD-QLN — Chính thức từ Sở Xây dựng TP. Đà Nẵng." },
];

const banks = [
  { n: "Vietcombank", d: "Hệ thống ổn định, ưu đãi lãi suất tốt theo từng kỳ hạn." },
  { n: "MSB", d: "Linh hoạt trong phê duyệt hồ sơ vay, phù hợp khách tự doanh." },
  { n: "MB Bank", d: "Ưu đãi cho quân đội, giải ngân nhanh cho khách hàng ưu tiên." },
];

export function Legal() {
  return (
    <section id="phap-ly" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="08 — PHÁP LÝ DỰ ÁN"
          title={
            <>
              Pháp lý minh bạch — <span className="text-gradient-gold">sổ hồng lâu dài</span>
            </>
          }
          sub="Được Sở Xây dựng TP. Đà Nẵng chấp thuận huy động vốn từ 21/03/2025. Đã có hợp đồng mua bán chính thức."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {docs.map((d) => (
            <div
              key={d.t}
              className="rounded-2xl border border-royal-900/10 bg-gradient-to-br from-slate-50 to-white p-6 hover:shadow-luxury transition-shadow"
            >
              <FileCheck2 className="w-8 h-8 text-gold-600" />
              <p className="mt-3 font-display font-bold text-royal-950">{d.t}</p>
              <p className="mt-1 text-sm text-slate-600">{d.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-center text-xs md:text-sm tracking-widest text-royal-700 font-semibold">
            3 NGÂN HÀNG ĐỒNG HÀNH
          </p>
          <div className="mt-5 grid md:grid-cols-3 gap-4">
            {banks.map((b) => (
              <div
                key={b.n}
                className="rounded-2xl border-2 border-gold-500/30 bg-white p-6 text-center"
              >
                <Landmark className="w-6 h-6 mx-auto text-royal-700" />
                <p className="mt-2 font-display font-bold text-xl text-royal-950">{b.n}</p>
                <p className="mt-1 text-sm text-slate-600">{b.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline" className="border-royal-800 text-royal-800 hover:bg-royal-800 hover:text-white">
            <a href={DOCS.banGiao} target="_blank" rel="noopener noreferrer">Danh mục bàn giao</a>
          </Button>
          <Button asChild variant="outline" className="border-royal-800 text-royal-800 hover:bg-royal-800 hover:text-white">
            <a href={DOCS.hopDong} target="_blank" rel="noopener noreferrer">Mẫu hợp đồng mua bán</a>
          </Button>
        </div>
      </div>
    </section>
  );
}