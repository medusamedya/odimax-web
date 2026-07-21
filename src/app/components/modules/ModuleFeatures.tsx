import { CheckCircle2 } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  isList: boolean;
  listItems?: string[];
}

export default function ModuleFeatures({ features }: { features: Feature[] }) {
  return (
    <section className="h-[100dvh] bg-brand-neutral overflow-hidden relative font-sans">
      
      {/* Arka plan derinliği için dekoratif parlama */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        
        {/* flex yapısı ile ikiye bölüyoruz, h-full ile ekranı tam dolduruyoruz */}
        <div className="flex flex-col lg:flex-row h-full">
          
          {/* 
            SOL KISIM: Sabit (Fixed) İçerik Alanı 
            h-full ve justify-center ile ekranın tam ortasında hizalanır. Asla kaymaz.
          */}
          <div className="w-full lg:w-5/12 h-full flex flex-col justify-center pr-0 lg:pr-12 relative z-10 pt-24 lg:pt-0">
            
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-sm">
                  MODÜL ÖZELLİKLERİ
                </span>
              </div>

              <h2 className="font-sans text-4xl md:text-5xl font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
                Süreçlerinizi Dijital <br className="hidden md:block" /> Hafızaya Taşıyın
              </h2>
            </div>

            <div className="text-lg text-brand-text leading-relaxed space-y-6 mt-8">
              <p>
                Kritik operasyonlarınız kişilere, defterlere veya dağınık dosyalara bağlı kalmasın. Tüm süreçleri adım adım takip edin ve kontrolü elinize alın.
              </p>
              
              {/* Kullanıcıyı sağ tarafı kaydırmaya teşvik eden zarif indikatör */}
              <div className="hidden lg:flex flex-col items-start gap-3 mt-12 opacity-60">
                <span className="text-sm font-bold tracking-widest uppercase text-brand-dark">
                  Sağ Tarafı Kaydırın
                </span>
                <div className="w-[2px] h-16 bg-gradient-to-b from-brand-dark/40 to-transparent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* 
            SAĞ KISIM: İçten Kaydırılabilir (Scrollable) Özellik Alanı 
            overflow-y-auto ile kendi içinde kayar.
            snap-y ve snap-mandatory ile kaydırma anında kartlar mıknatıs gibi ekrana oturur.
            Gizli scrollbar class'ları ile çirkin kaydırma çubuğunu yok ettik.
          */}
          <div className="w-full lg:w-7/12 h-full overflow-y-auto snap-y snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-32 lg:pb-0">
            {features.map((feature, index) => {
              const formattedIndex = String(index + 1).padStart(2, '0');

              return (
                <div
                  key={feature.id}
                  // Her bir kart tam ekran yüksekliğinde (min-h-[100dvh]) ve snap-start ile tepeye kilitlenir
                  className="min-h-[100dvh] flex flex-col justify-center snap-start snap-always relative py-16 lg:py-0 border-b border-black/[0.02] last:border-0"
                >
                  
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-8 lg:mb-12">
                    <span className="text-6xl md:text-7xl lg:text-8xl font-light font-mono text-brand-blue/10 leading-none -mt-2">
                      {formattedIndex}
                    </span>
                    <h3 className="font-bold text-3xl md:text-4xl text-brand-dark leading-tight mt-2">
                      {feature.title}
                    </h3>
                  </div>

                  <div className="relative z-10 lg:pl-[6.5rem]">
                    {feature.isList && feature.listItems ? (
                      <ul className="grid sm:grid-cols-2 gap-6 mt-2">
                        {feature.listItems.map((item, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-1"
                          >
                            <CheckCircle2 
                              className="w-6 h-6 text-brand-blue flex-shrink-0" 
                              strokeWidth={2.5} 
                            />
                            <span className="text-base font-medium text-brand-dark/90 leading-relaxed mt-0.5">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg text-brand-text  leading-relaxed mt-2">
                        {feature.description}
                      </p>
                    )}
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}