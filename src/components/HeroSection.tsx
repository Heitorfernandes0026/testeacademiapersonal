import { ArrowRight, Play, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://tgprvcodlwyfxjbxirgh.supabase.co/storage/v1/object/public/lovable-uploads/img_1769680832_f073ec3d.jpeg")',
          }}
        />
        {/* Radial gradient overlay for center focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>
      
      {/* Content - Centered */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 border border-primary/40 rounded-full text-sm text-primary backdrop-blur-md bg-background/30 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          PERSONAL TRAINER ESPECIALIZADO
        </div>

        {/* Main Heading */}
        <h1 
          className="text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] mb-6 opacity-0 animate-fade-up tracking-tighter"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-foreground block">FELIPE</span>
          <span className="text-gradient block">NERY</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Transforme seu corpo e sua mente. Acompanhamento personalizado para 
          alcançar resultados reais e duradouros.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <button className="btn-cta rounded-full flex items-center justify-center gap-3 group">
            COMEÇAR MINHA TRANSFORMAÇÃO
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-outline rounded-full flex items-center justify-center gap-3 hover:bg-foreground/5">
            <Play className="w-5 h-5" />
            VER RESULTADOS
          </button>
        </div>

        {/* Stats - Horizontal */}
        <div 
          className="flex flex-wrap justify-center gap-12 md:gap-20 mt-20 opacity-0 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-display text-foreground">500+</p>
            <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">Alunos</p>
          </div>
          <div className="w-px h-16 bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-display text-foreground">10+</p>
            <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">Anos</p>
          </div>
          <div className="w-px h-16 bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-display text-foreground">98%</p>
            <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">Satisfação</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in cursor-pointer hover:text-primary transition-colors" 
        style={{ animationDelay: "1.5s" }}
      >
        <ChevronDown className="w-6 h-6 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
