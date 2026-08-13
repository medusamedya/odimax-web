// src/data/modulesData.ts

export const modulesData = {
  "hasta-yonetimi": {
    slug: "hasta-yonetimi",
    hero: {
      badge: "Modüller > Hasta Yönetimi",
      title: "Hasta bilgileri tek ekranda, merkezinizin kontrolünde.",
      description: "Odimax Hasta Yönetimi, işitme merkezinizdeki tüm hasta kayıtlarını düzenli şekilde takip etmenizi sağlar. Hasta iletişim bilgileri, yakın bilgileri, randevular, cihaz süreçleri, notlar ve geçmiş işlemler tek hasta kartı altında toplanır. Böylece bilgiler defterlerde, Excel dosyalarında ya da personel hafızasında dağınık kalmaz.",
      images: [
        {
          src: "/modul/Hasta01.png",
          description: "Hastanın kişisel bilgileri görüntülenebilir.",
        },
        {
          src: "/modul/Hasta02.png",
          description: "Hastanın hangi şubeye kayıtlı olduğu görülebilir.",
        },
      ],
    },
    features: [
      {
        id: 1,
        title: "İşitme merkezlerinde hasta takibi neden zorlaşır?",
        description: "Hasta süreci ilk görüşmeyle bitmez. Deneme, satış, randevu, takip, tamir ve tekrar ziyaretlerle devam eder. Bu bilgiler farklı yerlerde tutulduğunda geçmişe ulaşmak zorlaşır. Odimax, hasta takibini merkezin ortak dijital hafızasına taşır ve sürecin daha düzenli ilerlemesine yardımcı olur.",
        isList: false,
      },
      {
        id: 2,
        title: "Hasta Yönetimi ile neleri takip edebilirsiniz?",
        description: "",
        isList: true,
        listItems: [
          "Hasta iletişim ve kimlik bilgileri",
          "Hasta yakını ve referans bilgileri",
          "Potansiyel, müşteri veya satın almayan hasta durumu",
          "Reçete, rapor ve belge bilgileri",
          "Satış ve deneme geçmişi",
          "Cihaz, randevu ve takip kayıtları",
          "Tamir ve servis geçmişi",
          "Hasta özel notları"
        ]
      },
      {
        id: 3,
        title: "Odimax’ta hasta süreci nasıl işler?",
        description: "Hasta kaydı oluşturulur, gerekli bilgiler hasta kartına eklenir. Hastaya ait her yeni işlem aynı kart altında birikmeye devam eder. Bir hasta tekrar merkezinize geldiğinde ekip, geçmiş işlemleri kolayca görüntüleyerek sürece kaldığı yerden devam edebilir.",
        isList: false,
      },
      {
        id: 4,
        title: "Merkezinize ne kazandırır?",
        description: "Hasta bilgileri kişilere bağlı kalmaz, merkezinizin dijital hafızasında düzenli şekilde saklanır. Personel değişse bile hasta geçmişi korunur. Ekip içi bilgi akışı güçlenir, randevu ve takip süreçleri daha kontrollü yönetilir.",
        isList: false,
      }
    ],
    faqs: [
      {
        id: 1,
        question: "Odimax Hasta Yönetimi hangi bilgileri kaydeder?",
        answer: "Hasta iletişim bilgileri, yakın bilgileri, geliş kaynağı, reçete ve rapor bilgileri, notlar, randevular, cihaz bilgileri ve işlem geçmişi kaydedilebilir."
      },
      {
        id: 2,
        question: "Eski hasta kayıtlarımız Odimax’a aktarılabilir mi?",
        answer: "Evet. Mevcut hasta kayıtlarınız uygun formatta hazırlanarak Odimax’a aktarılabilir."
      },
      {
        id: 3,
        question: "Hastanın geçmiş işlemleri görülebilir mi?",
        answer: "Evet. Satış, deneme, randevu, tamir, takip planı ve notlar hasta kartı üzerinden görüntülenebilir."
      },
      {
        id: 4,
        question: "Hasta bilgilerine herkes erişebilir mi?",
        answer: "Hayır. Kullanıcı rolleri ve yetkilerle hangi ekip üyesinin hangi bilgilere erişeceği kontrol edilebilir."
      },
      {
        id: 5,
        question: "Hasta Yönetimi sadece kayıt oluşturmak için mi kullanılır?",
        answer: "Hayır. Hastanın merkezinizle olan tüm geçmişini ve takip süreçlerini düzenli şekilde yönetmek için kullanılır."
      }
    ]
  },
  
  "randevu-takvim": {
    slug: "randevu-takvim",
    hero: {
      badge: "Modüller > Randevu & Takvim",
      title: "Hasta randevularınızı ve takiplerinizi düzenli planlayın.",
      description: "Odimax Randevu & Takvim, işitme merkezinizdeki hasta randevularını ve satış sonrası takip süreçlerini tek panelden yönetmenizi sağlar. Randevu tarihleri, takip planları, hasta notları ve hatırlatma süreçleri düzenli şekilde kayıt altında tutulur.",
      images: [
        {
          src: "/modul/Randevu01.png",
          description: "Ay içerisinde gelecek randevular görüntülenebilir.",
        },
      ],
    },
    features: [
      {
        id: 1,
        title: "Randevu takibi neden önemlidir?",
        description: "İşitme merkezlerinde hasta ilişkisi satıştan sonra da devam eder. Kontrol randevuları, cihaz ayarları, deneme takipleri ve periyodik görüşmeler düzenli planlanmalıdır. Bu süreçler kişisel hatırlatmalara veya dağınık takvimlere bırakıldığında randevular aksayabilir. Odimax, hasta takiplerini merkezi bir takvim yapısına taşıyarak sürecin daha kontrollü ilerlemesini sağlar.",
        isList: false,
      },
      {
        id: 2,
        title: "Randevu & Takvim ile neleri takip edebilirsiniz?",
        description: "",
        isList: true,
        listItems: [
          "Hasta randevuları",
          "Kontrol ve takip görüşmeleri",
          "Deneme süreci takipleri",
          "Satış sonrası takip planları",
          "Günlük, haftalık ve aylık takvim görünümü",
          "Randevu notları",
          "Hasta bazlı randevu geçmişi",
          "Yaklaşan randevular",
          "WhatsApp / SMS hatırlatma süreçleri",
          "Ekip içi görev ve takip akışı"
        ]
      },
      {
        id: 3,
        title: "Odimax’ta randevu süreci nasıl işler?",
        description: "Hasta kartı üzerinden veya genel takvimden randevu oluşturulur. Randevu tarihi, saati, açıklaması ve ilgili hasta bilgisi sisteme kaydedilir. Satış sonrası takip planları da belirli periyotlarla oluşturulabilir. Böylece ekip, hangi hastanın ne zaman aranacağını veya merkeze çağrılacağını daha düzenli şekilde takip eder.",
        isList: false,
      },
      {
        id: 4,
        title: "Merkezinize ne kazandırır?",
        description: "Randevular ve takipler kişisel ajandalara bağlı kalmaz. Tüm ekip aynı takvim üzerinden süreci görebilir. Bu yapı sayesinde hasta kontrolleri daha düzenli yapılır, unutulan takipler azalır ve merkezinizde daha profesyonel bir hasta deneyimi oluşur.",
        isList: false,
      }
    ],
    faqs: [
      {
        id: 1,
        question: "Odimax’ta hasta randevusu oluşturulabilir mi?",
        answer: "Evet. Hasta randevuları tarih, saat ve açıklama bilgileriyle birlikte oluşturulabilir."
      },
      {
        id: 2,
        question: "Randevular hasta kartında görülebilir mi?",
        answer: "Evet. Hastaya ait randevu geçmişi ve yaklaşan randevular hasta kartı üzerinden görüntülenebilir."
      },
      {
        id: 3,
        question: "Satış sonrası takip planı yapılabilir mi?",
        answer: "Evet. Satış sonrası 1 hafta, 1 ay, 3 ay, 6 ay ve 1 yıl gibi takip planları oluşturulabilir."
      },
      {
        id: 4,
        question: "Randevu hatırlatmaları gönderilebilir mi?",
        answer: "Evet. WhatsApp veya SMS bağlantılı hatırlatma süreçleri Odimax üzerinden yönetilebilir."
      },
      {
        id: 5,
        question: "Ekip yaklaşan randevuları görebilir mi?",
        answer: "Evet. Yetkili kullanıcılar yaklaşan randevuları takvim üzerinden takip edebilir."
      }
    ]
  },

  "stok-yonetimi": {
    slug: "stok-yonetimi",
    hero: {
      badge: "Modüller > Stok Yönetimi",
      title: "Cihaz ve ürün stoklarınızı düzenli takip edin.",
      description: "Odimax Stok Yönetimi, işitme merkezinizdeki cihaz, aksesuar ve sarf malzemelerinizi düzenli şekilde yönetmenizi sağlar. Ürün bilgileri, marka-model detayları, seri numaraları, stok durumu ve hareket geçmişi tek panelde takip edilir.",
      images: [
        {
          src: "/modul/Stok01.png",
          description: "Firmanın toplam ürün stok bilgileri görüntülenebilir.",
        },
        {
          src: "/modul/Stok02.png",
          description: "Ürünlerin ÜTS üzerinden kayıtlı olup olmadığı kontrol edilebilir.",
        },
      ],
    },
    features: [
      {
        id: 1,
        title: "İşitme merkezlerinde stok takibi neden önemlidir?",
        description: "İşitme cihazlarında stok takibi yalnızca adet kontrolü değildir. Her cihazın seri numarası, ÜTS bilgisi, işlem geçmişi ve hangi hastaya bağlı olduğu önemlidir. Bu bilgiler düzenli tutulmadığında cihazların yeri, deneme durumu, satış süreci veya iade geçmişi karışabilir. Odimax, stok sürecini daha kontrollü hale getirerek merkezinizde ürün takibini kolaylaştırır.",
        isList: false,
      },
      {
        id: 2,
        title: "Stok Yönetimi ile neleri takip edebilirsiniz?",
        description: "",
        isList: true,
        listItems: [
          "İşitme cihazı stokları",
          "Aksesuar ve sarf malzemeler",
          "Marka, model ve kategori bilgileri",
          "Seri numarası ve lot bilgileri",
          "GTIN / barkod bilgileri",
          "Ürün giriş ve çıkış hareketleri",
          "Denemeye verilen cihazlar",
          "Satışı yapılan ürünler",
          "İade edilen ürünler",
          "Stok durumu ve ürün geçmişi"
        ]
      },
      {
        id: 3,
        title: "Odimax’ta stok süreci nasıl işler?",
        description: "Ürünler sisteme marka, model, seri numarası ve gerekli bilgilerle eklenir. Ürün hareketleri; alış, deneme, satış, iade veya tamir gibi süreçlerle birlikte kayıt altında ilerler. Bir ürün işlem gördüğünde stok durumu otomatik olarak güncellenir. Böylece ekip, cihazın merkezde mi, hastada mı, satılmış mı veya işlemde mi olduğunu daha kolay takip eder.",
        isList: false,
      },
      {
        id: 4,
        title: "Merkezinize ne kazandırır?",
        description: "Stok bilgileri dağınık listelerde veya kişisel takiplerde kalmaz. Hangi cihazın nerede olduğu, hangi ürünün işlem gördüğü ve stokta ne bulunduğu daha görünür hale gelir. Bu yapı, hem günlük operasyonu düzenler hem de cihaz, seri numarası ve ürün hareketlerinin daha güvenli takip edilmesine yardımcı olur.",
        isList: false,
      }
    ],
    faqs: [
      {
        id: 1,
        question: "Odimax’ta cihazlar seri numarasıyla takip edilebilir mi?",
        answer: "Evet. İşitme cihazları seri numarasıyla kaydedilebilir ve ürün hareketleri bu bilgi üzerinden takip edilebilir."
      },
      {
        id: 2,
        question: "Aksesuar ve sarf malzeme takibi yapılabilir mi?",
        answer: "Evet. Cihazların yanında aksesuar ve sarf malzemeler de stokta takip edilebilir."
      },
      {
        id: 3,
        question: "Denemeye verilen cihazlar stokta görülebilir mi?",
        answer: "Evet. Deneme sürecindeki cihazlar kayıt altına alınır ve ürünün mevcut durumu sistemden takip edilebilir."
      },
      {
        id: 4,
        question: "Satılan ürünler stoktan düşer mi?",
        answer: "Evet. Satış işlemleriyle birlikte ilgili ürün hareketi oluşturulur ve stok durumu güncellenir."
      },
      {
        id: 5,
        question: "ÜTS bilgileri stok yönetimiyle birlikte takip edilebilir mi?",
        answer: "Evet. ÜTS’ye bağlı ürün bilgileri ve ürün hareketleri stok süreciyle birlikte düzenli şekilde takip edilebilir."
      }
    ]
  },

  "uts-yonetimi": {
    slug: "uts-yonetimi",
    hero: {
      badge: "Modüller > ÜTS Yönetimi",
      title: "ÜTS süreçlerinizi daha düzenli takip edin.",
      description: "Odimax ÜTS Yönetimi, işitme merkezinizde ürün hareketlerine bağlı ÜTS süreçlerini daha kontrollü yönetmenizi sağlar. Cihaz girişleri, satış ve teslim bildirimleri, bekleyen işlemler ve ürün durumları tek panelden takip edilir.",
      images: [
        {
          src: "/modul/ÜTS01.png",
          description: "ÜTS ile ilgili işlemler ve ürün kayıtları bu ekran üzerinden yönetilebilir.",
        },
      ],
    },
    features: [
      {
        id: 1,
        title: "ÜTS takibi neden önemlidir?",
        description: "İşitme cihazı süreçlerinde yalnızca satış yapmak yeterli değildir. Ürünün sisteme alınması, hastaya teslim edilmesi, gerekli bildirimlerin yapılması ve işlem durumlarının takip edilmesi gerekir. Bu süreçler manuel takip edildiğinde eksik bildirim, unutulan işlem veya hatalı kayıt riski oluşabilir. Odimax, ÜTS adımlarını ürün ve hasta işlemleriyle birlikte yöneterek merkezin kontrolünü artırır.",
        isList: false,
      },
      {
        id: 2,
        title: "ÜTS Yönetimi ile neleri takip edebilirsiniz?",
        description: "",
        isList: true,
        listItems: [
          "ÜTS ürün bilgileri",
          "Cihaz alma bildirimleri",
          "Satış ve teslim bildirimleri",
          "Bekleyen ÜTS işlemleri",
          "Başarılı ve başarısız bildirimler",
          "Tekrar gönderim adımları",
          "Seri numarası ve ürün eşleşmeleri",
          "HEK / zayiat süreçleri",
          "Ürün hareket geçmişi",
          "Hasta ve cihaz bağlantıları"
        ]
      },
      {
        id: 3,
        title: "Odimax’ta ÜTS süreci nasıl işler?",
        description: "Ürün sisteme eklendiğinde ÜTS bilgileri ve seri numarası ürün kaydıyla birlikte takip edilir. Satış veya teslim sürecinde gerekli ÜTS adımları ilgili işlem üzerinden yönetilir. Bekleyen ya da başarısız olan bildirimler sistemde görülebilir. Böylece ekip hangi işlemin tamamlandığını, hangisinin kontrol edilmesi gerektiğini daha kolay takip eder.",
        isList: false,
      },
      {
        id: 4,
        title: "Merkezinize ne kazandırır?",
        description: "ÜTS işlemleri ayrı listelerde veya manuel hatırlatmalarda kalmaz. Ürün, hasta ve işlem bilgileri aynı yapı içinde izlenir. Bu sayede merkezinizde ÜTS süreçleri daha düzenli yürür, eksik işlem riski azalır ve ekip hangi bildirimin hangi aşamada olduğunu daha net görür.",
        isList: false,
      }
    ],
    faqs: [
      {
        id: 1,
        question: "Odimax üzerinden ÜTS bildirimi takip edilebilir mi?",
        answer: "Evet. Ürün alma, satış ve teslim süreçlerine bağlı ÜTS adımları Odimax üzerinden takip edilebilir."
      },
      {
        id: 2,
        question: "Başarısız ÜTS bildirimleri görülebilir mi?",
        answer: "Evet. Başarısız veya bekleyen bildirimler sistemde görüntülenebilir ve gerekli kontroller yapılabilir."
      },
      {
        id: 3,
        question: "ÜTS bilgileri stok yönetimiyle bağlantılı mı çalışır?",
        answer: "Evet. ÜTS bilgileri ürün, seri numarası ve stok hareketleriyle birlikte takip edilir."
      },
      {
        id: 4,
        question: "Satış sırasında ÜTS süreci yönetilebilir mi?",
        answer: "Evet. Satış ve teslim adımları sırasında ilgili ÜTS süreçleri işlem akışı içinde takip edilebilir."
      },
      {
        id: 5,
        question: "HEK veya zayiat süreçleri takip edilebilir mi?",
        answer: "Evet. Ürün durumuna bağlı HEK ve zayiat süreçleri Odimax içinde kayıt altına alınabilir."
      }
    ]
  },

  "tedarikci-satin-alma": {
    slug: "tedarikci-satin-alma",
    hero: {
      badge: "Modüller > Tedarikçi & Satın Alma",
      title: "Alış ve tedarikçi süreçlerinizi düzenli yönetin.",
      description: "Odimax Tedarikçi & Satın Alma Yönetimi, işitme merkezinizin ürün alışlarını, tedarikçi kayıtlarını ve ödeme süreçlerini tek panelden takip etmenizi sağlar. Satın alma süreci dağınık dosyalara veya manuel takiplere bağlı kalmaz.",
      images: [
        {
          src: "/modul/Tedarikci01.png",
          description: "ÜTS üzerindeki tedarikçiler sisteme eklenebilir.",
        },
        {
          src: "/modul/Tedarikci02.png",
          description: "Anlaşmalı tedarikçilerle ilgili borç ve alacak bilgileri görüntülenebilir.",
        },
      ],
    },
    features: [
      {
        id: 1,
        title: "Satın alma takibi neden önemlidir?",
        description: "İşitme merkezlerinde ürün yalnızca stokta görünmekle kalmaz; hangi tedarikçiden alındığı, hangi seri numarasıyla geldiği, ödeme durumunun ne olduğu ve gerektiğinde iade süreci de takip edilmelidir. Bu bilgiler ayrı yerlerde tutulduğunda tedarikçi bakiyeleri ve geçmiş alış işlemleri karışabilir. Odimax, satın alma sürecini stok ve finans takibiyle birlikte daha düzenli hale getirir.",
        isList: false,
      },
      {
        id: 2,
        title: "Tedarikçi & Satın Alma ile neleri takip edebilirsiniz?",
        description: "",
        isList: true,
        listItems: [
          "Tedarikçi kayıtları",
          "Ürün alış işlemleri",
          "Cihaz, aksesuar ve sarf malzeme girişleri",
          "Seri numarası ve ürün bilgileri",
          "Alış geçmişi",
          "Tedarikçiye iade işlemleri",
          "Tedarikçi ödeme ve tediye kayıtları",
          "Tedarikçi bakiye takibi",
          "ÜTS alma bildirimi süreçleri",
          "Stokla bağlantılı ürün hareketleri"
        ]
      },
      {
        id: 3,
        title: "Odimax’ta satın alma süreci nasıl işler?",
        description: "Tedarikçi kaydı oluşturulur ve alınan ürünler ilgili tedarikçi üzerinden sisteme eklenir. Ürün bilgileri, seri numarası ve gerekli detaylar kaydedildiğinde stok süreci de güncellenir. Ödeme, iade veya ÜTS alma bildirimi gibi adımlar aynı süreç içinde takip edilebilir.",
        isList: false,
      },
      {
        id: 4,
        title: "Merkezinize ne kazandırır?",
        description: "Satın alma süreçleri yalnızca stok girişinden ibaret kalmaz; tedarikçi, ürün, ödeme ve iade bilgileriyle birlikte yönetilir. Bu yapı sayesinde hangi ürünün hangi tedarikçiden alındığı, ödemenin hangi durumda olduğu ve stok hareketinin nasıl ilerlediği daha net görünür.",
        isList: false,
      }
    ],
    faqs: [
      {
        id: 1,
        question: "Odimax’ta tedarikçi kaydı oluşturulabilir mi?",
        answer: "Evet. Tedarikçi bilgileri sisteme kaydedilebilir ve alış işlemleri ilgili tedarikçiyle ilişkilendirilebilir."
      },
      {
        id: 2,
        question: "Satın alınan cihazlar stokla bağlantılı çalışır mı?",
        answer: "Evet. Alış işlemiyle eklenen ürünler stok sürecine dahil edilir ve ürün hareketleri sistemde takip edilebilir."
      },
      {
        id: 3,
        question: "Tedarikçiye iade işlemleri takip edilebilir mi?",
        answer: "Evet. Tedarikçiye yapılan iade işlemleri kayıt altına alınabilir."
      },
      {
        id: 4,
        question: "Tedarikçi ödemeleri görülebilir mi?",
        answer: "Evet. Tedarikçiye yapılan ödeme ve tediye kayıtları takip edilebilir."
      },
      {
        id: 5,
        question: "ÜTS alma bildirimi bu süreçte yönetilebilir mi?",
        answer: "Evet. Satın alma ve ürün giriş süreçlerine bağlı ÜTS alma bildirimi adımları Odimax üzerinden takip edilebilir."
      }
    ]
  },

  "finans-kasa": {
    slug: "finans-kasa",
    hero: {
      badge: "Modüller > Finans (Kasa)",
      title: "Tahsilat ve kasa hareketlerinizi tek panelden takip edin.",
      description: "Odimax Finans (Kasa), işitme merkezinizdeki gelir, ödeme ve kasa hareketlerini düzenli şekilde yönetmenizi sağlar. Satış tahsilatları, tamir ücretleri, hızlı satış ödemeleri ve kasa giriş-çıkışları tek sistemde tutulur.",
      images: [
        {
          src: "/modul/Kasa01.png",
          description: "Şube içerisindeki gelir ve giderleri ayırmak amacıyla birden fazla kasa oluşturulabilir.",
        },
        {
          src: "/modul/Kasa02.png",
          description: "Şube içindeki para giriş ve çıkışları kasa hareketleri üzerinden takip edilebilir.",
        },
      ],
    },
    features: [
      {
        id: 1,
        title: "Kasa takibi neden önemlidir?",
        description: "İşitme merkezlerinde finansal hareketler farklı işlemlerden doğar. Satış, taksit, tamir, aksesuar satışı, tedarikçi ödemesi veya masraf kaydı ayrı ayrı takip edilmelidir. Bu hareketler manuel tutulduğunda kasa bakiyesi, ödeme durumu veya geçmiş tahsilatlar kolayca karışabilir. Odimax, finans takibini işlem süreçleriyle birlikte düzenli hale getirir.",
        isList: false,
      },
      {
        id: 2,
        title: "Finans (Kasa) ile neleri takip edebilirsiniz?",
        description: "",
        isList: true,
        listItems: [
          "Satış tahsilatları",
          "Tamir ve servis ücretleri",
          "Hızlı satış ödemeleri",
          "Nakit, kart ve farklı ödeme yöntemleri",
          "Kasa giriş ve çıkış hareketleri",
          "Tedarikçi ödeme kayıtları",
          "Hasta bazlı ödeme geçmişi",
          "Kasa bakiyesi",
          "Tarih bazlı finans hareketleri",
          "İşlem açıklamaları ve ödeme detayları"
        ]
      },
      {
        id: 3,
        title: "Odimax’ta kasa süreci nasıl işler?",
        description: "Satış, tamir, hızlı satış veya ödeme işlemi oluşturulduğunda ilgili finans hareketi kasaya yansır. Kullanıcı, ödeme yöntemini ve tutarı işlem sırasında kaydedebilir. Tüm kasa hareketleri tarih, işlem türü ve ödeme bilgileriyle birlikte takip edilir. Böylece merkezinizde hangi ödemenin nereden geldiği daha kolay görülebilir.",
        isList: false,
      },
      {
        id: 4,
        title: "Merkezinize ne kazandırır?",
        description: "Finansal bilgiler ayrı defterlerde veya kişisel takiplerde kalmaz. Gelir, ödeme ve kasa hareketleri işlem kayıtlarıyla birlikte izlenir. Bu yapı sayesinde tahsilatlar daha düzenli takip edilir, kasa kontrolü kolaylaşır ve merkezinizin finansal görünürlüğü artar.",
        isList: false,
      }
    ],
    faqs: [
      {
        id: 1,
        question: "Odimax’ta satış tahsilatları takip edilebilir mi?",
        answer: "Evet. Satış işlemlerine bağlı tahsilatlar sistemde kayıt altına alınabilir."
      },
      {
        id: 2,
        question: "Farklı ödeme yöntemleri kullanılabilir mi?",
        answer: "Evet. Nakit, kart ve merkezin kullandığı farklı ödeme yöntemleri işlem sırasında kaydedilebilir."
      },
      {
        id: 3,
        question: "Kasa bakiyesi görülebilir mi?",
        answer: "Evet. Kasa hareketleri ve bakiye bilgileri sistem üzerinden takip edilebilir."
      },
      {
        id: 4,
        question: "Tamir ücretleri kasaya yansır mı?",
        answer: "Evet. Tamir ve servis işlemlerinden doğan ücretler kasa hareketleriyle birlikte takip edilebilir."
      },
      {
        id: 5,
        question: "Hasta bazlı ödeme geçmişi görüntülenebilir mi?",
        answer: "Evet. Hastaya bağlı ödeme ve tahsilat geçmişi ilgili kayıtlar üzerinden görüntülenebilir."
      }
    ]
  },

  "masraf-yonetimi": {
    slug: "masraf-yonetimi",
    hero: {
      badge: "Modüller > Masraf Yönetimi",
      title: "Merkez giderlerinizi düzenli şekilde takip edin.",
      description: "Odimax Masraf Yönetimi, işitme merkezinizde oluşan giderleri kayıt altında tutmanızı sağlar. Kira, personel, operasyonel giderler ve günlük masraflar sistemde işlenir. Merkezinizin gelirleri kadar giderleri de görünür hale gelir.",
      images: [
        {
          src: "/modul/Masraf01.png",
          description: "Kira, personel, operasyonel, günlük ve aylık giderler kayıt altına alınabilir.",
        },
        {
          src: "/modul/Masraf02.png",
          description: "Düzenli ödemeler görüntülenebilir ve takip edilebilir.",
        },
      ],
    },
    features: [
      {
        id: 1,
        title: "Masraf takibi neden önemlidir?",
        description: "İşitme merkezlerinde günlük harcamalar çoğu zaman farklı notlarda, fişlerde veya manuel listelerde takip edilir. Bu durum ay sonunda toplam giderleri görmeyi zorlaştırabilir. Odimax, masrafları kasa hareketleriyle birlikte takip etmenize yardımcı olur. Böylece hangi giderin ne zaman, hangi tutarla işlendiği daha net görülebilir.",
        isList: false,
      },
      {
        id: 2,
        title: "Masraf Yönetimi ile neleri takip edebilirsiniz?",
        description: "",
        isList: true,
        listItems: [
          "Günlük merkez giderleri",
          "Kira, fatura ve operasyonel masraflar",
          "Personel veya hizmet giderleri",
          "Harcama tarihi ve tutarı",
          "Ödeme yöntemi",
          "Masraf açıklamaları",
          "Kasa çıkış hareketleri",
          "Tarih bazlı gider geçmişi",
          "Kategori bazlı masraf takibi"
        ]
      },
      {
        id: 3,
        title: "Odimax’ta masraf süreci nasıl işler?",
        description: "Masraf kaydı oluşturulur, tutar, tarih, açıklama ve ödeme bilgileri sisteme girilir. Kaydedilen masraf ilgili kasa hareketleriyle birlikte takip edilir. Bu sayede merkezinizde yapılan harcamalar ayrı listelerde kaybolmaz; finansal akışın bir parçası olarak düzenli şekilde izlenir.",
        isList: false,
      },
      {
        id: 4,
        title: "Merkezinize ne kazandırır?",
        description: "Masraflar manuel notlara veya dağınık fiş takibine bağlı kalmaz. Merkezinizin gider geçmişi daha düzenli ve ulaşılabilir hale gelir. Gelir ve gider hareketlerini birlikte görebildiğiniz için finansal kontrolünüz güçlenir, ay sonu değerlendirmeleri daha kolay yapılır.",
        isList: false,
      }
    ],
    faqs: [
      {
        id: 1,
        question: "Odimax’ta masraf kaydı oluşturulabilir mi?",
        answer: "Evet. Merkezinize ait giderler tarih, tutar, açıklama ve ödeme bilgileriyle birlikte kaydedilebilir."
      },
      {
        id: 2,
        question: "Masraflar kasa hareketlerine yansır mı?",
        answer: "Evet. Kaydedilen masraflar ilgili kasa çıkış hareketleriyle birlikte takip edilebilir."
      },
      {
        id: 3,
        question: "Farklı masraf türleri takip edilebilir mi?",
        answer: "Evet. Kira, fatura, operasyonel giderler ve benzeri farklı masraf türleri sistemde kayıt altına alınabilir."
      },
      {
        id: 4,
        question: "Geçmiş masraflar görüntülenebilir mi?",
        answer: "Evet. Masraf geçmişi tarih ve işlem bilgileriyle birlikte görüntülenebilir."
      },
      {
        id: 5,
        question: "Masraf Yönetimi finans takibiyle birlikte çalışır mı?",
        answer: "Evet. Masraf kayıtları finans ve kasa süreçleriyle bağlantılı şekilde takip edilebilir."
      }
    ]
  },

  "whatsapp-toplu-mesaj": {
    slug: "whatsapp-toplu-mesaj",
    hero: {
      badge: "Modüller > WhatsApp & Toplu Mesaj",
      title: "Hasta iletişiminizi otomatikleştirin ve düzenleyin.",
      description: "Odimax WhatsApp & Toplu Mesaj modülü ile randevu hatırlatmaları, takip bildirimleri, servis bilgilendirmeleri ve toplu mesaj gönderimlerini sistem üzerinden yönetebilirsiniz. İletişimi tek tek yapılan manuel işlemlerden çıkarın.",
      images: [
        {
          src: "/modul/Whatsapp01.png",
          description: "Şubede kayıtlı bulunan hastalara WhatsApp üzerinden toplu mesaj gönderilebilir.",
        },
        {
          src: "/modul/Whatsapp02.png",
          description: "NetGSM entegrasyonu ile SMS gönderimleri gerçekleştirilebilir.",
        },
      ],
    },
    features: [
      {
        id: 1,
        title: "Hatırlatma ve bilgilendirmeleri daha düzenli yönetin",
        description: "Odimax, yalnızca manuel mesaj gönderimi için değil; randevu, takip planı ve servis süreçlerinde bilgilendirme akışını desteklemek için de kullanılır. Randevu oluşturulduğunda, takip zamanı geldiğinde veya tamir sürecinde cihaz hazır olduğunda hastaya sistem üzerinden bilgilendirme yapılabilir.",
        isList: false,
      },
      {
        id: 2,
        title: "WhatsApp & Toplu Mesaj ile neler yapabilirsiniz?",
        description: "",
        isList: true,
        listItems: [
          "WhatsApp bağlantısını QR kod ile hızlıca kurabilirsiniz.",
          "WhatsApp bağlantı durumunu sistem üzerinden takip edebilirsiniz.",
          "Seçtiğiniz hastalara toplu mesaj gönderebilirsiniz.",
          "Kayıtlı olmayan numaralara hızlı mesaj iletebilirsiniz.",
          "Hazır mesaj şablonlarıyla iletişimi standart hale getirebilirsiniz.",
          "Randevu ve takiplerde otomatik bilgilendirme kullanabilirsiniz.",
          "Gönderilen mesajların geçmişini sistemde görüntüleyebilirsiniz."
        ]
      },
      {
        id: 3,
        title: "Merkez iletişimini kişisel telefonlara bağlı bırakmayın.",
        description: "Hasta iletişimi sadece çalışanların telefonlarında kaldığında geçmişe ulaşmak ve süreci sürdürülebilir yönetmek zorlaşır. Odimax, gönderilen mesajları ve iletişim geçmişini hasta süreciyle birlikte saklar. Böylece ekip değişse bile merkezinizin iletişim düzeni korunur.",
        isList: false,
      }
    ],
    faqs: [
      {
        id: 1,
        question: "WhatsApp bağlantısı nasıl kurulur?",
        answer: "WhatsApp bağlantısı QR kod ile kurulur. Telefonunuzdan WhatsApp bağlı cihazlar bölümünden QR kodu okutarak bağlantıyı başlatabilirsiniz."
      },
      {
        id: 2,
        question: "Toplu mesaj gönderilebilir mi?",
        answer: "Evet. Hasta listesinden seçtiğiniz kişilere toplu mesaj gönderebilirsiniz."
      },
      {
        id: 3,
        question: "Kayıtlı olmayan numaraya mesaj atabilir miyim?",
        answer: "Evet. Hızlı mesaj özelliği ile sisteme kayıtlı olmayan bir numaraya tek seferlik mesaj gönderebilirsiniz."
      },
      {
        id: 4,
        question: "Hazır mesaj şablonları kullanılabilir mi?",
        answer: "Evet. Doğum günü, özel gün, takip hatırlatması ve genel bilgilendirme gibi mesajlar için şablonlar kullanılabilir."
      },
      {
        id: 5,
        question: "Randevu hatırlatmaları otomatik gönderilir mi?",
        answer: "Evet. Sistem, randevu ve takip süreçlerinde belirlenen ayarlara göre otomatik bilgilendirme gönderebilir."
      },
      {
        id: 6,
        question: "Gönderilen mesajlar sonradan görüntülenebilir mi?",
        answer: "Evet. Toplu, hızlı, tekil ve otomatik gönderilen mesajların geçmişi sistem üzerinden takip edilebilir."
      }
    ]
  },

  "raporlama-dashboard": {
    slug: "raporlama-dashboard",
    hero: {
      badge: "Modüller > Raporlama & Dashboard",
      title: "Merkezinizin durumunu tek bakışta görün.",
      description: "Odimax Raporlama & Dashboard modülü; hasta, satış, kasa, randevu, stok ve ÜTS süreçlerinden gelen özetleri anlaşılır kartlar ve raporlarla merkezinize genel bakış sağlar. Kararlarınızı dağınık bilgilerle değil net verilerle yönetin.",
      images: [
        {
          src: "/modul/Rapor01.png",
          description: "Sistem üzerinde bulunan toplam hasta sayısı görüntülenebilir.",
        },
        {
          src: "/modul/Rapor02.png",
          description: "Kasa ve cari bilgiler takip edilebilir.",
        },
      ],
    },
    features: [
      {
        id: 1,
        title: "Veriler dağınık olduğunda yönetim zorlaşır.",
        description: "Satışlar ayrı yerde, kasa hareketleri başka yerde, randevular farklı bir listede takip edildiğinde merkezin gerçek durumunu görmek zaman alır. Odimax, önemli verileri ana ekranda bir araya getirir. Böylece gün içinde neyin yolunda gittiğini, neyin takip edilmesi gerektiğini daha hızlı fark edebilirsiniz.",
        isList: false,
      },
      {
        id: 2,
        title: "Raporlama & Dashboard ile neler yapabilirsiniz?",
        description: "",
        isList: true,
        listItems: [
          "Ana ekranda merkezinize ait özet kartları görüntüleyebilirsiniz.",
          "Günlük satış ve kasa durumunu takip edebilirsiniz.",
          "Yaklaşan randevuları görebilirsiniz.",
          "Hasta durum dağılımını inceleyebilirsiniz.",
          "Deneme ve satın almayan hasta oranlarını takip edebilirsiniz.",
          "Satın almama nedenlerini raporlayabilirsiniz.",
          "ÜTS bildirim özetlerini kontrol edebilirsiniz.",
          "Süreçlerinize hızlıca erişebilirsiniz."
        ]
      },
      {
        id: 3,
        title: "Daha doğru kararlar için düzenli veri kullanın.",
        description: "Raporlama yalnızca geçmişi görmek için değil, geleceği daha doğru planlamak için de önemlidir. Odimax ile hangi hastaların müşteriye dönüştüğünü, hangi nedenlerle satış kaybı yaşandığını ve merkezin operasyonel durumunu daha net izleyebilirsiniz. Böylece kararlar tahminlere değil, kayıtlı verilere dayanır.",
        isList: false,
      }
    ],
    faqs: [
      {
        id: 1,
        question: "Odimax Dashboard ne işe yarar?",
        answer: "Merkezinizin hasta, satış, kasa, randevu ve ÜTS süreçlerine ait özet bilgileri tek ekranda görmenizi sağlar."
      },
      {
        id: 2,
        question: "Satış ve kasa durumu takip edilebilir mi?",
        answer: "Evet. Günlük satışlar, tahsilatlar ve kasa hareketleri sistemdeki kayıtlar üzerinden takip edilebilir."
      },
      {
        id: 3,
        question: "Hasta dönüşüm raporu var mı?",
        answer: "Evet. Potansiyel hasta, deneme yapılan hasta, müşteri ve satın almayan hasta durumları raporlanabilir."
      },
      {
        id: 4,
        question: "Satın almama nedenleri görülebilir mi?",
        answer: "Evet. Satın almayan hastalar için girilen nedenler raporda toplu şekilde görüntülenebilir."
      },
      {
        id: 5,
        question: "Randevular Dashboard’da görünür mü?",
        answer: "Evet. Yaklaşan randevular ana ekrandan takip edilebilir."
      },
      {
        id: 6,
        question: "ÜTS bildirimleri takip edilebilir mi?",
        answer: "Evet. Bekleyen veya hatalı ÜTS bildirimlerine dair özetler Dashboard üzerinden kontrol edilebilir."
      }
    ]
  }
};

export type ModuleDataType = typeof modulesData["hasta-yonetimi"];
