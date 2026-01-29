import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

const Logo = ({ size = 120, className = "", animate = true }: LogoProps) => {
  const LogoContent = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle - blue ring */}
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke="#3B82F6"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Circle arc opening on bottom-right */}
      <path
        d="M 95 85 A 54 54 0 0 0 85 95"
        stroke="transparent"
        strokeWidth="8"
        fill="none"
      />
      
      {/* Main blue arc - 3/4 circle with opening */}
      <path
        d="M 100 75 A 50 50 0 1 0 75 100"
        stroke="#3B82F6"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* F letter - angular style */}
      <path
        d="M 35 30 L 35 90 L 45 90 L 45 65 L 60 65 L 60 55 L 45 55 L 45 40 L 65 40 L 65 30 Z"
        fill="white"
        style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))" }}
      />
      
      {/* N letter - angular/arrow style */}
      <path
        d="M 55 30 L 70 60 L 70 90 L 80 90 L 80 60 L 95 30 L 85 30 L 75 50 L 65 30 Z"
        fill="white"
        style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))" }}
      />
      
      {/* Arrow/triangle accent on right */}
      <path
        d="M 85 45 L 100 60 L 85 75 L 85 65 L 92 60 L 85 55 Z"
        fill="white"
        style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))" }}
      />
    </svg>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        {LogoContent}
      </motion.div>
    );
  }

  return LogoContent;
};

export default Logo;
