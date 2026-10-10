# API contracts

## Current contract

No application mutation API is implemented. Form submission handlers validate and change browser state only. Do not invent GET/POST resources from the PDF example.

## Existing HTTP surface

GET / and named pages return rendered HTML; /services/[slug] and /news/[slug] and /stories/[slug] resolve whitelisted content; /register/[role] accepts rider/recruiter; unknown slugs/roles/pages return 404.
Next image/static assets are framework resources, not business APIs. Base URL in the demo: http://localhost:3001.

## Side effects

Visiting/filtering/submitting the demo sends no enquiry/application/notification/payment and creates no persistent record. Choosing mailto/tel/social links delegates to those destinations.

## Before enabling a real POST contract

Document exact method/path, server request schema/allowed service or role values, permissions, validation, rate limits, privacy/retention, destination, success/error shape, retry/idempotency rules and tests. Browser validation must be repeated server-side. No provider or status-code contract is fabricated until a backend is requested.
