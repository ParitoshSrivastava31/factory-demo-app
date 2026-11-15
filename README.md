# Factory Demo App

A small landing page for **Greetings as a Service**, a fictional product built on the `greet()` function in `src/greet.js`. This repo is the demo target for the software factory, so edits should stay small, plain and easy to read.

## What is here

- `index.html`: the page. Sections have ids (`hero`, `how-it-works`, `advanced-maths`) and an HTML comment above each one.
- `styles.css`: design tokens (CSS variables) at the top. Light and dark themes follow `prefers-color-scheme`.
- `app.js`: a small ES module that connects the live demos to the page.
- `src/greet.js`: `greet(name)`, `double(n)` and `triple(n)`.
- `src/site.js`: `greetingFor(rawName)`, a pure helper that trims input and falls back to "world".
- `test/`: `node:test` tests for the greeting code and the page.

There is no build step and no dependencies. Vercel serves the repo root as-is.

## View locally

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080

## Tests

```sh
npm test
```
