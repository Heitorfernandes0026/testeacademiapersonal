import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";

// Lazy load below-the-fold components for better performance
const AboutSection = lazy(() => import("@/components/AboutSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const MessageSection = lazy(() => import("@/components/MessageSection"));
const PlansSection = lazy(() => import("@/components/PlansSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Minimal loading fallback for sections
const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: 'hsl(210 100% 50%)', borderTopColor: 'transparent' }} />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MarqueeBanner />
      <Suspense fallback={<SectionFallback />}>
        <div id="sobre">
          <AboutSection />
        </div>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <div id="beneficios">
          <BenefitsSection />
        </div>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <div id="depoimentos">
          <TestimonialsSection />
        </div>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <div id="contato">
          <CTASection />
        </div>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <MessageSection />
      </Suspense>
      <MarqueeBanner />
      <Suspense fallback={<SectionFallback />}>
        <div id="planos">
          <PlansSection />
        </div>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
