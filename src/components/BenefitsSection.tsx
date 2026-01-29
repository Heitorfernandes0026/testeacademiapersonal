import { Target, Zap, Users, Award } from "lucide-react";

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

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Por que escolher</span>
          <h2 className="section-title mt-4 text-white">
            O MÉTODO <span className="text-gradient">FELIPE NERY</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display text-white mb-3">{benefit.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
