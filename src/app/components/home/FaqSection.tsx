"use client";

import { useState } from "react";
import { Plus, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const FAQS = [
  {
    id: 1,
    question: "Demo süreci nasıl işliyor?",
    answer:
      "Demo talep ettikten sonra ekibimiz işletmenizin ihtiyacını analiz eder, size özel bir demo hazırlar ve uygun kurulum sürecini birlikte planlarız.",
  },
  {
    id: 2,
    question: "Başlangıç ve Standart paketinin farkı nedir?",
    answer:
      "Başlangıç paketi temel yönetim özelliklerini barındırırken, standart paketimizde gelişmiş raporlama, stok takibi ve detaylı ÜTS entegrasyonu bulunmaktadır.",
  },
  {
    id: 3,
    question: "Fiyatın içinde neler var?",
    answer:
      "Sistem lisans bedeli, güvenli bulut barındırma, günlük veri yedekleme, kurulum desteği ve standart teknik destek süreçleri fiyatlandırmamıza dahildir.",
  },
  {
    id: 4,
    question: "e-Fatura, e-Arşiv ve e-İrsaliye kullanabilir miyim?",
    answer:
      "Evet, Odimax üzerinden e-Dönüşüm süreçlerinizi sisteminize tam entegre bir şekilde yönetebilir ve resmileştirebilirsiniz.",
  },
  {
    id: 5,
    question: "Mevcut verilerimi Odimax'a nasıl taşırım?",
    answer:
      "Mevcut hasta, randevu ve stok verilerinizi hazırladığımız Excel şablonları aracılığıyla hızlı ve güvenli bir şekilde sisteme aktarabilirsiniz.",
  },
  {
    id: 6,
    question: "Verilerim güvende mi?",
    answer:
      "Tüm verileriniz üst düzey güvenlik standartlarına sahip sunucularda barındırılır ve veri kaybını önlemek için düzenli olarak yedeklenir.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(0);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-6 sm:py-6 md:py-8 lg:py-12 bg-brand-neutral font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst Başlık ve İletişim Alanı */}
        <div className="text-center mb-4 md:mb-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-normal md:tracking-widest uppercase text-sm ">
              SSS
            </span>
          </div>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Sıkça Sorulanlar.
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-text leading-normal mb-4 md:leading-relaxed">
            Cevabını bulamadığınız bir konu varsa, ekibimize WhatsApp veya
            e-posta ile yazın, aynı gün dönüş yapıyoruz.
          </p>
          <Link
            href="/contact"
            className="font-sans inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue transition-colors duration-300 bg-white px-5 py-2.5 rounded-full shadow-sm border border-black/[0.05]"
          >
            Bize ulaşın
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* SSS Akordeon Listesi */}
        <div className="space-y-2 md:space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                // m-[1px] YERİNE p-[1px] KULLANIYORUZ: Bu sayede margin çökmesi yaşanmaz ve her yön eşit olur.
                className="relative rounded-2xl p-[1px] group transition-all duration-300"
              >
                {/* Gradient Çerçeve Katmanı (En arkada) */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] animate-text-gradient transition-all duration-500 ${
                    isOpen
                      ? "opacity-100 shadow-md"
                      : "opacity-40 group-hover:opacity-100"
                  }`}
                ></div>

                {/* İçerik Kutusu: z-10 ekleyerek arka planın üstünde kalmasını garantiliyoruz */}
                <div className="relative z-10 bg-white rounded-[15px] px-4 sm:px-8 h-full">
                  {/* Tıklanabilir Soru Alanı (Buradan sonrası sendeki kodla tamamen aynı) */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none"
                  >
                    <span
                      className={`font-sans text-base md:text-lg font-semibold transition-colors duration-300 ${
                        isOpen
                          ? "text-brand-blue"
                          : "text-brand-header-text group-hover:text-brand-blue"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* İkon Çerçevesi */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "border-brand-blue bg-brand-blue/10 text-brand-blue rotate-90"
                          : "border-black/[0.1] bg-white text-brand-dark group-hover:border-brand-blue/30"
                      }`}
                    >
                      {isOpen ? (
                        <X className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Cevap Alanı (Animasyonlu Grid Hilesi) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0 pb-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-sans text-brand-text/90 text-base leading-normal md:leading-relaxed pr-8 sm:pr-12">
                        {faq.answer}
                      </p>
                    </div>
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
