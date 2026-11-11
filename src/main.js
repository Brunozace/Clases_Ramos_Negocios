const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 760px)');
function closeMenu(returnFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
  if (returnFocus) toggle.focus();
}
toggle.hidden = false;
document.documentElement.classList.add('enhanced');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
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
