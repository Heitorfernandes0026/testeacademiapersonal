import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full Background Image - Personal Trainer positioned to the left */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://tgprvcodlwyfxjbxirgh.supabase.co/storage/v1/object/public/lovable-uploads/img_1769680832_f073ec3d.jpeg")',
          backgroundPosition: '25% center'
        }}
      />
      
      {/* Dark Overlay - stronger on the right for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/60 to-background/90" />
      
      {/* Additional gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex justify-end min-h-screen py-20 items-center">
          
          {/* Content - Right Side */}
          <div className="w-full lg:w-1/2 xl:w-2/5">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/50 rounded-full text-sm text-primary backdrop-blur-sm bg-background/20 opacity-0 animate-fade-up"
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
              <span className="text-foreground drop-shadow-lg">FELIPE</span>
              <br />
              <span className="text-gradient">NERY</span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-foreground/90 max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-up drop-shadow-md"
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
              <button className="btn-outline rounded-lg flex items-center justify-center gap-3 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                VER RESULTADOS
              </button>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-foreground/20 opacity-0 animate-fade-up"
              style={{ animationDelay: "1s" }}
            >
              <div>
                <p className="text-4xl md:text-5xl font-display text-foreground drop-shadow-lg">500+</p>
                <p className="text-sm text-foreground/80 mt-1">Alunos Transformados</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-display text-foreground drop-shadow-lg">10+</p>
                <p className="text-sm text-foreground/80 mt-1">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-display text-foreground drop-shadow-lg">98%</p>
                <p className="text-sm text-foreground/80 mt-1">Taxa de Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <span className="text-xs text-foreground/60 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
