import { YT_ID } from "./data";

export function VideoHero() {
  const src = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_ID}&controls=0&modestbranding=1&rel=0&playsinline=1&showinfo=0&iv_load_policy=3`;
  return (
    <section id="top" className="relative w-full bg-royal-950 overflow-hidden">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[80vh]">
        <iframe
          title="Video giới thiệu The Legend Đà Nẵng"
          src={src}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ border: 0 }}
        />
        {/* subtle edges so overlay text is legible without blocking center */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-royal-950/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-royal-950/90 to-transparent pointer-events-none" />

        <div className="absolute inset-x-0 bottom-0 px-4 pb-6 md:pb-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-4 md:gap-8 pointer-events-none">
          <div className="text-white">
            <p className="font-display text-2xl md:text-4xl font-bold text-gradient-gold tracking-wider">
              THE LEGEND ĐÀ NẴNG
            </p>
            <p className="text-xs md:text-sm tracking-widest text-gold-300/90">
              VIPICO · ROX SIGNATURE
            </p>
          </div>
          <p className="max-w-md text-center md:text-right text-sm md:text-base text-white/90 italic">
            "Biểu tượng sống bên sông Hàn — mở cửa là phố, bước ra là biển, lên cao là trời."
          </p>
        </div>
      </div>
    </section>
  );
}