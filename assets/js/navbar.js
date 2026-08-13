/* Mobile hamburger, dropdown toggling on touch, active-link highlighting */
(function () {
  const hamburger = document.querySelector('.hamburger');
  const mainNav = document.querySelector('.main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mainNav.classList.toggle('open');
    });
  }

  // On mobile, dropdown items need a tap-to-open instead of hover
  document.querySelectorAll('.has-dropdown > a').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth > 768) return;
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    });
  });

  // Close mobile menu after a nav link is clicked
  document.querySelectorAll('.main-nav a:not(.has-dropdown > a)').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      mainNav?.classList.remove('open');
    });
  });
})();
