import { Target, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Target,
    title: "TREINO PERSONALIZADO",
    description: "Cada programa é criado exclusivamente para você, considerando seus objetivos, limitações e rotina.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Zap,
    title: "RESULTADOS RÁPIDOS",
    description: "Metodologia comprovada que acelera seus resultados de forma saudável e sustentável.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Users,
    title: "ACOMPANHAMENTO 24/7",
    description: "Suporte contínuo via WhatsApp para tirar dúvidas e manter sua motivação sempre alta.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Award,
    title: "GARANTIA DE RESULTADO",
    description: "Se você seguir o programa e não ver resultados em 30 dias, devolvemos seu investimento.",
    gradient: "from-purple-500/20 to-pink-500/20",
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
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const BenefitsSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]"
        animate={{
          x: [50, -50, 50],
          y: [30, -30, 30],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Por que escolher
          </motion.span>
          <h2 className="section-title text-foreground">
            O MÉTODO{" "}
            <span className="relative">
              <span className="text-gradient">FELIPE NERY</span>
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
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
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Card Glow */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              {/* Card Content */}
              <div className="relative glass-card p-8 rounded-3xl border border-border/50 group-hover:border-primary/30 transition-all duration-500 h-full backdrop-blur-xl">
                {/* Icon Container */}
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 relative overflow-hidden"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <benefit.icon className="w-8 h-8 text-primary relative z-10" />
                </motion.div>
                
                <h3 className="text-xl font-display text-foreground mb-3 tracking-wide">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                
                {/* Hover Line */}
                <motion.div 
                  className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
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
