# Project specification and SDLC

**Project:** clasesramosdenegocios.cl  
**Version:** 1.1 — Andrés profile added to implementation baseline, 10 November 2026  
**Developer:** Bruno Sanchez  
**Deliverable:** one responsive, static landing page in Spanish  
**Status:** ready for first implementation; visual design and proposed copy require client review.

## 1. Purpose and success criteria

Help university, MBA and school students—and parents seeking school tutoring—identify relevant subjects, understand the available class formats and contact the instructor through WhatsApp. The page supports an inquiry; it does not complete a reservation, accept payment or confirm availability.

Success means visitors can understand the offering immediately, find their subject, see online/in-person options and reach the correct WhatsApp conversation. Delivery acceptance is based on the stories and tests below, not promised sales, rankings or student results. No visitor tracking is included in version 1; inquiry volume can be reviewed manually by the instructor without attributing every message to the website.

## 2. Evidence and authoritative decisions

Priority: later explicit client corrections relayed by Bruno > nonconflicting original Excel content > implementation defaults in this package. Future explicit corrections supersede this version.

| Item | Confirmed value | Origin |
| --- | --- | --- |
| Business name | `clasesramosdenegocios.cl` | Bruno's latest confirmation: same as domain |
| Requested domain | `clasesramosdenegocios.cl` | Client's requested name; registration unverified |
| Offering | Private classes for university/MBA and school students | Excel, Hoja1 |
| Tagline | Aprende con enfoque y organización | Excel B3 |
| Teaching formats | Online and in person | Bruno's latest confirmation |
| In-person location | Concepción | Bruno's latest confirmation; no address supplied |
| Teaching team | A single instructor, Andrés | Bruno's latest confirmation |
| Pricing | Inquire via WhatsApp | Bruno's latest confirmation; publish no amounts |
| Phone display | +56 9 7549 1987 | Bruno's latest confirmation |
| WhatsApp digits | 56975491987 | Normalized from confirmed phone |
| Visual direction | Sober, simple; navy, white and black | Client message |
| Contact emphasis | Large, visible WhatsApp number | Client message |

Excel source: `source/Informacion_Pagina_web_original.xlsx`, copied unchanged from `Información Página web.xlsx`. Relevant cells: B2–B3 for headline/tagline, B5–B41 for university/MBA groups, G5–G11 for school subjects, G18–H18 for the superseded contact. The workbook contains no embedded images.

**Conflict:** H18 contains `◊569 7982 1150`. Do not use it anywhere in the live website, metadata, structured data, URLs or test fixtures. Its presence in the archived source is expected.

Normalize spelling in public copy: `Evaluación de Proyecos` becomes `Evaluación de Proyectos`; `Micro-Economía` and `Macro-Economía` become `Microeconomía` and `Macroeconomía`. Clean whitespace. No subject is added or removed.

## 3. Scope and boundaries

### Included

- A single Spanish-language page with five main sections and anchor navigation.
- University/MBA and school subject catalog, with clear category headings.
- A “Conoce a Andrés” introduction with a genuine portrait when supplied, alongside online and in-person information; Concepción is the only published location.
- Visible phone number, general WhatsApp links and optional per-subject WhatsApp links.
- Responsive layout, keyboard access, readable contrast and reduced-motion support.
- Basic on-page SEO, favicon, share metadata and an indexability switch for review versus launch.
- A GitHub-compatible codebase, Render Static Site deployment instructions and handoff notes.
- Local verification and a review preview; client feedback incorporated within the agreed revision scope.

### Excluded

Databases, user accounts, CMS/admin panel, inquiry forms, file uploads, payment processing, calendars, booking confirmation, automated WhatsApp messaging, WhatsApp Business API integration, chatbots, student portals, newsletters, ad pixels, analytics and recurring maintenance. Domain registration is a separate client-owned purchase; this package does not make that purchase. Prices, availability and booking arrangements are handled manually in WhatsApp.

