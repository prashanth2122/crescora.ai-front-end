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

## Analytics

The public site now includes a Google tag / GA4 integration for the marketing funnel.

- default measurement ID fallback: `G-027GJ53KYV`
- override it with `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- production sends analytics automatically when a measurement ID is available
- local development does **not** send analytics unless you opt in with `NEXT_PUBLIC_ENABLE_ANALYTICS_IN_DEV=true`

The shared analytics layer emits:

- `page_browse` on route views
- `contact_intent_click` when a visitor clicks through to `/contact`
- `cta_click` and `navigation_click` for tracked link interactions
- `scroll_depth` at 25 / 50 / 75 / 90 percent
- `page_engaged` after 15 seconds on a route
- `lead_form_view`, `lead_form_start`, `lead_form_field_complete`, `lead_form_submit`, `lead_form_success`, `lead_form_failure`, and `lead_form_validation_error`
- `web_vital` for frontend performance metrics reported through `useReportWebVitals`

The lead-form analytics intentionally avoid PII. Names, email addresses, phone numbers, company names, and free-text answers are not sent as event parameters.

## Content Structure

User-facing copy is centralized in `src/lib/site-content.ts`, with shared page data re-exported from `src/lib/site-data.ts` and `src/lib/decision-pages.ts`.

This keeps route components thin and makes future localization work straightforward:

- public brand naming is `Crescora AI` only; do not introduce separate product names in public copy
- approved primary CTAs are `Book Free Demo`, `Discuss My Workflow`, `View Pricing`, and `Book Founder-Led Pilot Review`; the floating support menu also includes `Try Crescora AI Demo`
- the homepage positions Crescora AI as founder-led AI workflow automation for customer conversations, follow-ups, bookings, payments, documents, support, and human handover
- public claims must stay proof-safe: avoid guaranteed percentages, unconditional launch timelines, fake logos, fake testimonials, or compliance certifications that are not actually held
- `/demo` is the public sample-demo entry point; it links to workflow examples and workflow detail pages with clear demo disclaimers instead of presenting a fake live customer environment
- `/workflow-examples` is the public workflow examples hub; old `/proof` URLs are compatibility redirects and should not be used for new public links
- trust/support pages live at `/security`, `/responsible-ai`, `/data-processing`, `/subprocessors`, and `/support`
- public legal identity currently uses `Crescora.ai` with business registration reference `UDYAM-TS-02-0344089`; business availability is Monday to Saturday, 10:00 AM to 6:00 PM IST; support coverage is based on plan and agreed rollout scope; emergency support is available only for active clients where explicitly agreed; and office visits are by invitation or appointment through email
- founder profile links can be published only when supplied directly; current public founder links are the supplied LinkedIn profiles for Navya Chirumalla and Prashanth Chinala
- public review screenshots can be shown only when supplied for public use, with source platform, review date, and source link when available; owner responses are not customer quotes, and copy must make clear these are review captures rather than case studies, paid endorsements, logos, or guaranteed outcome claims
- add a new locale content file
- swap the active content source in one place
- keep page structure and copy separate
- homepage conversion copy, CTA labels, automation cards, outcomes copy, trust / FAQ / pricing text, and the right-side flow steps are centralized in `src/lib/site-content.ts` and `src/lib/site-data.ts` so the public messaging can evolve without changing the route shell
- the homepage now uses `Book Free Demo`, `Discuss My Workflow`, and `View Pricing` as the primary conversion path from the hero and pilot sections, while the full workflow enquiry form stays on `/contact`
- the shared header now uses `Discuss My Workflow` plus `Book Free Demo`, while the root layout can also show a closable floating support menu on every page with WhatsApp, email, call, and booking actions when `BOOK_A_CALL_URL`, `WHATSAPP_PHONE_NUMBER`, optional `SUPPORT_PHONE_NUMBER`, optional `SUPPORT_EMAIL`, and optional `WHATSAPP_PREFILL_TEXT` are configured in the deployment environment; clicking outside the menu closes it, and if the WhatsApp or email env vars are missing, the public fallbacks use `+91-9642021224`, `support@crescora.ai`, and the prefill text `I'm interested in your product`
- the floating support menu now renders the WhatsApp action with the custom asset at `public/whatsapp-icon.jpg` instead of the default Lucide message glyph
- homepage terminology now prefers `handover` over `handoff`, the workflow step copy uses the booking/payment/document wording, and homepage FAQ answers are visible in the rendered page so visitors and crawlers can read the actual answers
- the shared header currently omits the language switcher and keeps only navigation plus sales/demo CTAs
- dedicated high-risk industry pages for diagnostics, labs, finance, and insurance must keep human-review and regulated-use disclaimers visible
- the about page uses the same product-first CTA labels and automation-focused positioning so it stays aligned with the rest of the site
- the about page now includes a workflow-path hero visual, stronger platform and trust proof, a clearer Crescora-vs-Crescora AI product relationship section, and a stronger bottom CTA so the company story stays centralized in `src/lib/site-content.ts`
- the homepage now stays focused on hero, pain, workflow automation, featured industries, pilot scope, trust / FAQ, and a compact deeper-links block; detailed solutions, pricing, blog content, and the full lead intake live on their dedicated routes
- the homepage now also carries a shared service coverage section for channels, integrations, and service categories so buyer-facing discovery copy stays centralized in `src/lib/site-content.ts`
- the workflow examples route uses transparent sample-workflow language, a stronger enquiry-to-outcome hero, richer industry example cards, pilot outcome metrics, and a stronger workflow-pilot CTA
- the legal routes now render through `src/components/site/legal-page.tsx` and pull sectioned policy copy from dedicated legal content modules so the privacy, terms, cookies, and acceptable-use pages stay centralized
- the privacy policy now renders at `/privacy`
- the terms of service now render at `/terms`
- the cookie policy now renders at `/cookies`
- the acceptable use policy now renders at `/acceptable-use`
- the legacy `siteContent.legal.acceptableUse` entry reuses the same acceptable-use policy content so older callers stay in sync
- page transitions now use CSS-based entry animation so content paints immediately instead of waiting on a hydration timer
- contact details are shown on the contact page plus the footer for sales, support, CEO correspondence, direct contact, and office location; the direct contact phone is read from `CONTACT_PHONE_NUMBER` in `src/lib/app-config.ts` and falls back to the configured support or WhatsApp number
- the platform hero, workflow visual, capability cards, and start-here CTA are also centralized in `src/lib/site-content.ts` and `src/lib/site-data.ts`
- the industries hub now uses a stronger workflow-first hero, a platform proof strip, outcome-focused industry cards, a broader workflow-engine section, and a tighter public CTA
- `/industries/hospitals` now uses dedicated hospital-facing copy, a patient-workflow hero visual, safety/handover guidance, workflow-specific sections, and a stronger hospital-demo CTA instead of the generic SEO-template page
- `/industries/clinics` now uses dedicated clinic-facing copy, a clinic-workflow hero visual, workflow/support sections, safety/human-control guidance, and a stronger clinic-demo CTA instead of the generic SEO-template page
- `/industries/education` now uses dedicated admissions-focused copy, a right-side workflow-path hero visual, richer enquiry-to-admission workflow sections, trust/control guidance, outcome metrics, and a stronger education-demo CTA instead of the generic SEO-template page
- `/industries/real-estate` now uses dedicated sales-workflow copy, a buyer-path hero visual, richer qualification and project-sharing sections, trust/control plus metrics coverage, and a stronger real-estate CTA instead of the generic SEO-template page
- `/industries/support-teams` now uses dedicated support-automation copy, a support-workflow hero visual, safe triage and escalation messaging, observability coverage, outcome metrics, and a stronger support-demo CTA instead of the generic SEO-template page
- `/industries/service-businesses` now uses dedicated booking-and-collections copy, a service-workflow hero visual, richer booking/payment sections, before-vs-after proof, outcome metrics, and a stronger service-business CTA instead of the generic SEO-template page
- the use-cases hub now surfaces 12 workflow cards, icon-backed card treatments, a more-workflows chip strip, and a help-me-choose CTA block with matching detail pages for the expanded menu
- the workflows hub now uses pilot-ready workflow blueprint positioning, a customer-journey proof strip, richer workflow template cards, a why-templates-matter section, and a stronger bottom CTA
- the templates hub now uses ready-to-use template positioning, a launch-coverage strip, filter chips, richer request-template cards, and a stronger bottom CTA
- the WhatsApp automation, clinic appointment, hospital appointment booking, real estate lead follow-up, customer support FAQ, payment reminder workflow, lab report notification workflow, billing and collections, conversation observability dashboard, document collection, customer support, knowledge assistant, and service business template detail pages now use buyer-facing launch copy, workflow preview visuals, setup guidance, before/after proof, use-case cards, metrics, FAQ content, and stronger template-specific CTAs instead of the internal SEO-plan placeholders
- blog detail pages rendered through `src/components/site/seo-blog-page.tsx` should stay public-facing: article TOCs, workflow visuals, FAQ schema, and conversion CTAs are allowed, but internal SEO labels, editorial instructions, and placeholder CTA text should not ship
- blog detail overrides in `src/lib/seo-marketing-data.ts` can now supply page-specific hero headlines plus custom TOC and related-links headings without forking the shared blog layout, so blog rewrites keep the current styling while replacing generic labels with buyer-facing copy
- the business-support FAQ blog detail page now uses buyer-facing support automation copy, FAQ escalation guidance, related support resources, and support-specific CTAs instead of the internal planning template
- the human-handoff blog detail page now uses buyer-facing escalation copy, queue-routing guidance, agent-context coverage, and handoff-specific CTAs instead of the internal planning template
- the WhatsApp Business API blog detail page now uses buyer-facing WhatsApp workflow copy, reminder and routing coverage, control-oriented trust messaging, and WhatsApp-specific CTAs instead of the internal planning template
- the AI chatbot pricing blog detail page now uses buyer-facing cost-comparison copy, ROI framing, pricing-transparency guidance, and pricing-specific CTAs instead of the internal planning template
- the customer follow-up blog detail page now uses buyer-facing lead-recovery copy, reminder and assignment guidance, re-engagement coverage, and follow-up-specific CTAs instead of the internal planning template
- the service-business workflow examples blog detail page now uses buyer-facing workflow examples, service-operations use cases, routing and handoff coverage, and workflow-specific CTAs instead of the internal planning template
- the hospital demo chatbot blog detail page now uses buyer-facing hospital workflow copy, patient-journey demo coverage, safety-aware escalation messaging, and healthcare-specific CTAs instead of the internal planning template
- blog detail pages now use the shared `public/blog/shared-blog-featured.png` visual for the in-article featured image while keeping per-route Open Graph metadata images on `/blog/[slug]/opengraph-image`
- `/india` is a buyer-facing service-area page for Indian businesses, and `/india/[state]` pages use reusable service-area content driven by `src/lib/state-seo-seeds.ts`, with state-specific cities, languages, industries, workflow themes, FAQs, and CTA copy
- the pricing page now uses automation-first wording, India/global billing-region pricing, richer best-for/includes tier detail, pricing-scope education, and an expanded FAQ plus CTA path
- the solutions hub keeps the query-led structure but now uses equal-height cards and arrow-style solution links for clearer scanning
- the lead form copy, country selector, country-aware phone validation, validation copy, and optional channel qualification field are centralized in `src/components/site/lead-form.tsx` and `src/lib/site-content.ts`
- WhatsApp, direct contact phone, and support contact surfaces are centralized through `src/lib/app-config.ts`, `src/components/site/site-header.tsx`, `src/components/site/site-footer.tsx`, and `src/components/site/whatsapp-floating-button.tsx`; if the env vars are unset, the site falls back to the defaults in `src/lib/app-config.ts`
- `.env.example` now lists the public-site contact, direct contact phone, and analytics variables expected for local development and deployment
- the public lead form now posts to the local `/api/lead` route, which forwards submissions to the backend customer-intake API using a short-lived token; the shared backend origin lives in `src/lib/app-config.ts` and can still be overridden with `CUSTOMER_INTAKE_API_BASE_URL` (default `http://localhost:4000`)
- footer brand copy and footer navigation labels are centralized in `src/lib/locales/en.ts` and `src/lib/locales/hi.ts` so locale-specific trust text stays aligned

