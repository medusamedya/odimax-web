import AboutSection from "./components/home/AboutSection";
import CtaSection from "./components/home/CtaSection";
import FaqSection from "./components/home/FaqSection";
import FeatureBlocks from "./components/home/FeatureBlocks";
import Hero from "./components/home/Hero";
import LogoMarquee from "./components/home/LogoMarquee";
import ModulesSection from "./components/home/ModulesSection";
import SimpleFeatures from "./components/home/SimpleFeatures";
import StepsSlider from "./components/home/StepsSlider";
import TestimonialsSection from "./components/home/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />  
      <ModulesSection />
      <FeatureBlocks />
      <TestimonialsSection />
      <StepsSlider />
      
      <FaqSection />
      <LogoMarquee />
      <CtaSection />
      
      

      
      {/* Diğer section'lar buraya gelecek */}
    </>
  );
}