Budget and delivery discussions are commercial context, not website copy. The previously discussed 5–7 business days and two feedback rounds are planning assumptions to confirm with Bruno against the actual agreement, content readiness and deposit status; neither payment nor a fixed start date is established in this package.

## 4. Page structure and proposed Spanish copy

Use `02_CONTENT.json` as the editorial source for exact facts and subject names. Its proposed copy can be refined without altering facts. Main content must be present in generated HTML, not dependent on a client-side data fetch.

| Order / anchor | Content and behavior |
| --- | --- |
| Header | Business name as text, anchors to Ramos, Modalidades and Contacto, clear WhatsApp action. A compact accessible mobile navigation if needed. |
| 1. Inicio — `#inicio` | H1: “Clases particulares para universitarios y escolares”. Tagline: “Aprende con enfoque y organización”. Support text: “Clases para universidad, MBA y colegio. Modalidad online y presencial en Concepción.” Visible phone and “Consultar por WhatsApp”. |
| 2. Universidad y MBA — `#universidad` | Five grouped subject lists, not 19 oversized decorative cards. Optional discreet “Consultar por este ramo” links. |
| 3. Colegio — `#colegio` | Five school subjects, separated clearly from university offerings. |
| 4. Profesor y modalidades — `#modalidades` | “Conoce a Andrés” introduction, genuine portrait when supplied, and online/in-person cards. In-person text identifies Concepción only. Use the factual profile copy below, without invented credentials. |
| 5. Contacto — `#contacto` | Large phone, “Consulta valores y disponibilidad por WhatsApp”, prominent contact action, and an optional copy-number enhancement with success/failure feedback. |
| Footer | Business name, minimal navigation and current year. No unsupported affiliations or badges. |

The domain is long: allow wrapping or responsive text sizing without overflow. Do not abbreviate into an invented brand. The “Ramos” navigation link may lead to `#universidad`, with a visible jump link to `#colegio` nearby. Do not hide the catalog behind a carousel or require a search/filter system.

### Andrés profile and portrait

This is a dedicated profile block within section 4, keeping the page at five main sections. Proposed visitor-facing copy:

> **Conoce a Andrés**  
> Profesor de clases particulares  
> Soy Andrés e imparto clases particulares para estudiantes de universidad, MBA y colegio, en modalidad online y presencial en Concepción. Escríbeme por WhatsApp para consultar por tu ramo, valores y disponibilidad.

The copy is a proposed first-person introduction for client review, based only on confirmed facts. Do not add a surname, degree, university affiliation, years of experience, qualifications, teaching guarantees or personal story without supplied evidence. Suggested CTA: “Consultar con Andrés”. It must use the same confirmed WhatsApp destination as the other CTAs.

Use a two-column portrait/text composition on desktop and stacked content on mobile. A vertical 4:5 or 3:4 portrait with face and shoulders visible suits the restrained design. Keep the styling simple: a navy heading, white/pale neutral background and minimal framing. Actual crop must preserve the face and look natural.

Request a genuine portrait from Andrés that he authorizes for the website, preferably the original JPG/PNG file, at least approximately 1000px wide, sharp, well lit and against an uncluttered background. These are quality preferences, not mandatory file rejection rules. Optimize a local WebP/AVIF copy and preserve the original privately; remove unnecessary metadata from the published asset. Use explicit dimensions and appropriate responsive sizes. Suggested published filename: `andres-profesor.webp`; alt text: “Andrés, profesor de clases particulares”.

**Until his photo arrives:** keep the profile complete as text only, adjust its width/alignment, and omit the image element and reserved image column. No broken image, stock person, AI-generated likeness, silhouette, “foto pendiente” text or empty photo box should appear to visitors. A real photo is not required to build or review the first version. When supplied, add it and rerun responsive, image and accessibility checks. Do not use a generated portrait to represent the real instructor.

## 5. Feature requirements

