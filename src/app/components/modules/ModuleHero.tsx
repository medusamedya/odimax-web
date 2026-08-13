"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ModuleImage {
  src: string;
  description: string;
}

interface ModuleHeroProps {
  badge: string;
  title: string;
  description: string;
  images: ModuleImage[];
}

export default function ModuleHero({
  badge,
  title,
  description,
  images,
}: ModuleHeroProps) {
  const [activeImage, setActiveImage] = useState(0);
  const hasMultipleImages = images.length > 1;

  const showPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const currentImage = images[activeImage];

  return (
    <section className="relative pt-32  lg:pt-40  overflow-hidden bg-brand-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Başlık, Rozet (Badge) ve Alt Metin */}
        <div className="max-w-6xl mx-auto space-y-6 flex flex-col items-center">
          {/* Dinamik Rozet */}
          <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-sm ">
            {badge}
          </span>

          {/* Dinamik Başlık */}
          <h1 className="capitalize font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide pb-1 leading-tight inline-block bg-gradient-to-r from-[#222324] from-60% to-[#595A5B] bg-clip-text text-transparent">
            {title}
          </h1>

          {/* Dinamik Açıklama */}
          <p className="font-sans text-lg md:text-xl text-brand-text max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Aksiyon Butonu (CTA) - Anasayfa ile birebir aynı animasyonlu yapı */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/contact#demo-form"
            className="font-sans flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue via-[#02b6da] to-brand-dark bg-[length:200%_auto] animate-text-gradient text-white font-medium py-3.5 px-8 rounded-full transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg hover:scale-105"
          >
            15 Günlük Demo Talep Et
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Dinamik Panel Görseli (Mockup) */}
        <div className="mt-16 md:mt-24 relative mx-auto w-full max-w-5xl">
          <div className="relative">
            <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-white/40 bg-white shadow-2xl md:rounded-[32px]">
              {images.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={`${title} - ${image.description}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className={`object-contain transition-opacity duration-300 ease-out ${
                    activeImage === index ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                  priority
                />
              ))}
            </div>

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Önceki görsel"
                  className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-dark shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white md:-left-7 md:h-12 md:w-12 lg:-left-16"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label="Sonraki görsel"
                  className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-dark shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white md:-right-7 md:h-12 md:w-12 lg:-right-16"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <p className="font-sans text-lg md:text-xl text-brand-text max-w-3xl mx-auto leading-relaxed mt-4">
            {currentImage.description}
          </p>

          {hasMultipleImages && (
            <div className="mt-4 flex items-center justify-center gap-2" aria-label="Modül görselleri">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`${index + 1}. görseli göster`}
                  aria-current={activeImage === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeImage === index
                      ? "w-7 bg-brand-blue"
                      : "w-2 bg-brand-dark/20 hover:bg-brand-dark/40"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Görselin arkasına derinlik katan hafif parlama efekti */}
          <div className="absolute top-10 inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent blur-3xl -z-10 rounded-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
