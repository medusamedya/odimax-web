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
    image:
      "/home/02Stok.webp",
  },
  {
    id: "satis-sureci",
    title: "Satış Süreci Eksiksiz ve Standart İlerlesin",
    description:
      "İşitme cihazı satışlarını hasta, cihaz, kulak yönü, fiyat, iskonto, KDV ve ödeme bilgileriyle birlikte düzenli şekilde kaydedin. Her satış aynı akış içinde tamamlanabilir hale gelsin.",
    benefit:
      "Satış sonrası geriye dönük kontrol kolaylaşır; hasta, cihaz ve ödeme bilgileri eksik kalmadan merkez hafızasına işlenir.",
    image:
      "/home/03Satıs.webp",
  },
  {
    id: "hasta-bilgileri",
    title: "Hasta Bilgileri Kişilere Bağlı Kalmasın",
    description:
      "Hasta kayıtları, iletişim bilgileri, cihaz geçmişi, randevular, satışlar ve ödeme durumları tek hasta kartında düzenli şekilde tutulur.",
    benefit:
      "Personel değişse bile hasta geçmişi kaybolmaz; merkeziniz hastayı kaldığı yerden takip etmeye devam eder.",
    image:
      "/home/04Hasta.webp",
  },
  {
    id: "randevu-takip",
    title: "Randevu ve Takip Süreci Aksamadan İlerlesin",
    description:
      "Randevuları, kontrol görüşmelerini ve hasta takip süreçlerini takvim üzerinden düzenli şekilde planlayın. Hatırlatma ve iletişim akışlarını merkezin standart işleyişine dahil edin.",
    benefit:
      "Randevu karışıklıkları azalır, hasta iletişimi daha düzenli ilerler ve takip edilmesi gereken işler gözden kaçmaz.",
    image:
      "/home/05Randevu.webp",
  },
];

export default function FeatureBlocks() {
  return (
    <section className="py-24 bg-brand-neutral overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 lg:gap-32">
        {FEATURES.map((feature, index) => {
          // Çift indeksler (0, 2, 4) için normal akış (Yazı solda, Görsel sağda)
          // Tek indeksler (1, 3) için ters akış (Görsel solda, Yazı sağda)
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={feature.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                isReverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Metin Alanı */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h2 className="font-sans mb-6 text-4xl md:text-5xl font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
                  {feature.title}
                </h2>

                <p className="font-sans text-base md:text-lg text-brand-text leading-relaxed mb-8">
                  {feature.description}
                </p>

                {/* Fayda Kutusu (Callout) */}
                <div className="bg-brand-light border-l-4 border-brand-blue p-5 rounded-r-xl shadow-sm">
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
              <div className="w-full lg:w-1/2 relative">
                {/* Arka Plan Dekoratif Parlaması */}
                <div className="absolute inset-0 bg-brand-light rounded-3xl transform rotate-3  -z-10 opacity-50 "></div>

                {/* 
    aspect-[16/10] ile tüm görsellerin standart bir boyutta (yatay dikdörtgen) kalmasını sağlıyoruz. 
    shadow-2xl ile görseldeki gibi derin ve yumuşak bir gölge ekliyoruz.
  */}
                <div className="relative aspect-[18/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-black/5 bg-white">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    // object-cover ile görselin kutuyu tamamen doldurmasını ve boşluk kalmamasını sağlıyoruz
                    className="object-cover w-full h-full "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
