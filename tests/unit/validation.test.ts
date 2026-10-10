import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  isValidPhone,
  isValidEmail,
  normalisePhone,
  readFormValues,
  validateEnquiry,
  validateRegistration,
} from '../../src/lib/validation.ts';

const valid = {
  name: 'Demo Reviewer',
  email: 'reviewer@example.com',
  phone: '',
  service: 'Warehousing',
  message: 'Example warehouse requirement.',
  city: 'Demo City',
};
test('phone validation accepts formatted numbers and rejects punctuation-only or malformed numbers', () => {
  assert.equal(normalisePhone('+91 (98765) 43210'), '919876543210');
  assert.equal(isValidPhone('+91 (98765) 43210'), true);
  for (const value of ['----------', '12345', '1234567890123456', '+91abc9876543210', ''])
    assert.equal(isValidPhone(value), false);
});
test('email validation rejects whitespace and incomplete addresses', () => {
  assert.equal(isValidEmail('reviewer@example.com'), true);
  for (const value of ['x@', 'x@y', 'x y@example.com', 'x@@example.com'])
    assert.equal(isValidEmail(value), false);
});
test('enquiry requires meaningful text, an allowed service, and a contact method', () => {
  assert.equal(validateEnquiry(valid, ['Warehousing'], true), null);
  assert.match(validateEnquiry({ ...valid, name: '   ' }, ['Warehousing'])!, /name/);
  assert.match(
    validateEnquiry({ ...valid, service: 'Invented Service' }, ['Warehousing'])!,
    /service/,
  );
  assert.match(validateEnquiry({ ...valid, email: '', phone: ' ' }, ['Warehousing'])!, /contact/);
  assert.match(
    validateEnquiry({ ...valid, message: '          ' }, ['Warehousing'])!,
    /requirement/,
  );
});
test('either email or phone works; invalid provided contact still fails', () => {
  assert.equal(
    validateEnquiry({ ...valid, email: '', phone: '9876543210' }, ['Warehousing']),
    null,
  );
  assert.match(validateEnquiry({ ...valid, phone: 'abc' }, ['Warehousing'])!, /phone/);
  assert.match(validateEnquiry({ ...valid, email: 'invalid' }, ['Warehousing'])!, /email/);
});
test('detailed enquiry requires city and maximum lengths are enforced', () => {
  assert.equal(validateEnquiry({ ...valid, city: '' }, ['Warehousing']), null);
  assert.match(validateEnquiry({ ...valid, city: ' ' }, ['Warehousing'], true)!, /city/);
  assert.match(validateEnquiry({ ...valid, name: 'a'.repeat(101) }, ['Warehousing'])!, /name/);
  assert.match(
    validateEnquiry({ ...valid, message: 'a'.repeat(3001) }, ['Warehousing'])!,
    /requirement/,
  );
});
test('registration refuses whitespace, invalid phone, bad email and missing second-step location', () => {
  const values = { name: 'Demo Rider', phone: '9876543210', email: '', city: 'Demo City' };
  assert.equal(validateRegistration(values, 1), null);
  assert.match(validateRegistration({ ...values, phone: '----------' }, 1)!, /phone/);
  assert.match(validateRegistration({ ...values, city: '  ' }, 1)!, /city/);
  assert.match(validateRegistration({ ...values, email: 'invalid' }, 1)!, /email/);
  assert.equal(validateRegistration({ location: 'Demo City', interest: '' }, 2), null);
  assert.match(validateRegistration({ location: ' ' }, 2)!, /location/);
});
test('FormData parsing trims text and ignores binary files', () => {
  const form = new FormData();
  form.set('name', ' Demo ');
  form.set('file', new Blob(['x']), 'x.txt');
  assert.deepEqual(readFormValues(form), { name: 'Demo' });
});
