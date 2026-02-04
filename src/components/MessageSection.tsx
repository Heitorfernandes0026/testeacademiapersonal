import { Check, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import messageVideo from "@/assets/message-video.mp4";

const differentials = [
  "Avaliação física completa",
  "Treino 100% personalizado",
  "Suporte via WhatsApp",
  "Ajustes semanais do programa",
  "Dicas de nutrição",
  "Acesso a grupo VIP",
];

const MessageSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-1/2 h-full"
          style={{
            background: 'linear-gradient(90deg, hsl(210 100% 50% / 0.05) 0%, transparent 100%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="relative mx-auto border-2 rounded-xl overflow-hidden bg-black"
              style={{ 
                borderColor: 'hsl(210 100% 50% / 0.4)',
                maxWidth: '350px',
                aspectRatio: '9/16'
              }}
            >
              <video
                ref={videoRef}
                src={messageVideo}
                className="w-full h-full object-contain"
                controls={isPlaying}
                onEnded={() => setIsPlaying(false)}
                playsInline
              />
                
              {/* Play Button Overlay */}
              {!isPlaying && (
                <motion.div 
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 cursor-pointer"
                  onClick={handlePlayVideo}
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                >
                  <motion.div
                    className="flex items-center justify-center w-20 h-20 rounded-full border-2"
                    style={{ 
                      background: 'hsl(210 100% 50% / 0.9)',
                      borderColor: 'hsl(210 100% 70%)',
                      boxShadow: '0 0 40px hsl(210 100% 50% / 0.5)'
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      boxShadow: [
                        '0 0 20px hsl(210 100% 50% / 0.5)',
                        '0 0 40px hsl(210 100% 50% / 0.7)',
                        '0 0 20px hsl(210 100% 50% / 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </motion.div>
                  
                  <motion.p 
                    className="mt-4 text-white font-bold text-base tracking-wide text-center px-4"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    MENSAGEM DO FILIPE
                  </motion.p>
                </motion.div>
              )}

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-1" style={{ background: 'hsl(210 100% 50%)' }} />
              <div className="absolute top-0 left-0 w-1 h-16" style={{ background: 'hsl(210 100% 50%)' }} />
              <div className="absolute bottom-0 right-0 w-16 h-1" style={{ background: 'hsl(210 100% 50%)' }} />
              <div className="absolute bottom-0 right-0 w-1 h-16" style={{ background: 'hsl(210 100% 50%)' }} />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 border text-sm font-bold tracking-widest"
              style={{ 
                background: 'hsl(210 100% 50% / 0.15)',
                borderColor: 'hsl(210 100% 50% / 0.4)',
                color: 'hsl(210 100% 70%)',
              }}
            >
              DIFERENCIAIS
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4 md:mb-6 tracking-tight">
              POR QUE ESCOLHER O{" "}
              <span style={{ color: 'hsl(210 100% 60%)' }}>MÉTODO FILIPE NERY?</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Um acompanhamento completo e personalizado para você alcançar seus objetivos de forma eficiente e sustentável.
            </p>

            {/* Differentials List */}
            <div className="space-y-4">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 border transition-all"
                  style={{ 
                    background: 'hsl(210 100% 50% / 0.05)',
                    borderColor: 'hsl(210 100% 50% / 0.2)',
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' 
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    x: 8, 
                    borderColor: 'hsl(210 100% 50% / 0.5)',
                    background: 'hsl(210 100% 50% / 0.1)'
                  }}
                >
                  <div 
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: 'hsl(210 100% 50% / 0.2)',
                      clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)' 
                    }}
                  >
                    <Check className="w-4 h-4" style={{ color: 'hsl(210 100% 60%)' }} />
                  </div>
                  <span className="text-foreground font-medium text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