## SEO Architecture

The SEO stack now uses a single production host, shared metadata helpers, self-canonical public routes, localized alternates, and sitemap coverage generated from the application route data.

Core implementation points:

- `src/lib/seo.ts` is the shared metadata and JSON-LD helper layer for canonicals, robots, Open Graph, article metadata, FAQ/page/item-list schema, and `https://www.crescora.ai` URL generation
- `src/lib/seo-social-image.tsx` is the shared route-image renderer used by Open Graph image files for share previews on key hub and detail routes
- `src/app/favicon.ico`, `src/app/icon.png`, and `src/app/apple-icon.png` are generated from `public/logo only no bg.png` so the browser-tab, search-result, and device icon metadata all use the same no-background Crescora mark
- public route files should use `createPageMetadata`, `createExactPageMetadata`, or `createLocalizedMetadata` instead of exporting partial `{ title, description }` objects because Next.js metadata merging is shallow and can otherwise inherit the root homepage canonical/Open Graph values
- `next.config.ts` redirects requests for `crescora.ai` to `https://www.crescora.ai/:path*`
- `src/app/robots.ts` and `src/app/sitemap.ts` only publish the production host
- `src/app/sitemap.ts` uses source-file mtimes for `lastModified` instead of `new Date()`
- `src/lib/revenue-pages.ts` is the canonical source for the primary solution pages
- generated blog, workflow, template, use-case, India, industry, comparison, workflow-example, trust, and Hindi routes are included in the sitemap
- `/compare` is now the primary AI automation platform comparison page, with visible FAQ markup, competitor-intent internal links, and a supporting cluster for `/compare/yellow-ai-alternative`, `/compare/kore-ai-alternative`, `/compare/gupshup-alternative`, `/compare/intercom-alternative`, and `/compare/zendesk-ai-alternative`

