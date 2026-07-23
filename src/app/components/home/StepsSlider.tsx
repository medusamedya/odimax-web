"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  CheckCircle2,
  Building2,
  Users,
  Receipt,
  Boxes,
  CalendarDays,
  PieChart,
} from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Merkez Yapınızı Tanımlayın",
    description:
      "Şube, kullanıcı, kasa, yetki ve temel merkez ayarlarınızı oluşturun. Odimax, merkezinizin çalışma yapısına göre düzenlenerek ekibinizin kullanıma hazır hale gelmesini sağlar.",
    icon: Building2,
    items: [
      "Şube ve kullanıcı yapısı",
      "Yetki ve rol tanımları",
      "Kasa ve temel işletme ayarları",
    ],
  },
  {
    id: 2,
    title: "Hasta Hafızanızı Sisteme Taşıyın",
    description:
      "Hasta kayıtları, iletişim bilgileri, cihaz geçmişi, randevular, satışlar, ödemeler ve notlar tek hasta kartında birleşir. Böylece merkezinizin hasta bilgisi kişilere veya dağınık dosyalara bağlı kalmaz.",
    icon: Users,
    items: [
      "Hasta kartı ve geçmiş kayıtlar",
      "Cihaz, satış ve ödeme bilgileri",
      "Notlar, randevular ve takipler",
    ],
  },
  {
    id: 3,
    title: "Satış, Belge ve Tahsilat Akışınızı",
    description:
      "Cihaz satışı, kulak yönü, fiyat, iskonto, ödeme, cari kayıt, teslim tutanağı ve hasta beyanı gibi süreçler aynı akış içinde ilerler. Her satışın eksiksiz ve takip edilebilir şekilde kaydedilmesi kolaylaşır.",
    icon: Receipt,
    items: [
      "Sağ / sol kulak ayrımıyla satış",
      "Tahsilat, cari ve ödeme takibi",
      "Teslim tutanağı ve hasta beyanı",
    ],
  },
  {
    id: 4,
    title: "Stok ve ÜTS Süreçlerini Birlikte Yönetin",
    description:
      "Cihaz stokları, seri numaraları, GTIN bilgileri, satın alma, satış ve ÜTS bildirim durumları aynı yapı içinde takip edilir. Böylece cihaz hareketleri ve yasal süreçler birbirinden kopmadan ilerler.",
    icon: Boxes,
    items: [
      "Seri numarası ve GTIN takibi",
      "Satın alma ve satış bağlantısı",
      "ÜTS bildirim durumu ve hata takibi",
    ],
  },
  {
    id: 5,
    title: "Randevu, Kontrol ve Hasta İletişimini Planlayın",
    description:
      "Muayene, kontrol, cihaz deneme, takip görüşmesi ve servis süreçlerini takvim üzerinden planlayın. Hatırlatmalar ve bilgilendirmelerle hasta iletişimini merkezin düzenli işleyişine dahil edin.",
    icon: CalendarDays,
    items: [
      "Muayene ve kontrol randevuları",
      "WhatsApp hatırlatmaları",
      "Yaklaşan randevu ve takip listeleri",
    ],
  },
  {
    id: 6,
    title: "Yönetim Raporlarınızı Görünür Hale Getirin",
    description:
      "Satış, tahsilat, stok, hasta, randevu ve operasyon verilerini raporlayın. Merkezinizde neyin iyi ilerlediğini, nerede aksama olduğunu ve hangi süreçlerin takip istediğini daha net görün.",
    icon: PieChart,
    items: [
      "Satış ve tahsilat raporları",
      "Stok ve cihaz hareketleri",
      "Hasta, randevu ve operasyon takibi",
    ],
  },
];

export default function StepsSlider() {
  // Mouse Drag (Kaydırma) işlemleri için referans ve state'ler
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    if (sliderRef.current) {
      setStartX(pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
      // Sürükleme sırasında pürüzsüzlük için snap (mıknatıs) özelliğini geçici olarak kapatıyoruz
      sliderRef.current.classList.remove("snap-x", "snap-mandatory");
      sliderRef.current.classList.add("cursor-grabbing");
    }
  };

  const stopDrag = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      // Sürükleme bitince snap özelliğini ve normal imleci geri getiriyoruz
      sliderRef.current.classList.add("snap-x", "snap-mandatory");
      sliderRef.current.classList.remove("cursor-grabbing");
    }
  };

  const onDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const x = pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Kaydırma hızı çarpanı
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-8 md:py-8 lg:py-12 bg-brand-neutral font-sans overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Alanı */}
        <div className="text-center mb-4 md:mb-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-normal md:tracking-widest uppercase text-sm ">
              ODIMAX
            </span>
          </div>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            İşitme Merkezinizin Temel Yönetim Sistemi Adım Adım Kurulsun.
          </h2>
           {/* Kullanıcıyı sağa kaydırmaya teşvik eden mobil indikatör - Ortalandı */}
          <div className="flex items-center justify-center gap-2 mt-1 md:mt-6 text-brand-blue animate-pulse">
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

        {/* Slider Konteyneri */}
        <div
          ref={sliderRef}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onMouseMove={onDrag}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          onTouchMove={onDrag}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6  items-stretch cursor-grab [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                // Kart boyutları büyütüldü: lg ekranda %45 genişlik
                className="relative flex flex-col bg-white rounded-[32px] p-8 md:p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow duration-300 border border-black/[0.04] snap-start shrink-0 w-[90%] md:w-[60%] lg:w-[45%] group z-10 overflow-hidden"
              >
                {/* 
                  Sağdaki Odimax Dekoratif Görseli 
                  CSS Filter ile PNG görselini Odimax kurumsal mavisine dönüştürüyoruz
                */}
                <div className="absolute top-0 right-0 h-full w-2/3 pointer-events-none -z-10 opacity-15 sepia hue-rotate-[190deg] saturate-[300%] transition-opacity duration-500 group-hover:opacity-25">
                  <Image
                    src="https://odimax.com.tr/wp-content/themes/odimax/assets/img/14.png"
                    alt="Odimax Background"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain object-right"
                  />
                </div>

                {/* İçerik */}
                <div className="flex-1 flex flex-col">
                  {/* İkon ve Başlık Yan Yana */}
                  <div className="flex items-center gap-4 mb-3 md:mb-6">
                    <h3 className="font-sans text-xl md:text-2xl lg:text-3xl font-semibold text-brand-header-text leading-wide pr-0 md:pr-4">
                      {step.title}
                    </h3>
                  </div>

                  <p className="font-sans text-brand-text text-base  md:text-lg leading-normal md:leading-relaxed mb-2 md:mb-4 relative z-10">
                    {step.description}
                  </p>

                  {/* Maddeler */}
                  <ul className="space-y-2 md:space-y-4 mt-auto pt-2 md:pt-8 border-t border-brand-neutral">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1 md:gap-3">
                        <CheckCircle2
                          className="w-6 h-6 text-brand-blue flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        <span className="text-brand-header-text font-medium text-base md:text-lg leading-normal md:leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
