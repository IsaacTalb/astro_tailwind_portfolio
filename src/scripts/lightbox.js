// Simple lightbox script for the Gallery page
const buttons = Array.from(document.querySelectorAll('[data-lightbox]'));
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbCaption = document.getElementById('lightbox-caption');
const lbClose = document.getElementById('lightbox-close');

if(buttons.length && lightbox){
  const open = (src, caption, alt) => {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lbCaption.textContent = caption || '';
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  const close = () => {
    lightbox.classList.add('hidden');
    lbImg.src = '';
    lbCaption.textContent = '';
    document.body.style.overflow = '';
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const src = btn.dataset.lightbox;
      const caption = btn.dataset.caption;
      const alt = btn.getAttribute('aria-label') || '';
      open(src, caption, alt);
    });

    btn.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  lbClose.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') close();
  });
}
