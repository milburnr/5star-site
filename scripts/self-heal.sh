#!/usr/bin/env bash
#
# self-heal.sh — run Playwright regression tests, fix failures via `claude -p`,
# loop until green or max iterations.
#
# Designed to be called:
#   - Directly by you ("just run the loop")
#   - By the Stop hook (after a turn that edited app/components)
#   - Recursively by itself (after a fix attempt completes)
#
# Behavior:
#   1. Verify dev server is reachable at BASE_URL (default http://localhost:4250)
#   2. Run `npx playwright test`
#   3. If green, exit 0 with success message
#   4. If red:
#      - Parse tests/.results/results.json for failures
#      - Collect screenshot paths from tests/.results/artifacts/
#      - If iteration <= MAX_ITERATIONS, invoke `claude -p` with:
#          * Failure summary
#          * Screenshot paths
#          * Iteration count
#          * Instructions to fix and exit
#      - After subprocess returns, recursively re-invoke self-heal.sh
#      - At MAX_ITERATIONS exceeded, write ITERATION-LOG.md and exit 1
#
# Env vars:
#   BASE_URL          — site under test (default: http://localhost:4250)
#   MAX_ITERATIONS    — max fix attempts (default: 5)
#   ITERATION         — current attempt number (default: 1; set by recursion)
#   SELF_HEAL_QUIET   — if set, suppress most output
#
# Exit codes:
#   0 — tests green
#   1 — tests red, iteration limit reached (escalation)
#   2 — dev server not reachable
#   3 — playwright invocation failed
#   4 — claude -p subprocess failed

set -uo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

BASE_URL="${BASE_URL:-http://localhost:4250}"
MAX_ITERATIONS="${MAX_ITERATIONS:-5}"
ITERATION="${ITERATION:-1}"
RESULTS_JSON="tests/.results/results.json"
ARTIFACTS_DIR="tests/.results/artifacts"
LOG_DIR="tests/.results/iteration-logs"
ITER_LOG="ITERATION-LOG.md"

mkdir -p "$LOG_DIR"

log()  { [[ -z "${SELF_HEAL_QUIET:-}" ]] && echo "[self-heal iter=$ITERATION/$MAX_ITERATIONS] $*" >&2; }
fail() { echo "[self-heal ERROR] $*" >&2; }

# ----------------------------------------------------------------------------
# 1. Verify dev server
# ----------------------------------------------------------------------------
log "checking dev server at $BASE_URL"
if ! curl -fsS --max-time 5 "$BASE_URL/" -o /dev/null 2>/dev/null; then
  fail "dev server not reachable at $BASE_URL"
  fail "start with: npm run dev -- -p 4250  (then re-run this script)"
  exit 2
fi

# ----------------------------------------------------------------------------
# 2. Run tests
# ----------------------------------------------------------------------------
log "running playwright regression suite"
rm -rf "$ARTIFACTS_DIR" 2>/dev/null || true
TEST_EXIT=0
BASE_URL="$BASE_URL" npx playwright test --reporter=list,json 2>&1 | tee "$LOG_DIR/iter-${ITERATION}-playwright.log" || TEST_EXIT=$?

if [[ $TEST_EXIT -eq 0 ]]; then
  log "✅ tests green at iteration $ITERATION"
  exit 0
fi

log "❌ tests red at iteration $ITERATION (playwright exit=$TEST_EXIT)"

# ----------------------------------------------------------------------------
# 3. Iteration cap check
# ----------------------------------------------------------------------------
if [[ "$ITERATION" -ge "$MAX_ITERATIONS" ]]; then
  fail "max iterations ($MAX_ITERATIONS) reached — escalating"
  {
    echo "# Self-Heal Escalation — $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
    echo ""
    echo "Iteration $ITERATION of $MAX_ITERATIONS exhausted. Tests still red."
    echo ""
    echo "## Last playwright output"
    echo ""
    echo '```'
    tail -200 "$LOG_DIR/iter-${ITERATION}-playwright.log"
    echo '```'
    echo ""
    echo "## Iteration logs"
    ls -1 "$LOG_DIR/" | sed 's/^/- /'
    echo ""
    echo "Human intervention required. Re-run \`scripts/self-heal.sh\` after fixing root cause."
  } > "$ITER_LOG"
  fail "wrote $ITER_LOG"
  exit 1
fi

# ----------------------------------------------------------------------------
# 4. Collect failure context
# ----------------------------------------------------------------------------
if [[ ! -f "$RESULTS_JSON" ]]; then
  fail "no results.json found at $RESULTS_JSON — playwright reporter may have failed"
  exit 3
fi

FAILURE_SUMMARY="$(mktemp)"
trap "rm -f '$FAILURE_SUMMARY'" EXIT

