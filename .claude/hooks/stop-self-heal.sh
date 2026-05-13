#!/usr/bin/env bash
#
# stop-self-heal.sh — Stop-hook wrapper for the self-heal loop.
#
# Fires when Claude finishes a turn. Conditionally runs the regression suite
# IF any .tsx files under app/ or components/ were modified this session AND
# the dev server is reachable. Otherwise exits 0 silently so it doesn't
# annoy you during pure-conversation turns.
#
# Output (failure summary) is written to stderr so Claude sees it as hook
# feedback in the next turn — this is the "ground Claude in real verification
# before claiming done" piece of the system.

set -uo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$REPO_ROOT"

# Gate 1: are there modified .tsx files in app/ or components/?
# Use git diff to scope to actual edits, not stale unrelated files.
MODIFIED_RELEVANT=$(git -C "$REPO_ROOT" diff --name-only HEAD 2>/dev/null | \
  grep -E '^(app|components)/.*\.(tsx|ts|css)$' | head -50)

if [[ -z "$MODIFIED_RELEVANT" ]]; then
  # Nothing relevant changed — no need to run tests.
  exit 0
fi

# Gate 2: is the dev server reachable?
BASE_URL="${BASE_URL:-http://localhost:4250}"
if ! curl -fsS --max-time 3 "$BASE_URL/" -o /dev/null 2>/dev/null; then
  # Server down — tell Claude but don't block.
  cat >&2 <<EOF
[self-heal] dev server not reachable at $BASE_URL — skipping regression check.
[self-heal] Modified files that would have been tested:
$(echo "$MODIFIED_RELEVANT" | sed 's/^/  - /')
[self-heal] Start the dev server with: npm run dev -- -p 4250
EOF
  exit 0
fi

# Gate 3: run self-heal with iteration cap 1 — the hook should not auto-fix,
# it should just SURFACE failures so the user/agent sees them before claiming
# the turn is done. Full iteration loop is reserved for explicit manual or
# /verify-pages invocation.
echo "[self-heal] regression check starting (modified files: $(echo "$MODIFIED_RELEVANT" | wc -l | tr -d ' '))" >&2

MAX_ITERATIONS=1 BASE_URL="$BASE_URL" SELF_HEAL_QUIET=1 \
  "$REPO_ROOT/scripts/self-heal.sh" >&2 2>&1
EXIT=$?

if [[ $EXIT -eq 0 ]]; then
  echo "[self-heal] ✅ regression tests green" >&2
elif [[ $EXIT -eq 1 ]]; then
  cat >&2 <<EOF

[self-heal] ❌ REGRESSION TESTS FAILED

Modified files this session:
$(echo "$MODIFIED_RELEVANT" | sed 's/^/  - /')

See full failure summary above. Iteration log: tests/.results/iteration-logs/
Run \`scripts/self-heal.sh\` to attempt auto-fix (up to 5 iterations).

DO NOT claim the work is "done" while regression tests are red.
EOF
  # Non-zero exit on Stop hook surfaces output to Claude in the next turn.
  exit 1
else
  echo "[self-heal] regression check inconclusive (exit=$EXIT — server or playwright issue)" >&2
fi

exit 0
