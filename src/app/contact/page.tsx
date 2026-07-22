import { MapPin, Phone, Mail } from "lucide-react";
import InnerHero from "../components/general/InnerHero";

export default function ContactPage() {
  return (
    <main>
      {/* 1. Dinamik İç Sayfa Herosu */}
      <InnerHero
        title="İletişim"
        description="Aklınıza takılan sorular, destek talepleri veya demo görüşmeleri için bizimle iletişime geçin. "
        breadcrumbs={[{ label: "İletişim", href: "/contact" }]}
      />

      {/* 2. İletişim Bilgileri ve Harita Alanı */}
      <section className="py-24 bg-[#f8f9fa] font-sans relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* SOL KISIM: İletişim Kartları (7 Kolon) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              
              <div>
                <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-sm mb-4">
                  BİZE ULAŞIN
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
                  İletişim Bilgileri
                </h2>
              </div>

              {/* Adres Kartı (Tam Genişlik) */}
              <div className="flex items-start gap-5 bg-white p-6 md:p-8 rounded-[2rem] border border-black/[0.04] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex-1">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Merkez Ofis</h3>
                  <p className="text-brand-text leading-relaxed">
                    1511. Sokak, No:3/A,<br />
                    Umurbey Mah. Alsancak,<br />
                    Konak / İzmir
                  </p>
                </div>
              </div>

              {/* Alt Kısım: Telefonlar ve E-Posta Yan Yana (2 Sütun) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                
                {/* Telefonlar Kartı */}
                <div className="flex flex-col justify-between bg-white p-6 md:p-8 rounded-[2rem] border border-black/[0.04] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-dark">Telefonlar</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a href="tel:08503026353" className="text-brand-text hover:text-brand-blue transition-colors text-sm font-medium">0 850 302 63 53</a>
                    <a href="tel:05337203695" className="text-brand-text hover:text-brand-blue transition-colors text-sm font-medium">0 533 720 36 95</a>
                    <a href="tel:05010773500" className="text-brand-text hover:text-brand-blue transition-colors text-sm font-medium">0 501 077 35 00</a>
                    <a href="tel:05537343500" className="text-brand-text hover:text-brand-blue transition-colors text-sm font-medium">0 553 734 35 00</a>
                  </div>
                </div>

                {/* E-Posta Kartı */}
                <div className="flex flex-col justify-between bg-white p-6 md:p-8 rounded-[2rem] border border-black/[0.04] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-dark">E-Posta</h3>
                  </div>
                  <div>
                    <p className="text-xs text-brand-text/60 mb-1">Destek ve Bilgi İçin</p>
                    <a href="mailto:destek@odimax.com.tr" className="text-brand-text hover:text-brand-blue transition-colors text-sm font-medium break-all">
                      destek@odimax.com.tr
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* SAĞ KISIM: Google Haritalar Embed (5 Kolon - Yükseklik Eşitlenmiş) */}
            <div className="lg:col-span-5 h-full min-h-[500px] lg:min-h-[auto]">
              <div className="w-full h-full rounded-[2rem] overflow-hidden border border-black/[0.04] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] bg-white p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-brand-neutral min-h-[500px]">
                  <iframe
                    title="Odimax İzmir Merkez Ofis"
                    src="https://maps.google.com/maps?q=1511.%20Sokak,%20No:3/A,%20Umurbey%20Mah.%20Alsancak,%20Konak/İzmir&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[20%] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}