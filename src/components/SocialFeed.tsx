"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";

function FacebookEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(500);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Leave some padding room inside the card
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
          borderRadius: "12px",
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
          borderRadius: "12px",
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

export default function SocialFeed() {
  return (
    <section id="social" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-saffron">
            Stay Connected
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Latest from Social Media
          </h2>
          <div className="mt-4 flex justify-center gap-1">
            <span className="h-1 w-8 rounded-full bg-saffron" />
            <span className="h-1 w-8 rounded-full bg-india-green" />
            <span className="h-1 w-8 rounded-full bg-usa-blue" />
          </div>
          <p className="mt-6 text-lg text-gray-600">
            Follow us on social media for the latest updates, event photos, and
            community news.
          </p>
        </div>

        {/* Social links cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="https://www.facebook.com/FIANewEngland/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#1877F2] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <FaFacebook size={28} />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">Facebook</div>
              <div className="text-sm text-gray-500">@FIANewEngland</div>
            </div>
            <FaExternalLinkAlt className="text-gray-300 group-hover:text-blue-500 transition-colors" />
          </a>

          <a
            href="https://www.instagram.com/fia_newengland/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-100/50 border border-pink-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <FaInstagram size={28} />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">Instagram</div>
              <div className="text-sm text-gray-500">@fia_newengland</div>
            </div>
            <FaExternalLinkAlt className="text-gray-300 group-hover:text-pink-500 transition-colors" />
          </a>

          <a
            href="https://x.com/FIANewEngland"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <FaTwitter size={28} />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">X (Twitter)</div>
              <div className="text-sm text-gray-500">@FIANewEngland</div>
            </div>
            <FaExternalLinkAlt className="text-gray-300 group-hover:text-gray-700 transition-colors" />
          </a>
        </div>

        {/* Embedded feeds - stacked on mobile, side by side on desktop */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Facebook Feed */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-100 overflow-hidden">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FaFacebook className="text-[#1877F2]" />
              Facebook Feed
            </h3>
            <FacebookEmbed />
          </div>

          {/* Instagram Feed */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-100 overflow-hidden">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FaInstagram className="text-[#DD2A7B]" />
              Instagram Feed
            </h3>
            <InstagramEmbed />
          </div>
        </div>

        {/* Follow CTA bar */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <a
            href="https://www.facebook.com/FIANewEngland/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-[#1877F2] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            <FaFacebook size={20} />
            Follow on Facebook
          </a>
          <a
            href="https://www.instagram.com/fia_newengland/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            <FaInstagram size={20} />
            Follow on Instagram
          </a>
          <a
            href="https://x.com/FIANewEngland"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-black text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            <FaTwitter size={20} />
            Follow on X
          </a>
        </div>
      </div>
    </section>
  );
}
