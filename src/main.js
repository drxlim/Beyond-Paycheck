const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

// Demonstrate the RSVP flow without storing or transmitting personal data.
const form = document.querySelector('#registration-form');
const result = document.querySelector('#registration-result');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  result.textContent = 'Demo complete — this is where your registration confirmation would appear. No booking has been made and no details have been sent or stored.';
  result.classList.add('demo-success');
  result.setAttribute('tabindex', '-1');
  form.reset();
  result.focus();
});
document.querySelector('#year').textContent = new Date().getFullYear();
