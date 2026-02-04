import { Dumbbell, Smartphone, Circle, Check, Salad } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
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
        description: "De acordo com o seu objetivo. Afinal, cada pessoa é única e tem uma realidade diferente, por isso o treino precisa ser pensado especificamente para você, respeitando seu nível, rotina e necessidades."
      },
      {
        icon: Smartphone,
        iconColor: "hsl(280 100% 70%)",
        title: "ACESSO A APLICATIVO EXCLUSIVO",
        description: "Com todos os exercícios do seu treino demonstrados em vídeo, para você saber exatamente como executar cada movimento da forma correta."
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
        description: "Via WhatsApp ou aplicativo, para tirar dúvidas, ajustar o treino sempre que necessário e ter acompanhamento durante todo o processo da consultoria."
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
        description: "De acordo com o seu objetivo. Afinal, cada pessoa é única, por isso o treino precisa ser pensado especificamente para você, respeitando seu nível, rotina e necessidades."
      },
      {
        icon: Smartphone,
        iconColor: "hsl(280 100% 70%)",
        title: "ACESSO A APLICATIVO EXCLUSIVO",
        description: "Com todos os exercícios do seu treino demonstrados em vídeo, para você executar cada movimento da forma correta e sem dúvidas."
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
        description: "Via WhatsApp ou aplicativo, para tirar dúvidas, realizar ajustes no treino e ter acompanhamento durante todo o processo da consultoria."
      },
      {
        icon: Salad,
        iconColor: "hsl(80 70% 50%)",
        title: "ACOMPANHAMENTO NUTRICIONAL (CONSULTORIA PREMIUM)",
        description: "Você ganha uma consulta nutricional online com minha nutricionista, além de um plano alimentar totalmente personalizado, focado no seu objetivo e em maximizar seus resultados."
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

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, planIndex) => (
            <motion.div
              key={planIndex}
              className="relative h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: planIndex * 0.2 }}
            >
              {/* Plan Card */}
              <div 
                className="relative overflow-hidden rounded-2xl border h-full flex flex-col"
                style={{ 
                  background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 50% 5%) 100%)',
                  borderColor: 'hsl(210 100% 50% / 0.2)',
                }}
              >
                {/* Glow effect for premium */}
                {plan.isPremium && (
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'radial-gradient(ellipse at top, hsl(210 100% 50% / 0.15) 0%, transparent 60%)',
                    }}
                  />
                )}

                <div className="relative p-8 md:p-10 flex flex-col flex-1">
                  {/* Plan Name */}
                  <h3 className="text-2xl md:text-3xl font-display text-foreground text-center mb-8 tracking-wide">
                    {plan.name}
                  </h3>

                  {/* Pricing Options */}
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

                  {/* Features */}
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

                  {/* CTA Button */}
                  <motion.button
                    className="w-full py-4 px-6 rounded-lg font-bold text-white text-base tracking-wide transition-all mt-auto"
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
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
