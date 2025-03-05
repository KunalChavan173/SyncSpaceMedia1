
import { ReactNode, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate position of mouse relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position
    // We'll limit the rotation to a smaller amount for a subtle effect
    const rotateY = ((x / rect.width) - 0.5) * 8; // -4 to 4 degrees
    const rotateX = ((y / rect.height) - 0.5) * -8; // -4 to 4 degrees
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };
  
  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <div
      ref={cardRef}
      className={cn(
        "group p-6 rounded-xl glass-card",
        "border border-white/10",
        "hover:border-primary/30",
        "transition-all duration-300 ease-out",
        "perspective-1000"
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      <div 
        className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center mb-5 text-primary transition-transform duration-300 group-hover:scale-110"
        style={{ transform: 'translateZ(20px)' }}
      >
        {icon}
      </div>
      <h3 
        className="text-xl font-semibold mb-3 transition-transform duration-300 group-hover:text-primary"
        style={{ transform: 'translateZ(15px)' }}
      >
        {title}
      </h3>
      <p 
        className="text-muted-foreground transition-transform duration-300"
        style={{ transform: 'translateZ(10px)' }}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
