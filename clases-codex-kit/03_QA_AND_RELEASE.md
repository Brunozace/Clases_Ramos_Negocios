# QA, deployment and handoff

This is an execution checklist for the future implementation. **No website tests have been executed by this handoff package.** Record dates, commit identifiers, environment and actual results when Codex/Bruno implement the page.

## 1. Acceptance test matrix

Use Pass / Fail / Blocked / Deferred / Not run. A deferred Must requirement is not release-complete. Fix critical contact, content, keyboard, layout and build failures before client delivery.

| Test | Stories | Procedure | Expected result | Initial status |
| --- | --- | --- | --- | --- |
| QA01 Identity | US01 | Inspect page, title and footer | Exact business name; Spanish copy; one H1; no invented facts | Not run |
| QA02 Catalog | US02, US03 | Compare DOM text with 02_CONTENT.json | 19 university/MBA plus five school entries; correct groups; accents and spelling preserved | Not run |
| QA03 Formats | US04 | Review every format/location reference | Online and in person in Concepción; no invented address or schedule; one instructor | Not run |
| QA04 Contact audit | US05 | Inspect every visible phone and wa.me href, including metadata and generated HTML | Display +56 9 7549 1987; wa.me path /56975491987; no obsolete number | Not run |
| QA05 General draft | US05 | Decode query text from header, hero, footer/contact and sticky CTA | Readable Spanish; correct number and general inquiry; no auto-send | Not run |
| QA06 Subject draft | US06 | Test an accented subject and Inglés in each level | Correct subject and level; encoded punctuation/accents preserved | Not run |
| QA07 Real WhatsApp handoff | US05, US06 | Bruno/client opens a link on mobile and desktop without sending | Correct account/recipient is verified by the client; draft can be reviewed before sending | Not run |
| QA08 No-app fallback | US05, US12 | Inspect page without using WhatsApp; try copying number | Phone remains selectable; copy enhancement handles unavailable clipboard API honestly | Not run |
| QA09 Responsive layout | US07, US09 | Inspect 320, 360, 390, 768, 1024 and 1440px widths | No overflow, overlaps, truncated business name or hidden text; contact visible and readable | Not run |
| QA10 Navigation | US07, US08 | Activate all anchors; open/close mobile menu with touch and keyboard | Targets visible below sticky header; aria-expanded accurate; Escape closes; focus handled | Not run |
| QA11 Keyboard/zoom | US08 | Tab through page; use skip link; zoom text 200% | Logical order, visible focus, no trap, no inaccessible controls or obscured content | Not run |
| QA12 Contrast/a11y | US08 | Automated audit plus manual alt/heading/name/contrast checks | Stated contrast targets met; semantic structure; no empty links or icon-only unlabeled CTA | Not run |
| QA13 Reduced motion / no JS | US02, US03, US07, US08 | Enable reduced motion; separately disable JS | Motion reduced; core content and general contact remain available; nav fallback usable | Not run |
| QA14 Assets | US09 | Inspect network and assets at mobile/desktop sizes | No broken/hotlinked images, unsupported identity claims or unrecorded asset rights | Not run |
| QA15 Build | US11 | Fresh checkout, supported Node, npm ci, npm run build; serve dist | Successful reproducible build; assets/anchors work from built output; no app console errors | Not run |
| QA16 Review SEO | US10 | Inspect HTML/headers for preview | noindex applies; no false production sitemap/canonical; preview clearly identified in handoff | Not run |
| QA17 Production SEO | US10 | Inspect actual live HTML after approved launch | noindex removed; verified HTTPS canonical/sitemap; correct Spanish metadata and share URLs | Not run |
| QA18 Performance | US07, US11 | Run mobile lab audit on built page with version/device profile recorded | Investigate avoidable bottlenecks; target scores documented, not fabricated | Not run |
| QA19 Scope/network | US11 | Inspect code, storage, requests and build output | No database, form submission, trackers, secrets, paid API, fake reviews or bookings | Not run |
| QA20 HTTPS / domains | US10, US11 | Open root, www and HTTP on final domain | Valid certificate; consistent HTTPS preferred domain; assets load without mixed content | Not run |
| QA21 Ownership / docs | US11 | Follow README from a clean folder; inspect access record | Run/build/deploy/edit instructions sufficient; ownership and renewal responsibility recorded | Not run |
| QA22 Andrés profile | US13 | Check the no-photo variant and, when supplied, the real-photo variant at mobile/desktop widths | Name is Andrés; facts are accurate; CTA uses correct number; absent photo leaves no empty space/placeholder; supplied portrait has authorization, suitable crop, local optimized file, dimensions and alt text | Not run |

### Focused automation

