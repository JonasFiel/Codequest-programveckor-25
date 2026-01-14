document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const area = params.get('area');
  if (!area) { window.location.href = 'karta.html'; return; }

  const t = k => (window.i18n?.translations?.[window.i18n.getLanguage()]?.[k] || k);
  const titleEl = document.getElementById('areaTitle');
  const diffBadge = document.querySelector('.difficulty-badge');
  const progressEl = document.getElementById('progress');
  const scoreEl = document.getElementById('score');
  const qText = document.getElementById('q-text');
  const qChoices = document.getElementById('q-choices');
  const skipBtn = document.getElementById('skipBtn');

  const difficulty = window.quiz.getDifficulty();
  diffBadge.textContent = t('question.' + difficulty) || difficulty;
  titleEl.textContent = window.i18n?.translations?.[window.i18n.getLanguage()]?.[`area.${area}`] || area;

  const questions = window.quiz.getQuestions(area, 6);
  if (!questions.length) { qText.textContent = t('play.noQuestions') || 'Inga frågor för detta område.'; return; }

  let idx = 0;
  let score = 0;
  const multiplier = window.quiz.getMultiplier();

  function render() {
    const q = questions[idx];
    progressEl.textContent = `${idx + 1} / ${questions.length}`;
    scoreEl.textContent = `${t('play.score')}: ${score}`;
    qText.textContent = window.quiz.textOf(q.q);
    qChoices.innerHTML = '';
    q.choices.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'btn choice';
      btn.textContent = window.quiz.textOf(c);
      btn.disabled = false;
      btn.addEventListener('click', () => {
        handleAnswer(i === q.a, i, q.a, btn);
      });
      qChoices.appendChild(btn);
    });
  }

  function handleAnswer(isCorrect, chosen, correctIndex, btnEl) {
    Array.from(qChoices.children).forEach(b => b.disabled = true);
    if (isCorrect) {
      btnEl.classList.add('correct');
      score += 10 * multiplier;
      showFlash(t('play.correct') || 'Rätt!');
    } else {
      btnEl.classList.add('wrong');
      qChoices.children[correctIndex]?.classList?.add('correct');
      showFlash(t('play.wrong') || 'Fel');
    }
    scoreEl.textContent = `${t('play.score')}: ${score}`;
    setTimeout(() => {
      idx++;
      if (idx >= questions.length) finish(); else render();
    }, 900);
  }

  function showFlash(msg) {
    const el = document.createElement('div'); el.className = 'toast'; el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(()=> el.classList.add('visible'));
    setTimeout(()=> { el.classList.remove('visible'); setTimeout(()=> el.remove(), 250); }, 900);
  }

  function finish() {
    const prevXp = Number(localStorage.getItem('xp') || 0);
    const gained = score;
    localStorage.setItem('xp', String(prevXp + gained));
    alert(`${t('play.finish') || 'Klart!'}\n${t('play.score')}: ${score}\n${t('play.xpGained')}: ${gained}`);
    window.location.href = 'karta.html';
  }

  skipBtn.addEventListener('click', () => { if (confirm(t('play.confirmExit') || 'Avbryt och gå tillbaka?')) window.location.href = 'karta.html'; });

  document.addEventListener('i18n:languagechange', () => {
    diffBadge.textContent = t('question.' + window.quiz.getDifficulty());
    titleEl.textContent = window.i18n?.translations?.[window.i18n.getLanguage()]?.[`area.${area}`] || area;
  });

  render();
});