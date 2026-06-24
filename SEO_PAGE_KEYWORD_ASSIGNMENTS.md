# SEO Page Keyword Assignments

## Purpose

This document applies the keyword map to the **current live route inventory** and assigns **one primary keyword theme per page**.

Goal:

- reduce keyword cannibalization
- keep transactional terms on money pages
- keep informational terms on blog pages
- keep comparison terms on compare pages
- keep state-specific terms on India hub pages
- keep localized Hindi routes as language variants, not separate keyword owners

Repo sources used:

- `src/app/sitemap.ts`
- `src/lib/site-content.ts`
- `src/lib/seo-marketing-data.ts`
- `src/lib/india-seo-data.ts`
- `src/lib/decision-pages.ts`
- `SEO_KEYWORD_CLUSTER_MAP.md`

## Assignment Rules

- One page gets one primary keyword.
- Closely related terms become secondary terms for the same page.
- Supporting pages should not repeat the primary keyword in the title/H1 if a stronger owner already exists.
- Hindi routes under `/hi` should mirror the English page assignment and act as localized variants, not separate search-theme owners.
- Service-provider terms should stay off product pages unless a dedicated services page is created.

## Route Family Summary

| Route family | Role |
| --- | --- |
| `/` | broad brand + product-category capture |
| `/solutions/[slug]` | main commercial money pages |
| `/industries/[slug]` | keyword-specific vertical landing pages |
| `/industries/{core-page}` | broader vertical proof / product-fit pages |
| `/workflows/[workflow]` | workflow-intent BOFU pages |
| `/templates/[template]` | template / implementation intent pages |
| `/use-cases/*` | operational use-case pages tied to one workflow problem |
| `/compare/*` | comparison and alternative-tool intent |
| `/blog/*` | informational and problem-led queries |
| `/india/*` | India and state / state-workflow / state-industry capture |

## Primary Owners: Core Pages

| Route | Primary keyword | Secondary terms | Intent | Notes |
| --- | --- | --- | --- | --- |
| `/` | AI automation platform India | business automation software India, workflow automation software India, conversational AI platform India | Commercial | Broadest non-brand owner. Keep homepage broad. |
| `/platform` | business automation software India | AI workflow automation platform, customer conversation automation, no code automation platform India | Commercial | Product architecture page, not a workflow page. |
| `/solutions` | workflow automation software India | AI workflow builder, business process automation India, AI business automation tool | Commercial | Category hub for solution pages. |
| `/industries` | industry workflow automation software India | hospital automation, real estate lead automation, education automation, service business automation | Commercial | Industry hub only. Do not give it a specific vertical primary. |
| `/workflows` | workflow automation templates | chatbot workflow template, automation workflow template, WhatsApp workflow template | Commercial | Workflow hub. |
| `/templates` | workflow templates for business automation | document collection workflow, support bot template, WhatsApp workflow template | Commercial | Template hub. |
| `/use-cases` | customer workflow automation use cases | lead capture automation, support automation, reminders, handoff | Commercial | Use-case hub, not a direct money page for a single feature. |
| `/compare` | chatbot vs workflow automation | WhatsApp chatbot vs workflow automation, workflow software comparison | Comparison | Comparison hub only. |
| `/blog` | business automation blog India | WhatsApp automation articles, customer support automation guides, workflow automation guides | Informational | Blog hub only. |
| `/india` | conversational AI workflow automation India | workflow automation software India, WhatsApp automation India, state workflow automation | Commercial | National SEO hub. |
| `/pricing` | workflow automation pricing India | WhatsApp automation cost India, AI chatbot pricing India | Commercial | Pricing / cost owner. |
| `/trust` | secure workflow automation platform | human review, controls, monitoring, reliability | Commercial | Trust-led, but avoid overstating compliance. |
| `/proof` | workflow automation examples | healthcare workflow example, real estate lead automation example, education automation example | Informational / commercial assist | Proof index, not a core transactional page. |
| `/resources` | workflow automation resources | buyer guides, rollout guides, proof pages | Informational | Supportive. |
| `/contact` | automation implementation company India | workflow demo, WhatsApp automation company India, business automation company India | Transactional | Best place for service/provider intent. |

## Primary Owners: Solution Pages

These should carry the strongest commercial intent.

