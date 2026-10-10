# Code style

## Principles

Readable, focused TypeScript. Reuse established components; preserve visual behaviour. Avoid unrelated rewrites and unnecessary dependencies.

## Naming and structure

PascalCase React components and types; camelCase functions/variables; lower-kebab filenames and route slugs. Public content in lib/content.ts; pure validation in lib/validation.ts; shared input types in types/forms.ts. No generic services/database directories without an actual responsibility.

## Imports and types

External imports first, internal @/ imports next. Use type-only imports for types. Strict mode; avoid any and unsafe FormData casts. Parse field values explicitly; service identifiers must be whitelisted.

## Components/functions

One logical responsibility; shared layout components remain reusable. Server components by default; client boundaries only for interactivity. Remove unused imports. Preserve conditional fields and demo disclosure.

## Error handling

Return expected validation messages; use the page error boundary for unexpected exceptions. Never display raw exception details or log entered form data.

## Formatting and tools

Prettier with single quotes, semicolons, 2-space indentation, trailing commas and 100-column print width. ESLint uses installed Next core-web-vitals and TypeScript configs. Type check: tsc --noEmit. Test runner: Node built-in test runner with TypeScript stripping.

## Comments and logs

Comments explain reasons/tradeoffs. No redundant narration. No application logging library is needed; avoid browser logs unless useful and free of personal data.

## Changes

Do not change the approved palette/section order, crop images, redesign the logo or add integrations without user instructions. Update relevant docs when actual behaviour changes.
