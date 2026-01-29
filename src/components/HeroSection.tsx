import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Clean background with subtle gradient orbs */}
      <div className="absolute inset-0 bg-background">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      
      {/* Content - Centered */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 border border-primary/40 rounded-full text-sm text-primary backdrop-blur-md bg-background/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          PERSONAL TRAINER ESPECIALIZADO
        </motion.div>

        {/* Main Heading with letter animation */}
        <motion.h1 
          className="text-7xl md:text-8xl lg:text-[11rem] leading-[0.85] mb-6 tracking-tighter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="text-foreground block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            FELIPE
          </motion.span>
          <motion.span 
            className="block relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-gradient">NERY</span>
            {/* Glowing underline */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              initial={{ width: 0, x: "-50%" }}
              animate={{ width: "60%", x: "-50%" }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Transforme seu corpo e sua mente. Acompanhamento personalizado para 
          alcançar resultados reais e duradouros.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button 
            className="btn-cta rounded-full flex items-center justify-center gap-3 group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            COMEÇAR MINHA TRANSFORMAÇÃO
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button 
            className="btn-outline rounded-full flex items-center justify-center gap-3 hover:bg-foreground/5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            VER RESULTADOS
          </motion.button>
        </motion.div>

        {/* Stats - Horizontal with counter animation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-12 md:gap-20 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { value: "500+", label: "Alunos" },
            { value: "10+", label: "Anos" },
            { value: "98%", label: "Satisfação" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl -z-10"
                whileHover={{ scale: 1.5, opacity: 0.8 }}
              />
              <p className="text-5xl md:text-6xl font-display text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
              {index < 2 && <div className="absolute right-[-2.5rem] md:right-[-4rem] top-1/2 -translate-y-1/2 w-px h-16 bg-border hidden md:block" />}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:text-primary transition-colors" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
