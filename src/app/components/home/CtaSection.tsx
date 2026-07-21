import Link from "next/link";
import { Check } from "lucide-react";
import SimpleFeatures from "./SimpleFeatures";

// Alt kısımdaki tikli özellikleri bir dizi olarak tanımlıyoruz (Kod Bütünlüğü)
const CTA_FEATURES = [
  "Taahhüt yok",
  "Kurulum desteği",
  "Merkezinize özel değerlendirme",
];

export default function CtaSection() {
  return (
    // Arka planı marka renklerimizin koyu ve premium tonlarıyla degrade yaptık
    <section className="relative py-20 lg:py-24 bg-gradient-to-br from-brand-dark via-[#1a2642] to-brand-blue overflow-hidden">
      
      {/* 
        Arka planda modern bir SaaS hissiyatı vermek için dekoratif parlamalar (glow effect).
        mix-blend-overlay ve blur ile zemine çok yumuşak bir derinlik katıyoruz.
      */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6fe7ff] rounded-full mix-blend-overlay filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue rounded-full mix-blend-overlay filter blur-[128px] opacity-40"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 flex flex-col items-center text-center">
        
        {/* Başlık - Beyaz ve hafif gölgeli (drop-shadow) yapıldı */}
        <h2 className="font-sans mb-6 text-4xl md:text-5xl font-semibold tracking-wide leading-tight text-white drop-shadow-sm">
          15 Günlük Demo ile Odimax'ı Kendi Merkeziniz Üzerinden Değerlendirin
        </h2>
        
        {/* Alt Metin - Okunabilirliği artırmak için text-white/80 kullanıldı */}
        <p className="font-sans text-base md:text-lg text-white/80 max-w-3xl leading-relaxed mb-10">
          Kurulum ve kullanım desteğiyle, sistemin merkezinizin günlük işleyişine nasıl uyum sağlayacağını görün.
        </p>

        {/* 
          Aksiyon Butonu - Zemin koyu olduğu için butonu beyaz, metni koyu yaptık. 
          Hover durumunda hafifçe büyüyerek (scale-105) tıklamaya teşvik ediyor.
        */}
        <Link
          href="/demo"
          className="font-sans flex mb-10 items-center justify-center gap-2 bg-white hover:bg-gray-50 text-brand-dark font-bold py-4 px-10 rounded-full transition-all duration-300 w-full sm:w-auto shadow-[0_10px_30px_rgba(111,231,255,0.2)] hover:shadow-[0_15px_40px_rgba(111,231,255,0.4)] hover:scale-105"
        >
          15 Günlük Demo Talep Et
        </Link>

        {/* Özellik Listesi (Checklist) - Metinler beyaz, ikonlar marka vurgusu için açık mavi (#6fe7ff) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {CTA_FEATURES.map((feature, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <Check className="w-5 h-5 text-[#6fe7ff]" strokeWidth={3} />
              <span className="font-sans text-white/90 text-base font-medium tracking-wide">
                {feature}
              </span>
            </div>
          ))}
        </div>

      </div>
      
      {/* 
        SimpleFeatures bileşeni şeffaf (bg-transparent) bir yapıya sahipse, 
        bu yeni degrade zeminin üzerinde de doğrudan çok şık ve tutarlı duracaktır.
      */}
      <SimpleFeatures />
    </section>
  );
}