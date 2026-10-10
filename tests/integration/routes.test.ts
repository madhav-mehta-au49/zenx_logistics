import assert from 'node:assert/strict';
import { test } from 'node:test';
import { services, stories } from '../../src/lib/content.ts';
const base = process.env.TEST_BASE_URL ?? 'http://localhost:3001';
const pages = [
  '/',
  '/services',
  '/network',
  '/about-us',
  '/work-with-us',
  '/contact',
  '/register/rider',
  '/register/recruiter',
  '/news',
  '/stories',
  '/blog',
  '/gallery',
  '/privacy',
  '/terms',
  ...services.map((service) => `/services/${service.slug}`),
  ...stories.map((story) => `/news/${story.slug}`),
  ...stories.map((story) => `/stories/${story.slug}`),
];
test('all supported pages return HTML with defensive headers', async () => {
  for (const path of pages) {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get('content-type') ?? '', /text\/html/, path);
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff', path);
    assert.equal(response.headers.get('x-frame-options'), 'DENY', path);
    await response.arrayBuffer();
  }
});
test('invalid page, service, story and role routes return 404', async () => {
  for (const path of [
    '/not-a-page',
    '/services/not-a-service',
    '/news/not-a-story',
    '/stories/not-a-story',
    '/register/not-a-role',
  ]) {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 404, path);
    await response.arrayBuffer();
  }
});
test('news, stories and blog render distinct page content', async () => {
  const news = await (await fetch(new URL('/news', base))).text();
  const storiesPage = await (await fetch(new URL('/stories', base))).text();
  const blog = await (await fetch(new URL('/blog', base))).text();
  assert.match(news, /Our Big Dream Is Bigger Than Logistics/);
  assert.match(storiesPage, /People behind the possibilities/);
  assert.match(storiesPage, /href="\/stories\/people-first"/);
  assert.match(storiesPage, /Growth That Creates Opportunities/);
  assert.match(blog, /No blog posts published yet/);
  assert.doesNotMatch(news, /class="news-grid"/);
});
