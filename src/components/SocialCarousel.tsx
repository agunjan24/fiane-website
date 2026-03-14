"use client";

import { useState, useEffect, useCallback } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaHeart,
  FaComment,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { type SocialPost, mockSocialPosts } from "@/data/social";

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks}w ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function PostCard({
  post,
  isActive,
}: {
  post: SocialPost;
  isActive: boolean;
}) {
  const isFacebook = post.platform === "facebook";

  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
        isActive
          ? "opacity-100 translate-x-0 scale-100"
          : "opacity-0 translate-x-8 scale-[0.97] pointer-events-none"
      }`}
    >
      <a
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full group"
      >
        <div className="h-full rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-6 sm:p-8 flex flex-col hover:bg-white/[0.1] transition-colors duration-300">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${
                  isFacebook
                    ? "bg-[#1877F2]"
                    : "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]"
                }`}
              >
                {isFacebook ? (
                  <FaFacebook size={18} />
                ) : (
                  <FaInstagram size={18} />
                )}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  {isFacebook ? "FIA New England" : "fia_newengland"}
                </div>
                <div className="text-xs text-white/40">
                  {timeAgo(post.timestamp)}
                </div>
              </div>
            </div>
            <FaExternalLinkAlt
              size={10}
              className="text-white/20 group-hover:text-white/50 transition-colors"
            />
          </div>

          {/* Post text */}
          <p className="text-white/75 text-sm sm:text-base leading-relaxed flex-1 line-clamp-4">
            {post.text}
          </p>

          {/* Footer with engagement */}
          <div className="flex items-center gap-5 mt-5 pt-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-1.5 text-white/40 text-xs">
              <FaHeart size={11} className="text-usa-red/60" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/40 text-xs">
              <FaComment size={11} className="text-usa-blue-light/60" />
              <span>{post.comments}</span>
            </div>
            <div className="ml-auto text-xs text-white/25 uppercase tracking-wider font-semibold">
              {isFacebook ? "Facebook" : "Instagram"}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function SocialCarousel() {
  const [posts, setPosts] = useState<SocialPost[]>(mockSocialPosts);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Fetch live posts from API
  useEffect(() => {
    fetch("/api/social")
      .then((res) => res.json())
      .then((data) => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        }
      })
      .catch(() => {
        // Keep mock data on error
      });
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % posts.length);
  }, [posts.length]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + posts.length) % posts.length);
  }, [posts.length]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  return (
    <section className="relative py-20 sm:py-28 bg-deep noise-overlay overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-india-green/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-[10%] w-64 h-64 bg-usa-blue/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          {/* Left side — heading and controls */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-saffron/80">
              Live Updates
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-white leading-tight">
              What&apos;s{" "}
              <span className="italic text-saffron">Happening</span>
            </h2>
            <p className="mt-4 text-base text-white/40 max-w-md leading-relaxed">
              The latest updates from our social media — events, community
              highlights, and announcements, refreshed automatically.
            </p>

            {/* Controls */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={prev}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Previous post"
              >
                <FaChevronLeft size={12} />
              </button>
              <button
                onClick={next}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Next post"
              >
                <FaChevronRight size={12} />
              </button>

              {/* Progress dots */}
              <div className="flex gap-2 ml-2">
                {posts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === activeIndex
                        ? "w-8 bg-saffron"
                        : "w-3 bg-white/15 hover:bg-white/25"
                    }`}
                    aria-label={`Go to post ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Platform legend */}
            <div className="mt-6 flex gap-4">
              <div className="flex items-center gap-2 text-xs text-white/30">
                <FaFacebook size={12} className="text-[#1877F2]/60" />
                <span>2 latest from Facebook</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/30">
                <FaInstagram size={12} className="text-[#DD2A7B]/60" />
                <span>2 latest from Instagram</span>
              </div>
            </div>
          </div>

          {/* Right side — carousel card */}
          <div
            className="relative h-[280px] sm:h-[300px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} isActive={i === activeIndex} />
            ))}

            {/* Auto-advance progress bar */}
            {!isPaused && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-saffron/50 rounded-full"
                  style={{
                    animation: "progress-bar 6s linear infinite",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress bar keyframes injected inline */}
      <style>{`
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
