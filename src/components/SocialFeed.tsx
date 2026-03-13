"use client";

import { useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaExternalLinkAlt } from "react-icons/fa";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement) => void;
      };
    };
  }
}

function TwitterTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTwitter = () => {
      if (window.twttr?.widgets && containerRef.current) {
        window.twttr.widgets.load(containerRef.current);
      }
    };

    // If script is already loaded, just re-render widgets
    if (window.twttr?.widgets) {
      loadTwitter();
      return;
    }

    // Load the Twitter widgets script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = loadTwitter;
    document.body.appendChild(script);

    return () => {
      // Cleanup not needed — script stays loaded
    };
  }, []);

  return (
    <div ref={containerRef} className="social-embed flex justify-center">
      <a
        className="twitter-timeline"
        data-height="600"
        data-theme="light"
        data-chrome="noheader nofooter"
        href="https://twitter.com/FIANewEngland"
      >
        Loading tweets by @FIANewEngland...
      </a>
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
            Follow us on social media for the latest updates, event photos, and community news.
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

        {/* Embedded feeds */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Facebook Page Plugin */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FaFacebook className="text-[#1877F2]" />
              Facebook Feed
            </h3>
            <div className="social-embed flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFIANewEngland&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
                width="500"
                height="600"
                style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="FIANE Facebook Feed"
              />
            </div>
          </div>

          {/* Twitter/X Embed */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FaTwitter className="text-black" />
              X (Twitter) Feed
            </h3>
            <TwitterTimeline />
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Follow us on Instagram</h3>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">
            See our latest event photos, community highlights, and behind-the-scenes moments on Instagram.
          </p>
          <a
            href="https://www.instagram.com/fia_newengland/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-cream transition-colors"
          >
            <FaInstagram size={20} />
            @fia_newengland
          </a>
        </div>
      </div>
    </section>
  );
}
