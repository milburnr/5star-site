#!/usr/bin/env python3
"""Swap completed-* portfolio images used as HEROES with curated AI heroes.

Targets three contexts only — leaves <img src="..."> portfolio thumbnails alone:
  1. backgroundImage: 'url(.../completed/...)'         (CSS hero background)
  2. url: "...completed/..."                           (OpenGraph metadata)
  3. "image": "...completed/..."                       (JSON-LD schema)

Usage:
  python3 scripts/swap-heroes.py --dry-run   # preview only
  python3 scripts/swap-heroes.py             # apply
"""
import os, re, sys, hashlib, argparse

R2 = "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes"

AI_CITIES = {
    'amarillo','borger','canyon','channing','clarendon','dalhart','dumas',
    'earth','hereford','levelland','lubbock','memphis','midland','morton',
    'odessa','pampa','perryton','plainview','quitaque','san-angelo',
    'sanderson','stinnett','wichita-falls','wolfforth',
}

# Cities present in URL slugs but missing an AI hero — geographic neighbors.
CITY_FALLBACK = {
    'bushland':'amarillo','claude':'amarillo','vega':'amarillo','wildorado':'amarillo',
    'big-spring':'midland','andrews':'midland',
    'monahans':'odessa',
    'snyder':'lubbock',
}

COMMERCIAL_VARIANTS = ['hero-commercial.jpg','hero-commercial-2-1920w.webp',
    'hero-commercial-4-1920w.webp','hero-commercial-5-1920w.webp',
    'hero-commercial-6-1920w.webp','hero-commercial-7-1920w.webp',
    'hero-commercial-8-1920w.webp','hero-commercial-9-1920w.webp',
    'hero-commercial-10-1920w.webp','hero-commercial-11-1920w.webp']

def detect_city(slug):
    for city in sorted(AI_CITIES | set(CITY_FALLBACK), key=len, reverse=True):
        if city in slug:
            return CITY_FALLBACK.get(city, city)
    return None

def detect_category(slug):
    if 'commercial-roofing' in slug or 'tpo-roofing' in slug: return 'commercial'
    if 'metal-roofing' in slug or 'metal-roof' in slug: return 'metal'
    if 'hail-damage' in slug: return 'hail'
    if 'wind-damage' in slug or 'storm' in slug: return 'storm'
    if 'roof-replacement' in slug or 'asphalt-shingle-roofing' in slug or 'residential-roofing' in slug: return 'residential'
    if 'flat-roof' in slug or 'pvc-roof' in slug or 'industrial-roof' in slug: return 'commercial'
    return None

def get_hero_url(slug):
    city = detect_city(slug)
    cat  = detect_category(slug)
    # City landing pages (slug ends with -tx-roofing or -texas-roofing)
    if slug.endswith('-tx-roofing') or slug.endswith('-texas-roofing'):
        return f"{R2}/{city}-hero.jpg" if city else f"{R2}/services-hero.jpg"
    if cat == 'residential' and city:
        return f"{R2}/{city}-hero.jpg"
    if cat == 'commercial':
        idx = int(hashlib.md5(slug.encode()).hexdigest(), 16) % len(COMMERCIAL_VARIANTS)
        return f"{R2}/{COMMERCIAL_VARIANTS[idx]}"
    if cat == 'metal':       return f"{R2}/hero-metal-roof.jpg"
    if cat == 'hail':        return f"{R2}/hero-hail-damage.jpg"
    if cat == 'storm':       return f"{R2}/hero-storm.jpg"
    if cat == 'residential': return f"{R2}/hero-residential.jpg"
    if city:                 return f"{R2}/{city}-hero.jpg"
    return f"{R2}/services-hero.jpg"

COMPLETED = r"https://pub-797574ea9b1b4ccda73d4f6afb5d90d5\.r2\.dev/images/completed/completed-[a-z-]+-\d+-(?:1280w|640w)\.(?:jpg|webp)"

# Three context-specific patterns. Each captures (prefix)(url)(suffix).
PATTERNS = [
    re.compile(r"(backgroundImage:\s*['\"]url\()" + COMPLETED + r"(\)['\"])"),
    re.compile(r"(\burl:\s*\")"   + COMPLETED + r"(\")"),
    re.compile(r"(\"image\":\s*\")" + COMPLETED + r"(\")"),
]

def process_file(path, dry_run=False):
    with open(path) as f: content = f.read()
    orig = content
    rel  = path.split('app/', 1)[1] if 'app/' in path else path
    slug = os.path.dirname(rel)
    if not slug or slug == '.': return None
    new_url = get_hero_url(slug)
    total = 0
    for pat in PATTERNS:
        content, n = pat.subn(rf"\g<1>{new_url}\g<2>", content)
        total += n
    if content != orig:
        if not dry_run:
            with open(path, 'w') as f: f.write(content)
        return (slug, new_url, total)
    return None

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--limit', type=int, default=0, help='Process at most N files')
    args = ap.parse_args()

    paths = []
    for root, _, files in os.walk('app'):
        for f in files:
            if f == 'page.tsx': paths.append(os.path.join(root, f))
    paths.sort()

    changed = 0; total_subs = 0
    for p in paths:
        r = process_file(p, dry_run=args.dry_run)
        if r:
            slug, url, n = r
            short = url.rsplit('/',1)[-1]
            print(f"  {slug:50s}  →  {short}  ({n} ref{'s' if n!=1 else ''})")
            changed += 1; total_subs += n
            if args.limit and changed >= args.limit: break

    verb = 'would change' if args.dry_run else 'changed'
    print(f"\n{verb} {changed} file(s), {total_subs} substitution(s)")

if __name__ == '__main__':
    main()
