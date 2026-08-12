import Link from "next/link";
import Image from "next/image";
import { blogsData } from "@/data/blogsData";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import InnerHero from "../components/general/InnerHero";

// Türkçe tarih formatını (Örn: "15 Ağustos 2026") JavaScript'in sıralayabileceği zaman damgasına çeviren yardımcı fonksiyon
const parseTurkishDate = (dateString: string) => {
  const months: { [key: string]: number } = {
    "Ocak": 0, "Şubat": 1, "Mart": 2, "Nisan": 3, "Mayıs": 4, "Haziran": 5,
    "Temmuz": 6, "Ağustos": 7, "Eylül": 8, "Ekim": 9, "Kasım": 10, "Aralık": 11
  };
  
  const parts = dateString.split(" ");
  if (parts.length !== 3) return 0; // Beklenmeyen bir format gelirse hata vermesini önler
  
  const day = parseInt(parts[0], 10);
  const month = months[parts[1]];
  const year = parseInt(parts[2], 10);
  
  return new Date(year, month, day).getTime();
};

export default function BlogPage() {
  // Verileri bozmadan kopyalayıp (spread operator), en yeniden en eskiye (descending) sıralıyoruz
  const sortedBlogs = [...blogsData].sort((a, b) => {
    return parseTurkishDate(b.date) - parseTurkishDate(a.date);
  });

  return (
    <main>
      {/* 1. Dinamik İç Sayfa Herosu */}
      <InnerHero
        title="Blog & Sektörel İçgörüler"
        description="İşitme merkezinizin operasyonel verimliliğini artıracak ipuçları, ÜTS mevzuat rehberleri ve Odimax güncellemeleri."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />

      {/* 2. Blog Listesi Alanı */}
      <section className="py-24 bg-[#f8f9fa] font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Burada artık blogsData yerine sıralanmış olan sortedBlogs'u map'liyoruz */}
            {sortedBlogs.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-black/[0.04] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500"
              >
                {/* Blog Görseli */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-light">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Blog İçerik Özeti */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-brand-dark/50 mb-3 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center ">
                       {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-brand-text/70 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-black/[0.04]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors"
                    >
                      Devamını Oku
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}