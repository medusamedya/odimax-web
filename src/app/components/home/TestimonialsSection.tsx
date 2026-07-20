import Image from "next/image";
import { Quote, Star } from "lucide-react";

// Yorum verilerini dışarıda tutarak bileşen içindeki kod kalabalığını önlüyoruz
const TESTIMONIALS = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "İşitme Merkezi Yöneticisi",
    content: "Odimax'a geçtiğimizden beri hasta takibi ve randevu karmaşası tamamen bitti. Tüm şubelerimizi tek ekrandan yönetebilmek inanılmaz bir rahatlık sağladı.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Elif Aydın",
    role: "Klinik Koordinatörü",
    content: "Cihaz stoklarını ve ÜTS bildirimlerini aynı panelden yapabilmek iş yükümüzü yarı yarıya azalttı. Arayüz o kadar temiz ki personellerimiz hiç zorlanmadan adapte oldu.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Burak Demir",
    role: "Firma Sahibi",
    content: "Finans modülü sayesinde gün sonu raporlarını almak saniyeler sürüyor. Giderleri ve kasayı bu kadar şeffaf takip edebileceğimiz başka bir sistem görmedim.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-brand-neutral font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans mb-4 text-4xl md:text-5xl font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Merkezlerin Odimax Deneyimi
          </h2>
          <p className="
                    font-sans text-base md:text-lg text-brand-text max-w-3xl mx-auto leading-relaxed ">
            Günlük operasyonlarını Odimax ile yöneten işitme merkezlerinin ve yöneticilerin sistem hakkındaki düşüncelerine göz atın.
          </p>
        </div>

        {/* Yorum Kartları Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-black/[0.03] relative group"
            >
              {/* Dekoratif Alıntı (Quote) İkonu */}
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-light/50 rotate-12 group-hover:rotate-0 group-hover:text-brand-light transition-transform duration-500 -z-10" />

              {/* Yıldız Değerlendirmesi */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Yorum Metni */}
              <p className="text-brand-text text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Kullanıcı Profili */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-neutral">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-brand-blue text-sm font-medium">
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