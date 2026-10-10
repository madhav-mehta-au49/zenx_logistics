import assert from 'node:assert/strict';
import { test } from 'node:test';
import { categories, services, stories } from '../../src/lib/content.ts';
test('all 13 services have unique, route-safe slugs and supported categories', () => {
  assert.equal(services.length, 13);
  assert.equal(new Set(services.map((service) => service.slug)).size, services.length);
  for (const service of services) {
    assert.match(service.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(categories.includes(service.category));
    assert.ok(['hero', 'warehouse', 'rider'].includes(service.image));
    assert.ok(service.features.length > 0);
  }
});
test('story slugs and referenced assets remain valid', () => {
  assert.equal(new Set(stories.map((story) => story.slug)).size, stories.length);
  for (const story of stories) {
    assert.match(story.slug, /^[a-z0-9-]+$/);
    assert.ok(['hero', 'warehouse', 'rider'].includes(story.image));
  }
});