Automate only checks that catch meaningful regressions: every WhatsApp URL's recipient/decoded message; all 24 catalog entries and levels; old contact absent from publishable output; build success; accessible navigation state if it is interactive. Do not scan the archived original Excel as if it were production output—the old phone is intentionally preserved there. No broad test framework is necessary unless the implementation genuinely benefits from it.

Record manual device/browser checks and any checks that could not run. Never replace actual WhatsApp account confirmation with a syntactically correct URL test. No test should send a message or purchase anything automatically.

## 2. Review workflow

1. Build locally and run the applicable QA cases.
2. Deploy a review version only when repository/account access is available and Bruno requests it. Until then provide local run instructions and screenshots if supported.
3. Configure review builds as noindex. Public preview links are publicly accessible; noindex does not make them private. Do not include confidential materials.
4. Ask the client for one consolidated list covering content, subject groups, colors, spacing, phone prominence, Andrés’s introduction and images. Keep within the previously discussed two feedback rounds unless the actual agreement differs.
5. Apply corrections, rerun affected checks and document final content/design sign-off. New functionality is a scope decision.
6. Obtain Bruno's go-ahead for official launch and perform the production checklist.

The first preview may later become the production service. Once launched, do not push unfinished experiments to its auto-deployed branch. Use a development branch or supported preview workflow to review future changes.

## 3. Render deployment plan

Suggested repository/service slug: `clases-ramos-de-negocios`. This is an internal identifier; the public brand remains the exact domain name. No existing repository, service or URL is implied.

| Setting | Planned value |
| --- | --- |
| Service | Render Static Site |
| Source | GitHub repository chosen/created by Bruno |
| Branch | Confirmed deployment branch, commonly main |
| Root directory | Website app directory; repo root for a new single-app project |
| Build | npm ci && npm run build |
| Publish directory | dist |
| Node | Compatible version selected and pinned during implementation |
| Dependencies | Commit lockfile; document explicit install settings to avoid redundant installation |
| Auto-deploy | Enable on the chosen branch after reviewing production implications |
| Secrets | None required by this application |

Render's static hosting supports Git-connected deployment, an onrender.com URL and custom domains. Usage allowances and plan terms apply; do not promise unlimited hosting or permanent free service. Confirm account limits and pricing when creating the service. [Render static sites](https://render.com/docs/static-sites), checked 10 November 2026.

The implementation should document a build/deployment flag or a reliable release edit for review versus production metadata. Whatever mechanism is chosen, test the actual resulting HTML/headers; a checklist alone does not remove noindex.

## 4. Domain and production launch

- Client registers the requested domain under their own account/contact details after availability is verified. Registration and renewals are the client's responsibility unless separately agreed.
- Record who owns/administers GitHub, Render and DNS and how access is delegated. Do not put passwords, recovery codes or API tokens in the repository or this package.
- Add `clasesramosdenegocios.cl` in Render's Custom Domains settings. Choose the apex as the proposed canonical host and verify www behavior.
- Use the selected DNS provider. If using Cloudflare, add the domain there and enter its assigned nameservers at NIC Chile. Inspect existing DNS before changing it; preserve any unrelated mail/verification records and DNSSEC configuration appropriately.
- Follow Render's current Cloudflare instructions for the root and www CNAME targets, initially DNS only. Use the actual Render-assigned hostname, not an example address. Review conflicting records only for the website hosts; do not delete unrelated records blindly.
- Verify ownership/routing in Render and wait for its HTTPS certificate to become valid. Check both apex and www. DNS propagation can delay readiness.
- Switch production SEO: remove review noindex, set canonical `https://clasesramosdenegocios.cl/`, populate production sitemap/robots and use final share URLs only after ownership/routing is confirmed.
- Run QA17 and QA20 plus contact and mobile smoke checks on the official URL. Confirm the real WhatsApp account without automatically sending a message.
- Record the approved launch date/commit and a known-good version for rollback.

Technical references, checked 10 November 2026:

- [Render custom domains](https://render.com/docs/custom-domains)
- [Render Cloudflare DNS setup](https://render.com/docs/configure-cloudflare-dns)
- [NIC Chile registration](https://www.nic.cl/dominios/)

No domain status, DNS state, account access or production URL has been verified by this package.

## 5. Handoff and rollback

Deliver source and lockfile, README commands, asset provenance, the verified official URL or clearly labeled preview status, actual QA results, an access/ownership record without credentials, a contact-edit guide, instructions for adding/replacing Andrés’s portrait, and the agreed maintenance boundary. Confirm who receives renewal notices and handles subsequent content changes.

For a faulty release, restore the previous known-good commit/build using the available Git/Render workflow and rerun contact/build/HTTPS smoke checks. Avoid changing DNS to fix a simple content regression. Keep the original spreadsheet and requirement changes as reference rather than publishing them as website assets.
