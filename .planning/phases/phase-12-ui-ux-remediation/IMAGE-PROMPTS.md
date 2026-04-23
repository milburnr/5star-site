# Hero Image Prompt Library — Nano Banana 2

**Target model:** Google Gemini "Nano Banana 2" (the conversational-style image model that replaced the earlier Nano Banana / Gemini 2.5 Flash Image).
**Consumed by:** Phase 13 — Hero Image Generation
**Output destination:** R2 bucket `images/heroes/[slug].[ext]` (AVIF primary, WebP fallback, JPG fallback)

## How to use these prompts

Nano Banana 2 responds best to **natural language scene descriptions written as if you're briefing a photographer**, not tag soup. Every prompt in this file is already written that way. Workflow:

1. Paste the full scene paragraph as one block into Nano Banana 2.
2. Append `Aspect ratio: 16:9. Photograph.` at the end.
3. Generate 4 variants.
4. Cull using the hard rules below.
5. Upscale the winner to 2560×1440.
6. Export AVIF + WebP + JPG.
7. Upload to R2 at the slug shown in the prompt header.

## Hard Rules — every image must pass

These rules are absolute. Any generated image that fails any rule is regenerated, not shipped.

- **No safety harness. No hard hat. No high-vis safety vest.** Residential Texas roofers work in jeans, t-shirts, ball caps, and work boots. Period. If Nano Banana 2 adds safety gear, rewrite the prompt with "the crew is not wearing any safety gear, just jeans and t-shirts" and regenerate.
- **Golden-hour Texas sunset or sunrise palette** — warm amber, burnt orange, gold, deep charcoal shadows. Sky must be the dominant color story.
- **Roof is the hero of the frame.** Whatever home appears, the roof line, ridge, and material should be the dominant visual feature. Not a wide scenic that makes the roof incidental.
- **High-end homes only.** Custom brick, limestone, stucco, or board-and-batten. No vinyl siding. No HOA-grade tract homes. No McMansions.
- **Texas Panhandle geography.** Mesquite, cottonwood, scrub, open grassland, distant mesas, grain elevators, pump jacks, windmills — depending on the city. No palm trees. No mountains (except the small caprock/canyon features explicitly called out in specific prompts). No ocean. No pine forest.
- **Photo-realistic.** Not illustrated, not painterly, not 3D-rendered.
- **Wide composition** with the upper-left-to-left-third intentionally quieter so headline text can overlay without fighting the image.
- **No text, no watermarks, no logos** in the frame.
- **No people in most frames.** The only prompts that include people are `services-hero` (2-person crew walking) and `hero-inspection` (homeowner + contractor). Everywhere else: empty of people.

## Style reference sentence (reuse verbatim)

Embed this sentence in every prompt so Nano Banana 2 locks onto the brand style:

> "Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly."

---

## Brand-Wide Heroes (8)

These eight hero images appear on top-level pages. Each is used on exactly one page surface per `IMAGE-MANIFEST.md`.

---

### `home-hero` — used by `/` (homepage)

A sprawling high-end Texas Hill Country ranch home photographed at golden hour, the moment the sun has just dropped below the horizon and the sky is igniting in amber and burnt orange. The home has a complex hip roof with multiple ridges, dressed in premium architectural asphalt shingles in warm weathered-wood tones, with crisp copper-flashed valleys catching the last light. Limestone exterior walls, a wraparound covered porch, mature live oaks framing the foreground, and a wildflower prairie stretching behind the home to a distant mesa silhouette. Interior lights are glowing warm through the windows. The composition sits low, camera slightly elevated, with about two thirds of the frame dedicated to sky so the roof line reads strong against the sunset. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `services-hero` — used by `/services/`

Two Texas roofing contractors in their thirties and forties walking toward camera across the driveway of a luxury limestone ranch home at sunrise, the sky a wash of amber and burnt orange behind them. They are wearing jeans, heathered t-shirts with a small logo on the chest, work boots, and ball caps. One carries a ladder slung casually over his shoulder, the other carries a single bundle of architectural shingles. Relaxed, capable body language. Absolutely no safety harnesses, no hard hats, no safety vests, no reflective gear — these guys are residential roofers on a custom home, not a commercial jobsite. Behind them, the home's complex hip roof dominates the upper half of the frame with pristine new architectural shingles and copper gutters catching the sunrise light. Mature live oaks frame the edges. Leave the left third of the frame open and quieter for headline text overlay. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `hero-commercial` — used by `/commercial-roofing/`

