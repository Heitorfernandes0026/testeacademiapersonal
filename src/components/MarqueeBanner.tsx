import { motion } from "framer-motion";

const messages = [
  "SUPERE SEUS LIMITES",
  "TRANSFORME CORPO E MENTE", 
  "INVISTA EM VOCÊ",
];

const MarqueeBanner = () => {
  // Duplicate messages for seamless loop
  const allMessages = [...messages, ...messages, ...messages, ...messages];

  return (
    <div 
      className="w-full py-3 overflow-hidden relative"
      style={{
        background: 'linear-gradient(90deg, hsl(var(--blue-accent-dark)) 0%, hsl(var(--blue-accent)) 50%, hsl(var(--blue-accent-dark)) 100%)',
        boxShadow: '0 4px 30px hsl(var(--blue-accent) / 0.4)',
      }}
    >
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -50 * messages.length * 4] }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {allMessages.map((message, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-sm md:text-base font-bold tracking-[0.2em] text-white drop-shadow-lg">
              {message}
            </span>
            <span 
              className="w-2 h-2 rounded-full"
              style={{ background: 'hsl(0 0% 100% / 0.6)' }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeBanner;
