import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20">
          
          {/* Left Side - Personal Trainer Image */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow Effect Behind Image */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              
              {/* Main Image */}
              <div className="relative">
                <img 
                  src="https://tgprvcodlwyfxjbxirgh.supabase.co/storage/v1/object/public/lovable-uploads/img_1769653669_54942dc1.jpeg"
                  alt="Felipe Nery - Personal Trainer"
                  className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-2xl shadow-2xl"
                  style={{ boxShadow: 'var(--shadow-glow)' }}
                />
                
                {/* Decorative Frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
              </div>
              
              {/* Floating Stats Card */}
              <div 
                className="absolute -bottom-6 -right-6 glass-card px-6 py-4 rounded-xl animate-float"
              >
                <p className="text-3xl font-display text-white">500+</p>
                <p className="text-xs text-white/60">Transformações</p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/50 rounded-full text-sm text-primary opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              TRANSFORMAÇÃO GARANTIDA
            </div>

            {/* Main Heading */}
            <h1 
              className="section-title text-6xl md:text-7xl lg:text-8xl leading-none mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="text-foreground">FELIPE</span>
              <br />
              <span className="text-gradient">NERY</span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              Personal Trainer especializado em transformações reais. 
              Alcance o corpo dos seus sonhos com acompanhamento personalizado e resultados comprovados.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              <button className="btn-cta rounded-lg flex items-center justify-center gap-3">
                COMEÇAR AGORA
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-outline rounded-lg flex items-center justify-center gap-3">
                <Play className="w-5 h-5" />
                VER RESULTADOS
              </button>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border opacity-0 animate-fade-up"
              style={{ animationDelay: "1s" }}
            >
              <div>
                <p className="text-4xl md:text-5xl font-display text-foreground">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Alunos Transformados</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-display text-foreground">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-display text-foreground">98%</p>
                <p className="text-sm text-muted-foreground mt-1">Taxa de Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
