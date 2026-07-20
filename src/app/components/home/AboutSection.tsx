import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-brand-neutral overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Sol Kısım: Görsel ve Yüzen Rozet */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Oval Görsel Konteyneri */}
            <div className="relative aspect-[4/5] w-full lg:w-[450px] mx-auto rounded-[120px] overflow-hidden shadow-xl border-4 border-white/60 bg-white">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Odimax İşitme Merkezi Yönetimi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>

            {/* Yüzen Yuvarlak Rozet */}
            <div className="absolute top-1/4 -left-4 sm:-left-12 lg:-left-8 w-40 h-40 bg-gradient-to-br from-brand-blue to-[#6dffd3] rounded-full flex items-center justify-center p-4 shadow-2xl border-[6px] border-brand-neutral z-10">
              <p className="font-sans text-white text-center font-semibold text-[16px] leading-tight drop-shadow-md">
                Gerçek <br /> Merkez <br /> İhtiyaçlarına <br /> Göre <br />{" "}
                Tasarlandı
              </p>
            </div>
          </div>

          {/* Sağ Kısım: İçerik */}
          <div className="flex flex-col space-y-6 lg:pl-10">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-sm mb-4">
  ODIMAX
</span>
            <h2 className="font-sans text-4xl md:text-5xl font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
              İşitme Merkezlerinin Günlük İşleyişinden Doğan Yönetim Sistemi
            </h2>

            <div
              className="
                    font-sans text-base md:text-lg text-brand-text max-w-3xl mx-auto leading-relaxed space-y-6"
            >
              <p>
                Odimax, işitme cihazı satışı ve hizmeti veren merkezlerin günlük
                operasyonlarını daha düzenli, izlenebilir ve kontrollü
                yönetebilmesi için geliştirildi.
              </p>
              <p>
                Hasta kayıtları, randevu planlama, satış ve tahsilat süreçleri,
                stok takibi, ÜTS bildirimleri ve raporlamalar tek sistemde
                birleşir. Böylece merkezinizdeki kritik bilgiler kişilere,
                dosyalara ya da dağınık takip yöntemlerine bağlı kalmaz.
              </p>
              <p>
                Genel amaçlı yazılımlardan farklı olarak Odimax, işitme
                merkezlerinin saha ihtiyaçları, yasal süreçleri ve günlük
                çalışma alışkanlıkları dikkate alınarak yapılandırılmıştır.
              </p>
            </div>

            {/* Özellik Listesi */}
            <ul className="space-y-4 pt-4">
              <li className="font-sans flex items-center gap-3 text-brand-header-text font-semibold text-lg">
                <CheckCircle2
                  className="text-brand-blue w-6 h-6 flex-shrink-0"
                  strokeWidth={2.5}
                />
                <span>Operasyon Odaklı Tasarım</span>
              </li>
              <li className="font-sans flex items-center gap-3 text-brand-header-text font-semibold text-lg">
                <CheckCircle2
                  className="text-brand-blue w-6 h-6 flex-shrink-0"
                  strokeWidth={2.5}
                />
                <span>ÜTS Uyumlu ve Yasal Süreçlere Entegre</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
