export interface IndiaDayStat {
  value: string;
  label: string;
}

export interface IndiaDayPhoto {
  src: string;
  alt: string;
  caption: string;
}

export const indiaDayMeta = {
  eyebrow: "5th International India Day Parade · August 9, 2026 · Boston Harbor",
  intro:
    "FIA New England marked the Festival of Freedom with a full day at Boston " +
    "Harbor: raising the Indian and American flags together, a parade of " +
    "floats, bands, and grand marshals through the city, and a harbor-side " +
    "stage program that included a Commonwealth of Massachusetts proclamation " +
    "honoring India Day and a classical dance performance. The parade opened " +
    "with a ribbon-cutting joined by the Consul General of India in Boston, " +
    "alongside FIANE's chief guest and grand marshals.",
};

export const indiaDayStats: IndiaDayStat[] = [
  { value: "5th", label: "Annual International India Day Parade hosted by FIA New England" },
  { value: "15", label: "Floats, vehicles & bands in the parade lineup" },
  { value: "80th", label: "India's Independence Day marked by the celebration" },
];

export const indiaDayPhotos: IndiaDayPhoto[] = [
  {
    src: "/images/gallery/india-day-welcome-banner.jpg",
    alt: "Grand marshals and chief guests cutting the ribbon under the Welcome to the 5th International India Day Parade banner at Boston Harbor",
    caption: "Cutting the ribbon to open the 5th International India Day Parade at Boston Harbor.",
  },
  {
    src: "/images/gallery/india-day-parade-inauguration.jpg",
    alt: "Dignitaries and grand marshals cutting the ribbon to open the 5th International India Day Parade at Boston Harbor",
    caption: "Opening the parade with the Consul General of India in Boston, chief guest, and grand marshals.",
  },
  {
    src: "/images/gallery/india-day-flag-hoisting.jpg",
    alt: "A large crowd gathered at Boston Harbor as the Indian flag is raised alongside the American flag",
    caption: "Raising the Indian and American flags together at the Boston Harbor waterfront.",
  },
  {
    src: "/images/gallery/india-day-classical-dance.jpg",
    alt: "A classical Indian dance troupe performing on an outdoor stage with Indian and American flags flying behind them",
    caption: "A classical dance performance on the harbor-side stage.",
  },
  {
    src: "/images/gallery/india-day-float-rowes-wharf.jpg",
    alt: "A parade float decorated with the Indian flag's Ashoka Chakra passing beneath Boston's Rowes Wharf archway",
    caption: "A parade float passing through Boston's Rowes Wharf archway.",
  },
  {
    src: "/images/gallery/india-day-ma-proclamation.jpg",
    alt: "FIA-NE representatives holding a signed Commonwealth of Massachusetts proclamation honoring India Day",
    caption: "Receiving a Commonwealth of Massachusetts proclamation honoring India Day.",
  },
  {
    src: "/images/gallery/india-day-band-crowd.jpg",
    alt: "A marching band and crowd holding Indian and American flags lining a Boston street during the parade",
    caption: "The marching band and crowd lining the street with Indian and American flags.",
  },
  {
    src: "/images/gallery/india-day-boston-police.jpg",
    alt: "FIA-NE organizers presenting a plaque of appreciation to Boston Police officers who supported the parade",
    caption: "Thanking the Boston Police officers who helped make the parade possible.",
  },
];
