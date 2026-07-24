"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const LOCAL_VIDEOS = [
  {
    id: 1,
    src: "/video/Odimax1.mp4",
    poster: "/video/Cover1.JPG",
  },
  {
    id: 2,
    src: "/video/Odimax2.mp4",
    poster: "/video/Cover2.JPG",
  },
];

export default function VideoSliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Videoların oynatılma durumunu takip etmek için state
  const [playingState, setPlayingState] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingState((prev) => ({ ...prev, [id]: true }));
      } else {
        video.pause();
        setPlayingState((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === LOCAL_VIDEOS.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? LOCAL_VIDEOS.length - 1 : prev - 1,
    );
  };

  return (
    <section id="video-alani" className="py-12 md:py-16 lg:py-24 bg-brand-neutral overflow-hidden relative font-sans w-full">
      {/* Arka plan derinliği için dekoratif parlama */}
      <div className="absolute top-0 left-0 -translate-y-12 -translate-x-1/3 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* SOL DEKORATİF LOGO (Tam Ekran Kenarı - Yarısı Kesik)
      */}
      <div className="hidden xl:block absolute left-0 top-7/12 -translate-y-1/2 -translate-x-1/2 w-[350px] xl:w-[500px] aspect-square pointer-events-none z-0">
        <Image
          src="/odimax/Logo3.png"
          alt="Odimax Pattern"
          fill
          className="object-contain"
        />
      </div>

      {/* SAĞ DEKORATİF LOGO (Tam Ekran Kenarı - Yarısı Kesik)
      */}
      <div className="hidden xl:block absolute right-0 top-7/12 -translate-y-1/2 translate-x-1/2 w-[350px] xl:w-[500px] aspect-square pointer-events-none z-0">
        <Image
          src="/odimax/Logo3.png"
          alt="Odimax Pattern"
          fill
          className="object-contain"
        />
      </div>

      {/* ANA İÇERİK KAPSAYICISI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* BAŞLIK VE ROZET */}
        <div className="text-center mb-4 md:mb-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-normal md:tracking-widest uppercase text-sm">
              ODİMAX'I YAKINDAN TANIYIN
            </span>
          </div>

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Müşterilerimiz Anlatıyor
          </h2>
        </div>

        {/* VİDEO VE SLIDER ALANI */}
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-3xl lg:max-w-4xl mx-auto group z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {LOCAL_VIDEOS.map((video, index) => (
              <div
                key={video.id}
                className={`relative w-full aspect-[9/16] overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-[#0a0a0a]   items-center justify-center ${
                  currentSlide === index ? "flex" : "hidden md:flex"
                }`}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[video.id] = el;
                  }}
                  onPlay={() => setPlayingState((prev) => ({ ...prev, [video.id]: true }))}
                  onPause={() => setPlayingState((prev) => ({ ...prev, [video.id]: false }))}
                  className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-in-out]"
                  controls={playingState[video.id] || false} 
                  controlsList="nodownload"
                  preload="none"
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>

                {/* ÖZEL PLAY BUTONU (Video Oynatılmıyorsa Ortada Görünür) */}
                {!playingState[video.id] && (
                  <button
                    onClick={() => togglePlay(video.id)}
                    className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 md:bg-gradient-to-br md:from-brand-dark md:via-[#4360a5] md:to-brand-blue bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:bg-brand-blue transition-all duration-300 z-10 backdrop-blur-sm"
                    aria-label="Videoyu Oynat"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 fill-white translate-x-0.5" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Slayt Kontrolleri (Oklar ve Noktalar) - SADECE MOBİLDE GÖRÜNÜR (md:hidden) */}
          {LOCAL_VIDEOS.length > 1 && (
            <div className="md:hidden block">
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] rounded-full shadow-lg border border-black/5 flex items-center justify-center text-brand-dark hover:text-brand-blue transition-all z-20"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] rounded-full shadow-lg border border-black/5 flex items-center justify-center text-brand-dark hover:text-brand-blue transition-all z-20"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* SLIDER İNDİKATÖRÜ (NOKTALAR) BURADA AYARLANIYOR */}
              <div className="flex justify-center gap-2 mt-4">
                {LOCAL_VIDEOS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index
                        ? "w-8 h-2.5 bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto]" // Aktif nokta genişliği, yüksekliği ve rengi
                        : "w-2.5 h-2.5 bg-brand-dark/20 hover:bg-brand-dark/40" // Pasif nokta boyutları
                    }`}
                    aria-label={`Video ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
      `,
        }}
      />
    </section>
  );
}