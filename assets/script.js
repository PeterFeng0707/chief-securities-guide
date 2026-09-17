document.addEventListener('DOMContentLoaded', () => {
  const tocHeader = document.querySelector('.toc-header');
  const tocList = document.querySelector('.toc-list');
  const tocToggle = document.querySelector('.toc-toggle');

  if (tocHeader) {
    tocHeader.addEventListener('click', () => {
      tocList.classList.toggle('collapsed');
      tocToggle.classList.toggle('open');
    });
  }

  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      q.closest('.faq-item').classList.toggle('open');
    });
  });

  const fixedCta = document.querySelector('.fixed-cta');
  const backToTop = document.getElementById('backToTop');
  const scrollProgress = document.getElementById('scrollProgress');

  if (fixedCta) {
    fixedCta.style.transform = 'translateY(100%)';
    fixedCta.style.transition = 'transform 0.3s ease';
  }

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (y / docH) * 100 : 0;

    if (fixedCta) fixedCta.style.transform = y > 400 ? 'translateY(0)' : 'translateY(100%)';
    if (scrollProgress) scrollProgress.style.width = pct + '%';
    if (backToTop) backToTop.classList.toggle('visible', y > 600);
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  document.querySelectorAll('.step-gallery-item img, .single-image img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target !== lightboxImg) closeLightbox();
    });
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }
});
