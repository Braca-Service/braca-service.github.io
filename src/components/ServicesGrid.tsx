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
    description: "Professionelle Reparaturen für alle Schuhtypen",
    items: [
      "Absatz ersetzen",
      "Sohle ersetzen",
      "Kleine Orthopädie",
      "Schuhe weiten, längen",
      "Wanderschuh besohlen"
    ]
  },
  {
    icon: <Key className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Schlüsselservice",
    description: "Kompetenter Service für alle Schlüsselarten",
    items: [
      "Autoschlüssel mit Wegfahrsperre",
      "Zylinderschlüssel",
      "Briefkastenschlüssel",
      "Velo / Motorradschlüssel",
      "Gussschlüssel"
    ],
    featured: true
  },
  {
    icon: <Pen className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Gravuren",
    description: "Präzise Gravuren für verschiedene Anwendungen",
    items: [
      "Briefkastenschilder",
      "Sonnerieschilder",
      "Türklingelschilder",
      "Namensschilder",
      "Hundemarken"
    ]
  },
  {
    icon: <Stamp className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Stempel",
    description: "Individuelle Stempel nach Ihren Wünschen",
    items: [
      "Automatikstempel",
      "11 verschiedene Grössen",
      "4 verschiedene Farben",
      "Freie Gestaltung",
      "Alle Stempel nachfüllbar"
    ]
  },
  {
    icon: <Settings className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Schleifarbeiten",
    description: "Professionelles Schärfen und Schleifen",
    items: [
      "Fleisch - Küchenmesser",
      "Garten - Heckenschere",
      "Rasenmähermesser",
      "Schere",
      "Axt"
    ]
  },
  {
    icon: <Edit3 className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Näharbeiten",
    description: "Fachgerechte Änderungen und Reparaturen",
    items: [
      "Jeanshose kürzen",
      "Stoffhose kürzen",
      "Reissverschluss ersetzen",
      "Flickarbeiten",
      "Diverse Änderungen"
    ]
  },
  {
    icon: <Tag className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Beschriftungen",
    description: "Professionelle Schilder und Beschriftungen",
    items: [
      "Parkplatzschilder",
      "Firmenschilder",
      "Magnetschilder"
    ]
  },
  {
    icon: <Settings className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Diverse Services",
    description: "Weitere praktische Dienstleistungen",
    items: [
      "Fernbedienung reparieren",
      "Schlüsselgehäuse wechseln",
      "Batterie wechseln (Uhren und Autoschlüssel)",
      "Uhrband kürzen"
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
