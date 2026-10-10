# Verification record

Demo-only Next.js App Router site. No backend, storage or real form submission is involved.

## 2026-10-10 — formatting, branding, motion and loading pass

### Scope of change

- Formatted all source files with Prettier (added `.prettierrc.json`, `.prettierignore`, `prettier` dev dependency, `format` / `format:check` scripts).
- Derived `public/images/logo-mark.png` (white-margin crop of the supplied `logo.jpg`; no artwork clipped) and used it for the header, footer, loading screen and app icons.
- Added app icons: `src/app/favicon.ico` (16/32/48), `src/app/icon.png` (512), `src/app/apple-icon.png` (180).
- Fixed header/footer logo sizing to the square mark (header 66px, footer 96px, responsive down to 56px mobile).
- Typography pinned to Manrope headings and Inter body/controls, including explicit `font-family` on form controls.
- Standardised the requested Lucide outline set (truck, package, warehouse, route, users, bike, shield); `ShieldCheck` replaced with `Shield`.
- Added `src/components/background.tsx` — animated logistics background (drifting outline icons, route lines, panning grid) behind hero, page-hero and network sections; `aria-hidden`, disabled under `prefers-reduced-motion`.
- Rebuilt the loading experience in `src/components/motion.tsx`: `InitialLoader` (first load) and `RouteLoader` (every client route change), both using the logo badge and gradient progress; scroll locks during the initial load.
- Removed the root `src/app/loading.tsx`. Its Suspense boundary streamed responses early, which turned `notFound()` calls into soft 404s (HTTP 200 + `noindex`). Route-change loading is now handled by `RouteLoader`, and invalid dynamic routes return real 404s.

### Commands and real results

| Command                                               | Result                                                                                                                                                                                                                                              |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run format:check`                                | Pass — "All matched files use Prettier code style!"                                                                                                                                                                                                 |
| `npm run typecheck` (`tsc --noEmit`)                  | Pass — no errors                                                                                                                                                                                                                                    |
| `npm run test` (unit)                                 | Pass — 9/9                                                                                                                                                                                                                                          |
| `npm run test:routes` against `http://localhost:3099` | Pass — 2/2 (all pages 200 + defensive headers; invalid page/service/story/role routes 404)                                                                                                                                                          |
| `npm run build`                                       | Pass — compiled successfully, 22/22 pages generated                                                                                                                                                                                                 |
| `npm run lint` (`eslint .`)                           | Blocked by environment: `typescript-eslint does not support TS 7.0` (eslint-config-next bundles a typescript-eslint release that rejects the installed TypeScript 7.0.2). Not caused by this change set; no source-level lint finding was produced. |

Build route table confirms `icon.png` and `apple-icon.png` are emitted as static assets and `favicon.ico` is served from `app/`.

### Browser verification (Playwright, production build on port 3099)

- Head links present: `favicon.ico` (48x48), `icon.png` (512x512), `apple-icon.png` (180x180).
- Header logo renders `logo-mark.png` at 66px (desktop) / 56px (mobile); footer logo renders at 96px.
- `h1` computed font family `Manrope, sans-serif`; body `Inter, sans-serif`.
- Initial loader visible with logo badge on reload, then hidden after ~1.1s.
- Route loader toggles visible then hidden on each link navigation (verified via class-change observer).
- No console errors or warnings across `/`, `/services`, `/network`, `/work-with-us`, `/register/rider`, `/gallery`, `/contact`, `/news/connected-vision`, `/services/warehousing`.

### Not run

- Manual screen-reader pass and cross-browser (non-Chromium) checks.
- `npm run lint` (see blocker above).

## 2026-10-10 — blueprint application and separate resource screens

This section supersedes the earlier TypeScript 7 lint blocker. Compiler now uses TypeScript 6.0.3; ESLint runs successfully. Earlier observations above are retained as historical records, not new test claims.

### Implemented

- Added all eight core blueprint documents, advanced UX/API scope and maintenance workflows, with real ZENX decisions rather than template placeholders.
- Added shared typed validation and safe FormData parsing, error recovery UI and defensive HTTP headers.
- Registration Back preserves second-step location, experience and interest.
- Route progress and mobile navigation use keyed state to reset cleanly.
- Separate News, Stories/detail and empty Blog routes, based on the live News/Blog pages retrieved on 10 October 2026. Existing story detail URLs remain supported.

### Check results

- Unit tests: 9/9 passed.
- Route integration tests: 3/3 passed against localhost:3001, covering 33 valid page URLs, five invalid URLs, defensive headers and distinct resource content. An intermediate run failed while the unsupported re-export was present; after correcting the statically declared dynamicParams configuration, the rerun passed.
- ESLint: passed with no warnings/errors after fixes.
- TypeScript check: passed. Final build also ran its TypeScript check successfully.
- Prettier check: passed; documentation is formatted after updates.
- Production build: passed, 25 generated framework pages; application routes render dynamically.
- npm audit --omit=dev: zero vulnerabilities.
- Full dependency audit: five high-severity development dependency findings in the eslint-config-next -> fast-glob -> micromatch -> braces chain. Registry latest braces was 3.0.3 and the advisory offered no compatible fix. No forced dependency rewrite applied. Review toolchain updates before public release; this does not affect the production dependency audit result.

