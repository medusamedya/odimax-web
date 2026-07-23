import Link from "next/link";

// Menü öğelerini dışarıda tanımlayarak kod bütünlüğünü sağlıyoruz
const MENU_ITEMS = [
  { name: "Anasayfa", path: "/" },
  { name: "Hakkımızda", path: "/about" },
  { name: "Fiyatlandırma", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  { name: "İletişim", path: "/contact" },
];

// Sosyal medya verilerini ve SVG haritalarını modüler yapıda tutuyoruz
const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/odimaxcomtr/",
    svgPath: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Odimax-CRM/61586351905906/",
    svgPath: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    ),
  },
 
  {
    name: "Twitter",
    href: "https://x.com/OdimaxCRM",
    svgPath: (
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCui71ZVqCV8h7pGWI7A9iBQ",
    svgPath: (
      <>
        <path d="M2.5 7.1c.3-1.5 1.5-2.7 3-3 .7-.2 6.5-.2 6.5-.2s5.8 0 6.5.2c1.5.3 2.7 1.5 3 3 .2.7.2 4.9.2 4.9s0 4.2-.2 4.9c-.3 1.5-1.5 2.7-3 3-.7.2-6.5.2-6.5.2s-5.8 0-6.5-.2c-1.5-.3-2.7-1.5-3-3-.2-.7-.2-4.9-.2-4.9s0-4.2.2-4.9" />
        <path d="m10 15 5-3-5-3v6" />
      </>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@odimaxcrm",
    svgPath: (
      <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
    ),
  },
];

export default function Footer() {
  return (
    // Mobilde alt navigasyon barını kurtarmak için pb-28, masaüstünde pb-8 kullanıldı.
    <footer className="bg-gradient-to-bl from-brand-blue via-[#1a2642] to-brand-dark text-white font-sans pt-20 pb-28 md:pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Kısım: Grid Yapısı - Mobilde 2 kolon yapıldı */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-8 mb-16">
          
          {/* 1. Kolon: Logo, Açıklama ve Sosyal Medya (Mobilde 2 kolonu da kaplar) */}
          <div className="col-span-2 flex flex-col">
            <Link href="/" className="mb-6 inline-block">
              <span className="text-3xl font-bold tracking-widest text-white drop-shadow-sm">
                ODIMAX
              </span>
            </Link>
            
            <p className="text-white/80 text-sm leading-relaxed max-w-md mb-8">
              Odimax, Medusa Global tarafından, işitme cihazı satış ve uygulama merkezlerinin gerçek operasyonel ihtiyaçları dikkate alınarak geliştirilmiştir.
            </p>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:border-[#6fe7ff] hover:text-[#6fe7ff] hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.svgPath}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Kolon: Kurumsal Menü (Mobilde tek kolon alır, iletişimle yan yana durur) */}
          <div className="col-span-1">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">
              KURUMSAL
            </h4>
            <ul className="space-y-4">
              {MENU_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-white/80 text-sm hover:text-[#6fe7ff] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Kolon: İletişim Bilgileri (Mobilde tek kolon alır) */}
          <div className="col-span-1 break-words">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-6">
              İLETİŞİM
            </h4>
            <ul className="space-y-6">
              
              <li className="flex items-start gap-1 md:gap-4 group">
                <svg className="w-5 h-5 text-[#6fe7ff] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:destek@odimax.com.tr" className="text-white/80 text-sm hover:text-white transition-colors">
                  destek@odimax.com.tr
                </a>
              </li>

              <li className="flex items-start gap-2 md:gap-4 group">
                <svg className="w-5 h-5 text-[#6fe7ff] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <div className="flex flex-col space-y-1.5 text-white/80 text-sm">
                  <a href="tel:08503026353" className="hover:text-white transition-colors">0 850 302 63 53</a>
                  <a href="tel:05337203695" className="hover:text-white transition-colors">0 533 720 36 95</a>
                  <a href="tel:05010773500" className="hover:text-white transition-colors">0 501 077 35 00</a>
                </div>
              </li>

              <li className="flex items-start gap-2 md:gap-4 group">
                <svg className="w-5 h-5 text-[#6fe7ff] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className="text-white/80 text-sm leading-relaxed">
                  1511. Sokak, No:3/A, Umurbey Mah.<br />
                  Alsancak, Konak/İzmir
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Alt Kısım: Copyright ve Linkler */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
          <p className="text-white/60 text-xs">
            © {new Date().getFullYear()} Medusa Global. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/privacy" className="text-white/60 text-xs hover:text-[#6fe7ff] transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/terms" className="text-white/60 text-xs hover:text-[#6fe7ff] transition-colors">
              Kullanım Koşulları
            </Link>
            <Link href="/kvkk" className="text-white/60 text-xs hover:text-[#6fe7ff] transition-colors">
              Kişisel Verilerin Korunması
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}