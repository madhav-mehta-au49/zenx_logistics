# Security

## Threat boundary

Public local presentation demo. No authentication, role-protected backend, data writes or uploads. Rider/recruiter are enquiry roles, not access-control permissions.

## Authentication and authorisation

Not applicable today. If admin/storage APIs are later requested, enforce permissions server-side, never through hidden UI alone.

## Secrets and environment

No runtime credentials required. Never hardcode or expose private credentials; never print secrets or personal form values. .env files remain ignored. Use only fictional test contacts. Do not add tracking tokens or personal documents to screenshots.

## Form/API security

Existing browser validation improves UX. It is not server-side protection and must not be described as such. No mutation API exists. Production submission requires server validation, spam/rate controls, scoped destination, privacy decisions and explicit success/failure/retry contracts.
CORS/rate limiting/idempotency/authentication: not applicable to absent APIs; record requirements before adding endpoints.

## HTTP controls

X-Content-Type-Options: nosniff; X-Frame-Options: DENY; Referrer-Policy: strict-origin-when-cross-origin; Permissions-Policy disables camera/microphone/geolocation. No HSTS on this local HTTP demo. A production CSP needs nonces/hashes compatible with Next bootstrap and Motion styles; avoid a pretend unsafe policy.

## Data and logging

No persistent PII. Do not log values, cookies, tokens or credentials. Error UI is generic and retryable; avoid displaying exception stack/digest to visitors. Encryption/retention/deletion policies await a real storage decision.

## Files

Uploads disabled. Public assets are logo/concept photos only. Retain licence information for map and font libraries.

## Review

Run npm audit, lint, type checks, validation tests and build. Critical/high findings must be assessed before a public release. Audit is a dependency advisory check, not a full penetration test.

## Public-release prerequisites

Approved terms/privacy, coverage/content confirmation, hosting/TLS, real backend contract if requested, server validation and abuse controls for writes. No public deployment is implied by this documentation task.
