import InnerHero from "../components/general/InnerHero";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <InnerHero
        title="Gizlilik ve Çerez Politikası"
        description="Verilerinizin güvenliği bizim için önceliklidir. Bilgilerinizin nasıl toplandığı ve korunduğu hakkında detaylı bilgi alın."
        breadcrumbs={[{ label: "Gizlilik Politikası", href: "/gizlilik-politikasi" }]}
      />

      <section className="py-20 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-brand-text space-y-10 leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Giriş</h2>
            <p>
              Bu Gizlilik Politikası, Medusa Global Medya Yatırım AŞ. (“ODİMAX”) tarafından işletilen www.odimax.com.tr platformunun, kullanıcıların ve müşterilerin verilerini nasıl topladığını, kullandığını ve koruduğunu açıklar. ODİMAX, işitme cihazı satış merkezlerine yönelik bir SaaS (Yazılım Hizmeti) platformu olarak “Veri Gizliliği”ni en üst seviyede tutmayı taahhüt eder.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Veri Güvenliği ve Saklama</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Bulut Altyapısı:</strong> ODİMAX üzerindeki tüm veriler, yüksek güvenlik standartlarına sahip bulut tabanlı sunucularda saklanmaktadır.</li>
              <li><strong>Erişim Kısıtlaması:</strong> Müşterilerimizin (İşitme Merkezleri) sisteme girdiği hasta verilerine, ODİMAX personeli yalnızca teknik destek veya bakım talebi durumunda, sınırlı yetkiyle erişebilir.</li>
              <li><strong>Şifreleme:</strong> Veri iletimi SSL sertifikaları ile şifrelenmekte ve veri tabanı düzeyinde güvenlik protokolleri uygulanmaktadır.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Toplanan Veriler ve Kullanımı</h2>
            <p className="mb-3">ODİMAX, yazılımın işlevselliğini sağlamak amacıyla şu verileri işler:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Hesap Bilgileri:</strong> Yazılımı kullanan merkezin kurumsal bilgileri ve kullanıcı yetkilendirmeleri.</li>
              <li><strong>Operasyonel Veriler:</strong> ÜTS, SGK ve MEDULA entegrasyonları kapsamında işlenen teknik kayıtlar.</li>
              <li><strong>Kullanım İstatistikleri:</strong> Sistemin performansını artırmak ve kullanıcı deneyimini iyileştirmek adına toplanan anonim veriler.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Çerez (Cookie) Politikası</h2>
            <p className="mb-3">ODİMAX, platformun verimli çalışması için “Zorunlu Çerezler” kullanır:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Oturum Çerezleri:</strong> Kullanıcıların sisteme giriş yapabilmesini ve oturumlarının güvenli bir şekilde açık kalmasını sağlar.</li>
              <li><strong>Tercih Çerezleri:</strong> Yazılım içindeki dil seçimi veya görünüm tercihlerini hatırlar.</li>
              <li><strong>Analitik Çerezler:</strong> Platformun hangi bölümlerinin daha çok kullanıldığını analiz ederek sistem geliştirmelerine kaynaklık eder.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Verilerin Paylaşımı</h2>
            <p>
              Kişisel veriler, kullanıcının açık rızası olmaksızın üçüncü taraflara ticari amaçla satılmaz veya kiralanmaz. Ancak yasal zorunluluklar çerçevesinde yetkili kamu kurumları (TİTCK, SGK vb.) ile entegrasyon gereği veri paylaşımı yapılabilir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Güncellemeler ve İletişim</h2>
            <p className="mb-4">
              ODİMAX, teknolojik gelişmelere ve mevzuat değişikliklerine uyum sağlamak amacıyla bu politikayı dilediği zaman güncelleyebilir. Güncellemeler web sitesinde yayınlandığı andan itibaren geçerlilik kazanır.
            </p>
            <div className="bg-brand-neutral p-6 rounded-2xl border border-black/[0.04] space-y-1">
              <p className="font-semibold text-brand-dark">İletişim Bilgileri:</p>
              <p>Adres: 1511. Sokak, No:3/A, Umurbey Mah. Alsancak, Konak/İzmir</p>
              <p>E-posta: destek@odimax.com.tr</p>
              <p>Mersis No: 0269004891100011</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}