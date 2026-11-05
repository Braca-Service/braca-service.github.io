import { openingHours } from "@/lib/business";

// Live "open now" status for the shop, always in Swiss time regardless of
// where the visitor is. Public holidays are not known here.

// "Di – Fr 08:00–12:00 und 13:00–17:00, Sa 08:00–14:00"
export const hoursSummary = openingHours
  .filter((g) => g.periods.length)
  .map((g) => `${g.short} ${g.periods.map(([o, c]) => `${o}–${c}`).join(" und ")}`)
  .join(", ");

export const weekdayNames = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

const toMinutes = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

export type ShopClock = { day: number; minutes: number };

export const shopClock = (date: Date = new Date()): ShopClock => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Zurich",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
};

const periodsOn = (day: number) => openingHours.find((g) => g.days.includes(day))?.periods ?? [];

export type OpenStatus = { open: true; until: string } | { open: false; reopens: { inDays: number; day: number; time: string } };

export const openStatus = ({ day, minutes }: ShopClock): OpenStatus | null => {
  const today = periodsOn(day);
  const current = today.find(([o, c]) => minutes >= toMinutes(o) && minutes < toMinutes(c));
  if (current) return { open: true, until: current[1] };

  const laterToday = today.find(([o]) => toMinutes(o) > minutes);
  if (laterToday) return { open: false, reopens: { inDays: 0, day, time: laterToday[0] } };

  for (let inDays = 1; inDays <= 7; inDays++) {
    const next = (day + inDays) % 7;
    const periods = periodsOn(next);
    if (periods.length) return { open: false, reopens: { inDays, day: next, time: periods[0][0] } };
  }
  return null;
};

// "heute um 13:00 Uhr", "morgen um 08:00 Uhr", "am Dienstag um 08:00 Uhr"
export const describeReopening = ({ inDays, day, time }: { inDays: number; day: number; time: string }) => {
  const when = inDays === 0 ? "heute" : inDays === 1 ? "morgen" : `am ${weekdayNames[day]}`;
  return `${when} um ${time} Uhr`;
};
