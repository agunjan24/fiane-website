import { type SocialPost } from "./social";

/**
 * Seed gallery photos — real images pulled from FIANE's own Instagram/Facebook,
 * saved under /public/images/gallery so the site shows authentic event photos
 * during the demo phase with zero credentials.
 *
 * These are the default for the Gallery and HeroCarousel. Once the Graph API
 * token is configured, the live feed replaces them automatically (see
 * useSocialPhotos). To refresh the demo seed, drop new images in that folder
 * and update this list. Strongest real photos are ordered first.
 */
export const gallerySeed: SocialPost[] = [
  {
    id: "seed-india-day-parade",
    platform: "facebook",
    text: "The 5th International India Day Parade at Boston Harbor.",
    imageUrl: "/images/gallery/india-day-welcome-banner.jpg",
    permalink: "https://www.facebook.com/FIANewEngland/",
    timestamp: "2026-08-09T18:00:00Z",
    likes: 0,
    comments: 0,
  },
  {
    id: "seed-celebration",
    platform: "instagram",
    text: "Honoring our community at FIANE's America's 250th celebration.",
    imageUrl: "/images/gallery/community-celebration.jpg",
    permalink: "https://www.instagram.com/fia_newengland/",
    timestamp: "2026-06-27T16:00:00Z",
    likes: 0,
    comments: 0,
  },
  {
    id: "seed-independence",
    platform: "instagram",
    text: "Independence Day festivities across New England.",
    imageUrl: "/images/gallery/independence-day.jpg",
    permalink: "https://www.instagram.com/fia_newengland/",
    timestamp: "2026-06-27T15:00:00Z",
    likes: 0,
    comments: 0,
  },
  {
    id: "seed-marathon",
    platform: "instagram",
    text: "",
    imageUrl: "/images/gallery/boston-marathon.jpg",
    permalink: "https://www.instagram.com/fia_newengland/",
    timestamp: "2026-04-20T14:00:00Z",
    likes: 0,
    comments: 0,
  },
  {
    id: "seed-decor",
    platform: "instagram",
    text: "Flying the colors — Red, White & Blue for the Fourth.",
    imageUrl: "/images/gallery/patriotic-decor.jpg",
    permalink: "https://www.instagram.com/fia_newengland/",
    timestamp: "2026-06-20T13:00:00Z",
    likes: 0,
    comments: 0,
  },
  {
    id: "seed-trees",
    platform: "instagram",
    text: "The FIA 250 Initiative: planting 250 trees for a greener New England.",
    imageUrl: "/images/gallery/tree-planting.jpg",
    permalink: "https://www.instagram.com/fia_newengland/",
    timestamp: "2026-05-10T12:00:00Z",
    likes: 0,
    comments: 0,
  },
  {
    id: "seed-india-day-police",
    platform: "facebook",
    text: "Thanking the Boston Police officers who supported the parade.",
    imageUrl: "/images/gallery/india-day-boston-police.jpg",
    permalink: "https://www.facebook.com/FIANewEngland/",
    timestamp: "2026-08-09T19:00:00Z",
    likes: 0,
    comments: 0,
  },
];
