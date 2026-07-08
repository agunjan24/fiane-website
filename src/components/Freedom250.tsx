import { FaSeedling, FaUsers, FaLeaf, FaExternalLinkAlt } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import {
  FLIPBOOK_URL,
  freedom250Meta,
  freedom250Stats,
  freedom250Pillars,
  freedom250Quotes,
} from "@/data/freedom250";

const pillarIcons = [FaSeedling, FaUsers, FaLeaf];
const pillarAccents = [
  "bg-saffron/15 text-saffron",
  "bg-white/10 text-white",
  "bg-india-green/20 text-green-400",
];

export default function Freedom250() {
  return (
    <section
      id="freedom250"
      className="relative py-28 overflow-hidden bg-gradient-to-br from-usa-blue via-india-navy to-deep noise-overlay"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-india-green/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            {freedom250Meta.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-white leading-tight">
            250 Years of Freedom,{" "}
            <span className="italic text-gold">250 Trees</span> for the Future
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            {freedom250Meta.intro}
          </p>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {freedom250Stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-colors duration-300">
                <div className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gold">
                  {stat.value}
                </div>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pillars: future, community, environment */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {freedom250Pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <ScrollReveal key={pillar.title} delay={i * 100}>
                <div className="h-full p-7 rounded-2xl bg-white/5 border border-white/10">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${pillarAccents[i]}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Quotes */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {freedom250Quotes.map((quote, i) => (
            <ScrollReveal key={quote.name} animation="reveal-scale" delay={i * 100}>
              <figure className="h-full p-8 rounded-2xl bg-white/5 border-l-4 border-gold">
                <blockquote className="text-lg font-[family-name:var(--font-playfair)] italic text-white/90 leading-relaxed">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5">
                  <span className="block font-semibold text-gold">
                    {quote.name}
                  </span>
                  <span className="block text-sm text-white/50">
                    {quote.role}
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        {/* Flipbook: the full photo story */}
        <ScrollReveal animation="reveal-scale">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 px-2">
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-white">
                  Relive the Celebration
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Flip through the full photo story of the day — the tree
                  planting, the veterans&rsquo; tribute, and the balloon release.
                </p>
              </div>
              <a
                href={FLIPBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start sm:self-auto shrink-0 px-5 py-2.5 text-sm font-semibold text-deep bg-gold rounded-full hover:bg-saffron transition-all hover:shadow-lg hover:shadow-gold/25"
              >
                Open the Flipbook <FaExternalLinkAlt size={12} />
              </a>
            </div>
            <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden bg-deep">
              <iframe
                src={FLIPBOOK_URL}
                title="FIANE 250th Independence Day celebration flipbook"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
