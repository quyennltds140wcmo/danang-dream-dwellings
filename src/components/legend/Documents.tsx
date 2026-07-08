import {
  FolderOpen,
  BookOpen,
  LayoutGrid,
  Sparkles,
  BadgePercent,
  ClipboardCheck,
  FileSignature,
  GraduationCap,
  Compass,
} from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { DOCS } from "./data";

const items = [
  { icon: FolderOpen, t: "Giỏ hàng & PTG", d: "Bảng hàng và phương thức giao dịch", h: DOCS.gioHang },
  { icon: BookOpen, t: "Brochure tổng dự án", d: "Ấn phẩm chính thức từ CĐT", h: DOCS.brochure },
  { icon: LayoutGrid, t: "Mặt bằng căn hộ", d: "1PN · 2PN · 3PN · Penthouse", h: DOCS.mbCanHo },
  { icon: Sparkles, t: "Mặt bằng tiện ích", d: "Bể bơi · gym · sky bar · công viên", h: DOCS.mbTienIch },
  { icon: BadgePercent, t: "Chính sách bán hàng", d: "Bảng giá & ưu đãi mới nhất", h: DOCS.csbh },
  { icon: ClipboardCheck, t: "Danh mục bàn giao", d: "Tiêu chuẩn nội thất chi tiết", h: DOCS.banGiao },
  { icon: FileSignature, t: "Mẫu hợp đồng", d: "HĐMB chính thức từ Sở Xây dựng", h: DOCS.hopDong },
  { icon: GraduationCap, t: "Slide đào tạo", d: "Tài liệu training cho sales", h: DOCS.slide },
  { icon: Compass, t: "Tour VR360°", d: "Tham quan trực tuyến dự án", h: DOCS.vr360 },
];

export function Documents() {
  return (
    <section id="tai-lieu" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="TÀI LIỆU DỰ ÁN"
          title={
            <>
              Trọn bộ hồ sơ — <span className="text-gradient-gold">chỉ một cú nhấp</span>
            </>
          }
          sub="Toàn bộ tài liệu dự án được cập nhật thường xuyên, tải trực tiếp về máy."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <a
              key={it.t}
              href={it.h}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-royal-900/10 bg-white p-5 hover:border-gold-500/60 hover:shadow-luxury transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-royal flex items-center justify-center text-gold-300 shadow-luxury flex-shrink-0">
                <it.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display font-semibold text-royal-950 group-hover:text-gold-600 transition-colors">
                  {it.t} →
                </p>
                <p className="text-sm text-slate-500 mt-0.5">{it.d}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}