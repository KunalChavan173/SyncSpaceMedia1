
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

// Fade Up animation
export const FadeUp = ({ children, delay = 0, className }: MotionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10",
        className
      )}
    >
      {children}
    </div>
  );
};

// Staggered children animation
export const StaggeredChildren = ({ children, className }: MotionProps) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            style: {
              animationDelay: `${index * 100}ms`,
            },
          });
        }
        return child;
      })}
    </div>
  );
};

// Lazy Image loading with blur effect
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const LazyImage = ({ src, alt, className, ...props }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "transition-all duration-700",
        isLoaded ? "blur-0" : "blur-md",
        className
      )}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
};

// Blur In animation
export const BlurIn = ({ children, delay = 0, className }: MotionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 blur-0" : "opacity-0 blur-md",
        className
      )}
    >
      {children}
    </div>
  );
};
