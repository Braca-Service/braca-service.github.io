import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Phone } from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-light/80"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl animate-slide-up">
          <div className="inline-flex items-center gap-2 glass-effect border border-primary-foreground/20 text-primary-foreground px-4 py-2.5 rounded-full mb-6 sm:mb-8 font-semibold shadow-brand-lg">
            <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Verifizierte Partner: dormakaba, Sea, EVVA, Abus, VOX</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-primary-foreground">
            Ausgesperrt?<br />Wir helfen sofort!
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-primary-foreground/95 leading-relaxed max-w-2xl">
            <strong>Kostenloser Autoschlüsseltest</strong> • Express-Schlüsseldienst • Schuhreparaturen • Gravuren & mehr<br />
            <span className="text-accent font-bold">Meist sofort fertig - während Sie warten!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-brand-xl hover:shadow-brand-2xl transition-all duration-300 hover:scale-105 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 rounded-xl font-semibold"
              asChild
            >
              <a href="tel:+41764018842" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Jetzt anrufen</span>
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-effect text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 rounded-xl font-semibold"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Alle Leistungen ansehen
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-primary-foreground/95">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Express-Service verfügbar</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Faire Preise - keine versteckten Kosten</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Tausende zufriedene Kunden</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
