document.addEventListener('DOMContentLoaded', () => {
  const navHTML = `
    <nav class="main-nav">
      <a href="index.html">Home</a>
      <a href="projects.html">Projects</a>
      <a href="docs.html">Documentation</a>
    </nav>
  `;
  document.querySelector('.nav-placeholder').innerHTML = navHTML;

  // Active link highlighting
  const navLinks = document.querySelectorAll('.main-nav a');
  const currentPage = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    }
  });
});
