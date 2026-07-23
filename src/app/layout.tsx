import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobileBottomNav from "./components/general/MobileBottomNav";

// Projemizin yeni kurumsal fontu: Plus Jakarta Sans
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odimax | Modern Web Çözümleri",
  description: "Odimax kurumsal web sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-brand-neutral text-brand-dark font-sans">
        
        {/* Üstte sabit kalacak Header */}
        <Header />
        
        {/* 
          Ana içerik alanı. 
          pb-20 (mobilde), masaüstünde md:pb-0 ekleyerek 
          mobil alt barın içeriği kesmesini engelliyoruz.
        */}
        <main className="flex-1 flex flex-col w-full ">
          {children}
        </main>

        {/* Altta yer alacak Footer */}
        <Footer />

        {/* Sadece mobilde aktif olacak alt navigasyon barı */}
        <MobileBottomNav />
        
      </body>
    </html>
  );
}