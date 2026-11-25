# Standard Horizon Russia — Project Record

Updated: 2026-11-25. This document records approved decisions from project discussions. **The live files in `main` are authoritative for implemented code; verify filenames and behavior against GitHub before changing anything.**

## Repository and deployment
- Repository: https://github.com/myprotasov-tech/standard-horizon-website
- Working branch: `main` (do not create additional branches without a reason).
- Published site: https://myprotasov-tech.github.io/standard-horizon-website/index.html
- Site language: Russian. Brand: Standard Horizon. Distributor: КОМПАС-Р.
- Known project assets include HTML, CSS, JS and image assets. Confirm actual paths from repository tree; do not assume page filenames.

## Approved homepage
- Header: approved brand/distributor logo; navigation «Главная», «Каталог», «Где купить», «О бренде»; red «СТАТЬ ДИЛЕРОМ» button.
- Hero: daytime sailing yacht; heading «МОРСКИЕ УКВ РАДИОСТАНЦИИ», subtitle «для яхт, катеров и коммерческого флота»; benefits «Мировой бренд», «Современные технологии», «Премиальное качество», «Широкий модельный ряд»; CTA «Получить консультацию».
- Two linked category tiles: portable (HX891 in water, no red elements) and fixed-mount (GX2410 in helm).
- Brand block: daytime yacht, text on right, white-outline «Подробнее» button.
- Featured catalog: GX1400, GX6000E, HX320E, HX400 IS; front-facing black product photos.
- Footer: Catalog (portable/fixed), Information (brand/where to buy), Feedback (consultation/dealer); copyright © 1992–2026 КОМПАС-Р. Use the approved footer logo and alignment.

## Catalog
- Title: «Каталог радиостанций»; description «Морские УКВ радиостанции».
- Portable order: HX40E, HX210E, HX320E, HX380, HX400 IS, HX891BT/E.
- Fixed-mount order: GX1400, GX2410GPS/E, GX6000E.
- GX2400GPS/E is discontinued; use GX2410GPS/E as replacement in the active catalog.

## HX40E product page
- Large HX40E photo, name, six feature highlights: 6 W, IPX7, FM receiver, ultra-compact design, Li-ion 1850 mAh, audio accessories. Button «Запросить документацию».
- Sections: «Описание», «Характеристики», «Аксессуары и комплектация».
- Description covers channel 16, USA/International/Canadian channels, scanning, Dual/Triple Watch, IPX7 (1 m / 30 min), desktop charger, accessories, and non-floating body (buoyancy only with SHC-29).
- Accessories heading «Комплектация» instead of «Входит в комплект».
- Intro to accessories: formal phrasing about original Standard Horizon and YAESU components compatible with HX40E.
- Final note: «Производитель оставляет за собой право изменять комплектацию и перечень совместимых аксессуаров без предварительного уведомления.»
- Do not restore removed SAD-25/SAD-23 accessory entries or the deleted placeholder note about future photos.

## Navigation and quality rules
- Header/footer navigation must be functional; logo links to homepage.
- Breadcrumbs «Каталог / Портативные радиостанции / HX40E» should link at appropriate levels.
- Homepage category tiles link to the corresponding catalog sections.
- Never replace approved imagery or design while fixing a navigation bug.
- Remove internal editorial phrases such as “Standard Horizon homepage — approved snapshot 2026-11-23; footer wording updated” from public pages.
- Use regular upright fonts and standard short hyphens in copy where agreed.

## Current task / needs verification
- **2026-11-25:** User reports header shifts when navigating between homepage and catalog.
- Catalog header used a separate logo asset and catalog-only geometry overrides. Updated `catalog/index.html` in `main` (commit `ee4ea90`) to use the exact same embedded logo as the homepage and removed catalog-only logo geometry CSS.
- **2026-11-25 follow-up:** Source comparison found homepage-only header typography and spacing overrides missing from catalog. Added matching header rules to `catalog/index.html` in `main` (commit `dd9bcd7`).
- **2026-11-25 additional fix:** Found catalog desktop dealer button was 13px/12×14px while homepage uses 15px/15×20px; aligned catalog button sizing and navigation line-height/color in `catalog/index.html` (commit `16ddb448`).
- **2026-11-25 user verification:** User checked the published site and confirmed the header no longer shifts. Desktop homepage ↔ catalog header issue is resolved and approved. Mobile widths have not been separately confirmed.
- Previous issue: homepage «Главная»/logo navigation causing header disappearance; verify separately if it recurs.

