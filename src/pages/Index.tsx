import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import MessageSection from "@/components/MessageSection";
import PlansSection from "@/components/PlansSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MarqueeBanner />
      <div id="sobre">
        <AboutSection />
      </div>
      <div id="beneficios">
        <BenefitsSection />
      </div>
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <div id="contato">
        <CTASection />
      </div>
      <MessageSection />
      <div id="planos">
        <PlansSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
