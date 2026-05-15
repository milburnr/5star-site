# Density Rewrite Briefing — 5 Star Roofing

You are rewriting low-density chunks on the 5starroofingpros.com site
to add concrete specifics without fabricating facts and without changing
the meaning of the original content.

## Your job

For each page you're assigned:

1. Read the current page TSX file.
2. Find each low-density chunk listed for that page in
   `runs/density-rewrite-queue.json` (matched by `heading` text).
3. Rewrite the body content under that heading to add concrete
   specifics. The heading itself stays the same unless you explicitly
   decide it's misleading.
4. Use the Edit tool with a surgical old_string -> new_string change
   that keeps the surrounding JSX structure (className, FadeIn wrappers,
   list semantics, etc.) intact.
5. Verify your edit didn't break anything by reading the surrounding
   ~15 lines after the change.

## Verified facts you may use freely

These are confirmed against the live site / allowlist:

- **Headquarters:** 5 Star Roofing is headquartered in Amarillo, TX, since 2014.
- **Standards:** UL 2218 Class 4 (hail), UL 580 (wind uplift), ASTM
  ratings, ENERGY STAR cool-roof.
- **Texas Prompt Payment Act:** governs commercial job payment timing.
- **Materials commonly installed:**
  - Residential: architectural asphalt shingles, Class 4 impact-rated
    asphalt shingles, standing seam metal, R-panel metal.
  - Commercial: TPO, PVC, EPDM membranes, built-up roofing (BUR),
    modified bitumen, standing seam metal.
- **Service area:** Texas Panhandle and West Texas. Specific cities:
  Amarillo, Canyon, Lubbock, Midland, Odessa, Big Spring, Snyder,
  Monahans, Andrews, Levelland, Pampa, Borger, Perryton, Dumas,
  Hereford, Plainview, Bushland, Vega, Wildorado, Tulia, Claude.
- **Counties:** Potter, Randall (Amarillo metro); Lubbock County (Lubbock).
- **Regional geography:** Hail Alley, Llano Estacado, Permian Basin
  (Midland-Odessa), South Plains (Lubbock area), Texas Panhandle.
- **Insurance carriers commonly worked with:** State Farm, Allstate,
  USAA, Farmers, Texas Farm Bureau.
- **Manufacturers:** GAF, CertainTeed, Owens Corning, Malarkey, Atlas,
  IKO, Carlisle, Firestone (use sparingly; never invent product lines).
- **Highways/corridors:** I-40, I-27, Highway 158, Highway 287.

## NEVER USE — pre-commit hook will block these

5 Star explicitly does NOT offer storm-chaser response language. The
pre-commit hook greps for these patterns. Avoid:

- "emergency response", "rapid response", "prompt response", "rush
  response", "immediate response"
- "prompt repair", "prompt service", "prompt repairs", "prompt
  situations"
- "rapid repair", "rapid material access", "rapid emergency response"
- "immediate attention", "immediate stabilization", "immediate
  deployment", "immediate leak repair/stoppage/containment"
- "same-day repair", "same-day response", "same-day inspection",
  "same-day storm damage documentation"
- "24/7", "24 hours a day", "around the clock", "day or night",
  "night or day", "anytime day or night"
- "storm response", "storm response team", "storm chaser", "storm
  specialists", "ASAP response", "don't wait"
- "tarping", "tarping services", "emergency tarping", "board-up",
  "board up service", "temporary leak repair"
- "deploy crews", "we deploy", "we dispatch", "mobilize crews"
- Any "respond within N minutes/hours", "arrive within N hours",
  "on-site within N minutes", "[N]-minute response time"
- "stopped the leak immediately", "leak-stopping service"
- "{{VERIFY:}}" placeholders

Use neutral framing instead:
- "We schedule inspections" beats "we respond"
- "Documentation is delivered before the adjuster meeting" beats
  "we get there fast"
- "Inspections are typically scheduled within a few days" beats
  "same-day inspection"
- "Temporary weather protection" beats "tarping"
- "Insurance documentation" beats "storm response"

## DO NOT use unless explicitly verified on the page already

- Specific named storms or dates ("the 2021 hailstorm")
- Specific dollar figures unless they were already in the original
  copy (you can keep existing numbers, never invent new ones)
- Percentage statistics ("97% claim approval", "120+ claims")
- Specific customer names
- Anything that sounds like a stat you'd want to cite a source for
- Claims about being "the best", "#1", "premier" — leave the
  marketing puffery out
- "GAF Master Elite" — credential is unverified per claims-allowlist

## Voice and tone rules

- Tone is **warm, confident, local**. Not corporate, not breathless.
- **No em-dashes.** Use a period and a fresh sentence instead.
- **No rule-of-three triplets.** If you find yourself writing "X, Y,
  and Z," reach for a different rhythm. One or two specifics beats
  three vague ones.
- **No AI tells:** strip "robust", "leverage", "navigate the
  complexities", "in today's roofing landscape", "rest assured",
  "look no further", "second to none", "cutting edge", "state of the
  art", "world class".
- **No filler phrases:** "it is important to note", "one of the most",
  "in today's world", "there are many factors", "a variety of",
  "a wide range of". The density agent flags these specifically.
- Active voice. "We pull the permit" beats "permits will be pulled."
- Plain English, not industry jargon dressed up. "TPO membrane" is
  fine. "Cementitious thermoplastic single-ply hydrophobic membrane"
  is not.
- It's okay (and good) to admit limits: "for most homes" beats "for
  all homes"; "typically" beats "always."

## Mechanical guardrails

- The rewrite must have **more specifics than the original** (at
  least one of: named material, named city, named standard, named
  carrier, named regional feature, real number that was already on
  the page).
- The rewrite must **not change the meaning** of the original. If
  the original says "we offer free inspections," your rewrite must
  also say (or clearly imply) free inspections.
- Word count: target 60-150 words for a paragraph; 4-7 bullets for a
  list. If the original is shorter, you can expand. Never expand to
  the point of padding.
- HTML escape: use `&apos;` for apostrophes inside JSX text where the
  surrounding text already does. Don't introduce new escape patterns.

## Example transformation

### Before (low density)
```
<h3>Energy Savings</h3>
<p>
  A new roof can save you money on energy bills by reflecting heat
  away from your building. We offer energy-efficient options.
</p>
```

### After (high density)
```
<h3>Energy Savings</h3>
<p>
  White TPO and PVC membranes reflect a large share of solar heat,
  which cuts air-conditioning load through Amarillo and Midland
  summers. ENERGY STAR cool-roof options are available on most
  commercial installs we quote.
</p>
```

Note: added concrete materials (TPO, PVC), concrete locations
(Amarillo, Midland), concrete standard (ENERGY STAR cool-roof).
Removed the vague "a new roof can save you money on energy bills."
Kept the meaning: this section is about energy savings on a new roof.

## What to commit

When you finish your assigned pages:
1. Build the site to verify no syntax errors: `cd <repo> && npm run build`
2. If the build is clean, report back the list of pages you modified
   and the count of chunks you rewrote per page.
3. Do **not** commit or push — the orchestrator commits in batches.

## When to stop and ask

If a chunk's heading text is ambiguous or you can't find it in the
file with a simple grep, skip it and flag it. Don't guess. The
orchestrator will deal with mismatches later.

If a chunk's content references a specific claim (a customer name,
a number you can't trace, a date) and your rewrite would propagate
that unverified claim, skip the chunk and flag it.
