import { Instagram, Youtube, MessageCircle, ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-card border-t border-border/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center gap-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl font-display text-foreground tracking-wider">
              FELIPE <span className="text-gradient">NERY</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-2 tracking-widest uppercase">Personal Trainer</p>
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
                className="w-14 h-14 rounded-2xl border border-border/50 bg-background/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright & Credits */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-muted-foreground text-sm">
              © 2024 Felipe Nery. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2 flex items-center justify-center gap-1">
              Feito com <Heart className="w-3 h-3 text-primary fill-primary" /> para transformar vidas
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-border/50 bg-background/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
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
