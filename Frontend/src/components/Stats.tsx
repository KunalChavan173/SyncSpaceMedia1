import { FadeUp } from "./ui/Motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Cursor glow effect component
const CursorGlow = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      animate={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(37,99,235,0.05), transparent 80%)`
      }}
    />
  );
};

// Animated background
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        {/* Gradient mesh animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-float" />
      </div>
    </div>
  );
};

const stats = [
  {
    number: "200M+",
    label: "views generated"
  },
  {
    number: "1M+",
    label: "followers gained"
  },
  {
    number: "20+",
    label: "premium happy clients"
  }
];

export default function Stats() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for cursor glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E40AF]/10 to-transparent" />
      <CursorGlow mousePosition={mousePosition} />
      
      <div className="container mx-auto px-4">
        <div className="relative bg-[#1A1A1A]/40 backdrop-blur-sm rounded-3xl p-16 md:p-24 border border-white/5">
          <AnimatedBackground />
          
          {/* Heading */}
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl md:text-6xl text-center font-medium text-white max-w-5xl mx-auto leading-tight mb-24 relative z-10">
              At{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2563EB]">
                Sync Space Media
              </span>
              , our team of passionate creators delivers content that captivates, converts, and sets your brand apart.
            </h2>
          </FadeUp>

          {/* Stats with Dividers */}
          <div className="grid md:grid-cols-3 gap-16 md:gap-0 relative z-10">
            {/* Dividers */}
            <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Stats */}
            {stats.map((stat, index) => (
              <FadeUp key={stat.label} delay={index * 100}>
                <motion.div
                  className="text-center group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="text-6xl md:text-7xl font-medium text-white mb-6 relative">
                    <span className="relative z-10">
                      {stat.number}
                    </span>
                    <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
                  </div>
                  <div className="text-xl md:text-2xl text-white/60">
                    {stat.label}
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 