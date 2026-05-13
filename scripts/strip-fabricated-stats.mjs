#!/usr/bin/env node
// Strip fabricated stat claims per clients/5star/claims-allowlist.md "Forbidden claims" list.
// Mode: dry | write. Run from repo root.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const mode = process.argv.includes('--write') ? 'write' : 'dry';
const root = 'app';

// Each entry: { pattern: regex, replacement: string | function, note: string }
// Replacements must produce grammatically clean sentences. Where the
// fabricated stat carries the whole sentence, we delete the sentence
// (including the trailing period and any leading space).

const transforms = [
  // 1. "95%+ approval rate" / "Our 95%+ approval rate" / "96%/97%/98% approval rate"
  //    Strip sentence-trailing claims and bullet/inline phrases.
  {
    pattern: /\s*Our\s+9[4-8]%\+?\s+approval rate(?:\s+demonstrates[^.]*?proven success with[^.]*?\.|\s+demonstrates our insurance expertise[^.]*?\.|\s+means[^.]*?\.)/gi,
    replacement: '',
    note: 'sentence-form "Our 95%+ approval rate demonstrates/means..."',
  },
  {
    pattern: /\.\s*9[4-8]%\+?\s+approval rate\./gi,
    replacement: '.',
    note: 'trailing "95%+ approval rate." after another sentence',
  },
  {
    pattern: /\s*Our\s+\+\s+approval rate\s+demonstrates[^.]*?\./gi,
    replacement: '',
    note: 'malformed "Our + approval rate demonstrates..." (broken artifact)',
  },
  {
    pattern: /,\s*9[4-8]%\+?\s+approval rate/gi,
    replacement: '',
    note: 'meta-description trailing fragment ", 95%+ approval rate"',
  },
  {
    pattern: /•?\s*<strong>9[4-8]%\+?\s+approval rate<\/strong>[^•\n<]*\n?/gi,
    replacement: '',
    note: 'bullet "• <strong>9X%+ approval rate</strong> for ..."',
  },
  {
    pattern: /9[4-8]%\+?\s+claim approval rate(?:\s+(?:through|across|reflects|exceeds)[^.]*?\.)?/gi,
    replacement: '',
    note: '"9X%+ claim approval rate" inline',
  },
  {
    pattern: /full coverage—9[4-8]%\+?\s+claim approval rate/gi,
    replacement: 'full coverage',
    note: 'commercial-roofing service-area dash phrase',
  },
  {
    pattern: /successful claim approval rate/gi,
    replacement: 'thorough damage documentation',
    note: 'stat-tile label on residential-roofing-big-spring',
  },
  {
    pattern: /Our claim approval rate exceeds 95%[^.]*?\./gi,
    replacement: '',
    note: '"Our claim approval rate exceeds 95% across X"',
  },

  // 2. "reduce (future) damage by 90%" / "85-95% reduction in hail damage"
  {
    pattern: /(?:Class 4(?:\s+\w+)*\s+)?(?:shingles|impact-resistant shingles|materials|These\s+(?:premium\s+)?materials|coatings)\s+reduce\s+(?:future\s+|hail\s+)?damage\s+by\s+90%\s+and\s+qualify\s+for\s+10-30%\s+insurance\s+premium\s+discounts\.?/gi,
    replacement: 'Class 4 impact-resistant shingles meet UL 2218 testing for 2-inch hail and qualify for Texas insurance premium discounts (form PC068, 10-30% range).',
    note: '"reduce damage by 90% and qualify for 10-30%"',
  },
  {
    pattern: /reduce\s+(?:future\s+)?damage\s+by\s+90%/gi,
    replacement: 'meet UL 2218 Class 4 impact testing',
    note: 'standalone "reduce damage by 90%"',
  },
  {
    pattern: /Damage Reduction:\s*<\/strong>\s*85-95% reduction in hail damage/gi,
    replacement: 'Impact Rating:</strong> UL 2218 Class 4 (2-inch hail tested)',
    note: '"<strong>Damage Reduction:</strong> 85-95% reduction"',
  },
  {
    pattern: /Impact-resistant technology reduces hail damage by 90%\./gi,
    replacement: 'Impact-resistant technology meets UL 2218 Class 4 testing for 2-inch hail.',
    note: '"Impact-resistant technology reduces hail damage by 90%"',
  },
  {
    pattern: /reduce damage by 90% and qualify for insurance discounts up to 30%/gi,
    replacement: 'meet UL 2218 Class 4 testing and qualify for Texas insurance premium discounts (form PC068, 10-30% range)',
    note: 'roof-replacement-amarillo variant',
  },

  // 3. "1,000 Amarillo hail claims" / "over 1,000 hail claims"
  {
    pattern: /We'?ve\s+handled\s+over\s+1,?000\s+Amarillo\s+hail\s+claims\s+serving\s+the\s+Texas\s+Panhandle\./gi,
    replacement: "We work hail claims across the Texas Panhandle every storm season.",
    note: '"over 1,000 Amarillo hail claims serving..."',
  },

  // 4. "over 600 Midland homes"
  {
    pattern: /We'?ve\s+protected\s+over\s+600\s+Midland\s+homes\s+with\s+premium\s+Class\s+4/gi,
    replacement: 'We install premium Class 4',
    note: '"We\'ve protected over 600 Midland homes"',
  },

  // 5. "97% of replacement cost" / "average settlements at 97% of replacement cost"
  {
    pattern: /\s*with\s+average\s+settlements\s+at\s+97%\s+of\s+replacement\s+cost/gi,
    replacement: '',
    note: '" with average settlements at 97% of replacement cost"',
  },
  {
    pattern: /,?\s*average\s+settlements?\s+at\s+97%\s+of\s+replacement\s+cost\.?/gi,
    replacement: '.',
    note: '"average settlements at 97% of replacement cost."',
  },
  {
    pattern: /9[4-8]%\+?\s+success rate on claims\s*•\s*Average settlement:\s*9[4-8]%\s+of\s+replacement\s+cost/gi,
    replacement: 'Insurance claim documentation and adjuster coordination',
    note: 'hail-damage-repair-dumas stat strip',
  },
  {
    pattern: /9[4-8]%\+?\s+approval rate on claims\s*•\s*Average:\s*9[4-8]%\s+of\s+replacement\s+cost\s*•\s*72-hour storm/gi,
    replacement: 'Insurance claim documentation • Adjuster coordination • Post-storm',
    note: 'hail-damage-repair-pampa stat strip',
  },
  {
    pattern: /rate in (?:Moore|Howard|Hockley|Ochiltree|Randall) County is 9[4-8]%\+?, with average settlements at 9[4-8]%\s+of\s+replacement/gi,
    replacement: 'documentation process is thorough and aligned with carrier requirements for hail',
    note: 'per-county approval-rate paragraph stem',
  },
  {
    pattern: /is 9[4-8]%\+? with average settlements at 9[4-8]%\s+of\s+replacement\s+cost\.\s*Most homeowners pay/gi,
    replacement: 'documentation is built to carrier standards. Most homeowners pay',
    note: 'hail-damage-repair-canyon long-form variant',
  },

  // 6. "Cool roof / cooling costs by 25-40%" / "energy savings up to 25%" / "by up to 25%"
  {
    pattern: /Cool\s+roof\s+technologies\s+can\s+reduce\s+cooling\s+costs\s+by\s+25-40%[^.]*?\./gi,
    replacement: 'Cool roof technologies can reduce cooling load on West Texas commercial and residential buildings.',
    note: '"Cool roof technologies can reduce cooling costs by 25-40%"',
  },
  {
    pattern: /reduce cooling costs by up to 25%/gi,
    replacement: 'reduce cooling load',
    note: '"reduce cooling costs by up to 25%"',
  },
  {
    pattern: /cooling loads by 25-40%, providing substantial utility cost savings/gi,
    replacement: 'cooling loads, providing utility cost savings',
    note: 'tpo-roofing-big-spring',
  },

  // 7. Metal roofs ROI
  {
    pattern: /Metal\s+roofs\s+provide\s+85-95%\s+ROI,\s+excellent\s+curb\s+appeal,\s+energy\s+savings\s+up\s+to\s+25%,/gi,
    replacement: 'Metal roofs offer strong long-term value, excellent curb appeal, and energy efficiency,',
    note: '"Metal roofs provide 85-95% ROI..."',
  },
  {
    pattern: /energy savings up to 25%/gi,
    replacement: 'energy efficiency gains',
    note: '"energy savings up to 25%"',
  },

  // 8. "helped thousands of Texas Panhandle homeowners successfully file storm damage claims"
  {
    pattern: /Our inspections have helped thousands of Texas Panhandle homeowners successfully file storm damage claims\./gi,
    replacement: 'Our inspections help Texas Panhandle homeowners file storm damage claims.',
    note: '"helped thousands of Texas Panhandle homeowners..."',
  },
  {
    pattern: /(have|has)\s+helped thousands of Texas Panhandle homeowners successfully file storm damage/gi,
    replacement: '$1 helped Texas Panhandle homeowners file storm damage',
    note: '"helped thousands..." (longer form)',
  },

  // 9. "GAF Master Elite Contractor" listed as a credential (pending verification — strip)
  {
    pattern: /<li>•\s*GAF Master Elite Contractor<\/li>\s*/gi,
    replacement: '',
    note: '<li>• GAF Master Elite Contractor</li>',
  },
  {
    pattern: /Our GAF Master Elite certified crews complete most Andrews residential projects/gi,
    replacement: 'Our crews complete most Andrews residential projects',
    note: 'asphalt-shingle-roofing-andrews — strip Master Elite credential claim',
  },

  // 10. amarillos-best-roofer specific stripping (keeps "Class 4 shingles withstand 2-inch hail strikes" form)
  // handled above by category #2

  // 11. "100% Free Inspections" homepage stat — keep "Free Inspections" without the 100%
  // (homepage doesn't currently have the exact "100% Free" string; verify before editing)

  // 12. "Customer satisfaction across all of West Texas" — ACCEPTABLE per allowlist, KEEP

  // 12a. "85% of residential projects are hail damage insurance claims"
  {
    pattern: /85%\s+of\s+residential\s+projects\s+are\s+hail\s+damage\s+insurance\s+claims\.\s*/gi,
    replacement: '',
    note: '"85% of residential projects are hail damage insurance claims"',
  },

  // 12b. "processed over 1,200 claims with State Farm, Allstate, USAA..."
  {
    pattern: /We'?ve\s+processed\s+over\s+1[,.]?2[0-9]{2}\s+claims\s+with[^.]*?\./gi,
    replacement: 'We work with State Farm, Allstate, USAA, and every major carrier.',
    note: '"processed over 1,200 claims with..."',
  },

  // 12c. Residual approval-rate variants the first pass missed
  {
    pattern: /Our\s+9[4-8]%\+?\s+approval rate\s+demonstrates(?:[^."]*?(?=,\s|\."|\.<))/gi,
    replacement: 'Our documentation process demonstrates',
    note: 'partial-strip approval-rate "demonstrates" remnant',
  },
  {
    pattern: /Our\s+9[4-8]%\+?\s+approval rate\s+reflects\s+our\s+thorough\s+documentation\s+process/gi,
    replacement: 'Our thorough documentation process is built to carrier standards',
    note: '"Our 95%+ approval rate reflects our thorough documentation process"',
  },

  // 12d. Residual "reduce damage by 90%" variants — broader patterns
  {
    pattern: /Class 4 (?:impact-resistant )?shingles can reduce hail damage by up to 90%/gi,
    replacement: 'Class 4 impact-resistant shingles meet UL 2218 testing for 2-inch hail',
    note: '"Class 4 shingles can reduce hail damage by up to 90%"',
  },
  {
    pattern: /Class 4 shingles reduce (?:future )?(?:hail )?damage by (?:up to )?90% and (?:often )?qualify for (?:insurance premium discounts? )?(?:up to )?10-30%(?:\s+(?:insurance )?(?:premium )?discounts?)?(?:\s+in Texas)?\.?/gi,
    replacement: 'Class 4 shingles meet UL 2218 impact testing and qualify for Texas insurance premium discounts (form PC068, 10-30% range).',
    note: '"Class 4 shingles reduce future damage by 90% and qualify..." (variant)',
  },
  {
    pattern: /Class 4 shingles reduce future damage by up to 90%\.\s*Many Texas insurers offer 10-30% premium discounts for Class 4 roofs/gi,
    replacement: 'Class 4 shingles meet UL 2218 testing for 2-inch hail. Many Texas insurers offer 10-30% premium discounts for Class 4 roofs',
    note: 'lubbock-tx-roofing FAQ form',
  },
  {
    pattern: /reduce wind damage risk by 80-90% compared to standard installations/gi,
    replacement: 'meet high-wind installation standards required for Texas Panhandle conditions',
    note: '"reduce wind damage risk by 80-90%"',
  },
  {
    pattern: /Yes, Class 4 shingles reduce future hail damage by 90% and often qualify for 10-30% insurance discounts/gi,
    replacement: 'Yes, Class 4 shingles meet UL 2218 testing for 2-inch hail and often qualify for 10-30% insurance discounts',
    note: 'hail-damage-repair-dumas FAQ',
  },

  // 13. AggregateRating with fabricated reviewCount — pattern-strip:
  {
    pattern: /"aggregateRating":\s*\{[^}]*"reviewCount":\s*"25"[^}]*\},?\s*/gs,
    replacement: '',
    note: 'fabricated aggregateRating reviewCount:25 schema block',
  },
];

