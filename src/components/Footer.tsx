import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg sm:text-xl text-foreground mb-3">Braca Service</p>
            <p className="text-sm text-muted-foreground mb-4">
              Ihr zuverlässiger Partner für Reparaturen und Service in Luzern
            </p>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="tel:+41764018842" className="flex items-center gap-2 mx-auto md:mx-0 w-fit">
                <Phone className="w-4 h-4" />
                <span>Jetzt anrufen</span>
              </a>
            </Button>
          </div>
          
          <div className="text-center">
            <p className="font-semibold text-foreground mb-3">Kontakt</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:+41764018842" className="flex items-center gap-2 hover:text-primary transition-colors justify-center">
                <Phone className="w-4 h-4" />
                +41 76 401 88 42
              </a>
              <a href="mailto:bracaservice@sunrise.ch" className="flex items-center gap-2 hover:text-primary transition-colors justify-center">
                <Mail className="w-4 h-4" />
                bracaservice@sunrise.ch
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-semibold text-foreground mb-3">Standort</p>
            <div className="text-sm text-muted-foreground">
              <a 
                href="https://maps.google.com/?q=Luzernerstrasse+117,+6014+Luzern" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors justify-center md:justify-end"
              >
                <MapPin className="w-4 h-4" />
                <span>
                  Luzernerstrasse 117<br />
                  6014 Luzern
                </span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
          <p>&copy; {new Date().getFullYear()} Braca Service. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
