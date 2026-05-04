# Site-Wide Image Audit — Summary

**Run date:** 2026-05-04
**Build status:** ✓ 242 pages compiled, zero errors, zero warnings

## Method
1. **Phase 2 — Discovery.** Mechanical scan of `app/**/*.tsx` (219 files) extracted 787 image refs across 216 routes. Captured each ref's heading, body context, alt text, and hero status.
2. **Phase 1 — Visual pool.** Vision-verified 177 unique image sources (139 R2 photos + 42 local files) using 4 parallel agents. Tagged each with category, condition, visual quality, confidence. Vision-first — filenames lie.
3. **Phase 3 — Fix plan.** Conservative heading-only matching: only swap when card heading explicitly names a roof material/condition AND the current image is wrong. Body context ignored to avoid false positives. Junk content (paint trays, loose wires) swapped wherever it appears.
4. **Phase 4 — Apply.** Deterministic script applied 49 swaps across 20 files. Build passes.

## Results

| Disposition | Count |
| --- | --- |
| Total image refs | 787 |
| Kept (heading match) | 10 |
| Kept (generic-acceptable) | 712 |
| Kept (hero, off-limits) | 3 |
| Kept (logo / trust asset) | 10 |
| **Swapped (heading mismatch)** | **40** |
| **Swapped (junk content)** | **9** |
| Flagged for AI-gen / new photo | 3 |

- **Distinct wrong-photo URLs replaced:** 30 (some appeared on multiple pages)
- **Distinct replacement photos used:** 10
- **Files modified:** 20

## Top wins

- Homepage TPO card already corrected in prior commit (`bc4c6b5`).
- `/commercial-roofing` "TPO Roofing" card was a flashing detail — now real TPO membrane.
- `/metal-roofing` "Metal Roofing Options" was showing shingles — now standing seam.
- `/asphalt-shingle-roofing` "Types of Shingles" was a flashing close-up — now actual shingle.
- `/wind-damage-repair`, `/commercial-roofing` hail damage cards — were finished/detail photos, now actual hail damage.
- `/gallery` "Channing commercial" was a photo of paint trays on grass (zero roofing content) — replaced with home hero.
- 6 "loose wires on commercial roof" documentation photos used as content cards on city pages — replaced with city heroes.

## Major data-quality findings

These came out of the visual verification and warrant attention beyond this audit:

1. **`/images/metal/` directory is mostly mislabeled.** `metal-sanderson-15/22/23/25`, `metal-wichita-falls-1/24`, `metal-odessa-4/5/49/50`, `metal-amarillo-40`, `metal-channing-21` are shingle roofs, hail close-ups, framing, siding, or flashing — not metal roofs. Only `metal-memphis-42` and `metal-memphis-44` are actual metal roofing.
2. **Three byte-identical duplicates wearing different category labels:** `shingle-odessa-5` ≡ `completed-odessa-2`, `shingle-midland-1` ≡ `hail-damage-midland-6`, `shingle-san-angelo-2` ≡ `completed-san-angelo-1`. Suggests an upload-time deduplication failure.
3. **Multiple "completed" photos are actually hail-damage inspections:** `completed-odessa-2/8/11`, `completed-san-angelo-1/21`. The `/completed/` category is unreliable.
4. **`commercial-channing-8`** is a photo of paint trays on grass. Should be removed from R2 entirely.
5. **`completed-san-angelo-21`** has a 90-degree rotation issue.
6. **Filename mismatches in R2 are widespread.** Past sessions populating images via slug matching (e.g., service page about TPO → first photo whose filename contains `tpo`) was always going to fail because the underlying photos were tagged wrong at upload.

## Phase 5 — Unresolved (3 items)

| Page | Card | Need | Library has |
| --- | --- | --- | --- |
| `/residential-roofing` | "Tile Roofing" (×2) | Real tile roof photo | 0 (West Texas has near-zero tile roofs) |
| `/services` | "EPDM Rubber Roofing" | Real black-rubber-membrane install | 0 |

Plus the homepage EPDM card (`completed-amarillo-18`, currently rolled-asphalt valley shot, not EPDM) — this one wasn't auto-flagged because the ref's captured heading was the previous card's "TPO Commercial Roofing" (heading-extraction edge case in Phase 2). Manual replacement still needed.

**Options for Phase 5:**
1. **AI-gen** via `design`/`banner-design` skill + Gemini, declared as illustrative in alt text.
2. **Manufacturer press kits** with attribution: Carlisle SynTec for TPO/EPDM, Firestone for EPDM, GAF EverGuard for TPO.
3. **Remove the cards.** If 5 Star doesn't actually install tile or EPDM regularly, removing the marketing cards is more honest than illustrative photos.
4. **Wait for next jobsite** if these systems do come up.

## Artifacts

All in `.audit/`:
- `image-refs.json` — 787 image refs catalog (Phase 2 output)
- `unique-srcs.txt` — 183 unique image URLs
- `resolved-srcs.json` — local paths for each src (R2 downloads cached at `/tmp/audit-fetch/`)
- `visual-pool.json` — 177 vision-verified photos with category/condition/quality tags
- `visual-pool.shard-{1..4}.json` — per-agent shards (raw)
- `replacement-candidates.json` — replacement options grouped by category
- `fix-plan.json` — full decision log per ref (787 entries)
- `apply-log.json` — applied changes per file
- `extract-image-refs.mjs`, `resolve-srcs.mjs`, `merge-pool.mjs`, `build-fix-plan.mjs`, `apply-fix-plan.mjs` — reproducible scripts

## Cost & wall-clock

- Vision verification: 177 images across 4 parallel agents, ~10 min wall-clock
- Discovery: ~2 min
- Apply: ~3 sec (deterministic script)
- R2 download cache: 162 images, ~1 min
- Total: ~25 min wall-clock, well under the $10 estimate.

## What's NOT in this audit

- **Hero images** — off-limits per Rich's instruction. 3 hero refs flagged as kept-untouched.
- **MDX-driven blog content** — `app/blog/[slug]/page.tsx` renders dynamic content; would need a separate pass to audit MDX-embedded images.
- **Photos in `/Volumes/External-2TB/Photos/5-star/`** — the larger 4,701-photo archive was not vision-verified (out of scope for this run). Used only as a metadata-prefiltered candidate pool, but the candidates that actually got used came from the R2 set.
