# K9 Global Rescue Website

Modern static website redesign for K9 Global Rescue, built with Astro and ready for Netlify deployment.

This project preserves important content themes from the current live website while reorganizing the experience into a cleaner, more credible nonprofit structure. It does not connect a live domain, add private emails, store secrets, or create fake payment forms.

## Tech Stack

- Astro static site
- TypeScript
- Global CSS design system
- Markdown content collection for future news posts
- Netlify-ready configuration

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

## Netlify Deployment Settings

Use these settings when creating the Netlify site:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: use the current Netlify LTS default unless the project later pins one

No real domain is connected in this repo. Domain/DNS setup should happen separately after K9GR review and launch approval.

## Site Structure

- Home: mission hero, CTAs, focus areas, operations overview, story placeholders, donation CTA
- About: organization overview, veteran and volunteer-led network language, credibility note
- Our Mission: mission pillars and advocacy framework
- Global Rescue Operations: hub linking to program areas
- Korea & Asia: dog meat trade rescue, rehabilitation, transport, advocacy, story placeholders
- Ukraine: humanitarian aid, animal medical aid, supplies, evacuations, partner support
- Disaster Relief: emergency response, transport, supplies, partner support
- Military & International Programs: careful program framing pending review
- Rescue Stories: story index for Gracie, Apollo and Juno, Jesse, Ukraine, and Korea
- Volunteer: opportunity overview and Google Form placeholder
- Donate: donation support areas and link placeholders
- Media / News: Dog Warriors section, YouTube placeholder, Markdown news collection
- Partners: partner category placeholders
- Contact: Netlify Forms-ready inquiry form

## Launch Review Placeholders

K9GR should review or provide the following before launch:

- Final approved donation links, including GoFundMe and general donation processor
- Approved United Airlines Miles on a Mission link, if still active
- Approved Google Form volunteer signup URL
- Final organization/legal wording for 501(c)(3), EU NGO, and any registration references
- Current program details, partner names, and active deployment claims
- Any specific Ukraine trip counts, locations, or current field operations
- South Korea dog meat ban wording and implementation date details
- Approved rescue story copy and images for Gracie, Apollo and Juno, Jesse, Ukraine, and Korea
- Dog Warriors/media claims, review links, event details, and rights-approved media
- Final public contact details, if K9GR wants emails or phone numbers listed

## Content Safety Notes

- No private donor, volunteer, or staff data is included.
- Donation pages use placeholders only and do not collect payment details.
- Claims requiring current verification are marked or intentionally softened.
- The contact form is Netlify Forms-ready and can be replaced by an approved CRM or form provider later.
