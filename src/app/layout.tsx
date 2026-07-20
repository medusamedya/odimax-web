import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

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
      // Geist yerine kendi tanımladığımız font değişkenini kullanıyoruz
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      {/* font-sans sınıfını ekleyerek fontun tüm uygulamaya yayılmasını garantiliyoruz */}
      <body className="min-h-screen flex flex-col bg-brand-neutral text-brand-dark font-sans">
        
        {/* Tüm sayfalarda üstte sabit kalacak Header */}
        <Header />
        
        {/* Ana içerik alanı. flex-1 sayesinde sayfada içerik az olsa bile Footer'ı en alta iter. */}
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>

        {/* Tüm sayfalarda altta sabit kalacak Footer */}
        <Footer />
        
      </body>
    </html>
  );
}