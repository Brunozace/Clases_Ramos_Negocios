# clasesramosdenegocios.cl — Codex handoff

Prepared 10 November 2026 for Bruno Sanchez. This package specifies a small client website; it is not the implemented website.

## Start here

1. Extract this ZIP into a working folder or attach it to Codex.
2. Read `01_PROJECT_SPEC.md`, including its source-precedence rules.
3. Use `02_CONTENT.json` for the approved facts and proposed Spanish copy.
4. Paste `CODEX_PROMPT.md` into Codex to begin implementation.
5. Check the result against `03_QA_AND_RELEASE.md` before showing the client.

| File | Purpose |
| --- | --- |
| `CODEX_PROMPT.md` | Ready-to-paste implementation request |
| `01_PROJECT_SPEC.md` | Scope, design, features, user stories, acceptance criteria and SDLC |
| `02_CONTENT.json` | Machine-readable facts, complete subject catalog and proposed Spanish copy |
| `03_QA_AND_RELEASE.md` | Test cases, preview procedure, Render deployment and launch checklist |
| `04_FLOWS.md` | Editable Mermaid diagrams and explanations |
| `diagrams/visitor-flow.svg` | Viewable visitor journey |
| `diagrams/delivery-flow.svg` | Viewable development and approval process |
| `source/Informacion_Pagina_web_original.xlsx` | Byte-for-byte copy of the client's Excel, with a portable filename |

## Critical correction

**Use `+56 9 7549 1987`, with WhatsApp destination `56975491987`.**

The Excel contains an older contact, `◊569 7982 1150`. It is retained only because the original file is preserved. Never publish or use that old number in the implementation. Later explicit client information supplied by Bruno overrides conflicting Excel content.

The requested business name and domain are both `clasesramosdenegocios.cl`. Domain ownership, availability and registration have not been verified. The brand text can be displayed before registration; do not imply that the domain is already live.

## Working conventions

- Engineering documentation is in English; every visitor-facing word must be in Chilean Spanish.
- Confirmed: one instructor named Andrés; online and in-person classes in Concepción; prices and availability via WhatsApp; navy, white and black; sober imagery and a prominent phone number.
- Proposed by this package: the page structure, technical stack, copy, design tokens, tests and delivery sequence. These are implementation defaults for review, not additional client-approved promises.
- Use the confirmed first name Andrés; do not invent a surname, qualifications, testimonials, street address, prices, guarantees, timetable, logo or social profiles.
- No external accounts, paid services or domain purchases are needed to build the first local version.

## Andrés and his photo

Version 1.1 adds “Conoce a Andrés” within the fourth section, alongside class formats, preserving the five-section scope. Use a genuine client-provided portrait once available. Until then show Andrés’s name and the confirmed teaching formats in a complete text-only layout, without a dummy photo or public placeholder. See the specification for photo requirements.

Source workbook received as `Información Página web.xlsx`. A checksum file records its integrity. Do not edit that source file while building the website.
