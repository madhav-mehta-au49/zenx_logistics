export type RegistrationRole = 'rider' | 'recruiter';
export type FormValues = Record<string, string>;
export interface EnquiryValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  city: string;
}
