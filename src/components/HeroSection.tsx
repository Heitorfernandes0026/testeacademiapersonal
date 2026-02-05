import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background-new.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden pt-20 bg-background">
      
      {/* Full Background Image - High Quality with preload */}
      <img 
        src={heroBackground}
        alt="Personal Trainer"
        className="absolute top-20 left-0 right-0 bottom-0 w-full h-[calc(100%-5rem)] object-cover md:object-cover object-[70%_top]"
        style={{ 
          imageRendering: 'auto',
          contentVisibility: 'auto',
        }}
        fetchPriority="high"
        decoding="async"
        loading="eager"
        width={1920}
        height={1080}
      />
      
      {/* Subtle overlay gradient for text readability */}
      <div className="absolute top-20 left-0 right-0 bottom-0 bg-gradient-to-b md:bg-gradient-to-r from-background/80 via-background/40 to-transparent md:from-background/50 md:via-background/20" />

      {/* Main Container */}
      <div className="container mx-auto px-6 lg:px-12 min-h-screen relative z-10">
        <div className="min-h-screen flex items-start md:items-center pt-8 md:py-20">
          
          {/* Content - Left aligned */}
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >

            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 border border-white/30 backdrop-blur-sm"
              style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white tracking-widest">PERSONAL TRAINER</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-[0.95] tracking-tight mb-3 md:mb-6">
              <span className="text-white">AQUI É </span>
              <span style={{ color: 'hsl(210 100% 60%)' }}>LUGAR</span>
              <br />
              <span className="relative inline-block">
                <span className="text-white">DE </span>
                <span style={{ color: 'hsl(210 100% 60%)' }} className="electric-text">RESULTADO!</span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1"
                  style={{ background: 'linear-gradient(90deg, hsl(210 100% 50%), hsl(210 100% 70%))' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </h1>

            {/* Impact Messages */}
            <motion.div 
              className="mb-4 md:mb-10 space-y-3 md:space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex flex-col gap-4">
                {/* Main tagline with white and blue */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-1 h-10 md:h-16 mt-1 flex-shrink-0" style={{ background: 'linear-gradient(180deg, hsl(210 100% 50%) 0%, hsl(210 100% 35%) 100%)' }} />
                  <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-wide leading-tight">
                    <span className="text-white">Treinos estratégicos para </span>
                    <span style={{ color: 'hsl(210 100% 60%)' }}>transformar seu corpo</span>
                    <span className="text-white"> em até </span>
                    <span className="relative inline-block">
                      <span style={{ color: 'hsl(210 100% 60%)' }}>12 semanas</span>
                      <motion.span 
                        className="absolute -bottom-1 left-0 right-0 h-0.5"
                        style={{ background: 'linear-gradient(90deg, hsl(210 100% 50%), hsl(210 100% 70%))' }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                      />
                    </span>
                  </p>
                </div>
              </div>
              
              {/* Arrow indicators with gradient - hidden on mobile */}
              <div className="hidden md:flex gap-2 mt-6">
                {[0, 1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    className="w-0 h-0 border-y-[7px] border-y-transparent"
                    style={{ 
                      borderLeftWidth: '12px',
                      borderLeftStyle: 'solid',
                      borderLeftColor: i === 0 ? 'hsl(210 100% 60%)' : i === 1 ? 'hsl(210 80% 55%)' : 'hsl(210 60% 45%)'
                    }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="mt-16 md:mt-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a 
                href="#planos"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#planos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-lg flex items-center gap-4 group relative px-8 py-4 font-bold bg-white text-background hover:bg-white/90 transition-all"
                style={{ 
                  clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-12" />
                <span className="font-bold">COMECE AGORA</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent"
                  style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>


        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-10 h-10" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;