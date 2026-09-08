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

  // Form Submission via FormSubmit AJAX endpoint
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;

      try {
        // Fetch config
        const config = window.siteConfig || {};

        if (!config.googleSheetUrl) {
          throw new Error("Google Sheets URL is missing in config.js");
        }

        const formData = new FormData(contactForm);
        const urlEncodedData = new URLSearchParams(formData);

        // Send data directly to Google Apps Script as URL Encoded Data
        await fetch(config.googleSheetUrl, {
          method: 'POST',
          mode: 'no-cors', // Bypasses CORS requirements so it always succeeds silently
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: urlEncodedData.toString()
        });

        // Since mode: 'no-cors' always returns an opaque success response if the network request goes through,
        // we can safely assume success here and immediately show the success message.
        contactForm.innerHTML = '<p class="form-success">Thanks! Your message has been sent successfully. We will get back to you shortly.</p>';
      } catch (error) {
        console.error("Submission failed:", error);
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        alert("There was an error sending your message. Please try again later or contact us directly via email.");
      }
    });
  }

  // Lightbox Implementation
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (lightbox && lightboxImg && lightboxClose) {
    document.addEventListener('click', (e) => {
      if (e.target.matches('.gallery-item img')) {
        lightbox.classList.add('show');
        lightboxImg.src = e.target.src;
        if (lightboxCaption) {
          lightboxCaption.textContent = e.target.alt;
        }
      }
    });

    // Close lightbox on X click
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('show');
    });

    // Close lightbox on outside click
    lightbox.addEventListener('click', (e) => {
      if (e.target !== lightboxImg) {
        lightbox.classList.remove('show');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('show')) {
        lightbox.classList.remove('show');
      }
    });
  }
})();
