import InnerHero from "../components/general/InnerHero";

export default function TermsOfServicePage() {
  return (
    <main>
      <InnerHero
        title="Kullanım Şartları ve Hizmet Sözleşmesi"
        description="Odimax bulut tabanlı CRM yazılımını kullanım koşullarını, tarafların hak ve yükümlülüklerini bu sayfada inceleyebilirsiniz."
        breadcrumbs={[{ label: "Kullanım Şartları", href: "/kullanim-sartlari" }]}
      />

      <section className="py-20 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-brand-text space-y-10 leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Taraflar ve Konu</h2>
            <p>
              İşbu sözleşme, Medusa Global Medya Yatırım AŞ. (Bundan sonra “ODİMAX” olarak anılacaktır) ile platforma üye olan veya platformu kullanan “Kullanıcı” (İşitme Cihazı Satış Merkezi) arasında akdedilmiştir. Sözleşmenin konusu, ODİMAX tarafından sunulan bulut tabanlı CRM yazılımının kullanım şartlarının belirlenmesidir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Hizmetin Kapsamı (SaaS)</h2>
            <p>
              ODİMAX, kullanıcıya yazılımın mülkiyetini değil, sözleşme süresi boyunca geçerli olan “Kullanım Hakkı”nı (Lisans) verir. Platform; hasta yönetimi, ÜTS/SGK entegrasyonu ve operasyonel takip süreçlerini kapsayan bir dijital altyapı hizmetidir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Kullanıcı Sorumlulukları</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Veri Girişi:</strong> Sisteme girilen her türlü hasta verisi, reçete ve evrakın doğruluğundan ve hukuka uygunluğundan tamamen “Kullanıcı” sorumludur.</li>
              <li><strong>Şifre Güvenliği:</strong> Kullanıcı, kendisine tanımlanan giriş bilgilerinin güvenliğinden sorumludur; bu bilgilerin üçüncü kişilerle paylaşılması sonucu doğacak veri sızıntılarından ODİMAX sorumlu tutulamaz.</li>
              <li><strong>Mevzuata Uyumluluk:</strong> Kullanıcı, platformu kullanırken 6698 sayılı KVKK ve sağlık mevzuatına uygun hareket edeceğini kabul eder.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Odimax’in Hak ve Yükümlülükleri</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Süreklilik:</strong> ODİMAX, sistemi %99,8 oranında erişilebilir tutmayı hedefler. Ancak teknik bakım, güncelleme veya mücbir sebeplerden kaynaklanan geçici kesintilerden dolayı sorumluluk kabul etmez.</li>
              <li><strong>Fikri Mülkiyet:</strong> ODİMAX yazılımının tüm kaynak kodları, tasarımı ve algoritması Medusa Global Medya Yatırım AŞ.’ye aittir. Kopyalanması veya tersine mühendislik yapılması yasaktır.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Abonelik ve İptal</h2>
            <p>
              Hizmet, seçilen paket (aylık/yıllık) üzerinden faturalandırılır. Ödemesi yapılmayan hesaplar, bildirim süresi sonunda askıya alınabilir. Kullanıcı, üyeliğini iptal etmek istediğinde mevcut verilerini sistemin izin verdiği formatlarda (Excel/PDF vb.) dışa aktarma hakkına sahiptir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Sorumluluk Sınırlaması</h2>
            <p>
              ODİMAX, bir yönetim aracıdır. Yazılım üzerindeki teknik bir aksaklık nedeniyle oluşabilecek dolaylı zararlardan, kar kayıplarından veya kullanıcı hatalarından doğan cezai müeyyidelerden (SGK kesintileri vb.) ODİMAX sorumlu tutulamaz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Yetkili Mahkeme</h2>
            <p>
              İşbu sözleşmeden doğacak uyuşmazlıklarda İzmir Mahkemeleri ve İcra Daireleri yetkilidir.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}