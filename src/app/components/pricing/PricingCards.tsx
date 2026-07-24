"use client";

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
    <section className="py-12 md:py-16 lg:py-24 bg-brand-neutral font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ortalanmış Bölüm Başlığı */}
        <div className="text-center mb-0 md:mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-2 md:mb-2">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-normal md:tracking-widest uppercase text-sm ">
              FİYATLANDIRMA
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Merkeziniz İçin En Uygun Planı Seçin
          </h2>
        </div>

        {/* Yana Kaydır İndikatörü (Sadece Mobil) - StepsSlider ile birebir aynı */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-1 mb-4 text-brand-blue animate-pulse">
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

        {/* 
          Fiyatlandırma Kartları Kapsayıcısı 
          Mobilde: flex, yatay scroll, ve snap (hizalama) aktif
          Masaüstünde (md): grid, 3 sütun
        */}
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 items-stretch -mx-4 px-4 md:mx-0 md:px-0">
          
          {/* Sol Kart (Aylık) */}
          <div className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 md:shrink snap-center bg-white rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-lg border border-black/[0.04] flex flex-col">
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
          <div className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 md:shrink snap-center bg-gradient-to-br from-brand-dark via-[#1a2642] to-brand-blue rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col transform md:-translate-y-4">
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
          <div className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 md:shrink snap-center bg-white rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-lg border border-black/[0.04] flex flex-col">
            <h3 className="text-xl md:text-3xl font-bold text-brand-dark mb-2">Özel Fiyat için <br/> İletişime Geçin</h3>
            <p className="text-brand-text mb-3 md:mb-6">Birden Fazla Şubesi Olan Merkezler</p>
            <div className="h-[2.5rem] md:mb-[1.8rem]"></div>
            
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

      {/* Tailwind'de varsayılan scrollbar'ı gizlemek için küçük stil enjeksiyonu */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />
    </section>
  );
}