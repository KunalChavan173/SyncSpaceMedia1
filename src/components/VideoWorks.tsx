
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlurIn } from "./ui/Motion";
import { cn } from "@/lib/utils";

// Custom video works data with client videos
const VIDEO_WORKS = [
  {
    id: 1,
    title: "Brand Story",
    client: "TechVision",
    videoUrl: "/videos/video1.mp4",
  },
  {
    id: 2,
    title: "Product Launch",
    client: "Nexus",
    videoUrl: "/videos/video2.mp4",
  },
  {
    id: 3,
    title: "Corporate Event",
    client: "Elevate",
    videoUrl: "/videos/video3.mp4",
  },
  {
    id: 4,
    title: "Marketing Campaign",
    client: "FutureTech",
    videoUrl: "/videos/video4.mp4",
  },
  {
    id: 5,
    title: "Social Media Story",
    client: "PulseMedia",
    videoUrl: "/videos/video5.mp4",
  }
];

export default function VideoWorks() {
  const [activeIndex, setActiveIndex] = useState(2); // Center video (index 2) active by default
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, VIDEO_WORKS.length);
  }, []);

  // Check if section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.8);
      },
      { threshold: [0.8] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Play/pause videos based on visibility and active state
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      
      if (isVisible && index === activeIndex) {
        video.play().catch(error => console.log("Autoplay prevented:", error));
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [isVisible, activeIndex]);

  const handlePrev = () => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : VIDEO_WORKS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev < VIDEO_WORKS.length - 1 ? prev + 1 : 0));
  };

  // Center the active video when it changes
  useEffect(() => {
    if (!sliderRef.current) return;
    
    // Get all video elements
    const videoElements = sliderRef.current.querySelectorAll('.video-item');
    if (!videoElements.length) return;
    
    // Get the active video element
    const activeElement = videoElements[activeIndex] as HTMLElement;
    if (!activeElement) return;
    
    // Calculate the center position for the active element
    const containerWidth = sliderRef.current.offsetWidth;
    const itemWidth = activeElement.offsetWidth;
    const itemLeft = activeElement.offsetLeft;
    
    // Calculate scroll position to center the active item
    const scrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);
    
    // Scroll to the calculated position
    sliderRef.current.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  }, [activeIndex]);

  return (
    <section id="works" ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <BlurIn>
            <h2 className="heading-lg mb-4">Our Works</h2>
            <p className="paragraph text-foreground/70 mb-6">
              Check out our latest video productions and creative projects
            </p>
          </BlurIn>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover-glow hover-scale"
              aria-label="Previous video"
            >
              <ChevronLeft />
            </button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover-glow hover-scale"
              aria-label="Next video"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Videos slider */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory py-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex-shrink-0 w-[15%]"></div> {/* Left spacer */}
            
            {VIDEO_WORKS.map((work, index) => (
              <div 
                key={work.id}
                className={cn(
                  "flex-shrink-0 w-[30%] px-4 snap-center transition-all duration-500 video-item",
                  index === activeIndex ? "scale-100 opacity-100" : "scale-90 opacity-70"
                )}
              >
                <div 
                  className={cn(
                    "overflow-hidden rounded-lg aspect-[9/16] bg-black relative",
                    index === activeIndex && "shadow-glow"
                  )}
                >
                  <video
                    ref={el => videoRefs.current[index] = el}
                    className="w-full h-full object-cover"
                    src={work.videoUrl}
                    muted
                    playsInline
                    loop
                    onClick={() => setActiveIndex(index)}
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-lg font-medium text-white">{work.title}</h3>
                    <p className="text-sm text-white/80">{work.client}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex-shrink-0 w-[15%]"></div> {/* Right spacer */}
          </div>

          {/* Add custom CSS to hide scrollbar */}
          <style>
            {`.hide-scrollbar::-webkit-scrollbar {
              display: none;
            }`}
          </style>
        </div>
      </div>
    </section>
  );
}
