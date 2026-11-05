# Medusa demo form bağlantısı

`/contact#demo-form` mevcut `/api/contact` üzerinden aynı SMTP alıcılarına e-posta göndermeyi sürdürür. Başarılı e-postadan sonra `src/lib/medusa.ts` Medusa'ya imzalı kayıt gönderir. Başvurunun kimliği e-postaya da eklenir; HTTP yeniden denemeleri aynı kimliği kullanır. Medusa e-posta/telefon/firma/il/şube bilgilerini satış ekranının demo tablosuna ekler; satış ekibinin diğer alanları boş kalır.

Vercel production ortamında `MEDUSA_DEMO_WEBHOOK_URL` ve Medusa ile aynı `ODIMAX_WEBHOOK_SECRET` gerekir. Mevcut SMTP ayarlarını değiştirmeyin. Anahtarlar istemciye gönderilmez ve depoya yazılmaz. Medusa Supabase servis anahtarı bu projeye eklenmez. Önce Medusa alıcısını, sonra bu projeyi yayınlayın.

Gönderimler HMAC-SHA256 ile imzalanır, her deneme yeni zaman damgası taşır. Üç denemenin tümü başarısızsa form e-posta açısından başarılı kalır; Vercel'e kişisel veri içermeyen hata yazılır. Kalıcı kuyruk yoktur; uzun kesintide e-posta başvuru kimliğiyle Medusa kayıtlarını karşılaştırın ve eksikleri satış ekranından ekleyin. Sadece Medusa kaydını yeniden denemek için müşterinin formu yeniden doldurmasını istemeyin.

Otomatik test (gerçek e-posta göndermez):

```powershell
node --experimental-strip-types --test tests/medusa.test.mjs
```

Bu test imzayı, geçici hatada yeniden denemeyi ve hatanın e-posta akışını bozmadan sonuçlanmasını denetler. Gerçek SMTP teslimi ayrı olarak doğrulanmalıdır. Tam Medusa kapsamı ve Excel aktarımı MeduSass projesindeki `docs/sales-crm.md` belgesindedir.
