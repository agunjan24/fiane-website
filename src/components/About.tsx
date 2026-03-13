import { FaHandsHelping, FaGlobeAmericas, FaHeart, FaUsers } from "react-icons/fa";

const values = [
  {
    icon: FaGlobeAmericas,
    title: "Cultural Bridge",
    description:
      "Celebrating the rich heritage of India while embracing the spirit of America, creating a vibrant cultural bridge across New England.",
    color: "text-saffron",
    bg: "bg-saffron/10",
  },
  {
    icon: FaHandsHelping,
    title: "Community Service",
    description:
      "Organizing health camps, food drives, and educational programs that serve both the Indian American community and our broader neighborhoods.",
    color: "text-india-green",
    bg: "bg-india-green/10",
  },
  {
    icon: FaHeart,
    title: "Unity & Pride",
    description:
      "Fostering a sense of pride and belonging among Indian Americans through celebrations like the India Day Parade and cultural festivals.",
    color: "text-usa-red",
    bg: "bg-usa-red/10",
  },
  {
    icon: FaUsers,
    title: "Multistate Reach",
    description:
      "Extending our presence across Massachusetts, Rhode Island, New Hampshire, Maine, and Vermont to ensure every voice is heard.",
    color: "text-usa-blue",
    bg: "bg-usa-blue/10",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-saffron">
            Who We Are
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            About FIANE
          </h2>
          <div className="mt-4 flex justify-center gap-1">
            <span className="h-1 w-8 rounded-full bg-saffron" />
            <span className="h-1 w-8 rounded-full bg-white border border-gray-200" />
            <span className="h-1 w-8 rounded-full bg-india-green" />
          </div>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            The Foundation of Indian Americans in New England (FIANE) is a
            grassroots non-profit organization dedicated to the Indian American
            diaspora in the New England region. We ensure that community
            initiatives and issues core to Indian Americans receive the
            attention and support they deserve.
          </p>
        </div>

        {/* Mission statement */}
        <div className="relative mb-20 rounded-2xl bg-gradient-to-r from-usa-blue to-india-navy p-8 sm:p-12 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl">
              To serve as a unifying force for the Indian American community in
              New England, preserving cultural heritage while building bridges
              of understanding, promoting civic engagement, and contributing
              to the social fabric of our shared American home.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="group p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${value.bg} ${value.color} mb-4 group-hover:scale-110 transition-transform`}
              >
                <value.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
