// Wires the two live demos on the page to the DOM.
// Logic lives in src/greet.js and src/site.js; this file only reads inputs and writes text.
import { double, triple } from './src/greet.js';
import { greetingFor } from './src/site.js';

const nameInput = document.getElementById('name-input');
const greeting = document.getElementById('greeting');
const numberInput = document.getElementById('number-input');
const doubled = document.getElementById('doubled');
const tripled = document.getElementById('tripled');

// Show the greeting for whatever is typed. Always textContent, never innerHTML.
function renderGreeting() {
  greeting.textContent = greetingFor(nameInput.value);
}

// Show double() and triple() of the number. Empty or invalid input shows a dash.
function renderMaths() {
  const raw = numberInput.value.trim();
  const n = Number(raw);
  if (raw === '' || Number.isNaN(n)) {
    doubled.textContent = '—';
    tripled.textContent = '—';
    return;
  }
  doubled.textContent = String(double(n));
  tripled.textContent = String(triple(n));
}

nameInput.addEventListener('input', renderGreeting);
numberInput.addEventListener('input', renderMaths);

// Initial render so the page matches the script state on load.
renderGreeting();
renderMaths();
