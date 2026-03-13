"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#social", label: "Social Feed" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="tricolor-bar fixed top-0 left-0 right-0 z-50" />
      <nav className="fixed top-1 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="FIANE Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-usa-blue">FIANE</span>
                <span className="block text-xs text-gray-500">
                  Foundation of Indian Americans in New England
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-saffron/10 hover:text-saffron-dark transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-saffron rounded-full hover:bg-saffron-dark transition-colors"
              >
                Donate
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-saffron"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 rounded-lg hover:bg-saffron/10 hover:text-saffron-dark"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-2 px-5 py-2 text-center text-sm font-semibold text-white bg-saffron rounded-full hover:bg-saffron-dark"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
