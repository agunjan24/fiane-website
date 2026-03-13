export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  isPast: boolean;
  registrationUrl?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Holi Festival Celebration 2026",
    date: "March 28, 2026",
    time: "11:00 AM - 4:00 PM",
    location: "Boston Common, Boston, MA",
    description:
      "Join us for a vibrant Holi celebration! Enjoy colors, music, dance performances, and traditional Indian food. Fun for the whole family.",
    image: "/images/holi.svg",
    isPast: false,
    registrationUrl: "#",
  },
  {
    id: "2",
    title: "Community Health & Wellness Camp",
    date: "April 12, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "Burlington Community Center, Burlington, MA",
    description:
      "Free health screenings, wellness workshops, and consultations with healthcare professionals. Open to all community members.",
    image: "/images/health.svg",
    isPast: false,
    registrationUrl: "#",
  },
  {
    id: "3",
    title: "5th International India Day Parade",
    date: "August 9, 2026",
    time: "10:00 AM - 5:00 PM",
    location: "Boston Harbor, Christopher Columbus Waterfront Park",
    description:
      "Celebrate India's 80th Independence Day with our grand parade featuring cultural performances, floats, food stalls, and community pride.",
    image: "/images/parade.svg",
    isPast: false,
    registrationUrl: "#",
  },
  {
    id: "4",
    title: "MLK Day Community Health Camp",
    date: "January 19, 2026",
    time: "9:00 AM - 1:00 PM",
    location: "Burlington, MA",
    description:
      "Free community health camp organized in honor of Martin Luther King Jr. Day, featuring health screenings and wellness resources.",
    image: "/images/health.svg",
    isPast: true,
  },
  {
    id: "5",
    title: "4th International India Day Parade",
    date: "August 10, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Boston Harbor, Christopher Columbus Waterfront Park",
    description:
      "A celebration of India's 79th Independence Day themed 'United World, Shared Dreams: Peace, Prosperity, and Progress.'",
    image: "/images/parade.svg",
    isPast: true,
  },
  {
    id: "6",
    title: "International Women's Day Celebration",
    date: "March 8, 2025",
    time: "5:00 PM - 9:00 PM",
    location: "JFK Presidential Library and Museum, Boston",
    description:
      "Honoring women leaders from diverse fields with cultural performances, keynote speakers, and networking.",
    image: "/images/women-day.svg",
    isPast: true,
  },
];
