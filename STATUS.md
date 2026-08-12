# jshaner-ventures-v2 — STATUS
_Updated: 2026-08-12 by Codex_

**What it is:** JShaner Ventures public website/project shell.
**Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript, Geist, Vercel Analytics, Vercel Speed Insights.
**State:** Live.
**Runs how:** `cd /Users/jshaner/HQ/DEV/ACTIVE/jshaner-ventures-v2 && npm run dev`; default Next.js local URL is `http://localhost:3000`.
**What's done:**
- Local `main` is two commits ahead of `origin/main` after a focused form/CSP reliability pass; nothing pushed.
- Standard Next.js scripts exist for dev, build, start, and lint.
- Source lives under `src/app` and `src/components`, with robots and sitemap routes present.
- Vercel project metadata is present.
- Both Formspree lead forms show pending and accessible failure states; offline success/failure tests pass.
- Ahrefs analytics is allowed by the site CSP and covered by a config regression test.
- `npm test`, lint, typecheck, and production build pass. Lint reports one Material Symbols stylesheet warning.
**What's left / blocked:**
- README is still mostly create-next-app boilerplate and does not describe the business site.
- Production deployment and live Formspree delivery were not tested during this offline pass.
- `/vault` remains an intentional seven-card COMING SOON/locked surface.
**Depends on:** Vercel, JShaner Ventures content, public positioning decisions, domain/deployment setup.
**Next action:** Verify the two live Formspree submissions after deployment; decide whether to retire the five unused create-next-app SVG assets.
