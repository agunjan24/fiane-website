"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#social", label: "Social" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="tricolor-bar fixed top-0 left-0 right-0 z-50" />
      <nav
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="FIANE Logo"
                width={44}
                height={44}
                className="rounded-full ring-2 ring-white/20"
              />
              <div className="hidden sm:block">
                <span
                  className={`text-lg font-bold font-[family-name:var(--font-playfair)] transition-colors ${
                    scrolled ? "text-usa-blue" : "text-white"
                  }`}
                >
                  FIANE
                </span>
                <span
                  className={`block text-[10px] uppercase tracking-wider transition-colors ${
                    scrolled ? "text-gray-400" : "text-white/60"
                  }`}
                >
                  Foundation of Indian Americans in New England
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    scrolled
                      ? "text-gray-600 hover:text-saffron-dark hover:bg-saffron/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-3 px-5 py-2 text-sm font-semibold text-white bg-saffron rounded-full hover:bg-saffron-dark transition-all hover:shadow-lg hover:shadow-saffron/25"
              >
                Donate
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 transition-colors ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-base font-medium text-gray-700 rounded-lg hover:bg-saffron/5 hover:text-saffron-dark transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-3 px-5 py-2.5 text-center text-sm font-semibold text-white bg-saffron rounded-full hover:bg-saffron-dark"
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
