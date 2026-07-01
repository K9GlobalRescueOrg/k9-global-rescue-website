# K9GR Design Audit

Date: 2026-07-01

Scope: `/`, `/about/`, `/mission/`, `/operations/`, `/korea-asia/`, `/ukraine/`, `/disaster-relief/`, `/rescue-stories/`, `/meet-the-team/`, `/volunteer/`, `/donate/`, `/media/`, `/partners/`, `/contact/`.

## Taste Skill Install Changes

The requested install could not run through plain `npx` because `npx` is not available on this machine's current shell path. The equivalent local package runner was used:

```sh
pnpm dlx skills add Leonxlnx/taste-skill
```

Installed files:

- `.agents/skills/brandkit/SKILL.md`
- `.agents/skills/design-taste-frontend/SKILL.md`
- `.agents/skills/design-taste-frontend-v1/SKILL.md`
- `.agents/skills/full-output-enforcement/SKILL.md`
- `.agents/skills/gpt-taste/SKILL.md`
- `.agents/skills/high-end-visual-design/SKILL.md`
- `.agents/skills/image-to-code/SKILL.md`
- `.agents/skills/imagegen-frontend-mobile/SKILL.md`
- `.agents/skills/imagegen-frontend-web/SKILL.md`
- `.agents/skills/industrial-brutalist-ui/SKILL.md`
- `.agents/skills/minimalist-ui/SKILL.md`
- `.agents/skills/redesign-existing-projects/SKILL.md`
- `.agents/skills/stitch-design-taste/SKILL.md`
- `.agents/skills/stitch-design-taste/DESIGN.md`
- `skills-lock.json`

Project-specific additions:

- `.agents/skills/k9gr-design/SKILL.md`
- `docs/design-rulebook.md`
- `docs/design-audit.md`

## Overall Assessment

The site already has the right directional foundation: black and gold brand palette, direct action paths, simple Astro implementation, and cautious language around donations and active programs. The main design quality issues are repetition, generic card-heavy section patterns, stock-style temporary imagery, public-facing implementation language, and pages that feel more like scaffolding than a finished nonprofit presence.

## Page Audit

| Page | Findings |
| --- | --- |
| `/` | Clear primary actions and mission framing. Repeats card-grid sections, uses repeated eyebrow labels, and presents story cards before verified story depth exists. "See Our Work" should become "Learn About Our Work" for clearer alignment. |
| `/about/` | Credible tone and organization framing. "Credibility Note" reads internal and could be more donor-facing. Four-card grid is functional but generic. |
| `/mission/` | Good concise mission pillars. Eight equal program cards create a long generic grid; consider grouping by rescue, relief, care, and advocacy. |
| `/operations/` | Strong route hub. Needs more visual hierarchy than a single card grid. "Program map" may imply an actual map that is not present. |
| `/korea-asia/` | Serious subject matter is handled carefully. Story/gallery area currently reads like placeholders and should wait for verified story/image content. |
| `/ukraine/` | Cautious, credible copy. "Current Information" note is useful but visually plain; the generic dog image does not reflect Ukraine-specific work. |
| `/disaster-relief/` | Clear and restrained. Four equal cards are generic; disaster response would benefit from a more operational checklist or response-flow layout. |
| `/rescue-stories/` | Avoids fabricated story detail, which is good. Repeated cards with the same stock image risk implying completed stories. |
| `/meet-the-team/` | Strongest content depth. Initial-based photo blocks are safe but can feel unfinished; bios are long but readable because of details disclosure. |
| `/volunteer/` | Clear volunteer action and honest placement language. A public review/scaffolding sentence was rewritten to keep the page donor-facing and operational. |
| `/donate/` | Avoids fake donation links, which is important. However, "Ways to Give" leads to contact-only cards, so donor expectation should be managed more clearly until real giving links are approved. |
| `/media/` | Media framing is credible. "YouTube Channel" panel reads like a placeholder because there is no actual link or embedded content. |
| `/partners/` | Avoids fake partner names. Category cards are generic and need more concrete inquiry guidance. |
| `/contact/` | Clear form and inquiry types. Netlify form setup is fine technically; avoid public implementation language elsewhere. |

## Top 10 Design Issues Found

1. Public footer exposed implementation language: "Netlify-ready static Astro site."
2. Repeated equal-card grids make many pages feel templated.
3. Eyebrow labels appear in nearly every section, creating a predictable AI-like rhythm.
4. Several pages use temporary stock dog imagery that is not K9GR-specific.
5. Story cards imply distinct rescue stories while most story content is not yet available.
6. Some page areas still feel scaffolded because verified media, donation paths, or story depth are not yet available.
7. Donate page has no real donation path yet, so the donor flow is contact-only and underpowered.
8. Some removed or inactive program areas should stay out of public navigation unless approved current content is provided.
9. Navigation has no current-page state and may feel dense at tablet widths.
10. Gold accents are directionally correct but sometimes overused across grids, borders, labels, and backgrounds.

## Recommended Fixes

### Critical

- Remove all public build/deploy/internal wording from UI.
- Keep public placeholder/review language out of rendered UI as future content is added.
- Keep donation CTAs honest until real donation URLs are approved; do not invent links.
- Stop implying unverified rescue stories with repeated stock story imagery.

### Important

- Replace stock imagery with K9GR-approved rescue, field, team, transport, or partner photos.
- Reduce repeated card-grid patterns by varying layouts page by page.
- Tighten eyebrow usage to only the most useful sections.
- Add current-page navigation state.
- Improve the donate page once official donation paths are available.
- Build out thin program pages only from verified information.

### Nice To Have

- Refine typography scale and line lengths on dense bio/content pages.
- Add a subtle active button state across CTAs.
- Add richer program hub layouts without adding fake metrics.
- Add a custom 404 page in the K9GR visual language.
- Consider a future image audit for alt text once real imagery is added.

## Minor Safe Improvements Made In This Pass

- Removed public-facing implementation language from the footer.
- Replaced a public volunteer review/scaffolding sentence with donor-facing copy.
- Updated homepage operations CTAs from "See Our Work" to "Learn About Our Work."
- Added a K9GR-specific design skill and rulebook so future Taste Skill use is brand-aware.
- Added this audit as a scoped documentation artifact rather than making broad visual changes.
