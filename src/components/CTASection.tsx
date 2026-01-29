import { ArrowRight, Check, MessageCircle } from "lucide-react";

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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="glass-card rounded-3xl p-12 lg:p-16 text-center max-w-4xl mx-auto border-primary/20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            VAGAS LIMITADAS
          </div>

          {/* Heading */}
          <h2 className="section-title text-white mb-6">
            PRONTO PARA SUA <span className="text-gradient">TRANSFORMAÇÃO?</span>
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Junte-se a mais de 500 pessoas que já transformaram seus corpos e suas vidas com o método Felipe Nery.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 text-left max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-cta rounded-xl text-lg flex items-center justify-center gap-3 animate-pulse-glow">
              <MessageCircle className="w-5 h-5" />
              FALAR COM FELIPE
            </button>
            <button className="btn-outline rounded-xl flex items-center justify-center gap-3">
              VER PLANOS
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Badge */}
          <p className="text-white/40 text-sm mt-8">
            ⚡ Resposta em até 2 horas • 🔒 Seus dados estão seguros
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
