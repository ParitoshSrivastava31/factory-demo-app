import test from 'node:test';
import assert from 'node:assert';
import { greet } from '../src/greet.js';

test('greet returns "Hello, <name>!"', () => {
  assert.strictEqual(greet('world'), 'Hello, world!');
  assert.strictEqual(greet('Alice'), 'Hello, Alice!');
});
