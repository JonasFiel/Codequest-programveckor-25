// ...new file...
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  if (!modal) return;

  const modalImg = modal.querySelector('.modal-img');
  const modalTitle = modal.querySelector('.modal-title');
  const modalText = modal.querySelector('.modal-text');
  const startBtn = modal.querySelector('.modal-start');
  const cancelBtn = modal.querySelector('.modal-cancel');
  const closeButtons = modal.querySelectorAll('[data-close]');

  function t(key) {
    try {
      return window.i18n.translations[window.i18n.getLanguage()][key] || window.i18n.translations.sv[key] || key;
    } catch (e) { return key; }
  }

  function openModal({ src, alt, start, descKey }) {
    modalImg.src = src || '';
    modalImg.alt = alt || '';
    modalTitle.textContent = alt || t('map.title');
    modalText.textContent = descKey ? t(descKey) : t('modal.description');
    startBtn.dataset.start = start || '';
    startBtn.textContent = t('modal.start');
    cancelBtn.textContent = t('modal.cancel');
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    startBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // open modal when clicking a grid item
  document.querySelectorAll('.grid-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      openModal({
        src: img?.src,
        alt: img?.alt || item.querySelector('.grid-label')?.textContent,
        start: img?.dataset.start,
        descKey: img?.dataset?.desc
      });
    });
  });

  // close handlers
  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

  // start navigation
  startBtn.addEventListener('click', () => {
    const href = startBtn.dataset.start;
    if (href) window.location.href = href;
    else closeModal();
  });

  // update texts when language changes
  document.addEventListener('i18n:languagechange', () => {
    startBtn.textContent = t('modal.start');
    cancelBtn.textContent = t('modal.cancel');
    if (modal.classList.contains('open')) {
      const descKey = modalImg.dataset.desc;
      modalText.textContent = descKey ? t(descKey) : t('modal.description');
      modalTitle.textContent = modalImg.getAttribute('alt') || t('map.title');
    }
  });
});