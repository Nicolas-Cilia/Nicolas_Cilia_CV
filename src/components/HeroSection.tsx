import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>
      
      {/* Hero gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in">
          NICOLAS CILIA
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground italic mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Student at University of Oregon
        </p>
        
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a 
            href="mailto:ncilia.work@gmail.com" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">ncilia.work@gmail.com</span>
          </a>
          
          <a 
            href="tel:+19714077154" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">+1 (971) 407-7154</span>
          </a>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Eugene, Oregon</span>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a 
            href="https://www.linkedin.com/in/nicolas-cilia/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-accent hover:text-accent transition-all"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/Nicolas-Cilia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-accent hover:text-accent transition-all"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
