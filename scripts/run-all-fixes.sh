#!/bin/bash
# 5 Star Roofing - Master Fix Script
# Run from site root: ./scripts/run-all-fixes.sh

set -e
cd "$(dirname "$0")/.."

echo "============================================"
echo "5 STAR ROOFING - COMPREHENSIVE FIX SCRIPT"
echo "============================================"
echo ""
echo "Working directory: $(pwd)"
echo "Start time: $(date)"
echo ""

# ============================================
# PRE-CHECK: Verify we're in the right place
# ============================================
if [ ! -f "package.json" ] || [ ! -d "app" ]; then
  echo "ERROR: Not in site root directory"
  exit 1
fi

# ============================================
# PHASE 1: LEGAL CLAIMS FIXES
# ============================================
echo ""
echo "============================================"
echo "PHASE 1: LEGAL CLAIMS FIXES"
echo "============================================"
chmod +x scripts/fix-legal-claims.sh
./scripts/fix-legal-claims.sh

# ============================================
# PHASE 2: IMAGE FIXES
# ============================================
echo ""
echo "============================================"
echo "PHASE 2: IMAGE FIXES"  
echo "============================================"
chmod +x scripts/fix-images.sh
./scripts/fix-images.sh

# ============================================
# PHASE 3: NAVIGATION UPDATE
# ============================================
echo ""
echo "============================================"
echo "PHASE 3: NAVIGATION UPDATE"
echo "============================================"

# Update layout.tsx to use DropdownNav
if grep -q "DropdownNav" app/layout.tsx; then
  echo "DropdownNav already in layout.tsx"
else
  echo "Adding DropdownNav to layout.tsx..."
  
  # Add import
  sed -i '' 's|import { MobileMenu }|import { DropdownNav } from "@/components/DropdownNav";\nimport { MobileMenu }|' app/layout.tsx
  
  # Replace the old nav with DropdownNav
  # This is a complex replacement - doing it with a temp file approach
  cat app/layout.tsx | sed '
    /<div className="hidden md:flex gap-6 items-center">/,/<\/div>/{
      s|<div className="hidden md:flex gap-6 items-center">|<DropdownNav />|
      /^[[:space:]]*<a href/d
      /^[[:space:]]*<\/div>/d
    }
  ' > app/layout.tsx.tmp && mv app/layout.tsx.tmp app/layout.tsx
  
  echo "Navigation updated"
fi

# ============================================
# PHASE 4: EMERGENCY PAGES - RENAME TO URGENT
# ============================================
echo ""
echo "============================================"
echo "PHASE 4: EMERGENCY -> URGENT REPAIRS"
echo "============================================"

# Update content in emergency pages to say "urgent" instead of "emergency"
find app/emergency-* -name "page.tsx" -exec sed -i '' \
  -e 's/Emergency Roof Repair/Urgent Roof Repair/g' \
  -e 's/emergency roof repair/urgent roof repair/g' \
  -e 's/Emergency roof repair/Urgent roof repair/g' \
  -e 's/24\/7 emergency/urgent/g' \
  -e 's/Emergency response/Fast response/g' \
  -e 's/emergency response/fast response/g' \
  {} \; 2>/dev/null || echo "No emergency pages found"

echo "Emergency language softened to 'urgent'"

# ============================================
# PHASE 5: BUILD TEST
# ============================================
echo ""
echo "============================================"
echo "PHASE 5: BUILD TEST"
echo "============================================"
echo "Running build to check for errors..."

npm run build 2>&1 | tee build-output.log | tail -20

if [ ${PIPESTATUS[0]} -eq 0 ]; then
  echo ""
  echo "✅ BUILD SUCCESSFUL"
else
  echo ""
  echo "❌ BUILD FAILED - Check build-output.log"
  exit 1
fi

# ============================================
# SUMMARY
# ============================================
echo ""
echo "============================================"
echo "FIX SUMMARY"
echo "============================================"
echo "End time: $(date)"
echo ""
echo "Remaining issues to check manually:"
grep -rl "95%" app/ --include="*.tsx" 2>/dev/null | head -5 || echo "- No 95% claims found"
grep -rl "claims processed" app/ --include="*.tsx" 2>/dev/null | head -5 || echo "- No 'claims processed' found"
grep -rl "72 hours" app/ --include="*.tsx" 2>/dev/null | head -5 || echo "- No '72 hours' claims found"
echo ""
echo "============================================"
echo "READY FOR MANUAL REVIEW BEFORE DEPLOY"
echo "============================================"
