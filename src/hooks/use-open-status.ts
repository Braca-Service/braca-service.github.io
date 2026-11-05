import { useEffect, useState } from "react";
import { openStatus, shopClock, type OpenStatus, type ShopClock } from "@/lib/openStatus";

// Returns null during prerendering and the first client render (so hydration
// matches the static HTML), then the live status, refreshed every minute.
export const useOpenStatus = (): { clock: ShopClock; status: OpenStatus | null } | null => {
  const [state, setState] = useState<{ clock: ShopClock; status: OpenStatus | null } | null>(null);

  useEffect(() => {
    const update = () => {
      const clock = shopClock();
      setState({ clock, status: openStatus(clock) });
    };
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return state;
};
