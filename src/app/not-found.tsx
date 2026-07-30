// src/app/not-found.tsx
import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-brand-neutral font-sans relative overflow-hidden">
      
      {/* Arka plan bulanıklık efekti (Premium SaaS dokunuşu) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 text-center flex flex-col items-center">
        {/* İkon Kartı */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-md flex items-center justify-center mb-8 border border-gray-100">
          <AlertTriangle className="w-10 h-10 text-brand-blue" />
        </div>

        {/* 404 Başlık - Gradient Efekti ile */}
        <h1 className="text-7xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-[#02b6da] to-brand-dark mb-4 drop-shadow-sm">
          404
        </h1>

        {/* Alt Başlık ve Açıklama */}
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-brand-text/80 text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
          Aradığınız sayfa taşınmış, ismini değiştirmiş veya artık Odimax sunucularında yer almıyor olabilir.
        </p>

        {/* Anasayfaya Dönüş Butonu (Header ve MobileMenu'deki orijinal yapı) */}
        <Link 
          href="/"
          className="group flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue via-[#02b6da] to-brand-dark bg-[length:200%_auto] animate-text-gradient text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(2,182,218,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(2,182,218,0.5)] hover:-translate-y-1"
        >
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          Anasayfaya Dön
        </Link>
      </div>
    </main>
  );
}