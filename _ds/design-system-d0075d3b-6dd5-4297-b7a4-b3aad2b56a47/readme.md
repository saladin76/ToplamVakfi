# Minber-i Aksa — Design System

A design system for **Minber-i Aksa** (منبر الأقصى / *Minbar al-Aqsâ Association*) — an official, multilingual **donation and impact platform** serving Al-Quds, Al-Aqsa and Gaza through projects, zakat, waqf, recurring giving, certificates and field reports.

The product is **not** a generic charity template. Its whole reason for existing is donor **trust**: every gift connects an *intention* → a *project* → a *receipt / certificate* → *field proof*. The design must feel like a real institution working in the field, never AI-generated or stock.

> **Positioning in one line:** a donation-and-trust platform for Minber-i Aksa — understand, trust, choose, give, then follow the impact.

---

## Sources this system was built from

- **Production codebase (ground truth):** GitHub `saladin76/minberiaksa` — `app/globals.css` (full design layer) and `app/[locale]/[[...slug]]/page.tsx` (real markup, copy, project data). Explore it: <https://github.com/saladin76/minberiaksa>
- **Live site:** <https://minberiaksa.org>
- **Brand & build references (in `uploads/`):** `minber-aksa-build-reference.md` (V4 identity + page contracts), `minber-claude-page-prompts.md` (per-page briefs), `minber-aksa-implementation-checklist.md`.
- **Logo:** extracted from the official `شعار المنبر عرضي.pdf` → `assets/logo-horizontal.png` (transparent) and a cropped `assets/logo-mark.png`.

Where the reference docs and the code disagree, **the code wins** — token values here are lifted verbatim from `globals.css`.

---

## CONTENT FUNDAMENTALS

**Voice:** calm, direct, human, trustworthy. Short. Never grandiose.

- **Person:** speaks to *you* the donor ("Choose your intention", "Follow the impact"); the institution is "we" sparingly.
- **Casing:** Title/sentence case. Headlines are short statements, often two clauses ("Give for Al-Quds. Follow the impact.").
- **Length:** card copy is 1–3 lines, never a paragraph. Eyebrows are 1–4 words.
- **Terminology rule (important):** in English/Turkish use **Al-Quds**, not *Jerusalem* (except where a legal/official context requires). Keep **Zakat**, **Waqf** and **Sadaqah** visually and semantically separate — never blended.
- **Honesty rule:** never invent impact numbers, amounts, IBANs or returns. Unverified data shows a clear placeholder — `—` or **"to be verified"**. No "guaranteed", no "arrives instantly", no fake progress bars.
- **Banned AI-slop phrasing:** "Transform lives", "Make a difference today", "Journey of giving", "Your generosity creates hope", CTA repeated every line.
- **Good examples:** "Support Al-Quds and Gaza with a donation you can follow." · "Choose your intention. Give securely. Follow the impact." · "Every intention has its own proof path."
- **Arabic:** true RTL, warm and concise — e.g. «اختر مشروعك، حدّد نيتك، وتابع أثر تبرعك بعد التنفيذ.»

---

## VISUAL FOUNDATIONS

**Colour.** A warm, restrained Al-Quds palette (exact hexes in `tokens/colors.css`):
- **Red `#b34732` = action.** Every primary donate/CTA is red, white text, with a soft red glow (`--shadow-cta`). Never make the main CTA green or gold.
- **Gold `#c98a2b` = accent** — eyebrows (uppercase 900), badges, dividers, ornament.
- **Green `#556b2f` = support** — zakat/continuity rails; a secondary action colour, never the main donate button.
- **Deep `#022222` / Navy `#132c38`** — dark surfaces (footer, hero gradient, recurring strip) and ink.
- **Surfaces:** Ivory `#fffdf8` (page), Sand `#f7f2ea` (alternate sections), White (cards). No dark/muddy beige. No blue, purple or teal anywhere.

**Type.** Heavy and confident. Montserrat/Poppins for Latin & Turkish; **Cairo/Almarai/Tajawal** for Arabic (swapped automatically under `[dir="rtl"]`). Display H1 `clamp(42–86px)` at line-height `.98`; section H2 `clamp(30–56px)`; card H3 24px; body 16px at 1.6. Headings sit at weight 800; the **gold uppercase eyebrow** (13px/900) above a heading is a signature move.

**Layout.** Centered `container` ≈ 1180px; generous 82px section bands alternating ivory/sand. Section rhythm = eyebrow → H2 → one-line intro → content grid. Priority-project grids lead with one **featured** (2-col) card, not an even grid.

**Corners, borders, elevation.** A single restrained **8px radius** everywhere (`--r`). Hairline borders `rgba(2,34,34,.13)`. Cards are white with a soft, wide shadow `0 18px 50px rgba(16,33,43,.12)` — never heavy or neon. Progress bars are a red→gold gradient on a faint red track.

