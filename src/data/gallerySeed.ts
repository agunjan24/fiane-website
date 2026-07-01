import { type SocialPost } from "./social";

/**
 * Seed gallery photos — real images pulled from FIANE's own Instagram/Facebook,
 * saved under /public/images/gallery so the site shows authentic event photos
 * during the demo phase with zero credentials.
 *
 * These are the Gallery's default. Once the Graph API token is configured,
 * `Gallery` swaps in the live feed automatically (see getSocialPosts / the
 * priority order in Gallery.tsx). To refresh the demo seed, drop new images in
 * that folder and update this list.
 */
export const gallerySeed: SocialPost[] = [
  {
    id: "seed-1",
    platform: "instagram",
    text: "Celebrating America's 250th with the New England community — flags, honors, and pride.",
    imageUrl: "/images/gallery/usa250-magic.jpg",
    permalink: "https://www.instagram.com/fia_newengland/",
    timestamp: "2026-06-27T16:00:00Z",
    likes: 0,
    comments: 0,
  },
  {
    id: "seed-2",
    platform: "instagram",
    text: "Independence Day festivities — music, color, and community across New England.",
    imageUrl: "/images/gallery/independence.jpg",
    permalink: "https://www.instagram.com/fia_newengland/",
    timestamp: "2026-06-27T15:00:00Z",
    likes: 0,
    comments: 0,
  },
  {
    id: "seed-3",
    platform: "instagram",
    text: "Preparation is in full flow for our USA 250 celebration.",
    imageUrl: "/images/gallery/usa250-prep.jpg",
    permalink: "https://www.instagram.com/fia_newengland/",
    timestamp: "2026-06-20T14:00:00Z",
    likes: 0,
    comments: 0,
  },
  {
    id: "seed-4",
    platform: "facebook",
    text: "Save the Date — celebrating freedom, unity & opportunity this July 4th.",
    imageUrl: "/images/gallery/freedom-unity.jpg",
    permalink: "https://www.facebook.com/FIANewEngland/",
    timestamp: "2026-06-15T12:00:00Z",
    likes: 0,
    comments: 0,
  },
  {
    id: "seed-5",
    platform: "instagram",
    text: "Community gatherings that bring New England's Indian American families together.",
    imageUrl: "/images/gallery/mlk-service.jpg",
    permalink: "https://www.instagram.com/fia_newengland/",
    timestamp: "2026-05-10T12:00:00Z",
    likes: 0,
    comments: 0,
  },
  {
    id: "seed-6",
    platform: "instagram",
    text: "Warm greetings from the Foundation of Indian Americans in New England.",
    imageUrl: "/images/gallery/fia-greetings.jpg",
    permalink: "https://www.instagram.com/fia_newengland/",
    timestamp: "2026-04-01T12:00:00Z",
    likes: 0,
    comments: 0,
  },
];
