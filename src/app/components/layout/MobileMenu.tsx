// src/components/layout/MobileMenu.tsx
"use client";

import { X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

// Header'daki tiplerle aynı yapıyı kullanarak TypeScript hatalarını önlüyoruz
export interface SubMenuItem {
  name: string;
  path: string;
}

export interface MenuItemType {
  name: string;
  path?: string;
  subItems?: SubMenuItem[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItemType[]; // Props tipini güncelledik
}

export default function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
  // Alt menülerin açık/kapalı durumunu yönetmek için state
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

  const toggleSubMenu = (menuName: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  // Menü açıkken arkadaki sayfanın kaydırılmasını (scroll) engelleriz
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Karanlık Arka Plan Katmanı (Overlay) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menü Paneli (Sağdan kayarak gelen akışkan panel) */}
      <div 
        className={`fixed top-0 right-0 w-[85vw] sm:w-[350px] h-full bg-white border-l border-black/10 z-[70] transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Üst Bar (Kurumsal İsim ve Kapatma Butonu) */}
        <div className="flex items-center justify-between p-6 border-b border-black/5">
          <span className="font-sans font-bold text-xl text-brand-dark tracking-widest uppercase">
            ODIMAX
          </span>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center hover:bg-brand-neutral transition-colors group"
            aria-label="Menüyü Kapat"
          >
            <X className="w-5 h-5 text-brand-dark group-hover:text-brand-blue transition-colors" />
          </button>
        </div>

        {/* Navigasyon Linkleri ve Akordiyon */}
        <nav className="flex-1 flex flex-col py-6 px-6 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-black/5 last:border-none">
              
              {/* Eğer alt menü (subItems) varsa Akordiyon oluştur */}
              {item.subItems ? (
                <div className="flex flex-col">
                  <button
                    onClick={() => toggleSubMenu(item.name)}
                    className="group flex items-center justify-between py-4 text-lg font-semibold text-brand-dark hover:text-brand-blue transition-colors w-full text-left"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openSubMenus[item.name] ? "-rotate-180 text-brand-blue" : "text-brand-text"
                      }`}
                    />
                  </button>
                  
                  {/* Açılır Kapanır Alt İçerik */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openSubMenus[item.name] ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col space-y-2 pl-4 border-l-2 border-brand-light ml-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          onClick={onClose}
                          className="py-2 text-base font-medium text-brand-blue hover:text-brand-blue transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                
                /* Alt menü yoksa doğrudan Link oluştur */
                <Link
                  href={item.path!}
                  onClick={onClose}
                  className="group flex items-center justify-between py-4 text-lg font-semibold text-brand-dark hover:text-brand-blue transition-colors"
                >
                  <span>{item.name}</span>
                  <span className="text-brand-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    →
                  </span>
                </Link>
                
              )}
            </div>
          ))}
        </nav>

        {/* Alt Kısım (Hızlı İletişim / CTA) */}
        <div className="p-6 border-t border-black/5 bg-brand-light/30">
          <Link 
            href="/contact"
            onClick={onClose}
            className="block w-full text-center bg-brand-dark hover:bg-brand-dark-hover font-sans text-white font-medium py-3.5 rounded-xl transition-colors duration-300 shadow-sm"
          >
            İletişime Geçin
          </Link>
        </div>
      </div>
    </>
  );
}