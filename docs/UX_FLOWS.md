# User flows

## Business enquiry

Home -> Services -> category -> service detail -> preselected enquiry, or Contact directly.
Inputs -> required/format validation -> loading -> explicit demo confirmation.
Failure: invalid/blank input stays editable with an accessible message. No API call.
Success: no message sent or saved; real contact email is available. Reset starts another demo.
Detailed Transport & Delivery: optional pickup/destination. Operations & Workforce: optional role/team size. Detailed form requires operating city.

## Rider/recruiter registration

Work With Us -> choose role -> name/phone/email/city -> validate -> preferred location/experience/interest -> Back or Complete Demo.
Back retains both steps. Invalid values cannot progress. Busy submit prevents duplicate actions.
Success says no application was submitted. Eligibility/docs/terms are client-confirmed later; no ID uploads.

## Service discovery

Services -> All/Transport/Workforce/Advisory filter -> visible result count -> valid detail. Unknown detail slug -> helpful 404 -> Home.

## Gallery

Gallery -> filter -> open image -> focus close button, background scroll locked -> Escape/close/backdrop -> focus returns to trigger. Full image uses contain.

## Navigation and motion

Desktop links/resources or mobile menu. A brief logo-only loader shows on first load/reload; client route changes use the thin top progress bar (no full-screen loader). Escape closes menu. Back-to-top respects reduced motion. Header/footer (with Facebook, Instagram, Threads and X links) shared on all routes.

## Failure, empty and accessibility states

Page boundary: safe message, Try Again and Home. 404: return path. Filter counts announce changes. Native invalid fields and form alerts support keyboard users.
No sign-in/onboarding/dashboard/checkout flow belongs to this product.
