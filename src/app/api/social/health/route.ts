import { NextResponse } from "next/server";
import { getSocialPosts, socialConfigured } from "@/lib/social";

// Always evaluate fresh so a monitor sees the true current state.
export const dynamic = "force-dynamic";

/**
 * Lightweight health endpoint for the social hydration pipeline.
 *
 * Point an uptime monitor (or a cron) at /api/social/health and alert when
 * `live` is false. That flips as soon as the Facebook/Instagram token expires
 * or is revoked and the site quietly falls back to placeholder content — the
 * failure mode that "low-maintenance auto-hydration" is most prone to.
 *
 * Responds 200 when live, 503 when configured-but-not-live (so monitors that
 * key on status code catch it), and 200 when intentionally unconfigured.
 */
export async function GET() {
  const configured = socialConfigured();
  const { source, facebook, instagram } = await getSocialPosts();
  const live = source === "live";

  const body = {
    live,
    configured,
    source,
    counts: { facebook, instagram },
    checkedAt: new Date().toISOString(),
    message: !configured
      ? "No social credentials set — serving placeholder content by design."
      : live
        ? "Live social data flowing from Facebook/Instagram."
        : "Credentials are set but no live posts returned — token likely expired or revoked.",
  };

  // Only a red alert when we EXPECTED live data but didn't get it.
  const status = configured && !live ? 503 : 200;
  return NextResponse.json(body, { status });
}
