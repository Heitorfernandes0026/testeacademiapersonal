import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden pt-20 bg-background">
      {/* Blue Banner Strip */}
      <div 
        className="absolute top-20 left-0 right-0 z-20 py-2.5 overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, hsl(210 100% 35%) 0%, hsl(210 100% 50%) 50%, hsl(210 100% 35%) 100%)',
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 relative">
          <p className="text-white text-sm font-bold tracking-[0.3em] text-center">
            PERSONAL TRAINER
          </p>
        </div>
      </div>
      
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Subtle blue glow accent */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          background: 'radial-gradient(circle, hsl(210 100% 50% / 0.08) 0%, transparent 60%)',
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

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
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display leading-[0.9] tracking-tight mb-6">
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
              className="mb-10 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex flex-col gap-4">
                {/* Main tagline with white and blue */}
                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 mt-1" style={{ background: 'linear-gradient(180deg, hsl(210 100% 50%) 0%, hsl(210 100% 35%) 100%)' }} />
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide leading-tight">
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
              
              {/* Arrow indicators with gradient */}
              <div className="flex gap-2 mt-6">
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