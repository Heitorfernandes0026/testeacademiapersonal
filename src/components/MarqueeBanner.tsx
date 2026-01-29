import { useIsMobile } from "@/hooks/use-mobile";

const messages = [
  "SUPERE SEUS LIMITES",
  "TRANSFORME CORPO E MENTE", 
  "INVISTA EM VOCÊ",
];

const MarqueeBanner = () => {
  const isMobile = useIsMobile();
  const allMessages = [...messages, ...messages, ...messages, ...messages];

  return (
    <div 
      className="w-full py-3 overflow-hidden relative"
      style={{
        background: 'linear-gradient(90deg, hsl(var(--blue-accent-dark)) 0%, hsl(var(--blue-accent)) 50%, hsl(var(--blue-accent-dark)) 100%)',
      }}
    >
      <div
        className="flex gap-8 whitespace-nowrap animate-marquee"
        style={{
          animation: isMobile ? 'marquee 15s linear infinite' : 'marquee 20s linear infinite',
        }}
      >
        {allMessages.map((message, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-sm md:text-base font-bold tracking-[0.2em] text-white">
              {message}
            </span>
            <span 
              className="w-2 h-2 rounded-full bg-white/60"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
