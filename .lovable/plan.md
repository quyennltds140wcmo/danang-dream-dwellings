
## Mục tiêu
Landing page 1 trang cho **The Legend Đà Nẵng** — kết hợp dữ liệu & hình ảnh từ 2 nguồn (thelegendanang.com.vn + danang-dream-homes.lovable.app) và các tài liệu/hotline user cung cấp. Palette **xanh royal gradient + gold**, font **sans-serif dễ đọc**, có logo thương hiệu và **video YouTube tự chạy** ở đầu trang.

## Brand & design direction
- Logo: upload file `514068029_...jpg` (nền xanh royal, biểu tượng V vàng, chữ "THE LEGEND DA NANG") → lưu qua `lovable-assets` thành `src/assets/legend-logo.jpg.asset.json`. Hiển thị dạng vòng tròn ~64–72px trên header sticky (dùng `object-cover rounded-full ring-1 ring-gold-400`) và ~140–180px trong footer + section liên hệ.
- Palette lấy từ logo:
  - `--royal-900: #0b1f5c`, `--royal-800: #12308a`, `--royal-700: #1a3fb3`, `--royal-600: #2a55d6` (xanh royal chính)
  - `--gold-300: #f0d891`, `--gold-400: #e6c46a`, `--gold-500: #c9a24b`, `--gold-600: #a5822d`
  - `--gradient-royal: linear-gradient(135deg, var(--royal-900), var(--royal-700))`
  - `--gradient-gold: linear-gradient(135deg, var(--gold-500), var(--gold-300))`
  - `--shadow-luxury: 0 20px 60px -20px color-mix(in oklab, var(--royal-900) 45%, transparent)`
  - Đăng ký trong `@theme inline` để dùng `bg-royal-800`, `text-gold-400`, `bg-gradient-royal`.
- Font: **Sora** (heading) + **Be Vietnam Pro** (body), load qua `<link>` Google Fonts trong `src/routes/__root.tsx`, map vào `@theme` (`--font-display`, `--font-sans`).

## Cấu trúc (single route `/`, các section id để anchor)

```
Top ribbon — "🎆 Ưu đãi 07/2026: CK 8% + gói nội thất" • Hotline 0973.04.34.52
Header sticky — Logo tròn + wordmark "THE LEGEND ĐÀ NẴNG" gold, nav 9 mục, CTA "Nhận báo giá"

0. VIDEO HERO (mới)
   - Section full-width, aspect 16:9 (desktop) / 9:16 giữ tỉ lệ (mobile clamp min-h)
   - Nhúng YouTube video `YljWgZ00gps` bằng iframe:
       src="https://www.youtube.com/embed/YljWgZ00gps?autoplay=1&mute=1&loop=1&playlist=YljWgZ00gps&controls=0&modestbranding=1&rel=0&playsinline=1"
       allow="autoplay; encrypted-media; picture-in-picture"
   - Ghi chú kỹ thuật: bắt buộc mute=1 để browser cho autoplay; loop=1 cần playlist=<same id>. Overlay gradient royal mảnh ở 4 mép để tag line + logo (dạng badge tròn 96px) nổi lên; không che tâm video.
   - Overlay text: logo tròn 96px + wordmark gold + tagline "Biểu tượng sống bên sông Hàn — VIPICO · ROX Signature".

1. Hero số liệu (ngay dưới video)
   - Ảnh tòa tháp (hero-tower) hoặc phối cảnh 3D làm nền phụ, overlay royal
   - 4 stat gold: 800+ căn / 29 tầng / 5★ khách sạn / 1.350m² xanh
   - CTA: "Nhận bảng giá" + "Xem tour VR360°"

2. Thông tin tổng quan (#tong-quan)
   - Bảng key–value: Tên • CĐT Vipico • Quản lý & phát triển ROX Signature • Địa chỉ A20 Võ Văn Kiệt, An Hải Tây, Sơn Trà, Đà Nẵng • Tổng diện tích ~1.2 ha • Tiến độ Q1/2025–Q4/2027 • Pháp lý
   - 2 card "2 Tháp": Tháp Căn hộ 29 nổi + 3 hầm | Tháp Khách sạn 25 nổi + 3 hầm
   - Badges: Sổ hồng lâu dài / NH bảo lãnh / Full nội thất / Nhận khách nước ngoài
   - Nút "Xem brochure tổng dự án" → Canva DAGrgTWJQCg

3. Vị trí (#vi-tri) — ảnh bản đồ + 6 mốc khoảng cách + slogan "cận giang – cận hải – cận thị"

4. Tiện ích (#tien-ich) — grid 12 card icon, chia nhóm (Tầng 4-5 / Rooftop 29 / KS 1-3 / Nội khu / Ngoại khu). CTA "Xem mặt bằng tiện ích" → Drive folder #2

5. Tầm view 360° (#view) — 4 card view + nút lớn "Trải nghiệm VR360°" → link user

6. Mặt bằng tầng & căn (#mat-bang)
   - Ảnh floor plan chữ S + 4 chỉ số (14 căn/tầng, 4 thang máy, hành lang 2.2m, 2 thang thoát hiểm)
   - Bảng cơ cấu sản phẩm (số liệu user):
     1PN 308 căn · 40–55m² · lâu dài
     1PN+1 88 căn · 58–63m² · lâu dài
     2PN 308 căn · 73–84m² · lâu dài
     3PN 88 căn · 112–115m² · lâu dài
     Penthouse 8 căn · 256–415m² · lâu dài
     Căn hộ dịch vụ 222 căn · 50 năm
     Khách sạn 222 phòng · 50 năm
   - Tabs 3 layout (1PN/2PN/3PN) — ảnh từ thelegendanang
   - CTA "Tải mặt bằng căn hộ điển hình" → Drive folder #1

7. Chính sách bán hàng (#csbh) — 6 số liệu highlight + ảnh CSBH + lịch thanh toán + CTA Drive folder #3

8. Tiến độ (#tien-do) — timeline dọc 5 mốc Q1/25 → Q4/27 + ảnh công trường + note Semi Top-Down

9. Pháp lý (#phap-ly) — 5 card giấy tờ + 3 ngân hàng VCB/MSB/MB Bank + CTA Drive folder #4 & #5

10. Lý do đầu tư — banner níu chân, 3 khối, quote gold "Mở cửa là phố, bước ra là biển, lên cao là trời"

11. Tài liệu dự án (#tai-lieu) — grid 9 card link ra ngoài:
    Giỏ hàng & PTG • Brochure tổng • Mặt bằng căn hộ • Mặt bằng tiện ích • Chính sách bán hàng • Danh mục bàn giao • Mẫu hợp đồng • Slide đào tạo • Tour VR360
    (dùng đúng URL user cung cấp, mở tab mới rel="noopener")

12. Thư viện hình ảnh — grid ảnh từ 2 nguồn

13. Form đăng ký (2 lần: sau section 6 và trước Liên hệ)
    - Họ tên, SĐT (regex VN `^(0|\+84)(3|5|7|8|9)\d{8}$`), Nhu cầu, Loại căn
    - Lưu localStorage `legend_leads` + toast `sonner`, không backend

14. Liên hệ (#lien-he)
    - Logo lớn + Nhà mẫu A20 Võ Văn Kiệt, An Hải Tây, Sơn Trà, Đà Nẵng
    - Hotline **0973.04.34.52** (`tel:`) · Email **truongthaobdsdanang@gmail.com** (`mailto:`) · Zalo `https://zalo.me/0973043452`
    - Giờ 8:00–20:00

