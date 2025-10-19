import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Key, 
  Scissors, 
  Pen, 
  Stamp, 
  Settings, 
  Edit3,
  Tag
} from "lucide-react";

const services = [
  {
    icon: <Scissors className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Schuhreparaturen",
    description: "Ihre Lieblingsschuhe verdienen eine zweite Chance",
    items: [
      "Absatz professionell ersetzen",
      "Neue Sohlen für längere Haltbarkeit",
      "Orthopädische Anpassungen",
      "Schuhe weiten oder verlängern",
      "Wanderschuhe fachgerecht besohlen"
    ]
  },
  {
    icon: <Key className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Schlüsselservice",
    description: "Schnell, zuverlässig und präzise - Ihr Schlüssel zum Erfolg",
    items: [
      "Autoschlüssel mit Wegfahrsperre kopieren",
      "Zylinderschlüssel nach Code",
      "Briefkastenschlüssel anfertigen",
      "Velo- & Motorradschlüssel",
      "Gussschlüssel nach Vorlage"
    ],
    featured: true
  },
  {
    icon: <Pen className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Gravuren",
    description: "Personalisierung mit Präzision und Liebe zum Detail",
    items: [
      "Elegante Briefkastenschilder",
      "Hochwertige Klingelschilder",
      "Türschilder nach Wunsch",
      "Individuelle Namensschilder",
      "Personalisierte Hundemarken"
    ]
  },
  {
    icon: <Stamp className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Stempel",
    description: "Ihr individueller Stempel - professionell und nachhaltig",
    items: [
      "Praktische Automatikstempel",
      "11 verschiedene Grössen verfügbar",
      "4 Farben zur Auswahl",
      "Komplett nach Ihren Wünschen gestaltet",
      "100% nachfüllbar und umweltfreundlich"
    ]
  },
  {
    icon: <Settings className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Schleifarbeiten",
    description: "Messerscharf in kürzester Zeit - Qualität, die schneidet",
    items: [
      "Küchenmesser rasiermesserscharf",
      "Heckenscheren für perfekte Schnitte",
      "Rasenmähermesser schleifen",
      "Scheren aller Art",
      "Äxte professionell geschärft"
    ]
  },
  {
    icon: <Edit3 className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Näharbeiten",
    description: "Perfekte Passform für Ihre Lieblingsstücke",
    items: [
      "Jeans auf die richtige Länge kürzen",
      "Stoffhosen präzise anpassen",
      "Reissverschlüsse fachgerecht ersetzen",
      "Sorgfältige Flickarbeiten",
      "Massgeschneiderte Änderungen"
    ]
  },
  {
    icon: <Tag className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Beschriftungen",
    description: "Professionelle Beschilderung für jeden Bedarf",
    items: [
      "Wetterfeste Parkplatzschilder",
      "Repräsentative Firmenschilder",
      "Flexible Magnetschilder"
    ]
  },
  {
    icon: <Settings className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Weitere Services",
    description: "Kleine Reparaturen mit grosser Wirkung",
    items: [
      "Fernbedienungen wieder funktionsfähig machen",
      "Schlüsselgehäuse austauschen",
      "Batterien wechseln (Uhren & Autoschlüssel)",
      "Uhrbänder professionell kürzen"
    ]
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Unsere Dienstleistungen
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professionelle Handwerksleistungen mit Schweizer Qualität und Präzision
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-brand-xl transition-all duration-300 hover:-translate-y-2 border-border/50 animate-slide-up ${
                service.featured ? 'border-primary/50 shadow-brand-lg ring-2 ring-primary/10' : ''
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                  service.featured 
                    ? 'bg-gradient-primary text-primary-foreground shadow-brand-md' 
                    : 'bg-primary/10 text-primary group-hover:bg-primary/15'
                }`}>
                  {service.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
