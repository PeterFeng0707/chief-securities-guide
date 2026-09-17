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
  if (fixedCta) {
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      fixedCta.style.transform = y > 400 ? 'translateY(0)' : 'translateY(100%)';
      lastY = y;
    }, { passive: true });
    fixedCta.style.transform = 'translateY(100%)';
    fixedCta.style.transition = 'transform 0.3s ease';
  }
});
