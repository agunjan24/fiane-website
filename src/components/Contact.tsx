"use client";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white diagonal-lines">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-saffron">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 leading-tight mb-16">
            Contact & <span className="italic text-usa-blue">Support</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            {/* Donate card */}
            <ScrollReveal>
              <div className="rounded-3xl bg-gradient-to-br from-saffron via-saffron-dark to-usa-red p-8 sm:p-10 text-white mb-8 relative overflow-hidden noise-overlay">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-[60px]" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <FaHeart size={20} />
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)]">
                      Support FIANE
                    </h3>
                  </div>
                  <p className="text-white/85 mb-6 leading-relaxed">
                    Your generous donations help us organize community events,
                    health camps, cultural celebrations, and support services
                    across New England.
                  </p>
                  <a
                    href="mailto:president@fianewengland.org?subject=Donation Inquiry"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-white text-saffron-dark font-bold rounded-full hover:bg-cream transition-all hover:shadow-lg text-sm"
                  >
                    <FaHeart className="text-xs" />
                    Donate Now
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact info */}
            <ScrollReveal delay={100}>
              <div className="space-y-3">
                <a
                  href="mailto:president@fianewengland.org"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-saffron/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-usa-blue/8 flex items-center justify-center text-usa-blue">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      Email
                    </div>
                    <div className="font-semibold text-gray-900 text-sm">
                      president@fianewengland.org
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+15738211785"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-saffron/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-india-green/8 flex items-center justify-center text-india-green">
                    <FaPhone size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      Phone
                    </div>
                    <div className="font-semibold text-gray-900 text-sm">
                      +1 (573) 821-1785
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100">
                  <div className="w-11 h-11 rounded-xl bg-saffron/8 flex items-center justify-center text-saffron">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      Region
                    </div>
                    <div className="font-semibold text-gray-900 text-sm">
                      Greater Boston / New England
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact form */}
          <ScrollReveal delay={200}>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 mb-6">
                Send us a Message
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (
                    form.elements.namedItem("name") as HTMLInputElement
                  ).value;
                  const email = (
                    form.elements.namedItem("email") as HTMLInputElement
                  ).value;
                  const message = (
                    form.elements.namedItem("message") as HTMLTextAreaElement
                  ).value;
                  window.location.href = `mailto:president@fianewengland.org?subject=Website Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
                }}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/10 outline-none transition-all text-gray-900 bg-gray-50/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/10 outline-none transition-all text-gray-900 bg-gray-50/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/10 outline-none transition-all text-gray-900 bg-gray-50/50"
                  >
                    <option>General Inquiry</option>
                    <option>Volunteer</option>
                    <option>Event Partnership</option>
                    <option>Donation</option>
                    <option>Membership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/10 outline-none transition-all resize-none text-gray-900 bg-gray-50/50"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-usa-blue text-white font-bold rounded-xl hover:bg-usa-blue-light transition-all hover:shadow-lg text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
