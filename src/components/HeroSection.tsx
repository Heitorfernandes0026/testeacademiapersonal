import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Zap } from "lucide-react";


const HeroSection = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-background relative overflow-hidden grain-overlay">
      {/* Dramatic Lighting Background */}
      <div className="absolute inset-0">
        {/* Golden/warm light from top-right (sunset effect) */}
        <div 
          className="absolute top-0 right-0 w-[80%] h-[70%]"
          style={{
            background: 'radial-gradient(ellipse at top right, hsl(35 100% 50% / 0.15) 0%, hsl(25 100% 45% / 0.08) 40%, transparent 70%)',
          }}
        />
        
        {/* Red accent glow */}
        <motion.div 
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, hsl(0 85% 50% / 0.12) 0%, transparent 60%)',
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8] 
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Energy diagonal lines */}
      <div className="absolute inset-0 energy-lines opacity-50" />

      {/* Dramatic Red Diagonal Slashes */}
      <motion.div 
        className="absolute top-0 right-[15%] w-[120px] h-[500px] bg-primary/90"
        style={{ transform: 'skewX(-15deg) translateY(-100px)' }}
        initial={{ height: 0 }}
        animate={{ height: 500 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-0 right-[20%] w-[40px] h-[350px] bg-primary/60"
        style={{ transform: 'skewX(-15deg) translateY(-50px)' }}
        initial={{ height: 0 }}
        animate={{ height: 350 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      />
      <motion.div 
        className="absolute bottom-0 left-[10%] w-[80px] h-[400px] bg-primary/40"
        style={{ transform: 'skewX(-15deg) translateY(100px)' }}
        initial={{ height: 0 }}
        animate={{ height: 400 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      />

      {/* Main Container */}
      <div className="container mx-auto px-6 lg:px-12 min-h-screen relative z-10">
        <div className="grid lg:grid-cols-2 min-h-screen items-center gap-8 py-20">
          
          {/* Left Side - Image with Geometric Elements */}
          <motion.div 
            className="relative order-2 lg:order-1 h-[500px] lg:h-[750px]"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Geometric aggressive shapes */}
            <div className="absolute inset-0">
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 400 700" 
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Sharp diagonal red accent - upper */}
                <polygon 
                  points="200,0 400,0 400,250 280,350" 
                  className="fill-primary"
                />
                {/* Sharp diagonal red accent - lower */}
                <polygon 
                  points="250,400 400,300 400,600 320,700 220,550" 
                  className="fill-primary/80"
                />
                {/* Accent orange/golden triangle */}
                <polygon 
                  points="350,150 400,100 400,200" 
                  className="fill-accent"
                />
              </svg>
            </div>


            {/* Electric accent dots */}
            <motion.div 
              className="absolute top-20 right-16 w-4 h-4 bg-primary rounded-full animate-glow-pulse"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-40 right-8 w-2 h-2 bg-accent rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="order-1 lg:order-2 text-center lg:text-right z-20"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/30"
              style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary tracking-widest">PERSONAL TRAINER</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display text-foreground leading-[0.85] tracking-tight mb-6">
              AQUI É LUGAR
              <br />
              <span className="relative inline-block">
                <span className="text-primary electric-text">DE RESULTADO!</span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </h1>

            {/* Subheadline */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Compromisso com{" "}
                <span className="text-foreground font-semibold">performance</span>
                <br />
                e <span className="text-accent font-bold">excelência.</span>
              </p>
              
              {/* Aggressive arrow indicators */}
              <div className="flex justify-center lg:justify-end gap-2 mt-6">
                {[0, 1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    className="w-0 h-0 border-l-[12px] border-l-primary border-y-[7px] border-y-transparent"
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
              className="flex justify-center lg:justify-end"
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

        {/* Bottom Info Bar */}
        <motion.div 
          className="absolute bottom-8 left-6 right-6 lg:left-12 lg:right-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-t border-primary/20">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <div className="w-0 h-0 border-l-[16px] border-l-primary border-y-[10px] border-y-transparent" />
                <span className="text-3xl font-display tracking-wide ml-3">
                  FELIPE <span className="text-primary">NERY</span>
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 font-medium">
                <span className="text-primary font-bold">@</span>
                @felipenery.fit
              </a>
              <a href="tel:11999999999" className="hover:text-primary transition-colors flex items-center gap-2 font-medium">
                <span className="text-primary">📞</span>
                (11) 99999-9999
              </a>
              <div className="flex items-center gap-2 font-medium">
                <span className="text-primary">📍</span>
                São Paulo, SP
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 text-primary hover:text-accent transition-colors"
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