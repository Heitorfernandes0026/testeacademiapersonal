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
    <section className="py-32 bg-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Depoimentos
          </span>
          <h2 className="section-title text-foreground">
            HISTÓRIAS DE <span className="text-gradient">SUCESSO</span>
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
              <div className="glass-card p-12 rounded-[2rem] border border-border/50 relative overflow-hidden">
                {/* Large Quote Icon */}
                <Quote className="absolute top-8 right-8 w-24 h-24 text-primary/10" />
                
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Image Section */}
                  <motion.div 
                    className="relative flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary/30 relative">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Transformation Badge */}
                    <motion.div 
                      className="absolute -bottom-2 -right-2 px-4 py-2 bg-primary rounded-full text-xs font-bold text-primary-foreground whitespace-nowrap"
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
                          <Star className="w-6 h-6 fill-primary text-primary" />
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
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                index === activeIndex 
                  ? "border-primary/50 bg-primary/5" 
                  : "border-border/30 bg-background/50 hover:border-primary/30"
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
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
