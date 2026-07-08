export interface Freedom250Stat {
  value: string;
  label: string;
}

export interface Freedom250Pillar {
  title: string;
  description: string;
}

export interface Freedom250Quote {
  text: string;
  name: string;
  role: string;
}

/** Public heyzine flipbook telling the full story of the celebration. */
export const FLIPBOOK_URL = "https://heyzine.com/flip-book/ea6e8094e0.html";

export const freedom250Meta = {
  eyebrow: "America's 250th · June 27, 2026 · Northborough, MA",
  intro:
    "To honor the 250th anniversary of American independence, FIANE launched the " +
    "250 Fruit-Bearing Trees Initiative — planting one tree for every year of " +
    "the nation's freedom. A symbolic gesture to invest in the future, the " +
    "community, and the environment, the celebration brought together hundreds of " +
    "community members, veterans, elected officials, and families. The first tree " +
    "was planted by 95-year-old World War II U.S. Navy veteran Frank Brown, and " +
    "children capped the day by releasing 250 silver balloons into the summer sky.",
};

export const freedom250Stats: Freedom250Stat[] = [
  {
    value: "250",
    label: "Fruit-bearing trees planted — one for each year of independence",
  },
  {
    value: "95",
    label: "Age of WWII Navy veteran Frank Brown, who planted the first tree",
  },
  {
    value: "250",
    label: "Silver balloons released by children, one for every year of freedom",
  },
  {
    value: "100s",
    label: "Community members, veterans & families gathered in Northborough",
  },
];

export const freedom250Pillars: Freedom250Pillar[] = [
  {
    title: "Future",
    description:
      "Fruit-bearing trees mature over decades — a living gift that will feed and shade the generations who come after us.",
  },
  {
    title: "Community",
    description:
      "Veterans, elected officials, children, and families planted side by side — service and celebration rooted in one shared home.",
  },
  {
    title: "Environment",
    description:
      "A growing green canopy across New England — cleaner air, thriving pollinators, and a healthier landscape for all.",
  },
];

export const freedom250Quotes: Freedom250Quote[] = [
  {
    text: "Planting these trees is not just about honoring the past — it is about giving something alive and lasting to the future generation.",
    name: "Frank Brown",
    role: "WWII U.S. Navy veteran · planted the first tree",
  },
  {
    text: "America's 250th Independence Day is not just a milestone — it is a reminder of our responsibility to serve, to give back, and to build a stronger future. The 250 trees we plant today are a living legacy for generations to come.",
    name: "Abhishek Singh",
    role: "President, FIA New England",
  },
];
