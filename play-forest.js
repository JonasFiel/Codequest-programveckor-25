document.addEventListener('DOMContentLoaded', () => {
  const area = 'forest';
  const diff = window.quiz.getDifficulty();
  const questions = window.quiz.getQuestions(area, 5);
  const multiplier = window.quiz.getMultiplier();

  // visa svårighet i UI (lägg till .difficulty-badge i HTML)
  document.querySelector('.difficulty-badge')?.textContent = (window.i18n?.translations?.[window.i18n.getLanguage()]?.['question.'+diff] || diff);

  let idx = 0, score = 0;
  function render() {
    if (idx >= questions.length) { alert(`Slut! Poäng: ${score}`); return; }
    const q = questions[idx];
    document.getElementById('q-text').textContent = q.q;
    const choices = document.getElementById('q-choices'); choices.innerHTML = '';
    q.choices.forEach((c,i) => {
      const btn = document.createElement('button'); btn.className='btn'; btn.textContent = c;
      btn.onclick = () => { if (i === q.a) score += Math.round(10 * multiplier); idx++; render(); };
      choices.appendChild(btn);
    });
  }
  render();
});