import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

import testimonialIsabela from "@/assets/testimonial-isabela.png";
import testimonialLamara from "@/assets/testimonial-lamara.png";
import testimonialNatalia from "@/assets/testimonial-natalia.png";
import testimonial01 from "@/assets/testimonial-01.jpg";
import testimonial02 from "@/assets/testimonial-02.jpg";
import testimonial03 from "@/assets/testimonial-03.jpg";
import testimonial04 from "@/assets/testimonial-04.jpg";
import testimonial05 from "@/assets/testimonial-05.jpg";
import testimonial06 from "@/assets/testimonial-06.png";

// 3 depoimentos em destaque com foto + texto
const featuredTestimonials = [
  {
    name: "Isabela",
    image: testimonialIsabela,
    text: "O acompanhamento do Filipe Nery foi importantíssimo no meu processo de mudança, especialmente aliado à reeducação alimentar. Consegui eliminar 16 kg de gordura, e estou aprendendo que a verdadeira transformação vai muito além do número que aparece na balança. Com a orientação dele, não só alcancei ótimos resultados físicos, como também consegui construir hábitos mais saudáveis para a vida. Hoje tenho muito mais constância nos treinos, me sinto mais confiante e com a autoestima melhor.",
    rating: 5,
    transformation: "-16kg",
  },
  {
    name: "Lamara",
    image: testimonialLamara,
    text: "Gostaria de registrar minha satisfação com a evolução obtida durante o acompanhamento com o personal trainer Filipe Nery. Iniciei os treinos apresentando quadro de osteoartrite no joelho, com limitações funcionais e desconfortos recorrentes. Com a aplicação de um planejamento focado em preparo e fortalecimento muscular, respeitando progressões, biomecânica e individualidade física, obtive uma melhora praticamente total do quadro, com ganho de estabilidade, mobilidade e qualidade de vida.",
    rating: 5,
    transformation: "Qualidade de vida",
  },
  {
    name: "Natália",
    image: testimonialNatalia,
    text: "Quero deixar aqui meu feedback e minha gratidão ao meu personal Filipe Nery. Comecei no dia 29/09 e, desde então, a atividade física tem sido essencial na minha vida. Já consegui perder várias medidas e, no total, 8kg, o que mostra o quanto o trabalho está sendo bem feito e os resultados são reais. Mais do que estética, o exercício tem me feito um bem enorme: melhorou meu condicionamento, minha saúde, minha disposição e, principalmente, minha qualidade de vida.",
    rating: 5,
    transformation: "-8kg",
  },
];

// Fotos para o carrossel (apenas imagens, sem texto)
const carouselPhotos = [
  testimonial01,
  testimonial02,
  testimonial03,
  testimonial04,
  testimonial05,
  testimonial06,
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

        {/* Featured Testimonials - Layout com imagem e texto separados */}
        <div className="space-y-8 md:space-y-12 mb-16">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 lg:gap-10 bg-background border border-border/30 hover:border-white/30 transition-all duration-500 overflow-hidden`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
              >
                {/* Photo */}
                <div className="relative w-full md:w-2/5 lg:w-1/3 aspect-[3/4] md:aspect-auto md:min-h-[400px] overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={`Transformação de ${testimonial.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  
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
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 mb-4" style={{ color: 'hsl(210 100% 50% / 0.3)' }} />
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5" 
                        style={{ fill: 'hsl(210 100% 60%)', color: 'hsl(210 100% 60%)' }} 
                      />
                    ))}
                  </div>
                  
                  {/* Quote Text */}
                  <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="border-t border-border/30 pt-4 mt-auto">
                    <p className="text-foreground font-bold text-lg">{testimonial.name}</p>
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

        {/* CTA Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="https://wa.me/5531989196115?text=Olá! Quero começar minha transformação!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-bold text-lg text-white transition-all"
            style={{
              background: 'linear-gradient(135deg, hsl(210 100% 50%) 0%, hsl(210 100% 35%) 100%)',
              clipPath: 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            FALE COMIGO AGORA
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
