import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

import testimonial01 from "@/assets/testimonial-01.jpg";
import testimonial02 from "@/assets/testimonial-02.jpg";
import testimonial03 from "@/assets/testimonial-03.jpg";
import testimonial04 from "@/assets/testimonial-04.jpg";
import testimonial05 from "@/assets/testimonial-05.jpg";
import testimonial06 from "@/assets/testimonial-06.png";

// 3 depoimentos em destaque com foto + texto
const featuredTestimonials = [
  {
    name: "Marina Costa",
    role: "Advogada",
    image: testimonial02,
    text: "Nunca imaginei que conseguiria resultados tão rápidos. O acompanhamento é excepcional e o Filipe realmente se dedica a entender as necessidades de cada aluno.",
    rating: 5,
    transformation: "-18kg",
  },
  {
    name: "Ana Oliveira",
    role: "Engenheira",
    image: testimonial04,
    text: "Transformação completa em apenas 12 semanas. Recomendo para todos que buscam resultados reais e duradouros!",
    rating: 5,
    transformation: "-12kg",
  },
  {
    name: "Fernanda Lima",
    role: "Nutricionista",
    image: testimonial06,
    text: "Resultados que eu nunca imaginei alcançar. Gratidão por essa transformação incrível na minha vida!",
    rating: 5,
    transformation: "Transformação total",
  },
];

// Fotos para o carrossel (apenas imagens, sem texto)
const carouselPhotos = [
  testimonial01,
  testimonial03,
  testimonial05,
];

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background Effects */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
            style={{
              background: 'radial-gradient(circle, hsl(210 100% 50% / 0.06) 0%, transparent 50%)',
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-bold uppercase tracking-[0.4em] mb-4 block" style={{ color: 'hsl(210 100% 60%)' }}>
            Transformações Reais
          </span>
          <h2 className="section-title text-foreground">
            HISTÓRIAS DE <span style={{ color: 'hsl(210 100% 60%)' }}>SUCESSO</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Resultados reais de alunas que transformaram seus corpos e suas vidas
          </p>
        </motion.div>

        {/* Featured Testimonials - 3 cards em destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div 
                className="relative overflow-hidden bg-background border border-border/30 hover:border-white/30 transition-all duration-500 h-full"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={`Transformação de ${testimonial.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Transformation Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 px-4 py-2 text-sm font-bold text-white"
                    style={{ 
                      background: 'linear-gradient(135deg, hsl(210 100% 50%), hsl(210 100% 35%))',
                      clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' 
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {testimonial.transformation}
                  </motion.div>
                  
                  {/* Quote Icon */}
                  <Quote className="absolute top-4 left-4 w-8 h-8 text-white/20" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4" 
                          style={{ fill: 'hsl(210 100% 60%)', color: 'hsl(210 100% 60%)' }} 
                        />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author */}
                    <div className="border-t border-white/20 pt-3">
                      <p className="text-white font-bold">{testimonial.name}</p>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                
                {/* Blue Accent Line */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-1"
                  style={{ background: 'linear-gradient(90deg, hsl(210 100% 50%), transparent)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo Carousel - Apenas fotos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
            Mais Transformações
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex gap-4">
                {carouselPhotos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="flex-[0_0_280px] md:flex-[0_0_320px]"
                  >
                    <div 
                      className="relative aspect-[3/4] overflow-hidden group"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)' }}
                    >
                      <img
                        src={photo}
                        alt={`Transformação ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Blue border on hover */}
                      <div 
                        className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(210_100%_50%)] transition-colors duration-300"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 flex items-center justify-center bg-background/80 border border-border/50 hover:border-[hsl(210_100%_50%)] transition-colors duration-300 disabled:opacity-30"
              style={{ clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 flex items-center justify-center bg-background/80 border border-border/50 hover:border-[hsl(210_100%_50%)] transition-colors duration-300 disabled:opacity-30"
              style={{ clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }}
              disabled={!canScrollNext}
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { value: "+20 mil", label: "Vidas transformadas" },
            { value: "98%", label: "Taxa de satisfação" },
            { value: "12", label: "Semanas de resultado" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 border border-border/30"
              style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
            >
              <p className="text-2xl md:text-3xl font-bold" style={{ color: 'hsl(210 100% 60%)' }}>
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
