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
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/**", // Bu domaine ait tüm görsellere izin veriyoruz
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
      {
        source: "/whatsapp-sms-toplu-mesaj-crm-nedir",
        destination: "/modules/whatsapp-toplu-mesaj",
        permanent: true,
      },
      {
        source: "/whatsapp-toplu-mesaj",
        destination: "/modules/whatsapp-toplu-mesaj",
        permanent: true,
      },
      {
        source: "/randevu-takvim",
        destination: "/modules/randevu-takvim",
        permanent: true,
      },
      {
        source: "/randevu-ve-takip-crm-sistemi-nedir",
        destination: "/modules/randevu-takvim",
        permanent: true,
      },
      {
        source: "/hasta-islemleri",
        destination: "/modules/hasta-yonetimi",
        permanent: true,
      },
      {
        source: "/hasta-yonetimi",
        destination: "/modules/hasta-yonetimi",
        permanent: true,
      },
      {
        source: "/hasta-yonetimi-crm-nedir",
        destination: "/modules/hasta-yonetimi",
        permanent: true,
      },
      {
        source: "/stok-yonetimi",
        destination: "/modules/stok-yonetimi",
        permanent: true,
      },
      {
        source: "/stok-yonetimi-crm-nedir",
        destination: "/modules/stok-yonetimi",
        permanent: true,
      },
      {
        source: "/uts-yonetimi",
        destination: "/modules/uts-yonetimi",
        permanent: true,
      },
      {
        source: "/masraf-yonetimi",
        destination: "/modules/masraf-yonetimi",
        permanent: true,
      },
      {
        source: "/raporlama-dashboard",
        destination: "/modules/raporlama-dashboard",
        permanent: true,
      },
      {
        source: "/servis-takip-yogun-calisan-merkezler",
        destination: "/blog/isitme-cihazi-tamir-servis-takibi",
        permanent: true,
      },
      {
        source: "/isitme-cihazi-adaptasyonunda-memnuniyet-aramasi-ve-recall",
        destination: "/blog/isitme-cihazi-adaptasyonu-memnuniyet-aramasi",
        permanent: true,
      },
      {
        source: "/sube-yapisi-olan-merkezler",
        destination: "/blog/cok-subeli-isitme-merkezi-yonetimi",
        permanent: true,
      },
      {
        source: "/cok-subeli-isitme-merkezleri-icin-yonetim-rehberi",
        destination: "/blog/cok-subeli-isitme-merkezi-yonetimi",
        permanent: true,
      },
      {
        source: "/isitme-testi-randevu-sistemi-ile-potansiyel-hastalari-kazanma-rehberi",
        destination: "/blog/isitme-testi-randevu-takibi",
        permanent: true,
      },
      {
        source: "/isitme-cihazi-satislarini-artirmanin-5-yolu-kayip-randevulari-kazanca-donusturun",
        destination: "/blog/kayip-hasta-analizi-ve-geri-kazanma-stratejileri",
        permanent: true,
      },
      {
        source: "/isitme-cihazi-satis-sonrasi-takip-ile-isletmenizi-buyutun",
        destination: "/blog/hasta-takibi-ve-crm-onemi",
        permanent: true,
      },
      {
        source: "/isitme-merkezlerinde-uts-ve-sgk-sureclerinde-dijital-donusum",
        destination: "/blog/uts-sureclerinde-en-sik-yapilan-hatalar",
        permanent: true,
      },
      {
        source: "/isitme-merkezi-yonetiminde-dijital-donusum-kagit-dosyalardan-crme-gecis",
        destination: "/blog/isitme-merkezlerinde-dijital-donusum",
        permanent: true,
      },
      // İleride Search Console'da karşılaştığın eski "404" veren linkler olursa buraya aynı formatta ekleyebilirsin.
    ];
  },
};

export default nextConfig;
