// Pure helpers for the landing page. No DOM access in this file, so Node can test it.
import { greet } from './greet.js';

export const DEFAULT_NAME = 'world';

// Trims the raw input and falls back to DEFAULT_NAME when it is empty or whitespace.
export function greetingFor(rawName) {
  const trimmed = typeof rawName === 'string' ? rawName.trim() : '';
  return greet(trimmed || DEFAULT_NAME);
}
