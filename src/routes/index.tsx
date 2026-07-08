import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { TopRibbon } from "@/components/legend/TopRibbon";
import { SiteHeader } from "@/components/legend/SiteHeader";
import { VideoHero } from "@/components/legend/VideoHero";
import { HeroStats } from "@/components/legend/HeroStats";
import { Overview } from "@/components/legend/Overview";
import { Location } from "@/components/legend/Location";
import { Amenities } from "@/components/legend/Amenities";
import { Views360 } from "@/components/legend/Views360";
import { FloorPlans } from "@/components/legend/FloorPlans";
import { LeadForm } from "@/components/legend/LeadForm";
import { SalesPolicy } from "@/components/legend/SalesPolicy";
import { Progress } from "@/components/legend/Progress";
import { Legal } from "@/components/legend/Legal";
import { WhyInvest } from "@/components/legend/WhyInvest";
import { Documents } from "@/components/legend/Documents";
import { Gallery } from "@/components/legend/Gallery";
import { Contact } from "@/components/legend/Contact";
import { SiteFooter } from "@/components/legend/SiteFooter";
import { FloatingCTAs } from "@/components/legend/FloatingCTAs";
import { IMG } from "@/components/legend/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Residence",
          name: "The Legend Đà Nẵng",
          description:
            "Tổ hợp căn hộ – khách sạn 5★ – TTTM tại lô A20 Võ Văn Kiệt, ngay chân cầu Rồng.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Lô A20, Võ Văn Kiệt",
            addressLocality: "An Hải Tây, Sơn Trà",
            addressRegion: "Đà Nẵng",
            addressCountry: "VN",
          },
          telephone: "+84973043452",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopRibbon />
      <SiteHeader />
      <main>
        <VideoHero />
        <HeroStats />
        <Overview />
        <Location />
        <Amenities />
        <Views360 />
        <FloorPlans />
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-4xl px-4">
            <LeadForm id="dang-ky-mid" variant="dark" />
          </div>
        </section>
        <SalesPolicy />
        <Progress />
        <Legal />
        <WhyInvest />
        <Documents />
        <Gallery />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingCTAs />
      <Toaster position="top-center" richColors />
    </div>
  );
}