| ID | Requirement | Priority |
| --- | --- | --- |
| F01 | Show the confirmed business identity, offering and tagline clearly | Must |
| F02 | Include all 19 university/MBA subject entries in their five groups | Must |
| F03 | Include all five school subject entries separately | Must |
| F04 | Explain online/in-person formats and Concepción coverage | Must |
| F05 | Display the correct number prominently and link to WhatsApp | Must |
| F06 | Offer a subject-specific inquiry message with level context | Should |
| F07 | Provide responsive navigation and accessible reading/interactions | Must |
| F08 | Implement sober visual design and appropriate image handling | Must |
| F09 | Provide truthful SEO/share metadata and review/production states | Must |
| F10 | Build static output and document deployment/ownership | Must |
| F11 | Provide copy-number fallback with clear feedback | Optional |
| F12 | Introduce Andrés with a factual profile and conditional genuine portrait | Must for text; image when supplied |

### WhatsApp behavior

Use `https://wa.me/56975491987?text=` followed by a URL-encoded message. Use `encodeURIComponent` or equivalent when generating the URL. No plus sign, spaces or punctuation in the path. Suggested general message: “Hola, me interesan las clases particulares. Quisiera consultar valores y disponibilidad.”

For a subject inquiry: “Hola, me interesan las clases de {ramo} para {nivel}. Quisiera consultar valores y disponibilidad.” Level must disambiguate repeated Inglés/Alemán entries. Values come only from the known catalog. An ordinary link opens the WhatsApp app or browser handoff according to the visitor's device. Opening a link does not send a message: the visitor chooses whether to send it. Do not display a false “consulta enviada” or “reserva confirmada” state.

Prefer same-tab external navigation to avoid unexpected new windows. If using a new tab, communicate it accessibly and use `rel="noopener noreferrer"`. Keep the number selectable so a visitor can copy it even without WhatsApp or JavaScript. A sticky mobile contact action must respect safe-area insets and must not obscure content, focus indicators or the footer.

## 6. User stories and acceptance criteria

All stories below are proposed implementation requirements. “Must” stories define release acceptance; “Should” and “Optional” features must either be completed and checked or explicitly recorded as deferred.

| Story / feature | User story | Observable acceptance criteria |
| --- | --- | --- |
| US01 / F01 | As a visitor, I want to understand the offer immediately so I know whether this page is relevant. | On initial mobile and desktop view, the business identity, class offering, formats and a WhatsApp action are apparent. There is one clear H1. No fabricated credentials or claims appear. |
| US02 / F02 | As a university or MBA student, I want to locate my subject so I can ask for help. | All 19 catalog entries appear under their five groups with corrected spelling. Each is readable without expanding unrelated content or enabling JS. |
| US03 / F03 | As a school student or parent, I want a distinct school list so I do not confuse it with university subjects. | Matemáticas, Física, Química, Inglés and Alemán appear under Colegio. The level is explicit on contextual inquiry links. |
| US04 / F04 | As a prospective student, I want to know how and where classes happen. | Copy says online and presencial en Concepción. No street address, travel radius, lesson length or schedule is invented. Copy consistently describes one instructor. |
| US05 / F05 | As a visitor, I want a visible phone number and direct inquiry link so I can request prices. | Hero and contact section display +56 9 7549 1987. Every WhatsApp URL uses 56975491987. A decoded general message is readable Spanish. Prices/availability are referred to WhatsApp, without a fabricated amount or response time. |
| US06 / F06 | As a student, I want an inquiry to mention my subject so I do not need to retype it. | Clicking a subject link creates a draft with the correct subject and level. Accent characters survive URL encoding. No message is sent automatically. |
| US07 / F07 | As a phone user, I want navigation and contact controls that are easy to use. | At 360, 390 and 768 CSS px there is no horizontal page scrolling. Menu works by touch and keyboard. Links land on visible headings. Fixed elements do not cover content. |
| US08 / F07 | As a keyboard or assistive-technology user, I want understandable and operable content. | Skip link, semantic landmarks, ordered headings, descriptive link names, visible focus and meaningful alt text are present. Mobile menu exposes state, closes with Escape and returns focus when appropriate. No focus trap. |
| US09 / F08 | As the client, I want a restrained presentation aligned with my request. | Navy, white and black dominate. Number is prominent. No flashy gradients, excessive animation, neon accents, invented logo or misleading teacher photos. Layout is approved through the preview. |
| US10 / F09 | As the owner, I want accurate search/share information when the page launches. | Spanish title/description and lang attribute exist. Review is noindex. Official release has the verified canonical HTTPS domain, correct indexability and no draft URL in share metadata. No ranking guarantee is made. |
| US11 / F10 | As the developer, I want reproducible delivery and clear ownership. | Fresh dependency installation and build succeed; dist contains working assets. README covers run/build/preview, content editing and Render setup. Repository and service ownership/access are recorded without including credentials. |
| US12 / F11 | As a visitor unable to use the link, I want to copy the phone number. | If provided, copy action copies the confirmed number and reports success only after it succeeds. Failure gives a manual-copy instruction. Visible selectable phone remains available in all cases. |
| US13 / F12 | As a prospective student, I want to know who teaches the classes so I can contact the instructor with confidence. | “Conoce a Andrés” appears within section 4 with accurate first-name and format information. Supplied portrait is genuine, authorized, legible, optimized and has alt text. Without a portrait, the section is fully text-only with no placeholders. Its CTA uses the confirmed contact. No unsupported qualifications are shown. |

