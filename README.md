# ZENX Logistics redesign demo

Next.js App Router + TypeScript. Locally bundled Manrope and Inter, Lucide icons, Motion for React, responsive styling and reduced-motion support.

## Run

```powershell
npm.cmd install --cache .npm-cache
npm.cmd run dev
```

Open the Local URL printed by Next.js (usually http://localhost:3000; another port is used when occupied).

## Validate and build

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd start
```

## Pages

Home, services directory with filters, 13 service detail pages, network, about, work with us, rider and recruiter registration previews, contact/quote, news and story pages, gallery with filters/lightbox, privacy and terms demo notices.

## Demo behaviour

Forms validate in the browser and show prototype confirmation states. No real enquiries or applications are sent or saved. No payment, tracking, analytics or backend integrations are enabled. Network graphics represent the company's vision, not verified coverage. Generated images are representative demo visuals. Approved privacy and terms copy is required before public launch.

## Design and assets

Brand tokens and responsive component styles: src/app/globals.css.
Services, navigation and story copy: src/lib/content.ts.
Photos and supplied logo: public/images/.
Motion: src/components/motion.tsx.
Forms: src/components/forms.tsx.

The fonts are installed locally via @fontsource, allowing the demo to render without a Google Fonts network request.

## Project documentation and checks

Start with docs/BLUEPRINT_REVIEW.md and docs/PRD.md. Supporting documents cover the design system, architecture, data model, security, code style, testing, UX flows, API scope, agent guidance and maintenance workflows. Actual check results are recorded in docs/VERIFICATION.md.

```powershell
npm.cmd run check
npm.cmd run test:routes
```

The route checks require a running server (default http://localhost:3001). Set TEST_BASE_URL for another port. Node 22.18+ is required for native TypeScript test execution. TypeScript 6.0.3 is used to remain compatible with the installed ESLint parser.

News (/news), demo editorial Stories (/stories and /stories/[slug]) and Blog (/blog, currently empty) now have separate screens and navigation links. Existing /news/[slug] detail links continue working.
