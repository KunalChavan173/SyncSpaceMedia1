
import { ArrowRight } from "lucide-react";
import { FadeUp } from "./ui/Motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
            </div>
          </FadeUp>

          <div>
            <FadeUp delay={100}>
              <span className="chip mb-4">About Us</span>
              <h2 className="heading-lg mb-6">We create meaningful digital experiences</h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="paragraph text-muted-foreground mb-6">
                Sync Space Media is a full-service creative agency specializing in brand development, 
                web design, and digital marketing. We collaborate with ambitious brands and people to 
                create meaningful experiences through thoughtful design and strategic thinking.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <p className="paragraph text-muted-foreground mb-8">
                Our team of experts combines creativity with technical expertise to deliver solutions 
                that drive results and help our clients stand out in a crowded digital landscape.
              </p>
            </FadeUp>
            <FadeUp delay={400}>
              <a 
                href="#services" 
                className="inline-flex items-center font-medium link-hover"
              >
                Explore our services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
