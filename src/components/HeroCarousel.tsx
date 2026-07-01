"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useSocialPhotos } from "@/hooks/useSocialPhotos";
import ScrollReveal from "./ScrollReveal";

const ROTATE_MS = 5000;

export default function HeroCarousel() {
  const photos = useSocialPhotos(6);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = photos.length;

  const next = useCallback(
    () => setActive((i) => (i + 1) % count),
    [count]
  );
  const prev = useCallback(
    () => setActive((i) => (i - 1 + count) % count),
    [count]
  );

  // Auto-advance
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(next, ROTATE_MS);
    return () => clearInterval(id);
  }, [next, paused, count]);

  if (count === 0) return null;

  // Clamp at render so the index stays valid if the photo set changes (seed -> live).
  const idx = active % count;

  return (
    <section className="relative bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-usa-red">
              Latest from FIANE
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 leading-tight">
              See us <span className="italic text-india-green">in action</span>
            </h2>
          </div>
          {/* Controls (desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prev}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-usa-blue hover:border-usa-blue/30 transition-all"
              aria-label="Previous photo"
            >
              <FaChevronLeft size={13} />
            </button>
            <button
              onClick={next}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-usa-blue hover:border-usa-blue/30 transition-all"
              aria-label="Next photo"
            >
              <FaChevronRight size={13} />
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal
          animation="reveal-scale"
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 bg-gray-200 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
        >
          <div
            className="absolute inset-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {photos.map((post, i) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className={`group absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  i === idx
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={i !== idx}
                tabIndex={i === idx ? 0 : -1}
              >
                <Image
                  src={post.imageUrl as string}
                  alt={post.text ? post.text.slice(0, 80) : "FIANE event photo"}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 1152px"
                  className="object-cover"
                />
                {/* Scrim for caption legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

                {/* Platform badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-semibold">
                  {post.platform === "facebook" ? (
                    <FaFacebook size={12} />
                  ) : (
                    <FaInstagram size={12} />
                  )}
                  <span className="hidden sm:inline">
                    {post.platform === "facebook" ? "Facebook" : "Instagram"}
                  </span>
                </div>

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                  <div className="max-w-2xl">
                    <p className="text-white text-sm sm:text-lg font-medium leading-snug line-clamp-2 sm:line-clamp-3">
                      {post.text}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-white/80 group-hover:text-white transition-colors">
                      View post
                      <FaExternalLinkAlt size={10} />
                    </span>
                  </div>
                </div>
              </a>
            ))}

            {/* Dots */}
            <div className="absolute bottom-4 right-4 sm:right-8 flex gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === idx
                      ? "w-8 bg-white"
                      : "w-3 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>

            {/* Auto-advance progress bar */}
            {!paused && count > 1 && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10">
                <div
                  key={idx}
                  className="h-full bg-saffron"
                  style={{ animation: `hero-progress ${ROTATE_MS}ms linear forwards` }}
                />
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @keyframes hero-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