## 7. Visual design and nonfunctional requirements

Proposed tokens: navy `#10243A`, white `#FFFFFF`, near-black `#111827`, pale gray `#F3F5F7` for subtle grouping, secondary text `#475569`. These are chosen defaults within the requested palette. Verify actual text/control combinations rather than assuming every pairing passes contrast.

- Use a modern system sans-serif stack; no remote font request is necessary. Body text at least 16px with comfortable line height. Number approximately 28–40px on mobile where space permits, larger on desktop; avoid overflow at 320px.
- Max content width around 1120px; mobile side padding around 20px; generous section spacing. Navy CTA with white label. A WhatsApp icon may remain monochrome to preserve the palette.
- Aim for WCAG 2.2 AA practices: text contrast at least 4.5:1 for normal text, 3:1 for large text; visible keyboard focus, 44×44px target-size design goal, and usable 200% text zoom. Do not claim certified compliance from an automated score alone.
- Avoid motion except subtle optional transitions; respect `prefers-reduced-motion`. No autoplay media, carousel or decorative counters.
- If imagery is used, choose an understated study/workspace image with muted tones and no embedded text. Do not imply a stock/generated person is the instructor or an actual student. Use locally hosted licensed/supplied assets and record their provenance. Without a suitable asset, use a polished text-led hero; missing photos are not a blocker.
- Use explicit image dimensions, WebP/AVIF where practical and lazy loading below the fold. Keep main content usable without JS; mobile navigation should have a visible fallback. Avoid third-party embeds and unnecessary network requests.
- Suggested lab targets: mobile Lighthouse performance ≥90, accessibility ≥95, SEO ≥90 after launch configuration, with tool version/environment recorded. These are project goals, not guaranteed real-user outcomes. Review SEO may be intentionally lower due to noindex.
- HTTPS at launch; no secrets in source. No application database, forms, cookies, tracking or local-storage collection in v1. Hosting and WhatsApp have their own handling of traffic/messages; do not claim the entire service collects no data. Reassess privacy needs if tracking/forms are added later.

## 8. Technical approach

Recommended new-project stack: Vite + vanilla HTML/CSS/JavaScript, using the supported stable toolchain at implementation time. Lock dependencies and record the Node version in the repo. If an established appropriate stack already exists, adapt it instead of rewriting without need.

