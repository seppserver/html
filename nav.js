document.addEventListener('DOMContentLoaded', () => {
  const navHTML = `
    <button id="menu-toggle" aria-label="Toggle navigation">☰ Menu</button>
    <nav class="main-nav" id="main-nav">
      <a href="index.html">Home</a>
      <a href="projects.html">Projects</a>
      <a href="docs.html">Documentation</a>
    </nav>
  `;
  document.querySelector('.nav-placeholder').innerHTML = navHTML;

  // Toggle mobile menu
  const toggleButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('nav-visible');
  });

  // Highlight current page
  const navLinks = nav.querySelectorAll('a');
  const currentPage = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    }
  });
});
