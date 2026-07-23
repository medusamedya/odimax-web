import Image from "next/image";
import { Quote, Star } from "lucide-react";

// Yorum verilerini dışarıda tutarak bileşen içindeki kod kalabalığını önlüyoruz
const TESTIMONIALS = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "İşitme Merkezi Yöneticisi",
    content:
      "Odimax'a geçtiğimizden beri hasta takibi ve randevu karmaşası tamamen bitti. Tüm şubelerimizi tek ekrandan yönetebilmek inanılmaz bir rahatlık sağladı.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Elif Aydın",
    role: "Klinik Koordinatörü",
    content:
      "Cihaz stoklarını ve ÜTS bildirimlerini aynı panelden yapabilmek iş yükümüzü yarı yarıya azalttı. Arayüz o kadar temiz ki personellerimiz hiç zorlanmadan adapte oldu.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Burak Demir",
    role: "Firma Sahibi",
    content:
      "Finans modülü sayesinde gün sonu raporlarını almak saniyeler sürüyor. Giderleri ve kasayı bu kadar şeffaf takip edebileceğimiz başka bir sistem görmedim.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-8 md:py-8 lg:py-12 bg-brand-neutral font-sans overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-8 md:mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-sm">
              KULLANICI YORUMLARI
            </span>
          </div>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Merkezlerin Odimax Deneyimi
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-text leading-relaxed mt-4 max-w-2xl mx-auto">
            Günlük operasyonlarını Odimax ile yöneten işitme merkezlerinin ve
            yöneticilerin sistem hakkındaki düşüncelerine göz atın.
          </p>

          {/* Kullanıcıyı sağa kaydırmaya teşvik eden mobil indikatör */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-6 text-brand-blue animate-pulse">
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

        {/* 
          Yorum Kartları Kapsayıcısı 
          Mobilde: flex, overflow-x-auto (Yatay Kaydırma)
          Tablet ve Masaüstünde (md:): grid, grid-cols-2/3 (Klasik Izgara)
        */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 relative z-10">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              // Mobilde minimum genişlik veriyoruz ki kartlar ezilmesin (min-w-[85vw])
              // Masaüstünde genişlik kısıtlamasını kaldırıyoruz (md:min-w-0)
              className="min-w-[85vw] sm:min-w-[360px] md:min-w-0 snap-center bg-white rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-black/[0.03] relative group flex flex-col text-left"
            >
              {/* Dekoratif Alıntı (Quote) İkonu */}
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-light/60 rotate-12 group-hover:rotate-0 group-hover:text-brand-light transition-transform duration-500 -z-10" />

              {/* Yıldız Değerlendirmesi */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Yorum Metni */}
              <p className="text-brand-text text-base md:text-lg leading-relaxed mb-8 relative z-10 flex-grow">
                "{testimonial.content}"
              </p>

              {/* Kullanıcı Profili */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-neutral flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-base leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-brand-blue text-sm font-medium mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}