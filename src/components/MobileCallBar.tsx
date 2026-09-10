import { Phone, MapPin } from "lucide-react";
import { business } from "@/lib/business";

const MobileCallBar = () => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 flex gap-2 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-card/95 backdrop-blur-md border-t border-border shadow-brand-xl">
      <a
        href={`tel:${business.phoneHref}`}
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold rounded-xl h-12 shadow-brand-md active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5" />
        <span>Jetzt anrufen</span>
      </a>
      <a
        href={business.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Route anzeigen"
        className="flex items-center justify-center bg-secondary text-foreground rounded-xl h-12 w-12 shrink-0 active:scale-95 transition-transform"
      >
        <MapPin className="w-5 h-5" />
      </a>
    </div>
  );
};

export default MobileCallBar;
