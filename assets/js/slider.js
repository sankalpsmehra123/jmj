/* Simple prev/next scroller for the client-logo strip (and reusable for gallery) */
(function () {
  document.querySelectorAll('[data-slider]').forEach((slider) => {
    const track = slider.querySelector('[data-slider-track]');
    const prevBtn = slider.querySelector('[data-slider-prev]');
    const nextBtn = slider.querySelector('[data-slider-next]');
    if (!track) return;

    const scrollByAmount = () => track.clientWidth * 0.6;

    prevBtn?.addEventListener('click', () => {
      track.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' });
    });
    nextBtn?.addEventListener('click', () => {
      track.scrollBy({ left: scrollByAmount(), behavior: 'smooth' });
    });
  });
})();
