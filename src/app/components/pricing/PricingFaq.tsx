"use client";

import { useState } from "react";
import { ArrowRight, Link, Plus, X } from "lucide-react";

const FAQ_DATA = [
  {
    id: 1,
    question: "Pakete hangi süreçler dahil?",
    answer: "Odimax kullanım planında hasta yönetimi, randevu takibi, cihaz satışı, stok ve seri numarası takibi, ÜTS süreçleri, tahsilat, kasa, raporlama ve kullanım desteği yer alır. Amaç, merkezinizin günlük işleyişini tek panelde daha düzenli takip edebilmenizdir.",
  },
  {
    id: 2,
    question: "Şube yapısı olan merkezlerde süreç nasıl ilerler?",
    answer: "Birden fazla şubesi olan merkezlerde hasta, satış, stok, tahsilat ve randevu süreçleri şube yapısına göre değerlendirilir. Demo sürecinde merkez yapınız incelenir ve kullanım kapsamı buna göre netleştirilir.",
  },
  {
    id: 3,
    question: "15 günlük demo nasıl ilerler?",
    answer: "Demo süreci yalnızca sisteme giriş yapıp inceleme süreci değildir. Merkezinizin temel ihtiyaçları değerlendirilir; hasta, randevu, satış, tahsilat ve stok akışlarının Odimax içinde nasıl ilerleyeceği birlikte gösterilir.",
  },
  {
    id: 4,
    question: "Kurulum ve kullanım desteği dahil mi?",
    answer: "Evet. Odimax’a başlangıç sürecinde kurulum ve kullanım desteği sağlanır. Amaç, ekibinizin sistemi yalnız bırakılmadan tanıması ve günlük iş akışına daha kolay adapte olmasıdır.",
  },
];

export default function PricingFaq() {
  const [openId, setOpenId] = useState<number | null>(0);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-8 md:py-8 lg:py-12 bg-brand-neutral font-sans ">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
        </div>

        <div className="space-y-2 md:space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id} 
                className="relative rounded-2xl p-[1px] group transition-all duration-300"
              >
                <div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] animate-text-gradient transition-all duration-500 ${
                    isOpen ? "opacity-100 shadow-md" : "opacity-40 group-hover:opacity-100"
                  }`}
                ></div>

                <div className="relative z-10 bg-white rounded-[15px] px-4 sm:px-8 h-full">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none"
                  >
                    <span 
                      className={`font-sans text-[16px] md:text-lg font-semibold transition-colors duration-300 ${
                        isOpen ? "text-brand-blue" : "text-brand-header-text group-hover:text-brand-blue"
                      }`}
                    >
                      {faq.question}
                    </span>
                    
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

                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0 pb-0"
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