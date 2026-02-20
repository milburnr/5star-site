# GSD Prompt: Integrate Design Quality Standards into Roadmap

**Copy and paste this prompt into Claude Code (GSD) to have it review and update all phase plans:**

---

I've just added a new quality standards document to this project: `.planning/DESIGN-QUALITY-STANDARDS.md`

This document adapts professional frontend design principles (component standardization, verification loops, brand consistency, quality bars) to our SEO overhaul project.

**Your task:**

1. **Read these files first:**
   - `.planning/DESIGN-QUALITY-STANDARDS.md` (the new quality standards)
   - `.planning/ROADMAP.md` (the current phase structure)
   - `.planning/PROJECT.md` (project constraints and goals)

2. **Review every phase in ROADMAP.md** and identify where quality standards are missing or incomplete:
   - Are verification steps (6-check verification loop) included in Success Criteria?
   - Do plans include entity consistency checks?
   - Do content phases reference standard FAQ/schema components?
   - Are there specific, measurable quality bars (not just "improve content")?

3. **Update ROADMAP.md** to integrate the quality standards:
   - Add verification steps to every phase's Success Criteria
   - Add component reuse requirements where applicable (FAQ templates, schema patterns, internal linking structures)
   - Add entity consistency checks to phases that touch business name, NAP, or schema
   - Specify the 6-check verification loop as a mandatory completion gate for every phase

4. **Update existing phase plan files** (e.g., `.planning/phases/01-compliance-entity-fixes/01-01-PLAN.md`) to include:
   - Pre-flight checks (what to verify before starting)
   - Execution steps that reference component templates
   - Post-completion verification checklist (aligned with 6-check loop)
   - Rollback plan if verification fails

5. **Create missing brand assets** referenced in DESIGN-QUALITY-STANDARDS.md:
   - `.planning/brand/entity-guidelines.md` (canonical name, NAP, voice)
   - `.planning/brand/keyword-map.md` (prevent cannibalization)
   - `.planning/brand/content-voice.md` (tone, examples)

6. **Document the changes:**
   - Update STATE.md to note that quality standards have been integrated
   - List which phases had the most significant updates
   - Flag any phases that might need complete rewrites vs. minor additions

**Constraints:**
- Do NOT change the phase sequence or dependency chain
- Do NOT change project scope or add out-of-scope work
- Do NOT remove existing requirements - only add quality checks and verification steps
- Keep all updates aligned with "No visual design changes" constraint

**Output format:**
1. Summary of changes made to ROADMAP.md
2. List of phase plans updated
3. New brand asset files created
4. Recommended next steps (if any phases need deeper revision)

**Start by reading DESIGN-QUALITY-STANDARDS.md, then proceed with the review and updates.**

---

**End of prompt**
