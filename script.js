const toggle = document.querySelector('.menu-toggle');
const panel = document.querySelector('.mobile-panel');

if (toggle && panel) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    panel.classList.toggle('open');
  });

  panel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
