import test from 'node:test';
import assert from 'node:assert';
import { greet, double } from '../src/greet.js';

test('greet returns "Hello, <name>!"', () => {
  assert.strictEqual(greet('world'), 'Hello, world!');
  assert.strictEqual(greet('Alice'), 'Hello, Alice!');
});

test('double returns n * 2', () => {
  assert.strictEqual(double(2), 4);
  assert.strictEqual(double(0), 0);
  assert.strictEqual(double(-3), -6);
  assert.strictEqual(double(2.5), 5);
});