Current indexable route families include:

- primary company, product, pricing, demo, trust, support, security, responsible-AI, data-processing, subprocessors, resources, contact, and legal pages
- `/solutions`, `/industries`, `/use-cases`, `/blog`, `/workflows`, `/templates`, `/compare`, and `/workflow-examples` hubs and detail pages
- `/india`, every generated state page, configured state-workflow pages, and state-primary-industry pages
- localized Hindi hubs under `/hi/*`, with self-canonicals and English/Hindi `hreflang` alternates

## Multilingual Foundation

Locale support is centralized in `src/lib/locales.ts`.
The actual copy payload is split by language in:

- `src/lib/locales/en.ts`
- `src/lib/locales/hi.ts`

Route-specific multilingual page copy lives in:

- `src/lib/page-copy/hi.ts`

The current foundation includes:

- locale detection from static pathname segments
- shared `en` and `hi` route helpers
- localized navigation and footer copy from language-specific files
- localized hub/page body copy from page-specific language files
- localized entry routes under `/hi`
- locale-aware metadata helpers for canonical and `hreflang` output without request-time middleware
- the shared header logo now uses `public/crescora_navbar_logo_white_header_2x.png` with the `.navbar-logo` sizing rule from `src/app/globals.css`

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
- Hindi routes live on static `/hi/*` segments so they can be prerendered and cached cleanly
- the helper layer makes it safe to expand locale coverage without changing route structure later

