import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ModuleHeroProps {
  badge: string;
  title: string;
  description: string;
  image: string;
}

export default function ModuleHero({
  badge,
  title,
  description,
  image,
}: ModuleHeroProps) {
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
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-[#222324] from-60% to-[#595A5B] bg-clip-text text-transparent">
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
            href="/demo"
            className="font-sans flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue via-[#02b6da] to-brand-dark bg-[length:200%_auto] animate-text-gradient text-white font-medium py-3.5 px-8 rounded-full transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg hover:scale-105"
          >
            15 Günlük Demo Talep Et
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Dinamik Panel Görseli (Mockup) */}
        <div className="mt-16 md:mt-24 relative mx-auto w-full max-w-5xl">
          <div className="relative rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl border border-white/40 bg-white">
            <Image
              src={image}
              alt={title}
              width={1600}
              height={1200}
              className="w-full object-cover"
              priority
            />
          </div>

          {/* Görselin arkasına derinlik katan hafif parlama efekti */}
          <div className="absolute top-10 inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent blur-3xl -z-10 rounded-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
