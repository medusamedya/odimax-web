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
    <section className="py-12 bg-brand-neutral font-sans border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Sütunlu Izgara (Grid) Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="flex items-start gap-4 group">
                
                {/* İkon Alanı */}
                <div className="flex-shrink-0 mt-1">
                  <Icon 
                    className="w-6 h-6 text-brand-blue group-hover:text-brand-dark transition-colors duration-300" 
                    strokeWidth={2.5} 
                  />
                </div>
                
                {/* İçerik Alanı */}
                <div>
                  <h3 className="text-lg font-sans font-bold text-brand-header-text mb-2 leading-wide">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-brand-text text-md leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}