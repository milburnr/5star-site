#!/usr/bin/env node

/**
 * fix-faq-schema-gaps.js
 *
 * Finds pages with AccordionTrigger (FAQ UI) but no FAQPage schema,
 * extracts Q&A pairs, and inserts FAQPage JSON-LD schema.
 *
 * Usage:
 *   node scripts/fix-faq-schema-gaps.js --dry-run   # Preview changes
 *   node scripts/fix-faq-schema-gaps.js              # Apply changes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DRY_RUN = process.argv.includes('--dry-run');
const APP_DIR = path.join(__dirname, '..', 'app');

// Find gap pages: have AccordionTrigger but not FAQPage
function findGapPages() {
  const withAccordion = execSync(`grep -rl 'AccordionTrigger' "${APP_DIR}" --include="page.tsx"`, { encoding: 'utf-8' })
    .trim().split('\n').filter(Boolean);

  const withFAQ = execSync(`grep -rl 'FAQPage' "${APP_DIR}" --include="page.tsx"`, { encoding: 'utf-8' })
    .trim().split('\n').filter(Boolean);

  const faqSet = new Set(withFAQ);
  return withAccordion.filter(f => !faqSet.has(f));
}

// Extract Q&A pairs from AccordionTrigger/AccordionContent
function extractQAPairs(content) {
  const pairs = [];

  // Match AccordionTrigger followed by AccordionContent
  // Handles multiline content with JSX
  const regex = /<AccordionTrigger[^>]*>([\s\S]*?)<\/AccordionTrigger>\s*<AccordionContent[^>]*>([\s\S]*?)<\/AccordionContent>/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    let question = match[1].trim();
    let answer = match[2].trim();

    // Strip HTML/JSX tags
    question = stripTags(question);
    answer = stripTags(answer);

    // Clean whitespace
    question = question.replace(/\s+/g, ' ').trim();
    answer = answer.replace(/\s+/g, ' ').trim();

    if (question && answer) {
      pairs.push({ question, answer });
    }
  }

  return pairs;
}

function stripTags(str) {
  // Remove JSX/HTML tags
  return str.replace(/<[^>]+>/g, '').trim();
}

// Generate FAQPage schema JSON
function generateFAQSchema(pairs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pairs.map(p => ({
      "@type": "Question",
      "name": p.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": p.answer
      }
    }))
  };
}

// Insert FAQPage schema into page content
function insertFAQSchema(content, schema) {
  const schemaBlock = `\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(schema, null, 8).replace(/^/gm, '      ').trim()}) }} />\n`;

  // Find the last </script> for application/ld+json and insert after it
  const ldJsonPattern = /(<script[^>]*type="application\/ld\+json"[^>]*\/>)/g;
  let lastIndex = -1;
  let lastMatch = null;
  let m;
  while ((m = ldJsonPattern.exec(content)) !== null) {
    lastIndex = m.index + m[0].length;
    lastMatch = m[0];
  }

  if (lastIndex === -1) {
    // Try multiline script blocks ending with />
    const multilinePattern = /<script\s+type="application\/ld\+json"\s+dangerouslySetInnerHTML=\{\{[\s\S]*?\}\}\s*\/>/g;
    while ((m = multilinePattern.exec(content)) !== null) {
      lastIndex = m.index + m[0].length;
      lastMatch = m[0];
    }
  }

  if (lastIndex === -1) {
    // Try blocks ending with </script> tag (not self-closing)
    const scriptBlockPattern = /<script[\s\S]*?type="application\/ld\+json"[\s\S]*?<\/script>/g;
    while ((m = scriptBlockPattern.exec(content)) !== null) {
      lastIndex = m.index + m[0].length;
      lastMatch = m[0];
    }
  }

  if (lastIndex > -1) {
    return content.slice(0, lastIndex) + '\n' + schemaBlock + content.slice(lastIndex);
  }

  // Fallback: insert after StickyContactBar
  const stickyIdx = content.indexOf('<StickyContactBar />');
  if (stickyIdx > -1) {
    const afterSticky = content.indexOf('\n', stickyIdx) + 1;
    return content.slice(0, afterSticky) + '\n' + schemaBlock + content.slice(afterSticky);
  }

  console.warn('  WARNING: Could not find insertion point');
  return null;
}

// Main
function main() {
  console.log(`FAQ Schema Gap Fixer ${DRY_RUN ? '(DRY RUN)' : '(LIVE)'}`);
  console.log('='.repeat(50));

  const gapPages = findGapPages();
  console.log(`\nFound ${gapPages.length} pages with FAQ content but no FAQPage schema:\n`);

  let totalFixed = 0;
  let totalQA = 0;
  let skipped = [];

  for (const filePath of gapPages) {
    const relPath = path.relative(path.join(__dirname, '..'), filePath);
    const content = fs.readFileSync(filePath, 'utf-8');
    const pairs = extractQAPairs(content);

    console.log(`  ${relPath}: ${pairs.length} Q&A pairs`);

    // Skip if fewer than 2 pairs or no question marks (non-FAQ content)
    if (pairs.length < 2) {
      console.log(`    SKIP: fewer than 2 Q&A pairs`);
      skipped.push({ path: relPath, reason: 'fewer than 2 Q&A pairs' });
      continue;
    }

    const hasQuestions = pairs.some(p => p.question.includes('?'));
    if (!hasQuestions) {
      console.log(`    SKIP: no question marks in triggers (likely non-FAQ)`);
      skipped.push({ path: relPath, reason: 'no question marks in triggers' });
      continue;
    }

    // Log extracted pairs
    for (const p of pairs) {
      console.log(`    Q: ${p.question.substring(0, 80)}${p.question.length > 80 ? '...' : ''}`);
    }

    const schema = generateFAQSchema(pairs);

    if (!DRY_RUN) {
      const newContent = insertFAQSchema(content, schema);
      if (newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log(`    FIXED: Added FAQPage schema with ${pairs.length} Q&A pairs`);
        totalFixed++;
        totalQA += pairs.length;
      } else {
        console.log(`    ERROR: Could not insert schema`);
        skipped.push({ path: relPath, reason: 'no insertion point found' });
      }
    } else {
      totalFixed++;
      totalQA += pairs.length;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`Summary:`);
  console.log(`  Pages ${DRY_RUN ? 'to fix' : 'fixed'}: ${totalFixed}`);
  console.log(`  Total FAQ items ${DRY_RUN ? 'to add' : 'added'}: ${totalQA}`);
  console.log(`  Pages skipped: ${skipped.length}`);
  if (skipped.length > 0) {
    for (const s of skipped) {
      console.log(`    - ${s.path}: ${s.reason}`);
    }
  }
}

main();