Proposed structure: root `index.html` with primary Spanish content, `src/styles.css`, `src/main.js` for progressive enhancement, `public/` for local images/favicon/SEO files, and `package.json`/lockfile. No SPA routing is needed; use page anchors. Keep contact destination/message generation centralized and verify all static fallback anchors against it. The handoff JSON is an editorial baseline, not a requirement to fetch content dynamically in the browser. When converting it to HTML, test catalog equality against the baseline.

Scripts: `dev`, `build`, `preview` and a focused validation command for contact URLs/catalog. Standard Vite output: `dist/`. Render Static Site: production build `npm ci && npm run build`, publish directory `dist`. Pin compatible Node/tool versions, and document whether dependency installation is managed by Render or explicitly by the build command. No server, secret environment variables, database or paid API is needed.

SEO: Spanish page title/description, `lang="es-CL"`, semantic headings and factual Open Graph tags. Proposed title and description are in the JSON. Use noindex on review deployments; noindex is an indexing request, not access control. Production must remove it and use the verified canonical domain. Generate a one-page sitemap only for the final domain. Structured data is optional; if included, use only established facts, not invented addresses, reviews, ratings or pricing.

## 9. SDLC and review gates

| Phase | Work | Exit condition |
| --- | --- | --- |
| Requirements | Read original Excel, apply overrides, confirm scope | Facts/catalog and remaining unknowns recorded; no old contact used |
| Design | Prepare a desktop/mobile layout, tokens and sample copy | Bruno can review a coherent first proposal; client feedback requested on structure/style |
| Implementation | Build all Must features with progressive enhancement | Five sections and correct WhatsApp flow work locally |
| Verification | Execute QA cases, responsive checks and build | Critical defects resolved; actual evidence and remaining gaps recorded |
| Client review | Share a review URL and request one consolidated change list per round | Client approves final content/design, or requested revisions return to implementation |
| Launch | Confirm domain, production SEO, HTTPS and access ownership | Official domain and contact flow checked; Bruno authorizes launch |
| Handoff | Deliver source, instructions, access record and maintenance boundary | Client/developer know who renews domain and handles future changes |

Suggested allocation within the previously discussed 5–7 working days: requirements/design 1–2 days, implementation 2–3 days, QA/revisions/handoff 1–2 days. This is effort planning, not a promised calendar date; client response times and missing launch prerequisites affect delivery. Start date and deposit status must be set by Bruno. Changes adding features beyond this scope require a revised estimate.

## 10. Open items and safe defaults

| Item | Default for first implementation | Launch implication |
| --- | --- | --- |
| Logo | Domain name as text; no fabricated logo | Optional client preference |
| Teacher surname, extended biography and credentials | First name Andrés and factual short introduction only | Not a technical blocker; add verified content if supplied |
| Exact in-person venue | Say Concepción, arrangements via WhatsApp | Do not publish a guessed address/map |
| Prices, timetable and availability | Ask via WhatsApp | Intentionally outside on-page content |
| Andrés portrait | Text-only profile until an authorized genuine photo is supplied | Photo is optional for first review; add and test it when available |
| Other imagery / incomplete image instruction | Sober text-led design or approved licensed image | Client reviews image choice; no stock/generated person presented as Andrés |
| Domain availability/registration | Requested name only | Must be verified before official-domain launch |
| GitHub and Render ownership/access | Build locally and document required setup | Needed for preview/deployment; never request passwords in chat |
| Instructor's real WhatsApp account | Use confirmed number | Bruno/client verify real device handoff before launch without sending a test message automatically |
| Start date, deposit, final sign-off | Do not assume completed | Bruno manages commercial agreement and launch approval |

## 11. Definition of done

All Must stories pass their relevant checks; catalog and contact are correct; no unknown facts are presented as true; desktop/mobile layouts are reviewed; links and build work; content/design sign-off is recorded; production settings are verified when launching; and source/deployment/handoff instructions are delivered. If only a local build or preview is possible, identify that status explicitly and list remaining launch prerequisites. Do not call an unregistered-domain preview a completed production launch.
