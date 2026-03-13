import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-saffron/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-india-green/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-usa-blue-light/5 rounded-full blur-3xl" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 bg-saffron rounded-full animate-pulse" />
            <span className="text-sm text-white/90">Serving the Indian American community since establishment</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Bridging{" "}
            <span className="text-saffron">Heritage</span>
            <br />& Building{" "}
            <span className="text-india-green">Community</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            Foundation of Indian Americans in New England — a multistate nonprofit
            uniting Indian Americans across Massachusetts, Rhode Island,
            New Hampshire, Maine, and Vermont through culture, service, and celebration.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#events"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-usa-blue bg-white rounded-full hover:bg-cream transition-colors shadow-lg shadow-black/20"
            >
              Upcoming Events
              <FaArrowRight className="text-sm" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <div className="text-3xl font-bold text-saffron">5+</div>
              <div className="text-sm text-white/60 mt-1">States Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-white/60 mt-1">Events Hosted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-india-green">1000+</div>
              <div className="text-sm text-white/60 mt-1">Community Members</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
