import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { sept11Meta, sept11Photos } from "@/data/sept11";

/**
 * 9/11 remembrance section. Deliberately quieter than the celebration
 * sections around it: a dark, unadorned ground, one thin tricolor rule as the
 * only accent, no stat tiles, no hover motion on the photos.
 */
export default function Sept11Remembrance() {
  const [hero, ...rest] = sept11Photos;

  return (
    <section
      id="september-11-remembrance"
      className="relative py-28 bg-deep text-white overflow-hidden"
    >
      {/* Single restrained accent: a thin red / white / blue rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-usa-red via-white/70 to-usa-blue-light" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            {sept11Meta.eyebrow}
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] leading-tight">
            We Remember
          </h2>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
            September 11, 2001 · Never Forget
          </p>
          <p className="mt-8 text-lg text-white/80 leading-relaxed">
            {sept11Meta.intro}
          </p>
        </ScrollReveal>

        {/* Lead photo */}
        <ScrollReveal className="mt-16" animation="reveal-scale">
          <figure className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white/5">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 max-w-[75%] p-4 sm:p-5 text-sm sm:text-base text-white/90 leading-snug">
              {hero.caption}
            </figcaption>
          </figure>
        </ScrollReveal>

        {/* Supporting photos */}
        <ScrollReveal className="mt-16" animation="reveal-scale">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {rest.map((photo) => (
              <figure
                key={photo.src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 p-3 text-xs text-white/90 leading-snug">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>

        {/* Gratitude + closing */}
        <ScrollReveal className="max-w-2xl mx-auto mt-16 text-center">
          <p className="text-base text-white/75 leading-relaxed">
            {sept11Meta.gratitude}
          </p>
          <div className="mx-auto mt-10 h-px w-16 bg-white/25" />
          <p className="mt-8 text-lg font-[family-name:var(--font-playfair)] text-white/85">
            {sept11Meta.closing}
          </p>
          <a
            href="https://www.facebook.com/FIANewEngland/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white/85 border border-white/25 rounded-full hover:bg-white/10 hover:border-white/40 transition-colors"
          >
            <FaFacebook size={14} /> See more on Facebook
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
