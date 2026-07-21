import InnerHero from "../components/general/InnerHero";
import FaqSection from "../components/home/FaqSection";
import AboutDetailSection from "../components/about/AboutDetailSection";
import CoreFeatures from "../components/about/CoreFeatures";

export default function AboutPage() {
  return (
    <>
      {/* Dinamik verilerle InnerHero çağırımı */}
      <InnerHero 
        title="Hakkımızda"
        description="İşitme merkezlerinin dijital dönüşümüne liderlik ediyor, günlük operasyonları daha verimli, izlenebilir ve standart hale getiriyoruz."
        breadcrumbs={[
          { label: "Hakkımızda", href: "/about" }
        ]}
      />

      {/* Sayfanın geri kalan içerikleri (Vizyon, Misyon, Değerler vb.) buraya gelecek */}
      <section className="bg-brand-neutral">
        <AboutDetailSection ></AboutDetailSection>
        <CoreFeatures />
        <FaqSection />
      </section>
    </>
  );
}