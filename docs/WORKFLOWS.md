# Maintenance workflows and prompts

## Implement a feature

Read docs/PRD.md plus relevant design/architecture/security/UX/API documents and affected code. Describe files, dependencies, data/API impacts and applicable tests. Implement the explicitly requested scope, run checks and update docs. Report actual results and limitations.

## Fix a bug

Record observed/expected behaviour and reproduction. Find the cause, make a focused fix, verify the original case and adjacent journeys. Do not rewrite unrelated screens or change branding.

## Review before release

Compare changes with PRD/design/security/API. Assess validation, error states, permissions, retention and third-party side effects if present. Separate verified defects from open client decisions.

## Checklist

Before: users/scope/flows clear; sources and permissions established; design and data/API decisions agree.
During: one coherent feature; no unrelated integrations or credentials; preserve behaviour; review potentially destructive migrations if ever applicable.
Before delivery: applicable unit/routes/lint/types/format/build; browser checks; unintended-change review; docs and recorded limitations.

## Lightweight documentation

Use each file for its own responsibility. Update actual decisions rather than copying boilerplate. No giant speculative schema or unused stack.
