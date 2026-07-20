import { Ear, FolderCheck, ClipboardCheck } from "lucide-react";

// Özellik verilerini dışarıda tutarak kodun temiz (clean code) kalmasını sağlıyoruz
const FEATURES = [
  {
    id: "sektorel-cozum",
    icon: Ear,
    title: "Sektöre Özel Çözüm",
    description: "İşitme cihazı merkezlerinin ihtiyaçlarına göre şekillendirilmiş modüller. Her özellik, günlük iş akışlarını hızlandırmak için tasarlandı.",
  },
  {
    id: "yasal-uyum",
    icon: FolderCheck,
    title: "Yasal Uyum ve Güven",
    description: "T.C. Sağlık Bakanlığı ÜTS entegrasyonu ile satış ve satın alma bildirimlerini manuel işlem yapmadan yönetin. Hata riskini minimuma indirin.",
  },
  {
    id: "verimlilik",
    icon: ClipboardCheck,
    title: "Verimlilik ve Kontrol",
    description: "Hasta, stok, kasa, masraf ve randevu süreçlerini tek panelden izleyin. İşletmenizin anlık durumunu her zaman net görün.",
  },
];

export default function CoreFeatures() {
  return (
    <section className="py-24 bg-brand-neutral font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-sm mb-4">
            ÖZELLİKLER
          </span>
            <h2 className="font-sans text-4xl md:text-5xl  font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Odimax'ı Farklı Kılan Temel Özellikler
          </h2>
        </div>

        {/* 3 Kolonlu Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="flex flex-col items-center text-center group"
              >
                {/* İkon Çerçevesi */}
                <div className="mb-6 p-4 rounded-2xl bg-white shadow-sm border border-black/[0.03] group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-brand-blue" strokeWidth={2} />
                </div>
                
                {/* Başlık ve Açıklama */}
                <h3 className="text-xl lg:text-2xl font-bold text-brand-header-text mb-4">
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