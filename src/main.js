const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 760px)');
function closeMenu(returnFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.querySelector('.visually-hidden').textContent = 'Abrir menú';
  nav.classList.remove('is-open');
  if (returnFocus) toggle.focus();
}
toggle.hidden = false;
document.documentElement.classList.add('enhanced');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.visually-hidden').textContent = open ? 'Cerrar menú' : 'Abrir menú';
  nav.classList.toggle('is-open', open);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
nav.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || !mobile.matches) return;
  closeMenu();
  if (link.hash && link.origin === location.origin) {
    const target = document.querySelector(link.hash);
    target?.setAttribute('tabindex', '-1');
    target?.focus({ preventScroll: true });
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
mobile.addEventListener('change', () => closeMenu());
const copy = document.querySelector('#copy-phone');
const status = document.querySelector('#copy-status');
copy.hidden = false;
copy.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copy.dataset.phone);
    status.textContent = 'Número copiado';
  } catch {
    status.textContent = 'No se pudo copiar. Selecciona el número y cópialo manualmente.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();

// Scroll reveals respect reduced motion; the study strip runs continuously as requested.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const studyStrip = document.querySelector('.study-strip');
const stripTrack = studyStrip.querySelector('.study-strip-track');
// Equal-width copies make the loop seamless; assistive technology reads it once.
const stripCopy = stripTrack.firstElementChild.cloneNode(true);
stripCopy.setAttribute('aria-hidden', 'true');
stripTrack.append(stripCopy);
studyStrip.classList.add('is-animated');

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach((element) => {
    if (element.getBoundingClientRect().top >= window.innerHeight) {
      element.classList.add('reveal-pending');
      reveal.observe(element);
    }
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      reveal.disconnect();
      document.querySelectorAll('.reveal-pending').forEach(el => el.classList.remove('reveal-pending'));
    }
  });
}

const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Native details remain keyboard-accessible and functional without JavaScript.
const questions = [...document.querySelectorAll('.faq-list details')];
questions.forEach((question) => question.addEventListener('toggle', () => {
  if (question.open) questions.filter(other => other !== question).forEach(other => { other.open = false; });
}));

if ('IntersectionObserver' in window) {
  const sections = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      nav.querySelectorAll('a').forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('main > section').forEach(section => sections.observe(section));
}
