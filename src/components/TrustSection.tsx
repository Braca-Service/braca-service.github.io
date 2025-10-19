import { Award, Users, CheckCircle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trustFeatures = [
  {
    icon: <Award className="w-12 h-12" />,
    title: "KABA-Partner",
    description: "Verifizierter Partner für höchste Qualität"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Tausende Kunden",
    description: "Vertrauen uns seit Jahren"
  },
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: "Garantie",
    description: "Keine leeren Versprechen"
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Lösungsorientiert",
    description: "Gemeinsam finden wir eine Lösung"
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vertrauen und Qualität
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Professioneller Service auf höchstem Niveau
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all duration-300"
            >
              <CardContent className="pt-8 text-center">
                <div className="flex justify-center mb-4 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary-foreground">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/80">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
