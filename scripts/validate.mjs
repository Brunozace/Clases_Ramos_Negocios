import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { content as c, message } from './content.mjs';

const root = new URL('../dist/', import.meta.url);
const html = readFileSync(new URL('index.html', root), 'utf8');
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attrs = (s) => Object.fromEntries([...s.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], decode(m[2])]));
const anchors = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map(m => ({ ...attrs(m[1]), text: decode(m[2].replace(/<[^>]+>/g, '')) }));
const expected = c.catalog.universityAndMba.groups.flatMap(g => g.subjects.map(subject => ({ subject, level: c.catalog.universityAndMba.label, group: g.id })))
  .concat(c.catalog.school.subjects.map(subject => ({ subject, level: c.catalog.school.label, group: 'colegio' })));
const subjects = anchors.filter(a => a['data-subject']);
assert.equal(subjects.length, c.catalog.expectedEntryCounts.total, 'Expected subject count');
assert.deepEqual(subjects.map(a => ({ subject: a['data-subject'], level: a['data-level'], group: a['data-group'] })), expected, 'Exact catalog, grouping and order');
for (const a of subjects) assert.ok(a.text.includes(a['data-subject']), 'Visible name matches catalog');
const contact = anchors.filter(a => a.href?.startsWith('https://wa.me/'));
assert.equal(contact.length - subjects.length, 6, 'All six general contact links exist');
for (const a of contact) {
  const url = new URL(a.href);
  assert.equal(url.pathname, '/' + c.confirmed.contact.whatsappDigits, 'Correct recipient');
  assert.equal(url.searchParams.get('text'), message(a['data-subject'], a['data-level']), 'Correct decoded Spanish draft and level');
  assert.ok(a.text.trim(), 'Named link');
  assert.ok(!a.target, 'Same-tab handoff');
}
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.equal((html.match(/<section\b/g) || []).length, 5);
assert.ok(html.includes('lang="es-CL"'));
assert.ok(html.includes('Conoce a Andrés'));
assert.ok(html.includes(c.proposedCopy.instructor.introduction));
const instructorSection = html.match(/<section id="modalidades"[\s\S]*?<\/section>/)?.[0];
assert.ok(instructorSection && !instructorSection.includes('<img'), 'No substitute instructor portrait or placeholder');
assert.ok(!html.includes('<form'), 'No inquiry forms');
assert.ok(html.includes(c.confirmed.contact.phoneDisplay));
assert.ok(html.includes(`data-phone="${c.confirmed.contact.phoneDisplay}"`), 'Copy-number uses the current contact');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
for (const a of anchors.filter(a => a.href?.startsWith('#'))) assert.ok(ids.has(a.href.slice(1)), 'Valid anchor: ' + a.href);
for (const m of html.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)) assert.ok(existsSync(new URL(m[1].slice(1), root)), 'Local asset exists: ' + m[1]);
for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
  for (const candidate of m[1].split(',')) {
    const path = candidate.trim().split(/\s+/)[0];
    if (path.startsWith('/')) assert.ok(existsSync(new URL(path.slice(1), root)), 'Responsive image exists: ' + path);
  }
}
function scan(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) { scan(path); continue; }
    if (!/\.(?:html|css|js|json|txt|xml|svg)$/i.test(entry.name)) continue;
    const source = readFileSync(path, 'utf8');
    assert.ok(!/7549[\s-]*1987/.test(source), 'Superseded contact absent');
    assert.ok(!/foto pendiente|photo pending|\{\{[A-Z]+\}\}/i.test(source), 'No unresolved placeholders');
  }
}
scan(fileURLToPath(root));
const production = process.argv.includes('--production');
const robots = readFileSync(new URL('robots.txt', root), 'utf8');
if (production) {
  assert.ok(!html.includes('noindex'));
  assert.ok(html.includes('rel="canonical" href="https://clasesramosdenegocios.cl/"'));
  assert.ok(html.includes('property="og:url" content="https://clasesramosdenegocios.cl/"'));
  assert.ok(robots.includes('Sitemap: https://clasesramosdenegocios.cl/sitemap.xml'));
  assert.ok(readFileSync(new URL('sitemap.xml', root), 'utf8').includes('<loc>https://clasesramosdenegocios.cl/</loc>'));
} else {
  assert.ok(html.includes('content="noindex, nofollow"'));
  assert.ok(!html.includes('rel="canonical"'));
  assert.ok(!html.includes('property="og:url"'));
  assert.ok(!existsSync(new URL('sitemap.xml', root)));
  assert.ok(!robots.includes('Sitemap:'));
}
console.log(`PASS: ${subjects.length} catalog entries, ${contact.length} WhatsApp destinations/drafts, anchors, local assets, factual profile and ${production ? 'production' : 'review'} metadata.`);
