document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggle-mode');
  const body = document.body;

  function applyMode(mode) {
    if (mode === 'dark') {
      body.classList.add('dark-mode');
      button.textContent = '☀️ Light Mode';
    } else {
      body.classList.remove('dark-mode');
      button.textContent = '🌙 Dark Mode';
    }
  }

  const savedMode = localStorage.getItem('mode') || 'light';
  applyMode(savedMode);

  button.addEventListener('click', () => {
    const newMode = body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('mode', newMode);
    applyMode(newMode);
  });
});
