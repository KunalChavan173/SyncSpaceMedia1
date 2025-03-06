import { FadeUp } from "./ui/Motion";
import { Monitor, Camera, Globe, Video, Image, ArrowRight, User, BarChart2, Palette } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Video size={24} className="text-[#3B82F6]" />,
    title: "Short-Form Content",
    description: "High-quality short-form videos tailored for Instagram, TikTok, and YouTube Shorts to maximize reach and virality.",
  },
  {
    icon: <Monitor size={24} className="text-[#3B82F6]" />,
    title: "Long-Form Content",
    description: "Professional editing for YouTube vlogs, educational content, and in-depth storytelling to captivate your audience.",
  },
  {
    icon: <Image size={24} className="text-[#3B82F6]" />,
    title: "Podcast Editing & Repurposing",
    description: "Transform your podcast into a powerful content machine with high-quality edits and short clips for social media.",
  },
  {
    icon: <User size={24} className="text-[#3B82F6]" />,
    title: "Personal Branding",
    description: "Strategic content creation to build your online presence, enhance credibility, and establish a strong digital identity.",
  },
  {
    icon: <BarChart2 size={24} className="text-[#3B82F6]" />,
    title: "Content Strategy & Management",
    description: "End-to-end content guidance, account management, and optimization to ensure consistency and growth.",
  },
  {
    icon: <Palette size={24} className="text-[#3B82F6]" />,
    title: "Thumbnails & Graphics",
    description: "Eye-catching thumbnails and professional visuals that grab attention and boost content performance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E40AF]/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <FadeUp>
              <span className="text-[1.25rem] text-white/60 mb-4 block tracking-wide">
                OUR EXPERTISE
              </span>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                Premium services for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2563EB]">
                  exceptional results
                </span>
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                We specialize in translating complex ideas into meaningful digital experiences through our comprehensive range of services.
              </p>
            </FadeUp>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <FadeUp key={service.title} delay={0.1 * (index + 3)}>
                <div
                  className="group relative bg-[#1A1A1A]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/5
                    hover:bg-[#1A1A1A]/60 hover:scale-[1.02] transition-all duration-300 ease-out"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-medium text-white mb-4 group-hover:text-[#3B82F6] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/60 group-hover:text-white/70 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
