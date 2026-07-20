import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-brand-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Başlık ve Alt Metin */}
        <div className="max-w-6xl mx-auto space-y-6">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-[#222324] from-60% to-[#595A5B] bg-clip-text text-transparent">
            İşitme Merkezinizde Dağınık İlerleyen Süreçleri Tek Panelde
            Düzenleyin
          </h1>
          <p className="font-sans text-lg md:text-xl text-brand-text max-w-3xl mx-auto leading-relaxed">
            Hasta takibi, randevu, stok, tahsilat, ÜTS işlemleri ve Tamir &
            Servis entegrasyonları ayrı ayrı yönetilmesin. Odimax ile
            merkezinizin günlük işleyişindeki kritik süreçlerini tek panelde
            görün, takip edin ve kontrol edin.
          </p>
        </div>

        {/* Aksiyon Butonları (CTA) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          {/* Primary Button */}
          <Link
            href="/demo"
            className="font-sans flex items-center justify-center gap-2 bg-brand-dark hover:bg-brand-dark-hover text-white font-medium py-3.5 px-8 rounded-full transition-colors duration-300 w-full sm:w-auto shadow-md"
          >
            15 Günlük Demo Talep Et
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Secondary Button */}
          <Link
            href="/video"
            className="font-sans flex items-center justify-center gap-2 bg-white hover:bg-brand-light text-brand-dark font-medium py-3.5 px-8 rounded-full transition-colors duration-300 w-full sm:w-auto border border-black/5 shadow-sm"
          >
            <PlayCircle className="w-5 h-5" />
            Videoyu İzle
          </Link>
        </div>

        {/* Panel Görseli (Mockup) */}
        <div className="mt-16 md:mt-24 relative mx-auto w-full max-w-5xl">
          <div className="relative rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl border border-white/40 bg-white">
            <Image
              src="/home/hero.webp"
              alt="Odimax Tek Panel Yönetim Ekranı"
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
