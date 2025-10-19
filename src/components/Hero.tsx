import { Button } from "@/components/ui/button";
import { CheckCircle, Award } from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-primary-foreground">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-6 font-semibold">
            <Award className="w-5 h-5" />
            <span>Verifizierter KABA-Partner</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Kostenloser Autoschlüsseltest
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Professioneller Service für Schlüssel, Schuhreparaturen und Gravuren. 
            Mit Ihnen zusammen finden wir immer eine Lösung.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl text-lg px-8 py-6"
            >
              Jetzt Termin vereinbaren
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm text-lg px-8 py-6"
            >
              Unsere Services
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="font-medium">Tausende zufriedene Kunden</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="font-medium">Keine leeren Versprechen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
