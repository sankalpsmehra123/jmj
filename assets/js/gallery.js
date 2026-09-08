(function() {
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid) return;
  
  galleryGrid.innerHTML = ''; // Clear any existing hardcoded items
  
  let currentIndex = 1;
  const batchSize = 12; // Check 12 images at a time (3 rows of 4)
  let consecutiveEmptyBatches = 0;
  
  async function loadGallery() {
    let keepLoading = true;
    
    while (keepLoading) {
      let promises = [];
      for (let i = 0; i < batchSize; i++) {
        const idx = currentIndex + i;
        const n = idx.toString().padStart(2, '0');
        const src = `assets/images/gallery/gallery-${n}.jpg`;
        promises.push(
          checkImageExists(src).then(exists => ({ exists, idx, src }))
        );
      }
      
      const results = await Promise.all(promises);
      let foundInBatch = 0;
      
      results.forEach(res => {
        if (res.exists) {
          foundInBatch++;
          const div = document.createElement('div');
          div.className = 'gallery-item';
          div.innerHTML = `<img src="${res.src}" alt="JMJ Enterprises Solutions work photo ${res.idx}" loading="lazy" />`;
          galleryGrid.appendChild(div);
        }
      });
      
      if (foundInBatch === 0) {
        consecutiveEmptyBatches++;
        if (consecutiveEmptyBatches >= 2) {
          keepLoading = false; // Stop if we get 2 entirely empty batches (24 missing images in a row)
        }
      } else {
        consecutiveEmptyBatches = 0;
      }
      
      currentIndex += batchSize;
    }
  }
  
  function checkImageExists(src) {
    return new Promise((resolve) => {
      fetch(src, { method: 'HEAD' })
        .then(res => resolve(res.ok))
        .catch(() => {
          // Fallback for file:// or CORS fetch errors
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = src;
        });
    });
  }
  
  loadGallery();
})();
