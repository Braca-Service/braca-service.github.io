import { Phone, MapPin } from "lucide-react";
import bracaLogo from "@/assets/braca_logo.png";
import { business } from "@/lib/business";

const navLinks = [
  { href: "#services", label: "Leistungen" },
  { href: "#opening-hours", label: "Öffnungszeiten" },
  { href: "#faq", label: "Fragen" },
  { href: "#contact", label: "Kontakt" },
];

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-brand-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4">
          <div className="flex items-center justify-between sm:justify-start gap-3">
            <img
              src={bracaLogo}
              alt="Braca Service Logo - Schlüsselservice, Schuhreparaturen und Gravuren in Luzern"
              className="h-12 sm:h-14 w-auto object-contain"
              width={56}
              height={56}
            />
            <a
              href={`tel:${business.phoneHref}`}
              className="sm:hidden flex items-center gap-2 text-primary font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{business.phoneDisplay}</span>
            </a>
          </div>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={`tel:${business.phoneHref}`}
              className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary transition-colors group font-semibold"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>{business.phoneDisplay}</span>
            </a>
            <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Luzern</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
