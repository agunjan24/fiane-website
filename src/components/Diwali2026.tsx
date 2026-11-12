import { FaFacebook, FaArrowRight, FaHandHoldingHeart } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { DiwaliLeadPhoto, DiwaliMosaic } from "./DiwaliPhotos";
import {
  DIWALI_POST_URL,
  diwaliMeta,
  diwaliPartners,
  diwaliPhotos,
  diwaliQuotes,
} from "@/data/diwali2026";

/** Small inline diya (oil lamp) with a gently flickering flame. */
function Diya({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        className="diya-flame"
        d="M24 4c4 6 6.5 9.5 6.5 13.500a6.5 6.5 0 0 1-13 0C17.5 13.5 20 10 24 4Z"
        fill="#FFB347"
      />
      <path
        d="M24 11c1.8 2.8 3 4.6 3 6.600a3 3 0 0 1-6 0c0-2 1.2-3.8 3-6.600Z"
        fill="#FFF3C4"
      />
      <path
        d="M5 27h38c0 9-8.5 15-19 15S5 36 5 27Z"
        fill="#D4A843"
      />
      <path d="M3 27h42" stroke="#F3D588" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Diwali 2026 recap. Warm maroon-and-gold ground to set it apart from the
 * patriotic sections; leads with the food-drive impact rather than the party.
 */
export default function Diwali2026() {
  return (
    <section
      id="diwali-2026"
      className="relative py-28 overflow-hidden bg-gradient-to-br from-maroon via-maroon-deep to-[#1d0509] text-white noise-overlay"
    >
      {/* Lamp-light glows */}
      <div className="absolute top-0 left-1/2 w-[36rem] h-[36rem] bg-gold/15 rounded-full -translate-x-1/2 -translate-y-2/3 blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron/15 rounded-full translate-y-1/2 -translate-x-1/3 blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-usa-red/20 rounded-full translate-x-1/3 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="max-w-3xl mx-auto mb-16 text-center">
          <Diya className="mx-auto mb-5 h-12 w-12" />
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            {diwaliMeta.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] leading-tight">
            Diwali Lights Up the{" "}
            <span className="italic text-gold">Rhode Island State House</span>
          </h2>
          <p className="mt-6 text-lg text-white/75 leading-relaxed">
            {diwaliMeta.intro}
          </p>
        </ScrollReveal>

        {/* Lead photo + impact */}
        <div className="grid lg:grid-cols-5 gap-5 mb-5">
          <ScrollReveal className="lg:col-span-3" animation="reveal-scale">
            <DiwaliLeadPhoto photos={diwaliPhotos} />
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2" delay={100}>
            <div className="h-full flex flex-col justify-center p-7 sm:p-9 rounded-2xl bg-white/5 border border-gold/25 backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/15 text-gold mb-5">
                <FaHandHoldingHeart size={22} />
              </div>
              <p className="font-[family-name:var(--font-playfair)] font-bold text-gold leading-none text-6xl sm:text-7xl">
                {diwaliMeta.impact.value}
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                {diwaliMeta.impact.unit}
              </p>
              <p className="mt-1 text-sm text-white/65 leading-relaxed">
                {diwaliMeta.impact.label}
              </p>

              <h3 className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-gold/90">
                Where it went
              </h3>
              <ul className="mt-3 space-y-2">
                {diwaliPartners.map((partner) => (
                  <li
                    key={partner}
                    className="flex items-start gap-2.5 text-sm text-white/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Photo mosaic */}
        <ScrollReveal animation="reveal-scale">
          <DiwaliMosaic photos={diwaliPhotos} />
          <p className="mt-3 text-xs text-white/45 text-center">
            Tap any photo to view it full size.
          </p>
        </ScrollReveal>

        {/* Quotes */}
        <div className="grid md:grid-cols-2 gap-5 mt-16">
          {diwaliQuotes.map((quote, i) => (
            <ScrollReveal key={quote.name} animation="reveal-scale" delay={i * 100}>
              <figure className="h-full p-8 rounded-2xl bg-white/5 border-l-4 border-gold">
                <blockquote className="text-lg font-[family-name:var(--font-playfair)] italic text-white/90 leading-relaxed">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5">
                  <span className="block font-semibold text-gold">
                    {quote.name}
                  </span>
                  <span className="block text-sm text-white/55">
                    {quote.role}
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        {/* Thanks + next step */}
        <ScrollReveal className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-base text-white/75 leading-relaxed">
            {diwaliMeta.guests}
          </p>
          <p className="mt-4 text-base text-white/75 leading-relaxed">
            {diwaliMeta.thanks}
          </p>
          <div className="mx-auto mt-10 h-px w-16 bg-gold/40" />
          <p className="mt-8 text-xl font-[family-name:var(--font-playfair)] text-white">
            The giving continues this holiday season.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-deep bg-gold rounded-full hover:bg-saffron transition-all hover:shadow-lg hover:shadow-gold/25"
            >
              Join the next food drive <FaArrowRight size={12} />
            </a>
            <a
              href={DIWALI_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white/90 border border-white/25 rounded-full hover:bg-white/10 hover:border-white/40 transition-colors"
            >
              <FaFacebook size={14} /> See all photos on Facebook
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
