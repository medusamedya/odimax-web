import Link from "next/link";
import { Check } from "lucide-react";

// Alt kısımdaki tikli özellikleri bir dizi olarak tanımlıyoruz (Kod Bütünlüğü)
const CTA_FEATURES = [
  "Taahhüt yok",
  "Kurulum desteği",
  "Merkezinize özel değerlendirme",
];

export default function CtaSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-brand-neutral overflow-hidden">
      {/* 
        Arka planda ufak bir derinlik katmak için dekoratif element eklenebilir. 
        Görselde düz bir degrade var, biz tam uyum için bu sade yapıyı koruyoruz.
      */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Başlık */}
        <h2 className="font-sans mb-6 font-sans text-4xl md:text-5xl font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
          15 Günlük Demo ile Odimax'ı Kendi Merkeziniz Üzerinden Değerlendirin
        </h2>
        
        {/* Alt Metin */}
        <p className="font-sans text-base md:text-lg text-brand-text max-w-3xl leading-relaxed mb-8">
          Kurulum ve kullanım desteğiyle, sistemin merkezinizin günlük işleyişine nasıl uyum sağlayacağını görün.
        </p>

        {/* Aksiyon Butonu */}
        <Link
          href="/demo"
            className="font-sans flex mb-4 items-center justify-center gap-2 bg-brand-dark hover:bg-brand-dark-hover text-white font-medium py-3.5 px-8 rounded-full transition-colors duration-300 w-full sm:w-auto shadow-md"
        >
          15 Günlük Demo Talep Et
        </Link>

        {/* Özellik Listesi (Checklist) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {CTA_FEATURES.map((feature, index) => (
            <div key={index} className="flex items-center gap-2.5">
              {/* Check ikonu görseldeki gibi kalın ve net */}
              <Check className="w-4 h-4 text-brand-text" strokeWidth={3} />
              <span className="font-sans text-brand-text text-base  font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}