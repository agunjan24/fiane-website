# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **FIANE** (Foundation of Indian Americans in New England), a non-profit
serving the Indian American community across MA, RI, NH, ME, and VT. Single-page site built with
Next.js App Router.

## Commands

Run all commands from the `fiane-website/` directory (the repo root is one level up).

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build (output: "standalone")
npm run start    # Serve the production build
npm run lint     # ESLint (flat config, eslint-config-next)
```

There is no test suite.

## Stack

- **Next.js 16** (App Router) + **React 19**, TypeScript strict mode
- **Tailwind CSS v4** — configured entirely in CSS via `@import "tailwindcss"` and an
  `@theme inline` block in `src/app/globals.css` (no `tailwind.config.js`)
- **react-icons** for iconography
- Import alias: `@/*` → `src/*`

## Architecture

The site is a single page (`src/app/page.tsx`) that stacks section components in fixed order:
Navbar → Hero → HeroCarousel → SocialCarousel → About → Events → SocialFeed → Gallery → Contact →
Footer. Each lives in `src/components/` as a self-contained section.

**Content vs. presentation.** Editable content is separated into typed modules under `src/data/`
(`events.ts`, `social.ts`, `team.ts`, `gallerySeed.ts`) — each exports a TypeScript `interface`
plus a typed array. To change events, posts, or seed photos, edit these files rather than the
components. `Events` shows upcoming + recent events merged into one list sorted by date descending
(reverse chronological); it's a server component (no toggle/state).

**Social feed data flow.** `src/lib/social.ts` holds the shared fetch logic (`getSocialPosts()`):
it pulls the latest Facebook + Instagram posts via the Graph API and falls back to `mockSocialPosts`
from `src/data/social.ts` when credentials are absent or the API fails, tagging the result
`source: "mock" | "live"`. Requires env vars `FB_PAGE_ID`, `FB_ACCESS_TOKEN`, `IG_USER_ID` (see
`.env.example`) — without them the site silently serves mock posts. Consumers:
- `src/app/api/social/route.ts` — public JSON endpoint, ISR `revalidate = 900` (15 min). Note the
  `revalidate` export **must be an inline literal**, not imported, or the build fails with "Invalid
  segment configuration export."
- `src/app/api/social/health/route.ts` — `force-dynamic` health check; returns HTTP 503 when
  credentials are set but no live data comes back (expired token). Point an uptime monitor at it.
- `SocialCarousel` (client) fetches `/api/social` on mount, keeps mock data on error, and defers
  relative timestamps behind a `requestAnimationFrame` mount flag to avoid hydration mismatch.
- `Gallery` and `HeroCarousel` (both client) share the `useSocialPhotos(limit)` hook
  (`src/hooks/`), which defaults to the **seed** photos from `src/data/gallerySeed.ts` (real images
  in `public/images/gallery/`, so authentic content shows with no credentials) and upgrades to
  **live** API photos when `/api/social` reports `source: "live"`. `Gallery` renders a bento grid;
  `HeroCarousel` is the rotating photo band below the hero (auto-advance ~5s, pause on hover).
  FB/IG CDN hosts are allowlisted in `next.config.ts` for the live case. To refresh the demo seed,
  drop images in that folder and update the list.
- `SocialFeed` uses direct Facebook/Instagram iframe embeds instead (independent of the API).

**Client vs. server components.** Components are server components by default. Any with
interactivity/hooks (`SocialCarousel`, `SocialFeed`, `ScrollReveal`, likely `Navbar`) are marked
`"use client"`.

**Brand mark.** `src/components/Logo.tsx` is a pure inline-SVG emblem (navy chakra roundel + US
star + saffron/green tricolor arcs) used in `Navbar` and `Footer` — stays sharp at any size, no
raster asset. **CTA links** are centralized in `src/lib/links.ts`: `DONATE_URL`
(`NEXT_PUBLIC_DONATE_URL` or the `#contact` fallback) and `registrationHref(event)` (real URL or a
pre-addressed mailto so buttons are never dead).

**Animations.** `ScrollReveal` wraps content and uses an `IntersectionObserver` to trigger CSS
keyframe animations (`reveal`, `reveal-scale`, `reveal-left`) defined in `globals.css`, with an
optional `delay` prop. Prefer wrapping new sections in `<ScrollReveal>` for consistent entrance
animations.

## Design system

Brand colors (Indian tricolor + US patriotic palette) are defined as CSS custom properties in the
`@theme inline` block of `globals.css` and used as Tailwind utilities: `saffron`, `india-green`,
`india-navy`, `usa-red`, `usa-blue`, `gold`, `cream`, `deep`, etc. Fonts are loaded via
`next/font/google` in `layout.tsx`: Playfair Display (`--font-playfair`, display/headings) and
DM Sans (`--font-dm-sans`, body). Reference display font in JSX with
`font-[family-name:var(--font-playfair)]`.

## Deployment

Containerized via the multi-stage `Dockerfile` (relies on Next's `standalone` output) and deployed
to Render per `render.yaml` (`runtime: docker`, free plan). Remember to set the `FB_*`/`IG_*` env
vars in the deploy environment for live social data.
