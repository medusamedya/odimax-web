import Image from "next/image";
import { CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-8 md:py-8 lg:py-12  bg-brand-neutral overflow-hidden relative font-sans">
      {/* Arka plan derinliği için çok hafif, dekoratif bir parlama */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* YALNIZCA BAŞLIK VE ROZET ORTALANDI */}
        <div className="text-center mb-4 md:mb-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-normal md:tracking-widest uppercase text-sm ">
              ODIMAX NEDİR?
            </span>
          </div>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            İşitme Merkezlerinin <br className="hidden md:block" />
            Günlük İşleyişinden Doğan Sistem
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 md:gap-16 lg:gap-20 items-center">
          {/* Sol Kısım: Açıklama ve Kartlar (Orijinal yerinde kaldı) */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            {/* Metin Paragrafları */}
            <div className="text-base md:text-lg text-brand-text leading-normal md:leading-relaxed space-y-2 md:space-y-6">
              <p>
                Odimax, işitme cihazı satışı ve hizmeti veren merkezlerin günlük
                operasyonlarını daha düzenli, izlenebilir ve kontrollü
                yönetebilmesi için özel olarak geliştirildi.
              </p>
              <p>
                Hasta kayıtları, randevu planlama, satış ve tahsilat süreçleri,
                stok takibi, ÜTS bildirimleri ve raporlamalar{" "}
                <strong>tek sistemde birleşir</strong>. Merkezinizdeki kritik
                bilgiler kişilere veya dağınık dosyalara bağlı kalmaz.
              </p>
            </div>

            {/* Özellik Listesi */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-0 md:pt-2">
              {/* 1. Kart */}
              <div className="flex-1 bg-gradient-to-br from-brand-dark via-[#1a2642] to-brand-blue border border-white/10 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start sm:block gap-4 sm:gap-0 relative overflow-hidden">
                <TrendingUp
                  className="w-8 h-8 text-white flex-shrink-0 sm:mb-3 relative z-10"
                  strokeWidth={2}
                />
                <div className="relative z-10">
                  <h4 className="font-bold text-white mb-1">
                    Operasyon Odaklı
                  </h4>
                  <p className="text-sm text-white/80">
                    Saha alışkanlıkları ve ihtiyaçlarına göre tasarlandı.
                  </p>
                </div>
              </div>

              {/* 2. Kart */}
              <div className="flex-1 bg-gradient-to-br from-brand-dark via-[#1a2642] to-brand-blue border border-white/10 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start sm:block gap-4 sm:gap-0 relative overflow-hidden">
                <ShieldCheck
                  className="w-8 h-8 text-white flex-shrink-0 sm:mb-3 relative z-10"
                  strokeWidth={2}
                />
                <div className="relative z-10">
                  <h4 className="font-bold text-white mb-1">Yasal Uyum</h4>
                  <p className="text-sm text-white/80">
                    ÜTS ve mevzuat süreçlerine tam entegre çalışır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kısım: Görsel Alanı (Orijinal yerinde kaldı) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden  border border-white/60 bg-brand-light group">
              <Image
                src="/home/54-islem-kayitlari.png"
                alt="Odimax İşitme Merkezi Yönetimi"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
