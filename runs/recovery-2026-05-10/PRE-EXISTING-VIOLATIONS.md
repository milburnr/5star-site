# Pre-existing forbidden-phrase violations

These fabrication-pattern violations existed in HEAD (e7b421e) BEFORE
the 2026-05-10 recovery block ran. They are out of scope for this
recovery (not documented in the Block 1g/1h/1h+1 session logs) and
need a separate follow-up sweep before any future push.

The three pages modified by Block 1h+1 (app/page.tsx, app/about/page.tsx,
app/contact/page.tsx) are CLEAN — verified by targeted grep during
the recovery block. The violations below are in other content pages
that were already live with these patterns before today's session.

Known patterns flagged:
- "prompt response" in metadata descriptions across ~40 city pages
- "since 2014" founding-date statements — likely legitimate factual
  claims; the precheck pattern is too broad and needs scoping
- "storm response", "tarping" residuals in content pages
- other Block 1g/1h residuals (~200+ total hits)

See precommit-violations-pre-existing.txt for the full list (962 lines).

Decision before push:
(a) Sweep these in a follow-up block before push, OR
(b) Accept they're already live; this push doesn't introduce them.
