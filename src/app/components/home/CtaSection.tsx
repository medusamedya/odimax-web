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
    // Dış katman: Sayfanın genel rengi.
    // Alt/üst boşlukları (padding) çok abartmamak ve kopukluk hissi vermemek için py-12 md:py-16 kullanıyoruz.
    <section className="py-8 md:py-8 lg:py-12  bg-brand-neutral font-sans">
      <div className=" mx-auto px-8 sm:px-12 lg:px-24">
        {/* 
          Yüzen Kutu (Floating Card): 
          İstenildiği gibi rounded-2xl kullanıldı. Gölge (shadow-xl) ile arka plandan hafifçe ayrıştırıldı.
          Gereksiz boşlukları kısmak için iç padding değerleri (pt-12 md:pt-16) optimize edildi.
        */}
        <div className="relative bg-gradient-to-br from-brand-dark via-[#1a2642] to-brand-blue rounded-2xl shadow-xl overflow-hidden ">
          {/* Glow Efektleri (Sadece kartın içinde parlar, dışarı taşmaz) */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6fe7ff] rounded-full mix-blend-overlay filter blur-[128px] opacity-20 animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue rounded-full mix-blend-overlay filter blur-[128px] opacity-40 pointer-events-none"></div>

          {/* İçerik Alanı - Boşluklar (margin/padding) daha sıkı ve kompakt hale getirildi */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 md:pt-16 pb-4 md:pb-10 flex flex-col items-center text-center">
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight text-white drop-shadow-sm pb-1">
              15 Günlük Demo ile Odimax'ı Kendi Merkeziniz Üzerinden
              Değerlendirin
            </h2>

            <p className="text-base  md:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
              Kurulum ve kullanım desteğiyle, sistemin merkezinizin günlük
              işleyişine nasıl uyum sağlayacağını görün.
            </p>

            <Link
              href="/demo"
              className="flex mb-4 md:mb-8  text-md items-center justify-center gap-2 bg-white hover:bg-gray-50 text-brand-dark font-bold py-2.5 px-4 md:py-3.5 md:px-8 rounded-full transition-all duration-300 w-full sm:w-auto shadow-[0_10px_30px_rgba(111,231,255,0.2)] hover:shadow-[0_15px_40px_rgba(111,231,255,0.4)] hover:scale-105"
            >
              15 Günlük Demo Talep Et
            </Link>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
              {CTA_FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center gap-1 md:gap-2.5">
                  <Check
                    className="w-4 h-4 md:w-5 md:h-5 text-[#6fe7ff]"
                    strokeWidth={3}
                  />
                  <span className="text-white/90 text-[14px] font-medium tracking-normal md:tracking-wide">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SimpleFeatures Bileşeni - İnce bir ayırıcı çizgi ile kartın altına entegre edildi */}
          {/* Mobilde gizlemek için 'hidden', tablet ve üzerinde göstermek için 'md:block' eklendi */}
          <div className="hidden md:block relative z-10 px-4 sm:px-6 pt-0 sm:pt-8 pb-8 md:pb-12">
            <SimpleFeatures />
          </div>
        </div>
      </div>
    </section>
  );
}
