import { readFileSync } from 'node:fs';

export const content = JSON.parse(readFileSync(new URL('../clases-codex-kit/02_CONTENT.json', import.meta.url), 'utf8'));
// Current client-approved catalog overrides the preserved original handoff.
content.catalog = JSON.parse(readFileSync(new URL('../src/catalog.json', import.meta.url), 'utf8'));
// Bruno's latest phone correction supersedes the contact in the archived kit.
content.confirmed.contact = JSON.parse(readFileSync(new URL('../src/contact.json', import.meta.url), 'utf8'));
// Latest client identity and nationwide online coverage supersede the archived copy.
export const profile = JSON.parse(readFileSync(new URL('../src/profile.json', import.meta.url), 'utf8'));
content.confirmed.providerName = profile.name;
content.proposedCopy.hero.support = profile.heroSupport;
content.proposedCopy.instructor.introduction = profile.introduction;
content.proposedCopy.modalities.online.description = profile.onlineDescription;
content.proposedCopy.seo = { title: profile.seoTitle, description: profile.seoDescription };
export const escape = (text) => String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
export function message(subject, level) {
  return subject
    ? content.proposedCopy.whatsapp.subjectTemplate.replace('{ramo}', subject).replace('{nivel}', level)
    : content.proposedCopy.whatsapp.generalMessage;
}
export function whatsapp(subject, level) {
  return `${content.confirmed.contact.whatsappBaseUrl}?text=${encodeURIComponent(message(subject, level))}`;
}