A low sweeping aerial perspective shot from about forty feet above and two hundred feet out, looking across a modern Texas commercial building at sunset. The building is a single-story class-A medical office or clean warehouse with a flawless white TPO membrane roof, clean geometric rooftop HVAC units in a regular grid, crisp parapet walls, and perimeter edge metal that reads as engineered and new. A parking lot with a handful of late-model work trucks sits in the foreground. The roof field is the absolute hero of the frame — huge, white, reflecting the burnt-orange sunset sky. A warehouse district fades into open Texas plain on the horizon. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `hero-residential` — used by `/residential-roofing/`

A stately custom-build Texas farmhouse at golden hour. Board-and-batten white siding with black window trim, a wraparound porch with rocking chairs, cedar columns, and Belgian block edging along a gravel drive. The roof is the hero: a standing-seam metal roof in deep charcoal bronze that catches the sunset in long specular highlights running down every rib. Mature live oaks frame the edges of the composition. A wildflower prairie stretches into the foreground. The amber sky behind the house looks like the kind of sunset Texans talk about for the rest of the week. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `hero-hail-damage` — used by `/hail-damage-repair-amarillo/` and all `/hail-*/` templates

A dramatic late-afternoon scene moments after a Panhandle supercell has passed. A massive anvil thunderhead is retreating to the east, catching the setting sun in bronze and deep gold light with visible godrays punching through the cloud bank. A high-end Texas ranch home with limestone walls sits intact in the foreground, its architectural shingle roof pristine and unbothered. The driveway is dusted with pea-sized hailstones glinting like crystal in the sunset light. Wet asphalt reflects the sky colors. A faint rainbow is beginning to form over a distant mesa silhouette. The mood is aftermath meeting relief — powerful weather, but the home is standing strong. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `hero-storm` — used by `/storm-damage-repair-amarillo/` and all `/storm-*/` templates

A wide sunset shot looking across West Texas grassland toward a high-end brick ranch home. A towering storm cell is retreating over the horizon line, catching the last golden light. Dramatic godrays break through the cloud bank over the distant mesa. The home's roof is pristine architectural shingle catching the warm directional light. A few scattered broken branches on the front lawn hint at the storm that just passed. A stock-tank windmill silhouette sits in the middle distance. The mood is post-storm peace with raw weather beauty still in the air. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `hero-inspection` — used by `/roof-inspection/` and `/inspection-*/` pages

A cinematic sunrise shot of an older Texas homeowner in his sixties wearing jeans, a flannel shirt, and a ball cap standing in his driveway next to a confident friendly roofing contractor in his forties wearing jeans and a plain t-shirt with a small logo on the chest. Both are looking up toward the home's roof line with open body language — the contractor is pointing at something on the ridge and the homeowner is nodding. Warm rim light behind them from the rising sun. The home's complex hip roof dominates the upper half of the frame with clean architectural shingles. A pickup truck with an extension ladder tied to the rack is parked in the foreground. The feeling is competence and trust, no sales-pitch cheesiness. Absolutely no safety harness, no hard hat, no high-vis vest on the contractor — just jeans and a t-shirt. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `hero-metal-roof` — used by `/metal-roofing/`

A low-angle hero shot of a contemporary Texas modern-farmhouse at golden hour. White lap siding, black window frames, a black front door, and a limestone chimney. The standing-seam steel roof in matte charcoal-bronze is the dominant element of the frame, catching long specular sunset highlights along every single rib. The metal reads as unmistakably premium — every panel crisp, every seam true. Mature post oaks frame the edges. A prairie sunset sky glows deep amber behind the chimney silhouette. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

## City-Specific Heroes (24)

One hero per city listed in `hero-manifest.json`. Each prompt is written so the city reads as itself — custom home style, regional vegetation, a local landmark detail in the distance — not a template.

---

### `amarillo-hero` — used by `/amarillo-texas-roofing/`, `/roof-repair-amarillo/`, and all Amarillo templates

A high-end Wolflin-district Tudor revival home in Amarillo at golden hour. The roof is a steep multi-gabled design with premium architectural asphalt shingles in warm weathered tones — the roof line is visually complex and unmistakably high craft. The exterior is brick and half-timber. Mature elms frame the composition. Beyond the home, the classic Amarillo cityscape recedes into the horizon under a sky igniting with amber and burnt orange. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `borger-hero` — used by `/borger-*/` templates

A tidy brick ranch home on the outskirts of Borger, Texas at sunset. A simple low-pitch hip roof dressed in deep charcoal-bronze standing-seam metal reflects the last light cleanly. In the distance, the silhouette of a classic oilfield pump jack rhythms against the horizon. Sage and mesquite scrub in the foreground. A deep amber Panhandle sky stretches to infinity behind the home. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `canyon-hero` — used by `/canyon-*/` templates

