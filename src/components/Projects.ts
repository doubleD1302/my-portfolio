import { Project, ProjectCategory } from '../types';
import { ProjectService, ProjectFilterOptions } from '../services/projectService';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { Skills } from './Skills';

export class Projects {
  private static container: HTMLElement;
  private static gridEl: HTMLElement;
  private static currentFilter: ProjectFilterOptions = {
    category: 'All',
    searchQuery: '',
    technologyId: undefined
  };

  public static render(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'section-wrapper';
    section.id = 'projects';
    this.container = section;

    section.innerHTML = `
      <div class="container-custom">
        <div class="section-header">
          <div class="section-badge">Engineering Portfolio</div>
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">
            Engineered systems demonstrating practical software architecture, relational data access, and full-stack capabilities.
          </p>
        </div>

        <!-- Filter and Search Bar -->
        <div class="projects-filter-bar">
          <div class="filter-pills-group" id="category-filter-pills">
            <button class="filter-pill active" data-category="All">All</button>
            <button class="filter-pill" data-category="Desktop">Desktop</button>
            <button class="filter-pill" data-category="Web">Web</button>
            <button class="filter-pill" data-category="Backend">Backend</button>
            <button class="filter-pill" data-category="Database">Database</button>
          </div>

          <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
            <div id="active-tech-pill-container" style="display: none;">
              <span class="badge" style="background: var(--color-primary); color: #fff; padding: 6px 12px; border-radius: 9999px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px;">
                <span id="active-tech-name">Tech</span>
                <button id="clear-tech-filter" style="background: none; border: none; color: #fff; cursor: pointer; font-size: 1rem; line-height: 1; padding: 0;">&times;</button>
              </span>
            </div>

            <div class="search-input-wrapper">
              <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                class="search-input" 
                id="project-search-input" 
                placeholder="Search projects by name, tech..."
                aria-label="Search projects"
              />
            </div>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid" id="projects-list-grid">
          <!-- Rendered dynamically -->
        </div>

        <!-- Empty State Message -->
        <div id="projects-empty-state" style="display: none; text-align: center; padding: 4rem 1rem;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" stroke-width="1.5" style="margin: 0 auto 1rem;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">No projects match your filter</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">Try clearing your search query or selecting a different category.</p>
          <button class="btn btn-outline btn-sm" id="btn-reset-filters">Reset Filters</button>
        </div>
      </div>
    `;

    const grid = section.querySelector<HTMLElement>('#projects-list-grid');
    if (grid) this.gridEl = grid;

    this.setupListeners(section);
    this.refreshProjects();

    // Hook Skills chip click to filter projects
    Skills.onTechSelect = (techId: string) => {
      this.filterByTechnology(techId);
    };

    return section;
  }

  private static setupListeners(section: HTMLElement): void {
    // Category tabs
    const pills = section.querySelectorAll<HTMLButtonElement>('.filter-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const cat = pill.getAttribute('data-category') as ProjectCategory;
        this.currentFilter.category = cat;
        this.refreshProjects();
      });
    });

    // Search input
    const searchInput = section.querySelector<HTMLInputElement>('#project-search-input');
    searchInput?.addEventListener('input', () => {
      this.currentFilter.searchQuery = searchInput.value;
      this.refreshProjects();
    });

    // Clear tech filter
    const clearTechBtn = section.querySelector<HTMLButtonElement>('#clear-tech-filter');
    clearTechBtn?.addEventListener('click', () => {
      this.clearTechnologyFilter();
    });

    // Reset button in empty state
    const resetBtn = section.querySelector<HTMLButtonElement>('#btn-reset-filters');
    resetBtn?.addEventListener('click', () => {
      this.currentFilter = { category: 'All', searchQuery: '', technologyId: undefined };
      if (searchInput) searchInput.value = '';
      pills.forEach(p => {
        if (p.getAttribute('data-category') === 'All') p.classList.add('active');
        else p.classList.remove('active');
      });
      this.hideTechPill();
      this.refreshProjects();
    });
  }

  public static filterByTechnology(techId: string): void {
    this.currentFilter.technologyId = techId;
    this.showTechPill(techId);
    this.refreshProjects();
  }

  public static clearTechnologyFilter(): void {
    this.currentFilter.technologyId = undefined;
    this.hideTechPill();
    this.refreshProjects();
  }

  private static showTechPill(techName: string): void {
    const container = this.container.querySelector<HTMLElement>('#active-tech-pill-container');
    const label = this.container.querySelector<HTMLElement>('#active-tech-name');
    if (container && label) {
      container.style.display = 'inline-flex';
      label.textContent = `Tech: ${techName.toUpperCase()}`;
    }
  }

  private static hideTechPill(): void {
    const container = this.container.querySelector<HTMLElement>('#active-tech-pill-container');
    if (container) {
      container.style.display = 'none';
    }
  }

  private static async refreshProjects(): Promise<void> {
    if (!this.gridEl) return;

    const projects = await ProjectService.getProjects(this.currentFilter);
    this.gridEl.innerHTML = '';

    const emptyState = this.container.querySelector<HTMLElement>('#projects-empty-state');

    if (projects.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';

      projects.forEach(project => {
        const card = ProjectCard.render(project, (p: Project) => {
          CaseStudyModal.open(p);
        });
        this.gridEl.appendChild(card);
      });
    }
  }
}
