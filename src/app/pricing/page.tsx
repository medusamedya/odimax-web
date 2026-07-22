import { Metadata } from "next";
import InnerHero from "../components/general/InnerHero";
import PricingHero from "../components/pricing/PricingHero";
import PricingCards from "../components/pricing/PricingCards";
import PricingFaq from "../components/pricing/PricingFaq";
// Kendi klasör yapına göre import yollarını güncellemelisin

// SEO ve Meta etiketleri için Next.js Metadata kullanımı
export const metadata: Metadata = {
  title: "Fiyatlandırma | Odimax",
  description: "Odimax işitme merkezi yönetim sistemi fiyatlandırma planları ve paket detayları.",
};

export default function PricingPage() {
  return (
    <>
      {/* 1. Tüm sayfalarda standart olan üst başlık (Hero) alanı */}
      <InnerHero 
        title="Fiyatlandırma" 
        description="Merkezinizin operasyonel ihtiyaçlarına en uygun yönetim planını seçin."
        breadcrumbs={[
          { label: "Fiyatlandırma", href: "/pricing" }
        ]}
      />

      {/* 2. Özel karanlık arka planı ve sağdaki özet kartıyla fiyatlandırma karşılama alanı */}
      <PricingHero />

      {/* 3. 3'lü fiyatlandırma paket kartları (Aylık, Yıllık, Özel) */}
      <PricingCards />

      {/* 4. Sadece fiyatlandırmaya özel hazırladığımız SSS bölümü */}
      <PricingFaq />
    </>
  );
}