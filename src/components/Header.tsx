import { MapPin } from "lucide-react";
import bracaLogo from "@/assets/braca_logo.png";

const navLinks = [
  { href: "#services", label: "Leistungen" },
  { href: "#opening-hours", label: "Zeiten" },
  { href: "#faq", label: "Fragen" },
  { href: "#contact", label: "Kontakt" },
];

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-brand-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-2.5 sm:py-4">
          <img
            src={bracaLogo}
            alt="Braca Service Logo - Schlüsselservice, Schuhreparaturen und Gravuren in Luzern"
            className="h-8 sm:h-14 w-auto object-contain shrink-0"
            width={56}
            height={56}
          />

          <nav className="flex items-center gap-x-2 sm:gap-x-4 text-[11px] sm:text-sm overflow-x-auto">
            <div className="flex items-center gap-x-2 sm:gap-x-4 whitespace-nowrap">
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
            <div className="hidden sm:flex items-center gap-2 text-muted-foreground shrink-0">
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
