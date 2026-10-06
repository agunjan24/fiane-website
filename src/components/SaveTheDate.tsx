import Image from "next/image";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { saveTheDateMeta, saveTheDates } from "@/data/saveTheDate";
import { registrationHref, registrationIsExternal } from "@/lib/links";

/**
 * "Save the Date" flyers for upcoming signature events. The flyers are
 * portrait A-series posters, so they're shown uncropped (object-contain
 * aspect) rather than squeezed into the landscape photo frames used elsewhere.
 */
export default function SaveTheDate() {
  return (
    <section
      id="save-the-date"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-cream to-white"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-white to-india-green" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl mx-auto mb-14 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-usa-blue/20 bg-white text-xs font-bold uppercase tracking-[0.2em] text-usa-blue">
            {saveTheDateMeta.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 leading-tight">
            Coming Up{" "}
            <span className="italic text-saffron-dark">Next Summer</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {saveTheDateMeta.intro}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {saveTheDates.map(({ event, kicker, flyer, alt }, i) => (
            <ScrollReveal key={event.id} delay={i * 150} animation="reveal-scale">
              <article className="group h-full flex flex-col rounded-3xl bg-white shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                <a
                  href={flyer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[1/1.414] bg-gray-100"
                  aria-label={`Open full-size flyer: ${event.title}`}
                >
                  <Image
                    src={flyer}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </a>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-saffron-dark">
                    {kicker}
                  </span>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-gray-900">
                    {event.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-lg bg-saffron-light text-saffron-dark text-xs font-bold">
                    <FaCalendarAlt className="text-[10px]" />
                    {event.date}
                  </div>
                  <a
                    href={registrationHref(event)}
                    {...(registrationIsExternal(event)
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-bold text-usa-blue hover:text-saffron transition-colors"
                  >
                    Keep me posted
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
