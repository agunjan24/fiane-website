export interface SocialPost {
  id: string;
  platform: "facebook" | "instagram";
  text: string;
  imageUrl: string | null;
  permalink: string;
  timestamp: string;
  likes: number;
  comments: number;
}

// Mock data — will be replaced with real API data once Facebook App token is configured
export const mockSocialPosts: SocialPost[] = [
  {
    id: "fb-1",
    platform: "facebook",
    text: "What a wonderful turnout at our community health camp in Burlington! Over 200 community members received free health screenings. Thank you to all the volunteers and healthcare professionals who made this possible. Together, we make New England healthier!",
    imageUrl: null,
    permalink: "https://www.facebook.com/FIANewEngland/",
    timestamp: "2026-01-19T14:30:00Z",
    likes: 142,
    comments: 23,
  },
  {
    id: "fb-2",
    platform: "facebook",
    text: "Exciting news! Registration is now open for our Holi Festival Celebration 2026 at Boston Common on March 28th. Join us for a day filled with colors, music, dance, and delicious food. Bring your family and friends — let's celebrate the festival of colors together! 🎨",
    imageUrl: null,
    permalink: "https://www.facebook.com/FIANewEngland/",
    timestamp: "2026-03-01T10:00:00Z",
    likes: 234,
    comments: 45,
  },
  {
    id: "ig-1",
    platform: "instagram",
    text: "Throwback to our incredible India Day Parade at Boston Harbor! 🇮🇳🇺🇸 The energy, the colors, the unity — this is what FIANE is all about. Can't wait for the 5th edition this August! #IndiaDay #BostonHarbor #FIANE #IndianAmerican",
    imageUrl: null,
    permalink: "https://www.instagram.com/fia_newengland/",
    timestamp: "2026-02-15T16:00:00Z",
    likes: 387,
    comments: 31,
  },
  {
    id: "ig-2",
    platform: "instagram",
    text: "Our volunteers spent MLK Day giving back to the community with free wellness resources and health screenings. Service is at the heart of everything we do. 💪❤️ #MLKDay #CommunityService #FIANE #NewEngland",
    imageUrl: null,
    permalink: "https://www.instagram.com/fia_newengland/",
    timestamp: "2026-01-19T18:00:00Z",
    likes: 198,
    comments: 17,
  },
];