| Route | Primary keyword | Secondary terms | Cannibalization guardrail |
| --- | --- | --- | --- |
| `/solutions/whatsapp-automation` | WhatsApp automation for business | WhatsApp business automation India, WhatsApp chatbot for business, WhatsApp workflow automation, WhatsApp Business API automation | This page owns core WhatsApp-commercial intent. Other pages should narrow. |
| `/solutions/ai-chatbot-builder` | AI chatbot builder India | no code AI chatbot builder, no code chatbot builder India, AI chatbot for website, multi channel chatbot platform | This page owns chatbot-builder intent. |
| `/solutions/workflow-automation` | workflow automation software India | AI workflow builder, business process automation India, no code workflow builder | This page owns broad workflow software intent. |
| `/solutions/customer-support-automation` | customer support automation software | customer service automation India, support automation platform, AI customer support platform | Support pages under workflows/templates should not try to own this broad term. |
| `/solutions/appointment-booking-automation` | appointment booking automation software | WhatsApp appointment booking bot, booking automation for small business, doctor appointment chatbot | Healthcare-specific pages should narrow to hospital/clinic versions. |
| `/solutions/lead-capture-automation` | lead automation software India | lead capture automation software, lead management automation India, AI lead generation software | Real estate pages should narrow to real-estate lead automation. |
| `/solutions/payment-reminder-automation` | payment reminder automation India | WhatsApp payment reminder automation, EMI reminder automation, payment reminder chatbot | Billing/collections templates should narrow to workflow/template intent. |
| `/solutions/document-collection-automation` | document collection automation | document collection chatbot workflow, KYC document collection chatbot, customer onboarding automation workflow | Keep regulated copy cautious. |
| `/solutions/crm-api-workflow-automation` | CRM and API workflow automation | webhook automation platform, WhatsApp chatbot with CRM integration, business systems integration platform | This page owns integration-led product intent. |
| `/solutions/human-handover-automation` | human handover automation | context handoff automation, escalation workflow, SLA visibility automation | Support and healthcare pages should treat handoff as supporting language. |

## Primary Owners: Keyword-Specific Industry Landing Pages

These pages should own vertical commercial terms. The broader core industry pages should support them, not compete with them.

| Route | Primary keyword | Secondary terms | Status |
| --- | --- | --- | --- |
| `/industries/hospital-automation` | hospital automation software India | hospital WhatsApp automation, patient support automation, hospital appointment booking automation | Current live owner |
| `/industries/real-estate-automation` | real estate lead automation India | real estate WhatsApp chatbot, property lead follow up automation, site visit booking automation | Current live owner |
| `/industries/education-automation` | education automation India | school admission chatbot, admission enquiry chatbot India, school WhatsApp automation | Current live owner |
| `/industries/small-business-automation` | small business automation software India | local business automation software, customer enquiry automation, service business automation software | Current live owner |

### Planned but not yet fully owned in live route structure

| Theme | Recommended future route | Primary keyword | Status |
| --- | --- | --- | --- |
| Diagnostics / labs | `/industries/diagnostic-lab-automation` | diagnostic lab automation software | Near-term |
| Insurance / finance | `/industries/insurance-automation` | insurance workflow automation | Vision |
| Ecommerce | `/industries/ecommerce-automation` | ecommerce customer support automation | Vision |

## Supporting Core Industry Pages

These pages should stay useful, but must narrow their themes to avoid competing with the keyword-specific landing pages above.

| Route | Recommended primary keyword | Why not broader |
| --- | --- | --- |
| `/industries/hospitals` | hospital WhatsApp automation | Avoid competing with `/industries/hospital-automation` for `hospital automation software India`. |
| `/industries/clinics` | clinic appointment automation | Narrower than `clinic automation software India`, which can support a future dedicated clinic landing page. |
| `/industries/healthcare` | healthcare WhatsApp automation | Broad healthcare proof page, not the main hospital-commercial owner. |
| `/industries/real-estate` | property enquiry chatbot | Avoid competing with `/industries/real-estate-automation`. |
| `/industries/education` | school admission chatbot | Narrower than broad `education automation India`. |
| `/industries/support-teams` | support bot template | Keep it operational / workflow-oriented, not broad support software owner. |
| `/industries/service-businesses` | service booking bot | Supports small-business and service-business themes without owning the whole category. |

## Workflow Pages

Workflow pages should own **workflow intent**, not broad product-category intent.

