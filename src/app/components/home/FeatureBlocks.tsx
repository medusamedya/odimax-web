"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

// Video yerine image yolları eklendi. (Kendi public klasöründeki yollarla güncelleyebilirsin)
const FEATURES = [
  {
    id: "kasa-kontrol",
    tag: "FİNANS YÖNETİMİ",
    title: "Kasa Kontrolü Tek Ekranda",
    description:
      "Günlük gelir, gider ve toplam bakiyenizi anlık olarak görün. Nakit ve banka hareketlerini ayrı ayrı takip edin.",
    benefit: "Merkezin finansal durumu daha net görünür.",
    image: "/home/01Kasa.webp", 
  },
  {
    id: "cihaz-stok",
    tag: "STOK & ENVANTER",
    title: "Cihaz ve Stok Süreçleri Karışmasın",
    description:
      "İşitme cihazlarını marka, model, seri numarası ve GTIN ile takip edin. Stok giriş-çıkışları kolaylıkla izlensin.",
    benefit: "Hangi cihazın nerede olduğunu yönetirsiniz.",
    image: "/home/02Stok.webp", 
  },
  {
    id: "satis-sureci",
    tag: "SATIŞ & OPERASYON",
    title: "Satış Süreci Eksiksiz İlerlesin",
    description:
      "Satışları hasta, cihaz, kulak yönü, iskonto ve ödeme bilgileriyle birlikte kaydedin. ",
    benefit: "Satış sonrası geriye dönük kontrol kolaylaşır.",
    image: "/home/03Satıs.webp", 
  },
  {
    id: "hasta-bilgileri",
    tag: "HASTA KARTLARI",
    title: "Hasta Bilgileri Kişilere Bağlı Kalmasın",
    description:
      "İletişim bilgileri, cihaz geçmişi, randevular ve satışlar tek hasta kartında tutulur. ",
    benefit: "Hasta geçmişi asla kaybolmaz.",
    image: "/home/04Hasta.webp", 
  },
  {
    id: "randevu-takip",
    tag: "TAKVİM & PLANLAMA",
    title: "Randevu ve Takip Süreci Aksamadan İlerlesin",
    description:
      "Kontrol görüşmelerini ve hatırlatmalarınızı takvim üzerinden planlayın. ",
    benefit: "Randevu karışıklıkları azalır, takip kolaylaşır.",
    image: "/home/05Randevu.webp", 
  },
];

export default function FeatureBlocks() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-12 md:py-16 lg:py-18 bg-brand-neutral font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ORTALANMIŞ BAŞLIK VE ROZET */}
        <div className=" mx-auto text-center mb-4 md:mb-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-normal md:tracking-widest uppercase text-sm ">
              GÜNLÜK OPERASYONLAR
            </span>
          </div>
         
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            İşitme Merkezinizde Dağınık İlerleyen Süreçleri Tek Panelde Düzenleyin
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* SOL KISIM: Sekmeler */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {FEATURES.map((feature, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={feature.id}
                  onClick={() => handleTabClick(index)}
                  className={`relative cursor-pointer pl-3 md:pl-6 py-3 md:py-5 pr-0 md:pr-4 rounded-xl transition-all duration-500 ${
                    isActive 
                      ? "bg-white shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)]" 
                      : "hover:bg-black/[0.02]"
                  }`}
                >
                  <div 
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full bg-brand-blue transition-all duration-500 ${
                      isActive ? "h-1/2 opacity-100" : "h-0 opacity-0"
                    }`}
                  ></div>

                  <h3 
                    className={`text-base md:text-xl font-bold transition-colors duration-300 mb-2 ${
                      isActive ? "text-brand-dark" : "text-brand-dark/50"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-brand-text/80 text-base leading-normal md:leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <div className="mt-1 md:mt-4 py-0.5">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="text-brand-blue w-4 h-4 flex-shrink-0 mt-1" strokeWidth={2.5} />
                          <p className="text-sm md:text-base text-brand-dark/80 font-medium leading-relaxed">
                            {feature.benefit}
                          </p>
                        </div>
                      </div>

                      {/* 
                        YENİ EKLENEN KISIM: MOBİL VE TABLET GÖRSELİ (Akordeon İçi) 
                        lg:hidden ile masaüstünde gizlenir. Sadece aktif sekmede render olur.
                      */}
                      <div className="block lg:hidden mt-2 relative w-full rounded-2xl overflow-hidden bg-brand-light shadow-sm border-1 border-brand-dark/20">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={800}
                          height={600}
                          className="w-full h-auto object-contain animate-[fadeIn_0.5s_ease-in-out]"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/5 to-transparent pointer-events-none"></div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 
            SAĞ KISIM: Görsel Alanı (SADECE MASAÜSTÜ) 
            hidden lg:block eklendi. Mobil ve tablette gizlenecek.
          */}
          <div className="hidden lg:block lg:col-span-7 sticky top-24">
            <div className="relative w-full rounded-[1.5rem] overflow-hidden bg-brand-light shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-2 border-brand-dark/50">
              <Image
                key={activeIndex}
                src={FEATURES[activeIndex].image}
                alt={FEATURES[activeIndex].title}
                width={1200}
                height={900}
                className="w-full h-auto object-contain animate-[fadeIn_0.5s_ease-in-out]"
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/5 to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Animasyonlar */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0.6; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </section>
  );
}