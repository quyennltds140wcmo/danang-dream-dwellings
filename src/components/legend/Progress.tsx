import { SectionTitle } from "./SectionTitle";
import { IMG } from "./data";

const timeline = [
  { q: "Q1 / 2025", t: "Khởi công phần hầm", d: "Đào 3 tầng hầm B1-B3, thi công móng bè cọc khoan nhồi." },
  { q: "Q2 / 2025", t: "Cất nóc phần thân", d: "Đổ bê tông sàn tầng 1-10, lắp dựng cột thép." },
  { q: "Q3 / 2026", t: "Hoàn thiện thô 2 tòa tháp", d: "Đang triển khai lắp kính mặt dựng, hoàn thiện phần thân." },
  { q: "Q2 / 2027", t: "Hoàn thiện nội thất", d: "Lắp đặt hệ thống M&E, thiết bị vệ sinh, sàn gỗ." },
  { q: "Q4 / 2027", t: "Bàn giao chính thức", d: "Bàn giao căn hộ full nội thất, khách sạn 5 sao vận hành." },
];

export function Progress() {
  return (
    <section id="tien-do" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="07 — TIẾN ĐỘ XÂY DỰNG"
          title={
            <>
              Đúng tiến độ — <span className="text-gradient-gold">vượt cam kết</span>
            </>
          }
          sub="Công nghệ Semi Top-Down hiện đại — thi công phần hầm & phần thân đồng thời. Cập nhật 07/2026: hai tòa tháp đã cất nóc tầng 22, đang lắp kính mặt dựng."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border-4 border-gold-400/40 shadow-luxury">
              <img src={IMG.progress} alt="Tiến độ thi công The Legend Đà Nẵng" className="w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-royal-900/10">
                <img src={IMG.progress2} alt="Công trường The Legend Đà Nẵng" className="w-full h-40 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-royal-900/10">
                <img src={IMG.progress3} alt="Cất nóc The Legend Đà Nẵng" className="w-full h-40 object-cover" />
              </div>
            </div>
          </div>

          <ol className="relative border-l-2 border-gold-400/50 ml-3 space-y-8">
            {timeline.map((s, i) => (
              <li key={s.q} className="pl-8 relative">
                <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-gradient-gold text-royal-950 text-xs font-bold flex items-center justify-center shadow-gold">
                  {i + 1}
                </span>
                <p className="text-xs tracking-widest text-gold-600 font-semibold">{s.q}</p>
                <p className="font-display font-bold text-xl text-royal-950 mt-1">{s.t}</p>
                <p className="text-sm text-slate-600 mt-1">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}