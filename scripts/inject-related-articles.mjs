#!/usr/bin/env node
/**
 * Codemod: inject <RelatedArticles> into every service / service-city page.
 *
 * - Idempotent (skips files that already import RelatedArticles)
 * - Globs app/<dir>/page.tsx (one level deep)
 * - Skips non-service routes (blog, articles, contact, etc.)
 * - Adds import + JSX before the final </div> of the default export's return
 *
 * Usage:
 *   node scripts/inject-related-articles.mjs            # all matching pages
 *   node scripts/inject-related-articles.mjs --dry-run  # show what would change
 *   node scripts/inject-related-articles.mjs --only=asphalt-shingle-roofing-amarillo
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(REPO_ROOT, "app");

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const ONLY_ARG = args.find((a) => a.startsWith("--only="));
const ONLY = ONLY_ARG ? ONLY_ARG.split("=")[1] : null;

const SKIP_DIRS = new Set([
  "blog",
  "articles",
  "about",
  "contact",
  "gallery",
  "reviews",
  "services",
  "service-areas",
  "careers",
  "privacy",
  "terms",
  "not-found",
  "sitemap",
  "robots",
  "tmpclaude-0dfd-cwd",
  "tmpclaude-2673-cwd",
]);

const IMPORT_LINE = 'import RelatedArticles from "@/components/RelatedArticles";';
const IMPORT_MARKER = "@/components/RelatedArticles";

function listCandidateDirs() {
  const entries = fs.readdirSync(APP_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((name) => !name.startsWith("[") && !name.startsWith("("));
}

function findPageFile(dir) {
  const p = path.join(APP_DIR, dir, "page.tsx");
  return fs.existsSync(p) ? p : null;
}

function addImport(source) {
  if (source.includes(IMPORT_MARKER)) return source;
  // Insert after the last top-level import line.
  const lines = source.split("\n");
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^import\s.+from\s+["'].+["'];?\s*$/.test(lines[i])) {
      lastImportIdx = i;
    } else if (lastImportIdx >= 0 && lines[i].trim() === "") {
      // keep going, may have blank between imports
    } else if (lastImportIdx >= 0) {
      break;
    }
  }
  if (lastImportIdx === -1) {
    // No imports found; prepend.
    return IMPORT_LINE + "\n" + source;
  }
  lines.splice(lastImportIdx + 1, 0, IMPORT_LINE);
  return lines.join("\n");
}

function injectJSX(source, dirName) {
  if (source.includes("<RelatedArticles")) {
    return { source, status: "already-present" };
  }

  const lines = source.split("\n");

  // Find the line with the default export's return closing: a line that is
  // exactly `  );` (two-space indent) marking the end of `return (...)`.
  // Search from the bottom.
  let returnCloseIdx = -1;
  for (let i = lines.length - 1; i >= 0; i--) {
    if (/^\s*\);\s*$/.test(lines[i])) {
      returnCloseIdx = i;
      break;
    }
  }
  if (returnCloseIdx === -1) {
    return { source, status: "no-return-close" };
  }

  // Walk backwards from returnCloseIdx-1 to find the last </div> line.
  let insertAt = -1;
  for (let i = returnCloseIdx - 1; i >= 0; i--) {
    if (/^\s*<\/div>\s*$/.test(lines[i])) {
      insertAt = i;
      break;
    }
  }
  if (insertAt === -1) {
    return { source, status: "no-closing-div" };
  }

  // Determine indentation from that closing div, add 2 spaces for the inserted JSX.
  const match = lines[insertAt].match(/^(\s*)/);
  const baseIndent = match ? match[1] : "      ";

  const injectLine = `${baseIndent}<RelatedArticles pageSlug="${dirName}" />`;
  lines.splice(insertAt, 0, injectLine);
  return { source: lines.join("\n"), status: "injected" };
}

function processFile(file, dirName) {
  const original = fs.readFileSync(file, "utf8");

  if (original.includes(IMPORT_MARKER) && original.includes("<RelatedArticles")) {
    return { status: "skipped-already", file };
  }

  const withImport = addImport(original);
  const { source: withJSX, status } = injectJSX(withImport, dirName);

  if (status !== "injected") {
    return { status: `aborted-${status}`, file };
  }

  if (!DRY_RUN) {
    fs.writeFileSync(file, withJSX, "utf8");
  }
  return { status: DRY_RUN ? "would-inject" : "injected", file };
}

function main() {
  const dirs = listCandidateDirs();
  const included = [];
  const skippedByList = [];
  const noPageFile = [];

  for (const d of dirs) {
    if (ONLY && d !== ONLY) continue;
    if (SKIP_DIRS.has(d)) {
      skippedByList.push(d);
      continue;
    }
    const file = findPageFile(d);
    if (!file) {
      noPageFile.push(d);
      continue;
    }
    included.push({ dir: d, file });
  }

  console.log(`\n=== Codemod plan ===`);
  console.log(`App root: ${APP_DIR}`);
  console.log(`Total dirs: ${dirs.length}`);
  console.log(`Included (will process): ${included.length}`);
  console.log(`Skipped by skip-list: ${skippedByList.length} -> ${skippedByList.join(", ")}`);
  console.log(`Dirs without page.tsx: ${noPageFile.length} -> ${noPageFile.join(", ")}`);
  if (ONLY) console.log(`(filtered by --only=${ONLY})`);
  console.log(`Mode: ${DRY_RUN ? "DRY RUN" : "WRITE"}\n`);

  const results = { injected: [], wouldInject: [], alreadyPresent: [], aborted: [] };

  for (const { dir, file } of included) {
    const r = processFile(file, dir);
    if (r.status === "injected") {
      results.injected.push(r.file);
      console.log(`[OK]   injected: ${path.relative(REPO_ROOT, r.file)}`);
    } else if (r.status === "would-inject") {
      results.wouldInject.push(r.file);
      console.log(`[DRY]  would inject: ${path.relative(REPO_ROOT, r.file)}`);
    } else if (r.status === "skipped-already") {
      results.alreadyPresent.push(r.file);
      console.log(`[SKIP] already has RelatedArticles: ${path.relative(REPO_ROOT, r.file)}`);
    } else {
      results.aborted.push({ file: r.file, reason: r.status });
      console.warn(`[WARN] ${r.status}: ${path.relative(REPO_ROOT, r.file)}`);
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Injected:        ${results.injected.length}`);
  console.log(`Would inject:    ${results.wouldInject.length}`);
  console.log(`Already present: ${results.alreadyPresent.length}`);
  console.log(`Aborted:         ${results.aborted.length}`);
  if (results.aborted.length) {
    console.log(`Aborted files:`);
    for (const a of results.aborted) {
      console.log(`  - ${path.relative(REPO_ROOT, a.file)}  (${a.reason})`);
    }
  }
}

main();
