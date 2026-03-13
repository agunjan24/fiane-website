import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/FIANewEngland/",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/fia_newengland/",
    label: "Instagram",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/FIANewEngland",
    label: "X (Twitter)",
  },
];

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#events", label: "Events" },
  { href: "#social", label: "Social Feed" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-deep text-white relative overflow-hidden">
      <div className="tricolor-bar" />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-usa-blue/10 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="FIANE Logo"
                width={40}
                height={40}
                className="rounded-full ring-2 ring-white/10"
              />
              <span className="text-xl font-bold font-[family-name:var(--font-playfair)]">
                FIANE
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Foundation of Indian Americans in New England — uniting our
              community through culture, service, and celebration.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-saffron hover:border-saffron transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-saffron transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:president@fianewengland.org"
                  className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-saffron transition-colors"
                >
                  <FaEnvelope className="text-xs flex-shrink-0" />
                  president@fianewengland.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+15738211785"
                  className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-saffron transition-colors"
                >
                  <FaPhone className="text-xs flex-shrink-0" />
                  +1 (573) 821-1785
                </a>
              </li>
            </ul>
          </div>

          {/* States served */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">
              States We Serve
            </h4>
            <ul className="space-y-2.5">
              {[
                "Massachusetts",
                "Rhode Island",
                "New Hampshire",
                "Maine",
                "Vermont",
              ].map((state) => (
                <li key={state} className="text-sm text-gray-500">
                  {state}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Foundation of Indian Americans in
            New England. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            A 501(c)(3) Non-Profit Organization
          </p>
        </div>
      </div>
    </footer>
  );
}
