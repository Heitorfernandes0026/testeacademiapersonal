import { Dumbbell, Smartphone, Circle, Check, Salad, Play, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const consultoriaPlans = [
  {
    name: "PLANO PADRÃO",
    prices: [
      { period: "Trimestral", price: "R$399,90" },
      { period: "Semestral", price: "R$719,90" },
      { period: "Anual", price: "R$1.159,90" },
    ],
    features: [
      {
        icon: Dumbbell,
        iconColor: "hsl(210 100% 60%)",
        title: "TREINO 100% INDIVIDUALIZADO",
        description: "De acordo com o seu objetivo. Afinal, cada pessoa é única e tem uma realidade diferente, por isso o treino precisa ser pensado especificamente para você."
      },
      {
        icon: Smartphone,
        iconColor: "hsl(280 100% 70%)",
        title: "ACESSO A APLICATIVO EXCLUSIVO",
        description: "Com todos os exercícios do seu treino demonstrados em vídeo, para você saber exatamente como executar cada movimento."
      },
      {
        icon: Circle,
        iconColor: "hsl(0 80% 60%)",
        title: "TREINOS ADAPTÁVEIS",
        description: "Podendo ser realizados na academia ou em casa, sem desculpas."
      },
      {
        icon: Check,
        iconColor: "hsl(140 70% 50%)",
        title: "SUPORTE DIRETO",
        description: "Via WhatsApp ou aplicativo, para tirar dúvidas e ter acompanhamento durante todo o processo."
      },
    ],
    buttonText: "ESCOLHER PLANO PADRÃO",
  },
  {
    name: "PLANO PREMIUM",
    prices: [
      { period: "Trimestral", price: "R$449,90" },
      { period: "Semestral", price: "R$809,90" },
      { period: "Anual", price: "R$1.299,90" },
    ],
    features: [
      {
        icon: Dumbbell,
        iconColor: "hsl(210 100% 60%)",
        title: "TREINO 100% INDIVIDUALIZADO",
        description: "De acordo com o seu objetivo. Cada pessoa é única, por isso o treino precisa ser pensado especificamente para você."
      },
      {
        icon: Smartphone,
        iconColor: "hsl(280 100% 70%)",
        title: "ACESSO A APLICATIVO EXCLUSIVO",
        description: "Com todos os exercícios do seu treino demonstrados em vídeo, para você executar cada movimento da forma correta."
      },
      {
        icon: Circle,
        iconColor: "hsl(0 80% 60%)",
        title: "TREINOS ADAPTÁVEIS",
        description: "Podendo ser realizados na academia ou em casa, sem desculpas."
      },
      {
        icon: Check,
        iconColor: "hsl(140 70% 50%)",
        title: "SUPORTE DIRETO",
        description: "Via WhatsApp ou aplicativo, para tirar dúvidas e realizar ajustes no treino."
      },
      {
        icon: Salad,
        iconColor: "hsl(80 70% 50%)",
        title: "ACOMPANHAMENTO NUTRICIONAL",
        description: "Consulta nutricional online com nutricionista, além de plano alimentar totalmente personalizado."
      },
    ],
    buttonText: "ESCOLHER PLANO PREMIUM",
    isPremium: true,
  },
];

const PlansSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
          style={{
            background: 'radial-gradient(circle, hsl(210 100% 50% / 0.08) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-4 tracking-tight">
            PLANOS E{" "}
            <span style={{ color: 'hsl(210 100% 60%)' }}>MODALIDADES</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Modalidades pensadas para diferentes rotinas e objetivos
          </p>
        </motion.div>

        {/* CONSULTORIA Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <span 
              className="inline-block px-6 py-2 text-sm font-bold uppercase tracking-[0.3em] rounded-full border mb-4"
              style={{ 
                borderColor: 'hsl(210 100% 50% / 0.5)',
                background: 'hsl(210 100% 50% / 0.1)',
                color: 'hsl(210 100% 60%)'
              }}
            >
              Consultoria Online
            </span>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Acompanhamento personalizado com treinos exclusivos e suporte direto
            </p>
          </div>

          {/* Consultoria Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
            {consultoriaPlans.map((plan, planIndex) => (
              <motion.div
                key={planIndex}
                className="relative h-full"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: planIndex * 0.2 }}
              >
                <div 
                  className="relative overflow-hidden rounded-2xl border h-full flex flex-col"
                  style={{ 
                    background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 50% 5%) 100%)',
                    borderColor: 'hsl(210 100% 50% / 0.2)',
                  }}
                >
                  {plan.isPremium && (
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'radial-gradient(ellipse at top, hsl(210 100% 50% / 0.15) 0%, transparent 60%)',
                      }}
                    />
                  )}

                  <div className="relative p-8 md:p-10 flex flex-col flex-1">
                    <h3 className="text-2xl md:text-3xl font-display text-foreground text-center mb-8 tracking-wide">
                      {plan.name}
                    </h3>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8 md:mb-10">
                      {plan.prices.map((priceOption, priceIndex) => (
                        <div
                          key={priceIndex}
                          className="text-center p-2 sm:p-4 rounded-lg border"
                          style={{
                            background: 'hsl(210 50% 10% / 0.5)',
                            borderColor: 'hsl(210 100% 50% / 0.3)',
                          }}
                        >
                          <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">{priceOption.period}</p>
                          <p 
                            className="text-sm sm:text-lg md:text-xl font-bold"
                            style={{ color: 'hsl(210 100% 60%)' }}
                          >
                            {priceOption.price}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-6 mb-10 flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <feature.icon 
                              className="w-5 h-5" 
                              style={{ color: feature.iconColor }}
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1 text-sm tracking-wide">
                              {feature.title}
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <motion.a
                      href="https://wa.me/5531989196115?text=Olá! Tenho interesse no plano de Consultoria Online."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-6 rounded-lg font-bold text-white text-base tracking-wide transition-all mt-auto text-center block"
                      style={{
                        background: 'linear-gradient(90deg, hsl(210 100% 45%) 0%, hsl(210 100% 55%) 100%)',
                        boxShadow: '0 4px 20px hsl(210 100% 50% / 0.3)',
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 6px 30px hsl(210 100% 50% / 0.4)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.buttonText}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* OUTRAS MODALIDADES Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <span 
              className="inline-block px-6 py-2 text-sm font-bold uppercase tracking-[0.3em] rounded-full border mb-4"
              style={{ 
                borderColor: 'hsl(210 100% 50% / 0.5)',
                background: 'hsl(210 100% 50% / 0.1)',
                color: 'hsl(210 100% 60%)'
              }}
            >
              Outras Modalidades
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Queima Diária Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div 
                className="relative overflow-hidden rounded-2xl border p-8 h-full flex flex-col"
                style={{ 
                  background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 50% 5%) 100%)',
                  borderColor: 'hsl(210 100% 50% / 0.2)',
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: 'hsl(210 100% 50% / 0.15)' }}
                  >
                    <Play className="w-7 h-7" style={{ color: 'hsl(210 100% 60%)' }} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display text-foreground tracking-wide">
                    QUEIMA DIÁRIA
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 flex-1">
                  Acesso a vídeo-aulas exclusivas com treinos prontos para você fazer em casa ou na academia. Ideal para quem busca praticidade e orientação profissional.
                </p>

                <motion.a
                  href="https://www.queimadiaria.com/?utm_medium=m32&utm_source=s1033&utm_campaign=c100100&utm_content=link_filipemiguel&src=filipemiguel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-lg font-bold text-white text-base tracking-wide transition-all text-center block"
                  style={{
                    background: 'linear-gradient(90deg, hsl(210 100% 45%) 0%, hsl(210 100% 55%) 100%)',
                    boxShadow: '0 4px 20px hsl(210 100% 50% / 0.3)',
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 6px 30px hsl(210 100% 50% / 0.4)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  ACESSAR QUEIMA DIÁRIA
                </motion.a>
              </div>
            </motion.div>

            {/* Aula Avulsa Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div 
                className="relative overflow-hidden rounded-2xl border p-8 h-full flex flex-col"
                style={{ 
                  background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 50% 5%) 100%)',
                  borderColor: 'hsl(210 100% 50% / 0.2)',
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: 'hsl(210 100% 50% / 0.15)' }}
                  >
                    <Calendar className="w-7 h-7" style={{ color: 'hsl(210 100% 60%)' }} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display text-foreground tracking-wide">
                    AULA AVULSA
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4 flex-1">
                  Sessão individual de treino presencial. Perfeito para quem quer experimentar o método ou precisa de orientação pontual.
                </p>

                <div 
                  className="text-center py-4 rounded-lg border mb-6"
                  style={{
                    background: 'hsl(210 50% 10% / 0.5)',
                    borderColor: 'hsl(210 100% 50% / 0.3)',
                  }}
                >
                  <p className="text-sm text-muted-foreground mb-1">Valor por aula</p>
                  <p 
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: 'hsl(210 100% 60%)' }}
                  >
                    R$90,00
                  </p>
                </div>

                <motion.a
                  href="https://wa.me/5531989196115?text=Olá! Tenho interesse em agendar uma aula avulsa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-lg font-bold text-white text-base tracking-wide transition-all text-center block"
                  style={{
                    background: 'linear-gradient(90deg, hsl(210 100% 45%) 0%, hsl(210 100% 55%) 100%)',
                    boxShadow: '0 4px 20px hsl(210 100% 50% / 0.3)',
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 6px 30px hsl(210 100% 50% / 0.4)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  AGENDAR AULA AVULSA
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;