import { Button } from "@/components/ui/button";
import { Building2, Hotel, ShieldCheck, Home, Sparkles, Globe2 } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { DOCS } from "./data";

const rows: [string, string][] = [
  ["Tên dự án", "The Legend Đà Nẵng"],
  ["Chủ đầu tư", "Công ty TNHH MTV VIPICO"],
  ["Quản lý & phát triển", "ROX Signature"],
  ["Địa chỉ", "Lô A20, Võ Văn Kiệt, P. An Hải Tây, Q. Sơn Trà, TP. Đà Nẵng"],
  ["Tổng diện tích", "~1,2 ha (11.487 m²)"],
  ["Loại hình", "Căn hộ cao cấp · Khách sạn 5★ · TTTM"],
  ["Tiến độ", "Khởi công Q1/2025 — Bàn giao Q4/2027"],
  ["Pháp lý", "1/500, GPXD, sổ đỏ tổng, HĐMB Sở Xây dựng cấp"],
];

const badges = [
  { icon: Home, label: "Sổ hồng lâu dài" },
  { icon: ShieldCheck, label: "Ngân hàng bảo lãnh" },
  { icon: Sparkles, label: "Full nội thất cao cấp" },
  { icon: Globe2, label: "Nhận khách nước ngoài" },
];

export function Overview() {
  return (
    <section id="tong-quan" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="01 — THÔNG TIN TỔNG QUAN"
          title={
            <>
              Kiệt tác kiến trúc giữa <span className="text-gradient-gold">tâm điểm Đà Nẵng</span>
            </>
          }
          sub="Do VIPICO đầu tư, ROX Signature vận hành – lấy cảm hứng từ những đường cong sóng biển Mỹ Khê, mỗi căn hộ đều sở hữu ban công riêng với tầm nhìn sông Hàn hoặc biển Đông."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-slate-700 leading-relaxed">
            <p>
              The Legend Đà Nẵng là dự án bất động sản cao cấp phát triển bởi <b>VIPICO</b>,
              quản lý & phát triển bởi <b>ROX Signature</b> — tổ hợp căn hộ – khách
              sạn – thương mại nhằm tạo nên biểu tượng sống sang trọng và bền vững
              tại trung tâm Đà Nẵng.
            </p>
            <p>
              Dự án tọa lạc tại vị trí "kim cương" ven sông Hàn, kết hợp thiết kế
              hiện đại và tiện ích 5 sao, hướng đến cộng đồng tinh hoa và du lịch
              cao cấp.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl border border-royal-900/10 bg-gradient-to-br from-royal-50 to-white p-6 shadow-sm">
                <Building2 className="w-8 h-8 text-royal-700" />
                <p className="mt-3 font-display font-bold text-royal-950">
                  Tháp Căn hộ
                </p>
                <p className="text-sm text-slate-600">
                  29 tầng nổi + 3 tầng hầm — ~800 căn hộ thương mại
                </p>
              </div>
              <div className="rounded-2xl border border-royal-900/10 bg-gradient-to-br from-royal-50 to-white p-6 shadow-sm">
                <Hotel className="w-8 h-8 text-royal-700" />
                <p className="mt-3 font-display font-bold text-royal-950">
                  Tháp Khách sạn
                </p>
                <p className="text-sm text-slate-600">
                  25 tầng nổi + 3 tầng hầm — 444 phòng khách sạn & căn hộ dịch vụ
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-3 py-1.5 text-sm text-royal-900 font-medium"
                >
                  <b.icon className="w-4 h-4 text-gold-600" /> {b.label}
                </span>
              ))}
            </div>

            <Button
              asChild
              className="mt-4 bg-gradient-royal text-white hover:opacity-90"
            >
              <a href={DOCS.brochure} target="_blank" rel="noopener noreferrer">
                Xem brochure tổng dự án →
              </a>
            </Button>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-royal-900/10 shadow-luxury">
              <div className="bg-gradient-royal px-5 py-4 text-white">
                <p className="text-xs tracking-widest text-gold-300">HỒ SƠ DỰ ÁN</p>
                <p className="font-display font-semibold">Thông số chính</p>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {rows.map(([k, v], i) => (
                    <tr key={k} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                      <td className="align-top px-4 py-3 text-slate-500 w-40 font-medium">
                        {k}
                      </td>
                      <td className="px-4 py-3 text-royal-950 font-medium">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}