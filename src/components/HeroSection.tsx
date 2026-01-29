import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroTrainer from "@/assets/hero-trainer.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Main Container */}
      <div className="container mx-auto px-6 lg:px-12 min-h-screen relative z-10">
        <div className="grid lg:grid-cols-2 min-h-screen items-center gap-8 py-20">
          
          {/* Left Side - Image with Geometric Elements */}
          <motion.div 
            className="relative order-2 lg:order-1 h-[500px] lg:h-[700px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Geometric Shape - Large Triangle/Arrow */}
            <div className="absolute inset-0">
              {/* Main diagonal shape */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 400 600" 
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Upper left triangle */}
                <polygon 
                  points="0,0 400,0 0,350" 
                  fill="transparent"
                  className="stroke-none"
                />
                {/* Coral accent shape - upper */}
                <polygon 
                  points="150,150 400,0 400,200 250,280" 
                  className="fill-primary"
                />
                {/* Coral accent shape - lower */}
                <polygon 
                  points="200,350 400,250 400,500 300,550 180,450" 
                  className="fill-primary"
                />
              </svg>
            </div>

            {/* Trainer Image */}
            <motion.div 
              className="absolute left-0 bottom-0 w-[80%] h-[90%] z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src={heroTrainer} 
                alt="Felipe Nery - Personal Trainer"
                className="w-full h-full object-cover object-top"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />
            </motion.div>

            {/* Floating accent shapes */}
            <motion.div 
              className="absolute top-10 right-10 w-3 h-3 bg-primary rounded-full"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-20 right-20 w-2 h-2 bg-primary/60 rounded-full"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="order-1 lg:order-2 text-center lg:text-right z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-foreground leading-[0.9] tracking-wider mb-6">
              AQUI É LUGAR
              <br />
              <span className="text-gradient">DE RESULTADO!</span>
            </h1>

            {/* Subheadline */}
            <motion.div 
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground">
                Compromisso c/{" "}
                <span className="text-foreground font-semibold">performance e</span>
                <br />
                <span className="text-foreground font-semibold">excelência.</span>
              </p>
              
              {/* Play Icon Decoration */}
              <div className="flex justify-center lg:justify-end gap-1 mt-4">
                <motion.div 
                  className="w-0 h-0 border-l-[10px] border-l-primary border-y-[6px] border-y-transparent"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.div 
                  className="w-0 h-0 border-l-[10px] border-l-primary border-y-[6px] border-y-transparent"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                />
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.button 
                className="btn-cta rounded-xl text-lg flex items-center gap-3 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
                COMECE AGORA
                <motion.span
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Info Bar */}
        <motion.div 
          className="absolute bottom-8 left-6 right-6 lg:left-12 lg:right-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-t border-border/30">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <div className="w-0 h-0 border-l-[14px] border-l-primary border-y-[8px] border-y-transparent" />
                <span className="text-2xl font-display tracking-wider ml-2">
                  FELIPE <span className="text-primary">NERY</span>
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="text-primary">@</span>
                @felipenery.fit
              </a>
              <a href="tel:11999999999" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="text-primary">📞</span>
                (11) 99999-9999
              </a>
              <div className="flex items-center gap-2">
                <span className="text-primary">📍</span>
                São Paulo, SP
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
