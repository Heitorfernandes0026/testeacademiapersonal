import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

import testimonial01 from "@/assets/testimonial-01.jpg";
import testimonial02 from "@/assets/testimonial-02.jpg";
import testimonial03 from "@/assets/testimonial-03.jpg";
import testimonial04 from "@/assets/testimonial-04.jpg";
import testimonial05 from "@/assets/testimonial-05.jpg";

const testimonials = [
  {
    name: "Lucas Silva",
    role: "Empresário",
    image: testimonial01,
    text: "Em 3 meses perdi 15kg e ganhei massa muscular. O Filipe mudou minha vida completamente.",
    rating: 5,
    transformation: "-15kg",
  },
  {
    name: "Marina Costa",
    role: "Advogada",
    image: testimonial02,
    text: "Nunca imaginei que conseguiria resultados tão rápidos. O acompanhamento é excepcional.",
    rating: 5,
    transformation: "-18kg",
  },
  {
    name: "Pedro Santos",
    role: "Médico",
    image: testimonial03,
    text: "Profissional incrível! Mesmo com minha rotina corrida, consegui ver resultados impressionantes.",
    rating: 5,
    transformation: "Definição total",
  },
  {
    name: "Ana Oliveira",
    role: "Engenheira",
    image: testimonial04,
    text: "Transformação completa em apenas 12 semanas. Recomendo para todos!",
    rating: 5,
    transformation: "-12kg",
  },
  {
    name: "Carlos Mendes",
    role: "Professor",
    image: testimonial05,
    text: "Método eficiente e resultados reais. Melhor investimento que já fiz.",
    rating: 5,
    transformation: "+8kg músculo",
  },
];

const TestimonialsSection = () => {
  const isMobile = useIsMobile();

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
            Resultados reais de alunos que transformaram seus corpos e suas vidas
          </p>
        </motion.div>

        {/* Testimonials Grid - Before/After Focus */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="relative overflow-hidden bg-background border border-border/30 hover:border-white/30 transition-all duration-500"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
              >
                {/* Before/After Photo */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={`Transformação de ${testimonial.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
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
                    <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-2">
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
