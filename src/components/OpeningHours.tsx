import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OpeningHours = () => {
  const hours = [
    { day: "Montag - Freitag", time: "08:00 - 18:00" },
    { day: "Samstag", time: "09:00 - 16:00" },
    { day: "Sonntag", time: "Geschlossen" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-brand-lg">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Öffnungszeiten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {hours.map((schedule, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-3 border-b last:border-b-0"
                >
                  <span className="font-medium text-foreground">{schedule.day}</span>
                  <span className="text-primary font-semibold">{schedule.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-brand-lg">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Kontakt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">
                      Musterstrasse 123<br />
                      8000 Zürich<br />
                      Schweiz
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <a 
                      href="tel:+41000000000" 
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      +41 00 000 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">E-Mail</p>
                    <a 
                      href="mailto:info@braca-service.ch" 
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      info@braca-service.ch
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
