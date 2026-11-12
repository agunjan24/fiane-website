import { type LightboxPhoto } from "@/components/PhotoLightbox";

export interface DiwaliPhoto extends LightboxPhoto {
  /** Mosaic tile shape. Defaults to a single landscape cell. */
  shape?: "wide" | "tall";
  /** Tailwind object-position class for the cropped tile (full image shows in the lightbox). */
  focus?: string;
}

export interface DiwaliQuote {
  text: string;
  name: string;
  role: string;
}

/** The Facebook post these photos and quotes come from. */
export const DIWALI_POST_URL =
  "https://www.facebook.com/FIANewEngland/posts/pfbid0efk8pFTPE43P7DYC6wrRvhZVEq5vQ3nP6LENtvf1y9u7ArGtCYrwXcMqrp8gHq6pl";

export const diwaliMeta = {
  eyebrow: "Diwali 2026 · November 7 · Rhode Island State House",
  intro:
    "FIA New England brought the Festival of Lights to the Rhode Island " +
    "State House for our annual Diwali Celebration & Food Donation Ceremony. " +
    "The evening opened with the traditional aarti and lighting of the lamp, " +
    "filled the hall with dance and a children's Ramayana, and ended the way " +
    "Diwali should — by carrying light to neighbors who need it.",
  impact: {
    value: "20,000+",
    unit: "pounds of food",
    label: "donated to Rhode Island families through the Diwali Food Drive",
  },
  guests:
    "We were honored to be joined by Congressman Gabe Amo, the Consul General " +
    "of India in Boston, Shri Raghuram S., East Providence Mayor Bob DaSilva, " +
    "Lincoln Town Administrator Philip G. Gould, and representatives of " +
    "Governor Dan McKee and Senator Jack Reed.",
  thanks:
    "Thank you to Scouts Rhode Island, to the performers who lit up the " +
    "evening, and to every donor and volunteer who made the food drive possible.",
};

/** Organizations that received the food donation. */
export const diwaliPartners: string[] = [
  "Rhode Island Community Food Bank",
  "East Providence Senior Center",
  "Manville Share Shack Food Bank",
  "Heritage Hills Rehab & Health Center",
];

export const diwaliQuotes: DiwaliQuote[] = [
  {
    text:
      "When each of us, in our own capacity, brings light into the life of " +
      "someone who needs it most, the purpose of our Diwali celebration is fulfilled.",
    name: "Abhishek Singh",
    role: "President, FIA New England",
  },
  {
    text:
      "A celebration with a purpose is truly commendable… Empathy and " +
      "compassion for those in need is the greatest charitable work of all.",
    name: "Congressman Gabe Amo",
    role: "U.S. Representative, Rhode Island's 1st District",
  },
];

/** First photo is the lead image; the rest fill the mosaic in this order. */
export const diwaliPhotos: DiwaliPhoto[] = [
  {
    src: "/images/gallery/diwali-lamp-lighting.jpg",
    alt: "Two men lighting a brass oil lamp on a white pedestal beside a Happy Diwali banner draped in red and pink, with a peacock lamp glowing in the foreground",
    caption: "Lighting the lamp to open the celebration.",
    width: 1800,
    height: 1200,
  },
  {
    src: "/images/gallery/diwali-classical-dance.jpg",
    alt: "A dancer in a yellow and white costume with a marigold garland mid-pose on a rangoli in front of the Happy Diwali banner",
    caption: "A classical dance on the rangoli.",
    width: 1350,
    height: 1800,
    shape: "tall",
    focus: "object-[50%_40%]",
  },
  {
    src: "/images/gallery/diwali-ramayana-children.jpg",
    alt: "Children in Ramayana costumes — Rama, Sita, Hanuman and the vanar sena — seated on the floor of the State House hall with families and guests standing behind them",
    caption: "Our little stars brought the Ramayana to life.",
    width: 1800,
    height: 1013,
    shape: "wide",
    focus: "object-[50%_70%]",
  },
  {
    src: "/images/gallery/diwali-food-drive-ribbon.jpg",
    alt: "Elected officials and FIANE leaders cutting a red ribbon beside a Happy Diwali Food Drive sign",
    caption: "Cutting the ribbon on the Diwali Food Drive.",
    width: 1800,
    height: 1200,
  },
  {
    src: "/images/gallery/diwali-dignitaries-rangoli.jpg",
    alt: "Guests of honor holding framed keepsakes, standing around a flower rangoli in front of the Diwali stage and American flags",
    caption: "Honoring the guests who stood with us.",
    width: 1800,
    height: 1200,
  },
  {
    src: "/images/gallery/diwali-food-drive-table.jpg",
    alt: "A FIA New England table stacked with wrapped donation boxes under a Happy Diwali Food Drive sign",
    caption: "Donation boxes ready to go out.",
    width: 1800,
    height: 1200,
  },
  {
    src: "/images/gallery/diwali-state-room.jpg",
    alt: "A wide view of the gilded State House hall, with children in costume gathered on the floor beneath a tall portrait and the Diwali stage",
    caption: "Diwali beneath the gilded ceiling of the State House.",
    width: 1350,
    height: 1800,
    shape: "tall",
    focus: "object-[50%_75%]",
  },
  {
    src: "/images/gallery/diwali-community-group.jpg",
    alt: "A large group of FIANE families, volunteers and guests in festive dress posing together in front of the Diwali stage",
    caption: "The FIA New England family, together for Diwali.",
    width: 1800,
    height: 1013,
    shape: "wide",
  },
  {
    src: "/images/gallery/diwali-backdrop-rangoli.jpg",
    alt: "The Happy Diwali stage banner framed by pink drapes, marigold garlands and American flags, with a flower rangoli on the floor",
    caption: "Marigolds, rangoli and the stage set for the evening.",
    width: 1800,
    height: 1200,
  },
];