### Browser checks in this pass

- Rider registration rejects punctuation-only phone input.
- Valid first-step values advance; Back then Continue preserves both first-step values and second-step location, selected experience and interest (keyboard activated).
- Detailed enquiry with no contact method shows the correct error; adding a fictional email displays busy state then explicit prototype confirmation, with no submission/storage.
- News displays the company vision, people section and separate network section. Its Stories link navigates to a separate cards screen. Blog displays its own empty state.

### Limits

No new automated browser suite is claimed. Registration completion was initiated but its final confirmation was not independently captured in this pass. Recruiter completion, gallery keyboard interaction, screen readers, cross-browser engines, visual comparison and mobile viewports were not rerun in this pass. Error-boundary recovery was added but not forced through a deliberate runtime exception. No live submission/backend/deployment exists.

Final News desktop inspection at 1280px: no horizontal overflow; all six rendered images loaded and computed object-fit was contain. Final lint, typecheck and formatting rerun passed after the route correction.

## 2026-10-10 — unified logo, Stitch header/footer, content illustrations & copy

### Implemented

- One transparent logo asset public/images/logo-mark.png (white background removed, artwork intact) is now used in the header, footer, first-load screen and app icons. Header mark ~46px, footer ~74px, responsive down to ~40px. The white mono variant was deleted; the footer places the same logo over a soft centred light glow so it stays legible on the dark navy surface.
- First-load screen shows only the logo mark with an orbit ring on a light background - no text, no box. The full-screen route change loader (RouteLoader) was removed; client route changes use only the thin top progress bar.
- Header and footer reworked per the Stitch design (project 'ZENX Logistics - Header & Footer', theme 'Maritime Precision'): glass sticky header, pill gold CTA, Resources dropdown; four-column dark footer with gold top border. The 'Resources' button now matches the other nav links (same 15px / weight 500 / colour / padding).
- Added official Facebook, Instagram, Threads and X brand icons (src/components/social-icons.tsx) linking to the supplied profiles.
- Added src/components/illustrations.tsx: 13 distinct on-brand SVG illustrations used on service cards, service-detail pages and story pages to stop repeating the same few photos.
- Gallery rebuilt: page copy 'Our Work, Our People, Our Network.' plus six photo tiles (Hub Operations; Team & Recruitment; Last-Mile Rider Network; Warehouse Operations; Transport & Fleet; Corporate Team) and a Videos section with two labelled demo placeholders (Hub Operations Demo; Last-Mile Network Demo).
- News and Stories copy updated to the supplied three stories (ZENX Dream / People First / Network Update) with 'Read More' links; story slugs are zenx-dream, people-first, network-update.

### Check results

- Prettier check: passed.
- TypeScript check: passed.
- ESLint: passed with no errors (the earlier set-state-in-effect issues in motion.tsx and site-shell.tsx were fixed).
- Unit tests: 9/9 passed.
- Route integration tests: 3/3 passed against localhost:3099.
- Production build: passed (framework pages generated).

### Browser checks in this pass

- Header, footer and loader all render the same logo-mark.png (header 46px, footer 74px, loader light background).
- Resources nav item computed style matches a sibling nav link (font-size 15px, weight 500, colour rgba(8,27,54,0.72)).
- Route change no longer shows a full-screen loader; only the progress bar is used.
- Gallery shows six items with the supplied captions and two demo video placeholders.
- News h1 'Our Big Dream Is Bigger Than Logistics.' with People First, Network Update and ZENX Dream blocks; Stories shows the same three stories as cards with 'Read More'.
- No console errors and no horizontal overflow at 390px.

### Limits

- Video cards are labelled placeholders; no media files exist in the demo.
- Console shows benign Next.js 'image preloaded but not used' hints for priority images; no errors.
- Not pushed to the remote; awaiting user confirmation.

## 2026-10-10 - hero imagery, readability and Vercel deployment

- Wired the client-supplied images (hero-home, about, services, network, work-with-us) to their page heroes.
- Rebuilt every hero into a wide banner (2400x1000 home, 2600x1000 pages) with a blur-fill (full image centred, blurred edges) so no artwork is cut; heroes now use cover against a matching aspect ratio (home 2.4:1, page 2.6:1, compact 2.9:1), removing the old 16:9 emptiness and the 4:3 ':has(img warehouse/rider)' rule.
- Strengthened the hero scrim (two-layer navy gradient) and the outline button on the hero for text/button contrast; added a gold rule to page-hero headers.
- Set next.config distDir to '.next' when running on Vercel so the platform receives the build output.
- Deployment: 'npx vercel --prod --yes' succeeded; production alias https://zenxlogistics.vercel.app (deployment dpl_CbDyvKhnfXP9fqZ2z1R55F4kmaM7). Verified over HTTP: '/' returns 200 and every hero image endpoint (about, services, network, work-with-us, hero, warehouse, rider, home) returns 200 image/jpeg.
- Not yet pushed to the GitHub remote.
