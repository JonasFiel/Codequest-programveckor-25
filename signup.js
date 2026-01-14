document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const feedback = document.getElementById('signup-feedback');
  const t = (k) => (window.i18n?.translations?.[window.i18n.getLanguage()]?.[k] || k);

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('su-username').value.trim();
    const pass = document.getElementById('su-password').value;
    const conf = document.getElementById('su-confirm').value;
    if (!user || !pass) {
      feedback.style.color = 'var(--LM-incorrect)';
      feedback.textContent = t('signup.username') + ' ' + 'måste anges';
      return;
    }
    if (pass !== conf) {
      feedback.style.color = 'var(--LM-incorrect)';
      feedback.textContent = t('signup.passwordMismatch') || 'Lösenorden matchar inte.';
      return;
    }
    feedback.style.color = 'var(--LM-correct)';
    feedback.textContent = t('signup.success') || 'Konto skapat!';
    try { localStorage.setItem('playerName', user); } catch (e) {}
    setTimeout(() => { window.location.href = 'question.html'; }, 700);
  });
});