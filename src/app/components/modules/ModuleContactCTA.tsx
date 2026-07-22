import Link from "next/link";

export default function ModuleContactCTA() {
  return (
    <section className="py-12 bg-brand-neutral font-sans px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[2rem] bg-brand-dark shadow-2xl">
        
        {/* Dalgalı Arka Plan (SVG Pattern) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wavy" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <path d="M0 50 Q 25 25, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.5" />
                <path d="M0 60 Q 25 35, 50 60 T 100 60" fill="none" stroke="white" strokeWidth="0.5" />
                <path d="M0 70 Q 25 45, 50 70 T 100 70" fill="none" stroke="white" strokeWidth="0.5" />
                <path d="M0 80 Q 25 55, 50 80 T 100 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wavy)" />
          </svg>
        </div>

        {/* İçerik */}
        <div className="relative z-10 p-10 md:p-16 flex flex-col items-start">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Yardıma mı ihtiyacınız var?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl">
            Telefonla veya e-posta ile bize ulaşın. Ekibimiz size yardımcı olsun.
          </p>

          <div className="flex flex-col space-y-2 mb-10">
            <a href="tel:08503026353" className="text-4xl md:text-5xl font-bold text-white hover:text-[#6fe7ff] transition-colors tracking-tight">
              0 850 302 63 53
            </a>
            <a href="mailto:info@odimax.com.tr" className="text-2xl md:text-3xl font-medium text-white underline decoration-white/30 underline-offset-8 hover:decoration-[#6fe7ff] hover:text-[#6fe7ff] transition-all">
              info@odimax.com.tr
            </a>
          </div>

          <Link
            href="/contact"
            className="inline-flex bg-gradient-to-r from-blue-600 to-[#00b4d8] hover:from-blue-500 hover:to-[#00d4ff] text-white font-semibold text-lg py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:shadow-[0_0_30px_rgba(0,180,216,0.6)]"
          >
            İletişim
          </Link>
        </div>

      </div>
    </section>
  );
}