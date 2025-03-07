import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import newLogo from '../assets/images/logo.png';
import ReactPlayer from 'react-player';
import infinityLogo from '../assets/images/infinity-logo.png';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" }
];

const VideoPlayerComponent = ({ url }) => {
  return (
    <div className="video-wrapper">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        className="react-player"
      />
    </div>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Desktop Header (Hidden on Mobile) */}
      <header 
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300 px-6 rounded-full",
          isScrolled ? "bg-[#1A1A1A]/90 backdrop-blur-sm border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]" : "bg-transparent"
        )}
      >
        <div className="flex items-center">
          {/* Logo */}
          <a 
            href="#" 
            className={cn(
              "relative px-4 py-2",
              "transition-transform duration-500",
              "hover:scale-105"
            )}
          >
            <img 
              src={infinityLogo} 
              alt="Infinity Logo"
              className="w-10 h-10"
            />
          </a>

          {/* Navigation Menu */}
          <nav className="flex items-center">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/50 hover:text-white px-4 py-3 text-sm 
                transition-all duration-300 
                relative 
                after:absolute after:bottom-0 after:left-0
                after:w-0 after:h-0.5 after:bg-[#3B82F6]
                after:transition-all after:duration-300
                hover:text-white
                hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ✅ Mobile Header (Hidden on Desktop) */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden p-4 bg-[#1A1A1A]/90">
        <div className="flex items-center justify-between">
          <a href="#" className="text-white">
            <img 
              src={infinityLogo} 
              alt="Infinity Logo"
              className="w-10 h-10"
            />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white/50 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="mt-4 flex flex-col bg-[#1A1A1A]/90 p-4 rounded-lg">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/50 hover:text-white py-2 px-4 rounded transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)} // Closes menu on click
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
