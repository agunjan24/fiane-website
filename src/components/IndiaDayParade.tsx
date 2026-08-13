import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { indiaDayMeta, indiaDayStats, indiaDayPhotos } from "@/data/indiaDay2026";

export default function IndiaDayParade() {
  const [hero, ...rest] = indiaDayPhotos;

  return (
    <section
      id="india-day-parade"
      className="relative py-28 overflow-hidden bg-gradient-to-br from-cream via-saffron-light to-cream"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-saffron/10 rounded-full -translate-y-1/2 -translate-x-1/4 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-india-green/10 rounded-full translate-y-1/2 translate-x-1/4 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-saffron-dark/30 bg-white/70 text-xs font-bold uppercase tracking-[0.2em] text-saffron-dark">
            {indiaDayMeta.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 leading-tight">
            Festival of Freedom:{" "}
            <span className="italic text-india-green">India Day</span> at Boston Harbor
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {indiaDayMeta.intro}
          </p>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16 max-w-3xl mx-auto">
          {indiaDayStats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="h-full p-6 rounded-2xl bg-white/70 border border-saffron-dark/15 backdrop-blur-sm text-center hover:bg-white transition-colors duration-300">
                <div className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-playfair)] text-saffron-dark">
                  {stat.value}
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Photos from the parade */}
        <ScrollReveal animation="reveal-scale">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 px-1">
            <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-gray-900">
              From the Parade
            </h3>
            <a
              href="https://www.facebook.com/FIANewEngland/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start sm:self-auto shrink-0 px-5 py-2.5 text-sm font-semibold text-white bg-usa-blue rounded-full hover:bg-usa-blue-light transition-all hover:shadow-lg hover:shadow-usa-blue/25"
            >
              <FaFacebook size={14} /> See more on Facebook
            </a>
          </div>

          {/* Hero photo */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-200 mb-4">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <p className="absolute bottom-0 left-0 max-w-[70%] p-4 sm:p-5 text-sm sm:text-base text-white leading-snug">
              {hero.caption}
            </p>
          </div>

          {/* Supporting photos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {rest.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                <p className="absolute bottom-0 left-0 max-w-[75%] p-3 text-xs sm:text-sm text-white leading-snug">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
