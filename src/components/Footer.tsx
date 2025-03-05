
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">Sync Space Media</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              We help ambitious brands create meaningful digital experiences through thoughtful design and strategic thinking.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center font-medium link-hover"
            >
              Let's work together <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">heyitshere173@gmail.com</li>
              <li className="text-muted-foreground">@souls.talkss</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between pt-10 mt-10 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sync Space Media. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
