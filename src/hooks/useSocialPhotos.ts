import { useEffect, useState } from "react";
import { type SocialPost } from "@/data/social";
import { gallerySeed } from "@/data/gallerySeed";

/**
 * Returns event photos for the Gallery and HeroCarousel.
 *
 * Defaults to the bundled seed images so authentic content shows immediately
 * (no credentials, no flash), then upgrades to the live Facebook/Instagram feed
 * once `/api/social` returns live photos. Keeps the seed on error or mock data.
 */
export function useSocialPhotos(limit: number): SocialPost[] {
  const [photos, setPhotos] = useState<SocialPost[]>(() =>
    gallerySeed.slice(0, limit)
  );

  useEffect(() => {
    let cancelled = false;
    fetch("/api/social")
      .then((res) => res.json())
      .then((data: { posts?: SocialPost[]; source?: string }) => {
        if (cancelled || data.source !== "live") return;
        const withImages = (data.posts || [])
          .filter((p) => p.imageUrl)
          .slice(0, limit);
        if (withImages.length > 0) setPhotos(withImages);
      })
      .catch(() => {
        // Keep the seed photos on error.
      });
    return () => {
      cancelled = true;
    };
  }, [limit]);

  return photos;
}