python3 - <<PY > "$FAILURE_SUMMARY"
import json, os, sys
from pathlib import Path

with open("$RESULTS_JSON") as f:
    results = json.load(f)

failures = []
def walk(suite):
    for spec in suite.get("specs", []):
        for t in spec.get("tests", []):
            for r in t.get("results", []):
                if r.get("status") not in ("passed", "skipped"):
                    err = (r.get("errors") or [{}])[0].get("message", "")
                    attachments = [a.get("path","") for a in r.get("attachments", [])]
                    failures.append({
                        "title": spec.get("title",""),
                        "file": spec.get("file",""),
                        "line": spec.get("line"),
                        "project": t.get("projectName",""),
                        "error": err[:800],
                        "attachments": [a for a in attachments if a],
                    })
    for child in suite.get("suites", []):
        walk(child)

for s in results.get("suites", []):
    walk(s)

print(f"## Failure summary — {len(failures)} failing test(s)")
print()
for i, f in enumerate(failures, 1):
    print(f"### Failure {i}: {f['title']} ({f['project']})")
    print(f"- File: \`{f['file']}:{f['line']}\`")
    print(f"- Error:")
    print(f"  \`\`\`")
    for line in f['error'].splitlines()[:15]:
        print(f"  {line}")
    print(f"  \`\`\`")
    if f["attachments"]:
        print(f"- Screenshots/traces:")
        for a in f["attachments"]:
            rel = os.path.relpath(a, "$REPO_ROOT") if os.path.isabs(a) else a
            print(f"  - \`{rel}\`")
    print()
PY

log "wrote failure summary to $FAILURE_SUMMARY ($(wc -l < "$FAILURE_SUMMARY") lines)"

# ----------------------------------------------------------------------------
# 5. Invoke `claude -p` to fix
# ----------------------------------------------------------------------------
PROMPT_FILE="$(mktemp)"
trap "rm -f '$FAILURE_SUMMARY' '$PROMPT_FILE'" EXIT

cat > "$PROMPT_FILE" <<EOF
You are the self-heal fixer agent for the 5-star-roofing Next.js site at $REPO_ROOT.

The Playwright regression suite just failed. Below is the structured failure
summary. Your job:

1. Read the failure summary carefully. For each failure, look at the actual page
   source (\`app/<path>/page.tsx\`) and the screenshot if provided. The screenshot
   is the ground truth for what the user sees.

2. Identify the root cause. Do NOT just patch the test — fix the underlying page
   or component. The test is asserting real bug patterns documented in
   \`tests/BUG-TAXONOMY.md\` — read that file if a failure class is unfamiliar.

3. Apply the fix. Use Read/Edit/Write. Keep changes minimal and surgical. Do
   not touch unrelated files. Do not "improve" the code beyond what's needed.

4. Run \`engine/precheck_forbidden_phrases.sh\` from
   /Volumes/External-2TB/Projects/content-ops/engine/ against this repo before
   finishing — your fix must not introduce forbidden phrases.

5. When done, exit. The driver will re-run tests automatically.

Constraints:
- This is iteration $ITERATION of $MAX_ITERATIONS. If you cannot find a fix,
  say so explicitly so the driver can escalate.
- Site is live in production. Stay surgical.
- Do NOT modify tests/regression.spec.ts or playwright.config.ts.

## Failure summary

$(cat "$FAILURE_SUMMARY")
EOF

log "invoking claude -p (iteration $ITERATION)..."
CLAUDE_OUT="$LOG_DIR/iter-${ITERATION}-claude.log"

# claude -p invocation per project gotchas:
#   --dangerously-skip-permissions  → required, default mode denies Bash silently
#   --add-dir                       → variadic, must come BEFORE -p or it eats the prompt
#   -p                              → prompt last, can be a file via stdin
#
# We pipe the prompt via stdin and use --add-dir for repo access.
CLAUDE_EXIT=0
claude --dangerously-skip-permissions \
       --add-dir "$REPO_ROOT" \
       --add-dir "/Volumes/External-2TB/Projects/content-ops" \
       -p "$(cat "$PROMPT_FILE")" \
       > "$CLAUDE_OUT" 2>&1 || CLAUDE_EXIT=$?

if [[ $CLAUDE_EXIT -ne 0 ]]; then
  fail "claude -p subprocess failed (exit=$CLAUDE_EXIT) — see $CLAUDE_OUT"
  exit 4
fi

log "claude -p subprocess completed (exit=$CLAUDE_EXIT) — re-running tests"

# ----------------------------------------------------------------------------
# 6. Recurse
# ----------------------------------------------------------------------------
NEXT_ITERATION=$((ITERATION + 1))
ITERATION="$NEXT_ITERATION" exec "$0"
