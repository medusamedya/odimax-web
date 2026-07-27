import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
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
  title: "Odimax | İşitme Cihazı Merkezleri için Yönetim Sistemi",
  description: "Odimax ile merkezinizi tek panelden yönetin.",
  verification: {
    // Google Search Console'dan aldığın "google-site-verification" içerik kodunu buraya ekleyeceksin.
    // Örnek: google: "aB1c2D3e4F5g6H7i8J9k0L1m2N3o4P5q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-brand-neutral text-brand-dark font-sans">
        
        {/* 1. Google Tag Manager (noscript) - Body etiketinin hemen sonrası */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PWCTG92D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Üstte sabit kalacak Header */}
        <Header />

        {/* 
          Ana içerik alanı. 
          pb-20 (mobilde), masaüstünde md:pb-0 ekleyerek 
          mobil alt barın içeriği kesmesini engelliyoruz.
        */}
        <main className="flex-1 flex flex-col w-full">{children}</main>

        {/* Altta yer alacak Footer */}
        <Footer />

        {/* Sadece mobilde aktif olacak alt navigasyon barı */}
        <MobileBottomNav />

        {/* --- GOOGLE SCRIPTS --- */}
        {/* Sayfa yüklendikten sonra çalışacak (afterInteractive) şekilde performansı koruyoruz */}
        
        {/* 2. Google Tag Manager Script'i */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PWCTG92D');
            `,
          }}
        />

        {/* 3. Google Analytics (gtag.js) Script'i */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GJKE4QRKV8"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GJKE4QRKV8');
            `,
          }}
        />
      </body>
    </html>
  );
}