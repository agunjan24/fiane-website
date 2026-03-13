"use client";

import { FaInstagram } from "react-icons/fa";

const galleryItems = [
  {
    title: "India Day Parade 2025",
    description: "Celebrating at Boston Harbor",
    gradient: "from-saffron to-usa-red",
    icon: "🇮🇳",
  },
  {
    title: "Women's Day 2025",
    description: "JFK Presidential Library",
    gradient: "from-purple-500 to-pink-500",
    icon: "🌸",
  },
  {
    title: "MLK Day Health Camp",
    description: "Burlington, MA",
    gradient: "from-usa-blue to-india-navy",
    icon: "🏥",
  },
  {
    title: "Republic Day Celebration",
    description: "Cultural Performances",
    gradient: "from-saffron via-white to-india-green",
    icon: "🎭",
  },
  {
    title: "Community Fundraiser",
    description: "Food Pantry Donation Drive",
    gradient: "from-india-green to-teal-500",
    icon: "🤝",
  },
  {
    title: "Diwali Celebration",
    description: "Festival of Lights",
    gradient: "from-amber-500 to-saffron",
    icon: "🪔",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-saffron">
            Our Moments
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Gallery
          </h2>
          <div className="mt-4 flex justify-center gap-1">
            <span className="h-1 w-8 rounded-full bg-saffron" />
            <span className="h-1 w-8 rounded-full bg-white border border-gray-200" />
            <span className="h-1 w-8 rounded-full bg-india-green" />
          </div>
          <p className="mt-6 text-lg text-gray-600">
            Highlights from our events and celebrations. Follow us on{" "}
            <a
              href="https://www.instagram.com/fia_newengland/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:text-saffron-dark font-medium"
            >
              Instagram
            </a>{" "}
            for more photos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative aspect-square rounded-2xl bg-gradient-to-br ${item.gradient} overflow-hidden cursor-pointer`}
            >
              {/* Overlay content */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-white p-4">
                <span className="text-4xl mb-3">{item.icon}</span>
                <h3 className="text-lg font-bold text-center">{item.title}</h3>
                <p className="text-sm text-white/80 text-center mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/fia_newengland/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-usa-blue text-white font-semibold rounded-full hover:bg-usa-blue-light transition-colors"
          >
            <FaInstagram size={20} />
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
