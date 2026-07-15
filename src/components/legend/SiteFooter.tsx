import { HOTLINE, HOTLINE_TEL, EMAIL, NAV } from "./data";

export function SiteFooter() {
  return (
    <footer className="bg-royal-950 text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div>
            <p className="font-display font-bold text-2xl text-gradient-gold tracking-wider">THE LEGEND</p>
            <p className="text-xs tracking-[0.25em] text-gold-300/90">ĐÀ NẴNG</p>
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-md leading-relaxed">
            Tổ hợp căn hộ – khách sạn 5★ – TTTM tại lô "kim cương" A20 Võ Văn Kiệt.
            Chủ đầu tư VIPICO, quản lý & phát triển ROX Signature.
          </p>
        </div>

        <div>
          <p className="font-display font-semibold text-gold-300 mb-3">Điều hướng</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-gold-300">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold text-gold-300 mb-3">Liên hệ</p>
          <ul className="space-y-2 text-sm">
            <li>Lô A20, Võ Văn Kiệt, An Hải Tây, Sơn Trà, Đà Nẵng</li>
            <li>
              Hotline:{" "}
              <a href={`tel:${HOTLINE_TEL}`} className="text-gold-300 hover:text-gold-200 font-medium">
                {HOTLINE}
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${EMAIL}`} className="text-gold-300 hover:text-gold-200 break-all">
                {EMAIL}
              </a>
            </li>
            <li>Giờ mở cửa: 8:00 – 20:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50 px-4">
        © 2026 The Legend Đà Nẵng · Thông tin trên website mang tính tham khảo, giá trị pháp lý thuộc HĐMB chính thức.
      </div>
    </footer>
  );
}