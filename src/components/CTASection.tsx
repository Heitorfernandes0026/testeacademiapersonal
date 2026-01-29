import { ArrowRight, Check, MessageCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Avaliação física completa",
  "Treino 100% personalizado",
  "Suporte via WhatsApp",
  "Ajustes semanais do programa",
  "Dicas de nutrição",
  "Acesso a grupo VIP",
];

const CTASection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden grain-overlay">
      {/* Dramatic Background - Blue Glow */}
      <div className="absolute inset-0">
        {/* Blue glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, hsl(210 100% 50% / 0.1) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        {/* Subtle accent glow */}
        <div 
          className="absolute top-0 right-0 w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, hsl(210 100% 50% / 0.08) 0%, transparent 60%)',
          }}
        />
        
        {/* Diagonal slashes - Blue tinted */}
        <div 
          className="absolute top-0 left-[20%] w-[60px] h-[400px]"
          style={{ 
            background: 'hsl(210 100% 50% / 0.06)',
            transform: 'skewX(-15deg) translateY(-100px)' 
          }}
        />
        <div 
          className="absolute bottom-0 right-[15%] w-[80px] h-[300px]"
          style={{ 
            background: 'hsl(210 100% 50% / 0.06)',
            transform: 'skewX(-15deg) translateY(100px)' 
          }}
        />
      </div>

      {/* Energy Lines */}
      <div className="absolute inset-0 energy-lines opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Card */}
          <div 
            className="relative overflow-hidden"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)' }}
          >
            {/* Card Background with border */}
            <div className="absolute inset-0 bg-card border-2" style={{ borderColor: 'hsl(210 100% 50% / 0.3)' }} />
            
            {/* Blue accent corners */}
            <div className="absolute top-0 left-0 w-32 h-1" style={{ background: 'hsl(210 100% 50%)' }} />
            <div className="absolute top-0 left-0 w-1 h-32" style={{ background: 'hsl(210 100% 50%)' }} />
            <div className="absolute top-0 right-0 w-32 h-1" style={{ background: 'hsl(210 100% 50%)' }} />
            <div className="absolute bottom-0 left-0 w-1 h-32" style={{ background: 'hsl(210 100% 50%)' }} />
            
            {/* Content */}
            <div className="relative p-12 lg:p-20 text-center">
              {/* Zap Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 mb-8 border"
                style={{ 
                  background: 'hsl(210 100% 50% / 0.15)',
                  borderColor: 'hsl(210 100% 50% / 0.3)',
                  clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' 
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-8 h-8" style={{ color: 'hsl(210 100% 60%)' }} />
              </motion.div>

              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-6 py-3 mb-8 border text-sm font-bold tracking-widest"
                style={{ 
                  background: 'hsl(210 100% 50% / 0.15)',
                  borderColor: 'hsl(210 100% 50% / 0.4)',
                  color: 'hsl(210 100% 70%)',
                  clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' 
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.3 }}
              >
                <motion.span 
                  className="w-2 h-2"
                  style={{ background: 'hsl(210 100% 60%)' }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                VAGAS LIMITADAS - APENAS 10 RESTANTES
              </motion.div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 tracking-tight">
                PRONTO PARA SUA{" "}
                <span className="relative inline-block">
                  <span className="electric-text" style={{ color: 'hsl(210 100% 60%)' }}>TRANSFORMAÇÃO?</span>
                  <motion.div
                    className="absolute -inset-4 blur-2xl -z-10"
                    style={{ background: 'hsl(210 100% 50% / 0.15)' }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </h2>

              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Junte-se a mais de <span className="font-bold" style={{ color: 'hsl(210 100% 60%)' }}>500 pessoas</span> que já transformaram seus corpos e suas vidas com o método Felipe Nery.
              </p>

              {/* Features Grid */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14 text-left max-w-3xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 p-3 bg-background/50 border transition-colors"
                    style={{ 
                      borderColor: 'hsl(210 100% 50% / 0.2)',
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' 
                    }}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ x: 5, borderColor: 'hsl(210 100% 50% / 0.5)' }}
                  >
                    <div 
                      className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                      style={{ 
                        background: 'hsl(210 100% 50% / 0.2)',
                        clipPath: 'polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)' 
                      }}
                    >
                      <Check className="w-3.5 h-3.5" style={{ color: 'hsl(210 100% 60%)' }} />
                    </div>
                    <span className="text-sm text-foreground/80 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="btn-cta text-lg flex items-center justify-center gap-3 relative overflow-hidden group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <MessageCircle className="w-5 h-5" />
                  FALAR COM FELIPE
                </motion.button>
                <motion.button 
                  className="btn-outline flex items-center justify-center gap-3 text-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  VER PLANOS
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Trust Badges */}
              <motion.div 
                className="flex flex-wrap justify-center gap-8 mt-12 text-muted-foreground text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span className="flex items-center gap-2 font-medium">
                  <span className="text-white">⚡</span> Resposta em até 2 horas
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <span className="text-white">🔒</span> Seus dados estão seguros
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <span className="text-white">💳</span> Pagamento seguro
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;