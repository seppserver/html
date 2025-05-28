document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('project-list');

  fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
      container.innerHTML = '';
      projects.forEach(project => {
        const projectElement = document.createElement('article');
        projectElement.classList.add('project-card');
        projectElement.innerHTML = `
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <p><a href="${project.link}" target="_blank">View Project</a></p>
        `;
        container.appendChild(projectElement);
      });
    })
    .catch(error => {
      container.innerHTML = '<p>Error loading projects.</p>';
      console.error('Project loading failed:', error);
    });
});
