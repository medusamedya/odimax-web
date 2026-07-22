"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Tag, UserCircle } from "lucide-react";

// DRY Prensibi: Navigasyon verilerini ayırarak kodu temiz tutuyoruz
const BOTTOM_NAV_ITEMS = [
  { 
    id: "home", 
    label: "Anasayfa", 
    href: "/", 
    icon: Home 
  },
  { 
    id: "modules", 
    label: "Modüller", 
    href: "/moduller", 
    icon: LayoutGrid 
  },
  { 
    id: "pricing", 
    label: "Fiyatlandırma", 
    href: "/fiyatlandirma", 
    icon: Tag 
  },
  { 
    id: "login", 
    label: "Giriş Yap", 
    href: "/giris", 
    icon: UserCircle 
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    // Sadece mobilde görünür (md:hidden), alt kısma sabitlenir, cam efekti uygulanır.
    // pb-[env(safe-area-inset-bottom)] -> iOS cihazlardaki alt çentik boşluğunu otomatik ayarlar.
    <div className="md:hidden fixed bottom-0 left-0 z-50 w-full bg-white/85 backdrop-blur-xl border-t border-black/[0.05] shadow-[0_-8px_30px_-4px_rgba(0,0,0,0.04)] pb-[env(safe-area-inset-bottom)]">
      <nav className="flex justify-around items-center px-2 py-3">
        {BOTTOM_NAV_ITEMS.map((item) => {
          const IconComponent = item.icon;
          // Bulunulan sayfa ile butonun linki eşleşiyorsa aktif durumu (true) alır
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center gap-1.5 min-w-[64px] px-2 transition-colors duration-300 ${
                isActive 
                  ? "text-brand-blue" 
                  : "text-brand-dark/50 hover:text-brand-dark/80"
              }`}
            >
              {/* İkon: Aktif ise hafif kalınlaşır ve dolgulu gibi görünmesi için arka plan rengi alır */}
              <div className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isActive ? "bg-brand-blue/10" : "bg-transparent"}`}>
                <IconComponent 
                  className="w-5 h-5" 
                  strokeWidth={isActive ? 2.5 : 2} 
                />
              </div>
              
              {/* Etiket: Aktif ise daha koyu ve belirgin olur */}
              <span 
                className={`text-[10px] tracking-wide transition-all duration-300 ${
                  isActive ? "font-bold" : "font-medium"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}