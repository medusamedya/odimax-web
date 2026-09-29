import { notFound } from "next/navigation";
import { modulesData, ModuleDataType } from "@/data/modulesData";
import ModuleHero from "@/app/components/modules/ModuleHero";
import ModuleFeatures from "@/app/components/modules/ModuleFeatures";
import DynamicFaq from "@/app/components/modules/DynamicFaq";
import ModuleContactCTA from "@/app/components/modules/ModuleContactCTA";
import LogoMarquee from "@/app/components/home/LogoMarquee";
import type { Metadata } from "next";

// Tip tanımında params'ın artık bir Promise olduğunu belirtiyoruz
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(modulesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const moduleData = modulesData[slug as keyof typeof modulesData];

  if (!moduleData) {
    return { title: "Modül Bulunamadı | Odimax", robots: { index: false, follow: false } };
  }

  return {
    title: `${moduleData.hero.badge.replace("Modüller > ", "")} | Odimax`,
    description: moduleData.hero.description,
    alternates: { canonical: `/modules/${moduleData.slug}` },
  };
}

// 1. Bileşenimizi 'async' yapıyoruz
export default async function ModulePage({ params }: PageProps) {
  
  // 2. params nesnesini await ile çözümlüyoruz
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // URL'den gelen slug ile datayı eşleştir
  const moduleData: ModuleDataType | undefined = modulesData[slug as keyof typeof modulesData];

  // Eğer url'de geçersiz bir modül adı varsa 404 sayfasına yönlendir
  if (!moduleData) {
    notFound();
  }

  return (
    <main>
      {/* 1. Dinamik Hero Alanı */}
      <ModuleHero 
        badge={moduleData.hero.badge}
        title={moduleData.hero.title}
        description={moduleData.hero.description}
        images={moduleData.hero.images}
      />

      {/* 2. Özelleştirilmiş 4 Başlıklı Bento Grid Alanı */}
      <ModuleFeatures features={moduleData.features} />

      {/* 3. Dinamik SSS (Faq) Alanı */}
      <DynamicFaq faqs={moduleData.faqs} />

      {/* 4. Siyah Dalgalı İletişim Kartı */}
      <ModuleContactCTA />
    </main>
  );
}
