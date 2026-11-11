import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { content as c, escape as e, whatsapp } from './content.mjs';

const arrow = '<span aria-hidden="true">↗</span>';
const whatsappIcon = readFileSync(new URL('../public/whatsapp.svg', import.meta.url), 'utf8')
  .replace('role="img"', 'class="whatsapp-icon" aria-hidden="true" focusable="false" fill="currentColor"')
  .replace('<title>WhatsApp</title>', '');
function subjects(items, level, group) {
  return items.map((name) => `<li><a class="subject" data-subject="${e(name)}" data-level="${e(level)}" data-group="${e(group)}" href="${e(whatsapp(name, level))}" aria-label="Consultar por ${e(name)} para ${e(level)} por WhatsApp"><span>${e(name)}</span>${arrow}</a></li>`).join('\n');
}
const university = c.catalog.universityAndMba;
const groups = university.groups.map((g, i) => `<article class="subject-group group-${i + 1}" aria-labelledby="${g.id}"><div class="group-heading"><span class="group-number" aria-hidden="true">0${i + 1}</span><h3 id="${g.id}">${e(g.name)}</h3></div><ul>${subjects(g.subjects, university.label, g.id)}</ul></article>`).join('\n');
const tokens = {
  TITLE: e(c.proposedCopy.seo.title), DESCRIPTION: e(c.proposedCopy.seo.description),
  BRAND: e(c.confirmed.businessName), PHONE: e(c.confirmed.contact.phoneDisplay),
  BRANDMARK: existsSync(new URL('../public/logo.png', import.meta.url))
    ? `<img class="brand-logo" src="/logo.png" width="2172" height="724" alt="${e(c.confirmed.businessName)}" decoding="async">`
    : 'clasesramos<wbr>denegocios.cl',
  WA: e(whatsapp()), WAICON: whatsappIcon, HEADLINE: e(c.proposedCopy.hero.headline), TAGLINE: e(c.confirmed.tagline),
  SUPPORT: e(c.proposedCopy.hero.support), GROUPS: groups,
  SCHOOL: subjects(c.catalog.school.subjects, c.catalog.school.label, 'colegio'),
  INTRO: e(c.proposedCopy.instructor.introduction), YEAR: new Date().getFullYear(),
  ONLINE: e(c.proposedCopy.modalities.online.description), INPERSON: e(c.proposedCopy.modalities.inPerson.description),
};
let html = readFileSync(new URL('../src/page.html', import.meta.url), 'utf8');
html = html.replace(/\{\{([A-Z]+)\}\}/g, (_, key) => {
  if (!(key in tokens)) throw new Error(`Unknown template token: ${key}`);
  return tokens[key];
});
writeFileSync(new URL('../index.html', import.meta.url), html);
console.log(`Generated index.html with ${c.catalog.expectedEntryCounts.total} static subject links.`);
