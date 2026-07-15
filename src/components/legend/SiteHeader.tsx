import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV } from "./data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-royal-950/90 backdrop-blur-md shadow-luxury"
          : "bg-royal-950/70 backdrop-blur"
      }`}
      style={{ backgroundColor: scrolled ? "rgba(6,21,74,0.92)" : "rgba(6,21,74,0.75)" }}
    >
      <div className="mx-auto max-w-7xl px-4 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <div className="leading-tight">
            <p className="font-display font-bold text-xl md:text-2xl text-gradient-gold tracking-wider">
              THE LEGEND
            </p>
            <p className="text-[10px] md:text-xs tracking-[0.25em] text-gold-300/90">
              ĐÀ NẴNG
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-2 text-sm text-white/85 hover:text-gold-300 transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden sm:inline-flex bg-gradient-gold text-royal-950 font-semibold hover:opacity-90 shadow-gold"
          >
            <a href="#dang-ky">Nhận báo giá</a>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-gold-300"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold-400/20 bg-royal-950/95">
          <div className="px-4 py-3 grid grid-cols-2 gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-white/90 hover:text-gold-300"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}