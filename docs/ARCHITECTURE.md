# Architecture

## Overview and pattern

One Next.js App Router application with server-rendered routes and focused client components. This is a presentation/demo application; no separate business backend.

## Stack

Next.js 16.x, React 19.x, TypeScript strict, Tailwind PostCSS plus shared CSS, Motion for React, Lucide, @fontsource Manrope/Inter, @svg-maps/india. package-lock.json is authoritative for installed versions.
Backend: Next.js rendering only. Database/authentication/uploads/payments/email delivery/analytics: not implemented or required for this demo. Hosting: local, deployment undecided.

## Components and dependencies

app/ owns routes, metadata and page composition; components/ owns reusable UI/interactions; lib/content.ts is curated public content; lib/validation.ts owns pure browser validation; types/ owns shared input types. Client components may use public content but cannot access credentials.
No direct database access, external mutation APIs or server actions. Do not introduce them by copying generic examples.

## Diagram

Browser -> Next.js route -> server-rendered page -> interactive client components
Forms -> local validation -> temporary React state -> explicit demo confirmation
No form -> API -> database path exists.

## Data flow

Service route awaits params, looks up a slug and renders or returns notFound. Filters update local state. Form values are validated, a small demo busy state is shown, then local confirmation renders. Refresh/navigation clears local values.

## Structure

src/app: homepage, services/[slug], network, about-us, contact, work-with-us, register/[role], news/[slug], stories/[slug], blog, gallery, privacy, terms, loading/error/404.
src/components: navigation/footer, motion (reveal + first-load loader + progress), forms, services, gallery, FAQ, map, per-service SVG illustrations (illustrations.tsx), social brand icons (social-icons.tsx), animated background (background.tsx) and shared presentation.
src/lib: static content and validation.
tests/unit: validation and content contracts.
tests/integration: optional running-server route checks.
docs: project decisions and verification.

## Decisions and tradeoffs

1. Locally bundled fonts avoid a presentation-time Google request.
2. Complete images take priority over cover crops after explicit user feedback.
3. Production and development output directories are separate to avoid contention on Windows.
4. Routes render dynamically: the observed Windows prerender-folder EPERM prevented static output. Production build succeeds with force-dynamic. Re-evaluate only when the deployment target is decided.
5. Client validation is a demo UX check, not production security validation.

## Performance and scaling

Use Next Image sizing/lazy loading; eagerly load the hero; small client interaction boundaries. No needless external assets or requests. Repeated role/service templates are reusable.

## Failure scenarios

Unknown slug: 404. Page exception: safe retry/back-home boundary; never expose the error payload. Invalid form: remains editable with message. Network submission/database/auth failure: not applicable; none exists. If future backend is added, define timeout/retry/idempotency contracts before implementation.
