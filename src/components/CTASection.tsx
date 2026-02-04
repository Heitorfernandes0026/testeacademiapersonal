import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const CTASection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Effects - Only on desktop */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
            style={{
              background: 'radial-gradient(circle, hsl(210 100% 50% / 0.1) 0%, transparent 50%)',
            }}
          />
          <div 
            className="absolute top-0 right-0 w-[400px] h-[400px]"
            style={{
              background: 'radial-gradient(circle, hsl(210 100% 50% / 0.08) 0%, transparent 60%)',
            }}
          />
          <div 
            className="absolute top-0 left-[20%] w-[60px] h-[400px]"
            style={{ 
              background: 'hsl(210 100% 50% / 0.06)',
              transform: 'skewX(-15deg) translateY(-100px)' 
            }}
          />
          <div 
            className="absolute bottom-0 right-[15%] w-[80px] h-[300px]"
            style={{ 
              background: 'hsl(210 100% 50% / 0.06)',
              transform: 'skewX(-15deg) translateY(100px)' 
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Card */}
          <div 
            className="relative overflow-hidden"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)' }}
          >
            {/* Card Background with border */}
            <div className="absolute inset-0 bg-card border-2" style={{ borderColor: 'hsl(210 100% 50% / 0.3)' }} />
            
            {/* Blue accent corners */}
            <div className="absolute top-0 left-0 w-32 h-1" style={{ background: 'hsl(210 100% 50%)' }} />
            <div className="absolute top-0 left-0 w-1 h-32" style={{ background: 'hsl(210 100% 50%)' }} />
            <div className="absolute top-0 right-0 w-32 h-1" style={{ background: 'hsl(210 100% 50%)' }} />
            <div className="absolute bottom-0 left-0 w-1 h-32" style={{ background: 'hsl(210 100% 50%)' }} />
            
            {/* Content */}
            <div className="relative p-12 lg:p-20 text-center">
              {/* Zap Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 mb-8 border"
                style={{ 
                  background: 'hsl(210 100% 50% / 0.15)',
                  borderColor: 'hsl(210 100% 50% / 0.3)',
                  clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' 
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-8 h-8" style={{ color: 'hsl(210 100% 60%)' }} />
              </motion.div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 tracking-tight">
                PRONTO PARA SUA{" "}
                <span className="relative inline-block">
                  <span className="electric-text" style={{ color: 'hsl(210 100% 60%)' }}>TRANSFORMAÇÃO?</span>
                  <motion.div
                    className="absolute -inset-4 blur-2xl -z-10"
                    style={{ background: 'hsl(210 100% 50% / 0.15)' }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </h2>

              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Junte-se a mais de <span className="font-bold" style={{ color: 'hsl(210 100% 60%)' }}>500 pessoas</span> que já transformaram seus corpos e suas vidas com o método Filipe Nery.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;