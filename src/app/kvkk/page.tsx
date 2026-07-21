import InnerHero from "../components/general/InnerHero";

export default function KvkkPage() {
  return (
    <main>
      <InnerHero
        title="Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni"
        description="6698 sayılı KVKK uyarınca veri sorumlusu sıfatıyla kişisel verilerinizin işlenme süreçleri hakkında bilgilendirme."
        breadcrumbs={[{ label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" }]}
      />

      <section className="py-20 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-brand-text space-y-10 leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Veri Sorumlusu</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca, kişisel verileriniz; veri sorumlusu olarak Medusa Global Medya Yatırım AŞ. (“Şirket” veya “ODİMAX”) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Kişisel Verilerin Hangi Amaçla İşleneceği</h2>
            <p>
              Toplanan kişisel verileriniz, ODİMAX platformu üzerinden sunulan dijital yönetim hizmetlerinden faydalanabilmeniz, işitme cihazı satış merkezlerinin operasyonel süreçlerinin (hasta, cihaz, evrak, ÜTS ve SGK süreçleri) yürütülmesi, yazılım destek süreçlerinin yönetilmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dahilinde işlenecektir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">3. İşlenen Kişisel Veriler</h2>
            <p className="mb-3">ODİMAX kullanımı kapsamında:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Kimlik Bilgileri:</strong> Ad-soyad, T.C. Kimlik No.</li>
              <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres.</li>
              <li><strong>Müşteri İşlem Bilgileri:</strong> İşitme testi kayıtları, cihaz satış bilgileri, ÜTS ve MEDULA entegrasyon verileri.</li>
              <li><strong>İşlem Güvenliği:</strong> IP adresi, giriş-çıkış kayıtları.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">4. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
            <p>
              Kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, iş ortaklarımıza, tedarikçilerimize (bulut bilişim ve sunucu hizmeti sağlayıcıları), kanunen yetkili kamu kurumlarına (SGK, TİTCK vb.) ve yetkili özel kişilere Kanun’un 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
            <p>
              Kişisel verileriniz, ODİMAX platformu üzerinden dijital ortamda, kullanıcı kayıt formları, API entegrasyonları ve yazılımın kullanımı sırasında otomatik yöntemlerle toplanmaktadır. Bu süreçte verileriniz; “Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması” ve “Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi” hukuki sebeplerine dayanarak işlenmektedir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Veri Sahibinin Kanun’un 11. Maddesinde Sayılan Hakları</h2>
            <p>
              Kişisel veri sahibi olarak Kanun’un 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacına uygun kullanılıp kullanılmadığını öğrenme ve eksik/yanlış işlenmişse düzeltilmesini isteme haklarına sahipsiniz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">7. İletişim ve Başvuru</h2>
            <p className="mb-4">
              Kanun kapsamındaki haklarınızı kullanmak için başvurularınızı; 1511. Sokak, No:3/A, Umurbey Mah. Alsancak, Konak/İzmir adresine yazılı olarak veya destek@odimax.com.tr adresine güvenli elektronik imza ile iletebilirsiniz.
            </p>
            <div className="bg-brand-neutral p-6 rounded-2xl border border-black/[0.04] space-y-1">
              <p className="font-semibold text-brand-dark">Veri Sorumlusu Bilgileri:</p>
              <p>Ünvan: Medusa Global Medya Yatırım AŞ.</p>
              <p>Mersis No: 0269004891100011</p>
              <p>Adres: 1511. Sokak, No:3/A, Umurbey Mah. Alsancak, Konak/İzmir</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}