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

## Content Structure

User-facing copy is centralized in `src/lib/site-content.ts`, with shared page data re-exported from `src/lib/site-data.ts` and `src/lib/decision-pages.ts`.

This keeps route components thin and makes future localization work straightforward:

- add a new locale content file
- swap the active content source in one place
- keep page structure and copy separate

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
- a compact desktop header that shows only the core nav items, with the full link set kept in the mobile drawer and footer
- localized entry routes under `/hi`
- locale-aware metadata helpers for canonical and `hreflang` output
- a transparent logo asset in the header via `public/crescora-no-bg.png`
- the current header brand mark can also use `public/crescora-white-bg.png` for a cleaner light-header treatment

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
