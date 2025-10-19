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
    icon: <Scissors className="w-8 h-8" />,
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
    icon: <Key className="w-8 h-8" />,
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
    icon: <Pen className="w-8 h-8" />,
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
    icon: <Stamp className="w-8 h-8" />,
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
    icon: <Settings className="w-8 h-8" />,
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
    icon: <Edit3 className="w-8 h-8" />,
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
    icon: <Tag className="w-8 h-8" />,
    title: "Beschriftungen",
    description: "Professionelle Schilder und Beschriftungen",
    items: [
      "Parkplatzschilder",
      "Firmenschilder",
      "Magnetschilder"
    ]
  },
  {
    icon: <Settings className="w-8 h-8" />,
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
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professionelle Handwerksleistungen mit Schweizer Qualität und Präzision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1 ${
                service.featured ? 'border-primary border-2 shadow-brand-lg' : ''
              }`}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                  service.featured 
                    ? 'bg-gradient-primary text-primary-foreground' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
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