| Route | Primary keyword | Secondary terms | Guardrail |
| --- | --- | --- | --- |
| `/workflows/whatsapp-automation` | WhatsApp automation template | WhatsApp workflow template, WhatsApp lead capture workflow, WhatsApp enquiry automation workflow | Do not try to outrank the solution page for `WhatsApp automation for business`. |
| `/workflows/appointment-booking` | appointment booking software | booking workflow automation, appointment reminder workflow | Broader booking use-case intent. |
| `/workflows/payments` | WhatsApp payment automation | payment reminders, collections workflow, payment escalation | Narrower than the solution page. |
| `/workflows/reminders` | reminder automation software | follow-up workflow automation, abandoned enquiry reminder workflow | Good BOFU workflow owner. |
| `/workflows/document-collection` | document collection automation | document request workflow, missing document reminders | Close to solution page; keep this page workflow-first with more implementation language. |
| `/workflows/customer-support` | support bot template | FAQ automation, support triage workflow, escalation workflow | Do not compete for `customer support automation software`. |
| `/workflows/rag-knowledge-assistant` | knowledge base chatbot template | RAG chatbot for support, grounded answer workflow | Near-term owner for RAG/knowledge retrieval intent. |
| `/workflows/human-handoff` | human handoff automation | escalation rules, context transfer, SLA visibility | Can support the solution page if titles/H1s remain workflow-shaped. |
| `/workflows/billing` | billing automation template | collections workflow bot, overdue payment follow-up workflow | Template/workflow intent only. |
| `/workflows/observability` | conversation dashboard template | workflow observability platform, support analytics dashboard | Near-term feature-intent page. |

## Template Pages

Template pages should own **template / flow / implementation intent**, not broad commercial software terms.

| Route | Primary keyword | Secondary terms |
| --- | --- | --- |
| `/templates/whatsapp-automation-template` | WhatsApp workflow template | WhatsApp lead capture workflow, WhatsApp enquiry automation workflow |
| `/templates/clinic-appointment-bot-template` | clinic appointment chatbot | doctor appointment chatbot, OPD appointment booking chatbot |
| `/templates/payment-reminder-template` | WhatsApp payment reminder template | payment reminder workflow automation, payment reminder chatbot |
| `/templates/document-collection-template` | document collection workflow | document collection chatbot workflow, KYC document collection workflow |
| `/templates/customer-support-bot-template` | support bot template | FAQ chatbot for business, support ticket automation |
| `/templates/rag-knowledge-assistant-template` | knowledge base chatbot template | RAG chatbot for support, retrieval support assistant |
| `/templates/real-estate-lead-qualification-template` | real estate chatbot template | property enquiry chatbot, real estate lead capture chatbot |
| `/templates/service-business-booking-template` | service booking bot | booking automation for small business, local business booking workflow |
| `/templates/billing-and-collections-template` | collections workflow bot | billing automation template, payment escalation workflow |
| `/templates/observability-dashboard-template` | conversation dashboard template | support analytics dashboard, workflow observability platform |
| `/templates/hospital-appointment-booking-flow` | hospital appointment booking flow | hospital appointment booking workflow template, patient appointment workflow |
| `/templates/real-estate-lead-followup-flow` | real estate lead follow up flow | site visit scheduling workflow, property lead follow-up workflow |
| `/templates/customer-support-faq-flow` | customer support FAQ flow | support FAQ chatbot workflow, FAQ escalation flow |
| `/templates/payment-reminder-flow` | payment reminder flow | collections reminder workflow, payment escalation flow |
| `/templates/lab-report-notification-flow` | lab report notification flow | lab report WhatsApp automation, lab report notification chatbot |

## Use-Case Pages

Use-case pages should stay tied to one operational job and support solution pages.

