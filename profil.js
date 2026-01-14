document.addEventListener('DOMContentLoaded', () => {
  // animate XP bar from data attributes
  const xpBar = document.querySelector('.xp-bar');
  if (xpBar) {
    const cur = Number(xpBar.dataset.current || xpBar.getAttribute('aria-valuenow') || 0);
    const max = Number(xpBar.dataset.max || xpBar.getAttribute('aria-valuemax') || 100);
    const fill = xpBar.querySelector('.xp-fill');
    const pct = Math.max(0, Math.min(100, Math.round((cur / max) * 100)));
    requestAnimationFrame(() => { fill.style.width = pct + '%'; xpBar.setAttribute('aria-valuenow', String(cur)); document.querySelector('.xp-numbers').textContent = `${cur} / ${max}`; });
  }

  // localization helper
  const t = (key) => {
    try {
      const lang = window.i18n.getLanguage();
      return window.i18n.translations[lang][key] || window.i18n.translations.sv[key] || key;
    } catch (e) { return key; }
  };

  // Edit profile name and persist to localStorage
  const nameEl = document.querySelector('.player-name');
  const editBtn = document.getElementById('editProfile');
  const savedName = localStorage.getItem('playerName');
  if (savedName && nameEl) nameEl.textContent = savedName;
  if (editBtn) editBtn.textContent = t('btn.edit');

  editBtn?.addEventListener('click', () => {
    if (!nameEl) return;
    const editing = nameEl.isContentEditable;
    if (editing) {
      nameEl.contentEditable = 'false';
      editBtn.textContent = t('btn.edit');
      localStorage.setItem('playerName', nameEl.textContent.trim());
    } else {
      nameEl.contentEditable = 'true';
      nameEl.focus();
      editBtn.textContent = t('btn.save');
    }
  });

  // start quest
  document.getElementById('startQuest')?.addEventListener('click', () => {
    window.location.href = 'karta.html';
  });

  // simple keyboard access for inventory
  document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); } });
    item.addEventListener('click', () => {
      const labelEl = item.querySelector('.item-name');
      const name = (labelEl && labelEl.textContent) ? labelEl.textContent.trim() : (item.dataset.name || 'Föremål');
      const inInventory = (window.i18n && window.i18n.translations) ? (window.i18n.translations[window.i18n.getLanguage()]?.['item.inInventory'] || '(Detta föremål är i ditt inventar.)') : '(Detta föremål är i ditt inventar.)';
      alert(`${name}\n\n${inInventory}`);
    });
  });

  // react to language changes (update dynamic stateful labels)
  document.addEventListener('i18n:languagechange', () => {
    if (editBtn && nameEl) {
      const editing = nameEl.isContentEditable;
      editBtn.textContent = editing ? t('btn.save') : t('btn.edit');
    }
  });
});