import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mevcut görsel izin (images) yapılandırman
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Bu domainden gelen tüm görsel yollarına izin ver
      },
      {
        protocol: "https",
        hostname: "odimax.com.tr",
        port: "",
        pathname: "/**",
      },
    ],
  },
  
  // 1. ADIM: Google indekslerindeki eski WordPress linklerini yeni Next.js linklerine yönlendirme
  async redirects() {
    return [
      {
        source: "/hakkimizda", // Google'da indexli olan eski sayfa
        destination: "/about", // Yeni Next.js mimarisindeki karşılığı
        permanent: true, // 301 Kalıcı Yönlendirme
      },
      {
        source: "/odimax-crm-nedir", // Eski yapıdaki diğer bir sayfa
        destination: "/", // Anasayfaya yönlendiriyoruz (veya uygun bir blog içeriğine /blog/odimax-crm-nedir şeklinde de verebilirsin)
        permanent: true,
      }, {
        source: "/fiyatlandirma", // Eski yapıdaki diğer bir sayfa
        destination: "/pricing", // Anasayfaya yönlendiriyoruz (veya uygun bir blog içeriğine /blog/odimax-crm-nedir şeklinde de verebilirsin)
        permanent: true,
      },
       {
        source: "/arayuz-dashboard", // Eski yapıdaki diğer bir sayfa
        destination: "/", // Anasayfaya yönlendiriyoruz (veya uygun bir blog içeriğine /blog/odimax-crm-nedir şeklinde de verebilirsin)
        permanent: true,
      },
       {
        source: "/nasil-calisir", // Eski yapıdaki diğer bir sayfa
        destination: "/", // Anasayfaya yönlendiriyoruz (veya uygun bir blog içeriğine /blog/odimax-crm-nedir şeklinde de verebilirsin)
        permanent: true,
      },
       {
        source: "/moduller", // Eski yapıdaki diğer bir sayfa
        destination: "/modules/hasta-yonetimi", // Anasayfaya yönlendiriyoruz (veya uygun bir blog içeriğine /blog/odimax-crm-nedir şeklinde de verebilirsin)
        permanent: true,
      },
       {
        source: "/tedarikci-satin-alma-yonetimi", // Eski yapıdaki diğer bir sayfa
        destination: "/", // Anasayfaya yönlendiriyoruz (veya uygun bir blog içeriğine /blog/odimax-crm-nedir şeklinde de verebilirsin)
        permanent: true,
      },
       {
        source: "/isitme-cihazı-satis-merkezleri", // Eski yapıdaki diğer bir sayfa
        destination: "/", // Anasayfaya yönlendiriyoruz (veya uygun bir blog içeriğine /blog/odimax-crm-nedir şeklinde de verebilirsin)
        permanent: true,
      },
       {
        source: "/iletisim", // Eski yapıdaki diğer bir sayfa
        destination: "/contact", // Anasayfaya yönlendiriyoruz (veya uygun bir blog içeriğine /blog/odimax-crm-nedir şeklinde de verebilirsin)
        permanent: true,
      },
       {
        source: "/finans-kasa", // Eski yapıdaki diğer bir sayfa
        destination: "/modules/finans-kasa", // Anasayfaya yönlendiriyoruz (veya uygun bir blog içeriğine /blog/odimax-crm-nedir şeklinde de verebilirsin)
        permanent: true,
      },
      // İleride Search Console'da karşılaştığın eski "404" veren linkler olursa buraya aynı formatta ekleyebilirsin.
    ];
  },
};

export default nextConfig;