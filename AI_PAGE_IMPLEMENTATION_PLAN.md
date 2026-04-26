# AI Page Implementation Plan

## Goal

Add a separate `/ai` page for Konstantin Orlov's developer and AI profile without weakening the existing travel-focused homepage at `/`.

## Decisions

- Keep `/` focused on corporate travel.
- Add `/ai` as a separate canonical route for development, automation, and AI work.
- Add a compact `Travel | AI` role switcher in the shared header.
- Reuse the existing contact form and contact details.
- Keep the same visual language, typography, spacing, and restrained portfolio tone.

## Implementation Steps

1. Extract the current inline header from `app/page.js` into a reusable `app/site-header.js`.
2. Update `app/mobile-nav.js` so it can receive route-specific CTA text and route-switch links.
3. Update `app/page.js` to use the shared header while keeping the travel page content and schema intact.
4. Add `app/ai/page.js` with:
   - route-level metadata for `/ai`;
   - developer/AI-focused structured data;
   - a mirrored page structure: hero, approach, cases, practice, FAQ, contacts;
   - Server Monitor as the flagship case with Flask, WebSocket, SwiftUI, and Tailscale.
5. Update `app/sitemap.js` to include `/ai`.
6. Update `app/llms.txt/route.js` to describe both the travel and AI profiles.
7. Run lint/build checks.
8. Start the local dev server and verify `/` and `/ai` visually.

## Acceptance Criteria

- `/` remains travel-first and does not lose its current schema or primary copy.
- `/ai` has its own canonical URL, metadata, and structured data.
- Header role switching works on desktop and mobile.
- Contact form works from both pages.
- `npm run lint` and `npm run build` pass.
- Local browser verification confirms both pages render without obvious layout issues.
