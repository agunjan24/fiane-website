import { NextResponse } from "next/server";
import { getSocialPosts } from "@/lib/social";

// Set ISR revalidation — re-fetch every 15 minutes.
// Must be an inline literal so Next can statically analyze it (keep in sync
// with SOCIAL_REVALIDATE in @/lib/social).
export const revalidate = 900;

export async function GET() {
  const { posts, source } = await getSocialPosts();
  return NextResponse.json({ posts, source });
}
