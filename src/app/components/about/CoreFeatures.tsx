import { Ear, FolderCheck, ClipboardCheck } from "lucide-react";

// Özellik verilerini dışarıda tutarak kodun temiz (clean code) kalmasını sağlıyoruz
const FEATURES = [
  {
    id: "sektorel-cozum",
    icon: Ear,
    title: "Sektöre Özel Çözüm",
    description:
      "İşitme cihazı merkezlerinin ihtiyaçlarına göre şekillendirilmiş modüller. Her özellik, günlük iş akışlarını hızlandırmak için tasarlandı.",
  },
  {
    id: "yasal-uyum",
    icon: FolderCheck,
    title: "Yasal Uyum ve Güven",
    description:
      "T.C. Sağlık Bakanlığı ÜTS entegrasyonu ile satış ve satın alma bildirimlerini manuel işlem yapmadan yönetin. Hata riskini minimuma indirin.",
  },
  {
    id: "verimlilik",
    icon: ClipboardCheck,
    title: "Verimlilik ve Kontrol",
    description:
      "Hasta, stok, kasa, masraf ve randevu süreçlerini tek panelden izleyin. İşletmenizin anlık durumunu her zaman net görün.",
  },
];

export default function CoreFeatures() {
  return (
    <section className="py-8 md:py-8 lg:py-12 bg-brand-neutral font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst Başlık Alanı */}
        <div className="text-center mb-4 md:mb-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-sm ">
              ÖZELLİKLER
            </span>
          </div>
          <h2 className="font-sans text-4xl md:text-5xl  font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Odimax'ı Farklı Kılan Temel Özellikler
          </h2>
        </div>

        {/* 3 Kolonlu Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 ">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center group"
              >
                {/* İkon Çerçevesi (Animasyonlu Border Yapısı) */}
                <div className="mb-2 md:mb-6 p-[2px] rounded-2xl bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] animate-text-gradient shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  {/* İç Kutu (Beyaz arkaplan ile gradientin sadece sınırda kalmasını sağlıyor) */}
                  <div className="bg-white p-3 md:p-4 rounded-[14px] flex items-center justify-center h-full w-full">
                    <Icon
                      className="w-8 h-8 md:w-10 md:h-10 text-brand-blue group-hover:text-brand-dark transition-colors duration-300"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Başlık ve Açıklama */}
                <h3 className="text-xl  font-semibold leading-tight text-brand-header-text mb-4">
                  {feature.title}
                </h3>
                <p className="text-brand-text text-sm md:text-base leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
