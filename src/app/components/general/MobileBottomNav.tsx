"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Tag, UserCircle, X, ChevronRight } from "lucide-react";
// Veriyi projedeki kendi yoluna göre import ettiğini varsayıyorum
import { modulesData } from "@/data/modulesData"; 

// Navigasyon verilerini ayırarak kodu temiz tutuyoruz
const BOTTOM_NAV_ITEMS = [
  { id: "home", label: "Anasayfa", href: "/", icon: Home, isAction: false },
  // Modüller için href yerine action kullanıyoruz
  { id: "modules", label: "Modüller", href: "#", icon: LayoutGrid, isAction: true },
  { id: "pricing", label: "Fiyatlandırma", href: "/pricing", icon: Tag, isAction: false },
  { id: "login", label: "Giriş Yap", href: "/giris", icon: UserCircle, isAction: false },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isModulesOpen, setIsModulesOpen] = useState(false);

  // Menü açıkken arkadaki sayfanın kaymasını (scroll) engelliyoruz
  useEffect(() => {
    if (isModulesOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModulesOpen]);

  // Bulunulan sayfa bir modül sayfası ise (örn: /modules/hasta-yonetimi), Modüller ikonunu aktif yapıyoruz
  const isModulePageActive = pathname.startsWith("/modules/");

  return (
    <>
      {/* 
        1. OVERLAY (Karanlık Arka Plan) ve MODÜLLER MENÜSÜ 
        Sadece Modüller butonu tıklandığında görünür olur.
      */}
      <div 
        className={`md:hidden fixed inset-0 z-[40] transition-opacity duration-300 ${
          isModulesOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Arkaya tıklandığında menüyü kapatan karanlık katman */}
        <div 
          className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
          onClick={() => setIsModulesOpen(false)}
        />

        {/* 
          Aşağıdan yukarı kayan Bottom Sheet (Menü İçeriği)
          pb-24 ile alt menünün (Bottom Nav) altında kalması engellenir.
        */}
        <div 
          className={`absolute bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out flex flex-col max-h-[85vh] ${
            isModulesOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Menü Başlığı ve Kapatma Butonu */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-black/[0.05] sticky top-0 bg-white/95 backdrop-blur-md rounded-t-3xl z-10">
            <div>
              <h3 className="font-bold text-brand-dark text-lg">Odimax Modülleri</h3>
              <p className="text-xs text-brand-text mt-0.5">Süreçlerinizi tek panelden yönetin</p>
            </div>
            <button 
              onClick={() => setIsModulesOpen(false)}
              className="p-2 bg-brand-neutral rounded-full text-brand-dark/60 hover:text-brand-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modül Listesi (Kaydırılabilir Alan) */}
          <div className="overflow-y-auto px-4 py-4 pb-28 [scrollbar-width:none]">
            <div className="flex flex-col gap-3">
              {Object.values(modulesData).map((modul) => (
                <Link
                  key={modul.slug}
                  // Yönlendirme URL'si /modules/ olarak güncellendi
                  href={`/modules/${modul.slug}`}
                  onClick={() => setIsModulesOpen(false)} // Tıklanınca menüyü kapat
                  className="flex items-center justify-between p-4 bg-white border border-black/[0.04] rounded-2xl shadow-sm hover:border-brand-blue/30 hover:bg-brand-blue/[0.02] transition-all group"
                >
                  <div className="flex-1 pr-4">
                    {/* Badge bilgisindeki "Modüller > " kısmını temizleyip sadece ismi gösteriyoruz */}
                    <h4 className="font-bold text-brand-dark text-sm mb-1 group-hover:text-brand-blue transition-colors">
                      {modul.hero.badge.replace("Modüller > ", "")}
                    </h4>
                    {/* Uzun başlığı tek satırda (truncate) veya iki satırda tutarak gösteriyoruz */}
                    <p className="text-xs text-brand-text line-clamp-1">
                      {modul.hero.title}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-neutral flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors text-brand-dark/40 flex-shrink-0">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 
        2. ANA BOTTOM NAV (Alt Navigasyon Çubuğu) 
        Sayfanın en altında sabit duran asıl yapı.
      */}
      <div className="md:hidden fixed bottom-0 left-0 z-50 w-full bg-white/85 backdrop-blur-xl border-t border-black/[0.05] shadow-[0_-8px_30px_-4px_rgba(0,0,0,0.04)] pb-[env(safe-area-inset-bottom)]">
        <nav className="flex justify-around items-center px-2 py-3">
          {BOTTOM_NAV_ITEMS.map((item) => {
            const IconComponent = item.icon;
            
            // Eğer "Modüller" butonuna gelindiyse, pathname ile değil, sayfanın bir modül sayfası olup olmadığıyla aktifliğini kontrol ediyoruz
            const isActive = item.isAction 
              ? (isModulesOpen || isModulePageActive) 
              : pathname === item.href;

            const handleClick = (e: React.MouseEvent) => {
              if (item.isAction) {
                e.preventDefault();
                setIsModulesOpen(!isModulesOpen);
              }
            };

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleClick}
                className={`flex flex-col items-center gap-1.5 min-w-[64px] px-2 transition-colors duration-300 ${
                  isActive 
                    ? "text-brand-blue" 
                    : "text-brand-dark/50 hover:text-brand-dark/80"
                }`}
              >
                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isActive ? "bg-brand-blue/10" : "bg-transparent"}`}>
                  <IconComponent 
                    className="w-5 h-5" 
                    strokeWidth={isActive ? 2.5 : 2} 
                  />
                </div>
                
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
    </>
  );
}