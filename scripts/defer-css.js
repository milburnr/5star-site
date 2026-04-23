#!/usr/bin/env node
/**
 * Post-build: convert render-blocking stylesheet <link>s into a
 * preload-then-apply pattern to eliminate the 500ms+ render-block
 * on mobile.
 *
 * Pattern:
 *   <link rel="stylesheet" href="x.css">
 * becomes:
 *   <link rel="preload" href="x.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
 *   <noscript><link rel="stylesheet" href="x.css"></noscript>
 *
 * Why this is safe for this site:
 *   - Hero region uses inline styles (text-shadow, absolute positioning)
 *     that don't depend on the external stylesheet.
 *   - Tailwind utility classes applied to hero look OK enough with
 *     brief FOUC in the ~50-150ms window before the preloaded CSS
 *     applies — crawlers see styled content (CSS still applies on
 *     the server-rendered HTML via the noscript fallback and the
 *     eventual stylesheet apply).
 *
 * We only run this on pages where the user-visible cost of FOUC is
 * lower than the cost of render-blocking — currently just the
 * homepage.
 */
const fs = require('fs');
const path = require('path');

const targets = ['out/index.html'];

let totalChanged = 0;
for (const rel of targets) {
  const full = path.resolve(__dirname, '..', rel);
  if (!fs.existsSync(full)) {
    console.log('skip (missing):', rel);
    continue;
  }
  const src = fs.readFileSync(full, 'utf8');

  // Only match stylesheet links that point at /_next/static/css/ — leaves
  // any future third-party stylesheets alone.
  const re = /<link\s+rel="stylesheet"\s+href="(\/_next\/static\/css\/[^"]+)"([^>]*)\/?>/g;

  let changed = 0;
  const out = src.replace(re, (_m, href) => {
    changed++;
    return (
      `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">` +
      `<noscript><link rel="stylesheet" href="${href}"></noscript>`
    );
  });

  if (changed > 0) {
    fs.writeFileSync(full, out);
    console.log(`deferred ${changed} stylesheet(s) in ${rel}`);
    totalChanged += changed;
  } else {
    console.log(`no stylesheets matched in ${rel}`);
  }
}
console.log(`Total stylesheets deferred: ${totalChanged}`);
