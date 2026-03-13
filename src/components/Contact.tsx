"use client";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-saffron">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Contact & Support
          </h2>
          <div className="mt-4 flex justify-center gap-1">
            <span className="h-1 w-8 rounded-full bg-usa-red" />
            <span className="h-1 w-8 rounded-full bg-white border border-gray-200" />
            <span className="h-1 w-8 rounded-full bg-usa-blue" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donate / Get Involved */}
          <div>
            <div className="rounded-2xl bg-gradient-to-br from-saffron to-saffron-dark p-8 text-white mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FaHeart size={24} />
                <h3 className="text-2xl font-bold">Support FIANE</h3>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                Your generous donations help us organize community events, health
                camps, cultural celebrations, and support services across New
                England. Every contribution makes a difference.
              </p>
              <a
                href="mailto:president@fianewengland.org?subject=Donation Inquiry"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-saffron-dark font-semibold rounded-full hover:bg-cream transition-colors"
              >
                <FaHeart className="text-sm" />
                Donate Now
              </a>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <a
                href="mailto:president@fianewengland.org"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-usa-blue/10 flex items-center justify-center text-usa-blue">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium text-gray-900">
                    president@fianewengland.org
                  </div>
                </div>
              </a>

              <a
                href="tel:+15738211785"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-india-green/10 flex items-center justify-center text-india-green">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="font-medium text-gray-900">
                    +1 (573) 821-1785
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center text-saffron">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Region</div>
                  <div className="font-medium text-gray-900">
                    Greater Boston / New England Area
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                window.location.href = `mailto:president@fianewengland.org?subject=Website Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
              }}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all text-gray-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all text-gray-900"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all text-gray-900"
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
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all resize-none text-gray-900"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-usa-blue text-white font-semibold rounded-xl hover:bg-usa-blue-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
