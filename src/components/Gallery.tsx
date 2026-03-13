"use client";

import { FaInstagram } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const galleryItems = [
  {
    title: "India Day Parade",
    subtitle: "Boston Harbor, 2025",
    gradient: "from-saffron via-saffron-dark to-usa-red",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square",
    size: "text-2xl sm:text-3xl",
  },
  {
    title: "Women's Day",
    subtitle: "JFK Library, 2025",
    gradient: "from-purple-600 via-pink-500 to-rose-400",
    span: "",
    aspect: "aspect-square",
    size: "text-lg",
  },
  {
    title: "Health Camp",
    subtitle: "MLK Day, Burlington",
    gradient: "from-usa-blue via-usa-blue-light to-india-navy",
    span: "",
    aspect: "aspect-square",
    size: "text-lg",
  },
  {
    title: "Republic Day",
    subtitle: "Cultural Performances",
    gradient: "from-saffron to-amber-400",
    span: "md:col-span-2",
    aspect: "aspect-[2/1]",
    size: "text-xl",
  },
  {
    title: "Diwali",
    subtitle: "Festival of Lights",
    gradient: "from-amber-600 via-orange-500 to-saffron",
    span: "",
    aspect: "aspect-square",
    size: "text-lg",
  },
  {
    title: "Community Service",
    subtitle: "Food Pantry Drive",
    gradient: "from-india-green via-emerald-500 to-teal-400",
    span: "",
    aspect: "aspect-square",
    size: "text-lg",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-cream relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-india-green/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-saffron">
                Our Moments
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 leading-tight">
                Event <span className="italic text-usa-blue">Gallery</span>
              </h2>
            </div>
            <a
              href="https://www.instagram.com/fia_newengland/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-usa-blue text-white font-semibold rounded-full hover:bg-usa-blue-light transition-colors text-sm self-start sm:self-auto"
            >
              <FaInstagram size={16} />
              More on Instagram
            </a>
          </div>
        </ScrollReveal>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, index) => (
            <ScrollReveal
              key={index}
              delay={index * 80}
              animation="reveal-scale"
              className={item.span}
            >
              <div
                className={`group relative ${item.aspect} rounded-2xl bg-gradient-to-br ${item.gradient} overflow-hidden cursor-pointer w-full h-full`}
              >
                {/* Noise texture */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay noise-overlay" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                {/* Content - visible on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3
                    className={`${item.size} font-bold font-[family-name:var(--font-playfair)] text-center`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 text-center mt-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom label - always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
