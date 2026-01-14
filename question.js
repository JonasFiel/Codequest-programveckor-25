document.addEventListener('DOMContentLoaded', () => {
  const radios = Array.from(document.querySelectorAll('.btn.diff'));
  const startBtn = document.getElementById('diffStart');
  const feedback = document.getElementById('diff-feedback');
  const group = document.querySelector('.diff-row');
  const t = (k) => (window.i18n?.translations?.[window.i18n.getLanguage()]?.[k] || k);

  let selected = localStorage.getItem('difficulty') || null;

  function updateSelectionUI(focus = false) {
    radios.forEach((r) => {
      const isActive = r.dataset.difficulty === selected;
      r.classList.toggle('active', isActive);
      r.setAttribute('aria-checked', String(isActive));
      r.setAttribute('aria-pressed', String(isActive));
      r.tabIndex = isActive ? 0 : -1;
      if (isActive && focus) r.focus();
    });
    startBtn.disabled = !selected;
    if (selected) {
      feedback.textContent = `${t('question.selected')}: ${t('question.' + selected) || selected}`;
      feedback.style.color = 'var(--LM-correct)';
    } else {
      feedback.textContent = t('question.selectPrompt') || '';
      feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--DM-text-color');
    }
  }

  function selectDifficulty(value, focus = true) {
    selected = value;
    try { localStorage.setItem('difficulty', selected); } catch (e) {}
    updateSelectionUI(focus);
  }

  updateSelectionUI(false);

  radios.forEach((r, idx) => {
    r.addEventListener('click', () => selectDifficulty(r.dataset.difficulty, true));
    r.addEventListener('keydown', (e) => {
      if (['ArrowLeft','ArrowUp'].includes(e.key)) { e.preventDefault(); selectDifficulty(radios[(idx-1+radios.length)%radios.length].dataset.difficulty, true); }
      else if (['ArrowRight','ArrowDown'].includes(e.key)) { e.preventDefault(); selectDifficulty(radios[(idx+1)%radios.length].dataset.difficulty, true); }
      else if (e.key === 'Home') { e.preventDefault(); selectDifficulty(radios[0].dataset.difficulty, true); }
      else if (e.key === 'End') { e.preventDefault(); selectDifficulty(radios[radios.length-1].dataset.difficulty, true); }
      else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); selectDifficulty(r.dataset.difficulty, true); }
    });
  });

  group.addEventListener('click', (e) => {
    if (e.target === group) {
      const selEl = radios.find(r => r.dataset.difficulty === selected) || radios[0];
      selEl && selEl.focus();
    }
  });

  startBtn.addEventListener('click', () => {
    if (!selected) {
      feedback.textContent = t('question.selectPrompt') || 'Select a difficulty';
      feedback.style.color = 'var(--LM-incorrect)';
      return;
    }
    feedback.textContent = t('question.redirect') || 'Starting…';
    feedback.style.color = 'var(--LM-correct)';
    setTimeout(() => { window.location.href = 'karta.html'; }, 600);
  });

  document.addEventListener('i18n:languagechange', () => updateSelectionUI(false));
});