| Route | Primary keyword | Secondary terms |
| --- | --- | --- |
| `/use-cases/whatsapp-automation` | WhatsApp automation workflows | WhatsApp customer support automation, WhatsApp appointment booking bot |
| `/use-cases/appointment-booking-automation` | appointment booking automation | booking automation for small business, availability automation |
| `/use-cases/payment-follow-up-automation` | payment reminder automation | overdue reminder workflow, payment status follow-up |
| `/use-cases/document-collection-automation` | document collection automation | onboarding document follow-up, KYC document workflow |
| `/use-cases/customer-support-automation` | customer support automation | FAQ automation, support ticket routing |
| `/use-cases/human-handoff-automation` | human handoff automation | escalation workflow, context transfer |
| `/use-cases/[slug=lead-capture-qualification]` | lead capture automation software | lead qualification workflow, lead routing automation |
| `/use-cases/[slug=faq-automation]` | FAQ chatbot for business | support FAQ automation, repeated-question workflow |
| `/use-cases/[slug=crm-api-sync]` | WhatsApp CRM automation India | CRM sync automation, API workflow automation |
| `/use-cases/[slug=reminder-automation]` | payment reminder workflow automation | reminder automation software, follow-up workflow |
| `/use-cases/[slug=ticket-creation-escalation]` | support ticket automation | support triage workflow, escalation routing |
| `/use-cases/[slug=feedback-collection]` | customer engagement automation | review collection workflow, post-service feedback automation |

## Comparison Pages

These pages should own comparison-intent terms and keep titles explicit.

| Route | Primary keyword | Secondary terms |
| --- | --- | --- |
| `/compare/flow-vs-chatbots` | chatbot vs workflow automation | FLOW vs chatbots, chatbot vs business workflow automation |
| `/compare/flow-vs-manual-whatsapp` | manual WhatsApp vs automation | WhatsApp automation vs manual handling, WhatsApp reply automation ROI |
| `/compare/flow-vs-generic-automation` | workflow automation vs generic automation tools | AI workflow platform vs generic automation, operational automation vs simple automation |
| `/compare/flow-vs-crm-only` | CRM vs workflow automation | CRM-led process vs conversation workflow, CRM vs lead follow-up automation |
| `/compare/[slug=flow-vs-chatbot-builder]` | chatbot builder vs workflow automation | AI chatbot builder comparison, chatbot builder vs business process automation |
| `/compare/[slug=flow-vs-whatsapp-chatbot-tools]` | WhatsApp chatbot tools comparison | best WhatsApp automation tool India, WhatsApp bot tools vs workflow platform |
| `/compare/[slug=flow-vs-manual-customer-support]` | manual customer support vs automation | support automation comparison, FAQ automation vs manual support |
| `/compare/[slug=flow-vs-zapier-for-indian-businesses]` | Zapier alternative for Indian customer workflows | workflow automation platform India, customer workflow alternative to Zapier |

## Blog Pages

Blog posts should own informational or mixed commercial-investigation queries. They should **not** try to own the main software term if a solution page exists.

| Route | Primary keyword |
| --- | --- |
| `/blog/how-whatsapp-automation-helps-small-businesses-in-india` | WhatsApp automation for small business |
| `/blog/best-ai-chatbot-use-cases-for-hospitals-and-clinics` | AI chatbot for hospitals India |
| `/blog/how-to-automate-appointment-booking-using-whatsapp` | WhatsApp appointment booking automation |
| `/blog/whatsapp-chatbot-vs-website-chatbot-which-is-better` | WhatsApp chatbot vs website chatbot |
| `/blog/how-real-estate-businesses-can-automate-lead-follow-ups` | real estate lead follow up automation |
| `/blog/customer-support-automation-ideas-for-indian-businesses` | customer support automation Indian businesses |
| `/blog/how-clinics-can-reduce-front-desk-calls-with-automation` | clinic appointment chatbot India |
| `/blog/what-is-no-code-chatbot-automation` | what is no-code chatbot automation |
| `/blog/how-to-automate-payment-reminders-for-customers` | payment reminder automation |
| `/blog/best-chatbot-workflows-for-hospitals` | hospital chatbot workflows |
| `/blog/how-ai-can-reduce-missed-appointments` | AI reduce missed appointments |
| `/blog/how-to-collect-leads-automatically-from-website-and-whatsapp` | collect leads from website and WhatsApp |
| `/blog/how-to-automate-faqs-for-business-support` | automate FAQs for business support |
| `/blog/how-to-use-human-handoff-in-chatbot-automation` | human handoff chatbot automation |
| `/blog/whatsapp-business-api-automation-explained` | WhatsApp Business API automation |
| `/blog/ai-chatbot-pricing-in-india-what-businesses-should-know` | AI chatbot pricing India |
| `/blog/how-to-automate-customer-follow-ups-after-enquiry` | automate customer follow-ups after enquiry |
| `/blog/best-workflow-automation-examples-for-service-businesses` | workflow automation examples service businesses |
| `/blog/how-to-build-a-hospital-demo-chatbot` | build hospital demo chatbot |
| `/blog/why-small-businesses-need-conversation-automation` | small business conversation automation |

