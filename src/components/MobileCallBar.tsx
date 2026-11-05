import { MapPin } from "lucide-react";
import CallButton from "@/components/CallButton";
import { business } from "@/lib/business";

const MobileCallBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-steel-line bg-white/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
      <CallButton className="flex-1" />
      <a
        href={business.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Route zur ${business.streetAddress} planen`}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-steel-line text-ink"
      >
        <MapPin className="h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  );
};

export default MobileCallBar;
