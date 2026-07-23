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
    // Sadece masaüstünde (lg) ekranı tam kaplar (100dvh), mobilde kendi içeriği kadar (auto) yer kaplar.
    <section className="bg-brand-neutral overflow-hidden relative font-sans lg:h-[100dvh]">
      {/* Arka plan derinliği için dekoratif parlama */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* =========================================
          1. MASAÜSTÜ GÖRÜNÜMÜ (lg ve üzeri)
          ========================================= */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* SOL KISIM: Sabit İçerik Alanı */}
          <div className="w-full lg:w-5/12 h-full flex flex-col justify-center pr-0 lg:pr-12 relative z-10 pt-24 lg:pt-0">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-sm">
                  MODÜL ÖZELLİKLERİ
                </span>
              </div>
              <h2 className="font-sans text-4xl md:text-5xl font-semibold tracking-wide pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
                Süreçlerinizi Dijital <br className="hidden md:block" />{" "}
                Hafızaya Taşıyın
              </h2>
            </div>

            <div className="text-lg text-brand-text leading-relaxed space-y-6 mt-8">
              <p>
                Kritik operasyonlarınız kişilere, defterlere veya dağınık
                dosyalara bağlı kalmasın. Tüm süreçleri adım adım takip edin ve
                kontrolü elinize alın.
              </p>

              <div className="hidden lg:flex flex-col items-start gap-3 mt-12 opacity-60">
                <span className="text-sm font-bold tracking-widest uppercase text-brand-dark">
                  Sağ Tarafı Kaydırın
                </span>
                <div className="w-[2px] h-16 bg-gradient-to-b from-brand-dark/40 to-transparent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* SAĞ KISIM: İçten Kaydırılabilir Alan */}
          <div className="w-full lg:w-7/12 h-full overflow-y-auto snap-y snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-32 lg:pb-0">
            {features.map((feature, index) => {
              const formattedIndex = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={feature.id}
                  className="min-h-[100dvh] flex flex-col justify-center snap-start snap-always relative py-16 lg:py-0 border-b border-black/[0.02] last:border-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-8 lg:mb-12">
                    <span className="text-6xl md:text-7xl lg:text-8xl font-light font-mono text-brand-blue/10 leading-none -mt-2">
                      {formattedIndex}
                    </span>
                    <h3 className="capitalize font-semibold text-3xl md:text-4xl text-brand-dark leading-tight mt-2">
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
                      <p className="text-lg text-brand-text leading-relaxed mt-2">
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

     {/* =========================================
          2. MOBİL VE TABLET GÖRÜNÜMÜ (lg altı)
          Yatay Slider Yapısı
          ========================================= */}
      <div className="block lg:hidden w-full py-16 px-4 sm:px-6 relative z-10">
        
        {/* Mobil Başlık Alanı - Ortalandı */}
        <div className="mb-8 max-w-2xl mx-auto flex flex-col items-center text-center">
          <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-xs mb-3">
            MODÜL ÖZELLİKLERİ
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-semibold tracking-tight pb-1 leading-[1.15] bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Süreçlerinizi Dijital Hafızaya Taşıyın
          </h2>
          <p className="text-brand-text text-base mt-4 leading-relaxed">
            Kritik operasyonlarınız kişilere, defterlere veya dağınık dosyalara
            bağlı kalmasın.
          </p>
          
          {/* Kullanıcıyı sağa kaydırmaya teşvik eden mobil indikatör - Ortalandı */}
          <div className="flex items-center justify-center gap-2 mt-6 text-brand-blue animate-pulse">
            <span className="text-xs font-bold tracking-widest uppercase">
              Yana Kaydırın
            </span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        {/* Yatay Kaydırılabilir Alan (Horizontal Scroll) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 -mx-4 px-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {features.map((feature, index) => {
            const formattedIndex = String(index + 1).padStart(2, "0");

            return (
              <div
                key={feature.id}
                className="min-w-[85vw] sm:min-w-[360px] snap-center bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-black/[0.04] flex flex-col relative overflow-hidden"
              >
                {/* Arka plan dev sayı */}
                <span className="absolute top-4 right-6 text-6xl font-light font-mono text-brand-blue/5 leading-none">
                  {formattedIndex}
                </span>

                <h3 className="capitalize font-semibold text-2xl text-brand-dark leading-tight mb-6 pr-12 relative z-10">
                  {feature.title}
                </h3>

                <div className="relative z-10 flex-grow">
                  {feature.isList && feature.listItems ? (
                    <ul className="flex flex-col gap-3">
                      {feature.listItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5"
                            strokeWidth={2.5}
                          />
                          <span className="text-sm font-medium text-brand-dark/90 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-base text-brand-text leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
