(function () {
  const viewer = document.querySelector('.photo-viewer');
  const viewerImage = viewer.querySelector('.photo-viewer-image');
  const viewerCaption = viewer.querySelector('.photo-viewer-caption');
  let photoTrigger;

  viewer.querySelector('.photo-viewer-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('photo-viewer-open');
    viewerImage.removeAttribute('src');
    photoTrigger?.focus();
  });
  const buttons = document.querySelectorAll('.switch-btn');
  const panels = document.querySelectorAll('.dress-panel');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      panels.forEach((panel) => {
        const active = panel.id === `panel-${button.dataset.target}`;
        panel.classList.toggle('active', active);
        panel.hidden = !active;
      });
    });
  });

  const outfitButtons = document.querySelectorAll('.outfit-btn');
  outfitButtons.forEach((button) => {
    button.addEventListener('click', () => {
      outfitButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      document.querySelectorAll('.outfit-panel').forEach((panel) => {
        panel.hidden = panel.id !== `outfit-${button.dataset.outfit}`;
      });
    });
  });

  const labels = { male: '男賓客穿搭', pants: '女賓客褲裝', skirts: '女賓客裙裝', group: '合照' };
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const category = gallery.dataset.gallery;
    const photos = (window.dressCodePhotos || {})[category] || [];
    if (!photos.length) {
      const message = document.createElement('p');
      message.className = 'gallery-empty';
      message.textContent = '穿搭參考照片準備中';
      gallery.append(message);
    }
    photos.forEach((path, index) => {
      const figure = document.createElement('figure');
      figure.className = 'gallery-item';
      const img = document.createElement('img');
      img.src = path;
      img.alt = `${labels[category]}參考 ${index + 1}`;
      img.loading = 'lazy';
      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'photo-trigger';
      trigger.setAttribute('aria-label', `放大${img.alt}`);
      trigger.setAttribute('aria-haspopup', 'dialog');
      trigger.append(img);
      trigger.addEventListener('click', () => {
        photoTrigger = trigger;
        viewerImage.src = path;
        viewerImage.alt = img.alt;
        viewerCaption.textContent = img.alt;
        viewer.showModal();
        document.body.classList.add('photo-viewer-open');
      });
      const caption = document.createElement('figcaption');
      caption.textContent = `參考 ${index + 1}`;
      figure.append(trigger, caption);
      gallery.append(figure);
    });
  });
})();
