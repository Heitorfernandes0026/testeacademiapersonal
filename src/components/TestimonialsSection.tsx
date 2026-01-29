import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Lucas Silva",
    role: "Empresário",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Em 3 meses perdi 15kg e ganhei massa muscular. O Felipe mudou minha vida completamente. Recomendo para todos!",
    rating: 5,
    transformation: "+12kg de músculo",
  },
  {
    name: "Marina Costa",
    role: "Advogada",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "Nunca imaginei que conseguiria resultados tão rápidos. O acompanhamento é excepcional e o método funciona de verdade.",
    rating: 5,
    transformation: "-18kg em 4 meses",
  },
  {
    name: "Pedro Santos",
    role: "Médico",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Profissional incrível! Mesmo com minha rotina corrida, consegui encaixar os treinos e ver resultados impressionantes.",
    rating: 5,
    transformation: "Definição total",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-card relative overflow-hidden grain-overlay">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
          style={{
            background: 'radial-gradient(circle, hsl(0 0% 100% / 0.03) 0%, transparent 50%)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Diagonal accent */}
        <div 
          className="absolute bottom-0 left-0 w-[200px] h-[500px] bg-white/5"
          style={{ transform: 'skewX(15deg) translateX(-100px)' }}
        />
      </div>

      {/* Energy Lines */}
      <div className="absolute inset-0 energy-lines opacity-20" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
            Depoimentos
          </span>
          <h2 className="section-title text-foreground">
            HISTÓRIAS DE <span className="text-white">SUCESSO</span>
          </h2>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="max-w-5xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
                <div 
                  className="glass-card p-12 border border-border/50 relative overflow-hidden"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}
                >
                  {/* White accent lines */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-white/50 to-transparent" />
                  <div className="absolute top-0 left-0 w-1 h-32 bg-white" />
                  
                  {/* Large Quote Icon */}
                  <Quote className="absolute top-8 right-8 w-24 h-24 text-white/10" />
                  
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Image Section */}
                    <motion.div 
                      className="relative flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div 
                        className="w-32 h-32 lg:w-40 lg:h-40 overflow-hidden border-4 border-white/30 relative"
                        style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
                      >
                        <img
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Transformation Badge */}
                      <motion.div 
                        className="absolute -bottom-2 -right-2 px-4 py-2 bg-white text-xs font-bold text-background whitespace-nowrap"
                        style={{ clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)' }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {testimonials[activeIndex].transformation}
                      </motion.div>
                  </motion.div>
                  
                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6 justify-center lg:justify-start">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-6 h-6 fill-white text-white" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed mb-8 font-light">
                      "{testimonials[activeIndex].text}"
                    </p>
                    
                    {/* Author */}
                    <div>
                      <p className="text-xl font-display text-foreground tracking-wide">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-border/50 flex items-center justify-center hover:border-white hover:text-white hover:bg-white/10 transition-all"
              style={{ clipPath: 'polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 transition-all duration-300 ${
                    index === activeIndex ? "w-10 bg-white" : "w-2 bg-muted hover:bg-white/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-border/50 flex items-center justify-center hover:border-white hover:text-white hover:bg-white/10 transition-all"
              style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mini Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-6 border cursor-pointer transition-all duration-300 ${
                index === activeIndex 
                  ? "border-white/50 bg-white/5" 
                  : "border-border/30 bg-background/50 hover:border-white/30"
              }`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)' }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover border-2 border-white/20"
                  style={{ clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)' }}
                />
                <div>
                  <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;