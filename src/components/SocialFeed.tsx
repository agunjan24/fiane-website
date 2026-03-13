"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

function FacebookEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(500);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setWidth(Math.min(w, 500));
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFIANewEngland&tabs=timeline&width=${width}&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
        width={width}
        height="600"
        style={{
          border: "none",
          overflow: "hidden",
          borderRadius: "16px",
        }}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="FIANE Facebook Feed"
      />
    </div>
  );
}

function InstagramEmbed() {
  return (
    <div className="w-full flex justify-center">
      <iframe
        src="https://www.instagram.com/fia_newengland/embed"
        className="w-full"
        height="600"
        style={{
          border: "none",
          overflow: "hidden",
          borderRadius: "16px",
          background: "#fff",
          maxWidth: "500px",
        }}
        allowFullScreen
        allow="encrypted-media"
        title="FIANE Instagram Feed"
      />
    </div>
  );
}

const socialCards = [
  {
    icon: FaFacebook,
    label: "Facebook",
    handle: "@FIANewEngland",
    href: "https://www.facebook.com/FIANewEngland/",
    gradient: "from-blue-50 to-blue-100/30",
    border: "border-blue-100",
    iconBg: "bg-[#1877F2]",
    hoverColor: "group-hover:text-[#1877F2]",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    handle: "@fia_newengland",
    href: "https://www.instagram.com/fia_newengland/",
    gradient: "from-pink-50 to-purple-50",
    border: "border-pink-100",
    iconBg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    hoverColor: "group-hover:text-[#DD2A7B]",
  },
  {
    icon: FaTwitter,
    label: "X (Twitter)",
    handle: "@FIANewEngland",
    href: "https://x.com/FIANewEngland",
    gradient: "from-gray-50 to-gray-100/30",
    border: "border-gray-100",
    iconBg: "bg-black",
    hoverColor: "group-hover:text-black",
  },
];

export default function SocialFeed() {
  return (
    <section id="social" className="py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-saffron">
            Stay Connected
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 leading-tight">
            Latest from{" "}
            <span className="italic text-usa-blue">Social Media</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl">
            Follow us for the latest updates, event photos, and community news.
          </p>
        </ScrollReveal>

        {/* Social link cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-10 mb-12">
          {socialCards.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 100}>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br ${card.gradient} border ${card.border} hover:shadow-lg transition-all duration-300`}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold text-gray-900 ${card.hoverColor} transition-colors`}>
                    {card.label}
                  </div>
                  <div className="text-sm text-gray-400">{card.handle}</div>
                </div>
                <FaExternalLinkAlt className="text-gray-200 group-hover:text-gray-400 transition-colors flex-shrink-0" size={12} />
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Embedded feeds */}
        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <div className="bg-gray-50/80 rounded-2xl p-4 sm:p-6 border border-gray-100 overflow-hidden">
              <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaFacebook className="text-[#1877F2]" />
                Facebook Feed
              </h3>
              <FacebookEmbed />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-gray-50/80 rounded-2xl p-4 sm:p-6 border border-gray-100 overflow-hidden">
              <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaInstagram className="text-[#DD2A7B]" />
                Instagram Feed
              </h3>
              <InstagramEmbed />
            </div>
          </ScrollReveal>
        </div>

        {/* Follow CTA */}
        <ScrollReveal className="mt-10">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.facebook.com/FIANewEngland/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1877F2] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              <FaFacebook size={16} />
              Follow on Facebook
            </a>
            <a
              href="https://www.instagram.com/fia_newengland/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              <FaInstagram size={16} />
              Follow on Instagram
            </a>
            <a
              href="https://x.com/FIANewEngland"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              <FaTwitter size={16} />
              Follow on X
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
