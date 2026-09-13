export interface Sept11Photo {
  src: string;
  alt: string;
  caption: string;
}

export const sept11Meta = {
  eyebrow: "September 11, 2026 · Westborough Fire Station · 25th Anniversary",
  intro:
    "On the twenty-fifth anniversary of September 11, FIA New England gathered " +
    "at the Westborough Fire Station with the town's firefighters and members " +
    "of our community. With the flag at half-staff, we stood together in " +
    "silence, laid wreaths at the steel-beam memorial, and honored the " +
    "innocent lives lost — and the first responders who ran toward danger " +
    "so that others might live.",
  gratitude:
    "Our thanks to the Westborough Fire Department and to every first " +
    "responder who stood with us — and who stands watch over our " +
    "communities every day.",
  closing: "No matter how many years pass, you will always remain in our hearts.",
};

export const sept11Photos: Sept11Photo[] = [
  {
    src: "/images/gallery/sept11-memorial-wreaths.jpg",
    alt: "Wreaths of red, white, and blue flowers and small American flags at the base of the steel-beam 9/11 memorial outside the Westborough Fire Station",
    caption: "Wreaths at the steel-beam memorial, Westborough Fire Station.",
  },
  {
    src: "/images/gallery/sept11-wreath-laying.jpg",
    alt: "A firefighter and a FIANE member placing a wreath of red, white, and blue flowers at the base of the steel-beam memorial",
    caption: "Laying the wreath together.",
  },
  {
    src: "/images/gallery/sept11-firefighters.jpg",
    alt: "Three Westborough firefighters in red shirts standing at attention holding small American flags",
    caption: "Westborough firefighters standing with the community.",
  },
  {
    src: "/images/gallery/sept11-moment-of-silence.jpg",
    alt: "Community members standing in silence with hands over their hearts as the American flag flies at half-staff",
    caption: "A moment of silence beneath the flag at half-staff.",
  },
  {
    src: "/images/gallery/sept11-flag-presentation.jpg",
    alt: "A firefighter handing a small American flag to a community elder beside the memorial plaque",
    caption: "Sharing the flag at the memorial plaque.",
  },
  {
    src: "/images/gallery/sept11-community-gathered.jpg",
    alt: "Community members and firefighters lined up along the memorial walkway as the ceremony begins",
    caption: "The community gathers as the ceremony begins.",
  },
  {
    src: "/images/gallery/sept11-group.jpg",
    alt: "FIANE members and Westborough community members gathered together in front of the 9/11 memorial",
    caption: "Gathered together in remembrance.",
  },
];
