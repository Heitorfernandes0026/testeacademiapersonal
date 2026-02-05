import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/logo-reference.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Planos", href: "#planos" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={logoImage} 
              alt="Filipe Nery Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              loading="eager"
              decoding="async"
              width={48}
              height={48}
            />
            <span className="text-xl font-display tracking-wide text-foreground">
              FILIPE <span className="text-muted-foreground">NERY</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#planos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#planos");
              }}
              className="px-6 py-2.5 bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:bg-muted-foreground transition-colors"
              style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Comece Agora
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden overflow-hidden ${isOpen ? "pb-6" : ""}`}
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#planos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#planos");
              }}
              className="px-6 py-3 bg-foreground text-background text-sm font-bold uppercase tracking-widest text-center mt-2"
              style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}
            >
              Comece Agora
            </a>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
