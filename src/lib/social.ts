import { type SocialPost, mockSocialPosts } from "@/data/social";

const FB_PAGE_ID = process.env.FB_PAGE_ID || "";
const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN || "";
const IG_USER_ID = process.env.IG_USER_ID || "";

// How many posts to request per platform. Kept generous so the Gallery has
// enough real photos to fill its grid; the carousel slices down to a few.
const PER_PLATFORM_LIMIT = 12;

// Shared ISR window (seconds) — re-fetch social data every 15 minutes.
export const SOCIAL_REVALIDATE = 900;

export interface SocialResult {
  posts: SocialPost[];
  source: "live" | "mock";
  facebook: number;
  instagram: number;
}

async function fetchFacebookPosts(): Promise<SocialPost[]> {
  if (!FB_ACCESS_TOKEN || !FB_PAGE_ID) return [];

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${FB_PAGE_ID}/posts?fields=message,created_time,permalink_url,full_picture,likes.summary(true),comments.summary(true)&limit=${PER_PLATFORM_LIMIT}&access_token=${FB_ACCESS_TOKEN}`,
      { next: { revalidate: SOCIAL_REVALIDATE } }
    );

    if (!res.ok) return [];
    const data = await res.json();

    return (data.data || []).map(
      (post: {
        id: string;
        message?: string;
        full_picture?: string;
        permalink_url?: string;
        created_time: string;
        likes?: { summary?: { total_count?: number } };
        comments?: { summary?: { total_count?: number } };
      }) => ({
        id: `fb-${post.id}`,
        platform: "facebook" as const,
        text: post.message || "",
        imageUrl: post.full_picture || null,
        permalink:
          post.permalink_url || "https://www.facebook.com/FIANewEngland/",
        timestamp: post.created_time,
        likes: post.likes?.summary?.total_count || 0,
        comments: post.comments?.summary?.total_count || 0,
      })
    );
  } catch {
    return [];
  }
}

async function fetchInstagramPosts(): Promise<SocialPost[]> {
  if (!FB_ACCESS_TOKEN || !IG_USER_ID) return [];

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${IG_USER_ID}/media?fields=id,caption,media_url,permalink,timestamp,like_count,comments_count&limit=${PER_PLATFORM_LIMIT}&access_token=${FB_ACCESS_TOKEN}`,
      { next: { revalidate: SOCIAL_REVALIDATE } }
    );

    if (!res.ok) return [];
    const data = await res.json();

    return (data.data || []).map(
      (post: {
        id: string;
        caption?: string;
        media_url?: string;
        permalink?: string;
        timestamp: string;
        like_count?: number;
        comments_count?: number;
      }) => ({
        id: `ig-${post.id}`,
        platform: "instagram" as const,
        text: post.caption || "",
        imageUrl: post.media_url || null,
        permalink:
          post.permalink || "https://www.instagram.com/fia_newengland/",
        timestamp: post.timestamp,
        likes: post.like_count || 0,
        comments: post.comments_count || 0,
      })
    );
  } catch {
    return [];
  }
}

/**
 * Fetches the latest Facebook + Instagram posts, sorted newest-first.
 *
 * Falls back to `mockSocialPosts` whenever credentials are missing or both
 * platform calls come back empty (e.g. an expired token). The returned
 * `source` field distinguishes the two so callers — and the health endpoint —
 * can tell whether the site is showing live or placeholder content.
 */
export async function getSocialPosts(): Promise<SocialResult> {
  const [fbPosts, igPosts] = await Promise.all([
    fetchFacebookPosts(),
    fetchInstagramPosts(),
  ]);

  const allPosts = [...fbPosts, ...igPosts];

  if (allPosts.length === 0) {
    const fb = mockSocialPosts.filter((p) => p.platform === "facebook").length;
    const ig = mockSocialPosts.filter((p) => p.platform === "instagram").length;
    return { posts: mockSocialPosts, source: "mock", facebook: fb, instagram: ig };
  }

  allPosts.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return {
    posts: allPosts,
    source: "live",
    facebook: fbPosts.length,
    instagram: igPosts.length,
  };
}

/** True when at least one platform credential is configured. */
export function socialConfigured(): boolean {
  return Boolean(FB_ACCESS_TOKEN && (FB_PAGE_ID || IG_USER_ID));
}
