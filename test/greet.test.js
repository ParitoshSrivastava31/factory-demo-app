import test from 'node:test';
import assert from 'node:assert';
import { greet, double, triple } from '../src/greet.js';

test('greet returns "Welcome, <name>!"', () => {
  assert.strictEqual(greet('world'), 'Welcome, world!');
  assert.strictEqual(greet('Alice'), 'Welcome, Alice!');
});

test('double returns n * 2', () => {
  assert.strictEqual(double(2), 4);
  assert.strictEqual(double(0), 0);
  assert.strictEqual(double(-3), -6);
  assert.strictEqual(double(2.5), 5);
});

test('triple returns n * 3', () => {
  assert.strictEqual(triple(2), 6);
  assert.strictEqual(triple(0), 0);
  assert.strictEqual(triple(-3), -9);
  assert.strictEqual(triple(2.5), 7.5);
});
