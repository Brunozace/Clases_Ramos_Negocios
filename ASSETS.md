# Asset provenance

- `public/whatsapp.svg`: WhatsApp brand icon from [Simple Icons](https://github.com/simple-icons/simple-icons/blob/develop/icons/whatsapp.svg), downloaded 10 November 2026. Simple Icons distributes its icons under CC0; brand trademarks remain their owners' property. Inlined at build time with inherited button color and hidden from assistive technology because the adjacent text names WhatsApp.
- `public/favicon.svg` and modality line icons in `src/page.html`: original simple book, computer and location illustrations created for this project.
- No photography, remote fonts or externally hosted runtime assets are used.

## Supplied business logo

The user selected a navy book/monogram and “Clases Ramos de Negocios” wordmark on 10 November 2026. The supplied original is now included unchanged at `public/logo.png` and used in the header and footer.

To replace it, save the approved PNG to `public/logo.png`, then run `npm run dev` or `npm run build`. The generator uses it in both the header and footer, with responsive sizing and the business name as alternative text. Original dimensions: 2172 × 724. If the file is absent, the text identity remains visible without a broken image. Preserve the original logo artwork and transparency.
