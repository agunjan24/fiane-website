import { FaHandsHelping, FaGlobeAmericas, FaHeart, FaUsers } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: FaGlobeAmericas,
    title: "Cultural Bridge",
    description:
      "Celebrating the rich heritage of India while embracing the spirit of America, creating a vibrant cultural bridge across New England.",
    accent: "border-saffron/30 hover:border-saffron",
    iconBg: "bg-saffron/10 text-saffron",
  },
  {
    icon: FaHandsHelping,
    title: "Community Service",
    description:
      "Organizing health camps, food drives, and educational programs that serve both the Indian American community and our broader neighborhoods.",
    accent: "border-india-green/30 hover:border-india-green",
    iconBg: "bg-india-green/10 text-india-green",
  },
  {
    icon: FaHeart,
    title: "Unity & Pride",
    description:
      "Fostering a sense of pride and belonging among Indian Americans through celebrations like the India Day Parade and cultural festivals.",
    accent: "border-usa-red/30 hover:border-usa-red",
    iconBg: "bg-usa-red/10 text-usa-red",
  },
  {
    icon: FaUsers,
    title: "Multistate Reach",
    description:
      "Extending our presence across Massachusetts, Rhode Island, New Hampshire, Maine, and Vermont to ensure every voice is heard.",
    accent: "border-usa-blue/30 hover:border-usa-blue",
    iconBg: "bg-usa-blue/10 text-usa-blue",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white diagonal-lines">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-saffron">
            Who We Are
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 leading-tight">
            A Grassroots Force for{" "}
            <span className="italic text-usa-blue">Community</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            The Foundation of Indian Americans in New England (FIANE) is a
            grassroots non-profit dedicated to the Indian American diaspora.
            We ensure that community initiatives and issues core to Indian
            Americans receive the attention and support they deserve.
          </p>
        </ScrollReveal>

        {/* Mission statement */}
        <ScrollReveal animation="reveal-scale" className="relative mb-20">
          <div className="rounded-3xl bg-gradient-to-br from-usa-blue via-india-navy to-deep p-10 sm:p-14 text-white overflow-hidden noise-overlay">
            <div className="absolute top-0 right-0 w-80 h-80 bg-saffron/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-india-green/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-[80px]" />
            <div className="relative max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-saffron/80">
                Our Mission
              </span>
              <p className="mt-4 text-xl sm:text-2xl font-[family-name:var(--font-playfair)] text-white/90 leading-relaxed">
                To serve as a unifying force for the Indian American community
                in New England, preserving cultural heritage while building
                bridges of understanding, promoting civic engagement, and
                contributing to the social fabric of our shared American home.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 100}>
              <div
                className={`group p-7 rounded-2xl border-2 ${value.accent} bg-white hover:shadow-xl transition-all duration-300 h-full`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${value.iconBg} mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon size={22} />
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
