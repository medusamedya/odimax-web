import { 
  Users, 
  CalendarCheck, 
  PackageSearch, 
  FileCheck2, 
  ShoppingCart, 
  Landmark, 
  Receipt, 
  MessageCircle, 
  PieChart 
} from "lucide-react";

// Veri yapısını ayırmak kod bütünlüğünü ve yönetilebilirliği artırır
const MODULES = [
  {
    id: "hasta-yonetimi",
    title: "Hasta Yönetimi",
    description: "Tüm hasta kayıtlarını tek merkezde toplayın; işitme geçmişi, cihaz bilgisi ve iletişim detayları her an elinizin altında olsun.",
    icon: Users,
  },
  {
    id: "randevu-takvim",
    title: "Randevu & Takvim",
    description: "Hasta randevularını tek takvimden planlayın; yoğunluğu görün, unutulan kontrolleri ortadan kaldırın.",
    icon: CalendarCheck,
  },
  {
    id: "stok-yonetimi",
    title: "Stok Yönetimi",
    description: "Cihaz, pil ve aksesuar stoğunu anlık takip edin; hangi üründen kaç adet kaldığını tek bakışta görün.",
    icon: PackageSearch,
  },
  {
    id: "uts-yonetimi",
    title: "ÜTS Yönetimi",
    description: "İşitme cihazı ÜTS bildirimlerini sistem içinden yönetin; mevzuata uyumu manuel yük olmadan sağlayın.",
    icon: FileCheck2,
  },
  {
    id: "tedarikci-yonetimi",
    title: "Tedarikçi & Satın Alma",
    description: "Tedarikçi kayıtlarını ve satın alma sürecini düzenleyin; siparişten stoğa kadar akışı kontrol altında tutun.",
    icon: ShoppingCart,
  },
  {
    id: "finans-yonetimi",
    title: "Finans (Kasa)",
    description: "Tahsilat, ödeme ve nakit akışını tek kasadan izleyin; merkezinizin finansal durumunu her an net görün.",
    icon: Landmark,
  },
  {
    id: "masraf-yonetimi",
    title: "Masraf Yönetimi",
    description: "Sabit ve değişken giderleri kalem kalem kaydedin; kârlılığınızı gerçek rakamlarla ölçün.",
    icon: Receipt,
  },
  {
    id: "whatsapp-mesaj",
    title: "WhatsApp & Toplu Mesaj",
    description: "Randevu hatırlatmalarını ve kampanyaları WhatsApp üzerinden otomatik gönderin; hastalarla bağı canlı tutun.",
    icon: MessageCircle,
  },
  {
    id: "raporlama-dashboard",
    title: "Raporlama & Dashboard",
    description: "Satış, hasta ve stok verilerini tek panelde görün; kararlarınızı tahminle değil veriyle alın.",
    icon: PieChart,
  },
];

export default function ModulesSection() {
  return (
    <section className="py-24 bg-brand-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bölüm Başlığı */}
        <div className="mb-12">
          <h2 className="mb-4 font-sans text-4xl md:text-5xl font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Tüm Süreçler Tek Platformda
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-text max-w-3xl leading-relaxed">
            İşitme merkezinizin uçtan uca tüm ihtiyaçlarını karşılayacak şekilde özel olarak tasarlanmış modüllerimizi keşfedin.
          </p>
        </div>

        {/* 
          Grid Container: 
          Dış çerçeve için border-brand-light ve shadow kullandık. 
          İç çizgiler için bg-brand-light ve gap-px hilesini uyguladık.
        */}
        <div className="rounded-2xl overflow-hidden border border-brand-light shadow-sm bg-brand-light">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
            
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <div 
                  key={module.id} 
                  className="bg-white p-8 md:p-10 hover:bg-brand-neutral/30 transition-colors duration-300 group"
                >
                  {/* İkon Konteyneri */}
                  <div className="w-12 h-12 rounded-xl bg-brand-neutral flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 group-hover:bg-brand-light transition-all duration-300">
                    <Icon strokeWidth={2} className="w-6 h-6" />
                  </div>
                  
                  {/* İçerik */}
                  <h3 className="font-sans text-xl font-bold text-brand-header-text mb-3">
                    {module.title}
                  </h3>
                  <p className="text-brand-text leading-relaxed text-sm md:text-base">
                    {module.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
        
      </div>
    </section>
  );
}