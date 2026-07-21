import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogsData } from "@/data/blogsData";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import InnerHero from "@/app/components/general/InnerHero";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Slug ile eşleşen blog yazısını bul
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      {/* 1. Dinamik İç Sayfa Herosu (Blog Başlığına göre şekillenir) */}
      <InnerHero
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.category, href: "/blog" },
        ]}
      />

      {/* 2. Blog İçerik Alanı */}
      <section className="py-24 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Yazar ve Tarih Bilgi Barı */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div className="flex items-center gap-4 text-sm text-brand-dark/60 font-medium">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-blue" />
                {post.date}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1.5 rounded-full">
                {post.category}
              </span>
            </div>
          </div>

          {/* Kapak Görseli */}
          <div className="relative aspect-[16/9] w-full rounded-[2rem] overflow-hidden mb-12 shadow-xl bg-brand-light">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          {/* Makale Gövdesi (Metinler) */}
          <div className="prose prose-lg max-w-none text-brand-text leading-relaxed space-y-6">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-lg text-brand-dark/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Alt Kısım: Geri Dönüş ve Paylaşım */}
          <div className="mt-16 pt-8 border-t border-black/[0.08] flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Tüm Yazılara Dön
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-brand-dark/60">Yazıyı Paylaş:</span>
              <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors cursor-pointer">
                <Share2 className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}