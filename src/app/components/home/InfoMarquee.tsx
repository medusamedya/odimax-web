import {
  Wrench,
  GraduationCap,
  MessageSquareText,
  Store,
  Users,
  Landmark,
  ChevronRight,
} from "lucide-react";

// Veri yapısını ayırarak kod kalabalığını önlüyoruz.
// Görseldeki içeriklere en uygun Lucide ikonları seçildi.
const MARQUEE_ITEMS = [
  { id: 1, text: "Kurulum desteği dahil", icon: Wrench },
  { id: 2, text: "Temel eğitim dahil", icon: GraduationCap },
  { id: 3, text: "Demo ile ihtiyaç analizi", icon: MessageSquareText },
  { id: 4, text: "Kolay muhasebe ve stok takibi", icon: Store },
  { id: 5, text: "Müşteri & tedarikçi yönetimi tek listede", icon: Users },
  { id: 6, text: "Kasa, banka kontrolü", icon: Landmark },
];

export default function InfoMarquee() {
  return (
    // Görseldeki gibi açık mavi bir arka plan (bg-[#b5eefb] veya bg-brand-blue/20) kullanıyoruz.
    // Odimax marka renklerine uygun bir açık ton seçildi.
    <section className="bg-brand-dark   border-y border-black/5 overflow-hidden font-sans">
      <div className="py-2.5 md:py-3.5 w-full flex items-center">
        <div className="w-full overflow-hidden flex">
          {/* 
            Animasyon kapsayıcısı: 
            Kusursuz döngü (seamless loop) için animate-marquee sınıfı kullanıldı.
            Üzerine gelindiğinde durması için hover eklendi.
          */}
          <div className="flex w-max items-center animate-[marquee_30s_linear_infinite] ">
            {/* 
              Kesintisiz akış için orijinal diziyi arka arkaya 2 kez render ediyoruz.
            */}
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 md:gap-6 px-4 md:px-6"
                >
                  <div className="flex items-center gap-2 md:gap-2.5 group cursor-default">
                    {/* İkon */}
                    <Icon
                      className="w-4 h-4 md:w-5 md:h-5 text-white "
                      strokeWidth={1.5}
                    />
                    {/* Metin */}
                    <span className="text-sm md:text-base font-medium text-white  whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                  {/* Ayırıcı Ok (Chevron) */}
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white  flex-shrink-0" />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 
        Projende global tailwind config dosyasına marquee animasyonunu ekleyene kadar 
        sorunsuz çalışması için keyframe tanımı.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `,
        }}
      />
    </section>
  );
}
