#!/usr/bin/env node
/**
 * Strip every <AnimatedCounter> usage from the codebase per
 * Rich's 2026-05-12 directive: "Remove all of them. Every single one.
 * Do not replace with different numbers. Do not keep any 'verified' ones."
 *
 * Strategy:
 *   1. Walk app/ for .tsx files.
 *   2. For each file with AnimatedCounter:
 *      a. Find each <AnimatedCounter ... /> tag line.
 *      b. Walk backward to the nearest <FadeIn> wrapping tag (matched
 *         by indent column).
 *      c. Walk forward to the matching </FadeIn>.
 *      d. If the enclosed block is a "stat section" — contains a
 *         `grid` className and >=2 stat-tile containers (the
 *         `text-X font-bold text-brand-gold` pattern) — schedule
 *         removal of the entire FadeIn block.
 *      e. If embedded inline (no enclosing FadeIn stat-section),
 *         schedule removal of just the surrounding stat-tile <div>
 *         (matched by enclosing div with `text-X font-bold` and the
 *         label div sibling).
 *   3. Apply removals in reverse order so indices stay stable.
 *   4. Remove `import { AnimatedCounter } from ...` line if no
 *      AnimatedCounter remains in the file.
 *
 * Modes: --dry (default) | --write
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const mode = process.argv.includes('--write') ? 'write' : 'dry';
const ROOT = 'app';

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.next' || entry.startsWith('.')) continue;
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) out.push(...walk(full));
    else if (entry.endsWith('.tsx')) out.push(full);
  }
  return out;
}

function indentOf(line) {
  const m = line.match(/^(\s*)/);
  return m ? m[1].length : 0;
}

/**
 * Given lines and a target line index, find the smallest enclosing
 * <FadeIn> block by walking backward until we find a `<FadeIn>` line
 * with indent < target's indent, then walk forward to its matching
 * `</FadeIn>`. Returns { start, end } 0-indexed line numbers, inclusive.
 * Returns null if not found.
 */
function findEnclosingFadeIn(lines, idx) {
  const targetIndent = indentOf(lines[idx]);
  // Walk backward
  let start = -1;
  for (let i = idx - 1; i >= 0; i--) {
    const line = lines[i];
    const li = indentOf(line);
    if (li < targetIndent && /<FadeIn[^>]*>\s*$/.test(line)) {
      start = i;
      break;
    }
  }
  if (start === -1) return null;
  // Walk forward for </FadeIn> at same indent as start
  const startIndent = indentOf(lines[start]);
  let end = -1;
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    if (indentOf(line) === startIndent && /<\/FadeIn>\s*$/.test(line)) {
      end = i;
      break;
    }
  }
  if (end === -1) return null;
  return { start, end };
}

/**
 * Heuristic: is this range a "stat section"? Look for grid + multiple
 * stat tile containers within.
 */
