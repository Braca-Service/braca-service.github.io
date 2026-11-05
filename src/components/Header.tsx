import { useLocation } from "react-router-dom";
import bracaLogo from "@/assets/braca_logo.png";
import { carKeyPage } from "@/lib/pages";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: carKeyPage.path, label: "Autoschlüssel" },
  { href: "/#services", label: "Leistungen", hideOnSmallest: true },
  { href: "/#opening-hours", label: "Öffnungszeiten", desktopOnly: true },
  { href: "/#faq", label: "Fragen", desktopOnly: true },
  { href: "#contact", label: "Kontakt" },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-steel-line/70 bg-white/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Zum Inhalt springen
      </a>
      <div className="wrap flex h-14 items-center justify-between gap-3 sm:h-[4.5rem]">
        <a href="/" className="shrink-0" aria-label="Braca Service – Startseite">
          <img
            src={bracaLogo}
            alt="Braca Multi Service"
            className="h-7 w-auto sm:h-11"
            width={940}
            height={317}
          />
        </a>

        <nav aria-label="Hauptnavigation" className="min-w-0 overflow-x-auto">
          <ul className="flex items-center gap-x-3 whitespace-nowrap text-[0.8125rem] font-bold min-[400px]:gap-x-4 min-[400px]:text-[0.875rem] sm:gap-x-7 sm:text-base">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={cn(link.desktopOnly && "hidden md:block", link.hideOnSmallest && "max-[359px]:hidden")}
              >
                <a
                  href={link.href}
                  aria-current={link.href === pathname ? "page" : undefined}
                  className={cn(
                    "block py-2 text-graphite underline-offset-[6px] transition-colors hover:text-brand hover:underline",
                    "aria-[current=page]:text-brand aria-[current=page]:underline aria-[current=page]:decoration-brass aria-[current=page]:decoration-2"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
