This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

Local development defaults to Webpack instead of Turbopack because this route-heavy project was exhausting CPU and memory on some Windows machines. The dev command also caps the Node heap and uses lower-memory dev settings so `npm run dev` is less likely to saturate the machine.

If you want to test the default Next.js dev path anyway, run:

```bash
npm run dev:turbo
```

These changes only affect local development. Production builds and Vercel deploys do not use the `dev` script.

## Content Structure

User-facing copy is centralized in `src/lib/site-content.ts`, with shared page data re-exported from `src/lib/site-data.ts` and `src/lib/decision-pages.ts`.

This keeps route components thin and makes future localization work straightforward:

- add a new locale content file
- swap the active content source in one place
- keep page structure and copy separate
- homepage conversion copy, CTA labels, automation cards, outcomes copy, trust / FAQ / pricing text, and the right-side flow steps are centralized in `src/lib/site-content.ts` and `src/lib/site-data.ts` so the public messaging can evolve without changing the route shell
- the homepage now uses `Book Free Demo` and `View Industry Workflows` as the primary conversion path from the hero and pilot sections, while the full workflow enquiry form stays on `/contact`
- homepage terminology now prefers `handover` over `handoff`, the workflow step copy uses the booking/payment/document wording, and the homepage FAQ is collapsed by default so the route stays easier to scan
- the shared header currently omits the language switcher and keeps only navigation plus sales/demo CTAs
- the about page uses the same product-first CTA labels and automation-focused positioning so it stays aligned with the rest of the site
- the about page now includes structured sections for who we are, mission, product relationship, pilot program, and final CTA so the company story stays centralized
- the homepage now stays focused on hero, pain, workflow automation, featured industries, pilot scope, trust / FAQ, and a compact deeper-links block; detailed solutions, pricing, blog content, and the full lead intake live on their dedicated routes
- the proof route now uses workflow-example language, a public rollout note, and a structured includes section instead of defensive illustrative-proof wording
- the legal routes now render through `src/components/site/legal-page.tsx` and pull sectioned policy copy from dedicated legal content modules so the privacy, terms, cookies, and acceptable-use pages stay centralized
- the privacy policy now renders at `/privacy`
- the terms of service now render at `/terms`
- the cookie policy now renders at `/cookies`
- the acceptable use policy now renders at `/acceptable-use`
- the legacy `siteContent.legal.acceptableUse` entry reuses the same acceptable-use policy content so older callers stay in sync
- page transitions now use CSS-based entry animation so content paints immediately instead of waiting on a hydration timer
- contact details are centralized in `src/lib/site-content.ts` and shown on the contact page plus the footer for sales, support, CEO correspondence, and office location
- the platform hero, workflow visual, capability cards, and start-here CTA are also centralized in `src/lib/site-content.ts` and `src/lib/site-data.ts`
- the industries hub now uses customer-facing priority cards, a compact more-industries chip list, a public CTA box, and a clearer SEO landing-page heading
- the use-cases hub now surfaces 12 workflow cards, icon-backed card treatments, a more-workflows chip strip, and a help-me-choose CTA block with matching detail pages for the expanded menu
- the pricing page now uses automation-first wording, package guidance with best-for/includes details, a pricing FAQ, and a demo-first CTA path
- the solutions hub keeps the query-led structure but now uses equal-height cards and arrow-style solution links for clearer scanning
- the lead form copy, country selector, country-aware phone validation, validation copy, and optional channel qualification field are centralized in `src/components/site/lead-form.tsx` and `src/lib/site-content.ts`
- the public lead form now posts to the local `/api/lead` route, which forwards submissions to the backend customer-intake API using a short-lived token; the shared backend origin lives in `src/lib/app-config.ts` and can still be overridden with `CUSTOMER_INTAKE_API_BASE_URL` (default `http://localhost:4000`)
- footer brand copy and footer navigation labels are centralized in `src/lib/locales/en.ts` and `src/lib/locales/hi.ts` so locale-specific trust text stays aligned

## SEO Architecture

India-focused SEO content is centralized in `src/lib/india-seo-data.ts` and rendered through reusable route templates.

The current route tree covers:

- `/india` for the national SEO hub
- `/india/[state]` for state hubs
- `/india/[state]/workflows/[workflow]` for state-workflow pages
- `/india/[state]/industries/[industry]` for state-industry pages
- `/workflows` and `/workflows/[workflow]` for workflow landing pages
- `/templates` and `/templates/[template]` for launch templates
- `/industries/[industry]` for industry SEO pages

The same data file also provides route registries, breadcrumb schema helpers, and the state/workflow/template/industry copy used across those pages.

## Multilingual Foundation

Locale support is centralized in `src/lib/locales.ts` and activated through `middleware.ts`.
The actual copy payload is split by language in:

- `src/lib/locales/en.ts`
- `src/lib/locales/hi.ts`

Route-specific multilingual page copy lives in:

- `src/lib/page-copy/hi.ts`

The current foundation includes:

- locale-aware request headers (`x-locale` and `x-current-path`)
- locale detection from the pathname prefix
- shared `en` and `hi` route helpers
- localized navigation and footer copy from language-specific files
- localized hub/page body copy from page-specific language files
- a compact dropdown language switcher in the global header
- a mobile header that keeps the menu trigger pinned to the right edge for easier one-hand access
- a compact desktop header that shows only the core nav items, with the full link set kept in the mobile drawer and footer
- localized entry routes under `/hi`
- locale-aware metadata helpers for canonical and `hreflang` output
- a cropped header logo asset in the header via `public/header-logo.png`

Current Hindi entry routes:

- `/hi`
- `/hi/solutions`
- `/hi/blog`
- `/hi/compare`
- `/hi/templates`
- `/hi/industries`
- `/hi/workflows`
- `/hi/india`

The foundation is intentionally partial:

- shared chrome is localized now
- SEO hub routes are localized now
- deeper content pages still fall back to English until translated variants are added
- the helper layer makes it safe to expand locale coverage without changing route structure later

## SEO Content Marketing

Informational and product-intent SEO assets are centralized in `src/lib/seo-marketing-data.ts`.

That layer powers:

- `/solutions` and `/solutions/[slug]` for main product-intent queries
- `/blog` and `/blog/[slug]` for informational content and internal linking
- `/compare/[slug]` for additional decision-stage comparison pages
- `/industries/[slug]` for keyword-specific industry landing pages

The homepage now links into the solution and blog layers so the SEO graph is reachable from the root page, not just from the sitemap.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
