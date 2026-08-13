/* Sticky header shadow, smooth scroll for in-page anchors, footer year, general init */
(function () {
  const header = document.querySelector('.site-header');

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const yearEl = document.querySelector('[data-current-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // No backend wired up yet — swap this for a real submit (fetch/mailto endpoint)
  // once one exists. For now, just confirm receipt instead of reloading the page.
  const contactForm = document.querySelector('.contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.innerHTML = '<p class="form-success">Thanks! Your message has been noted &mdash; we\'ll get back to you shortly.</p>';
  });
})();
