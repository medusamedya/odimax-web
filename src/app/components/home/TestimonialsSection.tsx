import Image from "next/image";
import Link from "next/link";
import { Quote, Star, ArrowRight } from "lucide-react";
import { testimonialsData } from "@/data/testimonialsData"; // Kendi dosya yoluna göre güncelle

export default function TestimonialsSection() {
  const googleReviewLink = "https://www.google.com/search?sa=X&sca_esv=2c719d755bc25006&sxsrf=APpeQntUS7tUZ5uNocaQc-wdjf7Hvtm1VQ:1785414137777&q=Odimax+Yorumlar&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDeyNDI2szQzMbKwNDQ2NrA0Mt_AyPiKkd8_JTM3sUIhMr-oNDcnsWgRK7oIAMSl5Ho_AAAA&rldimm=17292369642891330927&tbm=lcl&hl=tr-TR&ved=2ahUKEwj_6dX7sfqVAxVKA9sEHQkfA_gQ9fQKegQIQhAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews";

  return (
    <section className="py-12 md:py-16 lg:py-18 bg-brand-neutral font-sans overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı (Dokunulmadı) */}
        <div className="text-center mb-8 flex flex-col items-center">
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

          <div className="flex md:hidden items-center justify-center gap-2 mt-1 md:mt-6 text-brand-blue animate-pulse">
            <span className="text-xs font-bold tracking-widest uppercase">
              Yana Kaydırın
            </span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Google Puan Özeti ve Yorum Bırakın Butonu */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-black/[0.05] gap-4">
          
          <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-2xl shadow-sm border border-black/[0.03]">
            {/* Google Logo SVG (Orijinal renkleriyle) */}
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 font-bold text-brand-dark text-lg">(5.0)</span>
            </div>
          </div>

          <Link 
            href={googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium px-6 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            Yorum Bırakın
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

        {/* Yorum Kartları Kapsayıcısı (Slider yapısı korundu) */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 relative z-10">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[85vw] sm:min-w-[360px] md:min-w-0 snap-center bg-white/60 hover:bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-blue/10 flex flex-col text-left"
            >
              {/* Tasarımdaki Büyük Mavi Alıntı İkonu */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-brand-blue fill-brand-blue/10 rotate-180" />
              </div>

              {/* Yorum Metni */}
              <p className="text-brand-dark/80 text-base leading-relaxed mb-8 flex-grow">
                {testimonial.content}
              </p>

              {/* Footer: Kullanıcı Bilgileri ve Google Linki */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-black/[0.04]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-brand-neutral">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-brand-text/70 text-xs mt-0.5 mb-1">
                    {testimonial.role}
                  </p>
                  <Link 
                    href={testimonial.googleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#1a73e8] hover:text-[#1557b0] text-sm font-medium transition-colors"
                  >
                    Google'da Görüntüle
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}