**Imagery.** Real field photography only — Gaza aid, Al-Quds/Al-Aqsa, distribution, families (never AI, never exploitative, never too dark). On the hero, photos carry a deep directional gradient (`rgba(2,34,34,.92)` → transparent) so white text stays legible; the gradient flips for RTL. Warm, calm contrast; light overlay wherever text sits.

**Ornament.** Faint gold Islamic geometry as *background only* — a conic "rosette" in section corners, a 45° gold weave behind certificates, a soft radial page wash. Opacity 4–12%. **Never** behind text, buttons or donation forms; lighter still on mobile. Ornament is never the hero of a section.

**Motion & states.** Subtle. Buttons nudge down 1px on press; nav links reveal a gold underline on hover; no bounces, no infinite decorative loops. Selected chips flip to deep (intentions/amounts) or gold (frequency).

---

## ICONOGRAPHY

The brand is **icon-light by design** — trust comes from typography, real photography and the gold ornament, not an icon wall.
- The production site uses **no icon font**. It relies on the **logo mark**, unicode arrows (`→`), a play glyph (`▶`) on reels, and gold ornament shapes.
- **Emoji: never.** Decorative icon grids: avoid (an explicit anti-pattern in the brief).
- If a UI genuinely needs glyphs (form fields, wallet, dashboard), use a **thin-stroke line set** that matches the calm weight — e.g. [Lucide](https://lucide.dev) via CDN — used sparingly in `--muted`/`--deep`, never multicolour. *(Substitution — flagged: no first-party icon set exists in the sources.)*
- Assets on disk: `assets/logo-horizontal.png`, `assets/logo-mark.png` (both transparent PNG). Use official artwork only; never redraw or recolour the mark.

---

## Components

Reusable primitives (React, styled from CSS tokens) — grounded in the real markup of the production site. Reach them at `window.DesignSystem_d0075d`.

- **Button** (`components/buttons`) — primary (red donate), gold, support (green), light, outline (on dark), ghost.
- **Badge** (`components/badges`) — category / intention / on-image "Official Minber" labels.
- **ProjectCard** (`components/cards`) — campaign card with red→gold progress and raised/goal/donors metrics; `featured` for the wide lead card.
- **FundCard** (`components/cards`) — ongoing-fund / recurring-plan tile (light or dark).
- **CertificateCard** (`components/cards`) — receipt / waqf / thank-you preview with gold ornament wash.
- **StoryCircle** (`components/media`) — homepage story-rail bubble.
- **ReelCard** (`components/media`) — vertical 9:16 impact reel.
- **DonationPanel** (`components/donation`) — the quick-donate conversion widget (intention · frequency · amount · red CTA).
- **TrustList** (`components/trust`) — proof-path list with the gold inline-start rule.
- **StatMetric** (`components/trust`) — one big impact number, with a "to be verified" mode.

## UI kits

- **`ui_kits/website/`** — interactive click-through of the platform (Home, Project detail, Zakat, Waqf, Recurring, Checkout, Success). See its `README.md`.

## Foundations (Design System tab)

Specimen cards live in `foundations/` (Colors, Type, Spacing, Brand) and render live from the real tokens.

---

## Root index / manifest

- `styles.css` — global entry (import manifest only). Consumers link this one file.
- `tokens/` — `fonts.css` (Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `components/` — the primitives above (each: `.jsx` + `.d.ts` + `.prompt.md` + one `@dsCard` html).
- `ui_kits/website/` — the website recreation.
- `foundations/` — specimen cards for the Design System tab.
- `assets/` — `logo-horizontal.png`, `logo-mark.png`, plus **official certificate artwork** extracted from the approved files: `cert-tughra.png` (Ottoman tughra), `cert-title-meter.png` (red «متر وقفي» calligraphy), `cert-seal.png` (gold seal), `cert-english-meter.png` (full English endowment certificate), and `waqf-meter-3d.png` (the $1,500 Al-Quds waqf-meter graphic).
- `templates/waqf-certificate/` — printable, RTL, official-style **Waqf Certificate** (`WaqfCertificate.dc.html`) using the real tughra/title/seal over a guilloche gold frame.
- `SKILL.md` — portable Agent-Skill wrapper.

## Caveats

- **Fonts** are loaded from Google Fonts (Cairo, Almarai, Tajawal, Montserrat, Poppins) to match production — no binaries are vendored. Provide licensed files if you need offline/self-hosted webfonts.
- **Imagery** in the kits is hot-linked from `minberiaksa.org`; download and localise real field photos for production.
- Numbers throughout are demo/placeholder and marked "to be verified" per brand rules.
