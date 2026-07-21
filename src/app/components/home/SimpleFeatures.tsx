import { RefreshCw, Headset, Layers } from "lucide-react";

// Verileri bileşen dışında tutarak kodun temiz ve yönetilebilir kalmasını sağlıyoruz
const FEATURES = [
  {
    id: "sektor-geribildirim",
    title: "Sektör Geri Bildirimleriyle Gelişir",
    description: "İşitme merkezlerinin gerçek saha ihtiyaçları doğrultusunda sürekli güncellenir.",
    icon: RefreshCw,
  },
  {
    id: "kurulum-destek",
    title: "Kurulum ve Kullanım Desteği Sunar",
    description: "Sisteme geçiş sürecinizde teknik ekibimiz yanınızda olur, tüm eğitimleri sağlar.",
    icon: Headset,
  },
  {
    id: "operasyon-uyum",
    title: "Günlük Operasyona Uyum Sağlar",
    description: "Mevcut iş akışınızı bozmadan, merkezinizin rutin süreçlerine hızlıca entegre olur.",
    icon: Layers,
  },
];

export default function SimpleFeatures() {
  return (
    // section yerine div kullanıyoruz çünkü artık başka bir section'ın (CTA) içindeyiz.
    // border-t border-white/10 ile üstteki içerikten zarifçe ayrılmasını sağlıyoruz.
    <div className="pt-12 mt-4 border-t border-white/10 font-sans relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 3 Sütunlu Izgara (Grid) Yapısı */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.id} className="flex items-start gap-5 group">
              
              {/* İkon Alanı */}
              <div className="flex-shrink-0 mt-1">
                {/* Koyu zeminde patlaması için #6fe7ff rengi ve hover durumunda saf beyaz yapıldı */}
                <Icon 
                  className="w-7 h-7 text-[#6fe7ff] group-hover:text-white transition-colors duration-300" 
                  strokeWidth={2.5} 
                />
              </div>
              
              {/* İçerik Alanı */}
              <div>
                {/* Başlıklar beyaz (text-white) */}
                <h3 className="text-lg font-sans font-bold text-white mb-2.5 leading-snug">
                  {feature.title}
                </h3>
                {/* Açıklamalar okunabilirliği artırmak için hafif saydam beyaz (text-white/70) */}
                <p className="font-sans text-white/70 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
            </div>
          );
        })}

      </div>
    </div>
  );
}