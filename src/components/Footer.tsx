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
    <footer className="bg-gray-900 text-white">
      <div className="section-divider" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="FIANE Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg font-bold">FIANE</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Foundation of Indian Americans in New England — uniting our
              community through culture, service, and celebration.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-saffron transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-saffron transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:president@fianewengland.org"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-saffron transition-colors"
                >
                  <FaEnvelope className="text-xs" />
                  president@fianewengland.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+15738211785"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-saffron transition-colors"
                >
                  <FaPhone className="text-xs" />
                  +1 (573) 821-1785
                </a>
              </li>
            </ul>
          </div>

          {/* States served */}
          <div>
            <h4 className="font-semibold mb-4 text-white">States We Serve</h4>
            <ul className="space-y-2.5">
              {[
                "Massachusetts",
                "Rhode Island",
                "New Hampshire",
                "Maine",
                "Vermont",
              ].map((state) => (
                <li key={state} className="text-sm text-gray-400">
                  {state}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Foundation of Indian Americans in
            New England. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            A 501(c)(3) Non-Profit Organization
          </p>
        </div>
      </div>
    </footer>
  );
}
