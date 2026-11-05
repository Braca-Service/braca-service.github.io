import { Phone } from "lucide-react";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

// Brass call button. Shows the number itself so people know exactly what tapping does.
const CallButton = ({ label, className }: { label?: string; className?: string }) => (
  <a href={`tel:${business.phoneHref}`} className={cn("btn-call", className)}>
    <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
    <span>
      {label && <>{label} </>}
      <span className="whitespace-nowrap">{business.phoneDisplay}</span>
    </span>
  </a>
);

export default CallButton;
