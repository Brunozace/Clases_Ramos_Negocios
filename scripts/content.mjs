import { readFileSync } from 'node:fs';

export const content = JSON.parse(readFileSync(new URL('../clases-codex-kit/02_CONTENT.json', import.meta.url), 'utf8'));
export const escape = (text) => String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
export function message(subject, level) {
  return subject
    ? content.proposedCopy.whatsapp.subjectTemplate.replace('{ramo}', subject).replace('{nivel}', level)
    : content.proposedCopy.whatsapp.generalMessage;
}
export function whatsapp(subject, level) {
  return `${content.confirmed.contact.whatsappBaseUrl}?text=${encodeURIComponent(message(subject, level))}`;
}