function isStatSection(lines, start, end) {
  const block = lines.slice(start, end + 1).join('\n');
  const hasGrid = /className=["'][^"']*\bgrid\b/.test(block);
  // Count stat tile signature: a div with `text-X font-bold text-brand-gold`
  const tileMatches = block.match(/text-(?:3xl|4xl|5xl)\s+font-bold\s+text-brand-gold/g) || [];
  // Also count plain stat-value divs `text-3xl font-bold` (for non-gold variants)
  const tileMatches2 = block.match(/text-(?:3xl|4xl|5xl)\s+(?:font-bold|font-heading)/g) || [];
  return hasGrid && (tileMatches.length >= 2 || tileMatches2.length >= 3);
}

/**
 * Find the enclosing stat-tile <div> for an embedded counter.
 * The pattern is `<div>\n  <div className="text-...font-bold...">\n    <AnimatedCounter />\n  </div>\n  <div>label</div>\n</div>`.
 * Returns { start, end } of the outermost wrapping <div> at the
 * indent above the counter's container.
 */
function findEnclosingTileDiv(lines, idx) {
  const targetIndent = indentOf(lines[idx]);
  // Walk backward for the `<div className="text-...font-bold..."` line just above
  let valueDivStart = -1;
  for (let i = idx - 1; i >= Math.max(0, idx - 5); i--) {
    if (/<div\s+className=["'][^"']*text-(?:3xl|4xl|5xl)[^"']*font-(?:bold|heading)/.test(lines[i])) {
      valueDivStart = i;
      break;
    }
  }
  if (valueDivStart === -1) return null;
  // Walk forward for its closing </div>
  let valueDivEnd = -1;
  let depth = 0;
  for (let i = valueDivStart; i < lines.length; i++) {
    const opens = (lines[i].match(/<div\b/g) || []).length;
    const closes = (lines[i].match(/<\/div>/g) || []).length;
    depth += opens - closes;
    if (depth === 0 && i > valueDivStart) {
      valueDivEnd = i;
      break;
    }
  }
  if (valueDivEnd === -1) return null;
  // Now find the outer tile <div> wrapping value + label. Walk back one more div.
  let tileStart = -1;
  const tileIndent = indentOf(lines[valueDivStart]) - 2;
  for (let i = valueDivStart - 1; i >= 0; i--) {
    if (indentOf(lines[i]) <= tileIndent && /<div\b/.test(lines[i])) {
      tileStart = i;
      break;
    }
  }
  if (tileStart === -1) return null;
  // Forward to outer </div>
  let outerDepth = 0;
  let tileEnd = -1;
  for (let i = tileStart; i < lines.length; i++) {
    const opens = (lines[i].match(/<div\b/g) || []).length;
    const closes = (lines[i].match(/<\/div>/g) || []).length;
    outerDepth += opens - closes;
    if (outerDepth === 0 && i > tileStart) {
      tileEnd = i;
      break;
    }
  }
  if (tileEnd === -1) return null;
  return { start: tileStart, end: tileEnd };
}

const files = walk(ROOT);
let filesProcessed = 0;
let totalCountersStripped = 0;
let totalSectionsRemoved = 0;
let totalTilesRemoved = 0;
const summary = [];

for (const file of files) {
  const original = readFileSync(file, 'utf8');
  if (!original.includes('AnimatedCounter')) continue;

  const lines = original.split('\n');
  // Collect counter line indices
  const counterIdx = [];
  for (let i = 0; i < lines.length; i++) {
    if (/<AnimatedCounter\b/.test(lines[i])) counterIdx.push(i);
  }
  if (counterIdx.length === 0) {
    // Only import present — strip import
    const newContent = original.replace(/^import\s*\{\s*AnimatedCounter\s*\}\s*from\s*["'][^"']*["'];\s*\n/m, '');
    if (newContent !== original) {
      if (mode === 'write') writeFileSync(file, newContent, 'utf8');
      summary.push({ file, action: 'orphan-import-removed' });
      filesProcessed++;
    }
    continue;
  }

  // Compute removal ranges. Prefer enclosing FadeIn stat section; fall back to tile div.
  const ranges = [];
  const claimed = new Set(); // indices already covered by a range
  for (const idx of counterIdx) {
    if (claimed.has(idx)) continue;
    const fadeIn = findEnclosingFadeIn(lines, idx);
    if (fadeIn && isStatSection(lines, fadeIn.start, fadeIn.end)) {
      ranges.push({ ...fadeIn, kind: 'fadein-stat-section' });
      for (let j = fadeIn.start; j <= fadeIn.end; j++) claimed.add(j);
      continue;
    }
    // Fall back: enclosing tile div
    const tile = findEnclosingTileDiv(lines, idx);
    if (tile) {
      ranges.push({ ...tile, kind: 'tile-div' });
      for (let j = tile.start; j <= tile.end; j++) claimed.add(j);
      continue;
    }
    // Fall back: just strip the AnimatedCounter tag (last resort)
    ranges.push({ start: idx, end: idx, kind: 'tag-only' });
    claimed.add(idx);
  }

  // Merge adjacent ranges in fade-in stat sections (multiple counters in one section)
  // De-duplicate by sorting + collapsing
  ranges.sort((a, b) => a.start - b.start);
  const merged = [];
  for (const r of ranges) {
    if (merged.length && merged[merged.length - 1].end >= r.start) {
      // Overlap — extend
      merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, r.end);
    } else {
      merged.push({ ...r });
    }
  }

  // Apply removals in reverse
  const newLines = [...lines];
  for (let i = merged.length - 1; i >= 0; i--) {
    const r = merged[i];
    // For tag-only: replace the single line's <AnimatedCounter .../> with empty
    if (r.kind === 'tag-only') {
      newLines[r.start] = newLines[r.start].replace(/<AnimatedCounter\b[^/]*\/>/g, '');
    } else {
      newLines.splice(r.start, r.end - r.start + 1);
    }
    if (r.kind === 'fadein-stat-section') totalSectionsRemoved++;
    else if (r.kind === 'tile-div') totalTilesRemoved++;
    totalCountersStripped++;
  }

  let newContent = newLines.join('\n');
  // Remove AnimatedCounter import (counter should now be absent)
  if (!newContent.includes('<AnimatedCounter')) {
    newContent = newContent.replace(/^import\s*\{\s*AnimatedCounter\s*\}\s*from\s*["'][^"']*["'];\s*\n/m, '');
  }
  // Collapse 3+ blank lines into 2
  newContent = newContent.replace(/\n{4,}/g, '\n\n\n');

  if (newContent !== original) {
    if (mode === 'write') writeFileSync(file, newContent, 'utf8');
    summary.push({
      file,
      counters: counterIdx.length,
      ranges: merged.map((r) => `${r.kind} [${r.start + 1}-${r.end + 1}]`),
    });
    filesProcessed++;
  }
}

console.log(`\n=== ${mode.toUpperCase()} MODE ===`);
console.log(`Files processed: ${filesProcessed}`);
console.log(`Total counters stripped: ${totalCountersStripped}`);
console.log(`Stat sections removed: ${totalSectionsRemoved}`);
console.log(`Individual tile divs removed: ${totalTilesRemoved}`);
console.log('\n--- Per-file ---');
for (const s of summary.slice(0, 30)) {
  if (s.action === 'orphan-import-removed') {
    console.log(`${s.file} — orphan import only`);
  } else {
    console.log(`${s.file}`);
    for (const r of s.ranges) console.log(`  ${r}`);
  }
}
if (summary.length > 30) console.log(`... and ${summary.length - 30} more files`);
