import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Bileşenin dışarıdan alacağı verilerin tip tanımlaması
interface InnerHeroProps {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function InnerHero({ title, description, breadcrumbs }: InnerHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-brand-neutral overflow-hidden border-b border-black/[0.05]">
      {/* Dekoratif Arka Plan (Odimax kurumsal kimliğine uygun hafif bir derinlik) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb (Sayfa Yolu) Navigasyonu */}
        <nav className="flex items-center gap-2 text-sm font-medium mb-6">
          <Link href="/" className="text-brand-text hover:text-brand-blue transition-colors">
            Anasayfa
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-brand-text/50" />
              {index === breadcrumbs.length - 1 ? (
                <span className="text-brand-blue">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="text-brand-text hover:text-brand-blue transition-colors">
                  {crumb.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Sayfa Başlığı ve Açıklaması */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-brand-text leading-relaxed">
              {description}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}