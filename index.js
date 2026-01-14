document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const feedback = document.getElementById('login-feedback');
  const passToggle = document.querySelector('.show-pass');
  const pwd = document.getElementById('password');

  const t = (k) => (window.i18n?.translations?.[window.i18n.getLanguage()]?.[k] || k);

  passToggle?.addEventListener('click', () => {
    const shown = pwd.type === 'text';
    pwd.type = shown ? 'password' : 'text';
    passToggle.setAttribute('aria-pressed', String(!shown));
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    if (!user) {
      feedback.textContent = t('index.username') + ' ' + 'måste anges';
      feedback.style.color = 'var(--LM-incorrect)';
      return;
    }
    feedback.style.color = 'var(--LM-correct)';
    feedback.textContent = `${user} — ${t('index.loginButton')}…`;
    // save name and go to difficulty (unless already picked)
    try { localStorage.setItem('playerName', user); } catch (e) {}
    const dest = localStorage.getItem('difficulty') ? 'karta.html' : 'question.html';
    setTimeout(() => { window.location.href = dest; }, 550);
  });
});