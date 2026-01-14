document.addEventListener('DOMContentLoaded', () => {
  const answers = {
    q1: 'B',
    q2: 'C',
    a3: '15',
    a4: '1020',
    a5: 'href',
    a6: 'color',
    a7: 'src',
    // flexible matching for code tasks
  };

  function normalize(s) { return String(s||'').trim().replace(/\s+/g,' ').toLowerCase(); }

  const checkBtn = document.getElementById('checkQuiz');
  const resetBtn = document.getElementById('resetQuiz');
  const resultEl = document.getElementById('quiz-result');

  checkBtn.addEventListener('click', () => {
    let score = 0, total = 10;

    const q1 = document.querySelector('input[name="q1"]:checked')?.value || '';
    const q2 = document.querySelector('input[name="q2"]:checked')?.value || '';
    if (q1 === answers.q1) score++;
    if (q2 === answers.q2) score++;

    if (normalize(document.getElementById('a3').value) === answers.a3) score++;
    if (normalize(document.getElementById('a4').value) === answers.a4) score++;
    if (normalize(document.getElementById('a5').value) === answers.a5) score++;
    if (normalize(document.getElementById('a6').value) === answers.a6) score++;
    if (normalize(document.getElementById('a7').value) === answers.a7) score++;

    // code tasks: simple contains checks
    const a8 = normalize(document.getElementById('a8').value);
    if (a8.includes('button') && a8.includes('anfalla')) score++;

    const a9 = normalize(document.getElementById('a9').value);
    if (a9.includes('background-color') && a9.includes('black')) score++;

    const a10 = normalize(document.getElementById('a10').value);
    if (a10.includes('<ul') && a10.includes('svärd')) score++;

    resultEl.innerHTML = `<strong>Resultat:</strong> ${score} / ${total}.<br><br>
      Rätta svar:<br>
      1) B — &lt;h1&gt;.<br>
      2) C — &lt;body&gt;.<br>
      3) 15.<br>
      4) 1020.<br>
      5) href.<br>
      6) color.<br>
      7) src.<br>
      8) &lt;button&gt;Anfalla&lt;/button&gt;.<br>
      9) body { background-color: black; }.<br>
      10) &lt;ul&gt;&lt;li&gt;Svärd&lt;/li&gt;&lt;/ul&gt;.
    `;
  });

  resetBtn.addEventListener('click', () => {
    document.querySelectorAll('input[type="radio"]').forEach(i => i.checked = false);
    document.querySelectorAll('input[type="text"]').forEach(i => i.value = '');
    resultEl.textContent = '';
  });
});