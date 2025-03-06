import { FadeUp } from "./ui/Motion";
import { 
  BarChart, 
  Clock, 
  RefreshCw, 
  Link2, 
  Users, 
  Share2 
} from "lucide-react";

const features = [
  {
    icon: <BarChart size={32} className="text-[#3B82F6]" />,
    title: "Growth",
    description: "Get increased engagement and reach for your brand with top-notch editing.",
    graphic: (
      <div className="absolute top-0 right-0 w-full h-full opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-[#3B82F6]/10 to-transparent">
          <div className="w-full h-full bg-[#3B82F6]/5 blur-2xl"></div>
        </div>
      </div>
    )
  },
  {
    icon: <Clock size={32} className="text-[#3B82F6]" />,
    title: "Fast Delivery",
    description: "Lightning fast delivery and efficient editing to meet your deadlines.",
    graphic: (
      <div className="absolute top-0 right-0 w-full h-full opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-[#60A5FA]/10 to-transparent">
          <div className="w-full h-full bg-[#60A5FA]/5 blur-2xl"></div>
        </div>
      </div>
    )
  },
  {
    icon: <RefreshCw size={32} className="text-[#3B82F6]" />,
    title: "Unlimited Revisions",
    description: "Get unlimited revisions until you are 100% satisfied without any extra cost.",
    graphic: (
      <div className="absolute top-0 right-0 w-full h-full opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-[#2563EB]/10 to-transparent">
          <div className="w-full h-full bg-[#2563EB]/5 blur-2xl"></div>
        </div>
      </div>
    )
  },
  {
    icon: <Link2 size={32} className="text-[#3B82F6]" />,
    title: "Stay Synced",
    description: "Manage your content board with apps like Slack, Frame, Notion, and more.",
    graphic: (
      <div className="absolute top-0 right-0 w-full h-full opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-[#1E40AF]/10 to-transparent">
          <div className="w-full h-full bg-[#1E40AF]/5 blur-2xl"></div>
        </div>
      </div>
    )
  },
  {
    icon: <Users size={32} className="text-[#3B82F6]" />,
    title: "Invite Your Team",
    description: "Invite your entire team so anyone can submit requests and track progress.",
    graphic: (
      <div className="absolute top-0 right-0 w-full h-full opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-[#60A5FA]/10 to-transparent">
          <div className="w-full h-full bg-[#60A5FA]/5 blur-2xl"></div>
        </div>
      </div>
    )
  },
  {
    icon: <Share2 size={32} className="text-[#3B82F6]" />,
    title: "Seamless Collaboration",
    description: "Integrated workflow tools to enhance team communication and productivity.",
    graphic: (
      <div className="absolute top-0 right-0 w-full h-full opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-[#2563EB]/10 to-transparent">
          <div className="w-full h-full bg-[#2563EB]/5 blur-2xl"></div>
        </div>
      </div>
    )
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E40AF]/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <FadeUp>
              <span className="text-[1.25rem] text-white/60 mb-4 block tracking-wide">
                OUR WORKFLOW
              </span>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                Features That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2563EB]">
                  Empower
                </span>{" "}
                Your Content
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                Innovative tools and processes designed to elevate your content creation and management.
              </p>
            </FadeUp>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FadeUp key={feature.title} delay={0.1 * (index + 3)}>
                <div
                  className="group relative bg-[#1A1A1A]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/5
                    hover:bg-[#1A1A1A]/60 hover:scale-[1.02] transition-all duration-300 ease-out
                    overflow-hidden"
                >
                  {/* Background Graphic */}
                  {feature.graphic}
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 flex items-center justify-center relative z-10">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-medium text-white mb-4 group-hover:text-[#3B82F6] transition-colors duration-300 relative z-10">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/60 group-hover:text-white/70 transition-colors duration-300 relative z-10">
                    {feature.description}
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