A luxury limestone ranch home perched near the rim of Palo Duro Canyon at sunset. The roof is premium architectural shingle in sand and rust tones that echo the canyon walls beyond. A wraparound porch faces out toward the canyon. The canyon's famous red striations are glowing in the sunset light behind the home, creating a natural backdrop unlike anywhere else in Texas. Cactus and native grasses in the foreground. Big Texas sky above. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `channing-hero` — used by `/channing-*/` templates

An iconic XIT-era Texas cattle ranch headquarters near Channing. A board-and-batten ranch house with a freshly replaced charcoal standing-seam metal roof sits in the middle ground. Corrals and a weathered windmill are visible in the distance. Golden-hour light rakes across prairie grass and catches every rib of the metal roof. A soft dust atmosphere hangs in the warm air. Sunset sky in deep amber. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `clarendon-hero` — used by `/clarendon-*/` templates

A stately pre-war brick home on an old-town street in Clarendon, Texas at sunset. A steep gable roof dressed in new premium architectural shingles in warm chestnut tones. Mature cottonwoods and pecan trees frame the composition. The silhouette of the historic courthouse is visible far in the background. Amber Panhandle sky above. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `dalhart-hero` — used by `/dalhart-*/` templates

A modern Texas farmhouse on a grain-elevator-lined street in Dalhart at golden hour. White board-and-batten siding with black window trim. A standing-seam metal roof in deep bronze catching the sunset along every rib. A classic Dalhart grain elevator silhouette rises in the distance. Wide sky stretches above, burnt-orange horizon line. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `dumas-hero` — used by `/dumas-*/` templates

A high-end brick ranch home on the rolling plains near Dumas, Texas at sunset. A complex hip roof in premium architectural shingle. Thoughtful xeriscape landscaping. Wind-bent prairie grass in the foreground. A soft dust atmosphere. A Panhandle cloud bank catches fiery sunset light across most of the sky. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `earth-hero` — used by `/earth-*/` templates

A quiet high-end farmhouse on the South Plains near Earth, Texas at golden hour. A simple gable roof in charcoal standing-seam metal. A cotton field stretches to the horizon. A single large cottonwood tree frames one edge of the composition. A fiery sunset sky dominates the upper two-thirds of the frame. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `hereford-hero` — used by `/hereford-*/` templates

A luxury Texas cattle-ranch home on the outskirts of Hereford at sunset. Limestone and stucco facade. A roof of premium weathered-wood-tone architectural shingles. A herd of Hereford cattle visible in the middle-distance pasture, grazing in the golden light. Amber Panhandle sky above. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `levelland-hero` — used by `/levelland-*/` templates

A custom brick home in Levelland, Texas at sunrise. An architectural asphalt shingle roof in warm sand tones catches the first light of day. Mature mesquite trees flank the composition. A cotton field boundary sits behind the home. A fiery sunrise horizon in amber and gold washes across the sky. The home is illuminated warmly by the low directional light. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `lubbock-hero` — used by `/lubbock-*/` templates

A luxury Tech Terrace home in Lubbock at golden hour. A two-story brick colonial with a hip roof dressed in premium architectural shingle and copper flashing at every valley. Mature pecan trees frame the composition. An amber sunset sky glows over the Llano Estacado horizon. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `memphis-hero` — used by `/memphis-*/` templates

A tidy high-end farmhouse on the outskirts of Memphis, Texas at sunset. Black-trimmed white siding and a standing-seam metal roof in deep charcoal bronze. A red barn silhouette sits in the middle distance. Wide sky with a stunning sunset cloud bank. Hay bales in the foreground prairie. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `midland-hero` — used by `/midland-*/` templates

A contemporary Permian Basin luxury home in Midland at golden hour. Desert-modern architecture with a low-slope standing-seam metal roof in charcoal bronze. Limestone and stucco walls. A manicured xeriscape with agave, ocotillo, and lechuguilla in the foreground. The silhouette of a Permian pump jack is visible in the distance. A dramatic sunset sky ignites above. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `morton-hero` — used by `/morton-*/` templates

A classic West Texas ranch home near Morton at golden hour. A brick facade with a pristine new architectural shingle roof in warm sand tones. A grain elevator silhouette on the horizon. Wind-bent prairie grass and a single cottonwood for scale. Burnt-orange Panhandle sunset sky dominates the frame. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `odessa-hero` — used by `/odessa-*/` templates

