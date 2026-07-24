import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const FEATURES = [
  "Hasta & randevu yönetimi",
  "ÜTS entegrasyonu",
  "Satış, kasa ve tahsilat takibi",
  "WhatsApp hatırlatmaları",
  "Stok, tedarikçi & satınalma",
  "Tüm modüller sınırsız",
  "Öncelikli destek",
];

export default function PricingCards() {
  return (
    <section className="py-8 md:py-8 lg:py-12 bg-brand-neutral font-sans ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Sol Kart (Aylık) */}
          <div className="bg-white rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-lg border border-black/[0.04] flex flex-col">
            <h3 className="text-xl md:text-3xl font-bold text-brand-dark mb-2">Aylık Ödeme</h3>
            <p className="text-brand-text mb-3 md:mb-6">Tek Şubeli Merkezler</p>
            <div className="text-xl md:text-[28px] font-black text-brand-dark mb-8 tracking-tight">
              1.450 TL <span className="text-xl font-bold text-brand-dark/70">+ KDV / ay</span>
            </div>
            
            <ul className="space-y-2 md:space-y-4 mb-6 md:mb-10 flex-1">
              {FEATURES.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-brand-dark/80 font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-dark/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-brand-dark" strokeWidth={3} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-brand-dark text-white font-bold hover:bg-brand-blue transition-colors">
              Demo Talep Et
            </button>
          </div>

          {/* Orta Kart (Yıllık - Avantajlı) */}
          <div className="bg-gradient-to-br from-brand-dark via-[#1a2642] to-brand-blue rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col transform md:-translate-y-4">
            {/* Arka plan dekoratif görseli (7.png) */}
            <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay pointer-events-none">
              <Image 
                src="/7.png" 
                alt="Odimax Pattern" 
                fill 
                className="object-cover object-bottom" 
              />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Yıllık Ödeme <span className="font-medium">(Avantajlı)</span></h3>
              <p className="text-white mb-3 md:mb-6">Yıllık peşin ödeme</p>
              <div className="text-xl md:text-[28px] font-black text-white mb-8 tracking-tight">
                990 TL <span className="text-xl font-bold text-white/80">+ KDV / ay</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {FEATURES.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 md:gap-3 text-white font-medium">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-white text-brand-dark font-bold hover:bg-gray-50 transition-colors shadow-lg">
                Demo Talep Et
              </button>
            </div>
          </div>

          {/* Sağ Kart (Özel Fiyat) */}
          <div className="bg-white rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-lg border border-black/[0.04] flex flex-col">
            <h3 className="text-xl md:text-3xl font-bold text-brand-dark mb-2">Özel Fiyat için <br/> İletişime Geçin</h3>
            <p className="text-brand-text mb-3 md:mb-6">Birden Fazla Şubesi Olan Merkezler</p>
            {/* Özel fiyat kartında sabit fiyat alanı boş bırakıldığı için boşluk (spacer) bırakıyoruz */}
            <div className="h-[2.5rem] "></div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {FEATURES.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-brand-dark/80 font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-dark/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-brand-dark" strokeWidth={3} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-brand-dark text-white font-bold hover:bg-brand-blue transition-colors">
              İletişime Geç
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}