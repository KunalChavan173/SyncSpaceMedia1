import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const VIDEO_WORKS = [
  {
    id: 1,
    title: "Hanuman Kind",
    videoUrl: "/videos/video1.mp4",
  },
  {
    id: 2,
    title: "Paying Clients",
    videoUrl: "/videos/video2.mp4",
  },
  {
    id: 3,
    title: "Mr Musk",
    videoUrl: "/videos/video3.mp4",
  },
  {
    id: 4,
    title: "Most Viewed",
    videoUrl: "/videos/video11.mp4",
  },
  {
    id: 5,
    title: "How to Get Started",
    videoUrl: "/videos/video5.mp4",
  },
  {
    id: 6,
    title: "New Video 6",
    videoUrl: "/videos/video8.mp4",
  },
  {
    id: 7,
    title: "New Video 7",
    videoUrl: "/videos/video9.mp4",
  }
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState(0);
  const videoRefsMap = useRef<Map<number, HTMLVideoElement | null>>(new Map());
  const centerVideoContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidingContainerRef = useRef<HTMLDivElement>(null);

  // New state to track video visibility
  const [isCenterVideoVisible, setIsCenterVideoVisible] = useState(true);

  const getCircularIndex = (index: number) => {
    const length = VIDEO_WORKS.length;
    return ((index % length) + length) % length;
  };

  useEffect(() => {
    VIDEO_WORKS.forEach(video => {
      if (!videoRefsMap.current.has(video.id)) {
        videoRefsMap.current.set(video.id, null);
      }
    });
  }, []);

  useEffect(() => {
    const centerVideoContainer = centerVideoContainerRef.current;
    const centerVideo = videoRefsMap.current.get(VIDEO_WORKS[getCircularIndex(activeIndex)].id);

    if (!centerVideoContainer || !centerVideo) return;

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsCenterVideoVisible(entry.isIntersecting && entry.intersectionRatio === 1);
      },
      {
        threshold: 1.0 // Fully visible
      }
    );

    // Start observing
    observer.observe(centerVideoContainer);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [activeIndex]);

  useEffect(() => {
    const activeVideoId = VIDEO_WORKS[getCircularIndex(activeIndex)].id;
    
    VIDEO_WORKS.forEach(video => {
      const videoElement = videoRefsMap.current.get(video.id);
      if (!videoElement) return;

      if (video.id === activeVideoId) {
        if (isCenterVideoVisible) {
          videoElement.play().catch(() => {});
        } else {
          videoElement.pause();
        }
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    });
  }, [activeIndex, isCenterVideoVisible]);

  const handleSlide = (direction: number) => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection(direction);

    const container = slidingContainerRef.current;
    if (!container) return;

    // Initial slide animation
    container.style.transform = `translateX(${direction * -320}px)`;

    // Prepare next video
    const nextIndex = getCircularIndex(activeIndex + direction);
    const nextVideo = videoRefsMap.current.get(VIDEO_WORKS[nextIndex].id);
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});
    }

    setTimeout(() => {
      // Disable transition temporarily
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';
      
      // Update index
      setActiveIndex(prev => prev + direction);
      
      // Force browser reflow
      container.offsetHeight;
      
      // Re-enable transition
      container.style.transition = 'transform 600ms cubic-bezier(0.45, 0, 0.55, 1)';
      
      setIsSliding(false);
      setSlideDirection(0);
    }, 600);
  };

  const handlePrev = () => handleSlide(-1);
  const handleNext = () => handleSlide(1);

  const getVisibleVideos = () => {
    const videos = [];
    for (let i = -2; i <= 2; i++) {
      const index = getCircularIndex(activeIndex + i);
      videos.push({ ...VIDEO_WORKS[index], position: i });
    }
    return videos;
  };

  return (
    <section id="works" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center text-white mb-4">Best Works</h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          We have worked with multiple personal brands and agencies, bringing them millions in views
        </p>

        <div className="relative max-w-[1400px] mx-auto" ref={containerRef}>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-blue-500/80 flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
            aria-label="Previous video"
            disabled={isSliding}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-blue-500/80 flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
            aria-label="Next video"
            disabled={isSliding}
          >
            <ChevronRight size={24} />
          </button>

          {/* Fixed center container */}
          <div 
            ref={centerVideoContainerRef} 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[570px]"
          >
            {/* Fixed highlight frame */}
            <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/20 z-30 pointer-events-none" />
          </div>

          <div className="relative flex items-center justify-center overflow-hidden py-8">
            <div 
              ref={slidingContainerRef}
              className="flex items-center"
              style={{
                transition: 'transform 600ms cubic-bezier(0.45, 0, 0.55, 1)'
              }}
            >
              {getVisibleVideos().map((video) => {
                const position = video.position;
                const isCenter = position === 0;
                const isActive = video.id === VIDEO_WORKS[getCircularIndex(activeIndex)].id;
                
                const getScale = () => {
                  if (!isSliding) return isCenter ? 1 : 0.875;
                  
                  if (slideDirection > 0) {
                    if (position === 1) return 1;
                    if (position === 0) return 0.875;
                  } else if (slideDirection < 0) {
                    if (position === -1) return 1;
                    if (position === 0) return 0.875;
                  }
                  return 0.875;
                };

                return (
                  <div
                    key={video.id}
                    className={cn(
                      "relative rounded-2xl overflow-hidden cursor-pointer mx-2 flex-shrink-0",
                      "transition-all duration-600 ease-in-out"
                    )}
                    style={{
                      width: '320px',
                      transform: `scale(${getScale()})`,
                      opacity: isCenter ? 1 : 0.5,
                      zIndex: isCenter ? 20 : 10
                    }}
                  >
                    <div className="aspect-[9/16] relative">
                      <video
                        ref={el => videoRefsMap.current.set(video.id, el)}
                        src={video.videoUrl}
                        className="w-full h-full object-cover rounded-2xl"
                        playsInline
                        loop
                        preload="auto"
                        controls={isCenter}
                        muted={!isCenter}
                        onClick={(e) => {
                          if (!isCenter && !isSliding) {
                            position < 0 ? handlePrev() : handleNext();
                          }
                          if (!isCenter) {
                            e.preventDefault();
                          }
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
