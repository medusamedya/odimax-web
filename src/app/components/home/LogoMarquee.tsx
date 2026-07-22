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
    <section className="py-12  bg-brand-neutral overflow-hidden flex flex-col items-center justify-center ">
      {/* Üst Bilgi Metni */}
      <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-sm mb-2">
        MARKALARIMIZ
      </span>
      <h2 className="font-sans text-4xl md:text-5xl font-semibold tracking-wide pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
        Gücünü Kanıtlamış Markaların Tercihi
      </h2>

      {/* 
        Kayan Alan Kapsayıcısı
        [mask-image:...] -> Sağ ve sol kenarlarda yumuşak bir fade (solgunluk) efekti yaratır.
        Logoların aniden kesilmesini engeller ve çok premium bir hissiyat katar.
      */}
      <div className="w-full max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* 
          Marquee Track (Kayan Yol)
          w-max: İçeriğin genişliği kadar uzamasını sağlar.
          animate-[marquee_35s_linear_infinite]: Kendi yazdığımız animasyonu çağırır.
          hover:[animation-play-state:paused]: Fare üzerine geldiğinde akışı durdurur (Opsiyonel UX detayı).
        */}
        <div className="flex w-max items-center gap-12 md:gap-16 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {/* 
            Kusursuz döngü (seamless loop) için orijinal diziyi arka arkaya 2 kez render ediyoruz.
            Birinci liste kayarken arkasından hemen ikinci liste gelir.
          */}
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={index}
              className="relative w-32 h-12 md:w-48 md:h-48 flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`İş Ortağımız ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 
        Tailwind'in varsayılan konfigürasyonunda "marquee" animasyonu olmadığı için, 
        kodun her projede direkt çalışabilmesi adına CSS keyframe'ini buraya enjekte ediyoruz.
        İçerik %50 oranında sola kaydığında döngü başa döner.
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
