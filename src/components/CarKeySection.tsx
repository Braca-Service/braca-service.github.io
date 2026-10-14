import { Car, KeyRound, Wrench, ShieldCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, carBrands, carKeyServices } from "@/lib/business";

const icons = [
  <KeyRound className="w-7 h-7" />,
  <Car className="w-7 h-7" />,
  <Wrench className="w-7 h-7" />,
  <ShieldCheck className="w-7 h-7" />,
];

const CarKeySection = () => {
  return (
    <section id="autoschluessel" className="scroll-mt-20 py-12 sm:py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Autoschlüssel kopieren & reparieren in Luzern
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Jede Automarke – mit oder ohne Keyless. Wir machen Ihren Zweitschlüssel, programmieren die
            Wegfahrsperre und reparieren defekte Funkschlüssel. Oft günstiger und schneller als in der Garage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {carKeyServices.map((service, index) => (
            <div key={service.title} className="bg-card border border-border/50 rounded-2xl p-6 shadow-brand-sm">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-primary/10 text-primary">
                {icons[index]}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
            Autoschlüssel für alle Marken
          </h3>
          <ul className="flex flex-wrap justify-center gap-2 mb-6">
            {carBrands.map((brand) => (
              <li
                key={brand}
                className="px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium text-foreground"
              >
                {brand}
              </li>
            ))}
            <li className="px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground">
              und weitere
            </li>
          </ul>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            Ihre Marke fehlt? Einfach anrufen – mit Marke, Modell und Jahrgang sagen wir Ihnen sofort, was möglich ist.
          </p>
          <Button size="lg" className="rounded-xl font-semibold" asChild>
            <a href={`tel:${business.phoneHref}`} className="flex items-center gap-2 w-fit mx-auto">
              <Phone className="w-5 h-5" />
              <span>Autoschlüssel anfragen: {business.phoneDisplay}</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarKeySection;
