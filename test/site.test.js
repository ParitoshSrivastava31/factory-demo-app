import test from 'node:test';
import assert from 'node:assert';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { greetingFor } from '../src/site.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const appJs = readFileSync(join(root, 'app.js'), 'utf8');

test('index.html has lang, viewport, title and main', () => {
  assert.match(html, /<html[^>]*\blang="en"/);
  assert.match(html, /<meta\s+name="viewport"\s+content="[^"]*width=device-width/);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.match(html, /<main[\s>]/);
});

test('index.html has the hero, how-it-works and maths sections by id', () => {
  for (const id of ['hero', 'how-it-works', 'advanced-maths']) {
    assert.match(html, new RegExp(`id="${id}"`), `missing #${id}`);
  }
});

test('index.html includes a fun fact line under the hero subheading', () => {
  assert.match(
    html,
    /<p class="subhead">[\s\S]*?<\/p>\s*<p class="fun-fact">\s*Fun fact: greetings have been served with 100% uptime since this morning\.\s*<\/p>/
  );
});

test('index.html loads app.js as a module script', () => {
  assert.match(html, /<script\s+type="module"\s+src="app\.js"\s*><\/script>/);
});

test('index.html uses only relative URLs for scripts, stylesheets and fonts', () => {
  const refs = [
    ...html.matchAll(/<script\b[^>]*\ssrc="([^"]*)"/g),
    ...html.matchAll(/<link\b[^>]*\shref="([^"]*)"/g),
  ].map((m) => m[1]);
  assert.ok(refs.includes('app.js'), 'app.js reference missing');
  assert.ok(refs.includes('styles.css'), 'styles.css reference missing');
  for (const ref of refs) {
    assert.doesNotMatch(ref, /^(https?:)?\/\//, `external URL found: ${ref}`);
  }
});

test('app.js never writes HTML with innerHTML', () => {
  assert.doesNotMatch(appJs, /\.innerHTML\b/);
});

test('greetingFor trims input and greets the name', () => {
  assert.strictEqual(greetingFor('Alice'), 'Hello, Alice!');
  assert.strictEqual(greetingFor('  Bob  '), 'Hello, Bob!');
});

test('greetingFor falls back to "world" for empty or whitespace-only input', () => {
  assert.strictEqual(greetingFor(''), 'Hello, world!');
  assert.strictEqual(greetingFor('   '), 'Hello, world!');
  assert.strictEqual(greetingFor('\t\n'), 'Hello, world!');
});

test('greetingFor falls back to "world" for non-string input', () => {
  assert.strictEqual(greetingFor(undefined), 'Hello, world!');
  assert.strictEqual(greetingFor(null), 'Hello, world!');
});
