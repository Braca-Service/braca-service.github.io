import { Award, Users, CheckCircle, Shield, Wallet, Banknote } from "lucide-react";

const trustFeatures = [
  {
    icon: <Award className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Premium Partner",
    description: "dormakaba, Sea, EVVA, Abus, VOX"
  },
  {
    icon: <Users className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Express-Service",
    description: "Meist sofort fertig - kein langes Warten"
  },
  {
    icon: <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Faire Preise",
    description: "Transparent kalkuliert - keine Überraschungen"
  },
  {
    icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Qualitätsgarantie",
    description: "Wir stehen für unsere Arbeit ein - 100%"
  }
];

const TrustSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Warum zu Braca Service kommen?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Schnell, günstig und zuverlässig - Ihre Vorteile auf einen Blick
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {trustFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="glass-effect border border-primary-foreground/20 rounded-2xl p-6 sm:p-8 hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-105 hover:shadow-brand-xl text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4 text-accent">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary-foreground">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-primary-foreground/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 text-center animate-fade-in">
          <div className="glass-effect border border-primary-foreground/20 rounded-2xl p-6 inline-block">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-primary-foreground">
              Zahlungsmöglichkeiten
            </h3>
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <Wallet className="w-8 h-8 text-accent" />
                <span className="text-base sm:text-lg font-semibold text-primary-foreground">TWINT</span>
              </div>
              <div className="w-px h-8 bg-primary-foreground/30"></div>
              <div className="flex items-center gap-3">
                <Banknote className="w-8 h-8 text-accent" />
                <span className="text-base sm:text-lg font-semibold text-primary-foreground">Bargeld</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-3">
              Kartenzahlungen sind derzeit nicht möglich
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