## Working protocol for future chats
1. Read `PROJECT.md` and inspect the current repository tree and relevant files on `main`.
2. Compare requests with approved decisions and current code; do not rebuild pages from chat recollections.
3. Make minimal, targeted changes directly in `main` when requested.
4. Verify changed links/pages and report the commit SHA, files touched, and any unverified behavior.
5. Update this file when a design decision, structure, or task status changes.

## Technical optimization (2026-11-25)
- User approved cautious optimization to reduce giant HTML and chat context consumption while preserving approved design.
- Extracted six contiguous inline CSS blocks from `catalog/index.html` into `catalog/catalog.css` without changing CSS declarations or relative paths (commit `168826a`). Catalog HTML reduced from ~28.9K to ~14.2K characters. Live visual verification remains pending.
- Homepage `index.html` is ~2.54 MB and `products/HX40E.html` ~309 KB. GitHub `fetch_file` currently returns empty content for homepage; do not rewrite it without retrieving full verified bytes. Prioritize extracting embedded images into assets once safe full-file access is established.
- Avoid reintroducing header shifts; verify homepage/catalog transitions after stylesheet extraction.

- **2026-11-25 homepage optimization completed:** Main `index.html` reduced from 2,536,921 to 6,999 characters by extracting 10 embedded data-URI images to `assets/images/home-inline-01..10`, 13 inline CSS blocks to root `styles.css`, and inline JavaScript to root `script.js` (commit `265f2834dda4967be21954834c5d8c21d462c90f`). The original content and CSS rule order were retained; homepage references verified in repository. User visually verified the published optimized homepage on 2026-11-25 and confirmed everything looks correct. Do not rename extracted image files without updating references.

- **2026-11-25 user approval:** Optimized homepage visually checked and approved ("всё ок"). Next proposed phase: cautiously optimize `products/HX40E.html`, preserving approved product design; not yet started.

- **2026-11-25 HX40E optimization phase 1:** Extracted 18 inline style blocks into `products/hx40e.css` and inline tab JavaScript into `products/hx40e.js`, updated `products/HX40E.html` in `main` (HTML commit `a54cfba9`). HTML reduced ~305K to ~278K characters. Four embedded image data URIs remain; live visual/function verification pending. CSS relative paths preserved because stylesheet remains in `products/`.

- **2026-11-25 HX40E optimization phase 2:** User approved visual/function check after CSS/JS extraction. Extracted three base64 images to `assets/images/hx40e-inline-01.png`, `hx40e-inline-02.jpg`, `hx40e-inline-03.png`; updated `products/HX40E.html` to relative paths (commit `6a67d711`). HTML reduced to ~15.5K characters. User visual verification after image extraction pending.

- **2026-11-25 user verification:** HX40E page visually confirmed correct after image extraction, including product photo and header/footer logos. HX40E optimization is complete and approved. Next task awaiting selection.

- **2026-11-25 catalog adjustments:** CSS commit `4f62dab`: standardized fixed-mount radio image frames (GX1400/GX2410GPS/E/GX6000E) and visually reduced GX2410 by 12%; pointer cursor and keyboard focus indication only on functional linked cards (`data-href`, currently HX40E). Other cards remain non-clickable until their product pages exist. User visual verification pending.

- **2026-11-25 fixed-mount catalog follow-up:** User screenshots showed GX2410GPS/E still oversized and title lower despite initial CSS adjustments. Wrapped all three fixed model images in identical `.fixed-photo-frame` containers (HTML commit `505292a`, CSS commit `61931f3`), normalized fixed image height and margins, GX2410 scale .73 vs .90 others. Visual verification pending. Avoid changing header or portable cards.
