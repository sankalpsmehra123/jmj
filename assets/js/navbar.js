/* Mobile hamburger toggle; close the off-canvas menu after a nav link is clicked */
(function () {
  const hamburger = document.querySelector('.hamburger');
  const mainNav = document.querySelector('.main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mainNav.classList.toggle('open');
    });
  }

  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      mainNav?.classList.remove('open');
    });
  });
})();
