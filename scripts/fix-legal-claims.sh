#!/bin/bash
# 5 Star Roofing - Legal Claims Fix Script
# Run from site root: ./scripts/fix-legal-claims.sh

set -e
cd "$(dirname "$0")/.."

echo "=== PHASE 1: LEGAL CLAIMS FIXES ==="
echo "Working directory: $(pwd)"
echo ""

# Count before
echo "Before fixes:"
echo "- Files with '95%': $(grep -rl '95%' app/ --include='*.tsx' 2>/dev/null | wc -l)"
echo "- Files with 'claims processed': $(grep -rl -i 'claims processed' app/ --include='*.tsx' 2>/dev/null | wc -l)"
echo "- Files with '100%.*paperwork': $(grep -rl '100%.*paperwork' app/ --include='*.tsx' 2>/dev/null | wc -l)"
echo ""

# ============================================
# FIX 1: Remove/replace "95%+ approval rate" claims
# ============================================
echo "Fixing 95% approval rate claims..."

# In FAQ answers - replace with accurate language
find app -name "*.tsx" -exec sed -i '' \
  's/95%+ approval rate\./We document damage thoroughly and work with your insurance company to ensure all required costs are covered./g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/95%\+ approval rate/thorough documentation to support your claim/g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/with a 95%+ approval rate//g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/Our 95%+ approval rate demonstrates our insurance expertise/Our thorough documentation and experience working with insurance companies/g' {} \;

# ============================================
# FIX 2: Remove "$15 million" and claims processed stats  
# ============================================
echo "Removing false statistics..."

find app -name "*.tsx" -exec sed -i '' \
  's/We'\''ve successfully processed over \$15 million in insurance claims for Amarillo homeowners, with a 95%+ approval rate\./We help homeowners through the insurance claims process with thorough documentation and professional estimates./g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/Successfully processed over \$15 million in insurance claims with 95%+ approval rates\./We work with all major insurance carriers and handle documentation, adjuster meetings, and supplement requests./g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/1,200+ claims processed/Experienced with insurance claims/g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/1200+ claims processed/Experienced with insurance claims/g' {} \;

# ============================================
# FIX 3: Fix "100% paperwork" claims
# ============================================
echo "Fixing 100% paperwork claims..."

find app -name "*.tsx" -exec sed -i '' \
  's/We handle 100% of insurance paperwork/We help you through the claims process and provide documentation/g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/handle 100% of insurance claims paperwork/help you through the insurance claims process/g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/We handle 100% of the insurance paperwork/We assist you through the insurance claims process/g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/We handle 100% of this process/We handle the permit process for you/g' {} \;

# ============================================
# FIX 4: Fix "fight for" and "maximize" language
# ============================================
echo "Fixing aggressive insurance language..."

find app -name "*.tsx" -exec sed -i '' \
  's/fight for maximum coverage/work with your insurance company to ensure all required costs are covered/g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/maximize your claim/ensure your claim covers all necessary repairs/g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/advocate for maximum coverage/work with your insurance company to ensure required costs are covered/g' {} \;

# ============================================
# FIX 5: Fix 72-hour claims
# ============================================
echo "Fixing 72-hour deadline claims..."

find app -name "*.tsx" -exec sed -i '' \
  's/Insurance companies require documentation within 72 hours of storm damage/Insurance policies require prompt reporting of storm damage. Delays can hurt your claim./g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/within 72 hours of any hailstorm/promptly after any hailstorm/g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/within 72 hours of a major hail event/as soon as possible after a hail event/g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/within 72 hours after every hailstorm/promptly after every hailstorm/g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/inspection within 72 hours/inspection promptly/g' {} \;

find app -name "*.tsx" -exec sed -i '' \
  's/72hrs/Act Fast/g' {} \;

# ============================================
# VERIFICATION
# ============================================
echo ""
echo "After fixes:"
echo "- Files with '95%': $(grep -rl '95%' app/ --include='*.tsx' 2>/dev/null | wc -l)"
echo "- Files with 'claims processed': $(grep -rl -i 'claims processed' app/ --include='*.tsx' 2>/dev/null | wc -l)"  
echo "- Files with '100%.*paperwork': $(grep -rl '100%.*paperwork' app/ --include='*.tsx' 2>/dev/null | wc -l)"
echo "- Files with '72 hours': $(grep -rl '72 hours' app/ --include='*.tsx' 2>/dev/null | wc -l)"

echo ""
echo "=== LEGAL CLAIMS FIXES COMPLETE ==="
