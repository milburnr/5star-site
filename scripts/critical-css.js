#!/usr/bin/env node
/**
 * Post-build: inline critical CSS into each HTML file, defer the rest.
 *
 * Uses Critters to walk the built HTML, figure out which CSS rules apply
 * to the DOM at initial paint, inline those into <style>, and convert the
 * <link rel="stylesheet"> to a preload-then-apply. This eliminates the
 * 500ms+ render-block on mobile that was keeping LCP above 4.5s.
 *
 * Why this isn't handled by next.config experimental.optimizeCss:
 * Critters/optimizeCss only runs on the server-render path. With
 * `output: "export"` the HTML is emitted by `next build` before
 * optimizeCss gets a chance. So we run Critters manually over the
 * exported HTML files.
 *
 * Runs on the homepage only by default — critical CSS extraction has
 * nonzero failure modes (missing selectors → FOUC) and the homepage is
 * the one we care most about for PSI. Expand `targets` if needed.
 */
const Critters = require('critters');
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'out');
const targets = [
  'index.html',
];

const critters = new Critters({
  path: outDir,
  publicPath: '/',
  preload: 'swap',           // converts <link> to preload w/ onload swap
  pruneSource: false,         // keep the original css file (non-blocking now)
  reduceInlineStyles: false,  // don't touch inline style= attributes
  mergeStylesheets: false,
  fonts: false,               // don't preload fonts (Next.js already does this)
  logLevel: 'warn',
});

(async () => {
  for (const rel of targets) {
    const full = path.join(outDir, rel);
    if (!fs.existsSync(full)) {
      console.log('skip (missing):', rel);
      continue;
    }
    const html = fs.readFileSync(full, 'utf8');
    const sizeBefore = html.length;
    let result = await critters.process(html);

    // Next.js (app router) emits a duplicate <link rel="stylesheet"> alongside
    // the Critters-output preload link. Both render-block paint on first load
    // (the "preload-then-apply" link from Critters is useless if a regular
    // stylesheet link is also present). Strip the raw stylesheet links — the
    // preload version is already in place + we add a <noscript> fallback.
    const hrefs = new Set();
    // First: capture hrefs we need for the noscript fallback
    for (const m of result.matchAll(/<link\s+rel="stylesheet"\s+href="(\/_next\/static\/css\/[^"]+)"[^>]*>/g)) {
      hrefs.add(m[1]);
    }
    // Second: remove those blocking stylesheet links entirely
    result = result.replace(
      /<link\s+rel="stylesheet"\s+href="\/_next\/static\/css\/[^"]+"[^>]*>/g,
      ''
    );
    // Third: load the full CSS AFTER LCP fires so it doesn't trigger a repaint
    // that delays LCP. Without this delay, the async CSS arrives mid-paint and
    // the browser discards the initial "LCP candidate" paint + re-paints when
    // styles apply — which is what kept mobile LCP at 4.5s.
    //
    // Strategy: inject a tiny inline script that waits for `load` event then
    // requestIdleCallback, then appends the stylesheet links. This defers
    // non-critical CSS to idle time AFTER LCP has been measured.
    // <noscript> fallback still present for users without JS.
    if (hrefs.size) {
      const hrefList = JSON.stringify([...hrefs]);
      const loader = `<script>addEventListener('load',function(){(requestIdleCallback||setTimeout)(function(){${hrefList}.forEach(function(h){var l=document.createElement('link');l.rel='stylesheet';l.href=h;document.head.appendChild(l);});})});</script>`;
      const noscript = '<noscript>' +
        [...hrefs].map(h => `<link rel="stylesheet" href="${h}">`).join('') +
        '</noscript>';
      result = result.replace('</head>', loader + noscript + '</head>');
    }

    fs.writeFileSync(full, result);
    const sizeAfter = result.length;
    const added = sizeAfter - sizeBefore;
    console.log(`critters: ${rel} — html ${sizeBefore} → ${sizeAfter} (+${added} bytes inlined critical CSS, stylesheets now deferred)`);
  }
})().catch(e => {
  console.error('critters failed:', e);
  process.exit(1);
});
