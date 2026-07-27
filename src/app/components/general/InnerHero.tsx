import Link from "next/link";
import Image from "next/image"; // Logoyu eklemek için Image bileşenini dahil ettik
import { ChevronRight } from "lucide-react";

interface InnerHeroProps {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function InnerHero({ title, description, breadcrumbs }: InnerHeroProps) {
  return (
<section className="relative h-[400px] lg:h-[480px] flex flex-col justify-center pt-24 lg:pt-32 bg-brand-dark overflow-hidden font-sans">      
      {/* 
        SaaS SOUNDWAVE (SES DALGASI) EFEKTİ
        Dalgalar artık daha belirgin ve logodan yayılıyor hissi veriyor.
      */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] pointer-events-none z-0 flex items-center justify-center opacity-90">
        
        {/* Merkezdeki derin parlama (Glow) */}
        <div className="absolute inset-0 bg-brand-blue/30 rounded-full blur-[100px]"></div>
        
        {/* 
          Daha Belirgin Frekans Halkaları:
          Border kalınlıkları (2px) ve shadow değerleri artırılarak animasyonun 
          çok daha net ve 3 boyutlu algılanması sağlandı.
        */}
        <div 
          className="absolute w-full h-full rounded-full border-2 border-brand-blue/30 animate-pulse shadow-[0_0_20px_rgba(111,231,255,0.1)]"
        ></div>
        
        <div 
          className="absolute w-[75%] h-[75%] rounded-full border-2 border-[#6fe7ff]/40 animate-pulse shadow-[0_0_30px_rgba(111,231,255,0.2)]" 
          style={{ animationDelay: "0.5s" }}
        ></div>
        
        <div 
          className="absolute w-[50%] h-[50%] rounded-full border-2 border-white/30 animate-pulse shadow-[0_0_40px_rgba(255,255,255,0.2)]" 
          style={{ animationDelay: "1s" }}
        ></div>
        
        {/* 
          En İçteki Daire ve Logo Konteyneri
          Arka planını koyu yaparak logonun patlamasını sağladık.
        */}
        <div className="absolute w-[25%] h-[25%] rounded-full bg-brand-dark/10 border-2 border-[#6fe7ff]/60 shadow-[0_0_50px_rgba(111,231,255,0.4)] flex items-center justify-center z-10 overflow-hidden">
          
          {/* Logo İçin Alan (w-1/2 h-1/2 vererek dış çemberle biraz boşluk bıraktık) */}
          <div className="relative w-1/2 h-1/2">
            <Image 
              src="/home/logo2.webp" // Kendi logonun dizini ile burayı değiştirebilirsin
              alt="Odimax Logo" 
              fill
              className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </div>

        </div>
        
      </div>

      {/* İçeriğin tam genişlikte kalması için w-full eklendi */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb (Sayfa Yolu) Navigasyonu */}
        <nav className="flex items-center gap-2 text-sm font-medium mb-8 lg:mb-10">
          <Link href="/" className="font-sans text-white/60 hover:text-white transition-colors">
            Anasayfa
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-white/40" />
              {index === breadcrumbs.length - 1 ? (
                <span className="text-[#6fe7ff] drop-shadow-sm">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="font-sans text-white/60 hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Sayfa Başlığı ve Açıklaması */}
        <div className="max-w-3xl">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.15] drop-shadow-sm">
            {title}
          </h1>
          {description && (
            <p className="font-sans text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-2xl">
              {description}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}