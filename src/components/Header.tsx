import { MapPin } from "lucide-react";
import bracaLogo from "@/assets/braca_logo.png";
import { carKeyPage } from "@/lib/pages";

const navLinks = [
  { href: carKeyPage.path, label: "Autoschlüssel" },
  { href: "/#services", label: "Leistungen" },
  { href: "/#opening-hours", label: "Zeiten", desktopOnly: true },
  { href: "/#faq", label: "Fragen", desktopOnly: true },
  { href: "#contact", label: "Kontakt" },
];

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-brand-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-2.5 sm:py-4">
          <a href="/" className="shrink-0" aria-label="Braca Service – Startseite">
            <img
              src={bracaLogo}
              alt="Braca Service Logo - Schlüsselservice, Schuhreparaturen und Gravuren in Luzern"
              className="h-8 sm:h-14 w-auto object-contain"
              width={56}
              height={56}
            />
          </a>

          <nav className="flex items-center gap-x-2 sm:gap-x-4 text-[11px] sm:text-sm overflow-x-auto">
            <div className="flex items-center gap-x-2 sm:gap-x-4 whitespace-nowrap">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${link.desktopOnly ? "hidden sm:inline " : ""}text-foreground/80 hover:text-primary transition-colors font-medium`}
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
