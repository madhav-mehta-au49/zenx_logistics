# Data model and database

## Current decision

No database is used by this demo. Do not invent users/projects/tasks tables from the PDF examples.

## Public content model

Services: unique slug, title, category, icon, description, image key, capability strings.
Stories: unique slug, tag, title, excerpt, image key and approved positioning text.
Contact: email, phone, address and support hours.
Navigation: title/href list.
Source: src/lib/content.ts. Slugs use lowercase hyphen-separated names. Categories must match the filter list.

## Transient form values

Enquiry: name/company/email/phone/service/message plus optional city, pickup/destination, role/quantity.
Registration: role, name, phone, optional email, city, preferred location, optional experience/interest.
Storage: browser React state only; no localStorage, cookie, database, email or API persistence.

## Validation and constraints

Required non-whitespace values; supported service whitelist; reasonable length limits; email or 10–15 digit normalised phone; detailed form requires city. Role is rider or recruiter only.

## Relationships/indexes/soft delete/audit/migrations

Not applicable without persistent storage. No users, IDs, foreign keys, timestamps, indexes, soft delete or audit history are invented.

## Sensitive fields

Names/contact/location may be personal data. Use fictional test values. Do not log or retain entered values. No identity documents, passwords or payment data.

## Production questions

Retention, consent, access roles, lawful privacy text, storage provider and deletion process require actual client decisions. If persistence is later authorised, document schema, constraints, migration and rollback; test migrations separately before touching production data.

## Seed data

Curated service/story content and representative generated images only. No fake customer accounts or performance data.
