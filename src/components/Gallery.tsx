"use client";

import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useSocialPhotos } from "@/hooks/useSocialPhotos";
import ScrollReveal from "./ScrollReveal";

// Bento layout slots — the first tile is large, the rest fill around it.
// Applied in order to whatever photos come back from the social feed.
const layout = [
  { span: "md:col-span-2 md:row-span-2", aspect: "aspect-square" },
  { span: "", aspect: "aspect-square" },
  { span: "", aspect: "aspect-square" },
  { span: "md:col-span-2", aspect: "aspect-[2/1]" },
  { span: "", aspect: "aspect-square" },
  { span: "", aspect: "aspect-square" },
];

// Shown only when no live photos are available (no token / mock data), so the
// section still looks intentional rather than empty.
const fallbackTiles = [
  { title: "India Day Parade", gradient: "from-saffron via-saffron-dark to-usa-red", span: "md:col-span-2 md:row-span-2", aspect: "aspect-square" },
  { title: "Women's Day", gradient: "from-usa-red via-rose-500 to-usa-blue", span: "", aspect: "aspect-square" },
  { title: "Health Camp", gradient: "from-usa-blue via-usa-blue-light to-india-navy", span: "", aspect: "aspect-square" },
  { title: "Republic Day", gradient: "from-india-green via-saffron to-usa-red", span: "md:col-span-2", aspect: "aspect-[2/1]" },
  { title: "Diwali", gradient: "from-saffron via-gold to-usa-red", span: "", aspect: "aspect-square" },
  { title: "Community Service", gradient: "from-india-green via-emerald-500 to-usa-blue", span: "", aspect: "aspect-square" },
];

function truncate(text: string, max = 90): string {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max).trimEnd()}…` : clean;
}

export default function Gallery() {
  const photos = useSocialPhotos(layout.length);
  const hasPhotos = photos.length > 0;

  return (
    <section id="gallery" className="py-28 bg-cream relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-india-green/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-[100px]" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-usa-blue/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-usa-red">
                Our Moments
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 leading-tight">
                Event <span className="italic text-india-green">Gallery</span>
              </h2>
              <p className="mt-3 text-gray-500 max-w-md">
                Straight from our social feeds — updated automatically as we post.
              </p>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {hasPhotos
            ? photos.map((post, index) => {
                const slot = layout[index] ?? layout[0];
                return (
                  <ScrollReveal
                    key={post.id}
                    delay={index * 80}
                    animation="reveal-scale"
                    className={slot.span}
                  >
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative block ${slot.aspect} rounded-2xl overflow-hidden cursor-pointer w-full h-full bg-gray-200`}
                    >
                      <Image
                        src={post.imageUrl as string}
                        alt={post.text ? truncate(post.text, 60) : "FIANE event photo"}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Platform badge */}
                      <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {post.platform === "facebook" ? (
                          <FaFacebook size={13} />
                        ) : (
                          <FaInstagram size={13} />
                        )}
                      </div>
                      {/* Caption overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {post.text && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <p className="text-sm text-white leading-snug">
                            {truncate(post.text)}
                          </p>
                        </div>
                      )}
                    </a>
                  </ScrollReveal>
                );
              })
            : fallbackTiles.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  delay={index * 80}
                  animation="reveal-scale"
                  className={item.span}
                >
                  <div
                    className={`group relative ${item.aspect} rounded-2xl bg-gradient-to-br ${item.gradient} overflow-hidden w-full h-full`}
                  >
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay noise-overlay" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
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
