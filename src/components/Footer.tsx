import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {

  return (
    <footer className="py-16 bg-card border-t relative overflow-hidden grain-overlay" style={{ borderColor: 'hsl(210 100% 50% / 0.2)' }}>
      {/* Background Effects - Blue */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
        style={{
          background: 'radial-gradient(ellipse, hsl(210 100% 50% / 0.08) 0%, transparent 60%)',
        }}
      />
      
      {/* Diagonal accent - Blue */}
      <div 
        className="absolute top-0 right-0 w-[150px] h-[200px]"
        style={{ 
          background: 'hsl(210 100% 50% / 0.06)',
          transform: 'skewX(-15deg) translateX(50px)' 
        }}
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
              <div className="w-0 h-0 border-l-[14px] border-y-[8px] border-y-transparent" style={{ borderLeftColor: 'hsl(210 100% 50%)' }} />
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
                className="w-14 h-14 border bg-background/50 flex items-center justify-center transition-all duration-300 group"
                style={{ 
                  borderColor: 'hsl(210 100% 50% / 0.3)',
                  clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' 
                }}
                whileHover={{ y: -5, scale: 1.05, borderColor: 'hsl(210 100% 50%)', backgroundColor: 'hsl(210 100% 50% / 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: 'hsl(210 100% 60%)' }} />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;