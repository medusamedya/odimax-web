"use client";

import { useState } from "react";
import { Plus, X, ArrowRight } from "lucide-react";
import Link from "next/link";

// Sıkça sorulan sorular verisi. Görseldeki metinler Odimax'a uyarlandı.
const FAQS = [
  {
    id: 1,
    question: "Demo süreci nasıl işliyor?",
    answer: "Demo talep ettikten sonra ekibimiz işletmenizin ihtiyacını analiz eder, size özel bir demo hazırlar ve uygun kurulum sürecini birlikte planlarız.",
  },
  {
    id: 2,
    question: "Başlangıç ve Standart paketinin farkı nedir?",
    answer: "Başlangıç paketi temel yönetim özelliklerini barındırırken, standart paketimizde gelişmiş raporlama, stok takibi ve detaylı ÜTS entegrasyonu bulunmaktadır.",
  },
  {
    id: 3,
    question: "Fiyatın içinde neler var?",
    answer: "Sistem lisans bedeli, güvenli bulut barındırma, günlük veri yedekleme, kurulum desteği ve standart teknik destek süreçleri fiyatlandırmamıza dahildir.",
  },
  {
    id: 4,
    question: "e-Fatura, e-Arşiv ve e-İrsaliye kullanabilir miyim?",
    answer: "Evet, Odimax üzerinden e-Dönüşüm süreçlerinizi sisteminize tam entegre bir şekilde yönetebilir ve resmileştirebilirsiniz.",
  },
  {
    id: 5,
    question: "Mevcut verilerimi Odimax'a nasıl taşırım?",
    answer: "Mevcut hasta, randevu ve stok verilerinizi hazırladığımız Excel şablonları aracılığıyla hızlı ve güvenli bir şekilde sisteme aktarabilirsiniz.",
  },
  {
    id: 6,
    question: "Verilerim güvende mi?",
    answer: "Tüm verileriniz üst düzey güvenlik standartlarına sahip sunucularda barındırılır ve veri kaybını önlemek için düzenli olarak yedeklenir.",
  },
];

export default function FaqSection() {
  // Görseldeki gibi ilk öğenin açık gelmesini istersen 1 yapabilirsin, kapalı başlaması için null.
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    // Eğer tıklanan öğe zaten açıksa kapat, değilse tıklananı aç
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-brand-neutral font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Başlık ve İletişim Alanı */}
        <div className="text-center mb-12">
            <h2 className="font-sans mb-4 text-4xl md:text-5xl font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Sıkça sorulanlar.
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-text max-w-3xl mx-auto leading-relaxed mb-4">
            Cevabını bulamadığınız bir konu varsa, ekibimize WhatsApp veya e-posta ile yazın, aynı gün dönüş yapıyoruz.
          </p>
          <Link 
            href="/contact" 
            className="font-sans inline-flex items-center gap-2 text-brand-dark font-medium hover:text-brand-blue transition-colors duration-300"
          >
            Bize ulaşın
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* SSS Akordeon Listesi */}
        <div className="border-t border-black/[0.08]">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div 
                key={faq.id} 
                className="border-b border-black/[0.08]"
              >
                {/* Tıklanabilir Soru Alanı */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
                >
                  <span className="font-sans text-[16px] md:text-lg font-medium text-brand-header-text group-hover:text-brand-blue transition-colors duration-300">
                    {faq.question}
                  </span>
                  
                  {/* İkon Çerçevesi */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-black/[0.1] flex items-center justify-center bg-white transition-colors duration-300 group-hover:border-brand-blue/30">
                    {isOpen ? (
                      <X className="w-4 h-4 text-brand-dark group-hover:text-brand-blue" />
                    ) : (
                      <Plus className="w-4 h-4 text-brand-dark group-hover:text-brand-blue" />
                    )}
                  </div>
                </button>

                {/* 
                  Cevap Alanı (Animasyonlu)
                  CSS Grid trick kullanılarak pürüzsüz açılıp kapanma sağlanır.
                */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? "grid-rows-[1fr] opacity-100 pb-6" 
                      : "grid-rows-[0fr] opacity-0 pb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-brand-text text-base leading-relaxed pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}