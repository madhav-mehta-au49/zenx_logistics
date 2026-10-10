# Design system

## Direction and source of truth

Premium editorial logistics website. The approved homepage mockup and the user's full-image/original-logo correction govern layout. Preserve white/light sections framed by navy hero, network, enquiry and footer. Maintain the approved section order.

## Brand and voice

ZENX Logistics Private Limited. Clear, confident, people-focused language. Do not invent endorsements, fleet ownership, certifications, statistics or guarantees.
Logo: public/images/logo.jpg is the supplied original artwork. The derived public/images/logo-mark.png crops only the surrounding white margin and removes the flat white background (transparent PNG; no artwork is clipped, recoloured or replaced). The SAME logo-mark.png file is used in the header, footer, first-load screen and app icons; header ~46px, footer ~74px, responsive down to ~40px. App icons (favicon.ico, icon.png, apple-icon.png) come from the same crop. Because the mark is largely navy, the footer places it over a soft centred light glow (no hard box) so it stays legible on the dark navy surface.

## Tokens

Navy #081B36; blue #0759C7; cyan #26BCE7; gold #F4B41B; white #FFFFFF; pale #F4F7FB; ink #15243A; muted #526277; border #DCE4EF. Success uses blue plus explicit success text/icon, warning uses gold with navy text, error #B42318. Tokens live in src/app/globals.css.

## Typography

Manrope 400/600/700/800 for headings; Inter 400/500/600 for body/controls. Fonts are bundled using @fontsource.
H1 responsive 40–72px, weight 800, line-height about 1.1; H2 30–46px/800/1.17; H3 16–21px/800; body 16px/400/1.65; supporting text 12–14px; small labels 10–11px. Keep legal and form disclosures legible.

## Spacing, radii and shadows

Use a 4px-compatible rhythm: 4/8/12/16/24/32/48/64/96. Desktop content maximum 1280px with 48px sides; mobile 20px sides. Section padding normally 70px desktop and 48px mobile, with intentional section-specific overrides.
Buttons radius 6px; inputs 5px; cards 9–12px. Shadows are subtle navy at low opacity. Avoid neon/glass effects.

## Components

Gold primary buttons use navy text; outline buttons use white on navy; plain/text actions use brand blue. Interactive targets at least 44px where practical. Busy controls show text/spinner and prevent repeated submission.
Inputs: visible labels, required/optional indications, normal/focus/error states; focus uses blue border and shadow. Do not use placeholders as labels.
Cards: fine borders, generous padding, small icons and useful content. Navigation: shared sticky header, mobile menu, resources links, full four-column footer. Header and footer were designed in Stitch (project "ZENX Logistics — Header & Footer", theme "Maritime Precision") and implemented in the project's own React/CSS: glass sticky header (backdrop blur, hairline border) with a pill gold CTA and a Resources dropdown; four-column dark footer with a gold top border and the official Facebook, Instagram, Threads and X brand icons (src/components/social-icons.tsx) linked to the supplied profiles.

## Images and map

Use the three local generated photographs where a photographic section benefits, as representative demo assets (not evidence of real teams/facilities). Display all imagery with object-fit: contain and its full aspect ratio. Never clip the original logo or photo subjects. To avoid repeating the same few photos everywhere, each service and story has a distinct on-brand SVG illustration (src/components/illustrations.tsx, `ServiceArt`) used on service cards, service-detail pages and story pages. India map is a vector from @svg-maps/india with illustrative gold routes; retain attribution.
Animated logistics background (src/components/background.tsx) layers drifting Lucide outline icons plus softened route lines and a panning grid behind hero, page-hero and network sections. It is decorative, aria-hidden, low-opacity and disabled under prefers-reduced-motion.

## States

Loading: the first-load screen shows only the logo-mark with a gentle orbit ring on a light background (no text, no box) and hides after ~1s via motion.tsx `InitialLoader`. It appears on reload only — there is no full-screen loader on client route changes; those use the thin top navigation progress bar. Empty: helpful 404. Error: recoverable page boundary plus form messages. Success: explicit prototype outcome, never imply a real message was sent.

## Responsive and accessibility

Mobile <=768px; tablet 769–1020px; desktop >1020px, with an additional 1180px adjustment. Preserve DOM content order and readable text. Support keyboard and Escape; visible focus; semantic headings/landmarks; appropriate names/current-page attributes. Respect prefers-reduced-motion in CSS and Motion.
