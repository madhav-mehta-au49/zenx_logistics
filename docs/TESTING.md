# Testing

## Goals

Verify service discovery, invalid/valid form values, registration back/forward preservation, demo-only confirmations, gallery keyboard behaviour, mobile menu, 404s, full images/map and responsive overflow.

## Automated layers

Unit: Node test runner, pure validation edge cases and content/slug/category integrity.
Integration: HTTP route tests against an already-running local server, including dynamic routes, 404 response and defensive headers. They do not click UI or send real applications.
Browser journeys: manually exercised through the supported browser tool and recorded in VERIFICATION.md. No automated browser suite is claimed.
Database/auth/payments/API mutations: not applicable, not untested hidden features.

## Commands

npm.cmd test
npm.cmd run test:routes
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run format:check
npm.cmd run build
npm.cmd run check (unit, lint, types, formatting, build)
Route test base: http://localhost:3001; override TEST_BASE_URL for another server.

## Critical journeys

- Home -> Services -> filter -> detail -> enquiry.
- Invalid contact -> visible error -> correct values -> busy -> prototype confirmation.
- Work With Us -> Rider/Recruiter -> step 1 -> step 2 -> Back -> step 2 values preserved -> demo completion.
- Gallery -> filter -> lightbox -> Escape -> focus restored.
- Mobile menu -> destination -> menu closes; all images remain complete.

## Coverage policy

Prioritise behaviour and boundary cases; do not target arbitrary 100% line coverage or test static markup line-for-line. Use fictional values. No network submission should occur.

## Definition of done

Unit/integration checks pass; lint/types/format/build pass; critical browser cases verified or explicitly marked unrun; no blocking failures; docs reflect code.
