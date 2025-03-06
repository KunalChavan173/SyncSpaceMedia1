import { ArrowRight, Video, Monitor, Image, User, BarChart2, Palette } from "lucide-react";
import { FadeUp } from "./ui/Motion";
import HeroBackground from "./3d/HeroBackground";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <GradientBackground />

      {/* Content Container */}
      <div className="container mx-auto px-4 text-center z-10">
        {/* Heading with enhanced styling */}
        <h1 className="leading-tight font-medium mb-6">
          <div className="text-white mb-2 text-[3.5rem] md:text-[4.5rem]">
            From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2563EB]">
              Ideas
            </span>{" "}
            to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2563EB]">
              Execution
            </span>
          </div>
          <div className="text-[1.25rem] md:text-[1.75rem] text-white/90 tracking-wide">
            YOUR ONE STOP CONTENT AGENCY
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          A full-service creative agency specializing in brand development, web
          design, and digital marketing for ambitious brands.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-6">
          <div className="relative">
            <div 
              className="absolute -inset-1 bg-gradient-to-r from-[#2563EB]/50 to-[#1E40AF]/50 
              rounded-full blur-lg animate-pulse-glow"
              style={{
                animation: 'pulse-glow 3s infinite ease-in-out',
                transformOrigin: 'center'
              }}
            ></div>
            <a
              href="#contact"
              className={cn(
                "relative px-8 py-4 rounded-full",
                "bg-gradient-to-r from-[#2563EB] to-[#1E40AF]",
                "text-white font-medium",
                "shadow-[0_0_20px_rgba(37,99,235,0.25)]",
                "hover:shadow-[0_0_25px_rgba(37,99,235,0.35)]",
                "transition-all duration-300",
                "hover:scale-[1.02]",
                "after:absolute after:inset-0",
                "after:rounded-full after:p-[1px]",
                "after:bg-gradient-to-r after:from-white/20 after:to-transparent",
                "after:opacity-0 after:hover:opacity-100",
                "after:transition-opacity after:duration-300"
              )}
            >
              Start a Project
            </a>
          </div>
          <a
            href="#works"
            className="px-6 py-3 text-white flex items-center gap-2 hover:text-[#2563EB] transition-colors"
          >
            View Our Work
            <span className="text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const GradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main dark background with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E40AF]/5 to-transparent"
      ></div>
      
      {/* Original gradient orbs - even more reduced opacity */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#2563EB]/3 rounded-full blur-[150px] animate-float"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#1E40AF]/3 rounded-full blur-[150px] animate-float-delayed"></div>
      
      {/* Smaller orbs - even more reduced opacity */}
      <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-[#60A5FA]/3 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] bg-[#3B82F6]/3 rounded-full blur-[100px] animate-float-delayed"></div>
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      ></div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>
    </div>
  );
};

// Add this to your global CSS (tailwind.css or a separate CSS file)
const globalStyles = `
@keyframes pulse-glow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.animate-pulse-glow {
  animation: pulse-glow 3s infinite ease-in-out;
}
`;