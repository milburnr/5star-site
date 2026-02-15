#!/bin/bash
# 5 Star Roofing - Image Fixes Script
# Run from site root: ./scripts/fix-images.sh

set -e
cd "$(dirname "$0")/.."

echo "=== PHASE 2: IMAGE FIXES ==="
echo "Working directory: $(pwd)"
echo ""

# ============================================
# FIX 1: Remove file extensions from OptimizedImage src
# ============================================
echo "Removing file extensions from image paths..."

find app -name "*.tsx" -exec sed -i '' \
  -e 's|src="/images/\([^"]*\)\.jpg"|src="/images/\1"|g' \
  -e 's|src="/images/\([^"]*\)\.jpeg"|src="/images/\1"|g' \
  -e 's|src="/images/\([^"]*\)\.png"|src="/images/\1"|g' \
  {} \;

# ============================================
# FIX 2: Replace broken image names with working ones
# ============================================
echo "Replacing broken image references..."

# Images that don't have responsive sets -> replace with ones that do
find app -name "*.tsx" -exec sed -i '' \
  -e 's|src="/images/CommercialRoofing"|src="/images/Shippingyardroof"|g' \
  -e 's|src="/images/ResidentialServices"|src="/images/Roof-Replacement-in-AmarilloTX"|g' \
  -e 's|src="/images/shutterstock_162724754"|src="/images/hail-damage-3"|g' \
  -e 's|src="/images/shutterstock_2140326707"|src="/images/EPDM2"|g' \
  -e 's|src="/images/shutterstock_473737921"|src="/images/Aerialview"|g' \
  -e 's|src="/images/churchtpo"|src="/images/TPO1"|g' \
  -e 's|src="/images/danage"|src="/images/hail-damage-3"|g' \
  -e 's|src="/images/commercial-roof"|src="/images/Shippingyardroof"|g' \
  -e 's|src="/images/Roofing-Methods"|src="/images/AsphaltRoofCoat"|g' \
  {} \;

# Fix -1280w suffix issues
find app -name "*.tsx" -exec sed -i '' \
  -e 's|src="/images/Shippingyardroof-1280w"|src="/images/Shippingyardroof"|g' \
  -e 's|src="/images/TPO2-1280w"|src="/images/TPO2"|g' \
  {} \;

# ============================================
# FIX 3: Fix inline style backgroundImage URLs
# ============================================
echo "Fixing hero background images..."

# These use url() in style props - need actual file paths with -1280w suffix
find app -name "*.tsx" -exec sed -i '' \
  -e "s|url(/images/cover-background-roofing-sunset-1024x683\.jpg)|url(/images/cover-background-roofing-sunset-1280w.jpg)|g" \
  -e "s|url(/images/cover-background-roofing-sunset\.jpg)|url(/images/cover-background-roofing-sunset-1280w.jpg)|g" \
  -e "s|url(/images/CommercialRoofing\.jpeg)|url(/images/Shippingyardroof-1280w.jpg)|g" \
  -e "s|url(/images/ResidentialServices\.jpeg)|url(/images/Roof-Replacement-in-AmarilloTX-1280w.jpg)|g" \
  -e "s|url(/images/hail-damage-3\.jpg)|url(/images/hail-damage-3-1280w.jpg)|g" \
  -e "s|url(/images/SteelRoofing\.jpg)|url(/images/SteelRoofing-1280w.jpg)|g" \
  -e "s|url(/images/TPO1\.jpg)|url(/images/TPO1-1280w.jpg)|g" \
  -e "s|url(/images/asphaltshingles\.jpg)|url(/images/asphaltshingles-1280w.jpg)|g" \
  -e "s|url(/images/Roof-Replacement-in-AmarilloTX\.jpeg)|url(/images/Roof-Replacement-in-AmarilloTX-1280w.jpg)|g" \
  -e "s|url(/images/Roof-Replacement-in-AmarilloTX\.jpg)|url(/images/Roof-Replacement-in-AmarilloTX-1280w.jpg)|g" \
  {} \;

# ============================================
# FIX 4: Fix blog page emoji placeholders
# ============================================
echo "Fixing blog emoji placeholders..."

# This needs more targeted replacement - will handle in separate script

# ============================================
# VERIFICATION
# ============================================
echo ""
echo "After fixes:"
echo "- Image paths with extensions: $(grep -rh 'src="/images/[^"]*\.\(jpg\|jpeg\|png\)"' app/ --include='*.tsx' 2>/dev/null | wc -l)"
echo "- Background URLs without -1280w: $(grep -rh 'url(/images/[^)]*\.jpg)' app/ --include='*.tsx' 2>/dev/null | grep -v '1280w' | wc -l)"

echo ""
echo "=== IMAGE FIXES COMPLETE ==="
