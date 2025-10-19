import { Phone, Clock, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <span className="text-2xl font-bold">BS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Braca Service</h1>
              <p className="text-sm text-primary-foreground/80">Professioneller Handwerksservice</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="tel:+41000000000" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>+41 00 000 00 00</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Zürich, Schweiz</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
