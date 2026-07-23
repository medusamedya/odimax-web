// Veri yapısını ayırmak kod bütünlüğünü ve yönetilebilirliği artırır
const MODULES = [
  {
    id: "hasta-yonetimi",
    title: "Hasta Yönetimi",
    description:
      "Tüm hasta kayıtlarını tek merkezde toplayın; işitme geçmişi, cihaz bilgisi ve iletişim detayları her an elinizin altında olsun.",
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    id: "randevu-takvim",
    title: "Randevu & Takvim",
    description:
      "Hasta randevularını tek takvimden planlayın; yoğunluğu görün, unutulan kontrolleri ortadan kaldırın.",
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <path d="m9 16 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    id: "stok-yonetimi",
    title: "Stok Yönetimi",
    description:
      "Cihaz, pil ve aksesuar stoğunu anlık takip edin; hangi üründen kaç adet kaldığını tek bakışta görün.",
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7.5 4.27 9 5.15"></path>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
        <path d="m3.3 7 8.7 5 8.7-5"></path>
        <path d="M12 22V12"></path>
      </svg>
    ),
  },
  {
    id: "uts-yonetimi",
    title: "ÜTS Yönetimi",
    description:
      "İşitme cihazı ÜTS bildirimlerini sistem içinden yönetin; mevzuata uyumu manuel yük olmadan sağlayın.",
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="m9 15 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    id: "tedarikci-yonetimi",
    title: "Tedarikçi & Satın Alma",
    description:
      "Tedarikçi kayıtlarını ve satın alma sürecini düzenleyin; siparişten stoğa kadar akışı kontrol altında tutun.",
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </svg>
    ),
  },
  {
    id: "finans-yonetimi",
    title: "Finans (Kasa)",
    description:
      "Tahsilat, ödeme ve nakit akışını tek kasadan izleyin; merkezinizin finansal durumunu her an net görün.",
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    id: "masraf-yonetimi",
    title: "Masraf Yönetimi",
    description:
      "Sabit ve değişken giderleri kalem kalem kaydedin; kârlılığınızı gerçek rakamlarla ölçün.",
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path>
        <line x1="16" y1="8" x2="8" y2="8"></line>
        <line x1="16" y1="12" x2="8" y2="12"></line>
        <line x1="10" y1="16" x2="8" y2="16"></line>
      </svg>
    ),
  },
  {
    id: "whatsapp-mesaj",
    title: "WhatsApp & Toplu Mesaj",
    description:
      "Randevu hatırlatmalarını ve kampanyaları WhatsApp üzerinden otomatik gönderin; hastalarla bağı canlı tutun.",
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
  },
  {
    id: "raporlama-dashboard",
    title: "Raporlama & Dashboard",
    description:
      "Satış, hasta ve stok verilerini tek panelde görün; kararlarınızı tahminle değil veriyle alın.",
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
      </svg>
    ),
  },
];

export default function ModulesSection() {
  return (
    <section className="py-6 sm:py-6 md:py-8 lg:py-12 bg-brand-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ortalanmış Bölüm Başlığı */}
        <div className="text-center mb-4 md:mb-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="inline-block bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient font-bold tracking-normal md:tracking-widest uppercase text-sm ">
              MODÜLLERİMİZ
            </span>
          </div>

          <h2 className=" font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide pb-1 leading-[1.15] inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Tüm Süreçler Tek Platformda
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-text leading-normal md:leading-relaxed">
            İşitme merkezinizin uçtan uca tüm ihtiyaçlarını karşılayacak şekilde
            özel olarak tasarlanmış modüllerimizi keşfedin.
          </p>
        </div>

        {/* Animasyonlu Çerçeve (Animate Border) */}
        <div className="relative rounded-2xl p-[1px] overflow-hidden bg-gradient-to-r from-brand-blue via-[#6fe7ff] to-brand-dark bg-[length:200%_auto] animate-text-gradient shadow-sm">
          <div className="rounded-[15px] overflow-hidden bg-brand-light">
            <div className="grid  grid-cols-2 lg:grid-cols-3 gap-px">
              {MODULES.map((module) => {
                const IconComponent = module.icon;
                return (
                  <div
                    key={module.id}
                    className="bg-white p-4 sm:p-6 md:p-8 hover:bg-brand-neutral/30 transition-colors duration-300 group relative overflow-hidden flex flex-col justify-between md:min-h-[220px]"
                  >
                    {/* Arka Plan Devasa Filigran İkonu (Watermark) */}
                    <div className="absolute -bottom-2 md:-bottom-8 -right-4 md:-right-8 w-24 h-24 md:w-40 md:h-40 text-black/[0.03] group-hover:text-brand-blue/[0.07] transition-all duration-500 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-6">
                      {IconComponent}
                    </div>

                    {/* İçerik (Z-index ile önde konumlanır) */}
                    <div className="relative z-10">
                      <h3 className="font-sans text-lg md:text-xl  font-bold text-brand-header-text mb-3">
                        {module.title}
                      </h3>
                      <p className="text-brand-text leading-normal md:leading-relaxed text-sm md:text-base">
                        {module.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
