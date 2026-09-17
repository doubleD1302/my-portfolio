import { Project } from '../types';

export class ProjectCard {
  public static render(project: Project, onViewCaseStudy: (project: Project) => void): HTMLElement {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);
    card.setAttribute('data-project-id', project.id);

    // Generate tech stack badges
    const techTagsHtml = project.technologies.map(t => {
      return `<span class="tech-tag">${t.name}</span>`;
    }).join('');

    card.innerHTML = `
      <div class="project-thumbnail-wrapper">
        <span class="project-category-badge">${project.category}</span>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; color: var(--color-primary);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            ${this.getCategoryIcon(project.category)}
          </svg>
          <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--color-text-muted);">${project.slug}</span>
        </div>
      </div>

      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        
        <div class="project-tech-tags">
          ${techTagsHtml}
        </div>

        <div class="project-actions">
          <button class="btn btn-outline btn-sm btn-view-case-study" type="button">
            <span>View Case Study</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div class="project-links">
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-icon btn-ghost btn-sm" aria-label="GitHub Repository" title="GitHub Repository">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            ` : ''}

            ${project.demoUrl ? `
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-icon btn-ghost btn-sm" aria-label="Live Demo" title="Live Demo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    // Hook Case study click
    const btn = card.querySelector<HTMLButtonElement>('.btn-view-case-study');
    btn?.addEventListener('click', () => {
      onViewCaseStudy(project);
    });

    return card;
  }

  private static getCategoryIcon(category: string): string {
    switch (category) {
      case 'Desktop':
        return `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`;
      case 'Database':
        return `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>`;
      case 'Backend':
        return `<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>`;
      case 'Web':
      default:
        return `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`;
    }
  }
}
