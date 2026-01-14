// Apply saved theme immediately, then wire controls on DOMContentLoaded.
// Saves selection in localStorage under key 'theme' ('light' or 'dark').
(function () {
  const KEY = 'theme';
  const root = document.documentElement;

  function applyTheme(value) {
    if (value === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme'); // keep your DM vars as default
    try { localStorage.setItem(KEY, value === 'light' ? 'light' : 'dark'); } catch (e) {}
    document.querySelectorAll('[data-theme-select]').forEach(s => s.value = value === 'light' ? 'light' : 'dark');
    document.querySelectorAll('[data-theme-toggle]').forEach(b => b.setAttribute('aria-pressed', String(value === 'light')));
  }

  // initial (synchronous) apply to avoid flicker
  const saved = (function () { try { return localStorage.getItem(KEY); } catch (e) { return null; } })();
  applyTheme(saved === 'light' ? 'light' : 'dark');

  // public API
  window.theme = {
    set: applyTheme,
    get: () => root.getAttribute('data-theme') === 'light' ? 'light' : 'dark',
    toggle: () => applyTheme(window.theme.get() === 'light' ? 'dark' : 'light')
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-theme-select]').forEach(select => {
      select.value = window.theme.get();
      select.addEventListener('change', () => applyTheme(select.value));
    });
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.setAttribute('aria-pressed', window.theme.get() === 'light');
      btn.addEventListener('click', () => window.theme.toggle());
    });
    const form = document.getElementById('themeForm');
    if (form) form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = form.querySelector('[name="theme"]')?.value;
      if (val) applyTheme(val);
    });
  });
})();