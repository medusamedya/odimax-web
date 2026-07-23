import Image from "next/image";
import { ShieldCheck, Cloud, CheckCircle2 } from "lucide-react";

export default function AboutDetailSection() {
  return (
    <section className="py-12 bg-brand-neutral overflow-hidden relative font-sans">
      {/* Arka plan derinliği için çok hafif, dekoratif bir parlama */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ORTALANMIŞ BAŞLIK VE ROZET */}
        <div className="text-center mb-4 md:mb-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-normal md:tracking-widest uppercase text-sm ">
              ODIMAX & MEDUSA GLOBAL
            </span>
          </div>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Gerçek Operasyonlardan <br className="hidden md:block" />
            Doğan Bir CRM
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 md:gap-16 lg:gap-20 items-center">
          
          {/* Sol Kısım: İçerik */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-4 md:space-y-8">
            
            {/* Metin Paragrafları */}
            <div className="text-base md:text-lg text-brand-text leading-normal text-center md:text-start md:leading-relaxed space-y-2 md:space-y-6">
              <p>
                Odimax, işitme cihazı satış merkezlerinin gerçek operasyonel ihtiyaçları doğrultusunda, <strong>Medusa Global Medya Yatırım AŞ.</strong> tarafından projelendirilen ve hayata geçirilen bir dijital yönetim platformudur.
              </p>
              <p>
                Saha deneyimi, mevzuat bilgisi ve teknoloji altyapısını bir araya getiren Odimax; hasta, cihaz, evrak ve SGK süreçlerini <strong>tek bir sistem altında toplayarak</strong> operasyonlarınızı daha düzenli ve sürdürülebilir hale getirmeyi amaçlar.
              </p>
            </div>

          {/* Özellik Listesi - Modern Kartlar */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-0 md:pt-2">
              
              {/* 1. Kart */}
              <div className="flex-1 bg-white border border-black/[0.04] p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start sm:block gap-4 sm:gap-0">
                <Cloud
                  className="w-8 h-8 text-brand-blue flex-shrink-0 sm:mb-3"
                  strokeWidth={2}
                />
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">
                    Bulut Altyapısı
                  </h4>
                  <p className="text-sm text-brand-text">
                    Kurulum gerektirmeden her cihazdan güvenli ve hızlı erişim.
                  </p>
                </div>
              </div>
              
              {/* 2. Kart */}
              <div className="flex-1 bg-white border border-black/[0.04] p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start sm:block gap-4 sm:gap-0">
                <ShieldCheck
                  className="w-8 h-8 text-brand-blue flex-shrink-0 sm:mb-3"
                  strokeWidth={2}
                />
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">
                    Tam Uyum
                  </h4>
                  <p className="text-sm text-brand-text">
                    ÜTS ve MEDULA sistemleriyle entegre ve mevzuata uygun yapı.
                  </p>
                </div>
              </div>

            </div>
            
          </div>

          {/* Sağ Kısım: Görsel Alanı */}
          <div className="w-full lg:w-1/2 relative">
            
            {/* Ana Görsel Çerçevesi */}
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/60 bg-brand-light group">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Medusa Global ve Odimax İşbirliği"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
            </div>

            {/* Glassmorphism Floating Card (Medusa Global Güvencesi) */}
            <div className="absolute -bottom-6 -left-4 sm:bottom-8 sm:-left-4 bg-white/80 backdrop-blur-lg border border-white/50 p-6 rounded-2xl shadow-md md:shadow-xl max-w-[250px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <div className="text-lg font-black text-brand-dark leading-none">
                    Medusa Global
                  </div>
                  <div className="text-[11px] font-bold text-brand-text uppercase tracking-widest mt-0.5">
                    Güvencesiyle
                  </div>
                </div>
              </div>
              <p className="text-sm text-brand-dark font-medium leading-snug">
                Saha deneyimi ve güçlü teknoloji altyapısı bir arada.
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}