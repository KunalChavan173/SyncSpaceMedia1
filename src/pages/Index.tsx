import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Features />
        <Portfolio />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