## India Hub and State Pages

State pages should own **state-specific** commercial terms only.

| Route pattern | Primary keyword owner |
| --- | --- |
| `/india` | conversational AI workflow automation India |
| `/india/[state]` | exact `state.keywordTarget` from `src/lib/india-seo-data.ts` |
| `/india/[state]/workflows/[workflow]` | `{workflow.keywordTarget} {state}` intent |
| `/india/[state]/industries/[industry]` | `{industry keyword theme} in {state}` intent |

### Important guardrail

Do not let `/india/[state]` pages compete with the national product page for:

- `AI automation platform India`
- `business automation software India`
- `workflow automation software India`

State pages should stay geo-qualified.

## Hindi Routes

These should mirror the English owner, not compete for separate primaries.

| Route | Ownership rule |
| --- | --- |
| `/hi` | localized version of homepage theme |
| `/hi/solutions` | localized version of solutions hub |
| `/hi/blog` | localized blog hub |
| `/hi/compare` | localized comparison hub |
| `/hi/templates` | localized templates hub |
| `/hi/industries` | localized industries hub |
| `/hi/workflows` | localized workflows hub |
| `/hi/india` | localized India hub |

Recommended handling:

- same primary theme as English parent
- localized support terms in Hindi copy
- do not invent separate keyword ownership unless dedicated Hindi detail pages are launched

## Cannibalization Cuts

### High-priority collisions to fix or maintain

1. Hospital terms
   - Owner: `/industries/hospital-automation`
   - Supporting pages: `/industries/hospitals`, `/industries/healthcare`, hospital blog/template/proof pages
   - Avoid using `hospital automation software India` as the H1/title target on support pages

2. Real estate commercial terms
   - Owner: `/industries/real-estate-automation`
   - Supporting pages: `/industries/real-estate`, real-estate template and proof pages
   - Keep template pages implementation-shaped, not software-category-shaped

3. Education broad terms
   - Owner: `/industries/education-automation`
   - Supporting pages: `/industries/education`, education proof page, admissions blog pages

4. Broad support-software terms
   - Owner: `/solutions/customer-support-automation`
   - Supporting pages: `/workflows/customer-support`, `/templates/customer-support-bot-template`, `/industries/support-teams`

5. Broad WhatsApp commercial terms
   - Owner: `/solutions/whatsapp-automation`
   - Supporting pages: `/use-cases/whatsapp-automation`, `/workflows/whatsapp-automation`, `/templates/whatsapp-automation-template`, WhatsApp blog and compare pages

6. Broad workflow-software terms
   - Owner: `/solutions/workflow-automation`
   - Supporting pages: homepage, platform page, workflow hub, blog examples page

7. CRM/API integration terms
   - Owner: `/solutions/crm-api-workflow-automation`
   - Supporting pages: `/use-cases/[slug=crm-api-sync]`, related templates, compare pages

8. Template intent vs software intent
   - Templates own `template`, `flow`, `workflow`, `bot` variants
   - Solutions own `software`, `platform`, `automation`, `provider`, `for business` variants

## Editorial Rules for Updating Titles and H1s

- If a solution page owns a `software` or `platform` term, do not reuse that exact primary on a template or article.
- If an industry landing page owns `X automation software India`, the broader core industry page should shift to `X WhatsApp automation`, `X appointment automation`, or `X enquiry chatbot`.
- Problem-led blog pages should use `how to`, `what is`, `best`, or `vs` modifiers.
- Comparison pages should keep `vs`, `alternative`, or tool-category comparison phrasing explicit.
- Template pages should keep `template`, `workflow`, `flow`, or `bot` modifiers explicit.

## Recommended Next Edits

These are the cleanest follow-ups if you want to apply the assignment in code and copy:

1. Normalize page titles/H1s where a support page still sounds broader than its assigned owner.
2. Add missing detail landing pages for diagnostics, insurance, and ecommerce before targeting those clusters aggressively.
3. Update internal links so supporting pages point to the assigned owner page using the primary anchor text.
4. Keep service/provider terms mostly on `/contact`, pricing FAQs, or a future dedicated services page.
