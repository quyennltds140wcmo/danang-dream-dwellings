import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionTitle } from "./SectionTitle";
import { DOCS, IMG } from "./data";

const products = [
  ["1 phòng ngủ", "308 căn", "40 – 55 m²", "Lâu dài"],
  ["1 phòng ngủ + 1", "88 căn", "58 – 63 m²", "Lâu dài"],
  ["2 phòng ngủ", "308 căn", "73 – 84 m²", "Lâu dài"],
  ["3 phòng ngủ", "88 căn", "112 – 115 m²", "Lâu dài"],
  ["Penthouse", "8 căn", "256 – 415 m²", "Lâu dài"],
  ["Căn hộ dịch vụ", "222 căn", "—", "50 năm"],
  ["Khách sạn", "222 phòng", "—", "50 năm"],
];

const stats = [
  { v: "14", l: "Căn / tầng" },
  { v: "4", l: "Thang máy" },
  { v: "2,2 m", l: "Hành lang" },
  { v: "2", l: "Thang thoát hiểm" },
];

export function FloorPlans() {
  return (
    <section id="mat-bang" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="05 — MẶT BẰNG TẦNG & CĂN"
          title={
            <>
              Layout linh hoạt — <span className="text-gradient-gold">kiến trúc chữ S</span>
            </>
          }
          sub="HBA Singapore thiết kế kiến trúc & nội thất · NDA Landscape (Pháp) thiết kế cảnh quan · Boydens Engineering (Bỉ) MEP chuẩn xanh châu Âu."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden border-4 border-gold-400/40 shadow-luxury bg-white">
              <img src={IMG.layoutFloor} alt="Mặt bằng tầng điển hình chữ S" className="w-full" />
            </div>
            <div className="mt-5 grid grid-cols-4 gap-3">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-royal-900/10 bg-white p-3 text-center"
                >
                  <div className="font-display font-bold text-lg md:text-2xl text-royal-800">
                    {s.v}
                  </div>
                  <div className="text-[11px] md:text-xs text-slate-500 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-royal-900/10 shadow-luxury">
              <div className="bg-gradient-royal px-5 py-4 text-white">
                <p className="text-xs tracking-widest text-gold-300">CƠ CẤU SẢN PHẨM</p>
                <p className="font-display font-semibold">800 căn hộ · 444 phòng</p>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="text-left px-3 py-2 font-medium">Loại</th>
                    <th className="text-left px-3 py-2 font-medium">Số lượng</th>
                    <th className="text-left px-3 py-2 font-medium">Diện tích</th>
                    <th className="text-left px-3 py-2 font-medium">Sở hữu</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p, i) => (
                    <tr key={p[0]} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-3 py-2 font-medium text-royal-950">{p[0]}</td>
                      <td className="px-3 py-2 text-slate-700">{p[1]}</td>
                      <td className="px-3 py-2 text-slate-700">{p[2]}</td>
                      <td className="px-3 py-2">
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                            p[3] === "Lâu dài"
                              ? "bg-gold-500/15 text-gold-600"
                              : "bg-royal-700/10 text-royal-800"
                          }`}
                        >
                          {p[3]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-royal-950 mb-6">
            Layout căn hộ điển hình
          </h3>
          <Tabs defaultValue="1pn" className="w-full">
            <TabsList className="bg-royal-950 text-gold-300">
              <TabsTrigger value="1pn" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-royal-950">
                Căn 1 PN
              </TabsTrigger>
              <TabsTrigger value="2pn" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-royal-950">
                Căn 2 PN
              </TabsTrigger>
              <TabsTrigger value="3pn" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-royal-950">
                Căn 3 PN
              </TabsTrigger>
            </TabsList>
            {[
              { k: "1pn", img: IMG.layout1pn, alt: "Layout căn 1 phòng ngủ" },
              { k: "2pn", img: IMG.layout2pn, alt: "Layout căn 2 phòng ngủ" },
              { k: "3pn", img: IMG.layout3pn, alt: "Layout căn 3 phòng ngủ" },
            ].map((t) => (
              <TabsContent key={t.k} value={t.k} className="mt-4">
                <div className="rounded-2xl border border-royal-900/10 bg-white p-4 md:p-6 shadow-sm">
                  <img src={t.img} alt={t.alt} className="w-full max-h-[560px] object-contain" />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold text-royal-950 font-semibold shadow-gold hover:opacity-90"
          >
            <a href={DOCS.mbCanHo} target="_blank" rel="noopener noreferrer">
              Tải mặt bằng căn hộ điển hình →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}