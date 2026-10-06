import { events, type Event } from "./events";

export interface SaveTheDate {
  /** Matches an entry in events.ts so title/date/registration stay in one place. */
  eventId: string;
  /** Short label shown above the title, e.g. "6th Annual". */
  kicker: string;
  /** Portrait (A-series, ~1:1.414) flyer under /public/images/save-the-date. */
  flyer: string;
  alt: string;
}

export const saveTheDateMeta = {
  eyebrow: "Save the Date · 2027",
  intro:
    "Mark your calendars for FIA New England's two signature summer " +
    "celebrations. Venue and program details will be announced closer to each event.",
};

const flyers: SaveTheDate[] = [
  {
    eventId: "9",
    kicker: "America's Independence",
    flyer: "/images/save-the-date/july4-celebration-2027.jpg",
    alt: "FIA New England Save the Date flyer: July 4th celebration on Saturday, June 26, 2027, with the Statue of Liberty and fireworks",
  },
  {
    eventId: "10",
    kicker: "6th Annual",
    flyer: "/images/save-the-date/india-day-parade-2027.jpg",
    alt: "FIA New England Save the Date flyer: International India Day Parade on Sunday, August 8, 2027, with Indian and American flags and a parade scene",
  },
];

/** Flyers joined with their event entries, in calendar order. */
export const saveTheDates: (SaveTheDate & { event: Event })[] = flyers.map((f) => {
  const event = events.find((e) => e.id === f.eventId);
  if (!event) throw new Error(`saveTheDate: no event with id "${f.eventId}"`);
  return { ...f, event };
});
