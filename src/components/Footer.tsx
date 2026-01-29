import { Instagram, Youtube, MessageCircle, ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-card border-t border-white/10 relative overflow-hidden grain-overlay">
      {/* Background Effects */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
        style={{
          background: 'radial-gradient(ellipse, hsl(0 0% 100% / 0.04) 0%, transparent 60%)',
        }}
      />
      
      {/* Diagonal accent */}
      <div 
        className="absolute top-0 right-0 w-[150px] h-[200px] bg-white/5"
        style={{ transform: 'skewX(-15deg) translateX(50px)' }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center gap-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-0 h-0 border-l-[14px] border-l-white border-y-[8px] border-y-transparent" />
              <h3 className="text-4xl font-display text-foreground tracking-wide">
                FILIPE <span className="text-muted-foreground">NERY</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase font-medium">Personal Trainer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Youtube, href: "#", label: "Youtube" },
              { icon: MessageCircle, href: "#", label: "WhatsApp" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-14 h-14 border border-border/50 bg-background/50 flex items-center justify-center hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300 group"
                style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright & Credits */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-muted-foreground text-sm font-medium">
              © 2024 Felipe Nery. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2 flex items-center justify-center gap-1">
              Feito com <Heart className="w-3 h-3 text-white fill-white" /> para transformar vidas
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 border border-border/50 bg-background/50 flex items-center justify-center hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300"
            style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;