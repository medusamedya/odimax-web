import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    id: "kasa-kontrol",
    title: "Kasa Kontrolü Tek Ekranda",
    description:
      "Günlük gelir, gider ve toplam bakiyenizi anlık olarak görün. Tekli veya çoklu kasa yapısıyla nakit ve banka hareketlerini ayrı ayrı takip edin. Odimax CRM, kasadaki durumu sürekli görünür kılar. Sürpriz yok, belirsizlik yok.",
    benefit:
      "Gün sonunda merkezin finansal durumu daha net görünür; eksik, geciken veya gözden kaçan ödemeleri takip etmek kolaylaşır.",
    image: "/home/01Kasa.webp",
  },
  {
    id: "cihaz-stok",
    title: "Cihaz ve Stok Süreçleri Karışmasın",
    description:
      "İşitme cihazlarını marka, model, seri numarası ve GTIN bilgileriyle takip edin. Stok giriş-çıkışları, satış hareketleri ve ÜTS süreçleri aynı akış içinde izlenebilir hale gelsin.",
    benefit:
      "Hangi cihazın nerede olduğunu, hangi hastaya satıldığını ve stok durumunu daha güvenli şekilde yönetirsiniz.",
    image: "/home/02Stok.webp",
  },
  {
    id: "satis-sureci",
    title: "Satış Süreci Eksiksiz ve Standart İlerlesin",
    description:
      "İşitme cihazı satışlarını hasta, cihaz, kulak yönü, fiyat, iskonto, KDV ve ödeme bilgileriyle birlikte düzenli şekilde kaydedin. Her satış aynı akış içinde tamamlanabilir hale gelsin.",
    benefit:
      "Satış sonrası geriye dönük kontrol kolaylaşır; hasta, cihaz ve ödeme bilgileri eksik kalmadan merkez hafızasına işlenir.",
    image: "/home/03Satıs.webp",
  },
  {
    id: "hasta-bilgileri",
    title: "Hasta Bilgileri Kişilere Bağlı Kalmasın",
    description:
      "Hasta kayıtları, iletişim bilgileri, cihaz geçmişi, randevular, satışlar ve ödeme durumları tek hasta kartında düzenli şekilde tutulur.",
    benefit:
      "Personel değişse bile hasta geçmişi kaybolmaz; merkeziniz hastayı kaldığı yerden takip etmeye devam eder.",
    image: "/home/04Hasta.webp",
  },
  {
    id: "randevu-takip",
    title: "Randevu ve Takip Süreci Aksamadan İlerlesin",
    description:
      "Randevuları, kontrol görüşmelerini ve hasta takip süreçlerini takvim üzerinden düzenli şekilde planlayın. Hatırlatma ve iletişim akışlarını merkezin standart işleyişine dahil edin.",
    benefit:
      "Randevu karışıklıkları azalır, hasta iletişimi daha düzenli ilerler ve takip edilmesi gereken işler gözden kaçmaz.",
    image: "/home/05Randevu.webp",
  },
];

export default function FeatureBlocks() {
  return (
    <section className="py-24 bg-brand-neutral overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 lg:gap-32">
        {FEATURES.map((feature, index) => {
          // Çift indeksler için normal akış, tek indeksler için ters akış
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={feature.id}
              // Flex yerine Grid kullandık: Alignment sorunlarına kesin çözüm.
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Metin Alanı */}
              <div 
                className={`flex flex-col justify-center ${
                  isReverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <h2 className="font-sans mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
                  {feature.title}
                </h2>

                <p className="font-sans text-base md:text-lg text-brand-text leading-relaxed mb-8">
                  {feature.description}
                </p>

                {/* Fayda Kutusu (Callout) */}
                <div className="bg-[#eaf3fa] border-l-[3px] border-brand-blue p-5 rounded-r-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      className="text-brand-blue w-6 h-6 flex-shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <p className="font-sans text-brand-text font-medium leading-relaxed">
                      {feature.benefit}
                    </p>
                  </div>
                </div>
              </div>

              {/* Görsel Alanı */}
              <div 
                className={`relative w-full max-w-2xl mx-auto ${
                  isReverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {/* Havada Asılı Kurumsal Çerçeve (Floating Container) */}
                <div className="relative bg-white p-2 md:p-3 rounded-[20px] md:rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/[0.04]">
                  
                  {/* İç Görsel Kutusu */}
                  <div className="relative rounded-[12px] md:rounded-[18px] overflow-hidden border border-black/[0.03] bg-gray-50/50">
                    {/* 
                      Fill yerine width/height kullanarak görselin doğal olarak esnemesini sağladık.
                      Bu sayede "zoom" veya "kırpılma" ihtimali tamamen ortadan kalktı.
                    */}
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={1200}
                      height={800}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}