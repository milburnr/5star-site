---
name: capture-bug
description: Capture a newly-discovered bug as a Playwright regression test in tests/regression.spec.ts. Use when the user describes a visual/content/interaction bug they found on the 5star site, or when Claude itself surfaces a bug that wasn't caught by existing tests. Adds the test, captures the pattern to OpenBrain for cross-session learning, and runs the test to confirm it fails (proving it catches the bug).
---

# capture-bug — turn a manually-found bug into a permanent regression test

## When to invoke

Whenever a bug is surfaced that **wasn&apos;t already caught by `tests/regression.spec.ts`**. Examples:
- User pastes a screenshot showing something visually broken
- User says "you said it was done but X is still wrong"
- Claude notices a defect during a routine check
- A precheck/grep finds a pattern that should also be runtime-asserted

## What this skill does

1. Reads `tests/BUG-TAXONOMY.md` to find the right bug class
2. Writes a new Playwright test following that class&apos;s pattern
3. Appends it to `tests/regression.spec.ts` (or a new spec file if the class warrants one)
4. Runs **just the new test** against the dev server to confirm it **FAILS**. A test that passes against the current broken state is useless — it must actually catch the bug.
5. Captures the bug pattern to OpenBrain via `bo_capture_thought` so cross-session learning grows
6. Reports back: test added, bug class, OpenBrain id, confirmation that the test fails

## How to invoke

User says one of:
- "/capture-bug" with a description
- "Add a regression test for [bug]"
- "Capture this as a test"
- "Make sure this doesn&apos;t happen again"

## Process

### Step 1 — Understand the bug

Ask **exactly one** clarifying question if the bug description is ambiguous, otherwise proceed. Required to know:
- **What page(s)** does the bug appear on?
- **What viewport** (mobile, desktop, both)?
- **What's the observable symptom** (DOM state, computed style, content, interaction failure)?
- **What's the expected state**?

If a screenshot was provided, the screenshot is ground truth — describe what's wrong in concrete terms.

### Step 2 — Classify

Read `tests/BUG-TAXONOMY.md`. Pick the class (1-6) that fits:
- **Class 1**: content missing/empty/placeholder
- **Class 2**: visual/layout
- **Class 3**: schema/SEO
- **Class 4**: cross-page consistency
- **Class 5**: interaction
- **Class 6**: forbidden phrase at runtime

If the bug doesn&apos;t fit any class, ADD A NEW CLASS to `BUG-TAXONOMY.md` with its pattern, then proceed.

### Step 3 — Write the test

Use the patterns from BUG-TAXONOMY.md. Test must:
- Cite the class in the title: `[Class N]`
- Cite the source: `[user-reported YYYY-MM-DD]` or `[OB:NNNN]` if from OpenBrain
- Be deterministic — no flaky timing, no real network calls
- Be specific — assert the actual symptom, not a generic "page renders"
- Cover both viewports if the bug is visual

Example skeleton:
```ts
test('SLUG: SYMPTOM [Class N, user-reported 2026-05-13]', async ({ page }) => {
  await page.goto('/path/');
  // Assert the EXACT symptom from the bug report
  await expect(page.locator('SELECTOR')).toHaveCSS('PROP', 'VALUE');
});
```

### Step 4 — Run the test, confirm it fails

This is the critical step. Run **only this test** against `http://localhost:4250`:
```bash
cd /Volumes/External-2TB/Projects/Clients/5-star-roofing
npx playwright test --grep "EXACT TEST TITLE" 2>&1 | tail -30
```

**The test MUST fail.** If it passes against the currently-broken site, the test isn&apos;t actually catching the bug — rewrite it.

If the dev server isn&apos;t running, tell the user. Don&apos;t fake-verify.

### Step 5 — Capture to OpenBrain

After confirming the test fails as expected:
```
bo_capture_thought({
  content: "Regression test added: [test title]. Bug class: [N]. Symptom: [one-line]. Page(s): [list]. Test file: tests/regression.spec.ts. The test asserts [specific check] which fails against the current broken state.",
  category: "observation",
  topics: ["5star", "regression-test", "bug-class-N", "[specific-page-slug]"]
})
```

This grows the OpenBrain corpus of bug→test mappings. Future sessions can query for prior tests when similar bugs surface.

### Step 6 — Report

Reply to the user with:
- Test title and location (file:line)
- Bug class
- Confirmation it currently fails (paste the failure output)
- OpenBrain thought id
- Next step: "Now fix the bug. Run `scripts/self-heal.sh` to auto-fix-and-verify, or fix manually and re-run the test to confirm green."

## What this skill does NOT do

- Does NOT attempt to fix the bug. That&apos;s for `scripts/self-heal.sh` or manual work.
- Does NOT add tests that pass on the current broken state ("test the happy path"). That&apos;s a smoke test, not a regression test.
- Does NOT skip the fail-confirmation step. A test that doesn&apos;t fail isn&apos;t a regression test.

## Constraints

- Don&apos;t modify `playwright.config.ts` unless adding a new project (e.g., tablet viewport).
- Don&apos;t modify the existing 6 classes in BUG-TAXONOMY.md — extend, don&apos;t rewrite.
- If a similar test already exists in `regression.spec.ts`, prefer extending it (more pages in a `for` loop) over duplicating.
