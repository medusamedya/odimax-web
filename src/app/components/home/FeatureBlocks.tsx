"use client";

import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    id: "kasa-kontrol",
    tag: "FİNANS YÖNETİMİ",
    title: "Kasa Kontrolü Tek Ekranda",
    description:
      "Günlük gelir, gider ve toplam bakiyenizi anlık olarak görün. Nakit ve banka hareketlerini ayrı ayrı takip edin. Sürpriz yok, belirsizlik yok.",
    benefit: "Gün sonunda merkezin finansal durumu daha net görünür.",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: "cihaz-stok",
    tag: "STOK & ENVANTER",
    title: "Cihaz ve Stok Süreçleri Karışmasın",
    description:
      "İşitme cihazlarını marka, model, seri numarası ve GTIN ile takip edin. Stok giriş-çıkışları, satış ve ÜTS süreçleri aynı akışta izlensin.",
    benefit: "Hangi cihazın nerede olduğunu güvenli şekilde yönetirsiniz.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "satis-sureci",
    tag: "SATIŞ & OPERASYON",
    title: "Satış Süreci Eksiksiz İlerlesin",
    description:
      "Satışları hasta, cihaz, kulak yönü, iskonto ve ödeme bilgileriyle birlikte kaydedin. Geriye dönük kontrol merkez hafızasında korunsun.",
    benefit: "Satış sonrası geriye dönük kontrol kolaylaşır.",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: "hasta-bilgileri",
    tag: "HASTA KARTLARI",
    title: "Hasta Bilgileri Kişilere Bağlı Kalmasın",
    description:
      "İletişim bilgileri, cihaz geçmişi, randevular ve satışlar tek hasta kartında tutulur. Personel değişse bile veri kaybolmaz.",
    benefit: "Personel değişse bile hasta geçmişi kaybolmaz.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "randevu-takip",
    tag: "TAKVİM & PLANLAMA",
    title: "Randevu ve Takip Süreci Aksamadan İlerlesin",
    description:
      "Kontrol görüşmelerini takvim üzerinden planlayın. Hatırlatma akışlarını merkezin standart işleyişine zahmetsizce dahil edin.",
    benefit: "Randevu karışıklıkları azalır, takip işleri gözden kaçmaz.",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
];

const TAB_DURATION = 6000;

export default function FeatureBlocks() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, TAB_DURATION);

    return () => clearTimeout(timerId);
  }, [activeIndex]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-24 lg:py-32 bg-brand-neutral font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16  max-w-3xl">
          <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-sm mb-4">
            GÜNLÜK OPERASYONLAR
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight pb-2 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            İşitme Merkezinizde Dağınık İlerleyen Süreçleri Tek Panelde Düzenleyin
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* SOL KISIM: Sekmeler */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {FEATURES.map((feature, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={feature.id}
                  onClick={() => handleTabClick(index)}
                  className={`relative cursor-pointer pl-6 py-5 pr-4 rounded-xl transition-all duration-500 ${
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
                    className={`text-xl font-bold transition-colors duration-300 mb-2 ${
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
                      <p className="text-brand-text/80 text-base leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <div className="mt-4 border-l-2 border-brand-blue pl-4 py-0.5">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="text-brand-blue w-4 h-4 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <p className="text-sm text-brand-dark/80 font-medium leading-relaxed">
                            {feature.benefit}
                          </p>
                        </div>
                      </div>
                      
                      {/* GÜNCELLENEN CSS İLERLEME ÇUBUĞU (PROGRESS BAR) */}
                      <div className="mt-5 h-1 w-full bg-brand-neutral rounded-full overflow-hidden">
                        {isActive && (
                          <div 
                            // w-0 ile başlıyoruz ki ilk render anında dolu görünmesin
                            className="h-full bg-brand-blue rounded-full w-0"
                            key={`progress-${activeIndex}`}
                            style={{
                              animation: `fillProgress ${TAB_DURATION}ms linear forwards`
                            }}
                          ></div>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SAĞ KISIM: Video Alanı */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-brand-dark shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ">
              
              <video
                key={activeIndex}
                src={FEATURES[activeIndex].video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover animate-[fadeIn_0.7s_ease-in-out]"
              >
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
      
      {/* 
        TÜM STATİK KEYFRAME'LER BURADA TOPLANDI 
        Böylece React render döngüsünde map içinde boğulmaz.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0.5; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fillProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}} />
    </section>
  );
}