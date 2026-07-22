import React from "react";

export default function PricingHero() {
  return (
    <section className="py-12  bg-brand-neutral overflow-hidden font-sans relative">
      
      {/* Dekoratif Glow Efektleri */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ORTALANMIŞ BAŞLIK VE ROZET */}
        <div className=" mx-auto text-center mb-8 flex flex-col items-center">
          <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-widest uppercase text-sm mb-2">
            Avantajlarımız
          </span>
          <h2 className="font-sans  text-4xl md:text-5xl font-semibold tracking-wide pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            İşitme Merkeziniz İçin Net Bir<br className="hidden md:block" />
             Yönetim Planı
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Sol Kısım: Açıklama Paragrafları */}
          <div className="flex flex-col space-y-6">
            <div className="text-lg text-brand-text leading-relaxed space-y-6">
              <p>
                Odimax; hasta, randevu, stok, tahsilat, satış ve ÜTS süreçlerinizi tek panelde daha düzenli yönetmeniz için geliştirilmiş sektörel bir yönetim sistemidir.
              </p>
              <p>
                Yalnızca yazılım kullanmaya başlamazsınız; merkezinizin temel iş akışlarını Odimax düzenine taşımak için başlangıç desteği alırsınız.
              </p>
              <p className="text-brand-text">
                Planınızı seçin, merkezinizin günlük operasyonunu birlikte daha kontrollü hale getirelim.
              </p>
            </div>
          </div>

          {/* Sağ Kısım: Özet Fiyat Kartı */}
          <div className="w-full max-w-md  lg:ml-auto">
            <div className="bg-gradient-to-br from-brand-dark via-[#1a2642] to-brand-blue p-8 md:p-10 rounded-[2rem] text-white  relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Tüm Özellikler Dahil</h3>
              
              <div className="mb-6">
                <span className="block text-sm font-medium mb-1 opacity-90">Aylık Ödeme</span>
                <div className="text-2xl md:text-[28px] font-bold">
                  1.450 TL + KDV <span className="text-lg font-normal">/ Ay</span>
                </div>
              </div>
              
              <hr className="border-white/25 mb-6" />
              
              <div className="mb-8">
                <span className="block text-sm font-medium mb-1 opacity-90">Yıllık Ödeme (Avantajlı)</span>
                <div className="text-2xl md:text-[28px] font-bold">
                  990 TL + KDV <span className="text-lg font-normal">/ Ay</span>
                </div>
              </div>
              
              <p className="text-sm font-semibold opacity-90">
                *Yıllık peşin ödeme ile toplam %30+ tasarruf
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}