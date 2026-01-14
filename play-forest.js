document.addEventListener('DOMContentLoaded', () => {
  const answers = {
    q1: 'C', // <title>
    q2: 'B', // font-size
    a3: '80',
    a4: 'magisk sköld',
    a5: 'alt',
    a6: 'center',
    a7: 'const',
    // code tasks: flexible checks
  };

  const normalize = s => String(s||'').trim().replace(/\s+/g,' ').toLowerCase();

  const resultEl = document.getElementById('quiz-result');
  const checkBtn = document.getElementById('checkQuiz');
  const resetBtn = document.getElementById('resetQuiz');

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

    const a8 = normalize(document.getElementById('a8').value);
    if (a8.includes('<p') && a8.includes('välkommen')) score++;

    const a9 = normalize(document.getElementById('a9').value);
    if (a9.includes('xp') && a9.includes('0')) score++;

    const a10 = normalize(document.getElementById('a10').value);
    if (a10.includes('h1') && a10.includes('color') && a10.includes('green')) score++;

    resultEl.innerHTML = `<strong>Resultat:</strong> ${score} / ${total}.<br><br>
      Rätta svar och förklaringar:<br>
      1) C — &lt;title&gt; styr texten i fliken.<br>
      2) B — font-size ändrar textstorlek.<br>
      3) 80 — 100-20 = 80.<br>
      4) Magisk Sköld — strängar sätts ihop.<br>
      5) alt — alternativ text för bilder.<br>
      6) center — centrerar text horisontellt.<br>
      7) const — skapa en konstant.<br>
      8) &lt;p&gt;Välkommen till koden!&lt;/p&gt;.<br>
      9) let xp = 0; (eller var/const).<br>
      10) h1 { color: green; }.
    `;
  });

  resetBtn.addEventListener('click', () => {
    document.querySelectorAll('input[type="radio"]').forEach(i => i.checked = false);
    document.querySelectorAll('input[type="text"]').forEach(i => i.value = '');
    resultEl.textContent = '';
  });
});