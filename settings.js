// ...new file...
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  const t = (k) => (window.i18n?.translations?.[window.i18n.getLanguage()]?.[k] || k);

  function updateText() {
    if (logoutBtn) logoutBtn.textContent = t('settings.logout');
  }

  logoutBtn?.addEventListener('click', () => {
    const confirmMsg = t('settings.logoutConfirm') || 'Är du säker att du vill logga ut?';
    if (!confirm(confirmMsg)) return;
    try {
      localStorage.removeItem('playerName');
      localStorage.removeItem('authToken'); // safe to remove if present
    } catch (e) {}
    logoutBtn.disabled = true;
    logoutBtn.textContent = t('settings.loggingOut') || 'Loggar ut…';
    setTimeout(() => { window.location.href = 'index.html'; }, 350);
  });

  document.getElementById('restartTourBtn')?.addEventListener('click', () => {
    try { localStorage.removeItem('onboardingSeen'); } catch(e) {}
    window.onboarding?.start(true);
  });

  updateText();
  document.addEventListener('i18n:languagechange', updateText);
});