Footer — Logo, disclaimer, quick links, © 2026
Sticky floating buttons (mobile & desktop, bottom-right): Gọi / Zalo / Đăng ký
```

## Ảnh (nhúng URL trực tiếp, không upload lại — trừ logo)
- Logo: upload qua `lovable-assets` → `src/assets/legend-logo.jpg.asset.json`
- danang-dream-homes.lovable.app/assets/: hero-tower, amenity-pool, view-river, view-beach, interior-living, progress-site, floor-plan, location-map + 2 ảnh CSBH `__l5e/assets-v1/...`
- thelegendanang.com.vn/wp-content/uploads/: phối cảnh 3D `the-legend-city.png`, layout tầng chữ S, layout 1PN/2PN/3PN, ảnh pháp lý, ảnh tiến độ, ảnh CSBH `CSBH_T10-...`, `69-2048x1153.jpg`, `Untitled-1.jpg`

## Chi tiết kỹ thuật
- Route duy nhất `src/routes/index.tsx` — thay placeholder.
- Components trong `src/components/legend/`: `TopRibbon`, `SiteHeader`, `VideoHero`, `HeroStats`, `Overview`, `Location`, `Amenities`, `Views360`, `FloorPlans`, `SalesPolicy`, `Progress`, `Legal`, `WhyInvest`, `Documents`, `Gallery`, `LeadForm`, `Contact`, `SiteFooter`, `FloatingCTAs`.
- Head/SEO: title "The Legend Đà Nẵng — Căn hộ cao cấp ven sông Hàn | VIPICO", description ≤160 ký tự, og:image = hero-tower URL, twitter summary_large_image, JSON-LD `Residence` (địa chỉ, hotline). Canonical `/`.
- Dependencies: `bun add framer-motion` (nếu chưa có).
- Motion nhẹ fade-up khi vào viewport, không lạm dụng.
- Accessibility: alt tiếng Việt, contrast gold/royal ≥ AA, focus ring visible. Video iframe có `title="Video giới thiệu The Legend Đà Nẵng"`; kèm nút "Bật tiếng" tùy chọn để user unmute.

## Không làm
- Không bật Lovable Cloud.
- Không tạo route con.
- Không upload lại ảnh dự án vào assets (giữ URL nguồn).
- Không autoplay có tiếng (browser sẽ chặn).