A high-end Permian Basin home on the outskirts of Odessa at sunset. A modern stucco facade with a standing-seam metal roof in charcoal bronze. Desert landscape with yucca and sage in the foreground. A distant pump jack and the first oilfield lights of the evening beginning to glow. Deep amber sunset sky. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `pampa-hero` — used by `/pampa-*/` templates

A well-kept brick ranch home on a quiet Pampa street at golden hour. A classic mid-century hip roof with brand new architectural shingles in warm weathered-wood tones. A mature Siberian elm frames the composition. A grain elevator silhouette sits far on the horizon. Sunset sky glowing amber. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `perryton-hero` — used by `/perryton-*/` templates

A prosperous North Panhandle farmhouse near Perryton at sunrise. Board-and-batten siding with a standing-seam metal roof in deep charcoal catching the first light. A golden wheat field stretches to the horizon. A red barn sits in the middle distance. Sunrise amber sky above. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `plainview-hero` — used by `/plainview-*/` templates

A stately pecan-shaded custom home in Plainview, Texas at golden hour. A red-brick facade. A complex hip roof in premium architectural shingle with copper flashings at every valley. Mature pecan trees frame the composition. An amber sunset sky stretches over the Llano Estacado horizon. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `quitaque-hero` — used by `/quitaque-*/` templates

A luxury ranch home nestled against the Caprock Escarpment near Quitaque at sunset. Limestone walls and an architectural shingle roof in warm rust tones that mirror the caprock cliffs behind the home. Mesquite and juniper in the foreground. The dramatic red-rock cliffs of the Caprock catch the last of the sunset light. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `san-angelo-hero` — used by `/san-angelo-*/` templates

A high-end Concho River bungalow in San Angelo at golden hour. Spanish Colonial Revival architecture with a red clay tile roof catching the sunset light along every course. Stucco walls. Mature live oaks frame the composition. The Concho River glints in the background with the last light of day. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `sanderson-hero` — used by `/sanderson-*/` templates

A remote West Texas ranch house near Sanderson at sunset. Stone-and-stucco facade with a standing-seam metal roof in deep bronze. The Chihuahuan desert opens into the distance with blue-silhouette mountains on the horizon. Ocotillo and agave in the foreground. A dramatic sunset sky in burnt orange and violet. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `stinnett-hero` — used by `/stinnett-*/` templates

A tidy high-end brick home on the outskirts of Stinnett at golden hour. A hip roof in premium weathered-wood architectural shingle. A grain elevator silhouette in the distance. A wheat field stretching to the horizon. Amber Panhandle sunset sky. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `wichita-falls-hero` — used by `/wichita-falls-*/` templates

A luxury brick colonial on a tree-lined Wichita Falls street at golden hour. A two-story hip roof in premium architectural shingle. Mature pecan trees. The Wichita River glints in the distance. An amber Texas sunset sky washes across the frame. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

### `wolfforth-hero` — used by `/wolfforth-*/` templates

A modern South Plains custom home near Wolfforth at sunset. A board-and-batten farmhouse with a standing-seam metal roof in charcoal bronze. A cotton field boundary. A mature Siberian elm anchoring one edge of the composition. A fiery sunset sky over the Llano Estacado horizon. No people. Shot on a Leica Q3 with a 35mm Summilux lens, golden hour light, warm amber and burnt-orange palette, deep charcoal shadows, cinematic depth of field, editorial real-estate photography feel — the kind of photograph that would run full-bleed in Texas Monthly. Aspect ratio: 16:9. Photograph.

---

## Acceptance checklist (run on every generated image)

A hero image is shippable only if all of these are true:

- [ ] Golden-hour Texas sunset or sunrise palette dominates the sky
- [ ] The roof is the dominant visual element of the composition
- [ ] The home reads as high-end (limestone, brick, custom farmhouse, standing-seam metal, etc.) — not tract housing
- [ ] No safety harness, no hard hat, no high-vis vest on any person in the frame
- [ ] No palm trees, no pine forest, no ocean, no non-Texas vegetation (unless the prompt explicitly calls for it, like Caprock / Chihuahuan desert)
- [ ] Wide 16:9 composition with quieter left third for headline text overlay
- [ ] Photo-realistic, not illustrated or over-stylized
- [ ] Visually reads as a stylistic sibling to the current homepage hero (so the site feels cohesive once all images land)
- [ ] No text, no watermarks, no logos in the frame

If any box is unchecked, regenerate with a corrective instruction appended to the prompt.

## Per-page mapping

See `IMAGE-MANIFEST.md` in this same directory for the authoritative map of **which page uses which slug** and **which template file** consumes it.
