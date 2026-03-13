import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient noise-overlay overflow-hidden"
    >
      {/* Large decorative Ashoka Chakra */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04]">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          {/* 24 spokes */}
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 + 90 * Math.cos((i * 15 * Math.PI) / 180)}
              y2={100 + 90 * Math.sin((i * 15 * Math.PI) / 180)}
              stroke="white"
              strokeWidth="1.5"
            />
          ))}
          <circle cx="100" cy="100" r="12" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* Floating accent blobs */}
      <div className="absolute top-32 right-[20%] w-72 h-72 bg-saffron/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-32 left-[10%] w-96 h-96 bg-india-green/6 rounded-full blur-[120px]" />
      <div className="absolute top-[60%] right-[40%] w-64 h-64 bg-usa-blue-light/5 rounded-full blur-[80px]" />

      {/* Star pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/[0.12]">
            <span className="w-2 h-2 bg-saffron rounded-full animate-pulse" />
            <span className="text-sm text-white/70 tracking-wide">
              Serving New England&apos;s Indian American community
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Bridging{" "}
            <span className="text-saffron italic">Heritage</span>
            <br />
            <span className="text-white/40">&</span> Building{" "}
            <span className="text-india-green italic">Community</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed">
            A multistate nonprofit uniting Indian Americans across
            Massachusetts, Rhode Island, New Hampshire, Maine, and Vermont
            through culture, service, and celebration.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#events"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-deep bg-white rounded-full hover:bg-saffron hover:text-white transition-all duration-300 shadow-lg shadow-black/20"
            >
              Upcoming Events
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-white/80 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 flex gap-12 max-w-md">
            <div>
              <div className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-saffron">
                5+
              </div>
              <div className="text-xs uppercase tracking-wider text-white/40 mt-1">
                States
              </div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-white">
                100+
              </div>
              <div className="text-xs uppercase tracking-wider text-white/40 mt-1">
                Events
              </div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-india-green">
                1000+
              </div>
              <div className="text-xs uppercase tracking-wider text-white/40 mt-1">
                Members
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade + tricolor accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="tricolor-bar" />
      </div>
    </section>
  );
}
