import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
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
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Moving gradient orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Card */}
          <div className="relative rounded-[3rem] overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary p-[2px] rounded-[3rem]">
              <div className="absolute inset-[2px] bg-card rounded-[calc(3rem-2px)]" />
            </div>
            
            {/* Content */}
            <div className="relative p-12 lg:p-20 text-center">
              {/* Sparkle Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>

              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.3 }}
              >
                <motion.span 
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                VAGAS LIMITADAS - APENAS 10 RESTANTES
              </motion.div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 tracking-wide">
                PRONTO PARA SUA{" "}
                <span className="relative inline-block">
                  <span className="text-gradient">TRANSFORMAÇÃO?</span>
                  <motion.div
                    className="absolute -inset-2 bg-primary/20 rounded-lg blur-xl -z-10"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </h2>

              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Junte-se a mais de <span className="text-primary font-semibold">500 pessoas</span> que já transformaram seus corpos e suas vidas com o método Felipe Nery.
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
                    className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/30"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ x: 5, borderColor: "hsl(var(--primary) / 0.5)" }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="btn-cta rounded-2xl text-lg flex items-center justify-center gap-3 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <MessageCircle className="w-5 h-5" />
                  FALAR COM FELIPE
                  <motion.div
                    className="absolute -inset-1 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  />
                </motion.button>
                <motion.button 
                  className="btn-outline rounded-2xl flex items-center justify-center gap-3 text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  VER PLANOS
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Trust Badges */}
              <motion.div 
                className="flex flex-wrap justify-center gap-6 mt-10 text-muted-foreground text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">⚡</span> Resposta em até 2 horas
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">🔒</span> Seus dados estão seguros
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">💳</span> Pagamento seguro
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
