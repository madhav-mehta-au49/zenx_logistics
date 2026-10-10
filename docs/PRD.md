# Product requirements

## Product overview

ZENX Logistics redesign demo is a responsive corporate website for ZENX Logistics Private Limited. Platform: web. Primary audiences: business customers, prospective delivery riders and field recruiters.

## Problem and goals

The existing site mixes service discovery, recruitment and incomplete template content. The demo gives each audience a clear path and presents the approved premium navy/blue/gold identity.
Primary goal: a coherent, client-reviewable redesign. Secondary goals: accessible navigation; service-specific enquiries; rider/recruiter registration previews.

## Users and stories

- Business customer: discover a service, read capabilities and discuss a requirement.
- Rider: explore opportunities and preview the registration journey.
- Recruiter: understand the role and preview a separate application.
- Client reviewer: compare the implementation with the approved mockup on desktop and mobile.

## Core features and acceptance criteria

1. Homepage: hero, capability strip, services, India network, process, recruitment, enquiry, full footer in the approved order. No additional homepage sections without a user request.
2. Brand and imagery: original logo shown completely in header/footer. All photos use contain/full aspect-ratio layouts; do not crop subjects. Wide hero photos stack above text on mobile. Original image aspect ratios mean some heights differ from the raster mockup.
3. Services: 13 listed services; category filters; stable detail slugs; unknown slugs return 404.
4. Network: full vector India map with state outlines/islands and illustrative routes. No unverified active coverage statistics or locations.
5. Enquiry: required name/service/message; at least one valid contact method; optional company; conditional location/staffing fields on detailed form; visible errors, busy and demo success states. No network submission or storage.
6. Recruitment: separate rider/recruiter routes; two steps; invalid details cannot progress; back navigation preserves both steps; completion explicitly says no application was sent.
7. News, Stories and Blog: separate screens and menu links; News follows the live company vision sections; Stories has demo editorial cards/details; Blog has a truthful empty state. No invented announcement dates. Gallery filters and keyboard-accessible lightbox.
8. Accessibility and motion: labelled controls, focus indication, keyboard navigation, responsive layouts, reduced-motion handling and no horizontal overflow at 390px/1440px.

## MVP and non-goals

Must-have: all implemented routes, local fonts/assets, loading feedback, form previews, map, build and checks.
Nice-to-have: client-provided photos and more approved copy.
Outside demo scope: authentication, database, real form API, file uploads, payments, live tracking, admin dashboard, analytics and public deployment.

## Success measures

All route checks pass; validation edge cases pass; type/lint/build checks pass; critical journeys are manually verified; layout matches approved structure. No fabricated business-performance claims.

## Constraints and assumptions

Next.js App Router and TypeScript strict mode; Manrope/Inter, Lucide, Motion; preserve latest explicit user decisions. Project: D:/office work/zenx_logistics. Original target presentation deadline was 4 PM IST on 10 October 2026; it is historical context, not a recurring schedule.

## Open decisions before production

Client must confirm active coverage, available opportunities, eligibility and required documents, real submission destination, privacy/terms, hosting and any analytics. These are unresolved decisions, not permission to add features.

## Definition of done

Implemented acceptance criteria, passing relevant tests/lint/types/build, verified critical journeys, updated docs and explicitly recorded limitations.
