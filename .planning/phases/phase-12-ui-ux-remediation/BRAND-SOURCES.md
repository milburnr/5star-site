# Brand Asset Sourcing — Phase 12

Official brand-asset locations for every logo used in Stream C. Always pull from the manufacturer/carrier's own press kit — never hotlink from Wikipedia, never scrape. Store in R2 under `images/trust/[category]/[slug].svg` (prefer SVG, fall back to PNG 2x).

## Legal Rule for ALL logos

> "Insurance carrier and material manufacturer logos are trademarks of their respective owners. 5 Star Commercial Roofing is independent and is not affiliated with, endorsed by, or sponsored by any listed carrier or manufacturer unless explicitly stated as a certification (e.g., 'GAF Master Elite')."

Put that sentence in the footer. Every logo row on a content page must include "We work with" or "Premium materials we install" framing — never "Partnered with" or "Endorsed by."

If the owner (Ben Terhune) holds any specific certification — GAF Master Elite, Owens Corning Platinum Preferred, CertainTeed SELECT ShingleMaster — **confirm before displaying the cert badge.** Displaying a cert you don't hold is actionable.

---

## Insurance Carriers — `components/InsuranceLogos.tsx`

Carriers that matter for Texas Panhandle storm/hail claims (by market share):

| Brand | Official Asset Source | File to store | Notes |
|---|---|---|---|
| **State Farm** | statefarm.com → "About" → Media/Brand Resources | `trust/insurance/state-farm.svg` | Largest homeowner carrier in Texas |
| **Allstate** | allstate.com → Media Resources | `trust/insurance/allstate.svg` | High claim volume |
| **USAA** | usaa.com → Press Room | `trust/insurance/usaa.svg` | Huge in military-adjacent Amarillo |
| **Farmers Insurance** | farmers.com → Media Center / Press Kit | `trust/insurance/farmers.svg` | |
| **Liberty Mutual** | libertymutual.com → Media Center | `trust/insurance/liberty-mutual.svg` | |
| **Nationwide** | nationwide.com → Newsroom → Media Library | `trust/insurance/nationwide.svg` | |
| **Travelers** | travelers.com → Press Room → Media Kit | `trust/insurance/travelers.svg` | |
| **Progressive** | progressive.com → Press Room | `trust/insurance/progressive.svg` | |

**Display treatment:**
- Grayscale or single-tone gold (`#A57F0F`) at 70% opacity
- Hover: 100% opacity + native brand color
- Uniform logo height (`h-10 md:h-12`), proportional width
- Horizontal grid, wraps on mobile to 2 columns

---

## Residential Shingle Brands — `components/MaterialBrands.tsx variant="residential"`

| Brand | Official Asset Source | File to store | Cert to check |
|---|---|---|---|
| **GAF** | gaf.com → "About GAF" → Newsroom → Media Kit | `trust/materials/gaf.svg` | **Master Elite** (if certified, display badge separately) |
| **Owens Corning** | owenscorning.com → News Room → Media Resources | `trust/materials/owens-corning.svg` | **Platinum Preferred** |
| **CertainTeed** | certainteed.com → About → Media Center | `trust/materials/certainteed.svg` | **SELECT ShingleMaster** |
| **Malarkey Roofing Products** | malarkeyroofing.com → About → Press | `trust/materials/malarkey.svg` | Emerald Pro |
| **Atlas Roofing** | atlasroofing.com → Media → Press Kit | `trust/materials/atlas.svg` | Pro Plus |
| **TAMKO** | tamko.com → About → Newsroom | `trust/materials/tamko.svg` | Pro Certified |

**Display treatment:**
- Same mono-gold or grayscale treatment as insurance
- Section heading: "Premium residential materials we install"
- If any cert is actually held, render as its own proud badge row above the logo strip with the official cert artwork from the manufacturer's channel-partner portal

---

## Metal Roofing Brands — `components/MaterialBrands.tsx variant="metal"`

