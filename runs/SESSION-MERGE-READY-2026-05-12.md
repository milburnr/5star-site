# Merge-Ready Session — 2026-05-12

**Branch:** `staging`
**Goal:** close the punchlist from the rollout session, verify production-ready, merge to `main`, submit modified URLs to GSC + IndexNow.

This log is the live handoff. Every decision and every commit lands here as it happens.

---

## Source-of-truth docs

- `runs/design-docs/ART-BIBLE-5STAR.md` — read 2026-05-12 (this session)
- `runs/SESSION-ROLLOUT-2026-05-12.md` — read 2026-05-12 (last session)
- `/Volumes/External-2TB/Projects/content-ops/clients/5star/claims-allowlist.md` — read 2026-05-12

### Doc-path corrections (vs. original brief)

- `SESSION-QA-FINAL-2026-05-12.md` — does NOT exist. Treating the `SESSION-ROLLOUT-2026-05-12.md` "What's left" section as the authoritative punchlist.
- `content-ops/engine/claims-allowlist.md` — does NOT exist. Real path: `content-ops/clients/5star/claims-allowlist.md`.

---

## Brief vs. reality reconciliation

The original brief assumed three Tier-2 components (StatTile, TrustBadgeRow, CTASection) were in production. Grep audit:

| Component | Imports across `app/` (excluding self) |
|---|---|
| `components/page-sections/StatTile.tsx` | **0** — dead code |
| `components/page-sections/TrustBadgeRow.tsx` | **0** — dead code |
| `components/page-sections/CTASection.tsx` | **0** — dead code |
| `components/page-sections/ReviewsSection.tsx` | 3 (home, contact, about) — live |
| `components/ArticleLayout.tsx` | 1 (`app/blog/[slug]/page.tsx`) — live |
| `components/InternalLinks.tsx` | ~150 city pages — live |

So Tasks 1-3 retarget:

- **Task 1 (StatTile audit) →** strip the 17 named fabricated stats on production pages per `claims-allowlist.md` "Forbidden claims" list. Inline JSX, not component instances.
- **Task 2 (CTASection redesign) →** audit live page-level CTA sections (homepage end-of-page, every city/service page's CTA block) for art-bible §7 compliance; fix inline.
- **Task 3 (TrustBadgeRow simplification) →** the text-only strip becomes an inline pattern dropped wherever Task 1 removes a stat row.

Dead-code components: delete in a follow-up commit once verified unused.

---

## Punchlist status

(Updated as commits land.)

- [ ] Task 1 — strip 17 forbidden stats per allowlist
- [ ] Task 2 — page-level CTA audit + fix
- [ ] Task 3 — inline text-only trust strip where needed
- [ ] Task 4 — Cormorant Garamond to next/font
- [ ] Task 5 — ReviewsSection compliance
- [ ] Task 6 — ArticleLayout + InternalLinks audit
- [ ] Task 7 — Gallery legacy Hero replacement
- [ ] Task 8 — strip preview routes
- [ ] Task 9 — mobile Playwright sweep at 390px
- [ ] Task 10 — PSI ≥ 90 on 4 sample pages
- [ ] Task 11 — final build + holistic review
- [ ] Task 12 — merge to main + push + GSC/IndexNow
- [ ] Bonus — motion code per art bible §6

---

## Commit log
(Filled in as commits land.)

---

## Open decisions
(Logged as they arise.)
