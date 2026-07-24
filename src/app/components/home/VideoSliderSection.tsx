"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Videoları ve kendi oluşturacağın kapak fotoğraflarını (poster) tanımlıyoruz.
const LOCAL_VIDEOS = [
  {
    id: 1,
    src: "/video/Odimax1.mp4",
    poster: "/video/Odimax1-poster.webp", 
  },
  {
    id: 2,
    src: "/video/Odimax2.mp4",
    poster: "/video/Odimax2-poster.webp", 
  }
];

export default function VideoSliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === LOCAL_VIDEOS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? LOCAL_VIDEOS.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-brand-neutral overflow-hidden relative font-sans w-full">
      
      {/* Arka plan derinliği için dekoratif parlama */}
      <div className="absolute top-0 left-0 -translate-y-12 -translate-x-1/3 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

    {/* 
        SOL DEKORATİF GÖRSEL (Tam Ekran Kenarı)
        Boyutlar büyütüldü ve görsel aynalandı (-scale-x-100 eklendi).
      */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[350px] xl:w-[500px] h-[800px] opacity-20 pointer-events-none z-0 transform ">
        <div 
          className="w-full h-full bg-gradient-to-b from-brand-blue via-[#022ada] to-brand-dark"
          style={{
            WebkitMaskImage: 'url(/image.webp)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'left center', // Aynalandığı için left olarak kalmalı
            maskImage: 'url(/image.webp)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'left center',
          }}
        />
      </div>

      {/* 
        SAĞ DEKORATİF GÖRSEL (Tam Ekran Kenarı)
        Boyutlar büyütüldü, aynalama kaldırıldı ve sağa hizalandı (right center).
      */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[350px] xl:w-[500px] h-[800px] opacity-20 pointer-events-none z-0">
        <div 
          className="w-full h-full bg-gradient-to-b from-brand-blue via-[#022ada] to-brand-dark"
          style={{
            WebkitMaskImage: 'url(/14.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'right center', // Aynalama olmadığı için sağa yapışması adına right yapıldı
            maskImage: 'url(/14.png)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'right center',
          }}
        />
      </div>

      {/* ANA İÇERİK KAPSAYICISI (Ortalanmış Alan) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BAŞLIK VE ROZET */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-normal md:tracking-widest uppercase text-sm">
              ODİMAX'I YAKINDAN TANIYIN
            </span>
          </div>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Sistemi Çalışırken Görün
          </h2>
        </div>

        {/* SLIDER ALANI */}
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] mx-auto group z-20">
          
          <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-[#0a0a0a] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-black/10 flex items-center justify-center">
            
            <video
              key={LOCAL_VIDEOS[currentSlide].id}
              className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-in-out]"
              controls
              controlsList="nodownload" 
              preload="none" 
              poster={LOCAL_VIDEOS[currentSlide].poster} 
            >
              <source src={LOCAL_VIDEOS[currentSlide].src} type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>

          </div>

          {/* Slayt Kontrolleri (Oklar) */}
          {LOCAL_VIDEOS.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-20 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-lg border border-black/5 flex items-center justify-center text-brand-dark hover:text-brand-blue hover:scale-110 transition-all z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-20 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-lg border border-black/5 flex items-center justify-center text-brand-dark hover:text-brand-blue hover:scale-110 transition-all z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </>
          )}
          
          {/* Noktalı Göstergeler (Dots) */}
          {LOCAL_VIDEOS.length > 1 && (
            <div className="flex justify-center gap-2 mt-4 md:mt-8">
              {LOCAL_VIDEOS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index 
                      ? "w-8 h-2.5 bg-brand-blue" 
                      : "w-2.5 h-2.5 bg-brand-dark/20 hover:bg-brand-dark/40"
                  }`}
                  aria-label={`Video ${index + 1}`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </section>
  );
}