| Brand | Official Asset Source | File to store |
|---|---|---|
| **McElroy Metal** | mcelroymetal.com → About → Media Kit | `trust/materials/mcelroy-metal.svg` |
| **Metal Sales Manufacturing** | metalsales.us.com → About → Press / Media | `trust/materials/metal-sales.svg` |
| **Englert** | englertinc.com → About → Media | `trust/materials/englert.svg` |
| **Drexel Metals** | drexmet.com → About → Press Kit | `trust/materials/drexel-metals.svg` |
| **MBCI** (NCI Building Systems) | mbci.com → About → Media | `trust/materials/mbci.svg` |
| **ATAS International** | atas.com → About → News | `trust/materials/atas.svg` |

---

## Commercial Roof Systems — `components/MaterialBrands.tsx variant="commercial"`

| Brand | Official Asset Source | File to store |
|---|---|---|
| **Carlisle SynTec Systems** | carlislesyntec.com → About → Newsroom | `trust/materials/carlisle-syntec.svg` |
| **GAF Commercial / EverGuard** | gaf.com/commercial → Media | `trust/materials/gaf-commercial.svg` |
| **Versico** | versico.com → About → Press | `trust/materials/versico.svg` |
| **Johns Manville** | jm.com → About → Newsroom → Media Kit | `trust/materials/johns-manville.svg` |
| **Sika Sarnafil** | usa.sika.com → About → Media | `trust/materials/sika-sarnafil.svg` |
| **Mule-Hide Products** | mulehide.com → About → Media | `trust/materials/mule-hide.svg` |
| **Duro-Last** | duro-last.com → About → Press Room | `trust/materials/duro-last.svg` |
| **Elevate** (formerly Firestone Building Products) | holcimelevate.com → About → Media | `trust/materials/elevate.svg` |

---

## Accreditation Badges — Footer

| Badge | Source | File to store | Rule |
|---|---|---|---|
| **BBB A+** | bbb.org → "Get the Seal" (for accredited businesses) | `trust/accreditation/bbb-a-plus.svg` | Only display if actually BBB accredited and rating is current |
| **GAF Master Elite** | gaf.com → Contractor Zone | `trust/accreditation/gaf-master-elite.svg` | Only if active certification |
| **Owens Corning Platinum Preferred** | owenscorning.com → Contractor portal | `trust/accreditation/oc-platinum.svg` | Only if active |
| **CertainTeed SELECT ShingleMaster** | certainteed.com → Contractor portal | `trust/accreditation/ct-select.svg` | Only if active |
| **HAAG Certified Inspector** | haagedu.com | `trust/accreditation/haag-certified.svg` | If inspectors hold certification |
| **Texas Roofing Contractors Association** | texasroofing.com | `trust/accreditation/trca.svg` | If member |

---

## File Format Rules

1. **SVG first.** Every brand provides SVG in their press kit. Use it.
2. PNG fallback at 2x native size (e.g., 400×150 if rendered 200×75). Compress with `pngquant --quality=70-90`.
3. **No hotlinking.** Every asset lives in R2 under `images/trust/...`.
4. **alt text is mandatory:** e.g., `alt="State Farm"` (nothing more — don't imply affiliation in the alt).

## Component Shape

```tsx
// components/InsuranceLogos.tsx
export function InsuranceLogos() {
  return (
    <section className="section-sub bg-white border-y border-brand-gold/20">
      <div className="container-custom">
        <h3 className="text-center text-lg md:text-xl font-semibold text-gray-primary mb-8">
          We work directly with your insurance carrier
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 items-center">
          {carriers.map(c => (
            <img
              key={c.slug}
              src={c.src}
              alt={c.name}
              className="h-10 md:h-12 w-auto mx-auto opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
        <p className="mt-6 text-xs text-center text-gray-primary/70 max-w-3xl mx-auto">
          Carrier logos are trademarks of their respective owners. 5 Star Commercial Roofing is
          independent and is not affiliated with or endorsed by any insurance carrier.
        </p>
      </div>
    </section>
  );
}
```

Same shape for `MaterialBrands.tsx` with a `variant` prop and its own heading.
