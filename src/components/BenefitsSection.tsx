import { Target, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Target,
    title: "TREINO PERSONALIZADO",
    description: "Cada programa é criado exclusivamente para você, considerando seus objetivos, limitações e rotina.",
  },
  {
    icon: Zap,
    title: "RESULTADOS RÁPIDOS",
    description: "Metodologia comprovada que acelera seus resultados de forma saudável e sustentável.",
  },
  {
    icon: Users,
    title: "ACOMPANHAMENTO 24/7",
    description: "Suporte contínuo via WhatsApp para tirar dúvidas e manter sua motivação sempre alta.",
  },
  {
    icon: Award,
    title: "GARANTIA DE RESULTADO",
    description: "Se você seguir o programa e não ver resultados em 30 dias, devolvemos seu investimento.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const BenefitsSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden grain-overlay">
      {/* Subtle White Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          background: 'radial-gradient(circle, hsl(0 0% 100% / 0.04) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Diagonal Accent */}
      <div 
        className="absolute top-0 right-0 w-[300px] h-[600px] bg-white/5"
        style={{ transform: 'skewX(-15deg) translateX(150px)' }}
      />

      {/* Energy Lines */}
      <div className="absolute inset-0 energy-lines opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-white text-sm font-bold uppercase tracking-[0.4em] mb-4"
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Por que escolher
          </motion.span>
          <h2 className="section-title text-foreground">
            O MÉTODO{" "}
            <span className="relative inline-block">
              <span className="text-white">FELIPE NERY</span>
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-white"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {/* Card Glow on Hover */}
              <motion.div 
                className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Card Content */}
              <div 
                className="relative glass-card p-8 border border-border/50 group-hover:border-white/30 transition-all duration-500 h-full"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
              >
                {/* White accent corner */}
                <div className="absolute top-0 right-0 w-16 h-1 bg-white" />
                <div className="absolute top-0 right-0 w-1 h-16 bg-white" />
                
                {/* Icon Container */}
                <motion.div 
                  className="w-16 h-16 flex items-center justify-center mb-6 relative"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-white/10 border border-white/20" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }} />
                  <benefit.icon className="w-8 h-8 text-white relative z-10" />
                </motion.div>
                
                <h3 className="text-xl font-display text-foreground mb-3 tracking-wide">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                
                {/* Bottom accent line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-white"
                  initial={{ width: 0 }}
                  whileHover={{ width: "60%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;