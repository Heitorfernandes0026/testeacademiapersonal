import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import logoImage from "@/assets/logo-reference.png";

const HeroSection = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden pt-20">
      {/* Blue Banner Strip - Enhanced */}
      <motion.div 
        className="absolute top-20 left-0 right-0 z-20 py-2.5 overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, hsl(210 100% 35%) 0%, hsl(210 100% 50%) 50%, hsl(210 100% 35%) 100%)',
          boxShadow: '0 4px 30px hsl(210 100% 50% / 0.4), inset 0 1px 0 hsl(210 100% 70% / 0.3)',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <p className="text-white text-sm font-bold tracking-[0.3em] text-center drop-shadow-lg">
            PERSONAL TRAINER
          </p>
        </div>
      </motion.div>
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right bottom',
        }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      
      {/* Subtle white accent glow */}
      <motion.div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px]"
        style={{
          background: 'radial-gradient(circle, hsl(0 0% 100% / 0.08) 0%, transparent 60%)',
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4] 
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Subtle grain overlay */}
      <div className="absolute inset-0 grain-overlay opacity-30" />

      {/* Main Container */}
      <div className="container mx-auto px-6 lg:px-12 min-h-screen relative z-10">
        <div className="min-h-screen flex items-center py-20">
          
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-white leading-[0.9] tracking-tight mb-6">
              AQUI É LUGAR
              <br />
              <span className="relative inline-block">
                <span className="text-white electric-text">DE RESULTADO!</span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </h1>

            {/* Impact Messages */}
            <motion.div 
              className="mb-10 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-white" />
                  <p className="text-xl md:text-2xl text-white font-bold tracking-wide">
                    Um Ano de Resultados em 12 Semanas
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-white/60" />
                  <p className="text-lg md:text-xl text-white/80 font-medium">
                    Mais de 20.000 vidas transformadas
                  </p>
                </div>
              </div>
              
              {/* Arrow indicators */}
              <div className="flex gap-2 mt-6">
                {[0, 1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    className="w-0 h-0 border-l-[12px] border-l-white border-y-[7px] border-y-transparent"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                className="btn-cta text-lg flex items-center gap-4 group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-12" />
                <span className="font-bold">COMECE AGORA</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
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