## SEO Content Marketing

Primary commercial pages are centralized in `src/lib/revenue-pages.ts`, while supporting marketing content and older generated SEO assets remain in `src/lib/seo-marketing-data.ts`.

The current commercial setup uses:

- `/solutions` and `src/app/solutions/[slug]/page.tsx` for the primary solution pages
- `src/components/site/revenue-solution-page.tsx` for the shared product-page layout
- page-specific hero copy, section headings, metadata overrides, and final CTA variants are configured in `src/lib/revenue-pages.ts` so individual solution pages can be upgraded without forking the layout
- repaired blog detail overrides in `src/lib/seo-marketing-data.ts` now replace internal SEO planning template copy with buyer-facing public content for high-priority slugs, with regression coverage in `src/lib/seo.test.ts`
- `/india/[state]` pages use reusable service-area content driven by `src/lib/state-seo-seeds.ts`, `/india/[state]/cities/[city]` pages use the city inventory plus city-specific workflow slices, industries, service themes, proof lines, CTA variants, curated proof blocks for priority cities, and generated local proof blocks for the remaining city layer from `src/lib/city-seo-seeds.ts`, `/india/[state]/workflows/[workflow]` pages use the reusable state-plus-workflow mapping in `src/lib/state-workflow-seo.ts`, and `/india/[state]/industries/[industry]` pages use the reusable state-plus-industry mapping in `src/lib/state-industry-seo.ts` so each route publishes real state-specific cities, languages, industries, workflow fit, FAQs, and CTA copy
- visible implementation details, examples, proof points, outcomes, related links, and FAQ accordions on each primary solution page
- product-surface panels embedded in the primary solution pages to show the operator, builder, and dashboard views referenced in the copy

Supporting content is indexable and included in the sitemap:

- `/blog` and `/blog/[slug]`
- `/workflows` and `/workflows/[workflow]`
- `/templates` and `/templates/[template]`
- `/use-cases` and the legacy `use-cases/*` routes
- generated India and dynamic industry SEO routes

Workflow detail pages are driven from `src/lib/india-seo-data.ts`. The route at `src/app/workflows/[workflow]/page.tsx` now supports page-specific public workflow sections, exact metadata overrides, hero visuals, workflow diagram blocks, section-level descriptions, launch-coverage blocks, context-checklist blocks, observability blocks, FAQ blocks, and workflow-specific CTA blocks when a workflow entry defines a `publicPage` payload.

The homepage now links into the solution and blog layers so the SEO graph is reachable from the root page, not just from the sitemap.

The shared metadata and structured-data rules now include:

- `src/app/layout.tsx` for site-wide defaults and the non-duplicating title template
- `src/lib/seo.ts` for canonical host generation, robots, Open Graph, article metadata, FAQ/page/item-list schema helpers, and JSON-LD sanitization
- route-specific `opengraph-image.tsx` files on key solution, compare, workflow-example compatibility, and blog routes so share metadata no longer points at a single global image
- `src/lib/seo-marketing-data.ts` for article authorship, published/modified dates, and representative image metadata on blog content
- homepage FAQ schema, pricing FAQ schema, solution-page FAQ schema, and route-level page / breadcrumb / item-list JSON-LD on key commercial routes

Meta keywords and typo-targeting metadata are intentionally removed. FAQ schema is limited to pages where the questions and answers are already visible in the rendered UI.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
