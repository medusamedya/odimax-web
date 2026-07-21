// src/data/blogsData.ts

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogsData: BlogPost[] = [
  {
    slug: "isitme-merkezlerinde-dijital-donusum",
    title: "İşitme Merkezlerinde Dijital Dönüşüm Neden Kaçınılmaz?",
    excerpt: "Defterlerin ve dağınık Excel dosyalarının işitme merkezlerine maliyeti nedir? Operasyonlarınızı tek bir dijital hafızaya taşımanın avantajları.",
    content: `İşitme cihazı satışı ve uygulama süreçleri, ilk hasta görüşmesiyle başlar ancak satış sonrasında da yıllarca devam eden bir takip zinciriyle sürer. Kontrol randevuları, cihaz denemeleri, ÜTS bildirimleri, tamir geçmişleri ve tahsilatlar... Tüm bu süreçler manuel veya dağınık dosyalarda tutulduğunda zamanla bilgi kayıpları ve takip sorunları kaçınılmaz hale gelir.

Odimax gibi merkezi yazılımlar, işitme merkezlerinin bu operasyonel yükünü ortadan kaldırarak tüm geçmişi tek bir dijital kart altında toplar. Personel değişimlerinde bile bilgi akışı kesintiye uğramaz ve hasta deneyimi en üst seviyede tutulur.`,
    date: "12 Haziran 2026",
    readTime: "4 dk okuma",
    category: "Sektörel",
    image: "/home/hero.webp",
  },
  {
    slug: "uts-sureclerinde-en-sik-yapilan-hatalar",
    title: "ÜTS Bildirim Süreçlerinde Dikkat Edilmesi Gerekenler",
    excerpt: "Ürün takip sisteminde (ÜTS) yaşanan gecikmeler ve hatalı eşleşmelerin merkezinize yasal riskleri ve çözüm yolları.",
    content: `Ürün Takip Sistemi (ÜTS) entegrasyonu, işitme merkezleri için yasal zorunluluğun ötesinde hatasız yönetilmesi gereken kritik bir operasyondur. Cihazın merkeze girişinden hastaya teslimine kadar geçen sürede yapılan eksik bildirimler denetimlerde sorun yaratabilir.

Entegre sistemler kullanarak ÜTS bildirimlerini doğrudan satış ve stok hareketleriyle bağlamak, manuel veri girişinden kaynaklanan hataları sıfıra indirir.`,
    date: "5 Haziran 2026",
    readTime: "3 dk okuma",
    category: "Mevzuat",
    image: "/home/04Hasta.webp",
  },
  {
    slug: "hasta-takibi-ve-crm-onemi",
    title: "İşitme Cihazı Kullanıcılarında Etkili Takip Yöntemleri",
    excerpt: "Satış sonrasında 1. hafta, 1. ay ve 6. ay kontrollerini otomatikleştirerek müşteri memnuniyetini ve sadakatini artırın.",
    content: `İşitme cihazı kullanıcıları için uyum süreci hassas bir dönemdir. Cihazın kulak kalıbına alışması, ses ayarlarının optimize edilmesi ve düzenli kontroller, cihazın rafa kaldırılmasını önleyen en önemli etkenlerdir.

Sistematik bir takip planı oluşturmak, hastaların merkezinizle olan bağını güçlendirir ve tavsiye (referans) oranlarını doğrudan artırır.`,
    date: "28 Mayıs 2026",
    readTime: "5 dk okuma",
    category: "Operasyon",
    image: "/home/hero.webp",
  },
];