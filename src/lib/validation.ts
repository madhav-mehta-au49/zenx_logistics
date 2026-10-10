import type { EnquiryValues, FormValues } from '../types/forms';

export function normalisePhone(value: string): string {
  return value.trim().replace(/[\s()+-]/g, '');
}

export function isValidPhone(value: string): boolean {
  return /^\d{10,15}$/.test(normalisePhone(value));
}

export function isValidEmail(value: string): boolean {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function readFormValues(form: FormData): FormValues {
  const values: FormValues = {};
  for (const [name, value] of form.entries()) {
    if (typeof value === 'string') values[name] = value.trim();
  }
  return values;
}

export function validateEnquiry(
  values: EnquiryValues,
  allowedServices: readonly string[],
  detailed = false,
): string | null {
  if (!values.name.trim() || values.name.length > 100)
    return 'Please enter your name (up to 100 characters).';
  if (!allowedServices.includes(values.service)) return 'Please select a service from the list.';
  if (values.message.trim().length < 10 || values.message.length > 3000)
    return 'Please describe your requirement in 10–3000 characters.';
  if (!values.email.trim() && !values.phone.trim())
    return 'Please provide an email address or phone number so the team can contact you.';
  if (values.email.trim() && !isValidEmail(values.email))
    return 'Please enter a valid email address.';
  if (values.phone.trim() && !isValidPhone(values.phone))
    return 'Please enter a valid phone number with 10–15 digits.';
  if (detailed && (!values.city.trim() || values.city.length > 150))
    return 'Please enter your operating city (up to 150 characters).';
  return null;
}

export function validateRegistration(values: FormValues, step: number): string | null {
  if (step === 1) {
    if (!values.name?.trim() || values.name.length > 100)
      return 'Please enter your full name (up to 100 characters).';
    if (!isValidPhone(values.phone ?? ''))
      return 'Please enter a valid phone number with 10–15 digits.';
    if (values.email?.trim() && !isValidEmail(values.email))
      return 'Please enter a valid email address.';
    if (!values.city?.trim() || values.city.length > 150)
      return 'Please enter your city (up to 150 characters).';
  } else {
    if (!values.location?.trim() || values.location.length > 150)
      return 'Please enter your preferred working location.';
    if ((values.interest?.length ?? 0) > 1500)
      return 'Please keep your interest description within 1500 characters.';
  }
  return null;
}
