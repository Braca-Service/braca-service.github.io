import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OpeningHours = () => {
  const hours = [
    { day: "Montag", time: "Geschlossen" },
    { day: "Dienstag - Freitag", time: "08:00 - 12:00, 13:00 - 17:00" },
    { day: "Samstag", time: "08:00 - 14:00" },
    { day: "Sonntag", time: "Geschlossen" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <Card className="shadow-brand-lg hover:shadow-brand-xl transition-all duration-300 border-border/50 animate-slide-up">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-brand-md">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Öffnungszeiten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {hours.map((schedule, index) => {
                // split on comma and keep NBSP around dash to avoid orphaned dashes
                const segments = schedule.time
                  .split(',')
                  .map(seg => seg.trim().replace(/ - /g, "\u00A0-\u00A0"));

                return (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0"
                  >
                    <span className="font-medium text-foreground text-sm sm:text-base">{schedule.day}</span>

                    <span className="text-primary font-semibold text-sm sm:text-base text-right min-w-0">
                      {segments.map((seg, i) => (
                        // render a line break between segments; last segment no trailing <br/>
                        <span key={i}>
                          {seg}
                          {i < segments.length - 1 && <br />}
                        </span>
                      ))}
                    </span>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="shadow-brand-lg hover:shadow-brand-xl transition-all duration-300 border-border/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-brand-md">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Kontakt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-foreground text-sm sm:text-base mb-1">Adresse</p>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Luzernerstrasse 117<br />
                      6014 Luzern<br />
                      Schweiz
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-foreground text-sm sm:text-base mb-1">Telefon</p>
                    <a 
                      href="tel:+41764018842" 
                      className="text-primary hover:text-primary-light transition-colors font-medium text-sm sm:text-base"
                    >
                      +41 76 401 88 42
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-foreground text-sm sm:text-base mb-1">E-Mail</p>
                    <a 
                      href="mailto:bracaservice@sunrise.ch" 
                      className="text-primary hover:text-primary-light transition-colors font-medium text-sm sm:text-base break-all"
                    >
                      bracaservice@sunrise.ch
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
