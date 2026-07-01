# K9 Global Rescue Website

Modern static website redesign for K9 Global Rescue, built with Astro and ready for Netlify deployment.

This project preserves important content themes from the current live website while reorganizing the experience into a cleaner, more credible nonprofit structure. It does not connect a live domain, add private emails, store secrets, or create fake payment forms.

## Tech Stack

- Astro static site
- TypeScript
- Global CSS design system
- Markdown content collection for future news posts
- Netlify-ready configuration

## Brand Assets And Design System

The current brand pass is built around the official K9 Global Rescue black and gold logo.

- Logo asset: `public/assets/k9-global-rescue-logo.png`
- Primary black: `#000000`
- Deep off-black: `#050604`
- K9 gold: `#E8B448`
- Dark gold accent: `#B98D3F`
- Warm ivory text: `#F5E9D0`
- Muted tan section background: `#E7D4AE`

Global design tokens live in `src/styles/global.css`. Header, hero, cards, CTA bands, and footer inherit the black/gold operational rescue identity from those tokens.

The core K9GR belief statement is handled by `src/components/QuoteBand.astro` and should be used sparingly so it stays high-impact.

Content should stay short and action-oriented: lead with the rescue need, keep display sections scannable, and push deeper program detail to inner pages rather than overloading the homepage.

## Local Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Astro outputs the static production build to `dist/`.

## Video Assets

Original video masters are stored outside the repo. Only web-optimized compressed video files should be committed. Do not commit video files over 100MB.

## Netlify Deployment Settings

Use these settings when creating the Netlify site:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: use the current Netlify LTS default unless the project later pins one

No real domain is connected in this repo. Domain/DNS setup should happen separately after K9GR review and launch approval.

## Site Structure

- Home: mission hero, CTAs, focus areas, operations overview, donation CTA
- About: organization overview, veteran and volunteer-led network language, credibility note
- Team: current executive leadership, executive staff, support role cards, functional area labels, and expandable bios pending K9GR verification
- Our Mission: focused mission overview and core support areas
- Global Rescue Operations: hub linking to program areas
- Korea & Asia: dog meat trade rescue, rehabilitation, transport, advocacy, and field video
- Ukraine: humanitarian aid, animal medical aid, supplies, evacuations, partner support
- Disaster Relief: emergency response, transport, supplies, partner support
- Rescue Stories: story index for Gracie, Apollo and Juno, Jesse, Ukraine, and Korea
- Volunteer: opportunity overview and official Google Form intake link
- Donate: donation support areas and link placeholders
- Media / News: Dog Warriors section, YouTube placeholder, Markdown news collection
- Partners: partner category placeholders
- Contact: Netlify Forms-ready inquiry form

## Launch Review Placeholders

K9GR should review or provide the following before launch:

- Final approved donation links, including GoFundMe and general donation processor
- Approved United Airlines Miles on a Mission link, if still active
- Ongoing review of volunteer intake wording and placement guidance
- Final organization/legal wording for 501(c)(3), EU NGO, and any registration references
- Current program details, partner names, and active deployment claims
- Any specific Ukraine trip counts, locations, or current field operations
- South Korea dog meat ban wording and implementation date details
- Approved rescue story copy and images for Gracie, Apollo and Juno, Jesse, Ukraine, and Korea
- Dog Warriors/media claims, review links, event details, and rights-approved media
- Final public contact details, if K9GR wants emails or phone numbers listed
- Team bio details, functional area labels, credentials, affiliations, support classifications, and service-history wording
- Historical Middle East or disease mitigation work should only be added later as a rescue story or update if K9GR provides approved public content.

## Content Safety Notes

- No private donor, volunteer, or staff data is included.
- Donation pages use placeholders only and do not collect payment details.
- Claims requiring current verification are marked or intentionally softened.
- The contact form is Netlify Forms-ready and can be replaced by an approved CRM or form provider later.
