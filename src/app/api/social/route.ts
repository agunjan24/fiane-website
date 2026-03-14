import { NextResponse } from "next/server";
import { type SocialPost, mockSocialPosts } from "@/data/social";

// Set ISR revalidation — re-fetch every 15 minutes
export const revalidate = 900;

const FB_PAGE_ID = process.env.FB_PAGE_ID || "";
const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN || "";
const IG_USER_ID = process.env.IG_USER_ID || "";

async function fetchFacebookPosts(): Promise<SocialPost[]> {
  if (!FB_ACCESS_TOKEN || !FB_PAGE_ID) return [];

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${FB_PAGE_ID}/posts?fields=message,created_time,permalink_url,full_picture,likes.summary(true),comments.summary(true)&limit=2&access_token=${FB_ACCESS_TOKEN}`,
      { next: { revalidate: 900 } }
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
      `https://graph.facebook.com/v19.0/${IG_USER_ID}/media?fields=id,caption,media_url,permalink,timestamp,like_count,comments_count&limit=2&access_token=${FB_ACCESS_TOKEN}`,
      { next: { revalidate: 900 } }
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

export async function GET() {
  const [fbPosts, igPosts] = await Promise.all([
    fetchFacebookPosts(),
    fetchInstagramPosts(),
  ]);

  const allPosts = [...fbPosts, ...igPosts];

  // If no real API data, return mock data
  if (allPosts.length === 0) {
    return NextResponse.json({ posts: mockSocialPosts, source: "mock" });
  }

  // Sort by timestamp descending
  allPosts.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return NextResponse.json({ posts: allPosts, source: "live" });
}
