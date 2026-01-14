// ...new file...
(function () {
  const KEY = 'onboardingSeen';
  const t = k => (window.i18n?.translations?.[window.i18n.getLanguage()]?.[k] || k);

  const DEFAULT_STEPS = {
    '/karta.html': [
      { selector: '.navbar', titleKey: 'tour.nav.title', descKey: 'tour.nav.desc', pos: 'bottom' },
      { selector: '.grid', titleKey: 'tour.map.title', descKey: 'tour.map.desc', pos: 'top' },
      { selector: '.grid-item:first-child', titleKey: 'tour.map.first.title', descKey: 'tour.map.first.desc', pos: 'right' }
    ],
    '/profil.html': [
      { selector: '.avatar', titleKey: 'tour.profile.avatar.title', descKey: 'tour.profile.avatar.desc', pos: 'right' },
      { selector: '.xp-bar', titleKey: 'tour.profile.xp.title', descKey: 'tour.profile.xp.desc', pos: 'bottom' }
    ],
    '/index.html': [
      { selector: '#loginForm', titleKey: 'tour.index.login.title', descKey: 'tour.index.login.desc', pos: 'top' }
    ],
    '/play.html': [
      { selector: '.play-meta', titleKey: 'tour.play.title', descKey: 'tour.play.desc', pos: 'bottom' },
      { selector: '#q-text', titleKey: 'tour.play.question', descKey: 'tour.play.question.desc', pos: 'right' }
    ]
  };

  let overlay, highlight, pop, steps = [], idx = 0, prevActive = null;

  function create() {
    if (overlay) return;
    overlay = document.createElement('div'); overlay.className = 'onboard-overlay';
    highlight = document.createElement('div'); highlight.className = 'onboard-highlight';
    pop = document.createElement('div'); pop.className = 'onboard-pop'; pop.tabIndex = -1;
    overlay.appendChild(highlight); overlay.appendChild(pop);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) finish(); });
    document.addEventListener('keydown', onKey);
  }

  function onKey(e) {
    if (!overlay) return;
    if (e.key === 'Escape') finish();
    if (e.key === 'ArrowRight' || e.key === 'Enter') next();
    if (e.key === 'ArrowLeft') prev();
  }

  function show(i) {
    if (!steps.length || i < 0) return finish();
    if (i >= steps.length) return finish();
    idx = i;
    const step = steps[idx];
    const el = document.querySelector(step.selector);
    if (!el) return show(i + 1);
    prevActive = document.activeElement;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      const r = el.getBoundingClientRect();
      const pad = 8;
      highlight.style.top = window.scrollY + r.top - pad + 'px';
      highlight.style.left = window.scrollX + r.left - pad + 'px';
      highlight.style.width = r.width + pad * 2 + 'px';
      highlight.style.height = r.height + pad * 2 + 'px';
      setPopContent(step, r);
    }, 220);
  }

  function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }

  function setPopContent(step, rect) {
    pop.innerHTML = `
      <h3>${t(step.titleKey)}</h3>
      <p>${t(step.descKey)}</p>
      <div class="onboard-controls">
        <button class="btn outline prev">${t('tour.prev')}</button>
        <button class="btn next">${t('tour.next')}</button>
        <button class="btn" style="margin-left:auto" id="onboard-skip">${t('tour.skip')}</button>
      </div>`;
    const width = Math.min(360, Math.max(260, rect ? rect.width : 300));
    let top = window.scrollY + rect.top - 12 - (rect.height > 160 ? 0 : 0);
    let left = window.scrollX + rect.left;
    // prefer positions but fall back
    if (step.pos === 'bottom') top = window.scrollY + rect.bottom + 12;
    if (step.pos === 'top') top = window.scrollY + rect.top - 12 - 120;
    if (step.pos === 'right') left = window.scrollX + rect.right + 12;
    left = clamp(left, 12, window.innerWidth - width - 12);
    pop.style.top = Math.max(12, top) + 'px';
    pop.style.left = left + 'px';
    pop.style.width = width + 'px';
    pop.querySelector('.prev').onclick = () => prev();
    pop.querySelector('.next').onclick = () => next();
    pop.querySelector('#onboard-skip').onclick = () => finish();
    pop.focus();
  }

  function next() { show(idx + 1); }
  function prev() { show(idx - 1); }

  function start(force = false) {
    if (!force && localStorage.getItem(KEY) === 'true') return;
    steps = DEFAULT_STEPS[location.pathname] || [];
    if (!steps.length) return;
    create();
    show(0);
  }

  function finish() {
    try { localStorage.setItem(KEY, 'true'); } catch (e) {}
    overlay?.remove(); overlay = highlight = pop = null;
    document.removeEventListener('keydown', onKey);
    prevActive?.focus?.();
  }

  window.onboarding = { start, restart: () => { try { localStorage.removeItem(KEY); } catch (e) {} start(true); }, reset: () => { try { localStorage.removeItem(KEY); } catch (e) {} } };

  document.addEventListener('DOMContentLoaded', () => { if (!localStorage.getItem(KEY)) start(); });
})();