// src/components/layout/MobileMenu.tsx
"use client";

import { X, ChevronDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
  menuItems: MenuItemType[];
}

export default function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

  const toggleSubMenu = (menuName: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

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
      {/* Karanlık Arka Plan Katmanı (Daha güçlü blur) */}
      <div 
        className={`fixed inset-0 bg-brand-dark/50 backdrop-blur-md z-[60] transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menü Paneli (Sağdan kayarak gelen akışkan panel - Daha yumuşak gölge ve yuvarlatılmış köşeler) */}
      <div 
        className={`fixed top-0 right-0 w-[85vw] sm:w-[400px] h-full bg-white z-[70] transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,0.1)] rounded-l-3xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Üst Bar (Logo ve Kapatma Butonu) */}
        <div className="flex items-center justify-between p-6 sm:p-8">
          <Link href="/" onClick={onClose} className="relative block h-8 w-36">
            <Image 
              src="/odimax/1.png" 
              alt="Odimax Logo" 
              fill 
              className="object-contain object-left"
              priority
            />
          </Link>
          
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 hover:scale-105 transition-all duration-300 group"
            aria-label="Menüyü Kapat"
          >
            <X className="w-6 h-6 text-slate-500 group-hover:text-brand-dark transition-colors transform group-hover:rotate-90 duration-300" />
          </button>
        </div>

        {/* Navigasyon Linkleri ve Akordiyon */}
        <nav className="flex-1 flex flex-col px-6 sm:px-8 py-4 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-slate-100 last:border-none py-2">
              
              {/* Eğer alt menü (subItems) varsa Akordiyon oluştur */}
              {item.subItems ? (
                <div className="flex flex-col">
                  <button
                    onClick={() => toggleSubMenu(item.name)}
                    className="group flex items-center justify-between py-4 text-xl font-bold text-brand-dark hover:text-brand-blue transition-colors w-full text-left"
                  >
                    <span className="tracking-tight">{item.name}</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openSubMenus[item.name] ? 'bg-brand-blue text-white shadow-md' : 'bg-slate-50 text-slate-400 group-hover:bg-brand-blue/10 group-hover:text-brand-blue'}`}>
                      <ChevronDown
                        className={`w-6 h-6 transition-transform duration-300 ${
                          openSubMenus[item.name] ? "-rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  
              {/* Açılır Kapanır Alt İçerik - Premium Sol Çizgili Tasarım */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSubMenus[item.name] ? "max-h-[600px] opacity-100 mb-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="relative flex flex-col space-y-1 ml-2 pl-6">
                    
                    {/* 1. Ana Sol Kılavuz Çizgisi (İstediğin birebir aynı animasyon ve renkler) */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-r from-brand-blue via-[#02b6da] to-brand-dark bg-[length:200%_auto] animate-text-gradient"></div>

                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        onClick={onClose}
                        className="relative flex items-center py-3 text-[16px] font-semibold text-slate-500 hover:text-brand-dark transition-all duration-300 group/link"
                      >
                        {/* 2. Hover Durumunda Çıkan İnce Yatay Çizgi (Aynı animasyon) */}
                        <span className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-3 h-[3px] rounded-r-full bg-gradient-to-r from-brand-blue via-[#02b6da] to-brand-dark bg-[length:200%_auto] animate-text-gradient opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 shadow-sm"></span>
                        
                        <span className="transform transition-transform duration-300 group-hover/link:translate-x-2">
                          {subItem.name}
                        </span>
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
                  className="group flex items-center justify-between py-4 text-xl font-bold text-brand-dark hover:text-brand-blue transition-colors"
                >
                  <span className="font-sans tracking-wide transform transition-transform duration-300 group-hover:translate-x-2">
                    {item.name}
                  </span>
                  <ArrowRight className="w-6 h-6 text-brand-blue opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
                
              )}
            </div>
          ))}
        </nav>

        {/* Alt Kısım (Hızlı İletişim / CTA) - Daha karakterli bir alan */}
        <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-100 rounded-bl-3xl">
          <div className="flex flex-col gap-4">
            <Link 
              href="https://panel.odimax.com.tr/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-center w-full bg-gradient-to-r from-brand-blue via-[#02b6da] to-brand-dark bg-[length:200%_auto] animate-text-gradient text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(2,182,218,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(2,182,218,0.5)] hover:-translate-y-1"
            >
               Giriş Yap
            </Link>
            
            <Link 
              href="/contact#demo-form"
              onClick={onClose}
              className="flex items-center justify-center w-full bg-white border-2 border-brand-dark text-brand-dark font-bold py-4 rounded-xl transition-all duration-300 hover:bg-brand-dark hover:text-white"
            >
              Ücretsiz Demo Talep Et
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}