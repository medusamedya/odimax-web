import AboutSection from "./components/home/AboutSection";
import CtaSection from "./components/home/CtaSection";
import FaqSection from "./components/home/FaqSection";
import FeatureBlocks from "./components/home/FeatureBlocks";
import Hero from "./components/home/Hero";
import InfoMarquee from "./components/home/InfoMarquee";
import LogoMarquee from "./components/home/LogoMarquee";
import ModulesSection from "./components/home/ModulesSection";
import SimpleFeatures from "./components/home/SimpleFeatures";
import StepsSlider from "./components/home/StepsSlider";
import TestimonialsSection from "./components/home/TestimonialsSection";
import VideoSliderSection from "./components/home/VideoSliderSection";
import PricingCards from "./components/pricing/PricingCards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odimax | İşitme Cihazı Merkezleri için Yönetim Sistemi",
  description: "Hasta, randevu, stok, ÜTS, finans ve raporlama süreçlerini Odimax ile tek panelden yönetin.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TestimonialsSection />
      <ModulesSection />
      <FeatureBlocks />
      <InfoMarquee />
      <VideoSliderSection />
      <StepsSlider />

      <FaqSection />
      <PricingCards />
      <CtaSection />

      {/* Diğer section'lar buraya gelecek */}
    </>
  );
}
