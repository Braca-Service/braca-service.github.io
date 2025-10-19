import { Award, Users, CheckCircle, Shield } from "lucide-react";

const trustFeatures = [
  {
    icon: <Award className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "KABA-Partner",
    description: "Verifizierter Partner für höchste Qualität"
  },
  {
    icon: <Users className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Tausende Kunden",
    description: "Vertrauen uns seit Jahren"
  },
  {
    icon: <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Garantie",
    description: "Keine leeren Versprechen"
  },
  {
    icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Lösungsorientiert",
    description: "Gemeinsam finden wir eine Lösung"
  }
];

const TrustSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Vertrauen und Qualität
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Professioneller Service auf höchstem Niveau
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
      </div>
    </section>
  );
};

export default TrustSection;
