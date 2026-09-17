import { skillGroups } from '../data/skills.data';
import { TechArchitecture } from './TechArchitecture';

export class Skills {
  public static onTechSelect?: (techId: string) => void;

  public static render(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'section-wrapper';
    section.id = 'skills';

    section.innerHTML = `
      <div class="container-custom">
        <div class="section-header">
          <div class="section-badge">Capabilities</div>
          <h2 class="section-title">Technical Skills</h2>
          <p class="section-subtitle">
            Structured into engineering disciplines without arbitrary percentages. Click any technology to filter related software projects.
          </p>
        </div>

        <div class="skills-groups-wrapper">
          ${skillGroups.map(group => `
            <div class="skill-category-card">
              <div class="skill-category-header">
                <div>
                  <h3 class="skill-category-title">${group.title}</h3>
                  <p class="skill-category-desc">${group.description}</p>
                </div>
              </div>
              <div class="skill-chips-grid">
                ${group.skills.map(skill => `
                  <button class="skill-chip" data-tech-id="${skill.id}" title="Filter projects using ${skill.name}">
                    <span class="skill-chip-icon">
                      ${this.getTechIcon(skill.id)}
                    </span>
                    <span>${skill.name}</span>
                    ${skill.badge ? `<span class="skill-chip-badge">${skill.badge}</span>` : ''}
                  </button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Integrated Architecture Visualization -->
        <div id="tech-arch-slot" style="margin-top: 3rem;"></div>
      </div>
    `;

    // Mount architecture visualization
    const archSlot = section.querySelector('#tech-arch-slot');
    if (archSlot) {
      archSlot.appendChild(TechArchitecture.render());
    }

    // Attach click listeners to chips
    const chips = section.querySelectorAll<HTMLButtonElement>('.skill-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const techId = chip.getAttribute('data-tech-id');
        if (techId && Skills.onTechSelect) {
          Skills.onTechSelect(techId);

          // Scroll to projects section
          const projSec = document.getElementById('projects');
          if (projSec) {
            projSec.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    return section;
  }

  public static getTechIcon(techId: string): string {
    // Return crisp SVG symbols for tech icons
    switch (techId) {
      case 'csharp':
      case 'winforms':
      case 'adonet':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 8h6M9 12h6M9 16h6"/></svg>`;
      case 'java':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`;
      case 'cpp':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M10 9a3 3 0 1 0 0 6"/><path d="M15 11v2M14 12h2M19 11v2M18 12h2"/></svg>`;
      case 'typescript':
      case 'javascript':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>`;
      case 'php':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="12" rx="10" ry="7"/><text x="6" y="14" font-size="7" font-weight="bold" fill="currentColor">PHP</text></svg>`;
      case 'sql':
      case 'sqlserver':
      case 'mysql':
      case 'tidb':
      case 'supabase':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`;
      case 'firebase':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`;
      case 'bootstrap':
      case 'html5':
      case 'css3':
      default:
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
    }
  }
}
