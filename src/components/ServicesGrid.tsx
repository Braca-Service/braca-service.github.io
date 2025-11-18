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
    description: "Absatz- und Sohlenreparatur in Luzern — nachhaltig & hochwertig",
    items: [
      "Absatz ersetzen - schnelle Reparatur vor Ort",
      "Sohlen ersetzen & neu besohlen für langanhaltenden Schutz",
      "Orthopädische Anpassungen für mehr Komfort",
      "Weiten & Anpassungen für perfekte Passform",
      "Wanderschuh-Service & Imprägnierung"
    ]
  },
  {
    icon: <Key className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Schlüsselservice",
    description: "Schlüssel & Autoschlüssel in Luzern - Programmierung & Duplikate",
    items: [
      "Autoschlüssel mit Wegfahrsperre - Programmierung vor Ort",
      "Zylinderschlüssel & Ersatz nach Code",
      "Briefkasten-, Velo- & Motorradschlüssel",
      "Präzisions-Duplikate in Minuten",
      "Spezial- & Markenschlüssel: EVVA, Abus, dormakaba"
    ]
  },
  {
    icon: <Pen className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Gravuren",
    description: "Präzise Gravuren in Luzern — Namensschilder, Tür- und Briefkastenschild",
    items: [
      "Briefkasten- & Klingelschilder in verschiedenen Materialien",
      "Wetterfeste Türschilder nach Mass",
      "Personalisierte Namensschilder für privat & Business",
      "Hundemarken und Geschenkgravuren",
      "Express-Gravuren möglich"
    ]
  },
  {
    icon: <Stamp className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Stempel",
    description: "In 24h bereit! Professionell & nachhaltig",
    items: [
      "Express: Morgen bestellt - übermorgen fertig!",
      "11 Grössen & 4 Farben - für jeden Zweck",
      "100% individuell nach Ihrem Design",
      "Automatikstempel - keine Stempelkissen nötig",
      "Nachfüllbar - spart Geld & schont die Umwelt"
    ]
  },
  {
    icon: <Settings className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Schleifarbeiten",
    description: "Rasiermesserscharf - wie neu in Minuten!",
    items: [
      "Küchenmesser schärfer als beim Kauf!",
      "Heckenscheren - schneiden wie Butter",
      "Rasenmähermesser perfekt geschliffen",
      "Scheren & Äxte - profi-scharf",
      "Sofort-Service - meist während Sie warten"
    ]
  },
  {
    icon: <Edit3 className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Näharbeiten",
    description: "Lieblingsteile retten - perfekte Passform garantiert!",
    items: [
      "Hosen kürzen - sitzt wie angegossen",
      "Reissverschluss kaputt? Schnell ersetzt!",
      "Flicken unsichtbar - sieht aus wie neu",
      "Änderungen aller Art - massgeschneidert",
      "Express möglich - wenn's pressiert"
    ]
  },
  {
    icon: <Tag className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Beschriftungen",
    description: "Ihr Auftritt zählt - professionell beschriftet!",
    items: [
      "Parkplatzschilder - wetterfest & langlebig",
      "Firmenschilder - repräsentativ & edel",
      "Magnetschilder - flexibel einsetzbar",
      "Individuelle Beschriftungen aller Art",
      "Beratung inklusive - wir helfen bei der Gestaltung"
    ]
  },
  {
    icon: <Settings className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Weitere Services",
    description: "Kleine Reparaturen statt teurer Neukauf!",
    items: [
      "Fernbedienungen reparieren - in Minuten",
      "Schlüsselgehäuse kaputt? Sofort ersetzt!",
      "Batteriewechsel Uhren & Autoschlüssel",
      "Uhrbänder kürzen - perfekte Länge",
      "Und vieles mehr - einfach fragen!"
    ]
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Schuhmacher in Luzern — Unsere Leistungen
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Lokaler Schuhmacher und Reparaturservice in Luzern. Absatz- und Sohlenwechsel, Schuhpflege und Schlüsselservice — meist sofort erledigt, fachgerecht und fair bepreist.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-brand-xl transition-all duration-300 hover:-translate-y-2 border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 bg-primary/10 text-primary group-hover:bg-primary/15">
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
