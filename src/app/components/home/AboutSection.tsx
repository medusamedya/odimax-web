import Image from "next/image";
import { CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-brand-neutral overflow-hidden relative font-sans">
      {/* Arka plan derinliği için çok hafif, dekoratif bir parlama */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Sol Kısım: İçerik (Modern SaaS sitelerinde vurgu genelde solda metinle başlar) */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            {/* Üst Başlık & Badge */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-sm ">
                  ODIMAX 
                </span>
              </div>

          <h2 className=" font-sans text-4xl md:text-5xl font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
                İşitme Merkezlerinin <br className="hidden md:block" />
                  Günlük İşleyişinden
           
                Doğan Sistem
              </h2>
            </div>

            {/* Metin Paragrafları */}
            <div className="text-lg text-brand-text leading-relaxed space-y-6">
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

            {/* Özellik Listesi - Klasik liste yerine modern kartlar */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex-1 bg-white border border-black/[0.04] p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <TrendingUp
                  className="w-8 h-8 text-brand-blue mb-3"
                  strokeWidth={2}
                />
                <h4 className="font-bold text-brand-dark mb-1">
                  Operasyon Odaklı
                </h4>
                <p className="text-sm text-brand-text">
                  Saha alışkanlıkları ve ihtiyaçlarına göre tasarlandı.
                </p>
              </div>
              <div className="flex-1 bg-white border border-black/[0.04] p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <ShieldCheck
                  className="w-8 h-8 text-brand-blue mb-3"
                  strokeWidth={2}
                />
                <h4 className="font-bold text-brand-dark mb-1">Yasal Uyum</h4>
                <p className="text-sm text-brand-text">
                  ÜTS ve mevzuat süreçlerine tam entegre çalışır.
                </p>
              </div>
            </div>
          </div>

          {/* Sağ Kısım: Görsel Alanı */}
          <div className="w-full lg:w-1/2 relative">
            {/* Ana Görsel Çerçevesi */}
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/60 bg-brand-light group">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Odimax İşitme Merkezi Yönetimi"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Resmin alt kısmına hafif bir gölge atarak üzerindeki UI elemanını belirginleştiriyoruz */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
            </div>

            {/* Glassmorphism Floating Card (Eski yuvarlak rozetin modern hali) */}
            <div className="absolute -bottom-6 -left-4 sm:bottom-8 sm:-left-12 bg-white/80 backdrop-blur-lg border border-white/50 p-6 rounded-2xl shadow-xl max-w-[250px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-dark">
                    %100
                  </div>
                  <div className="text-[11px] font-bold text-brand-text uppercase tracking-widest">
                    Sektör Uyumu
                  </div>
                </div>
              </div>
              <p className="text-sm text-brand-dark font-medium leading-snug">
                Genel amaçlı bir yazılım değil, gerçek merkez ihtiyaçları.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
