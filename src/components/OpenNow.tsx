import { describeReopening, hoursSummary } from "@/lib/openStatus";
import { useOpenStatus } from "@/hooks/use-open-status";
import { cn } from "@/lib/utils";

// Live open/closed line. The prerendered HTML shows the plain hours; the
// status replaces them once the page runs in the browser.
const OpenNow = ({ onInk = false, className }: { onInk?: boolean; className?: string }) => {
  const live = useOpenStatus();
  const status = live?.status;

  let title = "Öffnungszeiten:";
  let detail = hoursSummary;
  if (status?.open === true) {
    title = "Jetzt geöffnet";
    detail = `bis ${status.until} Uhr`;
  } else if (status?.open === false) {
    title = "Jetzt geschlossen,";
    detail = `öffnet ${describeReopening(status.reopens)}`;
  }

  return (
    <p className={cn("flex items-baseline gap-3", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "relative top-px inline-block h-2.5 w-2.5 shrink-0 rounded-full border-2",
          status?.open
            ? onInk
              ? "border-[#62d29b] bg-[#62d29b]"
              : "border-[#1f8a57] bg-[#1f8a57]"
            : onInk
              ? "border-white/60"
              : "border-slate"
        )}
      />
      <span>
        <strong className={cn("font-bold", onInk ? "text-white" : "text-ink")}>{title}</strong>{" "}
        <span className={onInk ? "text-white/75" : "text-slate"}>{detail}</span>
      </span>
    </p>
  );
};

export default OpenNow;
