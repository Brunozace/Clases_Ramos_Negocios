# Clases Ramos de Negocios

Spanish-language static site for `clasesramosdenegocios.cl`, built with Vite and vanilla HTML, CSS and JavaScript. It presents Grupo A.G.MHZ's classes online throughout Chile and in person in Concepción, 19 university/MBA subjects and five school subjects, with general and subject-specific WhatsApp links.

The production domain is `https://clasesramosdenegocios.cl/`, hosted on Render with DNS managed through Cloudflare. The design takes visual inspiration from the supplied mobile reference video: centered serif headings, generous whitespace, rounded imagery, subtle scroll entrances and expandable questions. The original logo, green WhatsApp buttons and complete catalog are preserved. FAQs are inside the instructor/modalities section, retaining five main sections.

## Run locally

Use Node 22.17.0 (recorded in `.node-version` and `.nvmrc`).

```sh
npm ci
npm run dev
```

Build and serve the generated output:

```sh
npm run build
npm run preview
```

`npm run build` generates static HTML, builds `dist/`, and runs the focused content/link validator. `npm run validate` checks the current `dist/` separately. Dependencies and generated output are ignored by Git.

## Editing

- `src/catalog.json`: current subject catalog, including Bruno's review changes. Edit subject names here; the page and WhatsApp drafts use the same values.
- `src/contact.json`: current confirmed contact: **+56 9 7982 1150**, WhatsApp destination **56979821150**. Bruno's latest correction supersedes the archived kit's phone instructions. Visible numbers, copy-number data and every WhatsApp link use this source.
- `src/profile.json`: client-approved group identity, nationwide online coverage and current profile/SEO copy; overrides the archived personal introduction.
- `src/legal.json` and `src/legal-page.html`: terms and privacy copy from the client workbook received 11 November 2026, rendered to separate linked pages. Privacy collection wording reflects the actual WhatsApp/email flow. The original workbook remains unchanged.
- `clases-codex-kit/02_CONTENT.json`: original editorial source for facts and proposed copy. The kit is preserved as reference; `src/catalog.json` and `src/contact.json` override its original catalog and contact.
- `src/page.html`: page template. Edit this instead of generated `index.html`.
- `src/styles.css`: responsive styling, including green WhatsApp buttons.
- `src/main.js`: mobile navigation, current-section indication, copy-number enhancement, scroll reveals and a continuously sliding study strip without playback controls, as requested by the client. Reduced-motion preferences still disable the other page animations. Native FAQ disclosures work without JavaScript; JS also supports single-open behavior on older browsers.
- `scripts/render.mjs`: generates static content and encoded WhatsApp links before development/build.
- `public/`: local assets. See `ASSETS.md` for provenance.

The user-selected business logo is included as `public/logo.png` and used in the header and footer. To replace it, save an approved PNG there and restart `npm run dev` or rebuild. Source dimensions are 2172 × 724. If the file is absent, the text identity is retained.

The group introduction is text-only, with no stock or generated portrait presented as the service provider.

## Review and production

The default `npm run build` runs the production build: `index, follow`, distinct canonical and Open Graph URLs for all three pages, and a sitemap referenced by `robots.txt`. The domain, HTTPS certificates and apex/www redirect were verified before enabling this default. `npm run build:production` is also available directly; no environment variable is required.

Use `npm run build:review` for a review artifact with `noindex, nofollow`, no canonical URLs and no sitemap. Local development also retains review metadata. This is an indexing request, not access control. `npm run validate` validates production output; the review build runs its own review validation.

## Render Static Site

The repository includes `render.yaml` with production deployment settings for the existing Render Static Site, `clases-ramos-de-negocios`. Its build command remains `npm ci && npm run build` and its publish directory is `dist`.

The Blueprint pins Node 22.17.0, skips Render's automatic dependency installation because the build command runs `npm ci`, and publishes only `dist/`. It keeps auto-deploy disabled so future GitHub pushes do not publish changes without a deployment action. The `onrender.com` address serves the same build; canonical URLs point to the official `.cl` domain.

1. Connect `https://github.com/Brunozace/Clases_Ramos_Negocios`, branch `main`.
2. Use the repository root, Node 22.17.0, build command `npm ci && npm run build`, and publish directory `dist` for production. Set `SKIP_INSTALL_DEPS=true`; dependency installation is explicit in this command.
3. Review any automatic deployment settings before enabling them. Confirm account plan/usage terms in Render.
4. Trigger a deploy after an approved production change is pushed to `main`.
5. Follow Render's current [custom-domain instructions](https://render.com/docs/custom-domains) and the actual service's DNS targets. Preserve unrelated DNS records. Verify HTTPS and apex/www redirects before declaring launch complete.

No backend, database, application secrets, payments, analytics or automated messaging are required. Opening WhatsApp prepares a draft; it does not send it.

## Verification and remaining review

The validator checks all 24 catalog entries and their groups/levels, 30 WhatsApp recipients and decoded drafts, page anchors, local asset references, profile content, obsolete-contact exclusion and the selected build's metadata.

Still pending:

- Visual review of the integrated logo and page layout.
- Browser/device QA, keyboard/zoom checks, clipboard success/failure checks and Lighthouse audit. Earlier Computer Use verification was blocked; these are not claimed as passed.
- Bruno/client confirmation of the actual WhatsApp recipient on mobile and desktop, without automatically sending a message.
- Google Search Console domain verification and sitemap submission. Indexing and search rankings are controlled by Google.

The detailed acceptance checklist remains in `clases-codex-kit/03_QA_AND_RELEASE.md`. A GitHub push is source delivery, not a website deployment.

## Ownership and rollback

GitHub destination: `Brunozace/Clases_Ramos_Negocios`, supplied by Bruno. The client owns the domain at NIC Chile; Bruno manages Cloudflare, Render and GitHub. Never commit credentials.

After deployment, record the approved commit and URL. If a release fails, revert the affected commit or redeploy the last verified build, then repeat contact and HTTPS checks. Use separate branches for changes when `main` is connected to automatic production deployment.
