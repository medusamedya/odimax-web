// src/components/layout/Header.tsx
"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

// Menü elemanlarını tip güvenli bir şekilde dışarıda tanımlamak,
// bileşen içi kalabalığı azaltır ve yönetimi kolaylaştırır.
const MENU_ITEMS = [
  { name: "Anasayfa", path: "/" },
  { name: "Hakkımızda", path: "/about" },
  { name: "Modüller", path: "/modules" },
  { name: "Fiyatlandırma", path: "/pricing" },
  { name: "İletişim", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-200 py-4 shadow-sm"
            : "bg-transparent py-6 sm:py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LEFT: Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/home/logo.webp" // Odimax'ın kurumsal renklerine uygun logo
                alt="Odimax Logo"
                fill
                sizes="(max-width: 768px) 40px, 48px"
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* MIDDLE: Pill Menu (Sadece Masaüstü) */}
          <nav
            className={`hidden lg:flex items-center rounded-full transition-all duration-500 ease-in-out ${
              isScrolled
                ? "bg-transparent gap-8"
                : "bg-white/60 backdrop-blur-md px-6 py-2 border border-brand-dark/10 gap-2 shadow-sm"
            }`}
            style={{ transition: "gap 1s" }}
          >
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="font-sans text-[16px] px-4 py-1.5 text-brand-header-text font-semibold hover:text-brand-dark transition-colors duration-300 rounded-full hover:bg-brand-light/90"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT: CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Masaüstü CTA Butonu */}
            <div className="hidden lg:block">
              <Link href="/contact" className="inline-block">
                <button className="bg-brand-dark hover:bg-brand-dark-hover font-sans text-white font-medium py-2.5 px-6 rounded-full transition-colors duration-300 shadow-sm cursor-pointer">
                  İletişime Geçin
                </button>
              </Link>
            </div>
            {/* Mobil Hamburger Butonu */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center border border-brand-dark/10 active:scale-95 transition-transform"
              aria-label="Menüyü Aç"
            >
              <Menu className="w-5 h-5 text-brand-dark" />
            </button>
          </div>
        </div>
      </header>

      {/* Dışa Aktardığımız Mobil Menü Bileşeni */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={MENU_ITEMS} // Veriyi prop olarak geçmek yönetimi kolaylaştırır
      />
    </>
  );
}
