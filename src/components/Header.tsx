import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-brand-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-brand-md">
              <span className="text-xl font-bold text-primary-foreground">BS</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground">Braca Service</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">Professioneller Handwerksservice</p>
            </div>
          </div>
          
          <nav className="flex flex-wrap gap-3 sm:gap-4 text-sm">
            <a 
              href="tel:+41764018842" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">+41 76 401 88 42</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Luzern</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
