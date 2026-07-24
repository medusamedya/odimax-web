"use client";

import Image from "next/image";

// 1'den 10'a kadar olan logo yollarını otomatik olarak oluşturuyoruz.
// DRY (Don't Repeat Yourself) prensibine uygun şekilde temiz bir dizi yaratıyoruz.
const LOGOS = Array.from(
  { length: 10 },
  (_, index) => `/logos/${index + 1}.webp`,
);

export default function LogoMarquee() {
  return (
    <section className="py-8 md:py-12 bg-brand-neutral overflow-hidden font-sans relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Alanı - max-w-3xl ile metnin çok uzamasını engelledik */}
        <div className="text-center mb-2  flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-normal md:tracking-widest uppercase text-sm ">
              MARKALARIMIZ
            </span>
          </div>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Odimax'ı Tercih Eden İşitme Cihazı Merkezleri
          </h2>
        </div>

        {/* 
          Kayan Alan Kapsayıcısı
          [mask-image:...] -> Sağ ve sol kenarlarda yumuşak bir fade (solgunluk) efekti yaratır.
        */}
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* 
            Marquee Track (Kayan Yol)
            w-max: İçeriğin genişliği kadar uzamasını sağlar.
            gap-12 md:gap-20: Logolar arası boşluğu responsive yaptık.
          */}
          <div className="flex w-max items-center gap-4 sm:gap-12 md:gap-20 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            {/* 
              Kusursuz döngü (seamless loop) için orijinal diziyi arka arkaya 2 kez render ediyoruz.
            */}
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <div
                key={index}
                className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0  opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt={`İş Ortağımız ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                  quality={75}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 
          Tailwind'in varsayılan konfigürasyonunda "marquee" animasyonu olmadığı için, 
          kodun her projede direkt çalışabilmesi adına CSS keyframe'ini buraya enjekte ediyoruz.
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
      </div>
    </section>
  );
}