// Walk app/ for .tsx files
function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.next' || entry.startsWith('.')) continue;
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) out.push(...walk(full));
    else if (entry.endsWith('.tsx') || entry.endsWith('.ts')) out.push(full);
  }
  return out;
}

const files = walk(root);
const summary = [];
let totalReplacements = 0;
let filesChanged = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf8');
  let original = content;
  const localChanges = [];

  for (const { pattern, replacement, note } of transforms) {
    const before = content;
    content = content.replace(pattern, replacement);
    const count = (before.match(pattern) || []).length;
    if (count > 0) {
      localChanges.push({ note, count });
      totalReplacements += count;
    }
  }

  if (content !== original) {
    filesChanged++;
    summary.push({ file, changes: localChanges });
    if (mode === 'write') {
      writeFileSync(file, content, 'utf8');
    }
  }
}

console.log(`\n=== ${mode.toUpperCase()} MODE ===`);
console.log(`Files scanned: ${files.length}`);
console.log(`Files with changes: ${filesChanged}`);
console.log(`Total replacements: ${totalReplacements}`);
console.log('\n--- Per-file breakdown ---');
for (const { file, changes } of summary) {
  console.log(`\n${file}`);
  for (const { note, count } of changes) console.log(`  [${count}x] ${note}`);
}
