# Local redesign review — 10 November 2026

Status: Bruno authorized committing and pushing this revision to `main` after restoring the original catalog. Production deployment has not been requested.

## Reference and direction

Reviewed extracted frames across the supplied 72-second mobile video, including the scrolling introduction, imagery, service blocks and repeated FAQ expansion. The design adapts the reference's spacious white layout, centered serif headlines, rounded images, understated interactions and question disclosures to the existing tutoring content. No business claims, people, copy, contact details or images were copied from that website.

The local implementation retains five main sections, the supplied logo, 24 subject entries, the confirmed phone number and green WhatsApp buttons. The opening uses the existing tagline as its prominent headline and keeps the university/MBA/school offering immediately below. The subject catalog remains fully visible. The new questions appear within the instructor/modalities section and use only established facts.

Interactions: button and subject hover feedback, sticky-header border on scroll, current-section navigation, one-time entrance transitions, mobile menu, native expandable questions, and copy-number feedback. Content and FAQ disclosures remain available without JavaScript. Reduced-motion preferences suppress animation.

## Verification actually performed

- `npm run build`: passed, including all 24 subject/group/level comparisons and all 30 WhatsApp destination/draft checks.
- `node --check src/main.js`: passed.
- Static references to local assets and responsive image candidates: passed.
- Local development page at `http://127.0.0.1:5173/`: HTTP 200.
- Native accessibility inspection of the VS Code browser preview: updated headings, all subjects, instructor information, four question disclosures, contact actions and navigation appeared in the accessibility tree.
- Generated decorative workspace image inspected before use, with no person or instructor identity claim. Desktop WebP approximately 107 KB; mobile WebP approximately 34 KB.
- This revision follows baseline commit `068431d`; all 24 original subjects and the Universidad y MBA label are retained.

## Review still needed


Window captures repeatedly timed out, and coordinate input geometry was unavailable. No desktop/mobile screenshots or browser interaction test results are claimed. Check the page at 320, 360, 390, 768, 1024 and 1440 CSS pixels; confirm no overflow and readable logo/text. Test menu open/close/Escape, section anchors, FAQ open/close, keyboard focus, 200% text zoom, no-JS behavior, reduced motion and clipboard success/failure. Lighthouse and actual-device WhatsApp recipient confirmation remain pending.

Browser checks above remain pending despite authorization to push the source. Obtain separate approval before production launch.
