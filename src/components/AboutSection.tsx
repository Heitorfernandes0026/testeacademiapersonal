import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import aboutFilipe01 from "@/assets/about-filipe-01.jpg";
import aboutFilipe02 from "@/assets/about-filipe-02.jpg";
import aboutFilipe03 from "@/assets/about-filipe-03.jpg";
import aboutFilipe04 from "@/assets/about-filipe-04.jpg";

const images = [aboutFilipe01, aboutFilipe02, aboutFilipe03, aboutFilipe04];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 50%, hsl(210 100% 50% / 0.1) 0%, transparent 50%)',
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Carousel 
              className="w-full max-w-lg mx-auto"
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                }),
              ]}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                      <img
                        src={src}
                        alt={`Filipe Nery ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={533}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
              <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            </Carousel>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10"
              style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
            >
              <span className="text-sm font-bold tracking-widest" style={{ color: 'hsl(210 100% 60%)' }}>
                SOBRE
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
              <span className="text-white">FILIPE</span>{" "}
              <span style={{ color: 'hsl(210 100% 60%)' }}>NERY</span>
            </h2>

            {/* Stats */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12" style={{ background: 'linear-gradient(180deg, hsl(210 100% 50%) 0%, hsl(210 100% 35%) 100%)' }} />
                <div>
                  <p className="text-2xl md:text-3xl font-bold">
                    <span style={{ color: 'hsl(210 100% 60%)' }}>+20 mil</span>{" "}
                    <span className="text-white/80">vidas transformadas</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-1 h-12" style={{ background: 'linear-gradient(180deg, hsl(210 100% 50%) 0%, hsl(210 100% 35%) 100%)' }} />
                <div>
                  <p className="text-2xl md:text-3xl font-bold">
                    <span style={{ color: 'hsl(210 100% 60%)' }}>+3 milhões</span>{" "}
                    <span className="text-white/80">de views na queima diária</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Main message */}
            <div className="pt-4">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                <span className="text-white/60">Te ajudo a ter o </span>
                <span style={{ color: 'hsl(210 100% 60%)' }}>ano de Resultado</span>
                <span className="text-white/60"> em apenas </span>
                <span className="text-white font-bold">12 semanas</span>
              </p>
            </div>

            {/* Decorative line */}
            <motion.div 
              className="h-0.5 w-32"
              style={{ background: 'linear-gradient(90deg, hsl(210 100% 50%), transparent)' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
