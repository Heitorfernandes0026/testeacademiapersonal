import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div id="beneficios">
        <BenefitsSection />
      </div>
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <div id="contato">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
